describe('Cadastro auxiliar - Grupo com desconto - Percentual', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Grupo com desconto')
        cy.contains('Grupo com desconto').click()
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO - PERCENTUAL
    it('Incluir Grupo com desconto - Percentual', function () {
        cy.get('.content', { timeout: 5000 }).click({ force: true })
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('[label="Quantidade mínima de vínculos"]').type('20')
        cy.get('.aux-parent select').eq(0).select('FA')
        cy.get('.aux-parent select').eq(1).select('AT')
        cy.get('.aux-parent select').eq(2).select('PE')
        cy.get('[label="Percentual"]').type('20')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO - PERCENTUAL
    it('Editar Grupo com desconto - Percentual', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('[label="Quantidade mínima de vínculos"]').type('30')
        cy.get('.aux-parent select').eq(0).select('GR')
        cy.get('.aux-parent select').eq(1).select('AV')
        cy.get('.aux-parent select').eq(2).select('VA')
        cy.get('[label="Valor"]').type('20.00')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO - PERCENTUAL
    it('Excluir Grupo com desconto - Percentual', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})
