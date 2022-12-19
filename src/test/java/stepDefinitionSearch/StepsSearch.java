package stepDefinitionSearch;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class StepsSearch {
	WebDriver driver = null;
	
	@Before
	public void setup() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
		
		/*@After
		public void quit() {
			driver.quit();}*/
	
	@Given("user is on the home page")
	public void user_is_on_the_home_page() {
		driver.get("https://demo.nopcommerce.com/");
		
		
	}
		
	@When("^search (.*)")
	public void search (String items) {
	    driver.findElement(By.xpath("//*[@id=\"small-searchterms\"]")).sendKeys(items);
	}

	@And ("click on search Btn")
	public void click_on_search_Btn() {
	    driver.findElement(By.xpath("//*[@class=\"button-1 search-box-button\"]")).click();
	}

	
	@Then("user should be  Navigate to book page")
	public void user_should_be_Navigate_to_book_page() {
		Assert.assertEquals("First Prize Pies", driver.findElement(By.xpath("//*[@class=\"product-title\"]")).getText());
	}

	@Then("user should be  Navigate to phone page")
	public void user_should_be_Navigate_to_phone_page() {
		Assert.assertEquals("HTC One Mini Blue", driver.findElement(By.xpath("//*[@class=\"product-title\"]")).getText());
	}
	
	
	@Then("user should be  No such item")
	public void user_should_be_No_such_item() {
		Assert.assertEquals(driver.findElement(By.xpath("//*[@class=\"products-container\"]")).getText(), "No products were found that matched your criteria.");
		
	}
	
	
}
