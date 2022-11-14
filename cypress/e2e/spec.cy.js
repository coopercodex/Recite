describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept(
      'GET',
      'https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&key=AIzaSyDtkwfURWB2svWs7KliBJgLfs0RvGymjSc',
      {
        fixture: 'books.json',
      }
    ).as('books');
  })
  it('Should have a title when a user visits home page', () => {
    cy.get('.home-link > h1').contains('Recite')
  })
  it('Should book cards showing an image', () => {
    cy.get('.App > :nth-child(3) > :nth-child(1)').get('#_tYuEAAAQBAJ')
    cy.get(':nth-child(1) > .book-hover').contains('Rating')
  })
  it('Should contain a horror genre', () => {
    cy.intercept(
      'GET',
      'https://www.googleapis.com/books/v1/volumes?q=horror&key=AIzaSyDtkwfURWB2svWs7KliBJgLfs0RvGymjSc',
      {
        fixture: 'horror.json',
      }
    ).as('books');
  
  })
})