package pl.coderslab;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class WikiLogin {

    
    private WebDriver driver;
    private final String loginPageUrl = "https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Logowanie";

    @Given("browser with (.*) open")
    public void browserWithPageOpen(String pageToOpen) {
        System.setProperty("webdriver.chrome.driver",
                "src/test/resources/drivers/chromedriver");
        driver = new ChromeDriver();

        if (pageToOpen.equals("Wikipedia Login Page"))
            driver.get(loginPageUrl);
        else System.out.println("Wrong keyword: " + pageToOpen);
    }

    @And("user input (.*) into (.*) field")
    public void userInputValueIntoField(String value, String fieldType) {
        WebElement inputLogin = driver.findElement(By.id("wpName1"));
        WebElement inputPassword = driver.findElement(By.id("wpPassword1"));

        switch (fieldType) {
            case "Login"     : inputLogin.sendKeys(value);      break;
            case "Password"  : inputPassword.sendKeys(value);   break;
            default          : System.out.println("Wrong field type: " + fieldType);
        }
    }

    @And("user click Login button")
    public void userClickLoginButton() {
        driver.findElement(By.id("wpLoginAttempt")).click();
    }

    @Then("warning message is displayed")
    public void warningMessageIsDisplayed() {
        WebElement warningPopup = driver.findElement(By.className("error"));
        Assert.assertTrue(
                "Popup warning did not show up!",
        warningPopup.isDisplayed()
        );
    }

    @And("browser closes")
    public void browserCloses() {
        driver.quit();
        driver = null;
    }
}
