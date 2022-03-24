import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Visitor from './component/Practicals/PracticalList';
import SignIn from './component/signin/SignIn';
import SignUp from './component/SignUp/SignUp';
import Home from './component/user/Home';
import Header from './component/navbar/Header';
import Error from './component/Error';
const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Visitor />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
