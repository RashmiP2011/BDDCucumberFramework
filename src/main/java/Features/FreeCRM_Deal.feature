Feature: FreeCRM Deal Feature 


Scenario Outline: FreeCRM add new Deal 

	Given User is already on login page 
	When Title of login page is <"Cogmento CRM"> 
	Then User login into application 
	And Verify login successful 
	Then Navigate to Deals page 
	Then Click on add new Deal 
	And Enter "<dealtitle>" ,  "<description>" and save 
	And Logout 
	
	Examples: 
		|dealtitle		|description		  |
		|Deal1			|Deal_Description1    |
	#	|Deal2			|Deal_Description2    |