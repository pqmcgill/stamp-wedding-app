import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styles from './style';
import RSVPButton from '../RSVPButton';
import { logout } from '../../actions/user'

const style = StyleSheet.create(styles);

export const Header = (props) => {
	const stickyStyle = props.isSticky ? { marginTop: '40px' } : {};

  const handleLogout = () => {
    props.logout();
    props.history.push('/');
  };

  const Logout = () => <a className={ css(style.logout) } onClick={ handleLogout }>Logout</a>;
  const RSVP = () => <RSVPButton
    hasSubmittedResponse={ props.hasSubmittedResponse }
  />;

  const ShowButton = () => {
    return <Switch>
        <Route path='/rsvp' component={ Logout } />
        <Route path='/guest-management' component={ Logout } />
        <Route component={ RSVP } />
      </Switch>;
  };

	return (
		<div className={ css(style.wrapper) }>
			<Grid id="header" fluid className={ `${css(style.component, style.header)} princessSofia` } style={ stickyStyle }>
				<Row middle="xs" center="xs" around="sm,md,lg">
					<Col xs={12} sm={12} md={6} lg={5}>
						<div className={ css(style.title) }>
							<Link className={ css(style.titleLink) } to='/welcome'>
								Sam & Pat
							</Link>
						</div>
					</Col>
					<Col xs={12} sm={6} md={6} lg={6} >
						<div className={ `${css(style.rsvpContainer)} quicksandRegular` }>
							<Row middle="xs,sm,md,lg" end="sm,md,lg">
								<Col xs={12} sm={6} md={6} lg={6}
								className={ css(style.rsvp) }
								>
                  <ShowButton />
								</Col>
								<Col xs={12} sm={6} md={6} lg={6}>
									{ props.hasSubmittedResponse ?
										<Row center="xs" start="sm,md,lg">

											<Col className={ css(style.rsvpText) } xs={12} sm={12}>
                        Thanks for your response!
											</Col>
											<Col className={ css(style.rsvpText) } xs={12} sm={12}>
												Deadline to make changes
											</Col>
											<Col className={ css(style.rsvpText) } xs={12} sm={12}>
												May 27, 2017
											</Col>
										</Row>
									:
										<Row center="xs" start="sm,md,lg">

											<Col className={ css(style.rsvpText) } xs={12} sm={12}>
												Deadline to RSVP
											</Col>
											<Col className={ css(style.rsvpText) } xs={12} sm={12}>
												May 27, 2017
											</Col>
										</Row>
									}
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

const mapStateToProps = ({ user }) => ({
	hasSubmittedResponse: user.hasSubmittedResponse
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
