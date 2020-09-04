describe('Index page', () => {
  beforeEach(() => {
    cy.stubRequest('productList.json', 'GET_PRODUCTS_QUERY')
    cy.visit('/')
  })

  it('shows the list of products', () => {
  })
})
