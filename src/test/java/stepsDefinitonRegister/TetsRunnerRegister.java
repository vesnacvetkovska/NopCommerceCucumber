package stepsDefinitonRegister;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue={"stepsDefinitonRegister"},
plugin = { "pretty", "html:target\\HtmlReportsRegister" }

		)



public class TetsRunnerRegister {

}
