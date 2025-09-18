/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />
export {}; // make this an ES module

Cypress.Commands.add("getByTestId", (id: string, ...args) => {
  return cy.get(`[data-testid="${id}"]`, ...args as any);
});
