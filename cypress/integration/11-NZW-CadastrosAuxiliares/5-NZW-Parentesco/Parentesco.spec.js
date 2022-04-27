describe('Cadastro auxiliar - Parentesco', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Parentesco')
        cy.contains('Parentesco').click()
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Parentesco', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Amigo"]').type('Teste automatizado')
        cy.get('pacto-cat-form-input-number input').eq(1).type('80')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Parentesco', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('input[placeholder="Amigo"]').type('Teste 1')
        cy.get('pacto-cat-form-input-number input').eq(1).type('85')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it.only('Excluir Parentesco', function () {
        cy.get('#input-busca-rapida').type('Teste 1')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})


