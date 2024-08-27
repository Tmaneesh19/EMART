import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const UserCart = () => {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    
    return (
        <>
            <Navbar />
            <div className="cart-container">
                <h2 className='y-cart'>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <img 
                            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" 
                            alt="Empty Cart" 
                            className='empty-cart-image'
                        />
                        <p className='empty-cart-text'>Your cart is empty!<br/>Add items to it now.</p>
                        <Link to="/" className='shop-now-button'>Shop Now</Link>
                    </div>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className='cart-section' key={item.id}>
                                <div className="cart-img">
                                    <img src={item.image} alt={item.product} />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.product}</h3>
                                    <h2>{item.price}</h2>
                                    <h3>{item.model}</h3>
                                    <div className="quantity-controls">
                                        <button className="decrement-btn" onClick={() => decrementQuantity(item)}>-</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button className="increment-btn" onClick={() => incrementQuantity(item)}>+</button>
                                    </div>
                                </div>
                                <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserCart;
