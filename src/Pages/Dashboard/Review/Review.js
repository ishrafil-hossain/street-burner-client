import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import './Review.css';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://street-burner-server.onrender.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for give us your valueable rating');
                    reset();
                }
                console.log(res);
            })
    }
    return (
        <div>
            <Dashboard></Dashboard>
            <h2 className="text-center mt-3 mb-3">Please rating us</h2>
            <div className="add-review">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 30 })} placeholder="name"
                        defaultValue={user.displayName}
                    />
                    <input type="number" {...register("rating", { min: 0, max: 5 })}
                        placeholder="rating number 0 to 5"
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;