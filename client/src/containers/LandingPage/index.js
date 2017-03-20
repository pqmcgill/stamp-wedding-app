import React, { Component } from 'react';
import { connect } from 'react-redux';
import detectWebpSupport from '../../util/detectWebpSupport';
import CompatibleImg from '../../components/CompatibleImg';
import { css } from 'aphrodite';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import styles from './styles';
import Quiz from '../Quiz';
import { startQuiz } from '../../actions/quiz';

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
		const parallaxStyles = detectWebpSupport() ?
			css(styles.parallax, styles.parallaxWebp) :
			css(styles.parallax, styles.parallaxJpg);

		return (
			<div className={ css(styles.wrapper) }>
				<div className={ css(styles.content) }>
					<div className={ css(styles.antiWrapper) }>
						<Grid fluid>
							<Row center="xs">
								<Col>
									<CompatibleImg
										imgName="flower1"
										fallback="png"
										className={ css(styles.flower, styles.img) }
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
									<CompatibleImg
										imgName="flower2"
										fallback="png"
										className={ css(styles.flower, styles.flower2, styles.img) }
									/>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
				<div className={ parallaxStyles }>

				</div>
				<div className={ css(styles.quizWrapper) } onClick={ this.props.startQuiz }>
					<Grid fluid className={ css(styles.quizLink) + ' quicksandMedium' }>
						<Row center="xs">
							<Col xs={12}>
								Think you know Sam and Pat? Take the quiz to find out!
							</Col>
						</Row>
					</Grid>
				</div>
				<Quiz />
			</div>
		);
	}
}

App.contextTypes = contextTypes;

const mapDispatchToProps = dispatch => {
	return {
		startQuiz() {
			dispatch(startQuiz());
		}
	};
};

export default connect(() => ({}), mapDispatchToProps)(App);
