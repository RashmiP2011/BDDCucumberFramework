$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RashmiP2/eclipse-workspace/FreeCrmBDDFramwork/src/main/java/Features/FreeCRM_Companies.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Company Feature",
  "description": "",
  "id": "freecrm-company-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "FreeCRM add new Company",
  "description": "",
  "id": "freecrm-company-feature;freecrm-add-new-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is \u003c\"Cogmento CRM\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User login into application",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify login successful",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to Companies page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on add new Company",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"\u003ccompanyname\u003e\" , \"\u003ccompanyurl\u003e\" , \"\u003cdescription\u003e\" and save",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Logout",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "freecrm-company-feature;freecrm-add-new-company;",
  "rows": [
    {
      "cells": [
        "companyname",
        "companyurl",
        "description"
      ],
      "line": 16,
      "id": "freecrm-company-feature;freecrm-add-new-company;;1"
    },
    {
      "cells": [
        "CitiusTech",
        "www.citiustech.com",
        "CitiusTech is a specialist provider of healthcare technology services and solutions, with strong presence across the globe"
      ],
      "line": 17,
      "id": "freecrm-company-feature;freecrm-add-new-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "FreeCRM add new Company",
  "description": "",
  "id": "freecrm-company-feature;freecrm-add-new-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is \u003c\"Cogmento CRM\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User login into application",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify login successful",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to Companies page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on add new Company",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter \"CitiusTech\" , \"www.citiustech.com\" , \"CitiusTech is a specialist provider of healthcare technology services and solutions, with strong presence across the globe\" and save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Logout",
  "keyword": "And "
});
formatter.match({
  "location": "CompaniesStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 6216163300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 25
    }
  ],
  "location": "CompaniesStepDefinition.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 5575101,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_login_into_application()"
});
formatter.result({
  "duration": 332542600,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5033579401,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.navigate_to_Companies_page()"
});
formatter.result({
  "duration": 112235800,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.click_on_add_new_Company()"
});
formatter.result({
  "duration": 3228834200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CitiusTech",
      "offset": 7
    },
    {
      "val": "www.citiustech.com",
      "offset": 22
    },
    {
      "val": "CitiusTech is a specialist provider of healthcare technology services and solutions, with strong presence across the globe",
      "offset": 45
    }
  ],
  "location": "CompaniesStepDefinition.enter_and_save(String,String,String)"
});
formatter.result({
  "duration": 8897250001,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.logout()"
});
formatter.result({
  "duration": 1984866900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#\t|Accenture\t\t|www.accenture.com/in-en  |Accenture Development Partnerships brings the best of Accenture to address social, economic and environmental issues.    |"
    }
  ],
  "line": 21,
  "name": "FreeCRM delete Company",
  "description": "",
  "id": "freecrm-company-feature;freecrm-delete-company",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Title of login page is \u003c\"Cogmento CRM\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User login into application",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify login successful",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Navigate to Companies page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Identify the Company with \"\u003ccompanyname\u003e\" and delete the record",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Logout",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "freecrm-company-feature;freecrm-delete-company;",
  "rows": [
    {
      "cells": [
        "companyname"
      ],
      "line": 32,
      "id": "freecrm-company-feature;freecrm-delete-company;;1"
    },
    {
      "comments": [
        {
          "line": 33,
          "value": "#\t|CitiusTech\t\t|"
        }
      ],
      "cells": [
        "Accenture"
      ],
      "line": 34,
      "id": "freecrm-company-feature;freecrm-delete-company;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#\t|CitiusTech\t\t|"
    }
  ],
  "line": 34,
  "name": "FreeCRM delete Company",
  "description": "",
  "id": "freecrm-company-feature;freecrm-delete-company;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Title of login page is \u003c\"Cogmento CRM\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User login into application",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify login successful",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Navigate to Companies page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Identify the Company with \"Accenture\" and delete the record",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Logout",
  "keyword": "And "
});
formatter.match({
  "location": "CompaniesStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 5828706900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 25
    }
  ],
  "location": "CompaniesStepDefinition.title_of_login_page_is(String)"
});
formatter.result({
  "duration": 4718500,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_login_into_application()"
});
formatter.result({
  "duration": 297338000,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5029894401,
  "status": "passed"
});
formatter.match({
  "location": "CompaniesStepDefinition.navigate_to_Companies_page()"
});
formatter.result({
  "duration": 115099200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accenture",
      "offset": 27
    }
  ],
  "location": "CompaniesStepDefinition.identify_the_Company_with_and_delete_the_record(String)"
});
formatter.result({
  "duration": 32053770800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[text()\u003d\u0027Accenture\u0027]/parent::tr/td/div/button/i[@class\u003d\u0027trash icon\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RASHMIP2-MSD1\u0027, ip: \u0027172.18.14.217\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\RashmiP2\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63487}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1f206c394030df9d49f78ec5679e1e95\n*** Element info: {Using\u003dxpath, value\u003d//td[text()\u003d\u0027Accenture\u0027]/parent::tr/td/div/button/i[@class\u003d\u0027trash icon\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:185)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementByXPath(RemoteWebElement.java:261)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElement(RemoteWebElement.java:181)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat com.qa.pages.CompaniesPage.deleteCompany(CompaniesPage.java:68)\r\n\tat CompaniesStepDefinition.CompaniesStepDefinition.identify_the_Company_with_and_delete_the_record(CompaniesStepDefinition.java:75)\r\n\tat ✽.Then Identify the Company with \"Accenture\" and delete the record(C:/Users/RashmiP2/eclipse-workspace/FreeCrmBDDFramwork/src/main/java/Features/FreeCRM_Companies.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CompaniesStepDefinition.logout()"
});
formatter.result({
  "status": "skipped"
});
});