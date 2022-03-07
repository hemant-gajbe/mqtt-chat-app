import React from 'react'
import UserTable from './UserTable';
import { useState } from 'react';
import AddUserForm from '../Users/AddUserForm';
import EditUserForm from './EditUserForm';

const Users = () => {
    
    const usersData = [
        { id:1, name: "AAA", username: "aiueo"},
        { id:2, name: "BBB", username: "aiueo"},
        { id:3, name: "CCC", username: "aiueo"}
    ];

    const [users, setUsers] = useState(usersData);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user])
    };

    const deleteUser = id => {
        setUsers(users.filter((user) => user.id !== id));
    }

    const [editing, setEditing] = useState(false);

    const initialFormState = {id: null, name: "", username: ""};
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }


    const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser : user)));
    }

    return (
        <div className='container'>
            <div className='flex-large'>
                {
                    editing ? (
                        <div>
                            <EditUserForm
                                editing = {editing}
                                setEditing = {setEditing}
                                currentUser = {currentUser}
                                updateUser = {updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add User</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )
                }
                
                <h2>View users</h2>
                <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
            </div>
        </div>
    )
}

export default Users
