import React from "react";

function Order({ details }) {
  if (!details) {
    return <h3>Working on fetching your order...</h3>;
  }

  return (
    <div>
      <h2>We are working on your order!</h2>
      <h3>Order Details</h3>
      <h4>Name: {details.name}</h4>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
        </div>
      )}
      <p>{details.glutenFree}</p>
      <p>{details.special}</p>
      <p>{details.quantity}</p>
    </div>

    //   <h1>Order Confirmation</h1>
    //   <p>{JSON.stringify(details)}</p>
    // </div>
  );
}

export default Order;
