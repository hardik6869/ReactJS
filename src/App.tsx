import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './component/Home';
import SignIn from './component/signin/SignIn';
import SignUp from './component/SignUp/SignUp';
import {FaHome, FaSignInAlt, FaUser} from 'react-icons/fa';
const App = (): JSX.Element => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-white bg-info justify-content-between">
                <div className="container">
                    <Link to={'/'} className="btn text-white shadow-lg border">
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
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
};

export default App;
