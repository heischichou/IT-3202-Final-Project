const path = require("path");

describe("About Me page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should contain a page header", function () {
    cy.get("#header").should("exist");
  });
  it("should contain large header text", function () {
    cy.get("#header");
    cy.contains("Hello, ");
    cy.contains("I'm Rodney");
    cy.contains("Pantonial");
  });
  it("should contain header description", function () {
    cy.get("#header")
      .children(".row")
      .first()
      .children("div")
      .last()
      .contains("p", "Lorem ipsum dolor sit amet")
      .should("exist");
  });
  it("should contain social links", function () {
    cy.get("#header")
      .children(".row")
      .first()
      .children(".container-fluid")
      .last()
      .children(".row")
      .last()
      .children(".social-link")
      .should("exist");
  });
  it("should verify if the cv is successfully downloaded", () => {
    const downloads = Cypress.config("downloadsFolder");
    cy.contains("a[href='resume.pdf']", "DOWNLOAD CV").should("exist").click();
    cy.readFile(path.join(downloads, "Pantonial Resume.pdf")).should("exist");
  });
});
