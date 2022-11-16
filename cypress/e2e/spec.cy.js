describe('recite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept(
      'GET',
      'https://www.googleapis.com/books/v1/volumes?q=fiction&key=',
      {
        fixture: 'books.json',
      }
    ).as('books');
  })

  it('Should have a title when a user visits home page', () => {
    cy.get('.home-link > h1').contains('Recite')
  })    

  it('Should have a title when a user visits home page', () => {
    cy.get('.footer').contains('Recite')
  })
  
  it('Should book cards showing an image', () => {
    cy.get('.App > :nth-child(3) > :nth-child(1)').get('#_tYuEAAAQBAJ')
    cy.get(':nth-child(1) > .book-hover').contains('Rating')
  })

 it('Should show card description on hover', () => {
  cy.get(':nth-child(3) > :nth-child(1) > .book-hover').contains('Description')
  .click()
 })

 it('should not redirect user when arrow is clicked on home screen', () => {
  cy.get('.home-link > h1').click()
  .url().should('include', '/')
})

it ('should not take user movies details page when home is clicked', () => {
  cy.get('.home-link > h1').click()
  cy.get('.home-link > h1').click({ multiple: true })
  cy.url().should('include', '/')
  cy.get().should('not.exist', '/5')
})

})