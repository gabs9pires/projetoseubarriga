$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contas_adicionar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login - Contas - Adicionar",
  "description": "Eu como usuária do site seu barriga\r\nQuero criar uma conta\r\nPara realizar transações",
  "id": "login---contas---adicionar",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Adicionar conta",
  "description": "",
  "id": "login---contas---adicionar;adicionar-conta",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina do login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "insiro email \u0027\u003cemail_conta\u003e\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "insiro senha \u0027\u003csenha_conta\u003e\u0027",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no botao para Entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico no menu Contas",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "seleciono o submenu Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "eu insiro o nome \u0027\u003cconta_nome\u003e\u0027 da conta",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clico no botao Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema abre a lista de contas",
  "keyword": "Entao "
});
formatter.step({
  "line": 19,
  "name": "valido a mensagem de sucesso",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "eu encontro minha conta \u0027\u003cconta_nome\u003e\u0027",
  "keyword": "E "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login---contas---adicionar;adicionar-conta;",
  "rows": [
    {
      "cells": [
        "email_conta",
        "senha_conta",
        "conta_nome"
      ],
      "line": 23,
      "id": "login---contas---adicionar;adicionar-conta;;1"
    },
    {
      "cells": [
        "gabriela@pires",
        "123456",
        "Conta Poupança"
      ],
      "line": 24,
      "id": "login---contas---adicionar;adicionar-conta;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 24,
  "name": "Adicionar conta",
  "description": "",
  "id": "login---contas---adicionar;adicionar-conta;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina do login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "insiro email \u0027gabriela@pires\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "insiro senha \u0027123456\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no botao para Entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico no menu Contas",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "seleciono o submenu Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "eu insiro o nome \u0027Conta Poupança\u0027 da conta",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clico no botao Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema abre a lista de contas",
  "keyword": "Entao "
});
formatter.step({
  "line": 19,
  "name": "valido a mensagem de sucesso",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "eu encontro minha conta \u0027Conta Poupança\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "location": "ContasStep.que_eu_estou_na_pagina_do_login()"
});
formatter.result({
  "duration": 1059050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabriela@pires",
      "offset": 14
    }
  ],
  "location": "ContasStep.eu_insiro_email(String)"
});
formatter.result({
  "duration": 94595400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "ContasStep.insiro_a_senha(String)"
});
formatter.result({
  "duration": 83052600,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.clico_no_botão_Entrar()"
});
formatter.result({
  "duration": 953194200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.clico_no_menu_Contas()"
});
formatter.result({
  "duration": 68868800,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.seleciono_o_submenu_Adicionar()"
});
formatter.result({
  "duration": 423898400,
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
  "duration": 101056600,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.clico_no_botão_Salvar()"
});
formatter.result({
  "duration": 538368300,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.o_sistema_abre_a_lista_de_contas()"
});
formatter.result({
  "duration": 80226900,
  "status": "passed"
});
formatter.match({
  "location": "ContasStep.valido_a_mensagem_de_sucesso()"
});
formatter.result({
  "duration": 45704400,
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
  "duration": 412567800,
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
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar login com usuario default",
  "description": "",
  "id": "login;realizar-login-com-usuario-default",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu insiro email \u0027\u003cemail_login\u003e\u0027",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "insiro a senha \u0027\u003csenha_login\u003e\u0027",
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
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-usuario-default;",
  "rows": [
    {
      "cells": [
        "email_login",
        "senha_login"
      ],
      "line": 18,
      "id": "login;realizar-login-com-usuario-default;;1"
    },
    {
      "cells": [
        "gabriela@pires",
        "123456"
      ],
      "line": 19,
      "id": "login;realizar-login-com-usuario-default;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar login com usuario default",
  "description": "",
  "id": "login;realizar-login-com-usuario-default;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na pagina de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "eu insiro email \u0027gabriela@pires\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "insiro a senha \u0027123456\u0027",
  "matchedColumns": [
    1
  ],
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
  "duration": 369642800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabriela@pires",
      "offset": 17
    }
  ],
  "location": "LoginStep.eu_insiro_email(String)"
});
formatter.result({
  "duration": 107558900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 16
    }
  ],
  "location": "LoginStep.insiro_a_senha(String)"
});
formatter.result({
  "duration": 76048400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_Entrar()"
});
formatter.result({
  "duration": 628203800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.o_sistema_realiza_o_login_com_sucesso()"
});
formatter.result({
  "duration": 124294900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.exibe_mensagem_de_bem_vindo()"
});
formatter.result({
  "duration": 129447300,
  "status": "passed"
});
});