import React from 'react';
import UserComponent from './UserComponent';

function Home(): JSX.Element {
    return (
        <>
            <div className="m-4">
                <UserComponent />
            </div>
        </>
    );
}

export default Home;
