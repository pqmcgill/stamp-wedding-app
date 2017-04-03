import * as types from '../../ActionTypes';
import quiz, { question } from './';
import quizData from './testQuizData';
import {
    hasCompletedQuiz,
    activeQuestionIndex
} from './selectors';

it('should be defined', () => {
    expect(quiz).not.toBe(undefined);
});

it('should initialize the quiz data', () => {
    const action = { type: '@@INIT' };
    const nextState = quiz(undefined, action);
    expect(nextState).toEqual(quizData);
});

it('should not be started by default', () => {
    const action = { type: '@@INIT' };
    const nextState = quiz(undefined, action);
    expect(nextState.hasStarted).toBe(false);
});

it('should not be completed by default', () => {
    const action = { type: '@@INIT' };
    const nextState = quiz(undefined, action);
    expect(hasCompletedQuiz(nextState)).toBe(false);
});

it('should start the quiz after QUIZ_START action', () => {
    const action = { type: types.QUIZ_START };
    const prevState = quizData;
    const nextState = quiz(prevState, action);
    expect(nextState.hasStarted).toBe(true);
});

it('should initialize the first question after starting the quiz', () => {
    const action = { type: types.QUIZ_START };
    const prevState = quizData;
    const nextState = quiz(prevState, action);
    expect(activeQuestionIndex(nextState)).toBe(0);
});

it('should not yet be complete when the test starts', () => {
    const action = { type: types.QUIZ_START };
    const prevState = quizData;
    const nextState = quiz(prevState, action);
    expect(hasCompletedQuiz(nextState)).toBe(false);
});

it('should update question the user\'s choice upon an answer', () => {
  const prevState = {
    qid: 0,
    choices: [
      { key: 'a', value: 'foo', guessed: false },
      { key: 'b', value: 'bar', guessed: false },
      { key: 'c', value: 'foobar', guessed: false }
    ],
    completed: false,
    answer: 'c'
  };

  const action = {
    type: types.MAKE_GUESS,
    qid: 0,
    guess: 'b'
  };

  const nextState = question(prevState, action);
  expect(nextState.guess).toBe('b');
});

it('should update completed status of question upon an incorrect answer', () => {
    const prevState = {
        qid: 0,
        choices: [
            { key: 'a', value: 'foo', guessed: false },
            { key: 'b', value: 'bar', guessed: false },
            { key: 'c', value: 'foobar', guessed: false }
        ],
        completed: false,
        answer: 'c'
    };

    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'b'
    };

    const nextState = question(prevState, action);
    expect(nextState.completed).toBe(true);
});

it('should update the corret status of question upon an incorrect answer', () => {
	const prevState = {
		qid: 0,
		choices: [
			{ key: 'a', value: 'foo', guessed: false },
			{ key: 'b', value: 'bar', guessed: false },
			{ key: 'c', value: 'foobar', guessed: false }
		],
		completed: false,
		answer: 'c'
	};

	const action = {
		type: types.MAKE_GUESS,
		qid: 0,
		guess: 'b'
	};

	const nextState = question(prevState, action);
	expect(nextState.correct).toBe(false);
});

it('should update guessed status of question choice upon answering incorrectly', () => {
    const prevState = {
        qid: 0,
        choices: [
            { key: 'a', value: 'foo', guessed: false },
            { key: 'b', value: 'bar', guessed: false },
            { key: 'c', value: 'foobar', guessed: false }
        ],
        answer: 'c'
    };

    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'b'
    };

    const nextState = question(prevState, action);
    expect(nextState.choices[1].guessed).toBe(true);
});

it('should change the active question upon answering incorrectly', () => {
    const prevState = { ...quizData, hasStarted: true };
    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'b'
    };
    const prevActiveQuestion = activeQuestionIndex(prevState);
    const nextState = quiz(prevState, action);
    expect(activeQuestionIndex(nextState)).toBe(prevActiveQuestion + 1);
});

it('should update completed status of question upon a correct answer', () => {
    const prevState = {
        qid: 0,
        choices: [
            { key: 'a', value: 'foo', guessed: false },
            { key: 'b', value: 'bar', guessed: false },
            { key: 'c', value: 'foobar', guessed: false }
        ],
        answer: 'c',
        completed: false
    };

    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'c'
    };

    const nextState = question(prevState, action);
    expect(nextState.completed).toBe(true);
});

it('should update the guessed status of question upon answering correctly', () => {
    const prevState = {
        qid: 0,
        choices: [
            { key: 'a', value: 'foo', guessed: false },
            { key: 'b', value: 'bar', guessed: false },
            { key: 'c', value: 'foobar', guessed: false }
        ],
        answer: 'c'
    };

    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'c'
    };

    const nextState = question(prevState, action);
    expect(nextState.choices[2].guessed).toBe(true);
});

it('should update the active question upon answering correctly', () => {
    const prevState = { ...quizData, hasStarted: true };
    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'a'
    };
    const nextState = quiz(prevState, action);
    expect(activeQuestionIndex(nextState)).toBe(1);
});

it('should not yet be complete if only some questions have been answered correctly', () => {
    const prevState = { ...quizData, hasStarted: true };
    const action = {
        type: types.MAKE_GUESS,
        qid: 0,
        guess: 'a'
    };
    const nextState = quiz(prevState, action);
    expect(hasCompletedQuiz(nextState)).toBe(false);
});

it('should return -1 when asked for the active question after completing every question', () => {
    const prevState = { ...quizData, hasStarted: true };
    const guesses = ['a', 'c', 'b'];
    const nextState = guesses.reduce((acc, guess, i) => {
        return quiz(acc, {
            type: types.MAKE_GUESS,
            qid: i,
            guess: guess
        });
    }, prevState);
    expect(activeQuestionIndex(nextState)).toBe(-1);
});

it('should be complete if all questions have been answered correctly', () => {
    const prevState = { ...quizData, hasStarted: true };
    const guesses = ['a', 'c', 'b'];
    const nextState = guesses.reduce((acc, guess, i) => {
        return quiz(acc, {
            type: types.MAKE_GUESS,
            qid: i,
            guess: guess
        });
    }, prevState);
    expect(hasCompletedQuiz(nextState)).toBe(true);
});
