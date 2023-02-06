package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class HomePage extends Utils {
    WebDriver driver;
    public HomePage(WebDriver driver) {
        this.driver = driver;
    }

    public void logarUserDefault(){
        fazerLoginUserDefault();
    }

    public void acessarAplicacaoHome (){
        esperarElementoPresente(By.xpath("//*[@id=\"navbar\"]/ul/li[1]/a"), 10);
    }

    public void validarMensagemBemVindo (){
        esperarElementoPresente(By.xpath("/html/body/div[1]"), 10);
        driver.findElement(By.xpath("/html/body/div[1]")).getText().contains("Bem vindo");
    }

    public void clicarMenuContas (){
        driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul/li[2]/a")).click();
    }

    public void clicarMenuContas_subAdicionar(){
        driver.findElement(By.xpath("//*[@id=\"navbar\"]/ul/li[2]/ul/li[1]/a")).click();
    }
}
