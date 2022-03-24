import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import {userAction} from '../interface/Interface';
import Profile from './profile';

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
