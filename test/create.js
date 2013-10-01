/*global require, exports */

(function () {
    "use strict";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
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
        "periphery methods": function (test) {
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                monthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                leapYears = [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092],
                leapYearLength = leapYears.length,
                normalYears = [],
                normalYearsLength,
                astrodate,
                index;

            for (index = leapYears[0]; index < leapYears[leapYearLength - 1]; index += 1) {
                if (leapYears.indexOf(index) === -1) {
                    normalYears.push(index);
                }
            }

            normalYearsLength = normalYears.length;
            test.expect((4 * 12) + leapYearLength + normalYearsLength + (2 * 7));
            for (index = 0; index < 12; index += 1) {
                astrodate = new AstroDate([2013, index + 1]);
                test.equal(astrodate.monthOfYear(), monthNames[index], "Month name match");
                test.equal(astrodate.daysInMonth(), monthDays[index], "Days in month: normal year");

                astrodate = new AstroDate([2012, index + 1]);
                test.equal(astrodate.monthOfYear(), monthNames[index], "Month name match");
                test.equal(astrodate.daysInMonth(), monthDaysLeap[index], "Days in month: leap year");
            }

            for (index = 0; index < leapYearLength; index += 1) {
                test.ok(new AstroDate([leapYears[index]]).isLeapYear(), "Leap year");
            }

            for (index = 0; index < normalYearsLength; index += 1) {
                test.ok(!new AstroDate([2013]).isLeapYear(), "Normal year");
            }

            for (index = 0; index < 7; index += 1) {
                astrodate = new AstroDate([2013, 9, index + 1]);
                test.equal(astrodate.dayOfWeek(), dayNames[index], "Day names");
                test.equal(astrodate.dayOfYear(), 244 + index, "Day of year");
            }

            test.done();
        },

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
                index2,
                length,
                count,
                end,
                slice,
                tObject,
                json,
                date,
                temp;

            test.expect(32 * (zeroArray.length - 1) * repeat);
            for (count = 0; count < repeat; count += 1) {
                fullArray.length = 0;
                fullArrayString.length = 0;
                year = getRandomInt(-9007199254740991, 9007199254740991);
                if (Math.abs(year) > 999999999999999) {
                    year = year.toString();
                }

                month = getRandomInt(1, 12);
                hour = getRandomInt(0, 24);
                fullArray.push(year);
                fullArray.push(month);
                fullArray.push(getRandomInt(1, new AstroDate([year, month]).daysInMonth().toNumber()));
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
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        if (index === 0 && temp[index].gt(999999999999999)) {
                            temp[index] = temp[index].toString();
                        } else {
                            temp[index] = temp[index].toNumber();
                        }
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")Number: Arrays are the same");
                    date = new Date(astrodate.toISOString()).getTime();
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")Number date: Dates are the same: " + slice);
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number: JSON are the same: ");

                    astrodate = new AstroDate().array(fullArray.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number array: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number array: isValid");
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        if (index === 0 && temp[index].gt(999999999999999)) {
                            temp[index] = temp[index].toString();
                        } else {
                            temp[index] = temp[index].toNumber();
                        }
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")Number array: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")Number array date: Dates are the same");
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number array: JSON are the same: ");

                    astrodate = new AstroDate(astrodate);
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")Number astrodate: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")Number astrodate: isValid");
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        if (index === 0 && temp[index].gt(999999999999999)) {
                            temp[index] = temp[index].toString();
                        } else {
                            temp[index] = temp[index].toNumber();
                        }
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")Number astrodate: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")Number astrodate date: dates are the same");
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")Number astrodate: JSON are the same: ");

                    astrodate = new AstroDate(fullArrayString.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String: isValid");
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        temp[index] = temp[index].toString();
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")String: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")String date: dates are the same");
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String: JSON are the same: ");

                    astrodate = new AstroDate().array(fullArrayString.slice(0, end));
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String array: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String array: isValid");
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        temp[index] = temp[index].toString();
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")String array: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")String array date: dates are the same");
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String array: JSON are the same: ");

                    astrodate = astrodate.clone();
                    test.ok(astrodate !== astrodate.clone, "(" + count + "/" + index + ")String clone: is a clone");
                    test.ok(AstroDate.isAstroDate(astrodate), "(" + count + "/" + index + ")String clone: isAstrodate");
                    test.ok(astrodate.isValid(), "(" + count + "/" + index + ")String clone: isValid");
                    temp = astrodate.array();
                    for (index2 = 0, length = temp.length; index2 < length; index += 1) {
                        temp[index] = temp[index].toString();
                    }

                    test.deepEqual(temp, slice, "(" + count + "/" + index + ")String clone: Arrays are the same");
                    if (slice[0] >= 0 && slice[0] < 10000 && slice[3] !== 24) {
                        test.equal(astrodate.getTime(), date, "(" + count + "/" + index + ")String clone: dates are the same");
                    } else {
                        test.ok(isNaN(date), "outside of Date capability: " + slice);
                    }

                    test.equal(astrodate.json(), json, "(" + count + "/" + index + ")String clone: JSON are the same: ");

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
                year = padLeadingZero(getRandomInt(0, 9007199254740991), 4);
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
                day = padLeadingZero(getRandomInt(1, new AstroDate([year, month]).daysInMonth().toNumber()), 2);
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
                    test.equal(new AstroDate(formats[index][0]).toISOString(), formats[index][1], "(" + index + ")AstroDate should be able to parse ISO " + formats[index][0]);
                    withComma = formats[index][0];
                    test.equal(new AstroDate(withComma).toISOString(), formats[index][1], "(" + index + ")AstroDate should be able to parse ISO " + withComma);
                }
            }

            test.done();
        }
    };
}());
