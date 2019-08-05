import React, { useContext } from 'react';
import { UsersContext } from './context';
import User from './User';
import { UsersDiv } from './styled-components/Users'

const Users = () => {
    const { users } = useContext(UsersContext);

    return (
        <UsersDiv>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </UsersDiv>
    );
};

export default Users;
