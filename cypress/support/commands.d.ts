/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />

// Put type augmentation in a .d.ts so TS sees it before commands.ts compiles.
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Find element(s) by [data-testid].
       * @example cy.getByTestId("next-btn").click()
       */
      getByTestId(
        id: string,
        ...args: any[]
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
