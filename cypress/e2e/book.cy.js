
describe('Add Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('Should show error messgaes when fileds are blank!', () => {
    const titleField = '[data-cy="title-field"]';
    const authorField = '[data-cy="author-field"]';
    const submitBtn = '[data-cy="submit-btn"]';

    cy.get(submitBtn).click();

    cy.get(titleField).should('have.attr', 'required')
    cy.get(authorField).should('have.attr', 'required')
  })

  it('Should add a new book', () => {
    const titleField = '[data-cy="title-field"]';
    const authorField = '[data-cy="author-field"]';
    const submitBtn = '[data-cy="submit-btn"]';

    cy.get(titleField).type('Laws Of Human Nature');
    cy.get(authorField).type('Robert Greene');

    // Remove all children
    cy.get('.book-list').invoke('empty');

    // Assert that the div has no children
    cy.get('.book-list').should('be.empty');

    cy.get(submitBtn).click();

    cy.get('.book-list').should('have.length', 1);
  })

  i('Should remove a book', () => {

  })
})