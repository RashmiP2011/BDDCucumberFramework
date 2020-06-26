Feature: FreeCRM Task Feature 

Scenario Outline: FreeCRM add new Task 

	Given User is already on login page 
	When Title of login page is <"Cogmento CRM"> 
	Then User login into application 
	And Verify login successful 
	Then Navigate to Tasks page 
	Then Click on add new task 
	And Enter "<tasktitle>" , "<tasktype>" , "<description>" and save 
	And Logout 
	
	Examples: 
		|tasktitle	|tasktype			|description			|
		|Task1		|Customer Support	|Task_description1	    |
		|Task2		|Complaint     		|Task_description2	    |
	#	|Preeti     |Rathod		|123@gmail.com      |
	#	|Amit	    |Joshi      |123@gmail.com      |