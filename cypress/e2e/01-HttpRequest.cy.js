/// <reference types='cypress' />

describe('HTTP REQUEST', () => {
  it('GET Call', () => {
    // HTTP GET request and verify the status code 
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200)
  })
})
