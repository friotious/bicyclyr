
describe('home page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/')
  })
  beforeEach(() => {
        cy.intercept('GET', 'http://dataservice.accuweather.com/currentconditions/v1/351409?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true', 
        { fixtures: 'weather.json' })
        cy.visit('http://localhost:3000/')
  })

  it('should have a homepage', () => {
    cy.url('http://localhost:3000/')
  })

  it('should have a navbar with the name "bicyclyr" links to book ride and all rides', () => {
    cy.contains('Bicyclyr')
    cy.get('.book-ride-text')
      .should
  })
})