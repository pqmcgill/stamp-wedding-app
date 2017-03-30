import React from 'react';
import QuizQuestion from '../../components/QuizQuestion';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import { css } from 'aphrodite';
import style from './style';

const QuizComponent = ({ questions, makeGuess }) => {
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
    </Col>
  );
};

const Quiz = ({ hasStarted, questions, makeGuess }) => {

	return hasStarted ? (
		<Grid className={ css(style.quiz) }>
			<Row center='xs,sm,md,lg'>
				<QuizComponent questions={questions} makeGuess={makeGuess}/>
			</Row>
		</Grid>
	) : <span style={{display:'none'}} />; 
};

export default Quiz;
