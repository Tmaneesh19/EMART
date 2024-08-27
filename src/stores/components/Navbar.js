import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../context/CartContext";


const Navbar = () => {
  const { cartItems } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input className="form-control form-control-lg" type="text" placeholder="Enter your product name...." aria-label=".form-control-lg example" />
        </div>
        <div className="user">
        <Link to="/Signup">
          <div className="user-detail"><FontAwesomeIcon icon={faUser} size="2x" /></div>
          </Link>

          <Link to="/cart">
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" color="hsl(0, 0%, 13%)" />
              <span className="cartnum">
                {cartItems.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <Link to="/" className="menu-title">Home</Link>
          </li>

          <li
            className="menu-category"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="#" className="menu-title">
              <span>Categories</span>
              <span>
              <i className={`bi ${isHovered ? 'bi-chevron-up' : 'bi-chevron-down'} bold-icon`}></i>

              </span>
            </Link>
            <div className="dropdown-panel">
              <div className="dropdown-panel-content">
                {/* Furniture */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">Furniture</li>
                  <li className="panel-list-item">
                    <Link to="/furniture">Chairs</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/furniture">Tables</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/furniture">Sofas</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/furniture">Wardrobes</Link>
                  </li>
                </ul>

                {/* Kitchen */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">Kitchen</li>
                  <li className="panel-list-item">
                    <Link to="/kitchen">Utensils</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/kitchen">Appliances</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/kitchen">Storage</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/kitchen">Cookware</Link>
                  </li>
                </ul>

                {/* Books */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">Books</li>
                  <li className="panel-list-item">
                    <Link to="/books">Fiction</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/books">Non-Fiction</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/books">Children</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/books">Educational</Link>
                  </li>
                </ul>

                {/* Speakers */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">Speakers</li>
                  <li className="panel-list-item">
                    <Link to="/speakers">Bluetooth</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/speakers">Wired</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/speakers">Home Theater</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/speakers">Portable</Link>
                  </li>
                </ul>

                {/* Fridges */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">Fridges</li>
                  <li className="panel-list-item">
                    <Link to="/fridge">Single Door</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/fridge">Double Door</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/fridge">French Door</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/fridge">Triple Door</Link>
                  </li>
                </ul>

                {/* AC */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">AC</li>
                  <li className="panel-list-item">
                    <Link to="/ac">Window AC</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/ac">Portable AC</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/ac">Split AC</Link>
                  </li>
                  <li className="panel-list-item">
                    <Link to="/ac">Central AC</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="menu-category">
            <Link to="/mobiles" className="menu-title">Mobiles</Link>
          </li>

          <li className="menu-category">
            <Link to="/computers" className="menu-title">Computers</Link>
          </li>

          <li className="menu-category">
            <Link to="/watch" className="menu-title">Watches</Link>
          </li>

          <li className="menu-category">
            <Link to="/men" className="menu-title">Men's Wear</Link>
          </li>

          <li className="menu-category">
            <Link to="/woman" className="menu-title">Women's Wear</Link>
          </li>

          <li className="menu-category">
            <Link to="/men" className="menu-title">Hot Deals</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;