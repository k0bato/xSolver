'use strict'

const request = require('request');

exports.getBalance = function(key) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'GET',
            uri: 'http://x-captcha2.ru/res.php?key=' + key + '&action=getbalance'
        }
        request(options, function(error, response, body) {
            if (error) return reject(err);
            try {
                if (body.includes('OK')) {
                    var result = body.split('|')[1];
                    resolve(result);
                }
                if (body.includes('ERROR')) {
                    resolve(body);
                }  
            } catch(e) {
                reject(e);
            }       
        });
    });
}

exports.createTask = function(key, googleKey, pageUrl) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'POST',
            uri: 'http://x-captcha2.ru/in.php',
            body: "key=" + key + "&method=userrecaptcha&googlekey=" + googleKey + "&pageurl=" + pageUrl
        }
        request(options, function(error, response, body) {
            if (error) return reject(err);
            try {
                if (body.includes('OK')) {
                    var result = body.split('|')[1];
                    resolve(result);
                }
                if (body.includes('ERROR')) {
                    resolve(body);
                }
            } catch(e) {
                reject(e);
            }
        });
    });
}

exports.getResult = function(key, captchaId) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'GET',
            url: 'http://x-captcha2.ru/res.php?key=' + key + '&id=' + captchaId
        }
        var interval = setInterval(function() {
            request(options, function(error, response, body) {
                if(error) return reject(err);
                try {
                    if(body.includes('OK')) {
                        clearInterval(interval);
                        var result = body.split('|')[1];
                        resolve(result);
                    }
                    if(body.includes('CAPTCHA') || body.includes('ERROR')) {
                        resolve(body);
                    }
                } catch(e) {
                    reject(e);
                }
            });
        }, 2500); 
    });
}

exports.reportCaptcha = function(key, captchaId) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'GET',
            url: 'http://x-captcha2.ru/res.php?key=' + key + '&action=reportbad&id=' + captchaId
        }
        request(options, function(error, response, body) {
            if(error) return reject(err);
            try {
                resolve(body);
            } catch(e) {
                reject(e);
            }
        });
    });
}

