import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button className='card-btn'>
                <p onClick={() => { props.handelAddToCard(props.product) }}>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;