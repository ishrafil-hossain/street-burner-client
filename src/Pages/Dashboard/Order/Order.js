import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Order = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchases?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <Dashboard></Dashboard>
            <div>
                <h3>Total Orders : {orders.length}</h3>
            </div>
        </div>

    );
};

export default Order;