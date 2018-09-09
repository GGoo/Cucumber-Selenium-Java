$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("guru-register.feature");
formatter.feature({
  "line": 1,
  "name": "Coders Guru Register",
  "description": "",
  "id": "coders-guru-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can register new user",
  "description": "",
  "id": "coders-guru-register;user-can-register-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with https://wro-tem-s-01.codersguru.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill e-mail with \u003ce-mail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill first name with \u003cfirstName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill last name with \u003clastName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "fill repeat password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "fill city with \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill zip code with \u003czipCode\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "fill street with \u003cstreet\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill house with \u003cnumberHouse\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "check checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "register",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "coders-guru-register;user-can-register-new-user;",
  "rows": [
    {
      "cells": [
        "e-mail",
        "firstName",
        "lastName",
        "password",
        "city",
        "zipCode",
        "street",
        "numberHouse"
      ],
      "line": 23,
      "id": "coders-guru-register;user-can-register-new-user;;1"
    },
    {
      "cells": [
        "jan.kowalski@gmail.com",
        "Jan",
        "Kowalski",
        "123jan",
        "London",
        "59-123",
        "Prosta",
        "1"
      ],
      "line": 24,
      "id": "coders-guru-register;user-can-register-new-user;;2"
    },
    {
      "cells": [
        "adrianna.nowak@gmail.com",
        "Adrianna",
        "Nowak",
        "qwertyada",
        "Dublin",
        "12-456",
        "Krzywa",
        "3"
      ],
      "line": 25,
      "id": "coders-guru-register;user-can-register-new-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "User can register new user",
  "description": "",
  "id": "coders-guru-register;user-can-register-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with https://wro-tem-s-01.codersguru.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill e-mail with jan.kowalski@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill first name with Jan",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill last name with Kowalski",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill password with 123jan",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "fill repeat password with 123jan",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "fill city with London",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill zip code with 59-123",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "fill street with Prosta",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill house with 1",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "check checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "register",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruRegister.openGuruPage()"
});
formatter.result({
  "duration": 3247806030,
  "status": "passed"
});
formatter.match({
  "location": "GuruRegister.checkRegisterButton()"
});
formatter.result({
  "duration": 334651623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jan.kowalski@gmail.com",
      "offset": 17
    }
  ],
  "location": "GuruRegister.fillEmail(String)"
});
formatter.result({
  "duration": 94033187,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:43:cc46:4e76:7468%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506106 (8a06c39c4582fb..., userDataDir: /var/folders/07/pwss_zm91wj...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: a5aab14e4df6f0f30f113daeb13edcc8\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\n\tat pl.coderslab.GuruRegister.fillEmail(GuruRegister.java:44)\n\tat ✽.And fill e-mail with jan.kowalski@gmail.com(guru-register.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 21
    }
  ],
  "location": "GuruRegister.fillFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Kowalski",
      "offset": 20
    }
  ],
  "location": "GuruRegister.fillLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123jan",
      "offset": 19
    }
  ],
  "location": "GuruRegister.fillPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123jan",
      "offset": 26
    }
  ],
  "location": "GuruRegister.fillRepeatPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 15
    }
  ],
  "location": "GuruRegister.fillCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "59-123",
      "offset": 19
    }
  ],
  "location": "GuruRegister.fillZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prosta",
      "offset": 17
    }
  ],
  "location": "GuruRegister.fillStreet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "GuruRegister.fillNumberHouse(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GuruRegister.checkCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "User can register new user",
  "description": "",
  "id": "coders-guru-register;user-can-register-new-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with https://wro-tem-s-01.codersguru.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "fill e-mail with adrianna.nowak@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "fill first name with Adrianna",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "fill last name with Nowak",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "fill password with qwertyada",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "fill repeat password with qwertyada",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "fill city with Dublin",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "fill zip code with 12-456",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "fill street with Krzywa",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "fill house with 3",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "check checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "register",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruRegister.openGuruPage()"
});
formatter.result({
  "duration": 2025900283,
  "status": "passed"
});
formatter.match({
  "location": "GuruRegister.checkRegisterButton()"
});
formatter.result({
  "duration": 343712040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adrianna.nowak@gmail.com",
      "offset": 17
    }
  ],
  "location": "GuruRegister.fillEmail(String)"
});
formatter.result({
  "duration": 60113933,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:43:cc46:4e76:7468%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506106 (8a06c39c4582fb..., userDataDir: /var/folders/07/pwss_zm91wj...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: fcbb9b2cbbeecf0af742833d3b0299e0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:100)\n\tat pl.coderslab.GuruRegister.fillEmail(GuruRegister.java:44)\n\tat ✽.And fill e-mail with adrianna.nowak@gmail.com(guru-register.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adrianna",
      "offset": 21
    }
  ],
  "location": "GuruRegister.fillFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nowak",
      "offset": 20
    }
  ],
  "location": "GuruRegister.fillLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qwertyada",
      "offset": 19
    }
  ],
  "location": "GuruRegister.fillPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qwertyada",
      "offset": 26
    }
  ],
  "location": "GuruRegister.fillRepeatPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin",
      "offset": 15
    }
  ],
  "location": "GuruRegister.fillCity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12-456",
      "offset": 19
    }
  ],
  "location": "GuruRegister.fillZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Krzywa",
      "offset": 17
    }
  ],
  "location": "GuruRegister.fillStreet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "GuruRegister.fillNumberHouse(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GuruRegister.checkCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});