$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contas_adicionar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Contas - Adicionar",
  "description": "Eu como usuária do site seu barriga\r\nQuero criar uma conta poupança\r\nPara guardar dinheiro",
  "id": "contas---adicionar",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Adicionar conta",
  "description": "",
  "id": "contas---adicionar;adicionar-conta",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina home",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "clico no menu Contas",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono o submenu Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "eu insiro o nome \u0027\u003cconta_nome\u003e\u0027 da conta",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "clico no botao Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema abre a lista de contas",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "valido a mensagem de sucesso",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "eu encontro minha conta \u0027\u003cconta_nome\u003e\u0027",
  "keyword": "E "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "contas---adicionar;adicionar-conta;",
  "rows": [
    {
      "cells": [
        "conta_nome"
      ],
      "line": 20,
      "id": "contas---adicionar;adicionar-conta;;1"
    },
    {
      "cells": [
        "Conta Poupança"
      ],
      "line": 21,
      "id": "contas---adicionar;adicionar-conta;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 21,
  "name": "Adicionar conta",
  "description": "",
  "id": "contas---adicionar;adicionar-conta;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina home",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "clico no menu Contas",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono o submenu Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "eu insiro o nome \u0027Conta Poupança\u0027 da conta",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "clico no botao Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema abre a lista de contas",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "valido a mensagem de sucesso",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "eu encontro minha conta \u0027Conta Poupança\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.match({
  "location": "HomeStep.que_eu_estou_na_pagina_home()"
});
formatter.result({
  "duration": 2602107300,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.clico_no_menu_Contas()"
});
formatter.result({
  "duration": 67797700,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.seleciono_o_submenu_Adicionar()"
});
formatter.result({
  "duration": 552804300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Poupança",
      "offset": 18
    }
  ],
  "location": "ContasStep.eu_insiro_o_nome_da_conta(String)"
});
formatter.result({
  "duration": 177950400,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.clico_no_botão_Salvar()"
});
formatter.result({
  "duration": 861193300,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.o_sistema_abre_a_lista_de_contas()"
});
formatter.result({
  "duration": 67415300,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.valido_a_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 42526400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Poupança",
      "offset": 25
    }
  ],
  "location": "ContasStep.eu_encontro_minha_conta(String)"
});
formatter.result({
  "duration": 55014700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "Eu como usuária do site seu barriga\r\nQuero fazer login\r\nPara ter acesso a pagina principal",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Realizar login com usuario default",
  "description": "",
  "id": "login;realizar-login-com-usuario-default",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu insiro email",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "insiro a senha",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no botao Entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o sistema realiza o login com sucesso",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "exibe mensagem de bem vindo",
  "keyword": "E "
});
formatter.match({
  "location": "LoginStep.que_eu_estou_na_pagina_de_login()"
});
formatter.result({
  "duration": 448437700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.eu_insiro_email()"
});
formatter.result({
  "duration": 121722100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.insiro_a_senha()"
});
formatter.result({
  "duration": 167777500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_Entrar()"
});
formatter.result({
  "duration": 803053300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.o_sistema_realiza_o_login_com_sucesso()"
});
formatter.result({
  "duration": 70431700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.exibe_mensagem_de_bem_vindo()"
});
formatter.result({
  "duration": 137062800,
  "status": "passed"
});
});