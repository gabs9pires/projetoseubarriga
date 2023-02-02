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
        esperarElementoPresente(By.id(""), 10);
        Assert.assertEquals(true, driver.findElement(By.id("")).isDisplayed());
    }

    public void preencheEmail() {
        driver.findElement(By.id("email")).sendKeys("");
    }

}
