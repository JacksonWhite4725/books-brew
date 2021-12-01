import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-right-container'>
                <h1 className='home-title'>Discover Your Next Favorite Beer</h1>
                <h2 className='home-quiz-button'>
                    <Link to='/quiz' className='home-quiz-button-link'>
                        Take the Quiz
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default Home;