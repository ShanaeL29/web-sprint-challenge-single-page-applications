describe("Sprint Challenge Single Page Applications", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.visit("http://localhost:3000/pizza");
  });

  const foobarInput = () => cy.get("input[name=foobar]");
  const name = () => cy.get("input[id='name-input']");
  const size = () => cy.get("select[id='size-dropdown']");
  const sauce = () => cy.get("input[name=sauce]");
  //   const sauce = () => cy.get('[type="radio"]');
  const pepperoni = () => cy.get("input[name=pepperoni]");
  const sausage = () => cy.get("input[name=sausage");
  const canadianBacon = () => cy.get("input[name=canadianBacon");
  const spicyItalianSausage = () => cy.get("input[name=spicyItalianSausage");
  const grilledChicken = () => cy.get("input[name=grilledChicken");
  const mushrooms = () => cy.get("input[name=mushrooms");
  const bananaPeppers = () => cy.get("input[name=bananaPeppers");
  const onions = () => cy.get("input[name=onions");
  const greenPeppers = () => cy.get("input[name=greenPeppers");
  const dicedTomatoes = () => cy.get("input[name=dicedTomatoes");
  const blackOlives = () => cy.get("input[name=blackOlives");
  const roastedGarlic = () => cy.get("input[name=roastedGarlic");
  const artichokeHearts = () => cy.get("input[name=artichokeHearts");
  const threeCheese = () => cy.get("input[name=threeCheese");
  const pineapple = () => cy.get("input[name=pineapple");
  const extraCheese = () => cy.get("input[name=extraCheese");
  const glutenFree = () => cy.get("input[name=glutenFree");
  const special = () => cy.get("input[name=special");
  const quantity = () => cy.get("input[name=quantity");
  const orderButton = () => cy.get("button[id='order-button']");

  it("Sanity check to make sure that tests work", () => {
    expect(1 + 4).to.equal(5);
    expect(3 + 3).not.to.equal(7);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  it("The proper elements are showing", () => {
    foobarInput().should("not.exist");
    name().should("exist");
    size().should("exist");
    sauce().should("exist");
    pepperoni().should("exist");
    sausage().should("exist");
    canadianBacon().should("exist");
    spicyItalianSausage().should("exist");
    grilledChicken().should("exist");
    mushrooms().should("exist");
    bananaPeppers().should("exist");
    onions().should("exist");
    greenPeppers().should("exist");
    dicedTomatoes().should("exist");
    blackOlives().should("exist");
    roastedGarlic().should("exist");
    artichokeHearts().should("exist");
    threeCheese().should("exist");
    pineapple().should("exist");
    extraCheese().should("exist");
    glutenFree().should("exist");
    special().should("exist");
    quantity().should("exist");
    orderButton().should("exist");
    cy.contains("Add to Order").should("exist");
  });

  describe("Filling out the inputs and submitting", () => {
    it("Can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });

    it("Order button starts out disabled", () => {
      orderButton().should("be.disabled");
    });

    it("Can type in the inputs", () => {
      name()
        .should("have.value", "")
        .type("Shanae")
        .should("have.value", "Shanae");

      special()
        .should("have.value", "")
        .type("Please leave at door")
        .should("have.value", "Please leave at door");

      quantity().should("have.value", "").type(3).should("have.value", 3);
    });

    it("Can select multiple toppings", () => {
      pepperoni().check().should("have.value", "on");
      sausage().check().should("have.value", "on");
      canadianBacon().check().should("have.value", "on");
      spicyItalianSausage().check().should("have.value", "on");
      grilledChicken().check().should("have.value", "on");
      mushrooms().check().should("have.value", "on");
      bananaPeppers().check().should("have.value", "on");
      onions().check().should("have.value", "on");
      greenPeppers().check().should("have.value", "on");
      dicedTomatoes().check().should("have.value", "on");
      blackOlives().check().should("have.value", "on");
      roastedGarlic().check().should("have.value", "on");
      artichokeHearts().check().should("have.value", "on");
      threeCheese().check().should("have.value", "on");
      pineapple().check().should("have.value", "on");
      extraCheese().check().should("have.value", "on");
    });

    it("Order button enables when required inputs are completed", () => {
      name().type("Shanae");
      size().select("Small");
      sauce().check({ multiple: true });
      quantity().type(3);
      orderButton().should("not.be.disabled");
    });

    it("Order button submits the form and resets the inputs", () => {
      name().type("Shanae");
      size().select("Medium");
      sauce().check({ multiple: true });
      quantity().type(5);
      orderButton().click();
      name().should("have.value", "");
      size().should("have.value", "");
      quantity().should("have.value", "");
    });
  });
});
