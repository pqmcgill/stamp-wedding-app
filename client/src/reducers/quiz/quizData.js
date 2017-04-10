export default {
    hasStarted: false,
    questions: [
        {
            qid: 0,
            question: 'When/Where did they meet?',
            choices: [
                { key: 'a', value: '9-10-2010 / Columbus, IN', guessed: false },
                { key: 'b', value: '9-10-2011 / Bloomington, IN', guessed: false },
                { key: 'c', value: '9-10-2012 / Indianapolis, IN', guessed: false }
            ],
            answer: 'b',
            rewardBlurb: 'Sam and Pat met thanks to their friend Mike. Sam met Mike while working at an IU football game. They hit it off well and he invited her to a party. Sam saw Pat as soon as she entered Mike’s apartment and instantly knew that he was someone special. Pat knew she was the one, but only after Sam initiated conversation with him. P.S. Mike is the one in the red. He’s their favorite person.',
            completed: false,
						imgName: 'friends',
						readingMore: false,
            correctMsg: 'You got it!',
						incorrectMsg: 'Well, crap on a stick! The correct answer is Bloomington, IN 9-10-2011'
        },
        {
            qid: 1,
            question: 'True or False - Pat and Sam were both extremely nervous for their first kiss',
            choices: [
                { key: 'a', value: 'True', guessed: false },
                { key: 'b', value: 'False', guessed: false }
            ],
            answer: 'a',
            rewardBlurb: 'Having been friends now for roughly a year, the two of them had finally made the decision to cut the crap and start dating. They dated for a little while (17 days, to be precise), and during that time Pat really wanted to kiss Sam, but she was freaking out, and would subtly maneuver herself away from any such opportunity. They had been close friends for over a year, so can you really blame her? Pat maintained his sanity by subscribing to the principle that good things happen to those who wait. On the night of 12/21/12, Sam was dropping Pat off at his apartment and he really wanted to celebrate the fact that the world didn\'t end with a kiss. Sam shut him down. He was bummed and got out of the car. They were set to go to their respective homes for the holidays, and she realized that this would be the last time they would see each other for a while, so she jumped out of her car and yelled, "Wait!" She went running after him in the snow and cartoonishly slipped, then fell on the ice. He laughed, they kissed, and haven\'t stopped ever since.',
            completed: false,
						imgName: 'kiss',
						readingMore: false,
            correctMsg: 'That is correct! They were shaking in their boots!',
						incorrectMsg: 'What in the Sam Hill are you talking about? They were both nervous. It was a 1st kiss.'
        },
        {
            qid: 2,
            question: 'Who said I love you 1st? Sam or Pat?',
            choices: [
                { key: 'a', value: 'Sam', guessed: false },
                { key: 'b', value: 'Pat', guessed: false }
            ],
            answer: 'b',
            imgName: 'I_love_you',
            rewardBlurb: 'Sam could see the look of love in Pat’s eyes the morning of January 30th, 2013. She spent the whole day asking him what he was thinking, but he refused to tell her. Later that night he put her hand on his heart and said, “My heart is beating fast because I’m in love with you.” Sam put his hand on her heart and said, “My heart is skipping because I’m in love with you.” He’s called her Skippy from that night forward. ',
						completed: false,
						readingMore: false,
            correctMsg: 'You\'d think it was Sam... her being the talker and all, but you\'re right... it was Pat.',
						incorrectMsg: 'I know what you\'re thinking... Sam\'s the talker, but it was Pat who said "I love you" 1st.'
        },
        {
            qid: 3,
            question: 'Where was their 1st trip together?',
            choices: [
                { key: 'a', value: 'Ireland', guessed: false },
                { key: 'b', value: 'Catalina Island', guessed: false },
                { key: 'c', value: 'Mackinac Island', guessed: false }
            ],
            answer: 'c',
            imgName: 'mackinac',
            rewardBlurb: 'Way back when the couple first started dating they laid out everything they would need as individuals and as a couple. Traveling the world was near the top of Sam\'s list. Pat, with a much more humble worldview, never really saw travelling as a priority. "... what with all the packing, and the driving, and the airports, and the planning... it\'s a whole thing!", said Pat. "I\'ll just have to go on my own then!", exclaimed Sam. Pat, landing on the notion that somebody has to carry the suitcase, decided that he would follow, and with that, they set off the weekend of May 31, 2014 on their first adventure together to Mackinac Island. They\'ve since been on an expedition to Portugal (stopping in Ireland on the way), Catalina Island with their friend and borderline life partner, Suzanne Perkett, another extended two week stay in Ireland including a country-wide road trip, and they\'ll soon be honeymooning in Italy and Greece... with a pit stop in Ireland, of course.',
						completed: false,
						readingMore: false,
            correctMsg: 'You got it!',
						incorrectMsg: 'Oopsy Daisy! Mackinac Island was their 1st vacation together.'
        },
        // TODO: revise this question
        {
            qid: 4,
            question: 'True or False - The couple signed their 1st lease 4 months after dating, but didn’t permanently live together until 2015... 2 years later. ',
            choices: [
                { key: 'a', value: 'True', guessed: false },
                { key: 'b', value: 'False', guessed: false },
            ],
            answer: 'a',
            imgName: 'chicago',
            rewardBlurb: 'Pat graduated from IU before Sam did. The plan was to live together in Bloomington while he tried to find work in the area. They signed their first lease! Unfortunately, Bloomington proved to not exactly be a technology hub (go figure), so he was forced to expand his horizons. He soon landed a gig in Indy just when their move in date was set to happen. The relationship experienced its first case of “long-distance”. The couple endured. When that first job didn’t quite work out for reasons that are dumb, Pat moved back to Bloomington to be with Sam for a short while. In a matter of weeks, however, he received another call from a prospective employer… this time based in Chicago. Pat again set off to chase his career, and Sam again stayed behind to finish her educational obligations. The feeling of distance between them was only reciprocally related to their already strong devotion and trust for one another. Even Sam’s acceptance for an 8 week overseas program during this period didn’t make them flinch. Finally, after all this time, she moved to Chicago to be with Pat, and they now live together in Indy and are loving it!',
						completed: false,
						readingMore: false,
						correctMsg: 'You\'re right! These two aren\'t a pair of snails. They move fast!',
						incorrectMsg: 'These two aren\'t a pair of snails. They move fast!'
				},
        {
            qid: 5,
            question: 'Sam and Pat are already married! Do you know how the "proposal" happened?',
            choices: [
                { key: 'a', value: 'Sam\'s school doesn\'t offer insurance, so she asked Pat if he would elope with her and have a wedding later.', guessed: false },
                { key: 'b', value: 'Sam found the ring in Pat\'s closet. Pat felt bad about the surprise being ruined and suggested they elope', guessed: false },
								{ key: 'c', value: 'Pat said the pressure of a proposal was too much and asked Sam if she\'d elope with him', guessed: false },
            ],
            answer: 'a',
            imgName: 'marriage',
						rewardBlurb: 'Sam needed insurance. She asked Pat if he would elope with her and he agreed to be her happily insured husband. They eloped 4 days later on July 18, 2016. Sam wore a dress that she purchased 3 years prior. She wasn\'t sure how they would get married, but she knew they would and she wanted to be prepared.',
						completed: false,
						readingMore: false,
            correctMsg: 'Nothing says "love" more than offering to share some decent health benefits.',
						incorrectMsg: 'Nope! Never underestimate the power of decent health benefits.'
        }
    ],

};
