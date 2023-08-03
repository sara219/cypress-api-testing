/// <reference types='cypress' />

describe('HTTP REQUEST', () => {
  it('GET Call', () => {
    // HTTP GET request and verify the status code
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200)
  })

  it('POST Call', () => {
    // HTTP POST request
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Test Post Method',
        body: 'this is a testing post method',
        userID: 1,
      },
    })
      .its('status')
      .should('eql', 201)
  })

  it('PUT Call', () => {
    // HTTP PUT request
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        title: 'Test Put - update',
        body: 'Put Call',
        userID: 1,
        id: 1,
      },
    })
      .its('status')
      .should('equal', 200)
  })

  it('DELETE Call', () => {
    // HTTP DELETE request
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    })
      .its('status')
      .should('equal', 200)
  })
})
