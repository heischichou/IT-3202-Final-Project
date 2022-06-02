describe("Tests the functionality of the About Me page's Expertise component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should contain an Expertise section", function () {
    cy.get("#expertise-section").scrollIntoView();
    cy.get(".expertise").should("be.visible");
  });
  it("should contain an Expertise component", function () {
    cy.get("#expertise-section").children(".expertise").should("exist");
  });
  it("should contain Expertise image", function () {
    cy.get("#expertise-section")
      .children(".expertise")
      .children(".col")
      .first()
      .children(".expertise-image")
      .should("exist");
  });
  it("should contain Expertise title", function () {
    cy.get("#expertise-section")
      .children(".expertise")
      .children(".col")
      .last()
      .children("h1")
      .should("exist");
  });
  it("should contain Expertise description", function () {
    cy.get("#expertise-section")
      .children(".expertise")
      .children(".col")
      .last()
      .children("p")
      .should("exist");
  });
});
