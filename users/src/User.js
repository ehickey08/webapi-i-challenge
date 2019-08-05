import React, { useContext } from 'react';
import { UsersContext } from './context';

const User = ({ user }) => {
    const { deleteUser, setActiveUser } = useContext(UsersContext);

    return (
        <>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick = {() => setActiveUser({name: user.name, bio: user.bio, id: user.id})}>Edit</button>
        </>
    );
};

export default User;
