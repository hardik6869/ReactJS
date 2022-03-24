import React, {useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Visitor from './component/Practicals/PracticalList';
import SignIn from './component/signin/SignIn';
import SignUp from './component/SignUp/SignUp';
import Home from './component/user/Home';
import Header from './component/navbar/Header';
const App = (): JSX.Element => {
    return (
        <>
            <Header />
            {/* <nav className="navbar navbar-expand-sm navbar-white bg-info justify-content-between">
                <div className="container">
                    {isLogin ? (
                        <>
                            <Link
                                to={'/'}
                                className="btn text-white shadow-lg border ml-3">
                                <FaUser /> Home
                            </Link>

                            <button
                                className="btn text-white shadow-lg border ml-3"
                                onClick={logoutHandler}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to={'/home'}
                                className="btn text-white shadow-lg border">
                                <FaHome /> Home
                            </Link>
                            <div className="form-inline">
                                <Link
                                    to={'/signin'}
                                    className="btn text-white shadow-lg border">
                                    <FaSignInAlt /> SignIn
                                </Link>
                                <Link
                                    to={'/signup'}
                                    className="btn text-white shadow-lg border ml-3">
                                    <FaUser /> SignUp
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav> */}
            <Routes>
                <Route path="/" element={<Visitor />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/Home" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
