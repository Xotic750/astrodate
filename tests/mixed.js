/*global require, process, setTimeout */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx,
        test = required.test,
        zeroArray = [NaN, 1, 1, 0, 0, 0, 0, new Date().getTimezoneOffset() * 60];

    function single(count) {
        var fullArray = [],
            fullArrayString,
            year = utilx.getRandomInt(-9007199254740991, 9007199254740991).toString(),
            month = utilx.getRandomInt(1, 12),
            hour = utilx.getRandomInt(0, 24),
            fullArrayLength,
            astrodate,
            date;

        fullArray.push(year);
        fullArray.push(month);
        fullArray.push(utilx.getRandomInt(1, testsUtil.daysInGregorianMonth(year, month)));
        fullArray.push(hour);
        if (24 === hour) {
            fullArray.push(0);
            fullArray.push(0);
            fullArray.push(0);
        } else {
            fullArray.push(utilx.getRandomInt(0, 59));
            fullArray.push(utilx.getRandomInt(0, 59));
            fullArray.push(utilx.getRandomInt(0, 999));
        }

        fullArray.push(utilx.getRandomInt(-43200, 50400));
        fullArrayLength = fullArray.length;
        fullArrayString = utilx.arrayMap(fullArray, function (element) {
            return element.toString();
        });

        utilx.arrayForEach(fullArray, function (element, index) {
            /*jslint unparam: true */
            /* jshint unused: true */
            var end = index === 0 ? fullArrayLength : -index,
                slice = fullArray.slice(0, end).concat(zeroArray.slice(end)).toString().split(','),
                tObject = {
                    'year': slice[0],
                    'month': slice[1],
                    'day': slice[2],
                    'hour': slice[3],
                    'minute': slice[4],
                    'second': slice[5],
                    'millisecond': slice[6],
                    'offset': slice[7]
                },
                json = utilx.jsonStringify(tObject),
                numYear = +slice[0],
                isInLimits = numYear >= 0 && numYear < 10000 && 24 !== +slice[3],
                iterString = '(' + count + '->' + index + ')';

            switch (index) {
            case 7:
                astrodate = new AstroDate(fullArray[0], null);
                break;
            case 6:
                astrodate = new AstroDate(fullArray[0], fullArray[1]);
                break;
            case 5:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2]);
                break;
            case 4:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3]);
                break;
            case 3:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4]);
                break;
            case 2:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5]);
                break;
            case 1:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5], fullArray[6]);
                break;
            case 0:
                astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5], fullArray[6], fullArray[7]);
                break;
            }

            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'Number: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'Number: isValid');
            assertx.deepEqual(astrodate.array(), slice, iterString + 'Number: Arrays are the same');
            date = new Date(astrodate.toISOString()).getTime();
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'Number date: Dates are the same: ' + slice);
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'Number: JSON are the same: ');

            astrodate = new AstroDate().array(fullArray.slice(0, end));
            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'Number array: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'Number array: isValid');
            assertx.deepEqual(astrodate.array(), slice, slice, iterString + 'Number array: Arrays are the same');
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'Number array date: Dates are the same');
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'Number array: JSON are the same: ');

            astrodate = new AstroDate(astrodate);
            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'Number astrodate: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'Number astrodate: isValid');
            assertx.deepEqual(astrodate.array(), slice, slice, iterString + 'Number astrodate: Arrays are the same');
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'Number astrodate date: dates are the same');
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'Number astrodate: JSON are the same: ');

            switch (index) {
            case 7:
                astrodate = new AstroDate(fullArrayString[0], null);
                break;
            case 6:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1]);
                break;
            case 5:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2]);
                break;
            case 4:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3]);
                break;
            case 3:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4]);
                break;
            case 2:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5]);
                break;
            case 1:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5], fullArrayString[6]);
                break;
            case 0:
                astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5], fullArrayString[6], fullArrayString[7]);
                break;
            }

            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'String: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'String: isValid');
            assertx.deepEqual(astrodate.array(), slice, slice, iterString + 'String: Arrays are the same');
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'String date: dates are the same');
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'String: JSON are the same: ');

            astrodate = new AstroDate().array(fullArrayString.slice(0, end));
            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'String array: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'String array: isValid');
            assertx.deepEqual(astrodate.array(), slice, slice, iterString + 'String array: Arrays are the same');
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'String array date: dates are the same');
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'String array: JSON are the same: ');

            astrodate = astrodate.clone();
            assertx.ok(astrodate !== astrodate.clone, slice, iterString + 'String clone: is a clone');
            assertx.ok(AstroDate.isAstroDate(astrodate), slice, iterString + 'String clone: isAstrodate');
            assertx.ok(astrodate.isValid(), slice, iterString + 'String clone: isValid');
            assertx.deepEqual(astrodate.array(), slice, slice, iterString + 'String clone: Arrays are the same');
            if (isInLimits) {
                assertx.strictEqual(astrodate.getTime(), date.toString(), slice, iterString + 'String clone: dates are the same');
            } else {
                assertx.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'String clone: JSON are the same: ');

            astrodate = new AstroDate().json(json);
            assertx.deepEqual(utilx.jsonParse(astrodate.json()), tObject, slice, iterString + 'JSON parse: JSON are the same: ');
        });
    }

    test('Mixed methods.', function (t) {
        var delay = 100,
            cnt = 0,
            repeat;

        if (!process.env.ASTRODATE_REPEAT) {
            repeat = 1;
        } else {
            repeat = 50;
        }

        t.plan(1);

        function run() {
            if (utilx.lt(cnt, repeat)) {
                cnt += 1;
                setTimeout(function () {
                    try {
                        single(cnt);
                        run();
                    } catch (e) {
                        t.error(e, e.message, {
                            actual : e.actual,
                            expected : e.expected,
                            error: e
                        });
                    }
                }, delay);
            } else {
                t.pass(t.name);
            }
        }

        run();
    });
}());
