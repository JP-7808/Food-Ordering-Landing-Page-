import React from "react";
import "./hotels.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
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

const Hotel = (props) => {
  return (
    <div className="hotel-container" data-aos="zoom-out-up" >
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <LazyLoadImage img src={hotel.image} alt={hotel.name} className="hotel-image" effect='blur' />
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
