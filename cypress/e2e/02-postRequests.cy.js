/// <reference types='cypress' />

describe('POST CALLS', () => {
  it('Approach 1: Hard Coded JSON Object ', () => {
    const reqBody = {
      tourist_name: 'Sara J.',
      //   change email with every call::
      tourist_email: 'saraj22@gmail.com',
      tourist_location: 'PAS',
    }

    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/Tourist',
      body: reqBody,
    }).then((res) => {
      expect(res.status).to.eql(201)
    })
  })

  it.only('Approach 2: Dynamically Generate JSON Object ', () => {
    const reqBody = {
      tourist_name: Math.random().toString(5).substring(2),
      tourist_email: `${Math.random().toString(5).substring(2)}@gmail.com`,
      tourist_location: 'PAS',
    }

    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/Tourist',
      body: reqBody,
    }).then((res) => {
      expect(res.status).to.eql(201)
      expect(res.body.tourist_name).to.eql(reqBody.tourist_name)
    })
  })
})
