import React from 'react';
import {useDispatch} from 'react-redux';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {logout} from '../../reducers/logoutSlice';
import {Link, NavigateFunction, useNavigate} from 'react-router-dom';
import {userAction} from '../interface/Interface';

const Header = (): JSX.Element => {
    const dispatch = useDispatch();
    const data: userAction = JSON.parse(localStorage.getItem('login'));
    const navigate: NavigateFunction = useNavigate();
    const logoutHandler = (): void => {
        navigate('/');
        dispatch(logout(false));
    };
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
