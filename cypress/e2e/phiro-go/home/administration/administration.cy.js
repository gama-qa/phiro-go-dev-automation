/// <reference types="cypress" />

describe('Administration Menu', () => {
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
    beforeEach(() => {
        // handling error promise 
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cancel: canceled')) {
              return false;
            }
            return true;
          });


        cy.visit('https://dev.phirogo.com')
        cy.get('input[name=username]').type(`${dataAccount.correctAccount2.username}`)
        cy.get('input[name=password]').type(`${dataAccount.correctAccount2.password}`)
        cy.get('button[type=submit]').click()
        cy.url().should('include', '/dashboard')
    })

    it('Administration Employee Page', () => {
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Cancel: canceled')) {
              return false;
            }
            return true;
          });
        // Assertion profile name
        cy.get('p.profile__name').should('have.text', dataAccount.correctAccount2.nameEmployee)
        // Navigate to Employee Management page
        cy.wait(5000)
        cy.contains('button', 'Administration').click()
        cy.wait(3000)
        cy.contains('a[href="/administration/employee"]', 'Employee Management').should('be.visible').and('not.be.disabled').click()
        cy.wait(7000)
        

        // Validte the data table is displayed
        cy.get('input[placeholder="Emp Name/Code/Position/Job Band"]').type('arya')
        cy.get('#myTable td').contains('Arya Farhan').should('be.visible')
        // Clear field search
        cy.get('input[placeholder="Emp Name/Code/Position/Job Band"]').clear()

        cy.wait(5000)

        // Status employee filter Active or Non Active
        cy.get('.custom-select-field').click()
        cy.wait(5000)
        cy.contains('.custom-select-field', 'Active').should('be.visible').and('not.be.disabled').click()

    })

    it('Organization Structure Page', () => {
        // Handling error message
          cy.wait(5000)
          cy.contains('button', 'Administration').click()
          cy.wait(3000)
          cy.contains('a[href="/administration/orgstructure"]', 'Organization Structure').should('be.visible').and('not.be.disabled').click()
          cy.wait(5000)

        
    })

   



  
})
