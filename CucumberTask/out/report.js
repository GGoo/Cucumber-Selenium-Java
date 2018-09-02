$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("coders-guru-formule.feature");
formatter.feature({
  "line": 1,
  "name": "register in Coders Guru site",
  "description": "",
  "id": "register-in-coders-guru-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user can register in Coders Guru",
  "description": "",
  "id": "register-in-coders-guru-site;user-can-register-in-coders-guru",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on main page of Coders Guru",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on the new registration button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user input e-mail into e-mail field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user input \u003cfirstName\u003e into first name field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user input \u003clastName\u003e into last name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user input \u003cpassword\u003e into password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user input \u003cpassword\u003e into repeat password field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user input \u003ccity\u003e into city field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user input \u003czipcode\u003e into zip code field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user input \u003cstreet\u003e into street field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user input \u003cnumberHouse\u003e into number house field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user checks checkbox to accept the regulations",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the registration button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "password",
        "city",
        "zipcode",
        "street",
        "numberHouse"
      ],
      "line": 20,
      "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;;1"
    },
    {
      "cells": [
        "Michal",
        "Lowicz",
        "qwerty",
        "Wroclaw",
        "45-221",
        "Prosta",
        "12"
      ],
      "line": 21,
      "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;;2"
    },
    {
      "cells": [
        "Jan",
        "Nowak",
        "dfghj",
        "Warszawa",
        "78-212",
        "Krzywa",
        "24"
      ],
      "line": 22,
      "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "user can register in Coders Guru",
  "description": "",
  "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on main page of Coders Guru",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on the new registration button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user input e-mail into e-mail field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user input Michal into first name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user input Lowicz into last name field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user input qwerty into password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user input qwerty into repeat password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user input Wroclaw into city field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user input 45-221 into zip code field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user input Prosta into street field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user input 12 into number house field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user checks checkbox to accept the regulations",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the registration button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Coders Guru",
      "offset": 24
    }
  ],
  "location": "CodersGuru.userIsOnMainPageOfCodersGuru(String)"
});
formatter.result({
  "duration": 9484246362,
  "status": "passed"
});
formatter.match({
  "location": "CodersGuru.userClickOnTheNewRegistrationButton()"
});
formatter.result({
  "duration": 810945264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "e-mail",
      "offset": 11
    },
    {
      "val": "e-mail",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 7625324231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michal",
      "offset": 11
    },
    {
      "val": "first name",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 136393583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lowicz",
      "offset": 11
    },
    {
      "val": "last name",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 106427798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 11
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 102481437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 11
    },
    {
      "val": "repeat password",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 102346792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wroclaw",
      "offset": 11
    },
    {
      "val": "city",
      "offset": 24
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 93784499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45-221",
      "offset": 11
    },
    {
      "val": "zip code",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 96361904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prosta",
      "offset": 11
    },
    {
      "val": "street",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 110276239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 11
    },
    {
      "val": "number house",
      "offset": 19
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "duration": 110160089,
  "status": "passed"
});
formatter.match({
  "location": "CodersGuru.userCheckCheckboxToAcceptTheRegulations()"
});
formatter.result({
  "duration": 245093865,
  "status": "passed"
});
formatter.match({
  "location": "CodersGuru.userClickOnTheRegistrationButton()"
});
formatter.result({
  "duration": 2403927131,
  "status": "passed"
});
formatter.match({
  "location": "CodersGuru.closeTheBrowser()"
});
formatter.result({
  "duration": 604870601,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "user can register in Coders Guru",
  "description": "",
  "id": "register-in-coders-guru-site;user-can-register-in-coders-guru;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on main page of Coders Guru",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on the new registration button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user input e-mail into e-mail field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user input Jan into first name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user input Nowak into last name field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user input dfghj into password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user input dfghj into repeat password field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user input Warszawa into city field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user input 78-212 into zip code field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user input Krzywa into street field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user input 24 into number house field",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user checks checkbox to accept the regulations",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on the registration button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Coders Guru",
      "offset": 24
    }
  ],
  "location": "CodersGuru.userIsOnMainPageOfCodersGuru(String)"
});
formatter.result({
  "duration": 5872732050,
  "error_message": "org.openqa.selenium.WebDriverException: [Exception... \"Failure\"  nsresult: \"0x80004005 (NS_ERROR_FAILURE)\"  location: \"JS frame :: chrome://marionette/content/driver.js :: GeckoDriver.prototype.maximizeWindow/windowSizeChange/\u003c :: line 3029\"  data: no]\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:43:cc46:4e76:7468%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 61.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 8420, moz:profile: /var/folders/07/pwss_zm91wj..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 16.7.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 7a6d0dd4-4c91-ee4e-96d4-e43b83be654b\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat pl.coderslab.CodersGuru.userIsOnMainPageOfCodersGuru(CodersGuru.java:22)\n\tat ✽.Given user is on main page of Coders Guru(coders-guru-formule.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "CodersGuru.userClickOnTheNewRegistrationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "e-mail",
      "offset": 11
    },
    {
      "val": "e-mail",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 11
    },
    {
      "val": "first name",
      "offset": 20
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nowak",
      "offset": 11
    },
    {
      "val": "last name",
      "offset": 22
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dfghj",
      "offset": 11
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dfghj",
      "offset": 11
    },
    {
      "val": "repeat password",
      "offset": 22
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Warszawa",
      "offset": 11
    },
    {
      "val": "city",
      "offset": 25
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "78-212",
      "offset": 11
    },
    {
      "val": "zip code",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Krzywa",
      "offset": 11
    },
    {
      "val": "street",
      "offset": 23
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 11
    },
    {
      "val": "number house",
      "offset": 19
    }
  ],
  "location": "CodersGuru.userInputEmailIntoEMailField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CodersGuru.userCheckCheckboxToAcceptTheRegulations()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CodersGuru.userClickOnTheRegistrationButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CodersGuru.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});