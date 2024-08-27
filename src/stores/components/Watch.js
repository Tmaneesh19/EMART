import React from 'react';
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';

const Watch = () => {
  const firstFiveImages = watchData.slice(0, 5);

  return (
    <>
      <div className="propage">
        <div className="proTitle">
          <h2>Watches</h2>
        </div>
        <div className="proSection">
          {firstFiveImages.map((item, index) => (
            <div className="imgBox" key={index}>
              <Link to={`/watch/${item.id}`} className="noDecoration">
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

export default Watch;