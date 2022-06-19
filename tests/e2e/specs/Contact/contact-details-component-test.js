describe("Tests the functionality of the Contact page's Contact Details component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/contact");
  });
  it("should contain a Contact Details section", function () {
    cy.get("#contact-details-section").scrollIntoView().should("be.visible");
  });
  it("should contain a Contact Details component", function () {
    cy.get("#contact-details-section")
      .scrollIntoView()
      .find(".contact-info")
      .should("have.length.at.least", 1)
      .should("be.visible");
  });
});
