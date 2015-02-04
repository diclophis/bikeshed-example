// foo bar baz

var myApplicationsSpecialSteps = function() {
  this.Given(/^I am on Mavenlink$/, function(callback) {
    //this.google.visitGoogle(callback);
    //console.log("using special ml callback");
    callback();
  });

  this.When(/^I search for "(.*)"$/, function(query, callback) {
    //this.google.query(query, callback);
    callback();
  });

  this.Then(/^I see a link to "(.*)"$/, function(url, callback) {
    //this.google.assertDisplayedLinkToURL(url, callback);
    callback();
  });
};

module.exports = myApplicationsSpecialSteps;
