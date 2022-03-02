import React from 'react';
import UserList from './UserList';

function Home(): JSX.Element {
    return (
        <>
            <div className="m-2">
                <UserList />
            </div>
        </>
    );
}

export default Home;
