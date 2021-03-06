import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://guarded-fortress-06498.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;