import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
  guestName: {
    type: String
  },
  guestRSVP: {
    type: String,
    // default: "NO"
  },
	guestDinnerSelection: {
		type: String
	},
	guestBeverageSelection: {
		type: String
	},
  plusOneName: {
    type: String
  },
  plusOneRSVP: {
    type: String,
    // default: "NO"
  },
  hasSubmittedResponse: {
	  type: Boolean,
	  default: false
  },
	plusOneDinnerSelection: {
		type: String
	},
	plusOneBeverageSelection: {
		type: String
	},
	overnightSelection: {
		type: String
	},
	iceCreamSelections: {},
	password: {
		type: String,
		required: true
	},
	access: {
		type: String,
		required: true
	},
	affiliation: {
		type: String
	},
});

//Useful for saving mission critical security information,
//However, for our purposes, security is trumped by UX.
//UserSchema.pre('save', function(next) {
//	if (this.isModified('password') || this.isNew) {
//		genSalt(10, (err, salt) => {
//			if (err) return next(err);
//
//			hash(this.password, salt, (err, hash) => {
//				if (err) return next(err);
//				this.password = hash;
//				return next();
//			});
//		});
//	} else {
//		return next();
//	}
//});

UserSchema.methods.comparePassword = function (passw, cb) {
	//compare(passw, this.password, (err, isMatch) => {
	//	if (err) return cb(err);
	//	cb(null, isMatch);
	//});
	cb(null, passw === this.password);
};

export default mongoose.model('user', UserSchema);
