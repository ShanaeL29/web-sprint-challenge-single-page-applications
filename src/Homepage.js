import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>LAMBDA EATS</h1>
      <nav>
        <div className="nav-links">
          <Link to="/">Home </Link>
          {/* <Link to="/pizza">Order</Link> */}
        </div>
      </nav>
      <h1>Developerizza Pizzeria!</h1>
      <Link to="/pizza" id="order-pizza">
        <button>Order Now!</button>
      </Link>
      <h2>Food Delivery in Kennesaw</h2>
      <div>
        <img
          src="https://unsplash.com/photos/BJ6Bkrl1e-U"
          alt="McDonald's Burger"
        />
        <h3>McDonald's</h3>
        <p>$ - American - Fast Food - Burgers</p>
        <span>20 - 30 Min</span> <span>$3.99 Delivery Fee</span>
      </div>
      <div>
        <h3>Panda Express</h3>
        <p>$ - American - Chinese Cuisine</p>
        <span>25 - 30 Min</span> <span>$1.99 Delivery Fee</span>
      </div>
      <div>
        <h3>Willy's Mexicana Grill</h3>
        <p>$ - American - Fast Food - Burgers</p>
        <span>15 - 25 Min</span> <span>$3.99 Delivery Fee</span>
      </div>
      <div>
        <h3>Teriyaki Box</h3>
        <p>$ - Asian - Teppanyaki</p>
        <span>30 - 40 Min</span> <span>$1.99 Delivery Fee</span>
      </div>
      <div>
        <h3>Tin Lizzy's Cantina</h3>
        <p>$ - Mexican - Tex-Mex</p>
        <span>15 - 25 Min</span> <span>$2.99 Delivery Fee</span>
      </div>
      <div>
        <h3>Capriotti's Sandwich Shop</h3>
        <p>$ - Sandwiches - Family Meals</p>
        <span>15 - 25 Min</span> <span>$2.99 Delivery Fee</span>
      </div>
    </>
  );
}
