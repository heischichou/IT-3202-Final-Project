describe("Tests the functionality of the Contact page's FAQ component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8081/#/contact");
  });
  it("should contain a FAQ section", function () {
    cy.get("#faq-section").scrollIntoView().should("be.visible");
  });
  it("should contain a FAQ component", function () {
    cy.get("#faq-section")
      .scrollIntoView()
      .find(".qna")
      .should("have.length.at.least", 1)
      .should("be.visible");
  });
  it("should contain a FAQ component with a question", function () {
    cy.get("#faq-section")
      .scrollIntoView()
      .find(".qna")
      .find(".question")
      .should("have.length.at.least", 1)
      .should("be.visible");
  });
  it("should contain a FAQ component with an answer", function () {
    cy.get("#faq-section")
      .scrollIntoView()
      .find(".qna")
      .find(".answer")
      .should("have.length.at.least", 1)
      .should("be.visible");
  });
  it("should contain FAQ components with the same number of questions and answers", function () {
    cy.get("#faq-section")
      .find(".qna")
      .find(".question")
      .then((question) => {
        cy.get("#faq-section")
          .find(".qna")
          .find(".answer")
          .should("have.length", question.length);
      });
  });
});
