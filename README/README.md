RandomUser BDD Test Suite (Chip Technical Test)
This project automates the test suite for the Random User API. It uses Cucumber.js with Gherkin (BDD) and TypeScript to validate a few scenarios for backend services. The suite demonstrates:

* Happy path testing (valid requests to fetch users).
* Unhappy path testing (invalid endpoints, invalid parameters).
* Edge case (invalid query parameters defaulting to expected behaviour).
* Reusable test utilities for clean and maintainable test code.

🚀 Running the Tests Locally (Prerequisites)
* Node.js v22+
* npm

Installation
* Clone the repository and install dependencies: git clone https://github.com/<your-username>/qa-randomuser-bdd.git
* cd qa-randomuser-bdd
* npm install

Run the Tests
* To execute all BDD scenarios: npm test

Test Reports
* By default, a JSON report is generated after each run: cucumber-report.json

⚙️ CI/CD Integration (GitHub Actions)
Integrated with GitHub actions for Continuous Integration.
* Tests are automatically triggered on every push or pull request to the main branch.
* A JSON test report is uploaded as a build artifact for each run.
* The workflow configuration lives in: .github/workflows/ci.yml