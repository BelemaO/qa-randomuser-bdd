import { When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { getUsers, getInvalidEndpoint, getUsersWithParam } from "../../src/apiClient";

let response: any;

When("I send a request to get a random user", async function () {
  response = await getUsers(1);
});

When("I send a request to get {int} users", async function (count: number) {
  response = await getUsers(count);
});

When("I send a request to an invalid endpoint", async function () {
  response = await getInvalidEndpoint();
});

When("I send a request with results parameter {string}", async function (param: string) {
  response = await getUsersWithParam(param);
});

Then("the response status should be {int}", function (statusCode: number) {
  expect(response.status).to.equal(statusCode);
});

Then("the response should contain a user with an email", function () {
  expect(response.data.results[0]).to.have.property("email");
});

Then("the response should return {int} users", function (count: number) {
  expect(response.data.results.length).to.equal(count);
});

Then("the response should return 1 user", function () {
  expect(response.data.results.length).to.equal(1);
});