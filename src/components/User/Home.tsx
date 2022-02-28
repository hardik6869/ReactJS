import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {showUsers} from '../../reducers/userSlice';
import UserComponent from './UserComponent';
import {userInfo} from './userInfo';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const featchUsers = () => {
            dispatch(showUsers(userInfo));
        };
        featchUsers();
    }, []);
    return (
        <>
            <div className="container text-primary m-5 ">
                <h2 className="text-dark fw-bold"> Redux </h2>
                <h3 className="p-2"> Practical-5</h3>
            </div>
            <UserComponent />
        </>
    );
}

export default Home;
