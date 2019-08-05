import React, { useState, useEffect, useContext } from 'react';
import { UsersContext } from './context';
import { UserForm, InputDiv, SubmitButton } from './styled-components/Form';

const AddUserForm = () => {
    const [input, setInput] = useState({ name: '', bio: '' });
    const { activeUser, addUser, updateUser, errorMessage } = useContext(
        UsersContext
    );

    useEffect(() => {
        setInput({ name: activeUser.name, bio: activeUser.bio });
    }, [activeUser]);

    const addOrEditUser = e => {
        e.preventDefault();
        if (activeUser.id) updateUser(input, activeUser.id);
        else addUser(input);
        setInput({ name: '', bio: '' });
    };

    return (
        <UserForm onSubmit={addOrEditUser}>
            <InputDiv>
                <label htmlFor='name'>Name: </label>
                <input
                    name='name'
                    type='text'
                    required
                    value={input.name}
                    onChange={e => setInput({ ...input, name: e.target.value })}
                />
            </InputDiv>
            <InputDiv>
                <label className='bio_label' htmlFor='bio'>
                    Bio:{' '}
                </label>
                <textarea
                    name='bio'
                    rows='3'
                    cols='25'
                    required
                    value={input.bio}
                    onChange={e => setInput({ ...input, bio: e.target.value })}
                />
            </InputDiv>
            <SubmitButton type='submit' onSubmit={addOrEditUser}>
                Submit
            </SubmitButton>
            {errorMessage && <h2>{errorMessage}</h2>}
        </UserForm>
    );
};

export default AddUserForm;
