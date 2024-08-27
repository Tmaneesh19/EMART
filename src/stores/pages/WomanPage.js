import React, { useState } from 'react';
import { womanData } from '../data/woman'; // Import woman data
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaEye } from 'react-icons/fa'; // Importing icons

const WomanPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter(item => item !== mango));
        } else {
            setSelectedProduct([...selectedProduct, mango]);
        }
    };

    const generateRandomPrice = () => {
        // Generate a random price between 1000 and 20000 INR
        return Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
    };

    const generateRandomDiscount = () => {
        // Generate a random discount percentage between 20% and 70%
        return Math.floor(Math.random() * 51) + 20;
    };

    const filteredProduct = selectedProduct.length === 0 ?
        womanData : womanData.filter((orange) => selectedProduct.includes(orange.brand));

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {womanData.map((phone) => {
                        return (
                            <div className='pro-input' key={phone.brand}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedProduct.includes(phone.brand)}
                                        onChange={() => companyHandler(phone.brand)}
                                    />
                                    {phone.brand}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        const price = generateRandomPrice();
                        const discount = generateRandomDiscount();
                        return (
                            <div className="itemBox" key={item.id}>
                                <Link to={`/woman/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt={item.model} />
                                        <div className="iconsOverlay">
                                            <FaHeart className="icon" title="Add to Favorites" />
                                            <FaSearch className="icon" title="View Details" />
                                            <FaEye className="icon" title="Quick View" />
                                        </div>
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.brand}, {item.model}
                                </div>
                                <div className="priceAndDiscount">
                                    <span className="price">₹{price}</span>
                                    <span className="discount">{discount}% OFF</span>
                                </div>
                                <div className="rating">
                                    {'⭐'.repeat(Math.floor(Math.random() * 5) + 1)} {/* Random star rating */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default WomanPage;
