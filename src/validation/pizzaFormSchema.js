import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Required"),
  sauce: yup.string().required("Required"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  mushrooms: yup.boolean(),
  bananaPeppers: yup.boolean(),
  onions: yup.boolean(),
  greenPeppers: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
  glutenFree: yup.boolean(),
  special: yup.string(),
  quantity: yup.number().positive().required("Must be 1 or more"),
});

export default pizzaFormSchema;
