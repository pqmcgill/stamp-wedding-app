import React from 'react';
import QuizQuestion from '../../components/QuizQuestion';
import Score from '../../components/Score';
import CompatibleImg from '../../components/CompatibleImg';
import RSVPButton from '../../components/RSVPButton';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import style from './style';

const QuizComponent = ({ questions, makeGuess, score }) => {
  const renderQuestions = questions.map(q =>
    <QuizQuestion
      key={q.qid}
      { ...q }
      makeGuess={ makeGuess }
    />
  );
  return (
    <Col xs={12} sm={10} md={8} lg={8}>
      { renderQuestions }
      { score >= 0 ? <Score score={score} total={questions.length} /> : '' }
    </Col>
  );
};

const Quiz = ({ hasStarted, hasSubmittedResponse, questions, score, makeGuess }) => {

	return hasStarted ? (
		<Grid className={ css(style.quiz) }>
			<Row center='xs,sm,md,lg'>
				<QuizComponent questions={questions} makeGuess={makeGuess} score={score}/>
			</Row>
      <Row center="xs" className={ css(style.rsvpButton) }>
        <Col>
          <RSVPButton hasSubmittedResponse={ hasSubmittedResponse }/>
        </Col>
      </Row>
      { hasSubmittedResponse ?
      <Row center="xs" className={ css(style.rsvpButtonText) }>
        <Col>
          <p>Thanks for your response!<br />The deadline to make changes is May 27, 2017.</p>
        </Col>
      </Row>
      :
      <Row center="xs" className={ css(style.rsvpButtonText) }>
        <Col>
          <p>Don't forget to RSVP!<br />The deadline is May 27, 2017.</p>
        </Col>
      </Row>
      }
      <Row center="xs">
        <Col xs={6}>
          <CompatibleImg className={ css(style.flower, style.flower2, style.img) }
            imgName="flower2"
          />
        </Col>
      </Row>
		</Grid>
	) : <span style={{display:'none'}} />; 
};

export default Quiz;
