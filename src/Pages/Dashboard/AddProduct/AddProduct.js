import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://guarded-fortress-06498.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('You have successfully add a product ):');
                    reset();
                }
                console.log(res)
            })
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <Container className="text-center">
                <div className="mt-5 mb-5 add-product form">
                    <h2 className="mb-5">Please Add a Product </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 30 })} placeholder="product name" />
                        <textarea {...register("description")} placeholder="product description" />
                        <input type="number" {...register("price")} placeholder="product price" />
                        <input {...register("img")} placeholder="img uri" />
                        <input type="submit" />
                    </form>
                </div>

                <p>
                    <span className="text-danger h4">Note :</span> To add an image for a new product, you have upload the image on any image hosting sites like imgbb, etc.and then have to add the link of the img uri input field
                </p>
            </Container>
        </div>
    );
};

export default AddProduct;