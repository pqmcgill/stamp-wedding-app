export default {
    hasStarted: false,
    questions: [
        {
            qid: 0,
            question: 'what is your name?',
            choices: [
                { key: 'a', value: 'Pat', guessed: false },
                { key: 'b', value: 'Sam', guessed: false },
                { key: 'c', value: 'um, I don\'t remember', guessed: false }
            ],
            answer: 'a',
            rewardImg: 'stamp',
            rewardBlurb: 'yadda yadda yadda, one time we did so and so and it was swell',
            completed: false
        },
        {
            qid: 1,
            question: 'What is your quest?',
            choices: [
                { key: 'a', value: 'To seek the holy grail!', guessed: false },
                { key: 'b', value: 'To find the answer to life, the universe, and everything!', guessed: false },
                { key: 'c', value: 'To finish this damn app already!', guessed: false }
            ],
            answer: 'c',
            rewardImg: 'stamp',
            rewardBlurb: 'yadda yadda yadda, one time we did so and so and it was swell',
            completed: false
        },
        {
            qid: 2,
            question: 'What is your favorite color?!',
            choices: [
                { key: 'a', value: 'Red', guessed: false },
                { key: 'b', value: 'Blue', guessed: false },
                { key: 'c', value: 'Blue... no, GreeeeeaaaAAAAAHHHHHHHHhhhhhh...', guessed: false }
            ],
            answer: 'b',
            rewardImg: 'stamp',
            rewardBlurb: 'yadda yadda yadda, one time we did so and so and it was swell',
            completed: false
        }
    ],

};
