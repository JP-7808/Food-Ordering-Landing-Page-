import React from "react";
import "./hotels.css";
import hotelOne from '../../photos/hotelOne.jpg'
import hotelTwo from '../../photos/hotelTwo.jpg'
import hotelThree from '../../photos/hotelThree.jpg'

const hotels = [
  {
    id: 1,
    name: "Grand Gourmet Hotel",
    image: hotelOne,
    foodDetails: "Continental, Italian, Chinese",
  },
  {
    id: 2,
    name: "Cozy Corner Inn",
    image: hotelTwo,
    foodDetails: "Indian, Thai, Desserts",
  },
  {
    id: 3,
    name: "Luxury Delights Resort",
    image: hotelThree,
    foodDetails: "Seafood, Grills, Beverages",
  },
];

const Hotel = () => {
  return (
    <div className="hotel-container">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <div className="hotel-info">
            <h3 className="hotel-name">{hotel.name}</h3>
            <p className="hotel-food-details">{hotel.foodDetails}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotel;
