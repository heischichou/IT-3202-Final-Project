describe("Tests the functionality of the Project page's Project Modal component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/projects/major");
  });
  it("should display a modal when a project is clicked", function () {
    cy.get(".project-card").first().find(".card-img").click();
    cy.get(".project-modal").first().should("be.visible");
  });
  it("should contain a modal with an image", function () {
    cy.get(".project-card").first().find(".card-img").click();
    cy.get(".project-modal").first().find("img").should("be.visible");
  });
  it("should contain a modal with a title", function () {
    cy.get(".project-card").first().find(".card-img").click();
    cy.get(".project-modal").first().find("h6").should("be.visible");
  });
  it("should contain a modal with a tag", function () {
    cy.get(".project-card").first().find(".card-img").click();
    cy.get(".project-modal")
      .first()
      .find(".project-tag")
      .should("have.length.greaterThan", 0)
      .should("be.visible");
  });
  it("should contain a modal with a description", function () {
    cy.get(".project-card").first().find(".card-img").click();
    cy.get(".project-modal").first().find("p").should("be.visible");
  });
});
