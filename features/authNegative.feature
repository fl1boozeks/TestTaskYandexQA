Feature: Login Feature Negative

  Scenario Outline: A user cannot log in with an invalid data
    
    Given I'm on the login page
    When I enter the <username> and the <password>
    And I'm clicking on the login button
    Then I get a <notification>

    Examples:
      | username          | password             | notification              |
      | incorrectUsername | SuperSecretPassword! | Your username is invalid! |
      | tomsmith          | incorrectPassword    | Your password is invalid! |

