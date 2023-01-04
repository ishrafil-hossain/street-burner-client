import React from 'react';
import { useParams } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';

const Payment = () => {
    const { productId } = useParams();
    return (
        <div>
            <Dashboard></Dashboard>
            <div className="text-center">
                <h1>Payment : {productId}</h1>
            </div>
        </div>

    );
};

export default Payment;