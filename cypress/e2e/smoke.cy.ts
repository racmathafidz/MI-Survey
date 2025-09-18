/// <reference types="cypress" />

describe("App smoke", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it("loads page", () => {
    cy.visit("/");
     cy.get('[data-testid="survey-page"]').should("exist");
  });

  it("render Q1 & Next disabled until answer chosen", () => {
    cy.visit("/");
    cy.get('[data-testid="question-title"]').should("exist");
    cy.get('[data-testid="next-btn"]').should("be.disabled");
    cy.get('[data-testid="radio-q-1"]').first().click();
    cy.get('[data-testid="next-btn"]').should("not.be.disabled");
  });
});
