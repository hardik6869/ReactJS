import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../components/User/Home';

function Navbar() {
    return (
        <>
            <Router>
                <nav className="p-2 bg-dark">
                    <div className="container col-12">
                        <Link to={'/'} className="btn btn-outline-primary m-2">
                            Home
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
}

export default Navbar;
