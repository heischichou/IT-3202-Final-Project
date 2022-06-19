describe("Check Project component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/projects");
  });
  it("should redirect you to Major Projects when clicked", () => {
    cy.contains(".btn", "MAJOR PROJECTS").click();
    cy.get("#major").scrollIntoView().should("exist");
  });
  it("should redirect you to Minor Projects when clicked", () => {
    cy.contains(".btn", "MINOR PROJECTS").click();
    cy.get("#minor").scrollIntoView().should("exist");
  });
  it("should redirect you to Personal Projects when clicked", () => {
    cy.contains(".btn", "PERSONAL PROJECTS").click();
    cy.get("#minor").scrollIntoView().should("exist");
  });
});
