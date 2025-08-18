const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "report/cucumber_report.json",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
/*module.exports = {
  default: {
    require: ["./steps/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:report/cucumber_report.json"
    ],
    publishQuiet: true
  }
};*/