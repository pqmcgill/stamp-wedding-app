import * as types from '../../ActionTypes';

export const makeGuess = (qid, guess) => ({
    type: types.MAKE_GUESS,
    qid,
    guess
});

export const readMore = (qid) => ({
	type: types.READ_MORE,
	qid
});

export const startQuiz = () => ({
    type: types.QUIZ_START
});

export const retakeQuiz = () => ({
	type: types.RETAKE_QUIZ
});
