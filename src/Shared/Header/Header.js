import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Street Burner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user?.email ?
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                        <Button onClick={logout} variant="primary">Logout</Button>
                                    </div>
                                    :
                                    <NavLink to="/login">
                                        <Button variant="primary">Login</Button>
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;