import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, registerUser, isLoading } = useAuth();

    const history = useHistory();


    // name, email,password 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    // form 
    const handleRegisterSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <div className="mt-5 mb-5 add-offer form w-50 container">
                <h2>Please Register</h2>
                {!isLoading && <Form onSubmit={handleRegisterSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                    <NavLink to="/login">
                        <Button variant="link">Already Registered? Please Login</Button>
                    </NavLink>
                </Form>}
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant='success'>
                    You have create an account successfully!!!
                </Alert>}
                {authError && <Alert variant='danger'>
                    {authError}
                </Alert>}
            </div>
        </div>

    );
};

export default Register;