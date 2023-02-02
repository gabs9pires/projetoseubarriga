package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        //colocar as configurações
        plugin = {"json:target/reports/cucumberReport.json", "html:target/reports/"},
        //pasta onde estão seus bdds
        features = "src/test/resources/features",
        //onde estão os steps
        glue = {"steps"},
        tags = {}
)
public class RunCucumberTest {
    public static WebDriver driver;

    @BeforeClass
    public static void start(){
        driver = new ChromeDriver();
    }
    @AfterClass
    public static void stop(){
        driver.quit();
    }
}
