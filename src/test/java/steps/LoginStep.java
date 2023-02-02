package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.HomePage;
import pages.LoginPage;
import runner.RunCucumberTest;

public class LoginStep extends RunCucumberTest {

    LoginPage loginPage = new LoginPage(driver);
    HomePage homePage = new HomePage(driver);

    @Dado("^que eu estou na página de login$")
    public void que_eu_estou_na_página_de_login(){
        loginPage.acessarAplicacao();
    }

    @Quando("^eu insiro email$")
    public void eu_insiro_email(){
        loginPage.inserirEmail();
    }

    @E("^insiro a senha$")
    public void insiro_a_senha(){
        loginPage.inserirSenha();
    }

    @E("^clico no botão Entrar$")
    public void clico_no_botão_Entrar(){
        loginPage.clicarBotaoEntrar();
    }

    @Entao("^o sistema realiza o login com sucesso$")
    public void o_sistema_realiza_o_login_com_sucesso(){
        homePage.acessarAplicacao();
    }

    @E("^exibe mensagem de bem vindo$")
    public void exibe_mensagem_de_bem_vindo(){
        homePage.validarMensagemBemVindo();
    }
}
