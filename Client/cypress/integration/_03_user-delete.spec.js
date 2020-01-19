describe('Delete last user in list', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should delete user', () => {
    cy.get('.all_info').last().click()
    cy.get('.btn-action_delete').click()

    cy.get('.advice').contains('Select someone from list')
  })
})