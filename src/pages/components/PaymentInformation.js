import {useLocation, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import React, {useState} from "react";
import OrderService from "../../services/OrderService";
import {useDispatch} from "react-redux";
import {clearCartRequest} from "../../store/actions/CartActions";
import '../../styles/form.css';

export const PaymentInformation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartId = useLocation().state.cartId;
    const {name, email, phone, street, city, zip} = useLocation().state.user;
    const userInfo = {
        name: name,
        email: email,
        phone: phone,
        street: street,
        city: city,
        zip: zip,
        cardNumber: "",
        creditCartType: "",
        date: "",
        cvv: ""
    };
    const [user, setUser] = useState(userInfo);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleFieldChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const checkout = async () => {
        try {
            const res = await OrderService.checkout(cartId, user);
            dispatch(clearCartRequest())
            navigate("/order-confirmation", {state: {orderId: res.orderId}});
        } catch (error) {
            alert('Checkout Error');
        }
    }

    const handleSubmitCall = async (data) => {
        setUser({
            name: user.name,
            email: user.email,
            phone: user.phone,
            street: user.street,
            city: user.city,
            zip: user.zip,
            cardNumber: data.cardNumber,
            creditCartType: user.creditCartType,
            date: data.date,
            cvv: data.cvv,
        });
        await checkout()
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitCall)}>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone: {userInfo.phone}</p>
            <p>Street: {userInfo.street}</p>
            <p>City: {userInfo.city}</p>
            <p>Zip: {userInfo.zip}</p>

            <div>
                <label className="form-label">Card Number</label>
                <input
                    name="cardNumber"
                    minLength="16"
                    type="text"
                    {...register("card", {
                        required: "card is required.",
                        minLength: {
                            value: 16,
                            message: "Card should be at-least 16 characters."
                        }
                    })}
                    required/>
                {errors.card && (<p className="errorMsg">{errors.card.message}</p>)}
            </div>
            <div>
                <label className="form-label">Credit card type</label>
                <div style={{display: 'flex'}}>
                    <div className="wrapper-class">
                        <label htmlFor="creditCardType">Visa</label>
                        <input
                            type="radio"
                            name="creditCardType"
                            value="Visa"
                            checked={user.creditCardType === 'Visa'}
                            onChange={handleFieldChange}
                            required
                        />
                    </div>
                    <div className="wrapper-class">
                        <label htmlFor="creditCardType">Mastercard</label>
                        <input
                            type="radio"
                            name="creditCardType"
                            value="Mastercard"
                            checked={user.creditCardType === 'Mastercard'}
                            onChange={handleFieldChange}
                        />
                    </div>
                </div>
            </div>

            <div>
                <label className="form-label">Expire Date</label>
                <input
                    name="date"
                    minLength="5"
                    maxLength="5"
                    placeholder="MM-YY"
                    type="text"
                    {...register("date", {
                        required: "date is required.",
                        pattern: {
                            value: /^(0[1-9]|1[0-2])-(\d{2})$/,
                            message: 'Invalid MM-YY format',
                        }
                    })}
                    required/>
                {errors.date && (<p className="errorMsg">{errors.date.message}</p>)}
            </div>

            <div>
                <label className="form-label">CVV</label>
                <input
                    name="cvv"
                    type="text"
                    {...register("cvv", {
                        required: "cvv is required.",
                        minLength: {
                            value: 3,
                            message: "cvv should be at-least 3 digits."
                        }
                    })}
                />
                {errors.cvv && (<p className="errorMsg">{errors.cvv.message}</p>)}
            </div>
            <br/>
            <div className="primary-actions">
                <div className="primary-content"/>
                <button className="primary-button" type="submit">Continue</button>
            </div>
        </form>
    );
}