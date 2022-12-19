package stepsDefinitonRegister;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

	public class StepsRegister {
		WebDriver driver = null;
		
		@Before
		public void setup() {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		}
			
			@After
			public void quit() {
				driver.quit();
			
		}
			@Given("user is on home page")
			public void user_is_on_home_page() {
				driver.get("https://demo.nopcommerce.com/");
				
			}
			
			@When("user is click on register button")
			public void user_navigated_in_register_page() {
				driver.findElement(By.xpath("//*[@href=\"/register?returnUrl=%2F\"]")).click();
			}
			@When("user enters firstname, lastname and email")
			public void user_enters_firstname_and_lastname_and_email() {
			    driver.findElement(By.xpath("//*[@id=\"FirstName\"]")).sendKeys("Jhon");
			    driver.findElement(By.xpath("//*[@id=\"LastName\"]")).sendKeys("Smith");
			    driver.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys("john2@test.com");
			    
			    JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.xpath("(//*[@class=\"form-fields\"])[4]")));   
				
			
			}
			

			@When("^user fild (.*) and (.*)")
			public void user_enters_password_and_cofirmPassword(String password, String confirmPassword) {
				 driver.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(password);
				 driver.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys(confirmPassword);
			}
			
			

			@When("click on register button")
			public void click_on_register_button() {
				 driver.findElement(By.xpath("//*[@id=\"register-button\"]")).click();
			}

			@Then("register message be Pass")
			public void register_message_be_Pass() {
				Assert.assertEquals(driver.getTitle(), "nopCommerce demo store. Register");
			    
			}

			@Then("register message be Fail")
			public void register_message_be_Fail() {
				Assert.assertEquals("https://demo.nopcommerce.com/register?returnUrl=%2F", driver.getCurrentUrl());
			}



			
			
}
