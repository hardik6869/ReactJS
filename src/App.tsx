import React, {useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Visitor from './component/Practicals/PracticalList';
import SignIn from './component/signin/SignIn';
import SignUp from './component/SignUp/SignUp';
import Home from './component/user/Home';
import {FaHome, FaSignInAlt, FaUser} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from './reducers/logoutSlice';
import PrivateRoute from './component/user/PrivateRoutes';
const App = ({history}): JSX.Element => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout(false));
    };
    const action = useSelector((state) => state.login);
    const {isLogin} = action;

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-white bg-info justify-content-between">
                <div className="container">
                    {isLogin ? (
                        <>
                            <Link
                                to={'/home'}
                                className="btn text-white shadow-lg border ml-3">
                                <FaUser /> Home
                            </Link>
                            <Link to="/">
                                <button
                                    className="btn text-white shadow-lg border ml-3"
                                    onClick={logoutHandler}>
                                    Logout
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to={'/'}
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
            </nav>
            <Routes>
                <Route path="/" element={<Visitor />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
