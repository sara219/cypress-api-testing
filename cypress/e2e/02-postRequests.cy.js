/// <reference types='cypress' />

describe('POST CALLS', () => {
  it('Approach 1: Hard Coded JSON Object ', () => {
    const reqBody = {
      tourist_name: 'Sara J.',
    //   change email with every call:: 
      tourist_email: 'sara444@gmail.com',
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
})
