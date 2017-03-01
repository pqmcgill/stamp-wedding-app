import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styles from './style';
import RSVPButton from '../RSVPButton';

const style = StyleSheet.create(styles);

const Header = (props) => {
	const stickyStyle = props.isSticky ? { marginTop: '40px' } : {};

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
									<Switch>
										<Route path='/rsvp'/>
										<Route render={ () =>
											<RSVPButton
												reminderText="Deadline to RSVP"
												deadlineText="May 27, 2017"
											/>
										} />
									</Switch>
								</Col>
								<Col xs={12} sm={6} md={6} lg={6}>
									<Row center="xs" start="sm,md,lg">
										<Col className={ css(style.rsvpText) } xs={12} sm={12}>
											Deadline to RSVP
										</Col>
										<Col className={ css(style.rsvpText) } xs={12} sm={12}>
											May 27, 2017
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}
export default Header;
