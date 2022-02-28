import React from 'react';
import UserProfile from './User/UserProfile';

function Home() {
    return (
        <>
            <div className="container text-primary m-5 ">
                <h2 className="text-dark fw-bold"> Redux </h2>
                <h3 className="p-2"> Practical-5</h3>
            </div>
            <UserProfile />
        </>
    );
}

export default Home;
