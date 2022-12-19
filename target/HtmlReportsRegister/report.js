$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/register.feature");
formatter.feature({
  "name": "Register Module  testing on NopeCommerce",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test valid register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user is click on register button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters firstname, lastname and email",
  "keyword": "When "
});
formatter.step({
  "name": "user fild \u003cpassword\u003e and \u003cconfirmPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.step({
  "name": "register message be \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "confirmPassword",
        "status"
      ]
    },
    {
      "cells": [
        "avbkgds",
        "avbkgds",
        "Pass"
      ]
    },
    {
      "cells": [
        "ababa",
        "ababa",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test valid register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is click on register button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_navigated_in_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname, lastname and email",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_enters_firstname_and_lastname_and_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fild avbkgds and avbkgds",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_enters_password_and_cofirmPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "register message be Pass",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.register_message_be_Pass()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test valid register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is click on register button",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_navigated_in_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname, lastname and email",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_enters_firstname_and_lastname_and_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fild ababa and ababa",
  "keyword": "When "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.user_enters_password_and_cofirmPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "register message be Fail",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsDefinitonRegister.StepsRegister.register_message_be_Fail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});