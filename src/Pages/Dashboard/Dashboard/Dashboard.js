import React from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import bg from './bg_dashboard.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const dashboardBg = {
    background: `url(${bg})`,
}

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <div>
            <Row>
                <Col xs={12} md={2}>
                    <Nav>
                        <div className="sidebar-sticky">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/payment"><i class="fas fa-file-invoice-dollar"></i> Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/my-order"><i class="far fa-grin-stars"></i> My Order</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/home"><i class="fas fa-star"></i> Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/home" onClick={logout} ><i class="fas fa-sign-out-alt"></i>
                                    Logout
                                </Nav.Link>
                            </Nav.Item>
                        </div>
                    </Nav>
                </Col>
                <Col style={dashboardBg} xs={12} md={8}>

                </Col>
            </Row>

        </div>
    );
};

export default Dashboard;