package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import pages.Contas_adicionarPage;
import pages.HomePage;
import pages.LoginPage;
import runner.RunCucumberTest;

public class HomeStep extends RunCucumberTest {
    HomePage homePage = new HomePage(driver);
    LoginPage loginPage = new LoginPage(driver);

    @Dado("^que eu estou na pagina home$")
    public void que_eu_estou_na_pagina_home(){
        loginPage.acessarAplicacao();
        homePage.logarUserDefault();
        homePage.acessarAplicacaoHome();
        homePage.validarMensagemBemVindo();
    }

    @E("^clico no menu Contas$")
    public void clico_no_menu_Contas(){
        homePage.clicarMenuContas();
    }

    @E("^seleciono o submenu Adicionar$")
    public void seleciono_o_submenu_Adicionar(){
        homePage.clicarMenuContas_subAdicionar();
    }
}
