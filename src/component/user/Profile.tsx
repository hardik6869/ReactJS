import React from 'react';
import {userAction} from '../interface/Interface';
import './profile.css';

const Profile = () => {
    const user: userAction = JSON.parse(localStorage.getItem('login') || '{}');
    return (
        <>
            <div className="container profile_div d-flex justify-content-center">
                <div className="card shadow-lg border radious-3 m-5 p-1">
                    <div className="upper">
                        <img
                            src="https://i.imgur.com/Qtrsrk5.jpg"
                            className="img-fluid h-80"
                        />
                    </div>
                    <div className="user text-center">
                        <div className="profile">
                            <img
                                src={user.image}
                                className="rounded-circle"
                                width="100"
                            />
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h4 className="mb-0 mt-3">{user.name}</h4>
                        <hr className="font-weight-bolder mx-5" />
                        <span className="text-muted d-block mb-2 mt-4">
                            {user.email}
                        </span>
                        <div className="my-4">{user.number}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
