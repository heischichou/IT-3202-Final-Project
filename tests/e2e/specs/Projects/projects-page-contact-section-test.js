describe("Test Contact Section functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/projects");
  });
  it("should check if contact section exists", () => {
    cy.get("#contact-section").should("exist");
  });
  it("should check if message in contact section exists", () => {
    cy.get("#contact-section")
      .find("p")
      .should("exist")
      .contains(
        "I'd love to answer any questions you have, plan collaborations, or work on new projects with you."
      );
  });
  it("should check if contact button exists", () => {
    cy.get("#contact-section").find("a").should("exist").contains("CONTACT ME");
  });
  it("should redirect to Contact page when CONTACT ME is clicked", () => {
    cy.get("#contact-section").contains("a", "CONTACT ME").click();
    cy.url().should("eq", "http://localhost:8081/#/contact");
  });
});
