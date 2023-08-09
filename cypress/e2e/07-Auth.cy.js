/// <reference types='cypress' />

describe('Authorization', () => {
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

  it.only('API Key', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/lists/6484da666cb5b8c55dc4ab8f',
      qs: {
        token:
          'ATTA7792255c87a00cefd402c77bd96d64e72e9024fb4bf4cd4e4c590c4116d75c8e6FE9A51D',
        key: '2173c9efcd453eae47e5f0f4d9ca5912',
      },
    }).then((res) => {
      expect(res.status).equal(200)
      expect(res.body.closed).equal(false)
    })
  })
})
