describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  cy.get('input[name="firstName"]').should('have.value', 'Homer')
})