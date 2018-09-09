package pl.coderslab;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebElement;


import cucumber.api.java.en.Given;


public class GuruRegister {

    private WebDriver driver;
    private String baseUrl = "https://wro-tem-s-01.codersguru.pl/";

    WebElement email;
    WebElement firstName;
    WebElement lastName;
    WebElement password;
    WebElement repeatPassword;
    WebElement city;
    WebElement zipCode;
    WebElement street;
    WebElement numberHouse;
    WebElement checkbox;

    @Given("an open browser with https://wro-tem-s-01.codersguru.pl/")
    public void openGuruPage() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(baseUrl);
    }

    @When("click on the register button")
    public void checkRegisterButton() {
        driver.findElement(By.cssSelector("input.link.main-page-top__email-input-sent")).click();
    }

    @And("fill e-mail with (.*)")
    public void fillEmail(String email) throws Throwable {
        driver.findElement(By.id("fos_user_registration_form_email")).sendKeys(email);
    }

    @And("fill first name with (.*)")
    public void fillFirstName(String firstName) throws Throwable {
        driver.findElement(By.id("fos_user_registration_form_name")).sendKeys(firstName);
    }

    @And("fill last name with (.*)")
    public void fillLastName(String lastName) throws Throwable {
        driver.findElement(By.id("fos_user_registration_form_lastname")).sendKeys(lastName);
    }

    @And("fill password with (.*)")
    public void fillPassword(String password) throws Throwable {
        driver.findElement(By.id("fos_user_registration_form_plainPassword_first")).sendKeys(password);
    }

    @And("fill repeat password with (.*)")
    public void fillRepeatPassword(String repeatPassword) throws Throwable {
        driver.findElement(By.id("fos_user_registration_form_plainPassword_second")).sendKeys(repeatPassword);
    }

    @And("fill city with (.*)")
    public void fillCity(String city) throws Throwable {
        driver.findElement(By.id("form_city")).sendKeys(city);
    }

    @And("fill zip code with (.*)")
    public void fillZipCode(String zipCode) throws Throwable {
        driver.findElement(By.id("form_postal_code")).sendKeys(zipCode);
    }

    @And("fill street with (.*)")
    public void fillStreet(String street) throws Throwable {
        driver.findElement(By.id("form_street")).sendKeys(street);
    }

    @And("fill house with (.*)")
    public void fillNumberHouse(String numberHouse) throws Throwable {
        driver.findElement(By.id("form_number")).sendKeys(numberHouse);
    }

    @And("check checkbox")
    public void checkCheckbox() throws Throwable {
        driver.findElement(By.xpath("//input[@type='checkbox']")).click();
    }

    @Then("click register button")
    public void registerClick() throws Throwable {
        driver.findElement(By.id("register-submit-btn")).click();
    }
}
