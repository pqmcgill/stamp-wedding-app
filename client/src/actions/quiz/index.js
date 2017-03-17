import * as types from '../../ActionTypes';

export const makeGuess = (qid, guess) => ({
    type: types.MAKE_GUESS,
    qid,
    guess
});


export const startQuiz = () => ({
    type: types.QUIZ_START
});
