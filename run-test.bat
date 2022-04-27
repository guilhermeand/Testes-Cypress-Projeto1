@echo off
rem Author: Waller Maciel

set URL_ZW="http://localhost:8081/ZillyonWeb"

rem running cypress in graphic mode
rem set BROWSER="chrome"

rem running cypress in graphic mode console mode
set BROWSER="electron"

rem check if node is installed
node -v 2> Nul
if "%errorlevel%" == "9009" (
    echo node nao está instalado nesse ambiente, requerida v6.9 ou superior
) else (
    call npm install	
	call 	cypress run -b "%BROWSER%" --spec cypress/integration/0-Login/AtualizarBD.spec.js 			--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/1-TelaPrincipal/**/*.spec.js 			--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/6-1-CRM-METAS/**/*.spec.js 			--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/3-Cadastros"/**/*.spec.js" 			--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/4-Business/**/*.spec.js 				--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/6-CRM/**/*.spec.js 					--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/7-Layout/**/*.spec.js 				--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/8-Financeiro/**/*.spec.js				--config baseUrl="%URL_ZW%"
	start 	cypress run -b "%BROWSER%" --spec cypress/integration/9-MicroServicos/**/*.spec.js			--config baseUrl="%URL_ZW%"
)


pause