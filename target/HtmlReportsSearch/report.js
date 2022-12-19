$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Search/search.feature");
formatter.feature({
  "name": "Search Module  testing on NopeCommerce",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test search items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "search \u003citems\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on search Btn",
  "keyword": "And "
});
formatter.step({
  "name": "user should be  \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "items",
        "status"
      ]
    },
    {
      "cells": [
        "FIRST_PRP",
        "Navigate to book page"
      ]
    },
    {
      "cells": [
        "OM_HTC_BL",
        "Navigate to phone page"
      ]
    },
    {
      "cells": [
        "brush",
        "No such item"
      ]
    },
    {
      "cells": [
        "avodcado",
        "No such item"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test search items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search FIRST_PRP",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search Btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.click_on_search_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be  Navigate to book page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_should_be_Navigate_to_book_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test search items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search OM_HTC_BL",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search Btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.click_on_search_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be  Navigate to phone page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_should_be_Navigate_to_phone_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test search items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search brush",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search Btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.click_on_search_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be  No such item",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_should_be_No_such_item()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test search items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search avodcado",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search Btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.click_on_search_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be  No such item",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionSearch.StepsSearch.user_should_be_No_such_item()"
});
formatter.result({
  "status": "passed"
});
});