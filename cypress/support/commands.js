Cypress.Commands.add("login", (modulo = 'adm' | 'fin' | 'crm', date, usuario) => {

    cy.fixture('login').then(login => {

        cy.getCookie('logado').then(cookieLogado => {

            let logado = cookieLogado && cookieLogado.value === "true" ? true : false;
            if (!logado) {
                cy.visit('faces/login.jsp')
                cy.get('body').then(body => {
                    // Se exisitr input empresa o usu?rio esta logado ainda mas o zw n?o removeu o cookie.
                    // Esta regra deve ser corrigida no zw
                    let inputEmpresa = body.find('#login').length > 0 ? true : false


                    if (inputEmpresa) {
                        var logarPactoBR

                        if (date) {
                            cy.visit('faces/inicio.jsp?desv=true')
                            cy.reload()
                            cy.wait(1000)
                            cy.waitVisible('#formDescobridor\\:formData\\:dataSistemaInputDate')
                            cy.wait(500)
                            cy.get('#formDescobridor\\:formData\\:dataSistemaInputDate').type(date)
                        }
                        cy.waitVisible('#formDescobridor\\:userKey')
                        cy.get('#formDescobridor\\:userKey').clear().type(login.chave, { force: true })

                        if (usuario) {
                            cy.waitVisible('#formDescobridor\\:userName')
                            cy.get('#formDescobridor\\:userName').clear().type(usuario, { force: true })
                        } else {
                            cy.waitVisible('#formDescobridor\\:userName')
                            cy.get('#formDescobridor\\:userName').clear().type(login.usuario, { force: true })
                        }
                        cy.waitVisible('#formDescobridor\\:userPassword')
                        cy.get('#formDescobridor\\:userPassword').clear().type(login.senha, { force: true })
                        cy.waitVisible('#formDescobridor\\:descobrir')
                        cy.get('#formDescobridor\\:descobrir').click()
                        cy.get('body').then(table => {

                            var errorTable = table.find('#formDescobridor\\:mensagemDetalhada')
                            var erroTableLogin = Cypress.$(errorTable).text()


                            if (erroTableLogin != "" && erroTableLogin.length > 0) {

                                cy.waitVisible('#formDescobridor\\:userName')
                                cy.get('#formDescobridor\\:userName').clear().type('ADMIN')
                                cy.get('#formDescobridor\\:userPassword').clear().type(login.senha, { force: true })
                                cy.get('#formDescobridor\\:descobrir').click()
                                logarPactoBR = true
                            }

                        })
                        cy.get('body').then(BDHeader => {

                            cy.wait(1000).then(() => {

                                let btnVersaoAcima = BDHeader.find('a[id*="btnEntrar"]')
                                let btnAtualizarDB = BDHeader.find('a[id*="atualizarBD"]')


                                if (btnVersaoAcima && btnVersaoAcima.length > 0 && btnVersaoAcima.position().left > 0 &&
                                    !btnAtualizarDB.is(':visible')) {
                                    cy.waitVisible('#formAtualizacaoBD\\:btnEntrar', 0, 1000)
                                    cy.get('#formAtualizacaoBD\\:btnEntrar').click({ force: true })
                                    cy.log('Versão do sistema superior do banco de dados.')
                                    cy.log('Loading...')
                                } else if (btnAtualizarDB && btnAtualizarDB.length > 0 && btnAtualizarDB.position().left > 0) {
                                    cy.waitVisible('#formAtualizacaoBD\\:atualizarBD', 0, 1000)
                                    cy.get('#formAtualizacaoBD\\:atualizarBD').click({ force: true })
                                    cy.waitVisible('#panelExibicaoAtualizacoesBDContentTable', 0, 1500)
                                    cy.get('#formExibicaoAtualizacoesBD\\:btnOk').click({ force: true })
                                    cy.log('Versão do Banco de dados superior do Sistema.')
                                    cy.log('Loading...')
                                }

                                // cy.waitVisible('#panelModuloContentTable')

                                cy.get('body').then((Modal) => {
                                    let btnMultEmpresa = Modal.find('#formEmpresas\\:menuEmpresa')
                                    if (modulo === 'adm') {
                                        if (login.multiplasEmpresas) {
                                            cy.get('#formEmpresas\\:unidade').click({ force: true })
                                        }
                                        if (btnMultEmpresa.is(':visible')) {
                                            cy.waitVisible('#formEmpresas\\:unidade')
                                            cy.get('#formEmpresas\\:unidade').click({ force: true })
                                        }
                                        cy.get('#formModulo\\:linkAbrirZillyon').click({ force: true })


                                    }
                                })


                                if (modulo === 'fin') {
                                    if (login.multiplasEmpresas) {
                                        cy.get('#formEmpresas\\:unidade').click({ force: true })
                                    }
                                    cy.get('#formModulo\\:linkAbrirFinanceiro').click({ force: true })
                                    cy.waitVisible('#form\\:btnBIFinan', 0, 1200)
                                }

                                if (modulo === 'crm') {
                                    if (login.multiplasEmpresas) {
                                        cy.get('#formEmpresas\\:unidade').click({ force: true })
                                    }
                                    cy.get('#formModulo\\:linkAbrircrm').click({ force: true })
                                }

                                cy.waitVisible('#form\\:fotoUsuario')

                                if (logarPactoBR === true) {
                                    cy.logout()
                                    cy.login(modulo)
                                }
                            })
                        })
                    }

                })
            }
        })
    })

})

Cypress.Commands.add('waitVisible', (selector, time, waitAdditionalTime) => {

    cy.get('body', { log: false }).then(body => {

        let element = body.find(selector)
        let element1 = body.find('#cuboMagico')
        let element2 = body.find('#panelStatus1Div')
        let timeout = Cypress.config('pageLoadTimeout')


        if (!time) {
            time = 0
        }

        if ((element.is(':visible') && checkLoadOpened(body) === false) && element.outerWidth() > 0 &&
            element.outerHeight() && !element1.is(':visible') && !element2.is(':visible') &&
            document.readyState === "complete" && element.is(':hidden') == false) {
            cy.wait(500)
            cy.log(`waitVisible done(${time}): ${selector}`)
            if (waitAdditionalTime) {
                cy.wait(waitAdditionalTime)

            } else {
                cy.wait(100, { log: false })
            }
        } else {
            if (waitAdditionalTime) {
                cy.wait(waitAdditionalTime)
                time += waitAdditionalTime
            } else {
                cy.wait(100, { log: false })
                time += 100
            }
            if (time < timeout) {
                cy.waitVisible(selector, time, waitAdditionalTime)
            } else {
                cy.log(`waitVisible timeout (${timeout}): ${selector}`)
            }
        }
    })
})

const checkLoadOpened = ($body) => {
    let load = $body.find('#panelCarregandoCDiv')
    let logadForm = $body.find('#form\\:panelCarregandoCDiv')
    let load2 = $body.find('#panelStatus1CDiv')
    let load2Form = $body.find('#form\\:panelStatus1CDiv')

    if ((load.length > 0 && load.position().left > 0) ||
        (load2.length > 0 && load2.position().left > 0) ||
        (logadForm.length > 0 && logadForm.position().left > 0) ||
        (load2Form.length > 0 && load2Form.position().left > 0)
    ) {
        return true;
    } else {
        return false;
    }
}
Cypress.Commands.add('value', (selector, value) => {

    cy.get(selector).then(input => {
        cy.waitVisible(selector)
        cy.get(selector).should('be.visible')
        cy.wait(1100)
        input.val(value)
    })
})