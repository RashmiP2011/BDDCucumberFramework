package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class DealsPage extends TestBase {
	
	@FindBy(linkText= "New")
	WebElement newDealBtn;
	
	@FindBy(xpath= "//button[text()='Save']")
	WebElement saveDealBtn;

	
	@FindBy(xpath= "//button[text()='Delete']")
	WebElement confirmDeleteBtn;
	
	@FindBy(name= "title")
	WebElement dealTitle;
	
	
	@FindBy(name= "company")
	WebElement dealCompany;
	
	@FindBy(name= "description")
	WebElement description;
	
	public DealsPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	public void clickNewDeal(){
		  
		newDealBtn.click();
		
	}
	
	public void enterNewDealsDetails(String dealTitle, String description) throws InterruptedException {
	
		this.dealTitle.sendKeys(dealTitle);
		this.description.sendKeys(description);
		saveDealBtn.click();
		
    }
	

}
