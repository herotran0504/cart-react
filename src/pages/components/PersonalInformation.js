import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import React from "react";
import '../../styles/form.css';

export const PersonalInformation = () => {
    const navigate = useNavigate();
    const {cartId} = useLocation().state;
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleSubmitCall = (data) => {
        const user = {name: data.name, email: data.email, phone: data.phone, street: data.street, city: data.city, zip: data.zip}
        navigate("/payment-information", {state: {cartId: cartId, user: user}});
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitCall)}>
            <div>
                <label className="form-label">Name</label>
                <input
                    name="name"
                    type="text"
                    {...register("name", {
                        required: "name is required.",
                        minLength: {
                            value: 2,
                            message: "Name should be at-least 2 characters."
                        }
                    })}
                    required/>
                {errors.name && (<p className="errorMsg">{errors.name.message}</p>)}
            </div>

            <div>
                <label className="form-label">Email</label>
                <input
                    name="email"
                    type="email"
                    {...register("email", {
                        required: "email is required.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && (<p className="errorMsg">{errors.email.message}</p>)}
            </div>
            <div>
                <label className="form-label">Phone</label>
                <input
                    name="phone"
                    type="text"
                    {...register("phone", {
                        required: "name is required.",
                        minLength: {
                            value: 10,
                            message: "Phone should be at-least 10 digits."
                        }
                    })}
                />
                {errors.phone && (<p className="errorMsg">{errors.phone.message}</p>)}
            </div>
            <div>
                <label className="form-label">Street</label>
                <input
                    name="street"
                    type="text"
                    {...register("street", {
                        required: "street is required.",
                        minLength: {
                            value: 2,
                            message: "Street should be at-least 2 characters."
                        }
                    })}
                />
                {errors.street && (<p className="errorMsg">{errors.street.message}</p>)}
            </div>
            <div>
                <label className="form-label">City</label>
                <input
                    name="city"
                    type="text"
                    {...register("city", {
                        required: "city is required.",
                        minLength: {
                            value: 2,
                            message: "City should be at-least 2 characters."
                        }
                    })}
                />
                {errors.street && (<p className="errorMsg">{errors.street.message}</p>)}
            </div>
            <div>
                <label className="form-label">Zip</label>
                <input
                    name="zip"
                    type="text"
                    {...register("zip", {
                        required: "zip is required.",
                        minLength: {
                            value: 2,
                            message: "Zip should be at-least 2 characters."
                        }
                    })}
                />
                {errors.zip && (<p className="errorMsg">{errors.zip.message}</p>)}
            </div>
            <div className="primary-actions">
                <div className="primary-content"/>
                <button className="primary-button" type="submit">Continue</button>
            </div>

        </form>
    );
}