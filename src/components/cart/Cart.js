import React from 'react';
// import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total, prd) => total + prd.price  * prd.quantity , 0)
   let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity ;}
   
    return (
        <div>
            
            <h3>Order Summary</h3>
            <p>Item Ordered :{cart.length}</p>
            <p>Product Price : {totalPrice}</p>
        
            <Link to="/review">
                <button>review order</button>
            </Link>
        </div>
    );
};

export default Cart;