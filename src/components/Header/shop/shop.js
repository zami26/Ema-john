import React, { useEffect, useState } from 'react';
import Product from '../../product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [card, setCard] = useState([]);
    const handelAddToCard = (product) => {
        console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className='shop-container'>
            <div className='card-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCard={handelAddToCard}
                    ></Product>)
                }

            </div>
            <div className='order-container'>
                <h4>Order Summary</h4>
                <p>Selected items:{card.length}</p>
            </div>
        </div>
    );
};

export default Shop;