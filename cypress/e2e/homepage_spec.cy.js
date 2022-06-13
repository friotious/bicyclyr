import weather from '../../src/'

describe('home page', () => {

  beforeEach(() => {
        cy.intercept('GET', 'http://dataservice.accuweather.com/currentconditions/v1/351409?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true', weather).as("testData")
 )
  })
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})