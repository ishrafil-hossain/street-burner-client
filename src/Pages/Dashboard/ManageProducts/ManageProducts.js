import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://guarded-fortress-06498.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Delete a product 
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this product?');
        if (confirm) {
            fetch(`https://guarded-fortress-06498.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('this is data', data);
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining);
                })
        }

    }
    return (
        <div>
            <Dashboard></Dashboard>
            <Container>
                <h2 className="text-center text-info mt-3">Total Products : {products.length}</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                    {
                        products.map(product => <div
                            key={product._id}
                            className="card border rounded-3 shadow p-3 mb-5 bg-body">
                            <div>
                                <img src={product.img} className="card-img-top w-100" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5>Product Name :<span className="text-primary"> {product.name}</span></h5>
                                <h5>Price : {product.price}TK</h5>
                                <p>{product.description}</p>
                            </div>

                            <Button
                                onClick={() => handleDelete(product?._id)}
                                variant="warning w-100">Delete</Button>
                        </div>)
                    }
                </div>

            </Container>
        </div>
    );
};

export default ManageProducts;