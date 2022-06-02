describe("Header navigation links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should redirect to the About page successfully when ABOUT ME is clicked", function () {
    cy.contains(".nav-link", "ABOUT ME").click();
    cy.url().should("eq", "http://localhost:8081/#/");
  });
  it("should redirect to the Projects page successfully when PROJECTS is clicked", function () {
    cy.contains(".nav-link", "PROJECTS").click();
    cy.url().should("eq", "http://localhost:8081/#/projects");
  });
  it("should redirect to the Skills page successfully when SKILLS is clicked", function () {
    cy.contains(".nav-link", "SKILLS").click();
    cy.url().should("eq", "http://localhost:8081/#/skills");
  });
  it("should redirect to the Contact page successfully when CONTACT is clicked", function () {
    cy.contains(".nav-link", "CONTACT").click();
    cy.url().should("eq", "http://localhost:8081/#/contact");
  });
  it("should have only one active nav link", function () {
    cy.get(".router-link-active").should("have.attr", "aria-current", "page");
    cy.get(".router-link-active").should(($link) => {
      expect($link).to.have.length(1);
    });
  });
});
