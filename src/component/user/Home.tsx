import React from 'react';
import {useSelector} from 'react-redux';
import {userAction} from '../interface/Interface';

const Home = () => {
    const {isLogin} = useSelector((state) => state.login);
    const data = JSON.parse(localStorage.getItem('login'));

    return (
        <>
            {isLogin !== false && (
                <>
                    <div className="home-page-main">
                        <p>
                            Hello {data.name}, You are Registered With Email-id
                            {data.email} <br></br>and phone number {data.number}
                        </p>
                        <div className="user-details">
                            <img src={data.image} />
                            <h3>{data.name}</h3>
                            <h3>{data.number}</h3>
                            <h3>{data.email}</h3>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
