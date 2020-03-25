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
  "line": 88,
  "name": "Login and go to about page",
  "description": "",
  "id": "swaglabs-website;login-and-go-to-about-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@SwagLabs_TS8"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "the web application will launch",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "the user opens the Swaglabs main page",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "the user entered the uname",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "the user entered the pswrd",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "clicks on the login button user will navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "the user clicks on about buttons",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "the user clicks on signin button to navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "AboutPageStep.the_web_application_will_launch()"
});
formatter.result({
  "duration": 7652791940,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_opens_the_swaglabs_main_page()"
});
formatter.result({
  "duration": 2043847082,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_enters_the_uname()"
});
formatter.result({
  "duration": 3543899304,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_enter_the_pswrd()"
});
formatter.result({
  "duration": 3488875527,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.click_on_the_login_button_user_will_navigate_to_the_next_page()"
});
formatter.result({
  "duration": 5450949744,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_clicks_on_about_button()"
});
formatter.result({
  "duration": 12007463808,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_clicks_on_signin_button_to_navigate_to_the_next_page()"
});
formatter.result({
  "duration": 10619298681,
  "status": "passed"
});
});