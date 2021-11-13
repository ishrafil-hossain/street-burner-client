import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        alert('You have successfully added an admin')
        const user = { email };
        fetch('https://guarded-fortress-06498.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                }
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h2 className="text-center m-5">Make an admin</h2>
            <div className="mt-5 mb-5 add-offer form w-50 container">
                <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default MakeAdmin;