import {
  update_name,
  update_surname,
  update_nickname,
  update_email,
  update_password,
} from '../fixtures/update-data.json';

describe('Put data in update-form and submit it', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Update new user', () => {
    cy.get('.all_info').last().click()

    cy.get('#update-name').type(update_name)
    cy.get('#update-surname').type(update_surname)
    cy.get('#update-nickname').type(update_nickname)
    cy.get('#update-email').type(update_email)
    cy.get('#update-password').type(update_password)
    cy.get('#update-submit').click()

    // controlled input 

    cy.get('#update-name').should('have.value', '')
    cy.get('#update-surname').should('have.value', '')
    cy.get('#update-nickname').should('have.value', '')
    cy.get('#update-email').should('have.value', '')
    cy.get('#update-password').should('have.value', '')
  });

  it('User info should be updated', () => {
    cy.get('.all_info').last().click()

    cy.get('.name-info').contains(update_name)
    cy.get('.surname-info').contains(update_surname)
    cy.get('.nickname-info').contains(update_nickname)
    cy.get('.email-info').contains(update_email)
    cy.get('.password-info').contains(update_password)
  })
});