import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import {logout} from '../../reducers/logoutSlice';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const {isLogin} = useSelector((state) => state.login);
    const data = JSON.parse(localStorage.getItem('login'));
    const logoutHandler = () => {
        dispatch(logout(false));
    };
    const navigate = useNavigate();

    console.log(isLogin);

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <i className="fas fa-store"></i> Greate Shop
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {data ? (
                                <NavDropdown title={data.name} id="username">
                                    <li onClick={() => navigate('/Home')}>
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
