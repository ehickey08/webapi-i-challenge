import React, { useState, useEffect, useContext } from 'react';
import { UsersContext } from './context';
const AddUserForm = () => {
    const [input, setInput] = useState({ name: '', bio: '' });
    const { activeUser, addUser, updateUser } = useContext(UsersContext);

    useEffect(() => {
        setInput({ name: activeUser.name, bio: activeUser.bio });
    }, [activeUser]);

    const addOrEditUser = e => {
        e.preventDefault();
        if (activeUser.id) updateUser(input, activeUser.id);
        else addUser(input);
        setInput({name: '', bio: ''})
    };

    
    return (
        <form onSubmit={addOrEditUser}>
            <input
                name='name'
                type='text'
                required
                value={input.name}
                onChange={e => setInput({ ...input, name: e.target.value })}
            />
            <textarea
                name='bio'
                rows='3'
                cols='50'
                required
                value={input.bio}
                onChange={e => setInput({ ...input, bio: e.target.value })}
            />
            <button type='submit' onSubmit={addOrEditUser}>
                Submit
            </button>
        </form>
    );
};

export default AddUserForm;
