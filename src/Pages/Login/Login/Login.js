import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, loginUser, isLoading } = useAuth();

    const location = useLocation();
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
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }

    return (
        <div>
            <Header></Header>
            <div className="mt-5 mb-5 add-offer form w-50 container">
                <h2>Please Login</h2>
                {!isLoading && <Form onSubmit={handleLoginSubmit}>
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
                        Login
                    </Button>
                    <NavLink to="/register">
                        <Button variant="link">New User? Please Register</Button>
                    </NavLink>

                </Form>}
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant='success'>
                    Login successfully!!!
                </Alert>}
                {authError && <Alert variant='danger'>
                    {authError}
                </Alert>}
            </div>
        </div>

    );
};

export default Login;