/*global require, process */
(function () {
    'use strict';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var test = require('../scripts/whichTape.js'),
        AstroDate = require('../scripts/whichAstroDate'),
        Fire = require('../scripts/fire'),
        delay = 100,
        fireSingle = new Fire(),
        args = ['array/isAstroDate/isValid/from AstroDate'];

    if ('1' !== process.env.ASTRODATE_TAPE && '2' !== process.env.ASTRODATE_TAPE) {
        args.push({
            compact: true,
            name: 'All tests'
        });
    }

    args.push(function (t) {
        var repeat = 50,
            zeroArray = [NaN, 1, 1, 0, 0, 0, 0, 0];

        function single(count) {
            var fullArray = [],
                fullArrayString = [],
                year = getRandomInt(-9007199254740991, 9007199254740991).toString(),
                month = getRandomInt(1, 12),
                hour = getRandomInt(0, 24),
                loopNumArgs = new Fire(1),
                fullArrayLength,
                astrodate,
                index,
                end,
                slice,
                tObject,
                json,
                date,
                temp;

            fullArray.push(year);
            fullArray.push(month);
            fullArray.push(getRandomInt(1, +new AstroDate([year, month]).daysInMonth()));
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

            fullArray.push(getRandomInt(-1440, 1440));
            fullArrayLength = fullArray.length;
            for (index = 0; index < fullArrayLength; index += 1) {
                fullArrayString[index] = fullArray[index].toString();
            }

            function testArgs(idx) {
                end = -idx;
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

                json = JSON.stringify(tObject);
                astrodate = new AstroDate(fullArray.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')Number: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')Number: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + idx + ')Number: Arrays are the same');
                date = new Date(astrodate.toISOString()).getTime();
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')Number date: Dates are the same: ' + slice);
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')Number: JSON are the same: ');

                astrodate = new AstroDate().array(fullArray.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')Number array: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')Number array: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + idx + ')Number array: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')Number array date: Dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')Number array: JSON are the same: ');

                astrodate = new AstroDate(astrodate);
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')Number astrodate: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')Number astrodate: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + idx + ')Number astrodate: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')Number astrodate date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')Number astrodate: JSON are the same: ');

                astrodate = new AstroDate(fullArrayString.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')String: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')String: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + idx + ')String: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')String date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')String: JSON are the same: ');

                astrodate = new AstroDate().array(fullArrayString.slice(0, end));
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')String array: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')String array: isValid');
                t.deepEqual(astrodate.array(), slice, '(' + count + '/' + idx + ')String array: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')String array date: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')String array: JSON are the same: ');

                astrodate = astrodate.clone();
                t.ok(astrodate !== astrodate.clone, '(' + count + '/' + idx + ')String clone: is a clone');
                t.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + idx + ')String clone: isAstrodate');
                t.ok(astrodate.isValid(), '(' + count + '/' + idx + ')String clone: isValid');
                temp = astrodate.array();
                t.deepEqual(temp, slice, '(' + count + '/' + idx + ')String clone: Arrays are the same');
                if (+slice[0] >= 0 && +slice[0] < 10000 && 24 === +slice[3]) {
                    t.equal(astrodate.getTime(), date, '(' + count + '/' + idx + ')String clone: dates are the same');
                } else {
                    t.ok(isNaN(date), 'outside of Date capability: ' + slice);
                }

                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')String clone: JSON are the same: ');

                astrodate = new AstroDate().json(json);
                t.equal(astrodate.json(), json, '(' + count + '/' + idx + ')JSON parse: JSON are the same: ');
            }

            loopNumArgs.run(fullArrayLength, testArgs, delay);
        }

        fireSingle.run(repeat, single, delay);
        t.end();
    });

    test.apply(null, args);
}());
