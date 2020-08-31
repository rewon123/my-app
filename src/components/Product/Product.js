import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const{img, name,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
           <div>
               <img src={img} alt=""/>
            </div>
           <div>
             <h4><Link to={"/product/" + key}>{name}</Link></h4>
             <br/>
            <p><small>by: {seller}</small></p>
    <p>${price}</p>
    <p>only {stock} left in stock</p>
{ props.showAddToCart ===true  && <button onClick={() => props.handleAddProduct(props.product)}>add to cart</button>}
        </div>
    </div>
        
    );
};

export default Product;