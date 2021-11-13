import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Dashboard = () => {
    const { logout, user, admin } = useAuth();
    return (
        <div>
            <div>
                <Navbar bg="light" expand={false}>
                    <Container>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start">

                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">{user.displayName}</Offcanvas.Title>
                                {/* <img
                                    src={user.photoURL}
                                    width="100"
                                    height="100"
                                    alt="avatar"
                                /> */}
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/home"><i className="fas fa-home"></i> Home</Nav.Link>
                                    </Nav.Item>

                                    {
                                        admin ? <div>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/manage-orders"><i className="fas fa-star"></i> Manage Orders</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/manage-products"><i className="fas fa-star"></i> Manage Products</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/add-product"><i className="fas fa-star"></i> Add Product</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/make-admin"><i className="fas fa-star"></i> Make an Admin</Nav.Link>
                                            </Nav.Item>
                                        </div>
                                            :
                                            <div>
                                                <Nav.Item>
                                                    <Nav.Link as={Link} to="/payment"><i className="fas fa-file-invoice-dollar"></i> Payment</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link as={Link} to="/my-order"><i className="far fa-grin-stars"></i> My Order</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link as={Link} to="/review"><i className="fas fa-star"></i> Review</Nav.Link>
                                                </Nav.Item>
                                            </div>

                                    }
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/login" onClick={logout} ><i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Dashboard;