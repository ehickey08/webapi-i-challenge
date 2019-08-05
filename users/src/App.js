import React, { useEffect, useState } from 'react';
import './App.css';
import { axiosInstance } from './axiosInstance';
import { UsersContext } from './context';
import Users from './Users';
import AddUserForm from './AddUserForm';

function App() {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [activeUser, setActiveUser] = useState({ name: '', bio: '', id: '' });

    useEffect(() => {
        axiosInstance
            .get(`/api/users`)
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                setErrorMessage(err.response.message);
            });
    }, []);

    const deleteUser = id => {
        axiosInstance
            .delete(`/api/users/${id}`)
            .then(res => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(err => {
                setErrorMessage(err.response.message);
            });
    };

    const addUser = user => {
        axiosInstance
            .post(`/api/users`, user)
            .then(res => {
                setUsers([...users, res.data]);
            })
            .catch(err => {
                setErrorMessage(err.response.message);
            });
    };

    const updateUser = (user, id) => {
        axiosInstance
            .put(`/api/users/${id}`, user)
            .then(res => {
                let unchangedUsers = users.filter(user => user.id !== id)
                setUsers([...unchangedUsers, res.data]);
                setActiveUser({ name: '', bio: '', id: '' });
            })
            .catch(err => {
                setErrorMessage(err.response.message);
            });
    };

    return (
        <>
            <UsersContext.Provider
                value={{
                    users,
                    deleteUser,
                    addUser,
                    updateUser,
                    activeUser,
                    setActiveUser,
                    errorMessage
                }}>
                <AddUserForm />
                <Users />
            </UsersContext.Provider>
        </>
    );
}

export default App;
