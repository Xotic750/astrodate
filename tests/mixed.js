/*global require, process */
(function () {
    'use strict';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var test = require('../scripts/whichTape'),
        AstroDate = require('../scripts/whichAstroDate'),
        Fire = require('../scripts/fire'),
        delay = 100,
        fireSingle = new Fire(),
        args = ['array/isAstroDate/isValid/from AstroDate'],
        repeat;

    if (!process.env.ASTRODATE_TAPE) {
        repeat = 1;
        args.push({
            compact: true,
            name: 'All tests'
        });
    } else {
        repeat = 25;
    }

    args.push(function (t) {
        var zeroArray = [NaN, 1, 1, 0, 0, 0, 0, new Date().getTimezoneOffset() * 60];

        function single(count) {
            var fullArray = [],
                fullArrayString = [],
                year = getRandomInt(-9007199254740991, 9007199254740991).toString(),
                month = getRandomInt(1, 12),
                hour = getRandomInt(0, 24),
                fullArrayLength,
                astrodate,
                index,
                end,
                slice,
                tObject,
                json,
                jsonA,
                prop,
                date;

            fullArray.push(year);
            fullArray.push(month);
            fullArray.push(getRandomInt(1, +new AstroDate(year, month).daysInMonth()));
            fullArray.push(hour);
            if (24 === hour) {
                fullArray.push(0);
                fullArray.push(0);
                fullArray.push(0);
            } else {
                fullArray.push(getRandomInt(0, 59));
                fullArray.push(getRandomInt(0, 59));
                fullArray.push(getRandomInt(0, 999));
            }

            fullArray.push(getRandomInt(-43200, 50400));
            fullArrayLength = fullArray.length;
            for (index = 0; index < fullArrayLength; index += 1) {
                fullArrayString[index] = fullArray[index].toString();
            }

            for (index = 0; index < fullArrayLength; index += 1) {
                end = index === 0 ? fullArrayLength : -index;
                slice = fullArray.slice(0, end).concat(zeroArray.slice(end)).toString().split(',');
                tObject = {
                    'year': slice[0],
                    'month': slice[1],
                    'day': slice[2],
                    'hour': slice[3],
                    'minute': slice[4],
                    'second': slice[5],
                    'millisecond': slice[6],
                    'offset': slice[7]
                };

                if (typeof JSON.stringify === 'function') {
                    json = JSON.stringify(tObject);
                } else {
                    jsonA = [];
                    for (prop in tObject) {
                        if (tObject.hasOwnProperty(prop)) {
                            jsonA.push('"' + prop + '":"' + tObject[prop] + '"');
                        }
                    }

                    json = '{' + jsonA.join(',') + '}';
                }

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

                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number: Arrays are the same');
                date = new Date(astrodate.toISOString()).getTime();
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number date: Dates are the same: ' + slice);
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')Number: JSON are the same: ');

                astrodate = new AstroDate().array(fullArray.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number array: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number array: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number array: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number array date: Dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')Number array: JSON are the same: ');

                astrodate = new AstroDate(astrodate);
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number astrodate: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number astrodate: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number astrodate: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number astrodate date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')Number astrodate: JSON are the same: ');

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

                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')String: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')String: JSON are the same: ');

                astrodate = new AstroDate().array(fullArrayString.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String array: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')String array: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String array: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String array date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')String array: JSON are the same: ');

                astrodate = astrodate.clone();
                t.ok(astrodate !== astrodate.clone, '(' + count + '/' + index + ')String clone: is a clone');
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String clone: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + index + ')String clone: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String clone: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 === +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String clone: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')String clone: JSON are the same: ');

                astrodate = new AstroDate().json(json);
                t.equal(astrodate.json(), json, '(' + count + '/' + index + ')JSON parse: JSON are the same: ');
            }
        }

        fireSingle.run(repeat, function (cnt, iters) {
            single.apply(null, arguments);
            if (cnt + 1 >= iters) {
                t.end();
            }
        }, delay);
    });

    test.apply(null, args);
}());
