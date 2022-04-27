describe('Cadastro auxiliar - Cidade', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Cidade')
        cy.contains('Cidade').click()
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Cidade', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').type('Teste automatizado')
        cy.get('.current-wrapper').eq(0).click({ force: true })
        cy.get('[placeholder="Filtro..."]').eq(0).type('Brasil')
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('.current-wrapper').eq(1).click({ force: true })
        cy.get('[placeholder="Filtro..."]').eq(1).type('Goiás')
        cy.get('.option-container').eq(1).click({ force: true })
        cy.get('pacto-cat-form-input-number').eq(1).type('1')
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Cidade', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('.current-wrapper').eq(0).click({ force: true })
        cy.get('[placeholder="Filtro..."]').eq(0).type('Estados Unidos')
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('.current-wrapper').eq(1).click({ force: true })
        cy.get('[placeholder="Filtro..."]').eq(1).type('Alabama')
        cy.get('.option-container').eq(1).click({ force: true })
        cy.get('pacto-cat-form-input-number').eq(1).type('11')
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Cidade', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})