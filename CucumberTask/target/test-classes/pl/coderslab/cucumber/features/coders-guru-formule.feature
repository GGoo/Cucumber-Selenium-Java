Feature: register in Coders Guru site

  Scenario Outline: user can register in Coders Guru

    Given user is on main page of Coders Guru
    When user click on the new registration button
    And user input e-mail into e-mail field
    And user input <firstName> into first name field
    And user input <lastName> into last name field
    And user input <password> into password field
    And user input <password> into repeat password field
    And user input <city> into city field
    And user input <zipcode> into zip code field
    And user input <street> into street field
    And user input <numberHouse> into number house field
    And user checks checkbox to accept the regulations
    Then user clicks on the registration button
    And close the browser
    Examples:
      | firstName | lastName | password | city     | zipcode | street | numberHouse |
      | Michal    | Lowicz   | qwerty   | Wroclaw  | 45-221  | Prosta | 12          |
      | Jan       | Nowak    | dfghj    | Warszawa | 78-212  | Krzywa | 24          |