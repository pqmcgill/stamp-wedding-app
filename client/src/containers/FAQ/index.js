import React from 'react';
import { css } from 'aphrodite';
import styles from './style';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

import RSVPButton from '../../components/RSVPButton';

import flower from '../../assets/flower2.webp';

export default props => (
	<Grid className="quicksandRegular">
		<Row className={ css(styles.dearGuests) }>
			<Col xs={12}>
				<h1 className={ css(styles.header, styles.salutation) + ' princessSofia' }>
					Dear Friends and Family
				</h1>

				<h2>Where will you stay?</h2>
				<p>
					We suggest you bring camping equipment and sleep on the property. We will be!
					SERIOUSLY, bring a tent. You can get drunk as a skunk and not need to go any
					further than a few stumbling feet to sleep.<br /><br />

					But if you want to stay in a hotel, the wedding will take place halfway between
					Columbus and Seymour. Roughly 15 min either way.
				</p>
				<div className={ css(styles.indented) }>
					<ul>
						<li>Indy Bound: Book a hotel on SR 46 in Columbus. It's right off the interstate.</li>
						<li>Louisville Bound: Book a hotel in Seymour. It's right off the interstate... Columbus has more to offer</li>
					</ul>
					<h3 className={ css(styles.centered) + ' quicksandMedium' }>
						There will not be a designated shuttle. If you plan to drink, plan accordingly.
						We want everyone to be safe.
					</h3>
					<br />
				</div>
				<h2>What do you wear?</h2>
				<p>
					It's an outdoor wedding. Forget the suit, but don't settle for jeans. The bride will be wearing flats,
					we hope you do too.<br /><br /><br />
				</p>

				<h2>And last but not least...</h2>
				<p>
					We are making a Facebook event! It's for guest-to-guest communication. You can post
					things like "Does anyone need a ride from the airport?" or "Does anyone have a tent I can borrow?"
					or "I'm not sleeping on the property. Will there be any sober drivers to catch a ride with?"
					Check it out!
				</p>

				<div className={ css(styles.centered) }>
					<h3>Let us know if you have any questions, especially if our website doesn't have the answers.</h3>
					<p className={ css(styles.header, styles.regards) + ' princessSofia'}>Love, <br /> Sam and Pat</p>
				</div>
			</Col>
		</Row>
		<Row center="xs" className={ css(styles.button) }>
			<Col>
				<RSVPButton />
			</Col>
		</Row>
		<Row center="xs" className={ css(styles.buttonText) }>
			<Col>
				<p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
			</Col>
		</Row>
		<Row center="xs,sm,md,lg" className={ css(styles.flowerWrapper) }>
			<Col xs={6}>
				<img className={ css(styles.flower) } src={ flower } role="presentation" />
			</Col>
		</Row>
	</Grid>

);
