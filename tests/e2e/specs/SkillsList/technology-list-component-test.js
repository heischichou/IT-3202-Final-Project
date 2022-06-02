describe("Tests the functionality of the Skills List page's Technology Stack component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/skills");
  });
  it("should contain a Technology Stack section", function () {
    cy.get("#tech-skill-section").scrollIntoView().should("be.visible");
  });
  it("should contain more than one Technology List components", function () {
    cy.get("#tech-skill-section")
      .find(".technology")
      .should("have.length.greaterThan", 1);
  });
  it("should contain a Technology List component with a title", function () {
    cy.get("#tech-skill-section")
      .scrollIntoView()
      .find(".technology")
      .first()
      .find(".tech-title")
      .should("be.visible");
  });
  it("should contain a Technology List component with a scale", function () {
    cy.get("#tech-skill-section")
      .scrollIntoView()
      .find(".technology")
      .first()
      .find(".tech-scale")
      .should("be.visible");
  });
  it("should contain a Technology List component with a 5-point scale", function () {
    cy.get("#tech-skill-section")
      .scrollIntoView()
      .find(".technology")
      .first()
      .find(".tech-scales")
      .should("have.length", 5);
  });
  it("should contain Technology List components with equal numbers of titles and scales", function () {
    cy.get("#tech-skill-section")
      .find(".technology")
      .find(".tech-title")
      .then((techTitle) => {
        const titleCount = Cypress.$(techTitle).length;
        cy.get("#tech-skill-section")
          .find(".technology")
          .find(".tech-scale")
          .should("have.length", titleCount);
      });
  });
});
