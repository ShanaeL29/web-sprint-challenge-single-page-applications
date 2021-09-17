import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <nav>
        <div className="nav-links">
          <Link to="/">Home </Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <h1>
        Welcome to <br />
        Developerizza Pizzeria!
      </h1>

      <Link to="/pizza" id="order-pizza">
        <button>Order Now!</button>
      </Link>
    </>
  );
}
