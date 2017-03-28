import { createSelector } from 'reselect';

export const activeQuestionIndex = createSelector(
    quiz => {
        return quiz.questions;
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

export const visibleQuestions = createSelector(
  state => state.quiz,
  quiz => {
    const activeIndex = activeQuestionIndex(quiz);
    const completed = quiz.questions.filter(q => q.completed);
    if (activeIndex >= 0) {
      return [
        ...completed,
        quiz.questions[activeIndex]
      ];
    } else {
      return completed;
    }
  }
);
