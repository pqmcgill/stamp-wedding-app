import React from 'react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui';
import Paper from 'material-ui/Paper';
import CompatibleImg from '../CompatibleImg';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import smoothscroll from 'smoothscroll';
import { css } from 'aphrodite';
import style from './style';

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
		this.expandText = this.expandText.bind(this);
		this.state = {
			textExpanded: false
		};
  }

  componentDidUpdate(oldProps) {
    if (oldProps.completed === false && this.props.completed === true) {
      this.handleScrollTo();
    }
  }

  handleExpandChange(e, val) {
    this.props.makeGuess(
      this.props.qid,
      val
    );
  }

  handleScrollTo() {
    setTimeout(() => {
      const nextQuestion = document.getElementById(`target-question-${this.props.qid}`);
      if (nextQuestion) {
          smoothscroll(nextQuestion);
      }
    }, 0);
  }

	truncate(text) {
		return text.substring(0, 250) + '...';
	}

	expandText() {
		this.props.readMore(this.props.qid);
	}

  render() {
    return (
			<div className={ css(style.questionContainer)}>
				<Paper
					zDepth={1}
					className={css(style.timeline)}
				/>
				<Paper circle={true} 
					className={ css(style.moreCircle) }
					zDepth={2}
				>
				<span className={ 'princessSofia ' + css(style.moreInner) }>{ `201${this.props.qid + 1}`}</span>
			</Paper>
      <Paper
        id={`question-${this.props.qid}`}
        zDepth={3}
				className={ css(style.question) }
      >
        <Card expanded={this.props.completed} onExpandChange={this.handleScrollTo}>
					<CardTitle
						className='princessSofia'
						title={ `Question ${this.props.qid + 1} of 6`}
					/>
          <CardTitle
            title={ this.props.question }
          />
          <CardText>
            <RadioButtonGroup name="foo" 
              onChange={this.handleExpandChange} 
              className={ css(style.buttonGroup) }
              defaultSelected={ this.props.guess }
            >
              {
                this.props.choices.map((choice, i) => {
                  return <RadioButton
                    key={i}
										className={ css(style.radio) }
                    value={ choice.key }
                    label={ choice.value }
										disabled={ this.props.guess !== undefined }
                  />
                })
              }
            </RadioButtonGroup>
          </CardText>
          <CardMedia
						id={ `target-question-${this.props.qid}` }
            expandable={true}
          >
            <CompatibleImg
              imgName={ this.props.imgName }
              fallback="jpg"
            />
          </CardMedia>
          { this.props.guess === this.props.answer ?
            <CardTitle expandable={true} className={'quicksandBold ' + css(style.correct)}>
              { this.props.correctMsg }
            </CardTitle> :
            <CardTitle expandable={true} className={'quicksandBold ' + css(style.incorrect)}>
              { this.props.incorrectMsg }
            </CardTitle>
          }
					<CardText expandable={true}
						className={ css(style.blurb) }
					>
					{ !this.props.readingMore ? 
					<div>
						{this.truncate(this.props.rewardBlurb) + ' '} 
						<a className={ css(style.link) } onClick={ this.expandText }>Read more</a>
					</div> :
					<div>
						{ this.props.rewardBlurb }
					</div>
					}
          </CardText>

        </Card>
      </Paper>

		</div>
    );
  }
};

export default QuizQuestion;
