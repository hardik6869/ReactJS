import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import About from './component/About';
import Services from './component/Services';
import Todo from './component/Todo';

const App = (): JSX.Element => {
    return (
        <>
            <div>
                <nav>
                    <Router>
                        <div className="navbar navbar-expand-lg navbar-light bg-dark">
                            <div className="container ml-5">
                                <div className="row">
                                    <h2 className="text-white"> TodoList </h2>
                                    <Link to={'/'} className="pl-5 nav-link">
                                        <h5> Todo </h5>
                                    </Link>
                                    <Link
                                        to={'/services'}
                                        className="pl-5 nav-link">
                                        <h5> Services </h5>
                                    </Link>
                                    <Link
                                        to={'/about'}
                                        className="pl-5 nav-link">
                                        <h5> About </h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Routes>
                            <Route path="/" element={<Todo />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Router>
                </nav>
            </div>
        </>
    );
};

export default App;
