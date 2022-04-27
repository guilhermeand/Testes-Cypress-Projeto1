describe('Cadastro auxiliar - País', function () {

    beforeEach(() => {
        cy.visit('http://swarm2.pactosolucoes.com.br:8014/LoginApp/teste')
        cy.get('#fmLay\\:usernameLoginZW').click({ force: true }).type('Pactobr')
        cy.get('#fmLay\\:pwdLoginZW').click({ force: true }).type('123')
        cy.get('#fmLay\\:btnEntrar').click({ force: true })
        cy.get(':nth-child(1) > a > .lgmodule > img').click({ force: true })
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('País')
        cy.contains('País').click()
        cy.wait(5000)

    })

    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir País', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Brasil"]').type('Teste automatizado')
        cy.get('input[placeholder="Brasileira(o)"]').type('Teste')
        cy.get('input[placeholder="GO"]').type('GO')
        cy.get('input[placeholder="Goiás"]').type('Goiás')
        cy.get('.add-estado > span').click({ force: true })
        cy.get('input[placeholder="GO"]').type('TO')
        cy.get('input[placeholder="Goiás"]').type('Tocantins')
        cy.get('.add-estado > span').click({ force: true })
        cy.get('input[placeholder="GO"]').type('RJ')
        cy.get('input[placeholder="Goiás"]').type('Rio de Janeiro')
        cy.get('.add-estado > span').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar País', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('input[placeholder="GO"]').type('SP')
        cy.get('input[placeholder="Goiás"]').type('São Paulo')
        cy.get('.add-estado > span').click({ force: true })
        cy.get('input[placeholder="GO"]').type('MG')
        cy.get('input[placeholder="Goiás"]').type('Minas Gerais')
        cy.get('.add-estado > span').click({ force: true })
        cy.get('input[placeholder="GO"]').type('RS')
        cy.get('input[placeholder="Goiás"]').type('Rio Grande do Sul')
        cy.get('.add-estado > span').click({ force: true })
        //cy.get('#element-5-action-excluir\ \(key\)') excluir?
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir País', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })
})