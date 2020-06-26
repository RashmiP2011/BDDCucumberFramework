Feature: FreeCRM Home Feature 

@SmokeTest
Scenario: FreeCRM verify menu options on Home page 

	Given User is already on login page 
	When Title of login page is <"Cogmento CRM"> 
	Then User login into application 
	And Verify login successful on Home page
	And Verfiy all menu options on Home page
	|Home		|
	|Calendar	|
	|Contacts	|
	|Companies	|
	|Deals    	|
	|Tasks		|
	|Cases		|
	|Calls		|
	|Documents	|
	|Email		|
	|Campaigns	|
	|Forms		|
	And Logout 
