$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("wiki-login.feature");
formatter.feature({
  "line": 1,
  "name": "Wikipedia Login Page",
  "description": "",
  "id": "wikipedia-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Can not login given wrong credentials",
  "description": "",
  "id": "wikipedia-login-page;can-not-login-given-wrong-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "browser with Wikipedia Login Page open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input \u003clogin\u003e into Login field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user input \u003cpassword\u003e into Password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "warning message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "browser closes",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "login",
        "password"
      ],
      "line": 13,
      "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;;1"
    },
    {
      "cells": [
        "Michał",
        "haslomoje"
      ],
      "line": 14,
      "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;;2"
    },
    {
      "cells": [
        "Tomasz",
        "haslojego"
      ],
      "line": 15,
      "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Can not login given wrong credentials",
  "description": "",
  "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "browser with Wikipedia Login Page open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input Michał into Login field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user input haslomoje into Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "warning message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "browser closes",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Wikipedia Login Page",
      "offset": 13
    }
  ],
  "location": "WikiLogin.browserWithPageOpen(String)"
});
formatter.result({
  "duration": 2656208737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michał",
      "offset": 11
    },
    {
      "val": "Login",
      "offset": 23
    }
  ],
  "location": "WikiLogin.userInputValueIntoField(String,String)"
});
formatter.result({
  "duration": 142383172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "haslomoje",
      "offset": 11
    },
    {
      "val": "Password",
      "offset": 26
    }
  ],
  "location": "WikiLogin.userInputValueIntoField(String,String)"
});
formatter.result({
  "duration": 96051457,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.userClickLoginButton()"
});
formatter.result({
  "duration": 715672262,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.warningMessageIsDisplayed()"
});
formatter.result({
  "duration": 32879932,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.browserCloses()"
});
formatter.result({
  "duration": 78489166,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Can not login given wrong credentials",
  "description": "",
  "id": "wikipedia-login-page;can-not-login-given-wrong-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "browser with Wikipedia Login Page open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user input Tomasz into Login field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user input haslojego into Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "warning message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "browser closes",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Wikipedia Login Page",
      "offset": 13
    }
  ],
  "location": "WikiLogin.browserWithPageOpen(String)"
});
formatter.result({
  "duration": 1493731776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tomasz",
      "offset": 11
    },
    {
      "val": "Login",
      "offset": 23
    }
  ],
  "location": "WikiLogin.userInputValueIntoField(String,String)"
});
formatter.result({
  "duration": 105683319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "haslojego",
      "offset": 11
    },
    {
      "val": "Password",
      "offset": 26
    }
  ],
  "location": "WikiLogin.userInputValueIntoField(String,String)"
});
formatter.result({
  "duration": 140925265,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.userClickLoginButton()"
});
formatter.result({
  "duration": 791891415,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.warningMessageIsDisplayed()"
});
formatter.result({
  "duration": 32998072,
  "status": "passed"
});
formatter.match({
  "location": "WikiLogin.browserCloses()"
});
formatter.result({
  "duration": 90139338,
  "status": "passed"
});
});