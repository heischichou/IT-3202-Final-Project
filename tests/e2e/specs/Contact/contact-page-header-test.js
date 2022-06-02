describe("Contact page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/contact");
  });
  it("should contain a page header", function () {
    cy.get("#header").should("exist");
  });
  it("should contain large header text", function () {
    cy.get("#header").contains("h1", "Get in touch").should("exist");
  });
  it("should contain header description", function () {
    cy.get("#header")
      .contains("p", "Lorem ipsum dolor sit amet")
      .should("exist");
  });
});
