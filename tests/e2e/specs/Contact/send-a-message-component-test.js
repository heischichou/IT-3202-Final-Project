describe("Test Send a Message functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/contact");
  });
  it("should check if the Send a Message Section exists", () => {
    cy.get("#send-a-message-component").scrollIntoView().should("exist");
  });
  it("should check if Send a Message Form exists", () => {
    cy.get("#send-a-message-component")
      .find("form")
      .should("exist")
      .should("have.attr", "action");
    cy.get("#send-a-message-component")
      .find("form")
      .invoke("attr", "action")
      .should("contain", "mailto:help@pantonial.dev");
  });
  it("should check if input sections of Send a Message Section exists", () => {
    cy.get("[name=subject]").should("exist");
    cy.get("[name=email]").should("exist");
    cy.get("[name=body]").should("exist");
  });
  it("should check if the submit button for Send a Message Section exists", () => {
    cy.get("[value=SUBMIT]").should("exist");
  });
});
