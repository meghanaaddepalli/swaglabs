$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "SwagLabs Website",
  "description": "I want to use this template for my feature file",
  "id": "swaglabs-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SwagLabs"
    }
  ]
});
formatter.scenario({
  "line": 49,
  "name": "Login and click CancelPage,",
  "description": "",
  "id": "swaglabs-website;login-and-click-cancelpage,",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SwagLabs_TS5"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user  launch the web application,",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "user open the Swaglab Home page,",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user enter the usrname,",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user enter password,",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click login button user will navigate the next page,",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks addToCard button,",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user clicks the card button,",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user clicks Checkout button,",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user enters FirstName,",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user enters LastName,",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enters Zip/Postal Code,",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user clicks the continue button,",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user clicks the Cancel button,",
  "keyword": "And "
});
formatter.match({
  "location": "CancelPageStep.user_launch_the_web_application()"
});
formatter.result({
  "duration": 8141975968,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2338757771,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_login_using_usrname()"
});
formatter.result({
  "duration": 1533895639,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_login_using_password()"
});
formatter.result({
  "duration": 1492747192,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.click_on_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 7089638752,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.addToCard()"
});
formatter.result({
  "duration": 3399340616,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.CardBtn()"
});
formatter.result({
  "duration": 4220189290,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.CheckBtn()"
});
formatter.result({
  "duration": 3812353107,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.firstName()"
});
formatter.result({
  "duration": 3465493998,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.lastName()"
});
formatter.result({
  "duration": 3505983785,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.zipCode()"
});
formatter.result({
  "duration": 3336438877,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.continueBtn()"
});
formatter.result({
  "duration": 4175007380,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.cancelBtn()"
});
formatter.result({
  "duration": 3983916256,
  "status": "passed"
});
});