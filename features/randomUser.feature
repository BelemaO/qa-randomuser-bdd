Feature: Random User API

  Scenario: Get a random user successfully
    When I send a request to get a random user
    Then the response status should be 200
    
  Scenario: Get multiple users
    When I send a request to get 5 users
    Then the response status should be 200
    And the response should return 5 users

  Scenario: Invalid endpoint returns 404
    When I send a request to an invalid endpoint
    Then the response status should be 404

  Scenario: Invalid results parameter defaults to 1
    When I send a request with results parameter "abc"
    Then the response status should be 200
    And the response should return 1 user