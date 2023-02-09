import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://street-burner-.up.railway.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    return (
        <div className='review'>
            <h2 className="text-center mt-5 mb-5 text-success">Our Customer Reviews</h2>
            <Container>
                <div className='review-container'>
                    {(reviews.length === 0) ? <Spinner animation="border" variant="success" /> :
                        reviews.map(review => <div className='person'>
                            <div>
                                <h4>{review.name}</h4>
                                <p>Rating:{review.rating}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default CustomerReview;