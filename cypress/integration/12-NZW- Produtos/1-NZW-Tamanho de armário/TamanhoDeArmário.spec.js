/// <reference types="cypress"/>

describe('Produtos - Tamanho de armário', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Tamanho de Armário')
        cy.contains('Tamanho de Armário').click({ multiple: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Tamanho de armário', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    //it('Editar Tamanho de armário', function () {
    //cy.get('#input-busca-rapida').type('Teste automatizado')
    //cy.wait(5000)
    //cy.get('#ddaction-0').click({ force: true })
    //cy.get('#ddAction-0-editar').click({ force: true })
    //cy.get('input[placeholder="Descrição"]').type('Teste automatizado 1')
    //cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    //})

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Tamanho de armário', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})