import React from "react";
import "./aboutUs.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import aboutUs from "../../photos/aboutUs.jpg"

const AboutUs = (props) => {
  return (
    <div className="aboutus-container" data-aos={props["data-aos"]} >
      <div className="aboutus-content">
        <h2 className="aboutus-heading">About Us</h2>
        <p className="aboutus-description">
          Welcome to <strong>Foodies Delight</strong>, your go-to platform for all your food cravings! Our mission is to bring the best cuisines from your favorite restaurants right to your doorstep. 
          We pride ourselves on our fast delivery, seamless ordering process, and exceptional customer service. Whether you’re looking for a hearty breakfast, a quick snack, or a fancy dinner, we’ve got you covered.
        </p>
        <p className="aboutus-description">
          With a wide variety of dishes and cuisines to choose from, we aim to connect food lovers with the best local restaurants. Our journey started with a simple idea: to make delicious food accessible to everyone with just a few clicks. Join us in exploring the world of flavors and making every meal memorable!
        </p>
      </div>
      <div className="aboutus-image">
        <LazyLoadImage img 
          src={aboutUs}
          alt="About Us" 
          className="aboutus-img"
          effect='blur'
        />
      </div>
    </div>
  );
};

export default AboutUs;
