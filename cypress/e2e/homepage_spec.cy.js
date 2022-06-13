
describe('home page', () => {
 
  beforeEach(() => {
        cy.intercept('GET', 'http://dataservice.accuweather.com/currentconditions/v1/351409?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true', 
        { fixtures: 'weather.json' })
        cy.visit('http://localhost:3000/')
  })

  it('should have a homepage', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should have a navbar with the name "bicyclyr" links to book ride and all rides', () => {
    cy.get('[test-cy="bicyclyr-nav"]').should('have.text', 'Bicyclyr' ) 
    cy.get('[test-cy="book-ride-nav"]').should('have.text', 'book ride')
    cy.get('[test-cy="all-rides-nav"]').should('have.text', 'all rides')
    cy.get('[test-cy="all-rides-nav"]').click()
    cy.url().should('eq', 'http://localhost:3000/all-rides')
    cy.get('[test-cy="bicyclyr-nav"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('[test-cy="bicyclyr-nav"]').click()
    cy.url().should('eq', 'http://localhost:3000/book-ride')
  })

  it('should also have larger links for book ride and all rides in the main page area', () => {
    cy.get()

  })
})