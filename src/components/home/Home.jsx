import React from 'react';
import './home.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import pizza from '../../photos/pizza.jpg';
import burger from '../../photos/burger.jpg';
import sushi from '../../photos/sushi.jpg';
import pasta from '../../photos/pasta.jpg';
import desserts from '../../photos/desserts.jpg';
import Hotel from '../hotels/Hotels';

const categories = ['Pizza', 'Burgers', 'Sushi', 'Pasta', 'Desserts'];

const foods = [
  { name: 'Pepperoni Pizza', category: 'Pizza', img: pizza },
  { name: 'Cheeseburger', category: 'Burgers', img: burger },
  { name: 'Sushi Rolls', category: 'Sushi', img: sushi },
  { name: 'Pasta Carbonara', category: 'Pasta', img: pasta },
  { name: 'Chocolate Cake', category: 'Desserts', img: desserts },
];

const Home = () => {
  return (
    <div>
      <div className="home">
        <header className="header">
          <h1>Welcome to Foodie Heaven 🍴</h1>
          <p>Delicious meals, just a click away!</p>
        </header>
        
        <div className="categories">
          {categories.map((category) => (
            <button className="category" key={category}>
              {category}
            </button>
          ))}
        </div>
        
        <div className="food-list" >
          {foods.map((food) => (
            <div className="food-item" key={food.name}>
              <LazyLoadImage img src={food.img} alt={food.name} className="food-img" effect='blur' />
              <h3>{food.name}</h3>
              <button className="order-button">Order Now</button>
            </div>
          ))}
        </div>
      </div>
      <div class='hotels'>
        <Hotel/>

      </div>
    </div>
  );
};

export default Home;
