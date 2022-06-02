describe("Tests HelloWorld page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should check plugin links", function () {
    cy.get("[data-cy=plugins]").children().should("have.length.greaterThan", 0);
  });
  it("should check essential links", function () {
    cy.get("[data-cy=essential]")
      .children()
      .should("have.length.greaterThan", 0);
  });
  it("should check ecosystem links", function () {
    cy.get("[data-cy=eco]").children().should("have.length.greaterThan", 0);
  });
});
