import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Services from './component/Services';
import About from './component/About';
import Error from './component/Error';
import Weather from './component/Weather';

const App = (): JSX.Element => {
    return (
        <>
            <Router>
                <div className="navbar row">
                    <nav className="container">
                        <Link to={'/about'} className="nav-link">
                            About
                        </Link>
                        <Link to={'/'} className="nav-link">
                            Home
                        </Link>
                        <Link to={'/services'} className="nav-link">
                            Services
                        </Link>
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Weather />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
