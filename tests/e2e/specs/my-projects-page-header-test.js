describe("My Projects page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/projects");
  });
  it("should contain a page header", () => {
    cy.get("#header").should("exist");
  });
  it("should contain large header text", () => {
    cy.get("#header").contains("h1", "My Projects").should("exist");
  });
});
