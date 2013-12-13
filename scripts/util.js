/*global module, setTimeout, clearTimeout */
(function () {
    'use strict';

    var util = {};

    util.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    util.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function setValid(x) {
        return typeof x === 'number' && isFinite(x) && x >= 0 ? x : 0;
    }

    util.Fire = function (cntStart) {
        this.id = null;
        this.cnt = this.bgn = setValid(cntStart);
    };

    util.Fire.prototype.end = function (cb) {
        clearTimeout(this.id);
        this.id = null;
        this.cnt = this.bgn = setValid(this.bgn);
        if (typeof cb === 'function') {
            cb();
        }
    };

    util.Fire.prototype.run = function (times, fn, ms, cb) {
        var self;

        times = setValid(times);
        if (typeof this.cnt === 'number' && this.cnt < times) {
            self = this;
            this.id = setTimeout(function () {
                if (typeof fn === 'function') {
                    fn(self.cnt, times);
                    self.cnt += 1;
                    self.run(times, fn, ms, cb);
                } else {
                    self.cnt = times;
                }
            }, ms);
        } else {
            this.end(cb);
        }
    };

    util.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    util.padLeadingZero = function (number, size) {
        var numString = number.toString(),
            length = size - numString.length,
            i;

        for (i = 0; i < length; i += 1) {
            numString = '0' + numString;
        }

        return numString;
    };

    util.isGregorianLeapYear = function (year) {
        return 0 === year % 400 || (0 !== year % 100 && 0 === year % 4);
    };

    util.daysInGregorianMonth = function (year, month) {
        var days;

        if (2 === month) {
            days = 28;
            if (util.isGregorianLeapYear(year)) {
                days += 1;
            }
        } else {
            days =  31 - ((month - 1) % 7 % 2);
        }

        return days;
    };

    util.jsonStringify = function (arg) {
        var jsonA = [],
            prop,
            string;

        if (typeof JSON === 'object' && typeof JSON.stringify === 'function') {
            string = JSON.stringify(arg);
        } else {
            jsonA = [];
            for (prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    jsonA.push('"' + prop + '":"' + arg[prop] + '"');
                }
            }

            string = '{' + jsonA.join(',') + '}';
        }

        return string;
    };

    util.jsonParse = function (jsonString) {
        var object;

        if (typeof JSON === 'object' && typeof JSON.parse === 'function') {
            object = JSON.parse(jsonString);
        } else {
            /*jslint evil: true */
            object = new Function('return' + jsonString)();
            /*jslint evil: false */
        }

        return object;
    };

    module.exports = util;
}());
