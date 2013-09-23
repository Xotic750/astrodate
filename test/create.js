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
            var repeat = 5000,
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
                slice,
                tObject,
                json,
                date;

            test.expect(31 * (zeroArray.length - 1) * repeat);
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
                    tObject = {
                        "year": slice[0],
                        "month": slice[1],
                        "day": slice[2],
                        "hour": slice[3],
                        "minute": slice[4],
                        "second": slice[5],
                        "millisecond": slice[6],
                        "offset": slice[7]
                    };

                    json = JSON.stringify(tObject);
                    astrodate = new AstroDate(fullArray.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")Number: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        date = new Date(astrodate.toString()).getTime();
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")Number date: Dates are the same: " + slice);
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number: JSON are the same: ");

                    astrodate = new AstroDate().array(fullArray.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number array: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number array: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")Number array: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")Number array date: Dates are the same");
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number array: JSON are the same: ");

                    astrodate = new AstroDate(astrodate);
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number astrodate: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number astrodate: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")Number astrodate: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")Number astrodate date: dates are the same");
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number astrodate: JSON are the same: ");

                    astrodate = new AstroDate(fullArrayString.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")String: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")String date: dates are the same");
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String: JSON are the same: ");

                    astrodate = new AstroDate().array(fullArrayString.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String array: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String array: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")String array: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")String array date: dates are the same");
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String array: JSON are the same: ");

                    astrodate = new AstroDate(astrodate);
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String astrodate: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String astrodate: isValid");
                    test.deepEqual(astrodate.array(), slice, "(" + count + "/" + index + ")String astrodate: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000) {
                        test.equal(astrodate.date().getTime(), date, "(" + count + "/" + index + ")String astrodate: dates are the same");
                    } else {
                        test.ok(true, "year outside of Date capability");
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String astrodate: JSON are the same: ");

                    astrodate = new AstroDate().json(json);
                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")JSON parse: JSON are the same: ");
                }
            }

            test.done();
        },

        "parsing iso" : function (test) {
            var repeat = 5000,
                count,
                offset =  new Date().getTimezoneOffset(),
                hourOffset,
                minOffset,
                tz,
                tz2,
                formats,
                index,
                year,
                month,
                day,
                hour,
                minute,
                second,
                millisecond,
                sign,
                withComma;

            test.expect(2 * 66 * repeat);
            for (count = 0; count < repeat; count += 1) {
                year = padLeadingZero(getRandomInt(0, 99999), 4);
                if (year >= 10000) {
                    sign = getRandomInt(0, 1);
                    year = padLeadingZero(year, 5);
                    if (sign) {
                        year = "+" + year;
                    } else {
                        year = "-" + year;
                    }
                }

                month = padLeadingZero(getRandomInt(1, 12), 2);
                day = padLeadingZero(getRandomInt(1, daysInMonth(parseInt(year, 10), parseInt(month, 10))), 2);
                hour = padLeadingZero(getRandomInt(0, 24), 2);
                if (hour === "24") {
                    minute = "00";
                    second = "00";
                    millisecond = 0;
                } else {
                    minute = padLeadingZero(getRandomInt(0, 59), 2);
                    second = padLeadingZero(getRandomInt(0, 59), 2);
                    millisecond = getRandomInt(0, 999);
                }

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
                    [year + "-" + month + "-" + day,                                                                        year + "-" + month + "-" + day + "T00:00:00.000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour,                                                           year + "-" + month + "-" + day + "T" + hour + ":00:00.000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute,                                            year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second,                             year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + tz,                                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + tz,                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + tz2,                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + tz2,                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + millisecond + tz2,   year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + tz],
                    [year + month + day,                                                                                    year + "-" + month + "-" + day + "T00:00:00.000" + tz],
                    [year + month + day + "T" + hour,                                                                       year + "-" + month + "-" + day + "T" + hour + ":00:00.000" + tz],
                    [year + month + day + "T" + hour + minute,                                                              year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + "T" + hour + minute + second,                                                     year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + "T" + hour + minute + tz,                                                         year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + "T" + hour + minute + second + tz,                                                year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + "T" + hour + minute + tz2,                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + "T" + hour + minute + second + tz2,                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + "T" + hour + minute + second + "." + millisecond + tz2,                           year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + tz],

                    [year + "-" + month + "-" + day + "T" + hour + "Z",                                                     year + "-" + month + "-" + day + "T" + hour + ":00:00.000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + millisecond + "Z",   year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + "Z"],
                    [year + month + day + "T" + hour + "Z",                                                                 year + "-" + month + "-" + day + "T" + hour + ":00:00.000Z"],
                    [year + month + day + "T" + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + "T" + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + "T" + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + "T" + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + "T" + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + "T" + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + "T" + hour + minute + second + "." + millisecond + "Z",                           year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + "Z"],

                    [year + "-" + month + "-" + day + " " + hour,                                                           year + "-" + month + "-" + day + "T" + hour + ":00:00.000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute,                                            year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second,                             year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + tz,                                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + tz,                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + tz2,                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + tz2,                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond + tz2,   year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + tz],
                    [year + month + day + " " + hour,                                                                       year + "-" + month + "-" + day + "T" + hour + ":00:00.000" + tz],
                    [year + month + day + " " + hour + minute,                                                              year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + " " + hour + minute + second,                                                     year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + " " + hour + minute + tz,                                                         year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + " " + hour + minute + second + tz,                                                year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + " " + hour + minute + tz2,                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000" + tz],
                    [year + month + day + " " + hour + minute + second + tz2,                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000" + tz],
                    [year + month + day + " " + hour + minute + second + "." + millisecond + tz2,                           year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + tz],

                    [year + "-" + month + "-" + day + " " + hour + "Z",                                                     year + "-" + month + "-" + day + "T" + hour + ":00:00.000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + "Z",                                      year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "Z",                       year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond + "Z",   year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + "Z"],
                    [year + month + day + " " + hour + "Z",                                                                 year + "-" + month + "-" + day + "T" + hour + ":00:00.000Z"],
                    [year + month + day + " " + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + " " + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + " " + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + " " + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + " " + hour + minute + "Z",                                                        year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00.000Z"],
                    [year + month + day + " " + hour + minute + second + "Z",                                               year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + ".000Z"],
                    [year + month + day + " " + hour + minute + second + "." + millisecond + "Z",                           year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second + "." + parseFloat("0." + millisecond).toFixed(3).slice(2) + "Z"]
                ];

                for (index = 0; index < formats.length; index += 1) {
                    test.equal(new AstroDate(formats[index][0]).toString(), formats[index][1], "(" + index + ")AstroDate should be able to parse ISO " + formats[index][0]);
                    withComma = formats[index][0];
                    test.equal(new AstroDate(withComma).toString(), formats[index][1], "(" + index + ")AstroDate should be able to parse ISO " + withComma);
                }
            }

            test.done();
        }
    };
}());
