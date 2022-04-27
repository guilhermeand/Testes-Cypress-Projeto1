describe('Planos - Plano - Crédito', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Plano')
        cy.contains('Plano').click()
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO - CRÉDITO
    it.only('Incluir Plano - Crédito', function () {
        cy.get('pacto-cat-button').eq(1).click({ force: true })
        cy.get('#plano-credito > .content').click({ force: true })
        // PÁGINA - DADOS BÁSICOS
        cy.get('pacto-cat-form-input').type('Teste automatizado')
        cy.get('input[placeholder="__/__/____"]').eq(0).click({ force: true })
            .type('20012020')
        cy.get('input[placeholder="__/__/____"]').eq(1).click({ force: true })
            .type('20012025')
        cy.get('input[placeholder="__/__/____"]').eq(2).click({ force: true })
            .type('20012025')
        cy.get('.cat-input-wrapper').eq(1).click({ force: true })
        //cy.get('.cat-input-wrapper').eq(0).click({ force: true })
        cy.get('pacto-cat-button').eq(0).click({ force: true })
        // PÁGINA - MODALIDADES
        cy.get('.add-row').click({ force: true })
        cy.get('.option-label').eq(0).click({ force: true })
        cy.get('input[placeholder="Filtro..."]').type('FAZ TUDO')
        cy.get('.option-container').eq(1).click({ force: true })
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('pacto-cat-button').eq(1).click({ force: true })
        // PÁGINA - DURAÇÃO E VALORES
        cy.get('.add-row').click({ force: true })
        cy.get('pacto-column-input-decimal').eq(0).type('12')
        cy.get('pacto-column-input-decimal').eq(1).type('15')
        cy.get('.option-label').eq(0).click({ force: true })
        cy.get('.option-container').eq(3).click({ force: true })
        cy.get('.option-label').eq(1).click({ force: true })
        cy.contains('LIVRE').click()
        cy.get('pacto-column-input-decimal').eq(2).type('18')
        cy.get('pacto-column-input-decimal').eq(3).type('20')
        cy.get('#element-0-confirm').click({ force: true })
        cy.get('pacto-cat-button').eq(1).click({ force: true })
        // PÁGINA - HORÁRIOS
        cy.get('.add-row').click({ force: true })
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('input[placeholder="Filtro..."]').click().type('LIVRE')
        //cy.get('.option-label').eq(1).click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO - CRÉDITO
    it('Editar Plano - Crédito', function () {

    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO - CRÉDITO
    it('Excluir Plano - Crédito', function () {

    })

})