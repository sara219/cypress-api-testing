/// <reference types='cypress' />

describe('API Testing ', () => {
  it('Passing Query Parameters', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users',
      qs: { page: 2 },
    }).then((res) => {
      expect(res.status).to.eql(200)
      expect(res.body.page).to.eql(2)

      expect(res.body.data[0]).has.property('id', 7)
    })
  })
})
