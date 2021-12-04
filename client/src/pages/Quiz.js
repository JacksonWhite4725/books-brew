import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const questions = [
        {
            questionText: 'Which of these beverages sounds most appealing?',
            answerOptions: [
                { answerText: 'Coffee' },
                { answerText: 'Orange Juice' },
                { answerText: 'Ginger Beer' },
                { answerText: 'Water' }
            ],
        },
        {
            questionText: 'Which of the these foods sound most appealing?',
            answerOptions: [
                { answerText: 'Smoked Brisket' },
                { answerText: 'Hand-Tossed Salad' },
                { answerText: 'Grilled Salmon' },
                { answerText: 'PB&J Sandwich' }
            ],
        },
        {
            questionText: 'Which of the following fruits sound most appealing?',
            answerOptions: [
                { answerText: 'Pumpkins' }, // Seasonal beer
                { answerText: 'Cherries' }, // Sour pairing
                { answerText: 'Oranges' }, // Mid SRM pairing
                { answerText: 'Berries' } // Stout pairing
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