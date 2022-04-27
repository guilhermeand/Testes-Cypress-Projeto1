describe('Produtos - Balanço', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Balanço')
        cy.contains('Balanço').eq(0).click({ multiple: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Balanço', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('[label="Observações"]').type('Teste automatizado')
        cy.get('pacto-cat-form-input').eq(1).click({ force: true })
        cy.get(':nth-child(1) > .column-cell').click({ force: true })
        cy.get('pacto-cat-form-input-number').type('20')
        cy.get('.add-item > span').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    //CASO DE TESTE 2: CLONAR CADASTRO
    it('Clonar Balanço', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('pacto-cat-button').eq(2).click({ force: true })
        cy.wait(5000)
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('[label="Observações"]').type('Teste automatizado')
        cy.get('[title="tooltip-excluir (key)"]').click({ force: true })
        cy.get('pacto-cat-form-input').eq(1).click({ force: true })
        cy.get(':nth-child(2) > .column-cell').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })


    // CASO DE TESTE 3: IMPRIMIR CADASTRO
    it('Imprimir Balanço', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('pacto-cat-button').eq(3).click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 4: CANCELAR CADASTRO
    it('Cancelar Balanço', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('pacto-cat-button').eq(1).click({ force: true })
        cy.wait(5000)
    })

})