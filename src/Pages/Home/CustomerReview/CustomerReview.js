import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CustomerReview = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Customer review page</h2>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <div>
                            <h4>Name</h4>

                        </div>
                    </Col>

                    <Col xs lg="2">
                        2 of 3
                    </Col>

                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CustomerReview;