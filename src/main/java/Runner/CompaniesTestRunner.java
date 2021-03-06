package Runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber; 
@RunWith(Cucumber.class)
@CucumberOptions(
		
		

		features = "C:\\Users\\RashmiP2\\eclipse-workspace\\FreeCrmBDDFramwork\\src\\main\\java\\Features\\FreeCRM_Companies.feature", 
		
	
		glue={"CompaniesStepDefinition"}, 
		
		
		plugin = {"pretty","html:target/html-test-output","json:target/json-test-output/cucumber.json","junit:target/junit-xml-output/cucumber.xml"},
		
		////,"json:target/json-test-output/cucumber.json","junit:target/junit-xml-output/cucumber.xml"
		
		// dryRun the test cases
		dryRun = false,
		
		//Format Console Output
		monochrome = true
		
		//tagging
		//tags= {"@SmokeTest "}
		//,@RegressionTest
		)




public class CompaniesTestRunner {

}
