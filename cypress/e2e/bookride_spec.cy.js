
describe('home page', () => {
 
  beforeEach(() => {
        cy.intercept('GET', 'http://dataservice.accuweather.com/currentconditions/v1/351409?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true', 
        { fixtures: 'weather.json' })
        cy.visit('http://localhost:3000/book-ride')
  })

  it('should have a form with title of "/Book your ride" display todays temp, todays point multiple', () => {
    cy.contains('Book your Ride')
    cy.get('[test-cy="form-box"]')
    .children().should('have.length', 6)
    .should('contain', 'Todays Temp: ')
    .should('contain', 'Todays Temp: ')
    .should('contain', 'Todays Multiple: ')
    .should('contain', 'points you will make: ')
  })

  it('should be able to input miles and see the points you will make change', () => {
    cy.get('#test')
    .type('10')

    // .type('10').should('have.value', '10')
    // .get('[test-cy="points"]').should('contain', 'points you will make: ')
  })

  // it('should store your ride when you click the save ride button and be viewable in allRides page', () => {
   
  //   cy.get('input[type="text"]')
  //   .type(10)
  //   // .get('[test-cy="input-miles"]').should('contains', '10')
  //   cy.get('[test-cy="save-ride-button"]').click({force: true})
  //   cy.get('[test-cy="all-rides-nav"]').click({force: true})
  

  // })


})