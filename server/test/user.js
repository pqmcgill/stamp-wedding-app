import { request, expect } from 'chai';
import { decode } from 'jwt-simple';
import mongoose from 'mongoose';
import User from '../app/models/user';
import authenticate from './util/authHelper';

import server from '../index';

let adminToken, guestToken;

describe('/users', () => {
		beforeEach(done => {
			User.remove({}, (err) => {
				if (err) return done(err);
				const adminUser = new User({ access: 'admin', username: 'adminUser', password: 'adminPassword' });
				const guestUser = new User({ access: 'guest', username: 'guestUser', password: 'guestPassword' });
				adminUser.save().then(() => {
					return guestUser.save().then(() => done());
				}).catch((err) => {
					done(err);
				});
			});
		});

	describe('POST \'/authenticate\'', () => {
		it('should send a JWT upon successfull authentication', done => {
			request(server)
				.post('/api/user/authenticate')
				.send({ username: 'adminUser', password: 'adminPassword' })
				.end((err, res) => {
					if (err) return done(err);
					expect(res.body.success).to.be.true;
					expect(res.body.user.token).to.not.be.undefined;
					done();
				});
		});

		it('should return success:false for invalid username', done => {
			request(server)
				.post('/api/user/authenticate')
				.send({ username: 'testuser', password: 'adminPassword' })
				.end((err, res) => {
					expect(err).to.not.be.null;
					expect(res).to.have.status(401);
					expect(res.body.success).to.be.false;
					expect(res.body.user).to.be.undefined;
					done();
				});
		});

		it('should return success:false for invalid password', done => {
			request(server)
				.post('/api/user/authenticate')
				.send({ username: 'adminUser', password: 'testpassword' })
				.end((err, res) => {
					expect(err).to.not.be.null;
					expect(res).to.have.status(401);
					expect(res.body.success).to.be.false;
					expect(res.body.user).to.be.undefined;
					done();
				});
		});
	});
	// Post '/authenticate'

	describe('POST \'/\'', () => {
		it('should return Unauthorized error if token is not used', done => {
			request(server)
				.post('/api/user')
				.send({ username: 'newUser', password: 'newPassword', access: 'guest' })
				.end((err, res) => {
					expect(err).to.not.be.null;
					expect(res).to.have.status(401);
					expect(res.body.success).to.be.false;
					done();
				});
		});

		it('should restrict access to admins only', done => {
			authenticate(server, { username: 'guestUser', password: 'guestPassword' }, (err, user) => {
				if (err) return done(err);

				request(server)
					.post('/api/user')
					.set('Authorization', user.token)
					.send({ username: 'newUser', password: 'newPassword', access: 'guest' })
					.end((_err, _res) => {
						expect(_res).to.have.status(401);
						done();
					});
			});
		});

		it('should successfully create a user', done => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.post('/api/user')
					.set('Authorization', user.token)
					.send({ username: 'foo', password: 'NewPassword', access: 'guest' })
					.end((err, res) => {
						if (err) return done(err);
						expect(res).to.have.status(201);
						const success = res.body.success;
						expect(success).to.be.true;
						done();
					});
			});
		});

		it('should fail if missing username', done => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.post('/api/user')
					.set('Authorization', user.token)
					.send({ password: 'adminPassword' })
					.end((err, res) => {
						expect(err).to.not.be.null;
						expect(res).to.have.status(409);
						const { success, msg } = res.body;
						expect(success).to.be.false;
						done();
					});
			});
		});

		it('should fail if missing password', done => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.post('/api/user')
					.set('Authorization', user.token)
					.send({ username: 'testName' })
					.end((err, res) => {
						expect(err).to.not.be.null;
						expect(res).to.have.status(409);
						const { success, msg } = res.body;
						expect(success).to.be.false;
						done();
				});
			});
		});

		it('shouldn\'t allow creation of duplicate users', done => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.post('/api/user')
					.set('Authorization', user.token)
					.send({ username: 'guestUser', password: 'guestPassword' })
					.end((err, res) => {
						expect(err).to.not.be.null;
						expect(res).to.have.status(409);
						done();
					});
			});
		});
	});
		// end POST /

	describe('GET \'/\'', () => {
		it('should return array of users', done => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.get('/api/user')
					.set('Authorization', user.token)
					.end((err, res) => {
						if (err) return done(err);
						const { guests } = res.body;
						expect(Object.keys(guests).length).to.be.greaterThan(0);
						done();
					});
			});
		});
	});
	// end GET '/'

	describe('DELETE \'/\'', () => {
		it('should delete a guest given its id', (done) => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				User.findOne({ username: 'guestUser' }, (err, guest) => {
					request(server)
						.delete('/api/user/' + guest._id)
						.set('Authorization', user.token)
						.end((err, res) => {
							if (err) return done(err);
							expect(res.body.success).to.be.true;
							User.findOne({ username: 'guestUser' }, (err, guest) => {
								expect(guest).to.be.null;
								done();
							});
						});
				});
			});
		});

		it('should throw not succeed if the guest was not found', (done) => {
			authenticate(server, { username: 'adminUser', password: 'adminPassword' }, (err, user) => {
				if (err) return done(err);
				request(server)
					.delete('/api/user/123456789012345678901234')
					.set('Authorization', user.token)
					.end((err, res) => {
						if (err) return done(err);
						expect(res.body.success).to.be.false;
						done();
					});
			});
		});
	});

  describe('PUT \'/:id\'', () => {
    it('should successfully update guest and plusOne confirmations', (done) => {
      authenticate(server, { username: 'guestUser', password: 'guestPassword' }, (err, user) => {
        if (err) return done(err);

				User.findOne({ username: 'guestUser' }, (err, guest) => {
          request(server)
            .put(`/api/user/${guest._id}`)
            .set('Authorization', user.token)
            .send({ guestRSVP: "YES", plusOneRSVP: "YES" })
            .end((err, res) => {
              if (err) return done(err);
              expect(res.body.success).to.be.true;
              expect(res.body.updated.plusOneRSVP).to.equal('YES');
              expect(res.body.updated.guestRSVP).to.equal('YES');
			  expect(res.body.updated.hasSubmittedResponse).to.equal(true);
              done();
            });
        });
      });
    });

    it('should not update anything if wrong data is passed', (done) => {
      authenticate(server, { username: 'guestUser', password: 'guestPassword' }, (err, user) => {
        if (err) return done(err);

				User.findOne({ username: 'guestUser' }, (err, guest) => {
          request(server)
            .put(`/api/user/${guest._id}`)
            .set('Authorization', user.token)
            .send({ guestFlonfirmation: true, plusOneConfurmacion: true })
            .end((err, res) => {
              if (err) return done(err);
              expect(res.body.success).to.be.true;
              done();
            });
        });
      });
    });
  });

});
