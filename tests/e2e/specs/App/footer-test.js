describe("Footer Content", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/");
  });
  it("should check if footer exists", function () {
    cy.get("footer").should("be.visible");
  });
  it("should check text content within footer", function () {
    cy.get("footer").contains("p", "Developed by Team Ednifran");
  });
});
