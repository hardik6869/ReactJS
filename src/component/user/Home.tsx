import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import Profile from './Profile';

const Home = (): JSX.Element => {
    const {isLogin} = useSelector((state: RootStateOrAny) => state.login);

    return (
        <>
            {isLogin !== false && (
                <>
                    <div className="home-page-main"></div>
                    <Profile />
                </>
            )}
        </>
    );
};

export default Home;
