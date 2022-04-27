describe('Planos - Convênio de desconto - Valor', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Convênio de desconto')
        cy.contains('Convênio').eq(0).click({ multiple: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO - VALOR
    it('Incluir Convênio de desconto - Valor', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Descrição"]').type('Teste automatizado')
        cy.get('input[placeholder="__/__/____"]').eq(0).type('09102020')
        cy.get('input[placeholder="__/__/____"]').eq(1).type('09102020')
        cy.get('input[placeholder="__/__/____"]').eq(2).type('10102021')
        cy.get('input[placeholder="__/__/____"]').eq(3).type('10102021')
        cy.contains('Pagará matrícula?').click()
        cy.contains('Pagará rematrícula?').click()
        cy.get('.add-row').click({ force: true })
        cy.get('pacto-column-input-decimal').eq(0).type('3')
        cy.get('.option-label').click({ force: true })
        cy.contains('Valor específico').click({ force: true })
        cy.get('pacto-column-input-decimal').eq(1).type('30.00')
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('.add-row').click({ force: true })
        cy.get('pacto-column-input-decimal').eq(0).type('6')
        cy.get('.option-label').click({ force: true })
        cy.contains('Percentual').click({ multiple: true })
        cy.get('pacto-column-input-decimal').eq(2).type('60')
        cy.get('#element-1-confirm').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 2: EDITAR CADASTRO - VALOR
    it('Editar Convênio de desconto - Valor', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('input[placeholder="__/__/____"]').eq(0).type('09102022')
        cy.get('input[placeholder="__/__/____"]').eq(1).type('09102022')
        cy.get('input[placeholder="__/__/____"]').eq(2).type('10102023')
        cy.get('input[placeholder="__/__/____"]').eq(3).type('10102023')
        cy.contains('Pagará matrícula?').click()
        cy.contains('Pagará rematrícula?').click()
        cy.get('#element-0-editar').click({ force: true })
        cy.get('pacto-column-input-decimal').eq(0).type('6')
        cy.get('.option-label').click({ force: true })
        cy.contains('Percentual').click({ multiple: true })
        cy.get('pacto-column-input-decimal').eq(2).type('60')
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('#element-1-excluir').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO - VALOR
    it('Excluir Convênio de desconto - Valor', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})