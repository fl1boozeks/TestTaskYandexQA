Feature: Login Feature Positive

  Scenario Outline: A user can only access the page with the correct data
    
    Given I'm on the login page
    When I'm entering the correct <username> and <password>
    And I'm clicking on the login button
    Then I go to a page where I see a <notification> of successful authorization

    Examples:
      | username | password             | notification                   |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
