/// <reference types='cypress' />

/*
 * 1. Get 'Post' Token:: https://simple-books-api.glitch.me/api-clients/
 * 2. Submit 'Post' an order:: https://simple-books-api.glitch.me/orders/
 * 3. Get 'Get' the order we create in step 2:: https://simple-books-api.glitch.me/orders/
 */

describe('API TESTING: Headers and Cookies', () => {
  let accessToken
  let bookID

  before('Create Access Token', () => {
    cy.request({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/api-clients/',
      headers: { 'Content-Type': 'application/json' },
      body: {
        clientName: 'Testing',
        clientEmail: `${Math.random().toString(5).substring(2)}@gmail.com`,
      },
    }).then((res) => {
      accessToken = res.body.accessToken
      cy.log(accessToken)
    })
  })

  before('Create New Order', () => {
    cy.request({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/orders/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        bookId: 1,
        customerName: 'Sara J.',
      },
    }).then((resp) => {
      expect(resp.status).equal(201)
      bookID = resp.body.orderId
    })
  })

  it('Get All Orders', () => {
    cy.request({
      method: 'GET',
      url: `https://simple-books-api.glitch.me/orders/${bookID}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      cookies: {
        cookieName: 'COOKIES',
      },
    }).then((res) => {
      expect(res.status).equal(200)
    })
  })
})
