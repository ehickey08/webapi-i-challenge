import React, { useContext, useState } from 'react';
import { UsersContext } from './context';
import { UserDiv, UserButton, ModalDiv } from './styled-components/Users';

const User = ({ user }) => {
    const { deleteUser, setActiveUser } = useContext(UsersContext);
    const [visible, setVisible] = useState(false);

    window.onClick={
        if(visible){
            setVisible(false)
        }
    }
    return (
        <UserDiv>
            <span onClick={() => setVisible(true)}>{user.name}</span>
            {visible && (
                <ModalDiv>
                    <div>
                        <span>{user.bio}</span>
                        <span className='close' onClick={() => setVisible(false)}>&times;</span>
                    </div>
                </ModalDiv>
            )}
            <UserButton onClick={() => deleteUser(user.id)}>Delete</UserButton>
            <UserButton
                onClick={() =>
                    setActiveUser({
                        name: user.name,
                        bio: user.bio,
                        id: user.id,
                    })
                }>
                Edit
            </UserButton>
        </UserDiv>
    );
};

export default User;
