import * as types from '../../ActionTypes';
import quizData from './quizData';

import checkAnswer from './selectors';

export const choice = (state = {}, action) => {
    switch(action.type) {
        case types.MAKE_GUESS:
            if (action.guess === state.key) {
                return {
                    ...state,
                    guessed: true
                };
            }
        default:
            return state;
    }
};

export const question = (state = {}, action) => {
    switch(action.type) {
        case types.MAKE_GUESS:
            if (action.qid === state.qid && action.guess === state.answer) {
                return {
                    ...state,
                    choices: state.choices.map(c => choice(c, action)),
                    completed: true
                };
            }
        default:
            return {
                ...state,
                choices: state.choices.map(c => choice(c, action))
            };
    }
};

export default (state = quizData, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
};
