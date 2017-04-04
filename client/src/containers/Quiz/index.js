import { connect } from 'react-redux';
import { makeGuess } from '../../actions/quiz';
import { visibleQuestions, score } from '../../reducers/quiz/selectors';
import Quiz from './Quiz';

const mapStateToProps = (state) => ({
  hasStarted: state.quiz.hasStarted,
	hasSubmittedResponse: state.user.hasSubmittedResponse,
  questions: visibleQuestions(state),
  score: score(state.quiz)
});

const mapDispatchToProps = dispatch => {
	return {
		makeGuess() {
			dispatch(makeGuess.apply(null, arguments));
		}
	};
};

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default QuizContainer;
