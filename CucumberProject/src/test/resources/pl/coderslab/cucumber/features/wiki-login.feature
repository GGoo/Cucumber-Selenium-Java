Feature: Wikipedia Login Page

  Scenario Outline: Can not login given wrong credentials

    Given browser with Wikipedia Login Page open
    And user input <login> into Login field
    And user input <password> into Password field
    And user click Login button
    Then warning message is displayed
    And browser closes

    Examples:
      | login  | password  |
      | Michał | haslomoje |
      | Tomasz | haslojego |
