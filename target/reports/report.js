$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Realizar login",
  "description": "Eu como usuária do site seu barriga\r\nQuero fazer login\r\nPara ter acesso a pagina principal\r\n\r\n//tag",
  "id": "realizar-login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Realizar login com usuario default",
  "description": "",
  "id": "realizar-login;realizar-login-com-usuario-default",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 10,
  "name": "que eu estou na página de login",
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
  "name": "clico no botão Entrar",
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
  "location": "LoginStep.que_eu_estou_na_página_de_login()"
});
formatter.result({
  "duration": 1107608900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.eu_insiro_email()"
});
formatter.result({
  "duration": 108060900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.insiro_a_senha()"
});
formatter.result({
  "duration": 100607000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clico_no_botão_Entrar()"
});
formatter.result({
  "duration": 851276400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.o_sistema_realiza_o_login_com_sucesso()"
});
formatter.result({
  "duration": 81321800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.exibe_mensagem_de_bem_vindo()"
});
formatter.result({
  "duration": 99234300,
  "status": "passed"
});
});