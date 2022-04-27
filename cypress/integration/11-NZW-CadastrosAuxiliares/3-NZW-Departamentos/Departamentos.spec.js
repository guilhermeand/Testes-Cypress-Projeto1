describe('Cadastro auxiliar - Departamentos', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Departamento')
        cy.contains('Departamento').click()
        cy.wait(5000)

    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Departamentos', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').type('Teste automatizado')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    //it('Editar Departamentos', function () {
    //cy.get('#input-busca-rapida').type('Teste automatizado')
    //cy.wait(5000)
    //cy.get('#ddaction-0').click()
    //cy.get('#ddAction-0-editar').click()
    //})

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Departamentos', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})