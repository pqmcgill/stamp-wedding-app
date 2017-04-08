import React from 'react';
import { connect } from 'react-redux'
import { css } from 'aphrodite';
import styles from './style';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { Link } from 'react-router-dom';

import RSVPButton from '../../components/RSVPButton';
import CompatibleImg from '../../components/CompatibleImg';

export const FAQ = props => (
	<Grid className="quicksandRegular">
		<Row className={ css(styles.dearGuests) }>
			<Col xs={12}>
				<h1 className={ css(styles.header, styles.salutation) + ' princessSofia' }>
					Dear Friends and Family
				</h1>
        <p>We've compiled a list of questions that you may have. <Link to='/contact'>Contact us</Link> if your questions aren't answered.</p>

        
				<h2>What should I wear?</h2>
				<p>
					It's an outdoor wedding. Forget the suit, but don't settle for jeans. The bride will be wearing flats,
					we hope you do too.<br /><br /><br />
				</p>
    
				<h2>Where will I stay?</h2>
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
					<p><a href='https://grouptravelorg.hotelplanner.com/EventPage3443976'>Here</a> are some available hotel options.</p>
          <br />
        </div>


        <h2>What does transportation look like?</h2>
        <p>
          You may park your car overnight at the wedding site, no problem.
        </p>
					<h3 className={ css(styles.centered) + ' quicksandMedium' }>
						There will not be a designated shuttle. If you plan to drink, plan accordingly.
						We want everyone to be safe.
					</h3>
          <p>
            If you can't stay overnight then Uber is a definite option, or simply coordinate a ride with other responsible
            guests. Read below for a link to our guest-2-guest communication serving facebook group.
          </p>
					<br />

        <h2>Do I need my I.D.?</h2>
        <p>
          The bartender wants to keep her license. Make sure you bring your I.D. We're offering wine and beer.
        </p>
        <br />

        <h2>Where is the reception?</h2>
        <p>The reception will take place on the property at the same location as the wedding.</p>
        <br />

        <h2>When can I setup my tent?</h2>
        <p>
          You can setup your tent any time you'd like. You can set up at 10:00am and head out for the day. You can set up 45
          minutes before the ceremony. You can even set up during the outdoor games portion of the wedding. Feel free to bring your
          camp chairs for extra comfort around the fire.
        </p>
        <br />

				<h2>I'm sleeping in a tent and am planning on exploring all day. Where can I get ready?</h2>
				<p>
					The wedding grounds will have mirrors and empty outlets available to you. There will also be a table of dry shampoo, hairspray and freshening up towelettes.
					You will have access to a shower before heading home the next day.
				</p>
				<br />

				<h2>Things to do?</h2>
				<h3>Columbus</h3>
				<ul>
					<li>Columbus is known worldwide for it's architecture.</li>
					<li>Zaharakos Ice Cream Parlor has been in business since 1900.</li>
					<li>Downtown Columbus is growing with restaurants, bars and shops.</li>
					<li>Mill Race Park is Sam's favorite childhood park.</li>
				</ul>
				<h3>Brown County</h3>
				<ul>
					<li>25 minute drive from Columbus (35 minutes from the wedding location).</li>
					<li>Brown County State Park is great for hiking. $7 in state/$9 out of state. Bring cash.</li>
					<li>Nashville, IN is rustic, darling and has many boutique shops/restaurants.</li>
				</ul>
				<h3>Edinburgh</h3>
				<ul>
					<li>Edinburgh is 14 min from Columbus</li>
					<li>It has an expansive premium outlet mall.</li>
				</ul>
				<br />

				<h2>And last but not least...</h2>
				<p>
          Please join our <a href="https://www.facebook.com/groups/412219222486294/" target="_blank">Facebook group!</a> It's for guest-to-guest communication. You can post
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
		<Row center="xs,sm,md,lg" className={ css(styles.flowerWrapper) }>
			<Col xs={6}>
				<CompatibleImg className={ css(styles.flower) } imgName="flower2" />
			</Col>
		</Row>
	</Grid>

);

const mapStateToProps = ({ user }) => ({
	hasSubmittedResponse: user.hasSubmittedResponse
});

export default connect(mapStateToProps)(FAQ);
