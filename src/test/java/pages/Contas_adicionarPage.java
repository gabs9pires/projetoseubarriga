package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Contas_adicionarPage {
    WebDriver driver;
    public Contas_adicionarPage (WebDriver driver) {
        this.driver = driver;
    }

    public String adicionarNome (String nomeConta){
        driver.findElement(By.id("nome")).sendKeys(nomeConta);
        return nomeConta;
    }

    public void btnSalvar_Conta (){
        driver.findElement(By.xpath("/html/body/div[2]/form/div[2]/button")).click();
    }

}



