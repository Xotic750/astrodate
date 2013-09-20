/*global require, exports */

(function () {
    "use strict";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }

    function daysInMonth(year, month) {
        var days;

        if (month === 2) {
            days = 28 + isLeapYear(year);
        } else {
            days = 31 - ((month - 1) % 7 % 2);
        }

        return days;
    }

    var AstroDate = require("../astrodate");

    exports.create = {
        "array": function (test) {
            var repeat = 5,
                fullArray = [],
                fullArrayString = [],
                year,
                month,
                hour,
                fullArrayLength,
                astrodate,
                index,
                count;

            test.expect(2 * 9 * repeat);
            for (count = 0; count < repeat; count += 1) {
                fullArray.length = 0;
                fullArrayString.length = 0;
                year = getRandomInt(-99999, 99999);
                month = getRandomInt(1, 12);
                hour = getRandomInt(0, 24);
                fullArray.push(year);
                fullArray.push(month);
                fullArray.push(getRandomInt(1, daysInMonth(year, month)));
                fullArray.push(hour);
                if (hour === 24) {
                    fullArray.push(0);
                    fullArray.push(0);
                    fullArray.push(0);
                } else {
                    fullArray.push(getRandomInt(0, 59));
                    fullArray.push(getRandomInt(0, 59));
                    fullArray.push(getRandomInt(0, 999));
                }

                fullArray.push(getRandomInt(-24, 24));
                fullArrayLength = fullArray.length;
                for (index = 1; index < fullArrayLength; index += 1) {
                    astrodate = new AstroDate(fullArray.slice(0, index));
                    test.deepEqual(astrodate.toArray(), fullArray.slice(0, index), "Number: Arrays are the same");
                }

                for (index = 0; index < fullArrayLength; index += 1) {
                    fullArrayString.push(fullArray[index].toString());
                }

                for (index = 1; index < fullArrayLength; index += 1) {
                    astrodate = new AstroDate(fullArrayString.slice(0, index));
                    test.deepEqual(astrodate.toArray(), fullArray.slice(0, index), "String: Arrays are the same");
                }
            }

            test.done();
        }
    };
}());
