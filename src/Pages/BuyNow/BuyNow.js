import React, { useEffect, useState } from 'react';
import { findDOMNode } from 'react-dom';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const BuyNow = () => {
    const { buyNowId } = useParams();
    const { user } = useAuth();
    const [buynow, setBuynow] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ishrafil2233/data/main/product.json')
            .then(res => res.json())
            .then(data => setBuynow(data));
    }, []);

    const find = buynow.find(product => product.id == buyNowId)
    console.log('this is buy now', buynow);
    return (
        <div>
            <h1>{buynow.length}</h1>
            <h3>this is buy now pages {user.displayName}</h3>
            <h3>this is buy now pages {user.email}</h3>
            <img src={find?.img} alt="..." className="img-thumbnail" />
            <h4>{find?.name}</h4>
            <h4>{find?.price}</h4>
            <h4>{find?.desc}</h4>
        </div>
    );
};

export default BuyNow;
