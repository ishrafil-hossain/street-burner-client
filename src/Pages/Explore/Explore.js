import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://street-burner-server.vercel.app/products')
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
                            className="card border rounded-3 shadow p-3 mb-5 bg-body">
                            <div>
                                <img src={product.img} className="card-img-top w-100" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5>Product Name :<span className="text-primary"> {product.name}</span></h5>
                                <h5>Price : {product.price}TK</h5>
                                <p>{product.description}</p>
                            </div>

                            <Link to={`/buy-now/${product.id}`}>
                                <Button variant="primary w-100">Buy Now</Button>
                            </Link>
                        </div>)
                    }
                </div>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;