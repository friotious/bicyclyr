describe('home page', () => {
 
  beforeEach(() => {
        cy.intercept('GET', 'http://dataservice.accuweather.com/currentconditions/v1/351409?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true', 
        { statusCode: 200, fixtures: 'weather.json' })
        cy.visit('http://localhost:3000/all-rides')
  })

  it('should display all previously saved rides', () => {
    cy.get
  })

})