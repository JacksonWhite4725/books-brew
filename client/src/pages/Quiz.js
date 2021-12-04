import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const questions = [
        {
            questionText: 'Which of these beverages sounds most appealing to you?',
            answerOptions: [
                { answerText: 'Coffee' },
                { answerText: 'Orange Juice' },
                { answerText: 'Ginger Beer' },
                { answerText: 'Water' }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [srmValue, setSrmValue] = useState(0);
    const [abvValue, setAbvValue] = useState(0);
    const [ibuValue, setIbuValue] = useState(0);

    const handleAnswerOptionClick = () => {
        /* if (srmPoints, abvPoints, ibuPoints) {
            setSrmValue(srmValue + srmPoints);
            setAbvValue(abvValue + abvPoints);
            setIbuValue(ibuValue + ibuPoints);
        }
        */
       const nextQuestion = currentQuestion + 1;
       if (nextQuestion < questions.length) {
           setCurrentQuestion(nextQuestion);
       } else {
           setShowScore(true);
       }
    };

    return (
        <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='quiz-container'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='quiz-question'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='quiz-answers'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    )
};

export default Quiz;



/*
PSUEDOCODE QUIZ:

First, we need variables to track when user's enter data in the quiz:
- SRM (Light to dark) [1-40]: Numerical
- IBU (Bitterness) [1-120]: Numerical
- ABV (Alcohol content) [1-13]: Numerical
- Sour: Boolean

Next, we need a series of questions to determine user's interest in certain beers based on taste. I think it's important to categorize user's that are more knowledgable about beer and those that are relatively new.

Question 1: How much beer experience would you say you've had? [Rephrase later]
* None at all
* A little bit
* Quite a bit
* A lot

IF user answers "None" or "Little", send them down the beginner pipeline. Make results a little more broad to provide a box that's more diverse for exploration.

IF user answers "Quite a bit" or "Lots", send them down the expert pipeline. Questions are more specific to various beers.

Question 2 - Beginner Path: 
*/