import React from 'react';
import {useSelector} from 'react-redux';
import {getAllUsers} from '../../reducers/userSlice';
import UsersCard from './UsersCard';

const UserComponent = () => {
    const users = useSelector(getAllUsers);
    console.log(users);
    let renderUsers = '';
    renderUsers =
        users.Response === 'True' ? (
            users.map((user: any, index: React.Key | null | undefined) => {
                <UsersCard key={index} data={user} />;
            })
        ) : (
            <h3>{users.Error}</h3>
        );
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Users</h1>
                    <div> {renderUsers} </div>
                </div>
            </div>
        </>
    );
};

export default UserComponent;
