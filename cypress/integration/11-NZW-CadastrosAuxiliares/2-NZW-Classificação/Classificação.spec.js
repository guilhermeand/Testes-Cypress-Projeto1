describe('Cadastro auxiliar - Classificação', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Classificação')
        cy.contains('Classificação').click()
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Classificação', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').type('Teste automatizado')
        cy.get('.checkmark-outline').click()
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Classificação', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('input[placeholder="Nome"]').type('Teste 1')
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Classificação', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})