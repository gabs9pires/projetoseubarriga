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
        driver.get("https://seubarriga.wcaquino.me/login");
        esperarElementoPresente(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[1]/a"), 10);
        Assert.assertEquals(true, driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[1]/a")).isDisplayed());
    }

    public void inserirEmail() {
        driver.findElement(By.id("email")).sendKeys("gabriela@pires");
    }

    public void inserirSenha(){
        driver.findElement(By.id("senha")).sendKeys("123456");
    }

    public void clicarBotaoEntrar(){
        driver.findElement(By.xpath("/html/body/div[2]/form/button")).click();
    }
}
