import React from 'react';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Error from './Error';
import Weather from './Weather';

const Header = (): JSX.Element => {
    return (
        <>
            <Router>
                <div className="navbar row">
                    <nav className="container float-left">
                        <Link to={'/'} className="nav-link">
                            Home
                        </Link>
                        <Link to={'/about'} className="nav-link">
                            About
                        </Link>
                        <Link to={'/services'} className="nav-link">
                            Services
                        </Link>
                        <Link to={'/weather'} className="nav-link">
                            Weather
                        </Link>
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
};

export default Header;
