describe('Cadastro auxiliar - Pergunta - Sim ou não', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Pergunta')
        cy.contains('Pergunta').click()
        cy.wait(5000)
        cy.get('.container-mask > :nth-child(3)').click({ force: true })
        cy.get('[ng-reflect-router-link="/adm/cad-aux/pergunta"] > .menu-name').click({ force: true })
        cy.get('#input-busca-rapida').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 1: INCLUIR CADASTRO - SIM OU NÃO
    it('Incluir Pergunta - Sim ou não', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Descrição"]').click({ force: true })
            .type('Teste automatizado 4')
        cy.get('.aux-parent select').select('SN')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 2: EDITAR CADASTRO - SIM OU NÃO
    it('Editar Pergunta - Sim ou não', function () {
        cy.get('#input-busca-rapida').click()
            .type('Teste automatizado 4')
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('input[placeholder="Descrição"]').click({ force: true })
            .type('Teste automatizado 14')
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO - SIM OU NÃO
    it('Excluir Pergunta - Sim ou não', function () {
        cy.get('#input-busca-rapida').click()
            .type('Teste automatizado 13')
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
        cy.wait(5000)
    })
})