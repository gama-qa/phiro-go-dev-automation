/// <reference types="cypress" />

describe('Authentication Test Case', () => {
    const dataAccount = {
        correctAccount: {
            username: 'BJI1010822005',
            password: 'spasi@29',
        },
        correctAccount2: {
            nameEmployee: 'RENDRA WIBOWO',
            username: 'S010190149',
            password: 'spasi@29',
        },
        wrongAccount:{
            username: 'BJI1010822006',
            password: 'spasi@26',
        }

    }

    const errorMessageAuth = {
        incorrectUsername: 'Username and password not registered!',
        incorrectPassword: 'Invalid Username or Password!'
            
    }
    // Success visit phirogo dev website
    beforeEach(() => {
        cy.visit('https://dev.phirogo.com')
    })

    it('Should success visit the login page', () => {
        cy.get('.login-form').should('be.visible')
    })

    // Negatif case login wrong username but correct password
    it('Should showing error message when login with wrong username', () => {
        cy.get('input[name=username]').type(`${dataAccount.wrongAccount.username}`)
        cy.get('input[name=password]').type(`${dataAccount.correctAccount.password}`)
        cy.get('button[type=submit]').click()

        // Assertion error message
        cy.contains(`${errorMessageAuth.incorrectUsername}`).should('be.visible')

        // clear field username and password
        cy.get('input[name=username]').clear
        cy.get('input[name=password]').clear

    })

    it('Should showing error message when login with wrong password', () => {
        cy.get('input[name=username]').type(`${dataAccount.correctAccount.username}`)
        cy.get('input[name=password]').type(`${dataAccount.wrongAccount.password}`)
        cy.get('button[type=submit]').click()

        // Assertion error message
        cy.contains(`${errorMessageAuth.incorrectPassword}`).should('be.visible')

        // clear field username and password
        cy.get('input[name=username]').clear
        cy.get('input[name=password]').clear

    })

    it('Should showing error message when login with wrong username and password', () => {
        cy.get('input[name=username]').type(`${dataAccount.wrongAccount.username}`)
        cy.get('input[name=password]').type(`${dataAccount.wrongAccount.password}`)
        cy.get('button[type=submit]').click()

        // Assertion error message
        cy.contains(`${errorMessageAuth.incorrectUsername}`).should('be.visible')

        // clear field username and password
        cy.get('input[name=username]').clear
        cy.get('input[name=password]').clear

    })

    it('Should success login and navigate to dashboard page', () => {
        cy.get('input[name=username]').type(`${dataAccount.correctAccount2.username}`)
        cy.get('input[name=password]').type(`${dataAccount.correctAccount2.password}`)
        cy.get('button[type=submit]').click()
    })
})
