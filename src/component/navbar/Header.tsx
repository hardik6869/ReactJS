import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {logout} from '../../reducers/logoutSlice';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const data = JSON.parse(localStorage.getItem('login'));
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logout(false));
    };

    if (data) {
        navigate('/signin');
    } else if (!data === null) {
        navigate('/home');
    } else {
    }

    return (
        <header>
            <Navbar bg="info" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <i className="fas fa-store"></i> React Practica
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {data ? (
                                <NavDropdown title={data.name} id="username">
                                    <li onClick={() => navigate('/home')}>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </li>

                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <li onClick={() => navigate('/signin')}>
                                    <Nav.Link>
                                        <i className="fas fa-user"></i> Sign in
                                    </Nav.Link>
                                </li>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
