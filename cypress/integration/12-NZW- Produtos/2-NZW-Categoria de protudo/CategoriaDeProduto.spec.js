describe('Produtos - Categoria de produto', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Categoria de produto')
        cy.contains('Categoria').eq(0).click({ multiple: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Categoria de produto', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Alimentos"]').type('Teste automatizado')
        cy.get('.bloquearAcessoProduto > pacto-cat-checkbox > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('.avaliacaoFisica > pacto-cat-checkbox > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Categoria de produto', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('.bloquearAcessoProduto > pacto-cat-checkbox > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('.avaliacaoFisica > pacto-cat-checkbox > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Categoria de produto', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})