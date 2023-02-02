package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import support.Utils;

public class Contas_listaPage extends Utils {
    WebDriver driver;
    public Contas_listaPage (WebDriver driver) {
        this.driver = driver;
    }

    public void acessarAplicacao (){
        esperarElementoPresente(By.xpath("/html/body/div[1]"), 10);
    }

    public void validarMensagemSucesso (){
        driver.findElement(By.xpath("/html/body/div[1]")).getText().equals("Conta adicionada com sucesso!");
    }
    public String acharConta(String minhaConta){
        driver.findElement(By.xpath("//*[@id=\"tabelaContas\"]/tbody/tr/td[1]")).getText().equals(minhaConta);
        return minhaConta;
    }

}
