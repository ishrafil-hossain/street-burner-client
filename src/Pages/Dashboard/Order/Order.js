import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Order = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchases?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div>
            <Dashboard></Dashboard>
            <Container>
                <h3 className="text-center m-3">Total Orders : {orders.length}</h3>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.productPrice} TK</td>

                                    <td>
                                        <button className="btn btn-warning">Pending</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </div>

    );
};

export default Order;