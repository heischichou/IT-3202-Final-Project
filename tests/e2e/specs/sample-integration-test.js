describe("Tests HelloWorld page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should check plugin links", function () {
    cy.get("[data-cy=plugins]").children().should("have.length.greaterThan", 0);
  });
});
