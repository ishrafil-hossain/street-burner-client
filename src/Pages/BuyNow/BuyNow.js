import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BuyNow = () => {
    const { buyNowId } = useParams();
    const { user } = useAuth();
    const [buynow, setBuynow] = useState([]);

    const initialInfo = { name: user.displayName, email: user.email, selection: '', city: '', phone: '' }
    const [purchases, setPurchases] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchases };
        newInfo[field] = value;
        setPurchases(newInfo);
    }

    const handlePurchase = e => {
        alert('successfully purchases now')
        // collect data 
        const purchaseData = { ...purchases }

        // send data to the server 
        fetch('http://localhost:5000/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault()
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ishrafil2233/data/main/product.json')
            .then(res => res.json())
            .then(data => setBuynow(data));
    }, []);

    const find = buynow.find(product => product.id == buyNowId)

    return (
        <Container>
            <Row className="p-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={find?.img} />
                        <Card.Body>
                            <div className=" d-flex justify-content-between text-info">
                                <Card.Title>{find?.name}</Card.Title>
                                <Card.Title>Price : {find?.price} TK</Card.Title>
                            </div>
                            <Card.Text>{find?.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div className="mt-5 mb-5 add-offer form">
                        <h2>Please enter your address </h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupText">
                                <Form.Control
                                    className="w-100"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control
                                    className="w-100"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState" className="mb-3">
                                <Form.Select
                                    defaultValue="Choose..."
                                    name="selection"
                                    onBlur={handleOnBlur}>

                                    <option>Select Division</option>
                                    <option>Barisal Division</option>
                                    <option>Chittagong Division</option>
                                    <option>Dhaka Division</option>
                                    <option>Khulna Division</option>
                                    <option>Mymensingh Division</option>
                                    <option>Rajshahi Division</option>
                                    <option>Rangpur Division</option>
                                    <option>Sylhet Division</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupAddress">
                                <Form.Control
                                    className="w-100"
                                    type="text"
                                    name="city"
                                    onBlur={handleOnBlur}
                                    placeholder="Your City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGroupNumber">
                                <Form.Control
                                    className="w-100"
                                    type="text"
                                    name="phone"
                                    onBlur={handleOnBlur}
                                    placeholder="Phone number" />
                            </Form.Group>

                            <div className=" d-flex justify-content-center">
                                <Button onClick={handlePurchase} variant="primary">Purchase Now</Button>
                            </div>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BuyNow;
