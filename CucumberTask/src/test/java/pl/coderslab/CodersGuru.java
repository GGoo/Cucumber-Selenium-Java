package pl.coderslab;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class CodersGuru {

    private WebDriver driver;
    private final String baseUrl = "https://wro-tem-s-01.codersguru.pl";
    private String mailGenerator = "https://generator.email/";

    @Given("user is on main page of (.*)")
    public void userIsOnMainPageOfCodersGuru(String pageToOpen) {

        driver = new FirefoxDriver();
        driver.manage().window().maximize();

        if (pageToOpen.equals("Coders Guru"))
            driver.get(baseUrl);
        else System.out.println("Wrong keyword: " + pageToOpen);
    }

    @When("user click on the new registration button")
    public void userClickOnTheNewRegistrationButton() {
        driver.findElement(By.cssSelector("input.link.main-page-top__email-input-sent")).click();
    }

    @And("user input (.*) into (.*) field")
    public void userInputEmailIntoEMailField(String value, String fieldType) {

        WebElement inputEmail = driver.findElement(By.id("fos_user_registration_form_email"));
        WebElement inputFirstName = driver.findElement(By.id("fos_user_registration_form_name"));
        WebElement inputLastName = driver.findElement(By.id("fos_user_registration_form_lastname"));
        WebElement inputPassword = driver.findElement(By.id("fos_user_registration_form_plainPassword_first"));
        WebElement inputRepeatPassword = driver.findElement(By.id("fos_user_registration_form_plainPassword_second"));
        WebElement inputCity = driver.findElement(By.id("form_city"));
        WebElement inputZipCode = driver.findElement(By.id("form_postal_code"));
        WebElement inputStreet = driver.findElement(By.id("form_street"));
        WebElement inputNumberHouse = driver.findElement(By.id("form_number"));


        switch (fieldType) {
            case "e-mail":
                
                WebDriver driver2 = new FirefoxDriver();
                driver2.get(mailGenerator);
                WebElement inputEmailGenerator = driver2.findElement(By.id("email_ch_text"));
                String copiedEmail = inputEmailGenerator.getText();
                driver2.quit();
                inputEmail.sendKeys(copiedEmail);
                break;
            case "first name":
                inputFirstName.sendKeys(value);
                break;
            case "last name":
                inputLastName.sendKeys(value);
                break;
            case "password":
                inputPassword.sendKeys(value);
                break;
            case "repeat password":
                inputRepeatPassword.sendKeys(value);
                break;
            case "city":
                inputCity.sendKeys(value);
                break;
            case "zip code":
                inputZipCode.sendKeys(value);
                break;
            case "street":
                inputStreet.sendKeys(value);
                break;
            case "number house":
                inputNumberHouse.sendKeys(value);
                break;
            default:
                System.out.println("Wrong field type: " + fieldType);
        }
    }

    @And("user checks checkbox to accept the regulations")
    public void userCheckCheckboxToAcceptTheRegulations() {
        driver.findElement(By.cssSelector("input[type=\"checkbox\"]")).click();
    }

    @Then("user clicks on the registration button")
    public void userClickOnTheRegistrationButton() {
        driver.findElement(By.id("register-submit-btn")).click();
    }

    @And("close the browser")
    public void closeTheBrowser() {
        driver.quit();
        driver = null;
    }
}
