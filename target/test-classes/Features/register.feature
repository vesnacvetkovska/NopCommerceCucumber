Feature: Register Module  testing on NopeCommerce

  Scenario Outline: Test valid register
    Given user is on home page
    When user is click on register button
    When user enters firstname, lastname and email
    When user fild <password> and <confirmPassword>
    And click on register button
    Then register message be <status>

    Examples: 
      | password | confirmPassword | status |
      | avbkgds  | avbkgds         | Pass   |
      | ababa    | ababa           | Fail   |
