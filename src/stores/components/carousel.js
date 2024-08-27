import React from 'react';
import { Link } from "react-router-dom";



const Carousel = () => {
    
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Link to="/computers" >  <img src={process.env.PUBLIC_URL + "/assets/others/44fe68e438b997c9.jpg"}  className="d-block w-100" alt="Slide 1" />
        </Link>
        </div>
        <div className="carousel-item">
        <Link to="/mobiles" > <img src={process.env.PUBLIC_URL + "/assets/others/e8988eebd8073562.jpg"} className="d-block w-100" alt="Slide 2" />
        </Link>
        </div>
        <div className="carousel-item">
        <Link to="/mobiles" > <img src={process.env.PUBLIC_URL + "/assets/others/4bef3f079b135269.jpg"} className="d-block w-100" alt="Slide 3" />
        </Link>
 
        
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;