import React, { Component } from 'react';
import { connect } from 'react-redux';
import flowerImg from '../../assets/flower1.webp';
import flower2Img from '../../assets/flower2.webp';
import { css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styles from './styles';

const contextTypes = {
	router: React.PropTypes.object
};

export class App extends Component {
	constructor (props, context) {
		super(props, context);
		this.linkTo = this.linkTo.bind(this);
	}

	linkTo (path) {
		this.context.router.transitionTo(path);
	}

	render() {
		return (
			<div className={ css(styles.wrapper) }>
				<div className={ css(styles.content) }>
					<div className={ css(styles.antiWrapper) }>
						<Grid fluid>
							<Row center="xs">
								<Col>
									<img className={ css(styles.flower, styles.img) }
										src={ flowerImg }
										role="presentation"
									/>
								</Col>
							</Row>
							<Row center="xs" middle="xs">
								<Col xs={12}
									className={ css(styles.info) + ' quicksandLight' }
									onClick={ this.linkTo.bind(null, '/info') }
								>
									<h2 className={ css(styles.infoHeader) + ' quicksandRegular' }>June 10, 2017 4:30pm</h2>
								</Col>
							</Row>
							<Row center="xs">
								<Col xs={6}>
									<img className={ css(styles.flower, styles.flower2, styles.img) }
										src={ flower2Img }
										role="presentation"
									/>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
				<div className={ css(styles.parallax) }>

				</div>
				<div className={ css(styles.quizWrapper) }>
					<Grid fluid className={ css(styles.quizLink) + ' quicksandMedium' }>
						<Row center="xs">
							<Col xs={12}>
								Think you know Sam and Pat? Take the quiz to find out!
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

App.contextTypes = contextTypes;

export default connect()(App);
