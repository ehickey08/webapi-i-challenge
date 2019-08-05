import React, { useContext } from 'react';
import { UsersContext } from './context';
import User from './User';
const Users = () => {
    const { users } = useContext(UsersContext);

    return (
        <>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </>
    );
};

export default Users;
