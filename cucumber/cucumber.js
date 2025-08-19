module.exports = {
  default: {
    require: ["./steps/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:report/cucumber_report.json"
    ],
  }
};
//