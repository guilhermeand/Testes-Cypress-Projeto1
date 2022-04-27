describe('Planos - Desconto - Percentual', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Desconto')
        cy.wait(5000)
        cy.contains('Desconto').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO - PERCENTUAL
    it('Incluir Desconto - Percentual', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('.aux-parent select').eq(0).select('MA')
        cy.get('.aux-parent select').eq(1).select('PE')
        cy.get('pacto-cat-form-input-number').eq(1).type('20')
        cy.get('.checkboxAtivo > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('.checkboxEmpresas > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('#element-0-editar').click({ force: true })
        cy.get('.ng-tns-c29-1 > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('#element-1-editar').click({ force: true })
        cy.get('.ng-tns-c29-1 > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('#element-1-confirm').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 2: EDITAR CADASTRO - PERCENTUAL
    it('Editar Desconto - Percentual', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('.aux-parent select').eq(0).select('RE')
        cy.get('.aux-parent select').eq(1).select('VA')
        cy.get('pacto-cat-form-input-number').eq(1).type('20')
        cy.get('[label="Ativo"]').click({ force: true })
        cy.get('[label="Selecionar empresas para aplicar o desconto"]').click({ force: true })
        cy.get('#element-0-editar').click({ force: true })
        cy.get('.ng-tns-c29-1 > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('#element-1-editar').click({ force: true })
        cy.get('.ng-tns-c29-1 > .cat-input-wrapper > label > .checkmark-outline').click({ force: true })
        cy.get('#element-1-confirm').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO - PERCENTUAL
    it('Excluir Desconto - Percentual', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})