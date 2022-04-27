describe('Cadastro auxiliar - Categoria de clientes', function () {

    before(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Categoria de clientes')
        cy.contains('Categoria').click()
        cy.wait(5000)

    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it.only('Incluir Categoria de clientes', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').eq(0).type('Teste automatizado')
        cy.get('.double-arrow').click({ force: true }) // alterar o tipo?
        cy.get('input[placeholder="Nome"]').eq(1).type('Teste')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Categoria de clientes', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Categoria de clientes', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})