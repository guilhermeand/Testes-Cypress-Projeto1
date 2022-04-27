describe('Login', function () {

    before(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
    })

    it('Acessar o sistema', function () {
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
    })

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Categoria de produto')
        cy.contains('Categoria').eq(0).click({ multiple: true })
        cy.wait(5000)
    })

})
