import React from 'react';
import {userAction} from '../interface/Interface';
import './profile.css';

const Profile = () => {
    const user: userAction = JSON.parse(localStorage.getItem('login'));
    return (
        <>
            <div className="container mt-5">
                <div className="main">
                    <div className="card_d">
                        <div className="overlay d-none">
                            <small className="fa fa-close"></small>
                            <img src={user.image} />
                        </div>

                        <div className="image">
                            <span>
                                <img id="userimage" src={user.image} />
                            </span>
                        </div>
                        <div className="text">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
