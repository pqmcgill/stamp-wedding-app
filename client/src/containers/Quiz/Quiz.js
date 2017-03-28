import React from 'react';
import QuizQuestion from '../../components/QuizQuestion';

const QuizComponent = ({ questions, makeGuess }) => {
  const renderQuestions = questions.map(q =>
    <QuizQuestion
      key={q.qid}
      { ...q }
      makeGuess={ makeGuess }
    />
  );
  return (
    <div>
      { renderQuestions }
    </div>
  );
};

const Quiz = ({ hasStarted, questions, makeGuess }) => {
  return (
    <div>
      { hasStarted ?
        <QuizComponent questions={questions} makeGuess={makeGuess}/>
      :''}
    </div>
  );
};

export default Quiz;
