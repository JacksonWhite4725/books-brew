import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
    const questions = [
        {
            questionText: 'Which of these beverages sounds most appealing?',
            answerOptions: [
                { answerText: 'Coffee', srmPoints: 4, ibuPoints: 3, abvPoints: 4 },
                { answerText: 'Orange Juice', srmPoints: 2, ibuPoints: 4, abvPoints: 2 },
                { answerText: 'Ginger Beer', srmPoints: 3, ibuPoints: 2, abvPoints: 3 },
                { answerText: 'Water', srmPoints: 1, ibuPoints: 1, abvPoints: 1 }
            ],
        },
        {
            questionText: 'Which of the these foods sound most appealing?',
            answerOptions: [
                { answerText: 'Smoked Brisket', srmPoints: 4, ibuPoints: 2, abvPoints: 4 },
                { answerText: 'Hand-Tossed Salad', srmPoints: 1, ibuPoints: 3, abvPoints: 2 },
                { answerText: 'Grilled Salmon', srmPoints: 2, ibuPoints: 4, abvPoints: 1 },
                { answerText: 'PB&J Sandwich', srmPoints: 3, ibuPoints: 1, abvPoints: 3 }
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

    const handleAnswerOptionClick = ({ srmPoints, abvPoints, ibuPoints }) => {
        if (srmPoints, abvPoints, ibuPoints) {
            setSrmValue(srmValue + srmPoints);
            setAbvValue(abvValue + abvPoints);
            setIbuValue(ibuValue + ibuPoints);
        }

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
						{questions[currentQuestion].answerOptions.map((answerOption, i) => (
							<button onClick={() => handleAnswerOptionClick(answerOption[i])}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    )
};

export default Quiz;