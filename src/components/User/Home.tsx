import React from 'react';
import UserList from './UserList';

function Home(): JSX.Element {
    return (
        <>
            {/* Users Home */}
            <div className="m-2">
                <UserList />
            </div>
        </>
    );
}

export default Home;
