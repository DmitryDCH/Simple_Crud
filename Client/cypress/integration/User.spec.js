describe('Add new user', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Add new user and check value of input after submith', () => {

        cy.get('#create-name')
            .type('Test name')
            .should('have.value', 'Test name')

        cy.get('#create-surname')
            .type('Test surname')
            .should('have.value', 'Test surname')

        cy.get('#create-nickname')
            .type('Test nickname')
            .should('have.value', 'Test nickname')

        cy.get('#create-email')
            .type('TestEmail@email.com')
            .should('have.value', 'TestEmail@email.com')

        cy.get('#create-password')
            .type('123123qwe321')
            .should('have.value', '123123qwe321')
            
        cy.get('#addNewUser')
            .click()

        // after submith  
            
        cy.get('#create-name')
            .should('have.value', '')
        cy.get('#create-surname')
            .should('have.value', '')
        cy.get('#create-nickname')
            .should('have.value', '')
        cy.get('#create-email')
            .should('have.value', '')
        cy.get('#create-password')
            .should('have.value', '')
    });

    it('Update all info about user', () => {
        beforeEach(() => {
            cy.get('.all_info').eq(2)
            .click()
        });

        cy.get('#update-name')
            .type('Test name update')
            .should('have.value', 'Test name update')

        cy.get('#update-surname')
            .type('Test surname update')
            .should('have.value', 'Test surname update')

        cy.get('#update-nickname')
            .type('Test nickname update')
            .should('have.value', 'Test nickname update')

        cy.get('#update-email')
            .type('update@email.com')
            .should('have.value', 'update@email.com')

        cy.get('#update-password')
            .type('updateupdate')
            .should('have.value', 'updateupdate')
            
        cy.get('#update-submit')
            .click()

        // after submith  
            
        cy.get('#update-name')
            .should('have.value', '')
        cy.get('#update-surname')
            .should('have.value', '')
        cy.get('#update-nickname')
            .should('have.value', '')
        cy.get('#update-email')
            .should('have.value', '')
        cy.get('#update-password')
            .should('have.value', '')
        });

    });


    it('Delete user and check side status', () => {
        cy.get('.all_info').eq(2)
        .click()
        
        cy.get('.btn-action_delete')
        .click()
    });