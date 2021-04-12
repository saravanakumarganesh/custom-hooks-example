import React from 'react';

import './user.styles.css';

import Card from '../card/card.component';
import useFetch from '../../effects/use-fetch.effect';

const User = ({ userId }) => {
  const user = useFetch(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );

  return (
    <Card>
      {user ? (
        <div>
          {' '}
          <h3> {user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p> No user found </p>
      )}
    </Card>
  );
};

export default User;
