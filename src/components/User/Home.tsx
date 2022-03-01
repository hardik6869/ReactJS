import React from 'react';
import UserComponent from './UserComponent';
import UsersCard from './UsersCard';

function Home() {
    return (
        <>
            <div className="m-5 d-flex">
                <UserComponent />
                <UsersCard />
            </div>
        </>
    );
}

export default Home;
