package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.Contas_adicionarPage;
import pages.Contas_listaPage;
import pages.LoginPage;
import runner.RunCucumberTest;

public class ContasStep extends RunCucumberTest {
    Contas_adicionarPage contasAdicionarPage = new Contas_adicionarPage(driver);
    Contas_listaPage contasListaPage = new Contas_listaPage(driver);
    LoginPage loginPage = new LoginPage(driver);

    @Dado("^que eu estou na pagina do login$")
    public void que_eu_estou_na_pagina_do_login(){
        loginPage.acessarAplicacao();
    }

    @E("^insiro email '(.*)'$")
    public String eu_insiro_email(String email_login){
        loginPage.inserirEmail(email_login);
        return email_login;
    }

    @E("^insiro senha '(.*)'$")
    public String insiro_a_senha(String senha_login){
        loginPage.inserirSenha(senha_login);
        return senha_login;
    }

    @E("^clico no botao para Entrar$")
    public void clico_no_botão_Entrar(){
        loginPage.clicarBotaoEntrar();
    }

    @Quando("^eu insiro o nome '(.*)' da conta$")
    public void eu_insiro_o_nome_da_conta(String nome_conta){
        contasAdicionarPage.adicionarNome (nome_conta);
    }

    @E("^clico no botao Salvar$")
    public void clico_no_botão_Salvar(){
        contasAdicionarPage.btnSalvar_Conta();
    }

    @Entao("^o sistema abre a lista de contas$")
    public void o_sistema_abre_a_lista_de_contas(){
        contasListaPage.acessarAplicacao();
    }

    @E("^valido a mensagem de sucesso$")
    public void valido_a_mensagem_de_sucesso(){
        contasListaPage.validarMensagemSucesso();
    }

    @E("^eu encontro minha conta '(.*)'$")
    public void eu_encontro_minha_conta(String nome_conta){
        contasListaPage.acharConta(nome_conta);
        contasListaPage.removerConta();
    }
}
