import React from 'react';

const QuizComponent = ({ questions }) => {
  const renderChoices = choices =>
    choices.map((c, i) =>
        <span key={i}>{ c.value }{' '}</span>
    );

  const renderQuestions = questions.map(q => {
    return (
      <div key={q.qid}>
        { q.question }
        {' '}
        { renderChoices(q.choices) }
      </div>
    );
  });

  return (
    <div>
      { renderQuestions }
    </div>
  );
};

const Quiz = ({ hasStarted, questions }) => {
  return (
    <div>
      { hasStarted ?
        <QuizComponent questions={questions} />
      :''}
    </div>
  );
};

export default Quiz;
