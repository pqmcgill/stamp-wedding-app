import { connect } from 'react-redux';
import { makeGuess, retakeQuiz } from '../../actions/quiz';
import { 
	hasCompletedQuiz,
	visibleQuestions,
	score 
} from '../../reducers/quiz/selectors';
import Quiz from './Quiz';

const mapStateToProps = (state) => ({
  hasStarted: state.quiz.hasStarted,
	hasSubmittedResponse: state.user.hasSubmittedResponse,
	hasCompletedQuiz: hasCompletedQuiz(state.quiz),
  questions: visibleQuestions(state),
  score: score(state.quiz)
});

const mapDispatchToProps = dispatch => {
	return {
		makeGuess() {
			dispatch(makeGuess.apply(null, arguments));
		},

		retakeQuiz() {
			dispatch(retakeQuiz());
		}
	};
};

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default QuizContainer;
