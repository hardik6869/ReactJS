import React from 'react';
import {useDispatch} from 'react-redux';
import {Navigate} from 'react-router';
import {Link} from 'react-router-dom';
import {login} from '../../reducers/logoutSlice';

const Home = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(login('login'));
        console.log('logout handler called');
    };
    const data = JSON.parse(localStorage.getItem('login'));

    return (
        <>
            {data === null ? <Navigate to="/" /> : null}
            {data !== null && (
                <>
                    <div className="home-page-main">
                        <p>
                            Hello {data.name}, You are Registered With Email-id
                            {data.email} <br></br>and phone number {data.number}
                        </p>
                        <div className="user-details">
                            <h3>{data.name}</h3>
                            <h3>{data.number}</h3>
                            <h3>{data.email}</h3>
                            <Link to="/">
                                <button onClick={logoutHandler}>Logout</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
