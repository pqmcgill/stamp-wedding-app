import React from 'react';
import { css } from 'aphrodite';
import styles from './style';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';

//import RSVPButton from '../../components/RSVPButton';
import Map from '../../components/Map';

//import flower from '../../assets/flower2.webp';

export default props => (
	<div>
		<Grid>
			<Row center="xs" start="sm,md,lg" top="xs,sm,md,lg">
				<Col xs={12} sm={6} md={6} lg={6} className={ css(styles.directions) + ' quicksandRegular' }>
					<p className={ css(styles.directionsHeader) + ' princessSofia' }>
						Directions
					</p>
					<p>
						Suggested airports:<br /> 
						<strong className={'quicksandBold'}> Indianapolis</strong> or  
						<strong className={'quicksandBold'}> Louisville</strong><br />

						Columbus is just north of the halfway point between the two cities.
						<br />
					</p>

					<p>
						Coming <strong className={'quicksandBold'}>from Indy:</strong><br />

						Take I-65 south to exit 64 for IN-58 W toward Walesboro/Ogilville. Turn left onto IN-58 W and drive for 2.7mi. Turn right onto IN-11 S/Jonesville Rd. After 3.8mi, you have arrived! The destination will be on the right. 
					</p>	
					<p>
						Coming <strong className={'quicksandBold'}>from the 'Ville:</strong><br /><br />
						Take I-65 north to exit 55 for IN-11 toward Jonesville/Seymour. Turn right onto IN-11. After 5.5mi, you have arrived! The destination will be on your left.
					</p>
			</Col>
			<Col xs={12} sm={6} md={6} lg={6}
				className={ css(styles.address) + ' quicksandRegular' }
				>
				<Row >
					<Col xs={12}>
						<h3 className={ css(styles.header) + ' princessSofia' }>Address</h3>
						<p>
							12770 S Jonesville Rd<br />
							Columbus, IN 47201<br />
							*Jonesville Rd is also IN-11*
						</p>
					</Col>
    			<Col xs={12} sm={12} className={ css(styles.map) }>
    				<Map />
    			</Col>
				</Row>
			</Col>
			<Col xs={12} 
				className={ css(styles.thanks) + ' quicksandRegular'}>
				<Row center="xs,sm,md,lg">
					<Col xs={12}>
						<h2 className={ css(styles.header, styles.thanksHeader) + ' princessSofia' }>Thank you!</h2>
						<p>A huge thanks to Sam's Aunt Mindy and Uncle Troy for offering their home as the wedding location!</p>
						<p>THANK YOU!</p>
					</Col>
				</Row>
			</Col>
		</Row>
	</Grid>
</div>

);
