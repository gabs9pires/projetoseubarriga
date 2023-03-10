package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class LoginPage extends Utils {

    WebDriver driver;
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void acessarAplicacao(){
        logarSite();
    }

    public String inserirEmail(String nome_email) {
        driver.findElement(By.id("email")).sendKeys(nome_email);
        return nome_email;
    }

    public void inserirSenha(String senha_email){
        driver.findElement(By.id("senha")).sendKeys(senha_email);
    }

    public void clicarBotaoEntrar(){
        driver.findElement(By.xpath("/html/body/div[2]/form/button")).click();
    }
}
