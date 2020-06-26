package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.util.TestBase;

public class TasksPage extends TestBase {
	
	WebDriverWait wait = new WebDriverWait(driver,20);
	
	@FindBy(linkText= "New")
	WebElement newTaskBtn;
	
	@FindBy(xpath= "//button[text()='Save']")
	WebElement saveTaskBtn;

	
	@FindBy(xpath= "//button[text()='Delete']")
	WebElement confirmDeleteBtn;
	
	@FindBy(name= "title")
	WebElement taskTitle;
	
	
	@FindBy(xpath= "//i[@class=\"dropdown icon\"]/parent::div[@name=\"type\"]")
	WebElement tsksTypeDropdown;
	
	@FindBy(name= "description")
	WebElement description;
	
	public TasksPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	
	public void clickNewTask(){
		  
		newTaskBtn.click();
		
	}
	
	public void enterNewTasksDetails(String taskTitle, String taskType, String description) throws InterruptedException {
		
		this.taskTitle.sendKeys(taskTitle);
		this.tsksTypeDropdown.click();
		WebElement typeOption;
		typeOption = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text()='"+ taskType +"']")));
		typeOption.click();
		this.description.sendKeys(description);
		saveTaskBtn.click();
		
    }

}
