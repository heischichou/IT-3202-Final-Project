describe("Tests the functionality of the About Me page's Experience component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should contain an Experience section", function () {
    cy.get("#experience-section").scrollIntoView();
    cy.get(".experience").should("be.visible");
  });
  it("should contain an Experience component", function () {
    cy.get("#experience-section").children(".experience").should("exist");
  });
  it("should contain Experience title", function () {
    cy.get("#experience-section")
      .children(".experience")
      .children(".col-md-5")
      .last()
      .children("h5")
      .invoke("text")
      .should("not.be.empty")
      .should("exist");
  });
  it("should contain Experience service history", function () {
    cy.get("#experience-section")
      .children(".experience")
      .children(".col-md-5")
      .last()
      .children("p")
      .should("exist");
  });
  it("should contain Experience description", function () {
    cy.get("#experience-section")
      .children(".experience")
      .children(".col-md-7")
      .last()
      .children("p")
      .should("exist");
  });
  it("should contain Experience roles", function () {
    cy.get("#experience-section")
      .children(".experience")
      .children(".col-md-7")
      .children(".roles")
      .last()
      .children("div")
      .invoke("text")
      .should("not.be.empty")
      .should("exist");
  });
});
