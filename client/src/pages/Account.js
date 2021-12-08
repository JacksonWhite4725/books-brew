import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Account = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <div className='account'>
            {user ? (
                <div className='account-container'>
                <h1>Welcome {user.firstName} {user.lastName}!</h1>
                <h2>Your Saved Beer Styles Are:</h2>
                <div>
                    {user.styles.map(({ name }) => 
                    <h3>{name}</h3>)}
                </div>
            </div>
            ): null}
        </div>
    );
};

export default Account;