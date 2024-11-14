/// <reference types="cypress" />

describe('Administration Menu', () => {
    const dataAccount = {
        correctAccount: {
            username: 'BJI1010822005',
            password: 'spasi@29',
        },
        correctAccount2: {
            nameEmployee: 'Rendra Wibowo',
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

    it('Administration Employee Page', () => {
        // Assertion profile name
        cy.get('p.profile__name').should('have.text', dataAccount.correctAccount2.nameEmployee)
        // Navigate to Employee Management page
        cy.contains('button', 'Administration').click()
        cy.contains('a[href="/administration/employee"]', 'Employee Management').should('be.visible').and('not.be.disabled').click()
        // cy.wait(10000)
        // cy.contains('a[href="/administration/orgstructure"]')
        //     .should('be.visible')
        //     .and('not.be.disabled')

        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     // Returning false here prevents Cypress from
        //     // failing the test due to this error
        //     if (err.message.includes('_jp.atjvpul is not a function')) {
        //       return false;
        //     }
        //     // Otherwise, let Cypress fail the test
        //     return true;
        //   });
          

        // Hit API list data Employee
        // cy.intercept('GET', 'https://servicedev.phirogo.com/Employee/getAllItem/10/0').as('getDataEmployee');
        // cy.wait('@getDataEmployee').then((interception) => {
        //     // Get API response data
        //     const employeeData = interception.response.body.data

        //     // Check data on table row
        //     cy.get('table tbody tr').each((row, index) => {
        //         cy.wrap(row).within(() => {
        //             cy.get('td').eq(1).should('have.text', employeeData[index].emp_name) //Validate employee name
        //             cy.get('td').eq(2).should('have.text', employeeData[index].emp_code) //Validate employee code
        //             cy.get('td').eq(3).should('have.text', employeeData[index].position_name) //Validate position name

        //         })
        //     })
        // })

        // Validte the data table is displayed
        cy.get('input[placeholder="Emp Name/Code/Position/Job Band"]').type('arya')
        cy.get('#myTable td').contains('Arya Farhan').should('be.visible')
        // Clear field search
        cy.get('input[placeholder="Emp Name/Code/Position/Job Band"]').clear()

        // cy.wait()

        // Status employee filter
        cy.get('.custom-select-field').click()
        cy.wait(20000)
        cy.get('.custom-select-field', 'Active').should('be.visible').and('not.be.disabled').click()

        


    })

   



  
})
