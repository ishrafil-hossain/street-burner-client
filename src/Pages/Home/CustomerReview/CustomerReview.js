import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://guarded-fortress-06498.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <h2 className="text-center mt-5 mb-5 text-success">Our Customer Reviews</h2>
            <Container>
                <Row className="justify-content-md-center">
                    {
                        reviews.map(review => <Col
                            xs lg="2">
                            <div className="review-card">
                                <h4>{review.name}</h4>
                                <p>Rating:{review.rating}</p>
                            </div>

                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CustomerReview;