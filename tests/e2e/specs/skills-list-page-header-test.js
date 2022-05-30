describe("Skills List page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/skills");
  });
  it("should contain a page header", () => {
    cy.get("#header").should("exist");
  });
  it("should contain large header text", () => {
    cy.get("#header");
    cy.contains("My");
    cy.contains("Technical");
    cy.contains("Skill Set");
  });
  it("should contain a navigation button", () => {
    cy.get("#header")
      .find("a")
      .invoke("attr", "href")
      .should("contain", "#/contact");
  });
  it("should redirect to the Contact page successfully when the Contact button is clicked", function () {
    cy.get("#header").contains("a", "CONTACT").click();
    cy.url().should("eq", "http://localhost:8081/#/contact");
  });
});
