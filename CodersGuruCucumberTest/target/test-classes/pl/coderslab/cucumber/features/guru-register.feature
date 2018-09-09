Feature: Coders Guru Register

  Scenario Outline: User can register new user

    Given an open browser with https://wro-tem-s-01.codersguru.pl/

    When click on the register button
    And fill e-mail with <e-mail>
    And fill first name with <firstName>
    And fill last name with <lastName>
    And fill password with <password>
    And fill repeat password with <password>
    And fill city with <city>
    And fill zip code with <zipCode>
    And fill street with <street>
    And fill house with <numberHouse>
    And check checkbox

    Then register


    Examples:
      | e-mail | firstName | lastName | password | city | zipCode | street | numberHouse |
      | jan.kowalski@gmail.com | Jan | Kowalski | 123jan | London | 59-123 | Prosta | 1 |
      | adrianna.nowak@gmail.com | Adrianna | Nowak | qwertyada | Dublin | 12-456 | Krzywa | 3 |

