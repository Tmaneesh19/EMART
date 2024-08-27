import React from "react";
import { fridgeData } from "../data/fridge";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const FridgeSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  // Safeguard against undefined fridgeData
  const product = fridgeData ? fridgeData.find((item) => item.id === id) : null;

  // Handle case when product is not found
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="single-page-container">
          <div className="not-found">
            <h2>Product not found</h2>
            <p>We're sorry, but the product you're looking for could not be found.</p>
          </div>
        </div>
      </>
    );
  }

  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="single-page-container">
        <div className="image-section">
          <img src={product.image} alt={product.model} />
        </div>
        <div className="details-section">
          <h2 className="company model">
            {product.company} {product.model}
          </h2>
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
              <li>
                Bank Offer: Get ₹50 Instant Discount on Flipkart UPI transaction
                on order of ₹200 and above.
              </li>
              <li>
                Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card.
              </li>
              <li>
                Bank Offer: 12% off up to ₹1,500 on all Axis Bank Credit EMI
                transactions on orders of ₹7,500 and above.
              </li>
              <li>
                Special Price: Get extra 11% off (price inclusive of
                cashback/coupon).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FridgeSingle;
