package TasksStepDefinitiion;

import org.openqa.selenium.WebDriver;


import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.pages.TasksPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TasksStepDefinition extends TestBase{
	LoginPage loginobj;
	HomePage homeobj;
	TasksPage tasksobj;
	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_already_on_login_page() {

		TestBase.initialization();
	}

	@When("^Title of login page is <\"([^\"]*)\">$")
	public void title_of_login_page_is(String title) {

		loginobj = new LoginPage();
		loginobj.verifyLoginTitle(title);

	}

	@Then("^User login into application$")
	public void user_login_into_application() {

		loginobj.login(prop.getProperty("username"), prop.getProperty("password"));

	}

	@Then("^Verify login successful$")
	public void user_is_on_home_page() throws Throwable {

		homeobj = new HomePage();
		Thread.sleep(5000);
		homeobj.verifyUser(prop.getProperty("user"));

	}

	@Then("^Navigate to Tasks page$")
	public void navigate_to_Tasks_page() {

		homeobj.selectMenu("Tasks");
	} 

	@Then("^Click on add new task$")
	public void click_on_add_new_task() throws Throwable {

		tasksobj = new TasksPage();
		Thread.sleep(3000);
		tasksobj.clickNewTask();

	}
	
	
	@Then("^Enter \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" and save$")
	public void enter_and_save(String tasktitle, String tasktype, String description) throws Throwable {
	
		Thread.sleep(3000);
		tasksobj.enterNewTasksDetails(tasktitle, tasktype, description);
	}

	@Then("^Logout$")
	public void logout() throws Throwable {
		Thread.sleep(3000);
		homeobj.logoutUser();
	}

}
