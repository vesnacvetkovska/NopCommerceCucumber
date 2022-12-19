Feature: Search Module  testing on NopeCommerce

  Scenario Outline: Test search items
    Given user is on the home page
    When search <items>
    And click on search Btn
    Then user should be  <status>

    Examples: 
      | items     | status                 |
      | FIRST_PRP | Navigate to book page  |
      | OM_HTC_BL | Navigate to phone page |
      | brush     | No such item           |
      | avodcado  | No such item           |
