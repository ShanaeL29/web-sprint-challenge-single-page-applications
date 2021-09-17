import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <header>
        <h1>LAMBDA EATS</h1>
        <nav>
          <div className="nav-links">
            <Link to="/">Home </Link>
          </div>
        </nav>
      </header>

      <div className="pizzaImage">
        <h1>Developerizza Pizzeria!</h1>
        <Link to="/pizza" id="order-pizza">
          <button>Order Now!</button>
        </Link>
      </div>

      <h2>Food Delivery in Kennesaw</h2>
      <div className="restaurants">
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1528669826296-dbd6f641707d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"
            alt="McDonald's Burger"
          />
          <h3>McDonald's</h3>
          <p>$ - American - Fast Food - Burgers</p>
          <span>20 - 30 Min</span> <span>$3.99 Delivery Fee</span>
        </div>
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1617622141675-d3005b9067c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Bowl of Chow Mein Noodles"
          />
          <h3>Panda Express</h3>
          <p>$ - American - Chinese Cuisine</p>
          <span>25 - 30 Min</span> <span>$1.99 Delivery Fee</span>
        </div>
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
            alt="Nachos with queso cheese and toppings"
          />
          <h3>Willy's Mexicana Grill</h3>
          <p>$ - American - Fast Food - Burgers</p>
          <span>15 - 25 Min</span> <span>$3.99 Delivery Fee</span>
        </div>
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"
            alt="Teppanyaki dishes on a table"
          />
          <h3>Teriyaki Box</h3>
          <p>$ - Asian - Teppanyaki</p>
          <span>30 - 40 Min</span> <span>$1.99 Delivery Fee</span>
        </div>
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80"
            alt="Plate of tacos"
          />
          <h3>Tin Lizzy's Cantina</h3>
          <p>$ - Mexican - Tex-Mex</p>
          <span>15 - 25 Min</span> <span>$2.99 Delivery Fee</span>
        </div>
        <div className="restaurant">
          <img
            className="restImg"
            src="https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80"
            alt="Vegetarian sub sandwich"
          />
          <h3>Capriotti's Sandwich Shop</h3>
          <p>$ - Sandwiches - Family Meals</p>
          <span>15 - 25 Min</span> <span>$2.99 Delivery Fee</span>
        </div>
      </div>
    </>
  );
}
