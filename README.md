## xSolver

A simple solver for x-captcha.ru

##### Methods:

- getBalance(key)
- createTask(key, googleKey, pageUrl)
- getResult(key, captchaId)
- reportCaptcha(key, captchaId)

##### Examples

```javascript
const xsolver = require("xsolver");
const key = "";

xsolver.getBalance(key).then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err);
});
```

```javascript
const xsolver = require("xsolver");
const key = "";
const googleKey = "";
const pageUrl = "https://google.com";

xsolver.createTask(key, googleKey, pageUrl).then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err);
});
```

```javascript
const xsolver = require("xsolver");
const key = "";

xsolver.getResult(key, captchaId).then(function(result) { // captchaId from createTask() result
    console.log(result);
}).catch(function(err) {
    console.log(err);
});
```

```javascript
const xsolver = require("xsolver");
const key = "";

reportCaptcha(key, captchaId).then(function(result) { // captchaId from createTask() result
    console.log(result);
}).catch(function(err) {
    console.log(err);
});
```

#### Links
[API documentation with errors](http://x-captcha.ru/x-api)