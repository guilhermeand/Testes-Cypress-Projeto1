describe('Cadastro auxiliar - Questionário', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Questionário')
        cy.contains('Questionário').click()
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Questionário', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').type('Teste automatizado')
        cy.get('.current-wrapper').click({ force: true })
        cy.get('[placeholder="Filtro..."]').type('COMO CONHECEU A ACADEMIA?')
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('.add-estado > span').click({ force: true })
        cy.get('#element-0-editar').click({ force: true })
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('#element-0-confirm').click({ force: true })
        cy.wait(5000)
        cy.get('.current-wrapper').click({ force: true })
        cy.get('[placeholder="Filtro..."]').type('Como você avalia a higiene dos banheiros e do local?')
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('.add-estado > span').click({ force: true })
        cy.get('#element-1-editar').click({ force: true })
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('#element-1-confirm').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Questionário', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click({ force: true })
        cy.get('#ddAction-0-editar').click({ force: true })
        cy.get('.current-wrapper').click({ force: true })
        cy.get('[placeholder="Filtro..."]').type('Como você avalia a organização, limpeza, conservação e manutenção da Academia?')
        cy.get('.option-container').eq(0).click({ force: true })
        cy.get('.add-estado > span').click({ force: true })
        cy.get('#element-1-editar').click({ force: true })
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('#element-1-confirm').click({ force: true })
        cy.get('#element-0-excluir').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Questionário', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})