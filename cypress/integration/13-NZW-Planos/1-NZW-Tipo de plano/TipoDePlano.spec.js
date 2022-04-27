describe('Planos - Tipo de plano', function () {

    beforeEach(() => {
        cy.on('uncaught:exception', err => {
            return false;
        });
        cy.login('adm')
        cy.get('#form\\:lupaAtiva').click({ force: true })
        cy.get('.panelBusca').type('Plano')
        cy.contains('Plano').click()
        cy.wait(5000)
        cy.get(':nth-child(1) > .submenu-indicator').click({ force: true })
        cy.get('[ng-reflect-router-link="/adm/planos/tipo-plano"] > .menu-name').click({ multiple: true })
        cy.get('#input-busca-rapida').click({ force: true })
        cy.get('#input-busca-rapida').click({ force: true })
        cy.wait(5000)
    })


    // CASO DE TESTE 1: INCLUIR CADASTRO
    it('Incluir Tipo de plano', function () {
        cy.get('.content').click({ force: true })
        cy.get('input[placeholder="Nome"]').type('Teste automatizado')
        cy.get('input[placeholder="Tipo"]').type('Tipo teste')
        cy.get('input[placeholder="Matrícula"]').type('12345')
        cy.get('input[placeholder="Rematrícula"]').type('1234567')
        cy.get('input[placeholder="Renovação"]').type('12345789')
        cy.get('input[placeholder="Mês de referência plano"]').type('12')
        cy.get('input[placeholder="Serviço"]').type('123457890')
        cy.get('input[placeholder="Aula avulsa"]').type('12345789012')
        cy.get('input[placeholder="Diária"]').type('123')
        cy.get('input[placeholder="Taxa de adesão plano recorrência"]').type('12345')
        cy.get('input[placeholder="Taxa de renegociação"]').type('1234')
        cy.get('input[placeholder="Taxa de anuidade plano recorrência"]').type('123456')
        cy.wait(5000)
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 2: EDITAR CADASTRO
    it('Editar Tipo de plano', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-editar').click()
        cy.get('input[placeholder="Matrícula"]').type('1234')
        cy.get('input[placeholder="Rematrícula"]').type('123456')
        cy.get('input[placeholder="Renovação"]').type('1234578')
        cy.get('input[placeholder="Mês de referência plano"]').type('12')
        cy.get('input[placeholder="Serviço"]').type('12345789')
        cy.get('input[placeholder="Aula avulsa"]').type('123457890')
        cy.get('input[placeholder="Diária"]').type('12')
        cy.get('input[placeholder="Taxa de adesão plano recorrência"]').type('123')
        cy.get('input[placeholder="Taxa de renegociação"]').type('12')
        cy.get('input[placeholder="Taxa de anuidade plano recorrência"]').type('1234')
        cy.wait(5000)
        cy.get('.checkmark-outline').click({ force: true })
        cy.get('[ng-reflect-label="Salvar"]').click({ force: true })
        cy.wait(5000)
    })

    // CASO DE TESTE 3: EXCLUIR CADASTRO
    it('Excluir Tipo de plano', function () {
        cy.get('#input-busca-rapida').type('Teste automatizado')
        cy.wait(5000)
        cy.get('#ddaction-0').click()
        cy.get('#ddAction-0-excluir').click()
    })

})
