import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                    {
                        products.map(product => <div
                            key={product._id}
                            className="card border rounded-3 shadow p-3 mb-5 bg-body h-100">
                            <div>
                                <img src={product.img} className="card-img-top w-100 " alt="..." />
                            </div>
                            <div className="card-body">
                                <h5>Product Name :<span className="text-primary"> {product.name}</span></h5>
                                <h5>Price : {product.price}TK</h5>
                                <p>{product.description}</p>
                            </div>

                            <Link to={`/buy-now/${product.id}`}>
                                <Button variant="primary">Buy Now</Button>
                            </Link>
                        </div>)
                    }
                </div>

            </Container>
        </div>
    );
};

export default Explore;