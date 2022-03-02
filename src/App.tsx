import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './components/User/About';
import Home from './components/User/Home';
import Services from './components/User/Services';
import Error from './components/User/Error Page/Error';

function App() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-dark bg-light d-flex justify-content-center rounded">
                    <Link to={'/'} className="btn btn-outline-primary m-2">
                        Home
                    </Link>
                    <Link
                        to={'/services'}
                        className="btn btn-outline-primary m-2">
                        Services
                    </Link>
                    <Link to={'/about'} className="btn btn-outline-primary m-2">
                        About
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
