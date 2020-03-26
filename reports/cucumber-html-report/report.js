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
  "duration": 8344438789,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2382618739,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_login_using_usrname()"
});
formatter.result({
  "duration": 1564057564,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.the_user_login_using_password()"
});
formatter.result({
  "duration": 1522515490,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.click_on_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 6914352452,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.addToCard()"
});
formatter.result({
  "duration": 3273917482,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.CardBtn()"
});
formatter.result({
  "duration": 3737591863,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.CheckBtn()"
});
formatter.result({
  "duration": 3688607112,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.firstName()"
});
formatter.result({
  "duration": 3405926009,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.lastName()"
});
formatter.result({
  "duration": 3486933355,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.zipCode()"
});
formatter.result({
  "duration": 3303137600,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.continueBtn()"
});
formatter.result({
  "duration": 3825526913,
  "status": "passed"
});
formatter.match({
  "location": "CancelPageStep.cancelBtn()"
});
formatter.result({
  "duration": 4672197359,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Login and click Add to Card Failure.",
  "description": "",
  "id": "swaglabs-website;login-and-click-add-to-card-failure.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@SwagLabs_TS6"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "user is launched the web application.",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "user open the Swaglabs Home page.",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user enter the username.",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "user enter the password.",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "click the login button user will navigate the next page.",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "user clicks card button.",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCardFailurePageStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3858571004,
  "status": "passed"
});
formatter.match({
  "location": "AddToCardFailurePageStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2040753614,
  "status": "passed"
});
formatter.match({
  "location": "AddToCardFailurePageStep.the_user_login_using_username()"
});
formatter.result({
  "duration": 1459933723,
  "status": "passed"
});
formatter.match({
  "location": "AddToCardFailurePageStep.the_user_login_using_password()"
});
formatter.result({
  "duration": 1450044162,
  "status": "passed"
});
formatter.match({
  "location": "AddToCardFailurePageStep.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 6575050727,
  "status": "passed"
});
formatter.match({
  "location": "AddToCardFailurePageStep.cardBtn()"
});
formatter.result({
  "duration": 4030965477,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Login to the website with multiple users",
  "description": "",
  "id": "swaglabs-website;login-to-the-website-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@SwagLabs_TS7"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "launching the webapplication",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "opens the Swaglabs Home page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "enters the \u003cusername\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "enter the pas \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the login button it will navigate to the next page",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "logout from the webapplication",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "swaglabs-website;login-to-the-website-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 82,
      "id": "swaglabs-website;login-to-the-website-with-multiple-users;;1"
    },
    {
      "cells": [
        "standard_user",
        "",
        "secret_sauce"
      ],
      "line": 83,
      "id": "swaglabs-website;login-to-the-website-with-multiple-users;;2"
    },
    {
      "cells": [
        "problem_user",
        "",
        "secret_sauce"
      ],
      "line": 84,
      "id": "swaglabs-website;login-to-the-website-with-multiple-users;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "",
        "secret_sauce"
      ],
      "line": 85,
      "id": "swaglabs-website;login-to-the-website-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Login to the website with multiple users",
  "description": "",
  "id": "swaglabs-website;login-to-the-website-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SwagLabs"
    },
    {
      "line": 73,
      "name": "@SwagLabs_TS7"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "launching the webapplication",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "opens the Swaglabs Home page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "enters the standard_user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "enter the pas secret_sauce",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the login button it will navigate to the next page",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "logout from the webapplication",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageMStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3820935007,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2493185494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 11
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the(String)"
});
formatter.result({
  "duration": 3556724763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 14
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the_pas(String)"
});
formatter.result({
  "duration": 3406980710,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 6698586024,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.logout_from_the_webapplication()"
});
formatter.result({
  "duration": 4943637169,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Login to the website with multiple users",
  "description": "",
  "id": "swaglabs-website;login-to-the-website-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SwagLabs"
    },
    {
      "line": 73,
      "name": "@SwagLabs_TS7"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "launching the webapplication",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "opens the Swaglabs Home page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "enters the problem_user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "enter the pas secret_sauce",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the login button it will navigate to the next page",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "logout from the webapplication",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageMStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4097184665,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2359294563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 11
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the(String)"
});
formatter.result({
  "duration": 3473594732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 14
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the_pas(String)"
});
formatter.result({
  "duration": 3447565282,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 4890162540,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.logout_from_the_webapplication()"
});
formatter.result({
  "duration": 4223056967,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Login to the website with multiple users",
  "description": "",
  "id": "swaglabs-website;login-to-the-website-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SwagLabs"
    },
    {
      "line": 73,
      "name": "@SwagLabs_TS7"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "launching the webapplication",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "opens the Swaglabs Home page",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "enters the performance_glitch_user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "enter the pas secret_sauce",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "click on the login button it will navigate to the next page",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "logout from the webapplication",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageMStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4137599591,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2415104990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 11
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the(String)"
});
formatter.result({
  "duration": 3648372699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 14
    }
  ],
  "location": "LoginPageMStep.the_user_enters_the_pas(String)"
});
formatter.result({
  "duration": 3505938506,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 12069555957,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageMStep.logout_from_the_webapplication()"
});
formatter.result({
  "duration": 4293442438,
  "status": "passed"
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
  "duration": 4285174473,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_opens_the_swaglabs_main_page()"
});
formatter.result({
  "duration": 2919822167,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_enters_the_uname()"
});
formatter.result({
  "duration": 3498864702,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_enter_the_pswrd()"
});
formatter.result({
  "duration": 3466104360,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.click_on_the_login_button_user_will_navigate_to_the_next_page()"
});
formatter.result({
  "duration": 5609128993,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_clicks_on_about_button()"
});
formatter.result({
  "duration": 13076379217,
  "status": "passed"
});
formatter.match({
  "location": "AboutPageStep.the_user_clicks_on_signin_button_to_navigate_to_the_next_page()"
});
formatter.result({
  "duration": 9845965903,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Login to the website",
  "description": "",
  "id": "swaglabs-website;login-to-the-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@SwagLabs_TS9"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "user is launching the webapplications",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "the user opens the Swaglabs Home",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "the user enters username",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "the user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "click on the login button user will not navigate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageFailureStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4442564053,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageFailureStep.the_user_open_the_Myntra_Home_page()"
});
formatter.result({
  "duration": 2169474877,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageFailureStep.the_user_login_using_username()"
});
formatter.result({
  "duration": 1643219333,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageFailureStep.the_user_login_using_password()"
});
formatter.result({
  "duration": 1516554344,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageFailureStep.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 3586388013,
  "status": "passed"
});
});