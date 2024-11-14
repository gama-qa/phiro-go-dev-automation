/// <reference types="cypress" />

describe('Home - navigate to self service menu', () => {
    const dataAccount = {
        correctAccount: {
            username: 'BJI1010822005',
            password: 'spasi@29',
        },
        correctAccount2: {
            nameEmployee: 'Rendra Prabowo',
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
    before(() => {
        cy.visit('https://dev.phirogo.com')
        cy.get('input[name=username]').type(`${dataAccount.correctAccount2.username}`)
        cy.get('input[name=password]').type(`${dataAccount.correctAccount2.password}`)
        cy.get('button[type=submit]').click()
        cy.url().should('include', '/dashboard')
    })

    it('Should can navigate when click any self service menu', () => {
        // Assertion profile name
        cy.get('p.profile__name').should('have.text', dataAccount.correctAccount2.nameEmployee)


        // Navigate to leave page menu
        cy.get('#leave').click()
        // Assertion the component should visible
        cy.get('h4.title-label').should('be.visible')
        cy.get('.card-login-info').should('be.visible')
        cy.get('#addleavesubmission').should('be.visible')
        cy.get('.ticket').should('be.visible')
        // Back to home page
        cy.get('a[href="/dashboard"]').click({multiple: true})
        cy.wait(7000)

        // Navigate to Overtime menu
        cy.get('#overtime').click()
        cy.get('h4.title-label').should('be.visible')
        cy.get('.card-login-info').should('be.visible')
        cy.get('#addovertimehistory').should('be.visible')
        cy.get('.ticket').should('be.visible')
        // Back to home page
        cy.get('a[href="/dashboard"]').click({multiple: true})
        cy.wait(7000)

        // Navigate to Attandance menu
        cy.get('#attendance').click()
        cy.get('h4.title-label').should('be.visible')
        cy.get('.card-login-info').should('be.visible')
        cy.get('#addattmonitoring').should('be.visible')
        cy.get('.ticket').should('be.visible')
        // Back to home page
        cy.get('a[href="/dashboard"]').click({multiple: true})
        cy.wait(7000)


        // Navigate to Claim menu
        cy.get('#claim').click()
        cy.get('h4.title-label').should('be.visible')
        cy.get('.card-login-info').should('be.visible')
        cy.get('#addattmonitoring').should('be.visible')
        cy.get('.ticket').should('be.visible')
        // Back to home page
        cy.get('a[href="/dashboard"]').click({multiple: true})
        cy.wait(7000)

        // Navigate to Payslip menu
        cy.get('#payslip').click()
        cy.get('h4.title-label').should('be.visible')
        cy.get('.card-login-info').should('be.visible')
        cy.get('#addattmonitoring').should('be.visible')
        cy.get('.ticket').should('be.visible')
        // Back to home page
        cy.get('a[href="/dashboard"]').click({multiple: true})
        cy.wait(7000)


    })

   



  
})
