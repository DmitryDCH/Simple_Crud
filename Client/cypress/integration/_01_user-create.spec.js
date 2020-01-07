import {
    name,
    surname,
    nickname,
    email,
    password,
} from '../fixtures/user-data.json';

describe('Put data in form and submit it', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Create new user', () => {
        cy.get('#create-name').type(name)
        cy.get('#create-surname').type(surname)
        cy.get('#create-nickname').type(nickname)
        cy.get('#create-email').type(email)
        cy.get('#create-password').type(password)
        cy.get('#addNewUser').click()

        // check controlled inputs be ''

        cy.get('#create-name').should('have.value', '')
        cy.get('#create-surname').should('have.value', '')
        cy.get('#create-nickname').should('have.value', '')
        cy.get('#create-email').should('have.value', '')
        cy.get('#create-password').should('have.value', '')
    });
});