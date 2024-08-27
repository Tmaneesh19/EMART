import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const MobileSingle = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate(); // useNavigate hook
  const product = mobileData.find((item) => item.id === id);
  
  // Check if the item is already in the cart
  const isInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleGoToCart = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <>
      <Navbar />
      <div className="single-page-container">
        <div className="image-section">
          <img src={product.image} alt={product.model} />
        </div>
        <div className="details-section">
          <h2 className="company model">{product.company} {product.model}</h2>
          <h2 className="price">₹{product.price}</h2>
          <p className="description">{product.description}</p>
          
          {isInCart ? (
            <button className="go-to-cart" onClick={handleGoToCart}>
              <i className="fas fa-shopping-cart"></i> Go to Cart
            </button>
          ) : (
            <button className="add-to-cart" onClick={handleAddToCart}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          )}

          <div className="offers-section">
            <h4>Available offers</h4>
            <ul>
              <li>Bank Offer: Get ₹50 Instant Discount on Flipkart UPI transaction on order of ₹200 and above.</li>
              <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.</li>
              <li>Bank Offer: 12% off up to ₹1,500 on all Axis Bank Credit EMI transactions on orders of ₹7,500 and above.</li>
              <li>Special Price: Get extra 11% off (price inclusive of cashback/coupon).</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSingle;
