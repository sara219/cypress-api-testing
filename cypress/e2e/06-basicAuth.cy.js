/// <reference types='cypress' />

describe('Authentication', () => {
  it('Basic Authentication', () => {
    cy.request({
      method: 'GET',
      url: 'https://postman-echo.com/basic-auth',
      auth: {
        user: 'postman',
        pass: 'password',
      },
    }).then((res) => {
      expect(res.status).equal(200)
      expect(res.body.authenticated).equal(true)
    })
  })
})
