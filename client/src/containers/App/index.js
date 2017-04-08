import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdminOnly from '../../hocs/AdminOnly';
import Authenticated from '../../hocs/Authenticated';
import asyncComponent from '../../hocs/asyncComponent';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import LandingPage from '../LandingPage';

const RSVPForm = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../RSVPForm', () => {
			res(require('../RSVPForm').default);
		});
	});
});

const GuestManagement = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../GuestManagement', () => {
			res(require('../GuestManagement').default);
		});
	});
});

const Contact = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../Contact', () => {
			res(require('../Contact').default);
		});
	});
});

const Registry = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../Registry', () => {
			res(require('../Registry').default);
		});
	});
});

const Location = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../Location', () => {
			res(require('../Location').default);
		});
	});
});

const LoginForm = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../LoginForm', () => {
			res(require('../LoginForm').default);
		});
	});
});

const FAQ = asyncComponent(() => {
	return new Promise((res) => {
		require.ensure('../FAQ', () => {
			res(require('../FAQ').default);
		});
	});
});

import { css, StyleSheet } from 'aphrodite';

const style = StyleSheet.create({
	wrapper: {
		overflowX: 'hidden',
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'column'
	},

	content: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column'
	}

});

const AuthRSVPForm = Authenticated(RSVPForm);
const AdminGuestManagement = AdminOnly(GuestManagement);

class App extends Component {
	constructor (props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
		 isSticky: false
		};
	}
	
	componentWillReceiveProps(nextProps) {
		const { location, history: { action }} = nextProps;
		if (location !== this.props.location) {
			window.scrollTo(0, 0);

			// override browser history scroll restoration when using back button
			if ('scrollRestoration' in history) {
				history.scrollRestoration = 'manual';
			}
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		if (document.getElementById('header')) {
			const headerHeight = document.getElementById('header').clientHeight;
			const scrollTop = e.srcElement.scrollingElement.scrollTop;

			if (scrollTop + 1 >= headerHeight) {
				this.setState({
					isSticky: true
				});
			} else {
				this.setState({
					isSticky: false
				});
			}
		}
	}


	render () {
    const StickyHeader = (props) => {
      return <Header { ...props } isSticky={ this.state.isSticky } />
    };

		return (
			<div className={ css(style.wrapper) }>
				<Switch>
					<Route path='/login' component={ LoginForm } />
					<Route render={() =>
						<div>
              <Route path='/' component={ StickyHeader } />
							<NavBar isSticky={ this.state.isSticky }/>
							<div className={ css(style.content) }>
								<Switch>
									<Route path='/location' component={ Location } />
									<Route path='/faq' component={ FAQ } />
									<Route path='/guest-management' component={ AdminGuestManagement }
									/>
									<Route path='/rsvp' component={ AuthRSVPForm } />
									<Route path='/registry' component={ Registry } />
									<Route path='/contact' component={ Contact } />
									<Route path='/welcome' component={ LandingPage } />
									<Redirect to='/welcome' />
								</Switch>
							</div>
						</div>
					} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
