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

    function padLeadingZero(number, size) {
        var numString = number.toString(),
            length = size - numString.length,
            i;

        for (i = 0; i < length; i += 1) {
            numString = "0" + numString;
        }

        return numString;
    }

    var AstroDate = require("../astrodate");

    exports.create = {
        "array/isAstroDate/isValid/from AstroDate": function (test) {
            var repeat = 500,
                zeroArray = [NaN, 1, 1, 0, 0, 0, 0, 0],
                fullArray = [],
                fullArrayString = [],
                year,
                month,
                hour,
                fullArrayLength,
                astrodate,
                index,
                count,
                end,
                slice;

            test.expect(12 * (zeroArray.length - 1) * repeat);
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

                fullArray.push(getRandomInt(-1440, 1440));
                fullArrayLength = fullArray.length;
                for (index = 0; index < fullArrayLength; index += 1) {
                    fullArrayString[index] = fullArray[index].toString();
                }

                for (index = 1; index < fullArrayLength; index += 1) {
                    end = -index;
                    slice = fullArray.slice(0, end).concat(zeroArray.slice(end));
                    astrodate = new AstroDate(fullArray.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number: isValid");
                    test.deepEqual(astrodate.toArray(), slice, "(" + count + "/" + index + ")Number: Arrays are the same");

                    astrodate = new AstroDate(astrodate);
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number astrodate: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number astrodate: isValid");
                    test.deepEqual(astrodate.toArray(), slice, "(" + count + "/" + index + ")Number astrodate: Arrays are the same");

                    astrodate = new AstroDate(fullArrayString.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String: isValid");
                    test.deepEqual(astrodate.toArray(), slice, "(" + count + "/" + index + ")String: Arrays are the same");

                    astrodate = new AstroDate(astrodate);
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String astrodate: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String astrodate: isValid");
                    test.deepEqual(astrodate.toArray(), slice, "(" + count + "/" + index + ")String astrodate: Arrays are the same");
                }
            }

            test.done();
        },

        "parsing iso" : function (test) {
            var repeat = 500,
                count,
                offset =  new Date().getTimezoneOffset(),
                hourOffset,
                minOffset,
                tz,
                tz2,
                formats,
                index;

            for (count = 0; count < repeat; count += 1) {
                //offset = getRandomInt(-1440, 1440);
                if (offset !== 0) {
                    hourOffset = (offset > 0) ? Math.floor(offset / 60) : Math.ceil(offset / 60);
                    minOffset = offset - (hourOffset * 60);
                    tz = (offset > 0 ? "-" : "+") + padLeadingZero(Math.abs(hourOffset), 2) + ":" + padLeadingZero(Math.abs(minOffset), 2);
                    tz2 = tz.replace(":", "");
                } else {
                    tz = "Z";
                    tz2 = "Z";
                }

                formats = [
                    ["2011-10-08",                    "2011-10-08T00:00:00.000" + tz],
                    ["2011-10-08T18",                 "2011-10-08T18:00:00.000" + tz],
                    ["2011-10-08T18:04",              "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08T18:04:20",           "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08T18:04" + tz,         "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08T18:04:20" + tz,      "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08T18:04" + tz2,        "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08T18:04:20" + tz2,     "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08T18:04:20.1" + tz2,   "2011-10-08T18:04:20.100" + tz],
                    ["2011-10-08T18:04:20.11" + tz2,  "2011-10-08T18:04:20.110" + tz],
                    ["2011-10-08T18:04:20.111" + tz2, "2011-10-08T18:04:20.111" + tz],
                    ["20111008",                      "2011-10-08T00:00:00.000" + tz],
                    ["20111008T18",                   "2011-10-08T18:00:00.000" + tz],
                    ["20111008T1804",                 "2011-10-08T18:04:00.000" + tz],
                    ["20111008T180420",               "2011-10-08T18:04:20.000" + tz],
                    ["20111008T1804" + tz,            "2011-10-08T18:04:00.000" + tz],
                    ["20111008T180420" + tz,          "2011-10-08T18:04:20.000" + tz],
                    ["20111008T1804" + tz2,           "2011-10-08T18:04:00.000" + tz],
                    ["20111008T180420" + tz2,         "2011-10-08T18:04:20.000" + tz],
                    ["20111008T180420.1" + tz2,       "2011-10-08T18:04:20.100" + tz],
                    ["20111008T180420.11" + tz2,      "2011-10-08T18:04:20.110" + tz],
                    ["20111008T180420.111" + tz2,     "2011-10-08T18:04:20.111" + tz],

                    ["2011-10-08T18Z",                 "2011-10-08T18:00:00.000Z"],
                    ["2011-10-08T18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08T18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08T18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08T18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08T18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08T18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08T18:04:20.1Z",         "2011-10-08T18:04:20.100Z"],
                    ["2011-10-08T18:04:20.11Z",        "2011-10-08T18:04:20.110Z"],
                    ["2011-10-08T18:04:20.111Z",       "2011-10-08T18:04:20.111Z"],
                    ["20111008T18Z",                   "2011-10-08T18:00:00.000Z"],
                    ["20111008T1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008T180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008T1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008T180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008T1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008T180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008T180420.1Z",             "2011-10-08T18:04:20.100Z"],
                    ["20111008T180420.11Z",            "2011-10-08T18:04:20.110Z"],
                    ["20111008T180420.111Z",           "2011-10-08T18:04:20.111Z"],

                    ["2011-10-08 18",                 "2011-10-08T18:00:00.000" + tz],
                    ["2011-10-08 18:04",              "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08 18:04:20",           "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08 18:04" + tz,         "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08 18:04:20" + tz,      "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08 18:04" + tz2,        "2011-10-08T18:04:00.000" + tz],
                    ["2011-10-08 18:04:20" + tz2,     "2011-10-08T18:04:20.000" + tz],
                    ["2011-10-08 18:04:20.1" + tz2,   "2011-10-08T18:04:20.100" + tz],
                    ["2011-10-08 18:04:20.11" + tz2,  "2011-10-08T18:04:20.110" + tz],
                    ["2011-10-08 18:04:20.111" + tz2, "2011-10-08T18:04:20.111" + tz],
                    ["20111008",                      "2011-10-08T00:00:00.000" + tz],
                    ["20111008 18",                   "2011-10-08T18:00:00.000" + tz],
                    ["20111008 1804",                 "2011-10-08T18:04:00.000" + tz],
                    ["20111008 180420",               "2011-10-08T18:04:20.000" + tz],
                    ["20111008 1804" + tz,            "2011-10-08T18:04:00.000" + tz],
                    ["20111008 180420" + tz,          "2011-10-08T18:04:20.000" + tz],
                    ["20111008 1804" + tz2,           "2011-10-08T18:04:00.000" + tz],
                    ["20111008 180420" + tz2,         "2011-10-08T18:04:20.000" + tz],
                    ["20111008 180420.1" + tz2,       "2011-10-08T18:04:20.100" + tz],
                    ["20111008 180420.11" + tz2,      "2011-10-08T18:04:20.110" + tz],
                    ["20111008 180420.111" + tz2,     "2011-10-08T18:04:20.111" + tz],

                    ["2011-10-08 18Z",                 "2011-10-08T18:00:00.000Z"],
                    ["2011-10-08 18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08 18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08 18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08 18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08 18:04Z",              "2011-10-08T18:04:00.000Z"],
                    ["2011-10-08 18:04:20Z",           "2011-10-08T18:04:20.000Z"],
                    ["2011-10-08 18:04:20.1Z",         "2011-10-08T18:04:20.100Z"],
                    ["2011-10-08 18:04:20.11Z",        "2011-10-08T18:04:20.110Z"],
                    ["2011-10-08 18:04:20.111Z",       "2011-10-08T18:04:20.111Z"],
                    ["20111008 18Z",                   "2011-10-08T18:00:00.000Z"],
                    ["20111008 1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008 180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008 1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008 180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008 1804Z",                 "2011-10-08T18:04:00.000Z"],
                    ["20111008 180420Z",               "2011-10-08T18:04:20.000Z"],
                    ["20111008 180420.1Z",             "2011-10-08T18:04:20.100Z"],
                    ["20111008 180420.11Z",            "2011-10-08T18:04:20.110Z"],
                    ["20111008 180420.111Z",           "2011-10-08T18:04:20.111Z"]
                ];

                test.expect(formats.length);
                for (index = 0; index < formats.length; index += 1) {
                    test.equal(new AstroDate(formats[index][0]).toString(), formats[index][1], "AstroDate should be able to parse ISO " + formats[index][0]);
                }

                test.done();
            }
        }
    };
}());
