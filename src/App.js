import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import PizzaForm from "./PizzaForm";
import Order from "./Order";
import schema from "./validation/pizzaFormSchema";
import axios from "axios";
import * as yup from "yup";

const initialPizzaFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  mushrooms: false,
  bananaPeppers: false,
  onions: false,
  greenPeppers: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  glutenFree: false,
  special: "",
  quantity: "",
};

const initialPizzaFormErrors = {
  name: "",
  size: "",
  sauce: "",
  special: "",
  quantity: "",
};

const initialState = [];
const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialState);

  const [pizzaFormValues, setPizzaFormValues] = useState(
    initialPizzaFormValues
  );
  const [pizzaFormErrors, setPizzaFormErrors] = useState(
    initialPizzaFormErrors
  );
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setPizzaFormErrors({ ...pizzaFormErrors, [name]: "" }))
      .catch((err) =>
        setPizzaFormErrors({ ...pizzaFormErrors, [name]: err.errors[0] })
      );
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setPizzaFormValues({ ...pizzaFormValues, [name]: value });
  };

  const postNewOrder = (testOrder) => {
    axios
      .post("https://reqres.in/api/orders", testOrder)
      .then((res) => {
        console.log(res);
        setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err));
    setPizzaFormValues(initialPizzaFormValues);
  };

  const formSubmit = () => {
    const testOrder = {
      // Initial method but did not list toppings as booleans...
      //   name: pizzaFormValues.name.trim(),
      //   size: pizzaFormValues.size,
      //   sauce: pizzaFormValues.sauce.trim(),
      //   toppings: [
      //     "pepperoni",
      //     "sausage",
      //     "canadianBacon",
      //     "spicyItalianSausage",
      //     "grilledChicken",
      //     "mushrooms",
      //     "bananaPeppers",
      //     "onions",
      //     "greenPeppers",
      //     "dicedTomatoes",
      //     "blackOlives",
      //     "roastedGarlic",
      //     "artichokeHearts",
      //     "threeCheese",
      //     "pineapple",
      //     "extraCheese",
      //   ].filter((topping) => !!pizzaFormValues[topping]),
      //   glutenFree: pizzaFormValues.glutenFree,
      //   special: pizzaFormValues.special,
      //   quantity: pizzaFormValues.quantity,
      // };
      name: pizzaFormValues.name.trim(),
      size: pizzaFormValues.size,
      sauce: pizzaFormValues.sauce.trim(),
      pepperoni: pizzaFormValues.pepperoni,
      sausage: pizzaFormValues.sausage,
      canadianBacon: pizzaFormValues.canadianBacon,
      spicyItalianSausage: pizzaFormValues.spicyItalianSausage,
      grilledChicken: pizzaFormValues.grilledChicken,
      mushrooms: pizzaFormValues.mushrooms,
      bananaPeppers: pizzaFormValues.bananaPeppers,
      onions: pizzaFormValues.onions,
      greenPeppers: pizzaFormValues.greenPeppers,
      dicedTomatoes: pizzaFormValues.dicedTomatoes,
      blackOlives: pizzaFormValues.blackOlives,
      roastedGarlic: pizzaFormValues.roastedGarlic,
      artichokeHearts: pizzaFormValues.artichokeHearts,
      threeCheese: pizzaFormValues.threeCheese,
      pineapple: pizzaFormValues.pineapple,
      extraCheese: pizzaFormValues.extraCheese,
      glutenFree: pizzaFormValues.glutenFree,
      special: pizzaFormValues.special,
      quantity: pizzaFormValues.quantity,
    };
    postNewOrder(testOrder);
  };

  useEffect(() => {
    schema.isValid(pizzaFormValues).then((valid) => setDisabled(!valid));
  }, [pizzaFormValues]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/pizza">
          <PizzaForm
            values={pizzaFormValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={pizzaFormErrors}
          />
        </Route>
        {orders.map((order) => {
          return <Order key={order.name} details={order} />;
        })}
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}
