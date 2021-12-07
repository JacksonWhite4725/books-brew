import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { SAVE_STYLE } from '../utils/mutations';

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
                { answerText: 'Pumpkins', srmPoints: 2, ibuPoints: 2, abvPoints: 2 }, // Seasonal beer
                { answerText: 'Cherries', srmPoints: 2, ibuPoints: 2, abvPoints: 2 }, // Sour pairing
                { answerText: 'Oranges', srmPoints: 2, ibuPoints: 3, abvPoints: 3},
                { answerText: 'Berries', srmPoints: 3, ibuPoints: 1, abvPoints: 2 }
            ],
        },
        {
            questionText: 'Which of the following chocolates sound most appealing?',
            answerOptions: [
                { answerText: 'Dark Chocolate', srmPoints: 4, ibuPoints: 4, abvPoints: 4 },
                { answerText: 'Milk Chocolate', srmPoints: 2, ibuPoints: 1, abvPoints: 2 },
                { answerText: 'White Chocolate', srmPoints: 1, ibuPoints: 2, abvPoints: 2},
                { answerText: 'I Prefer Candy', srmPoints: 1, ibuPoints: 1, abvPoints: 1 } // Sour option
            ],
        },
        {
            questionText: 'What\'s your favorite beer setting?',
            answerOptions: [
                { answerText: 'A Nice Dinner', srmPoints: 4, ibuPoints: 3, abvPoints: 3 },
                { answerText: 'A Big Party', srmPoints: 1, ibuPoints: 1, abvPoints: 3 },
                { answerText: 'On Vacation', srmPoints: 2, ibuPoints: 2, abvPoints: 2},
                { answerText: 'Relaxing', srmPoints: 3, ibuPoints: 2, abvPoints: 1 }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [srmValue, setSrmValue] = useState(0);
    const [abvValue, setAbvValue] = useState(0);
    const [ibuValue, setIbuValue] = useState(0);

    const handleAnswerOptionClick = (answer) => {
        if (answer.srmPoints, answer.abvPoints, answer.ibuPoints) {
            setSrmValue(srmValue + answer.srmPoints);
            setAbvValue(abvValue + answer.abvPoints);
            setIbuValue(ibuValue + answer.ibuPoints);
        }
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleUserSaveClick = () => {
        // push results to user account
    };

    return (
        <div className='quiz'>
			{showScore ? (
				<div className='results-section'>
                    <div className='results-container'>
                        <h1>Your Results</h1>
                        <h2 className='result-name'>Golden Lager</h2>
                        <div className='beer-image'></div>
                        <p className='result-description'>American lager has little in the way of hop and malt character. A straw to gold, very clean and crisp, highly carbonated lager.</p>
                        {Auth.loggedIn() ? (
                            <button onClick={handleUserSaveClick}>Save Result</button>
                        ) : (
                            <span>Login to Save Results</span>
                        )}
                    </div>
				</div>
			) : (
				<>
                <div className='quiz-container'>
					<div className='question-container'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='quiz-question'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='quiz-answers'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
						))}
					</div>
                </div>
				</>
			)}
		</div>
    )
};

export default Quiz;