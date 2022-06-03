describe("Tests the functionality of the Skills List page's Skills List component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/skills");
  });
  it("should contain a Skills List section", function () {
    cy.get(".skills-list-component")
      .first()
      .scrollIntoView()
      .should("be.visible");
  });
  it("should contain a header for each skill type", function () {
    cy.get(".skills-list-component")
      .should("exist")
      .should("have.length.greaterThan", 1)
      .then((el) => {
        const count = Cypress.$(el).length;
        cy.get(".skills-list-component")
          .find("h1")
          .should("have.length", count);
      });
  });
  it("should contain an image for each skill type", function () {
    cy.get(".skills-list-component")
      .should("exist")
      .should("have.length.greaterThan", 1)
      .then((el) => {
        const count = Cypress.$(el).length;
        cy.get(".skills-list-component")
          .find("img")
          .should("have.length", count);
      });
  });
  it("should contain a skill list for each skill type", function () {
    cy.get(".skills-list-component")
      .should("exist")
      .should("have.length.greaterThan", 1)
      .then((el) => {
        const count = Cypress.$(el).length;
        cy.get(".skills-list-component")
          .find("ul")
          .should("have.length", count);
      });
  });
  it("should contain more than one skill listed for each skill type", function () {
    cy.get(".skills-list-component")
      .first()
      .find("ul")
      .children("li")
      .should("have.length.greaterThan", 1);

    cy.get(".skills-list-component")
      .last()
      .find("ul")
      .children("li")
      .should("have.length.greaterThan", 1);
  });
});
