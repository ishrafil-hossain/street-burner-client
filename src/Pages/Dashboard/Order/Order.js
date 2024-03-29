import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Order = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://street-burner-server.onrender.com/purchases?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // Delete a single purchase product 
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete your order?');
        if (confirm) {
            fetch(`https://street-burner-server.onrender.com/purchases/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('this is data', data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }

    }

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
                            <th scope="col">Action-1</th>
                            <th scope="col">Action-2</th>
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
                                    {/* delete button  */}
                                    <td>
                                        <button
                                            onClick={() => handleDelete(order?._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                    </td>
                                    <td>{order.payment ?
                                        'Paid' :
                                        <Link to={`/payment/{${order._id}}`}>
                                            <button className="btn btn-info">Pay</button>
                                        </Link>
                                    }</td>
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