import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, img, desc, price } = product;
    return (
        <div className="col">
            <div className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                <div>
                    <img src={img} className="card-img-top w-100 " alt="..." />
                </div>
                <div className="card-body">
                    <h5>Product Name :<span className="text-primary"> {name}</span></h5>
                    <h5>Price : {price}TK</h5>
                    <p>{desc}</p>
                </div>

                <Link to={`/buy-now/${id}`}>
                    <Button variant="primary">Buy Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Product;