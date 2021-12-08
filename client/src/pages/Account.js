import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Account = () => {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    console.log(user);

    return (
        <div className='account'>
            {user ? (
                <div className='account-container'>
                <h1>Welcome {user.firstName} {user.lastName}!</h1>
                <h2>Your Saved Beer Styles Are:</h2>
                <h3>{user.styles[0].name}</h3>
                {user.styles.map(({ _id, name, description }) => {
                    <div className='style-card' key={_id}>
                        <h3 className='style-name'>{name}</h3>
                        <p className='style-description'>{description}</p>
                    </div>
                })}
            </div>
            ): null}
        </div>
    );
};

export default Account;