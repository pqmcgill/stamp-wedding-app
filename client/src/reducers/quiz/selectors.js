import { createSelector } from 'reselect';

export const activeQuestionIndex = createSelector(
    state => {
        return state.questions;
    },
    questions => {
        return questions.findIndex(question => {
            return question.completed === false;
        });
    }
);

export const hasCompletedQuiz = createSelector(
    state => state,
    state => {
        return activeQuestionIndex(state) === -1;
    }
);
