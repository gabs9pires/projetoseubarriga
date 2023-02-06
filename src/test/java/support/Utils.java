package support;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import runner.RunCucumberTest;

import java.time.Duration;

public class Utils extends RunCucumberTest {

    public void esperarElementoPresente(By element, Integer tempo){
        WebDriverWait wait = new WebDriverWait(driver, tempo);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void logarSite(){
        driver.get("https://seubarriga.wcaquino.me/login");
        esperarElementoPresente(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[1]/a"), 10);
        Assert.assertEquals(true, driver.findElement(By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[1]/a")).isDisplayed());
    }
    public void fazerLoginUserDefault(){
        driver.findElement(By.id("email")).sendKeys("gabriela@pires");
        driver.findElement(By.id("senha")).sendKeys("123456");
        driver.findElement(By.xpath("/html/body/div[2]/form/button")).click();
    }
}
