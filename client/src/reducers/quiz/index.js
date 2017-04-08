import * as types from '../../ActionTypes';

let quizData;

// load mock data in the context of tests
if (process.env.NODE_ENV === 'test') {
  quizData = require('./testQuizData').default;
} else {
  quizData = require('./quizData').default;
}

export const choice = (state = {}, { type, guess }) => {
  if (type === types.MAKE_GUESS && guess === state.key) {
    return {
      ...state,
      guessed: true
    };
  } else {
    return state;
  }
};

export const question = (state = {}, action) => {
  const { type, qid, guess } = action;
  if ( type === types.MAKE_GUESS && qid === state.qid) {
		const correct = guess === state.answer;
    return {
      ...state,
      choices: state.choices.map(c => choice(c, action)),
			completed: true,
      correct,
      guess
    };
  } else {
    return {
      ...state,
      choices: state.choices.map(c => choice(c, action))
    };
  }
};

export default (state = quizData, action) => {
	switch(action.type) {
		case types.LOGOUT:
			return quizData;
		case types.QUIZ_START:
			return {
			...state,
			questions: state.questions.map(q => question(q, action)),
				hasStarted: true
		};
		case types.MAKE_GUESS:
			return {
			...state,
			questions: state.questions.map(q => question(q, action))
		};
		case types.RETAKE_QUIZ:
			return {
			...quizData,
			hasStarted: true
		};
		default:
			return state;
	}
};
