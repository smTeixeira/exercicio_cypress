/// <reference types="cypress" />

describe('Testes para inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Samuel')
        cy.get('[type="email"]').type('Samuel@teste.com')
        cy.get('[type="tel"]').type('99999999999')
        cy.get('.adicionar').click()
    })

    it('Deve modificar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('[type="text"]').clear()
        cy.wait(1000)
        cy.get('[type="email"]').clear()
        cy.wait(1000)
        cy.get('[type="tel"]').clear()
        cy.wait(1000)
        cy.get('[type="text"]').type('João')
        cy.get('[type="email"]').type('João@teste.com')
        cy.get('[type="tel"]').type('123456789')
        cy.get('.alterar').click()
        cy.wait(3000)
    })

    it('Deve remover um contato', () => {

        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

    })
})