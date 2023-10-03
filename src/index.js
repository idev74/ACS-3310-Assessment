"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var DateIt = require('date-it');
var stringIt = require('string-it-on');
var data = require('./data.json');
function challengeOne() {
    data.forEach(function (element) {
        var fullName = "".concat(element.first_name, " ").concat(element.last_name);
        console.log(stringIt.capitalizeWords(fullName));
    });
}
function challengeTwo() {
    data.forEach(function (element) {
        var date = new DateIt(element.purchased);
        console.log("Purchased: ".concat(date.format('M d, Y')));
    });
}
function challengeThree() {
    data.forEach(function (element) {
        var lastPayment = new DateIt(element.lastpayment);
        var length = lastPayment.when();
        console.log("Last Payment: ".concat(length));
    });
}
function challengeFour() {
    data.forEach(function (element) {
        var phone = element.phone;
        if (element.phone === null || element.phone.length !== 10) {
            (0, console_1.error)('Invalid phone number');
        }
        else {
            var phoneArray = phone.split('');
            var areaCode = phoneArray.slice(0, 3).join('');
            var firstThree = phoneArray.slice(3, 6).join('');
            var lastFour = phoneArray.slice(6, 10).join('');
            console.log("(".concat(areaCode, ") ").concat(firstThree, "-").concat(lastFour));
        }
    });
}
module.exports = {
    challengeOne: challengeOne,
    challengeTwo: challengeTwo,
    challengeThree: challengeThree,
    challengeFour: challengeFour
};
