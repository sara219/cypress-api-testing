/// <reference types='cypress' />

//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

// https://api.github.com/users/sara219/repos

describe('Bearer Token Auth', () => {
  const token =
    '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'
  it('Bearer Token', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.github.com/users/sara219/repos',
      header: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).equal(200)
      expect(res.body[0].owner.login).to.eql('sara219')
    })
  })
})
