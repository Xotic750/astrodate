/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx;

    describe('Mixed methods.', function () {
        it('should not throw an error in each case', function () {
            var zeroArray = [NaN, 1, 1, 0, 0, 0, 0, new Date().getTimezoneOffset() * 60],
                fullArray = [],
                fullArrayString,
                year = utilx.Number.randomInt(-9007199254740991, 9007199254740991).toString(),
                month = utilx.Number.randomInt(1, 12),
                hour = utilx.Number.randomInt(0, 24),
                fullArrayLength,
                astrodate,
                date;

            fullArray.push(year);
            fullArray.push(month);
            fullArray.push(utilx.Number.randomInt(1, testsUtil.daysInGregorianMonth(year, month)));
            fullArray.push(hour);
            if (utilx.Object.strictEqual(hour, 24)) {
                fullArray.push(0);
                fullArray.push(0);
                fullArray.push(0);
            } else {
                fullArray.push(utilx.Number.randomInt(0, 59));
                fullArray.push(utilx.Number.randomInt(0, 59));
                fullArray.push(utilx.Number.randomInt(0, 999));
            }

            fullArray.push(utilx.Number.randomInt(-43200, 50400));
            fullArrayLength = fullArray.length;
            fullArrayString = utilx.Array.map(fullArray, function (element) {
                return element.toString();
            });

            utilx.Array.forEach(fullArray, function (element, index) {
                /*jslint unparam: true */
                /* jshint unused: true */
                var end = utilx.Number.isZero(index) ? fullArrayLength : -index,
                    slice = utilx.String.split(fullArray.slice(0, end).concat(zeroArray.slice(end)).toString(), ','),
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
                    json = utilx.JSON.stringify(tObject),
                    numYear = +slice[0],
                    isInLimits = utilx.Number.inRange(numYear, 0, 9999) && utilx.notStrictEqual(24, utilx.toNumber(slice[3]));

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
                    astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3],
                                              fullArray[4]);
                    break;
                case 2:
                    astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3],
                                              fullArray[4], fullArray[5]);
                    break;
                case 1:
                    astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3],
                                              fullArray[4], fullArray[5], fullArray[6]);
                    break;
                case 0:
                    astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3],
                                              fullArray[4], fullArray[5], fullArray[6], fullArray[7]);
                    break;
                }

                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                date = new Date(astrodate.toISOString()).getTime();
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

                astrodate = new AstroDate().array(fullArray.slice(0, end));
                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

                astrodate = new AstroDate(astrodate);
                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

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
                    astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2],
                                              fullArrayString[3]);
                    break;
                case 3:
                    astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2],
                                              fullArrayString[3], fullArrayString[4]);
                    break;
                case 2:
                    astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2],
                                              fullArrayString[3], fullArrayString[4], fullArrayString[5]);
                    break;
                case 1:
                    astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2],
                                              fullArrayString[3], fullArrayString[4], fullArrayString[5],
                                              fullArrayString[6]);
                    break;
                case 0:
                    astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2],
                                              fullArrayString[3], fullArrayString[4], fullArrayString[5],
                                              fullArrayString[6], fullArrayString[7]);
                    break;
                }

                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

                astrodate = new AstroDate().array(fullArrayString.slice(0, end));
                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

                astrodate = astrodate.clone();
                assertx.notStrictEqual(astrodate, astrodate.clone());
                assertx.ok(AstroDate.isAstroDate(astrodate));
                assertx.ok(astrodate.isValid());
                assertx.deepEqual(astrodate.array(), slice);
                if (isInLimits) {
                    assertx.strictEqual(astrodate.getTime(), date.toString());
                } else {
                    assertx.ok(isNaN(date));
                }

                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);

                astrodate = new AstroDate().json(json);
                assertx.deepEqual(utilx.JSON.parse(astrodate.json()), tObject);
            });
        });
    });
}());
