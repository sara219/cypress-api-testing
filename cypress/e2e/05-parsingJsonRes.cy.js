/// <reference types='cypress' />

describe('Parsing JSON Response', () => {
  it('Get All Price and Total Price', () => {
    let totalPrice = 0
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      qs: { limit: 5 },
    }).then((res) => {
      expect(res.status).equal(200)
      let data = res.body
      data.forEach((product) => {
        totalPrice += product.price
      })
      cy.log(totalPrice)
    //   expect(totalPrice).equal(899.23)
    })
  })
})
