describe('recite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept(
      'GET',
      'https://www.googleapis.com/books/v1/volumes?q=horror&key=&maxResults=10',
      {
        fixture: 'horror.json',
      }
    ).as('books');
  
  })
  it('Should have a title when a user visits home page', () => {
    cy.get('.home-link > h1').contains('Recite')
  })

  it('Should book cards showing an image', () => {
    cy.get(':nth-child(28) > :nth-child(2) > :nth-child(1)')
    cy.get(':nth-child(28) > :nth-child(2) > :nth-child(1) > .book-hover').contains('Rating')
  })

  it('Should show card description on hover', () => {
    cy.get(':nth-child(28) > :nth-child(2) > :nth-child(1) > .book-hover').contains('Description')
    .click()
   })

   it('Should not show a different cards description on hover', () => {
    cy.get(':nth-child(28) > :nth-child(2) > :nth-child(1) > .book-hover').should('not.exist', 'love')
   })

   it('should take user to buy books site when find shop is clicked', () => {
    cy.get('.shop').click()
    .should('have.attr', 'target', '_blank')
  })
  
})