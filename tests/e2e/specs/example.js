// https://docs.cypress.io/api/table-of-contents
// run "npm run test:e2e" to start integration testing

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});
