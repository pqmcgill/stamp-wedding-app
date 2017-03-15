import React from 'react';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import RSVPButton from '../../components/RSVPButton';
import CompatibleImg from '../../components/CompatibleImg';
import styles from './style';

export const Registry = props => (
	<Grid fluid className={ css(styles.container ) + ' quicksandRegular'}>
		<Row center="xs">
			<Col>
				<CompatibleImg
					className={ css(styles.flower) }
					imgName='flower1'
				/>
			</Col>
		</Row>
		<Row center="xs">
			<Col xs={11} md={8} lg={6}>
				<p className={ css(styles.text) }>In lieu of a traditional registry, we are asking for monetary gifts to go towards the down payment on a house.</p>
			</Col>
		</Row>
		<Row center="xs">
			<Col>
				<p className={ css(styles.thanks) + ' princessSofia' }>Thanks!</p>
			</Col>
		</Row>
		<Row center="xs" className={ css(styles.button) }>
			<Col>
				<RSVPButton hasSubmittedResponse={ props.hasSubmittedResponse }/>
			</Col>
		</Row>
		{ props.hasSubmittedResponse ?
			<Row center="xs" className={ css(styles.buttonText) }>
				<Col>
					<p>Thanks for your response!<br />The deadline to make changes is May 27, 2017.</p>
				</Col>
			</Row>
		:
			<Row center="xs" className={ css(styles.buttonText) }>
				<Col>
					<p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
				</Col>
			</Row>
		}
		<Row center="xs">
			<Col xs={6}>
				<CompatibleImg
					className={ css(styles.flower) }
					imgName='flower2'
				/>
			</Col>
		</Row>
	</Grid>
);

const mapStateToProps = ({ user }) => ({
	hasSubmittedResponse: user.hasSubmittedResponse
});

export default connect(mapStateToProps)(Registry);
