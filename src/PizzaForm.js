import React from "react";

export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;
  // const button = document.getElementById("order-button");
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
    // button.addEventListener("click", function () {
    //   prompt("Success");
    // });
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse =
      type === "checkbox"
        ? checked
        : type === "number"
        ? parseInt(value)
        : value;
    change(name, valueToUse);
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <h1>Build Your Own Pizza</h1>
      <div>
        <img
          className="pizza"
          src="https://images.squarespace-cdn.com/content/v1/52cf5852e4b0c1274ad7d85c/1427664439482-0HKP7K78UFF5YZD8M0B6/Uncle-Maddios-heart.jpg"
          alt="A visual of a woman puttin sauce on pizza dough in the shape of a heart"
        />
      </div>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.sauce}</div>
        <div>{errors.special}</div>
        <div>{errors.quantity}</div>
      </div>
      <label>
        Enter name for your order
        <input
          id="name-input"
          type="text"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label>Customize Your Pizza</label>
      <label>Choice of Size</label>
      <select
        id="size-dropdown"
        name="size"
        value={values.size}
        onChange={onChange}
      >
        <option value="">-Select a size-</option>
        <option value="Individual">Individual</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="X-Large">X-Large</option>
      </select>

      <label>Choice of Sauce</label>
      <label>
        <input
          id="radio1"
          type="radio"
          name="sauce"
          value="originalRed"
          onChange={onChange}
          checked={values.sauce === "originalRed"}
        />
        Original Red
      </label>
      <label>
        <input
          id="radio2"
          type="radio"
          name="sauce"
          value="garlicRanch"
          onChange={onChange}
          checked={values.sauce === "garlicRanch"}
        />
        Garlic Ranch
      </label>
      <label>
        <input
          id="radio3"
          type="radio"
          name="sauce"
          value="bbq"
          onChange={onChange}
          checked={values.sauce === "bbq"}
        />
        BBQ Sauce
      </label>
      <label>
        <input
          id="radio4"
          type="radio"
          name="sauce"
          value="spinachAlfredo"
          onChange={onChange}
          checked={values.sauce === "spinachAlfredo"}
        />
        Spinach Alfredo
      </label>
      <label>Add Toppings</label>
      <label>
        <input
          type="checkbox"
          name="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
        Pepperoni
      </label>
      <label>
        <input
          type="checkbox"
          name="sausage"
          checked={values.sausage}
          onChange={onChange}
        />
        Sausage
      </label>
      <label>
        <input
          type="checkbox"
          name="canadianBacon"
          checked={values.canadianBacon}
          onChange={onChange}
        />
        Canadian Bacon
      </label>
      <label>
        <input
          type="checkbox"
          name="spicyItalianSausage"
          checked={values.spicyItalianSausage}
          onChange={onChange}
        />
        Spicy Italian Sausage
      </label>
      <label>
        <input
          type="checkbox"
          name="grilledChicken"
          checked={values.grilledChicken}
          onChange={onChange}
        />
        Grilled Chicken
      </label>
      <label>
        <input
          type="checkbox"
          name="mushrooms"
          checked={values.mushrooms}
          onChange={onChange}
        />
        Mushrooms
      </label>
      <label>
        <input
          type="checkbox"
          name="bananaPeppers"
          checked={values.bananaPeppers}
          onChange={onChange}
        />
        Banana Peppers
      </label>
      <label>
        <input
          type="checkbox"
          name="onions"
          checked={values.onions}
          onChange={onChange}
        />
        Onions
      </label>
      <label>
        <input
          type="checkbox"
          name="greenPeppers"
          checked={values.greenPeppers}
          onChange={onChange}
        />
        Green Peppers
      </label>
      <label>
        <input
          type="checkbox"
          name="dicedTomatoes"
          checked={values.dicedTomatoes}
          onChange={onChange}
        />
        Diced Tomatoes
      </label>
      <label>
        <input
          type="checkbox"
          name="blackOlives"
          checked={values.blackOlives}
          onChange={onChange}
        />
        Black Olives
      </label>
      <label>
        <input
          type="checkbox"
          name="roastedGarlic"
          checked={values.roastedGarlic}
          onChange={onChange}
        />
        Roasted Garlic
      </label>
      <label>
        <input
          type="checkbox"
          name="artichokeHearts"
          checked={values.artichokeHearts}
          onChange={onChange}
        />
        Artichoke Hearts
      </label>
      <label>
        <input
          type="checkbox"
          name="threeCheese"
          checked={values.threeCheese}
          onChange={onChange}
        />
        Three Cheese
      </label>
      <label>
        <input
          type="checkbox"
          name="pineapple"
          checked={values.pineapple}
          onChange={onChange}
        />
        Pineapple
      </label>
      <label>
        <input
          type="checkbox"
          name="extraCheese"
          checked={values.extraCheese}
          onChange={onChange}
        />
        Extra Cheese
      </label>
      <label>Choice of Substitute</label>
      <label>
        <input
          type="checkbox"
          name="glutenFree"
          checked={values.glutenFree}
          onChange={onChange}
        />
        Gluten Free Crust (+ $1.00)
      </label>
      <label>
        Special Instructions
        <input
          id="special-text"
          value={values.special}
          name="special"
          type="text"
          onChange={onChange}
        />
      </label>
      <label>
        Quantity:
        <input
          value={values.quantity}
          name="quantity"
          type="number"
          onChange={onChange}
        />
      </label>
      <button disabled={disabled} id="order-button" type="submit">
        Add to Order
      </button>
    </form>
  );
}
