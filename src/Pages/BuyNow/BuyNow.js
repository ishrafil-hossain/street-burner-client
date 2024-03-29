import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const BuyNow = () => {
    const { buyNowId } = useParams();
    const { user } = useAuth();
    const [buynow, setBuynow] = useState([]);

    useEffect(() => {
        fetch('https://street-burner-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setBuynow(data));
    }, []);

    const find = buynow.find(product => product._id == buyNowId)




    const initialInfo = { name: user.displayName, email: user.email, productName: find?.name, productPrice: find?.price, selection: '', city: '', phone: '' }
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
        const purchaseData = { ...purchases, productName: find?.name, productPrice: find?.price }
        console.log(purchaseData);
        // send data to the server 
        fetch('https://street-burner-server.onrender.com/purchases', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault()
    }



    return (
        <div>
            <Header></Header>
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
                                <Card.Text>{find?.description}</Card.Text>
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
                                <Form.Group className="mb-3" controlId="formGroupProduct">
                                    <Form.Control
                                        className="w-100"
                                        type="text"
                                        name="product-name"
                                        onBlur={handleOnBlur}
                                        defaultValue={find?.name} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPrice">
                                    <Form.Control
                                        className="w-100"
                                        type="number"
                                        name="product-price"
                                        onBlur={handleOnBlur}
                                        defaultValue={find?.price} />
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
        </div>

    );
};

export default BuyNow;
