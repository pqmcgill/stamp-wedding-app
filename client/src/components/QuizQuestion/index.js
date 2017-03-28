import React from 'react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui';
import Paper from 'material-ui/Paper';
import CompatibleImg from '../CompatibleImg';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import smoothscroll from 'smoothscroll';

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
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
      console.log('checking...');
      const nextQuestion = document.getElementById(`question-${this.props.qid}`);
      console.log(nextQuestion);
      if (nextQuestion) {
          smoothscroll(nextQuestion);
      }
    }, 0);
  }

  render() {
    return (
      <Paper
        id={`question-${this.props.qid}`}
        zDepth={3}
        style={{width: '500px', margin: '20px auto'}}
      >
        <Card expanded={this.props.completed} onExpandChange={this.handleScrollTo}>
          <CardTitle
            title={ this.props.question }
          />
          <CardText>
            <RadioButtonGroup name="foo" onChange={this.handleExpandChange}>
              {
                this.props.choices.map((choice, i) => {
                  return <RadioButton
                    key={i}
                    value={ choice.key }
                    label={ choice.value }
                  />
                })
              }
            </RadioButtonGroup>
          </CardText>
          <CardMedia
            expandable={true}
          >
            <CompatibleImg
              imgName={ this.props.imgName }
              fallback="jpg"
            />
          </CardMedia>
          <CardText expandable={true}>
            { this.props.rewardBlurb }
          </CardText>

        </Card>
        <span id={`question-${this.props.qid}`} style={{visibility: 'hidden'}}></span>
      </Paper>
    );
  }
};

export default QuizQuestion;
