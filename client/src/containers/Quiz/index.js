import React from 'react';
import { connect } from 'react-redux';
import Quiz from './Quiz';

const mapStateToProps = ({ quiz }) => ({
    hasStarted: quiz.hasStarted,
    questions: quiz.questions
});

const QuizContainer = connect(mapStateToProps)(Quiz);

export default QuizContainer;
