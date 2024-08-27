import React from "react";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);

  return (
    <>
      <div className="propage">
        <div className="proTitle">
          <h2>Woman Dressing</h2>
        </div>
        <div className="proSection">
          {firstFiveImages.map((item, index) => (
            <div className="imgBox" key={index}>
               <Link to={`/woman/${item.id}`} className="noDecoration">
                <img className="proImage" src={item.image} alt={`${item.brand} ${item.model}`} />
                <h2 className="company model">{item.brand} {item.model}</h2>
                <h2 className="price">₹{item.price}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Woman;