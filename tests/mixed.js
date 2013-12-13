/*global require, process , describe, it */
(function () {
    'use strict';

    var AstroDate = require('../scripts/whichAstroDate'),
        util = require('../scripts/util'),
        assert = require('assert');

    function single(count) {
        var fullArray = [],
            fullArrayString = [],
            year = util.getRandomInt(-9007199254740991, 9007199254740991).toString(),
            month = util.getRandomInt(1, 12),
            hour = util.getRandomInt(0, 24),
            zeroArray = [NaN, 1, 1, 0, 0, 0, 0, new Date().getTimezoneOffset() * 60],
            fullArrayLength,
            astrodate,
            index,
            end,
            slice,
            tObject,
            json,
            date;

        fullArray.push(year);
        fullArray.push(month);
        fullArray.push(util.getRandomInt(1, util.daysInGregorianMonth(year, month)));
        fullArray.push(hour);
        if (24 === hour) {
            fullArray.push(0);
            fullArray.push(0);
            fullArray.push(0);
        } else {
            fullArray.push(util.getRandomInt(0, 59));
            fullArray.push(util.getRandomInt(0, 59));
            fullArray.push(util.getRandomInt(0, 999));
        }

        fullArray.push(util.getRandomInt(-43200, 50400));
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

            json = util.jsonStringify(tObject);

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

            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number: Arrays are the same');
            date = new Date(astrodate.toISOString()).getTime();
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number date: Dates are the same: ' + slice);
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')Number: JSON are the same: ');

            astrodate = new AstroDate().array(fullArray.slice(0, end));
            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number array: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number array: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number array: Arrays are the same');
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number array date: Dates are the same');
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')Number array: JSON are the same: ');

            astrodate = new AstroDate(astrodate);
            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')Number astrodate: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')Number astrodate: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')Number astrodate: Arrays are the same');
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')Number astrodate date: dates are the same');
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')Number astrodate: JSON are the same: ');

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

            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')String: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String: Arrays are the same');
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String date: dates are the same');
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')String: JSON are the same: ');

            astrodate = new AstroDate().array(fullArrayString.slice(0, end));
            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String array: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')String array: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String array: Arrays are the same');
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 !== +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String array date: dates are the same');
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')String array: JSON are the same: ');

            astrodate = astrodate.clone();
            assert.ok(astrodate !== astrodate.clone, '(' + count + '/' + index + ')String clone: is a clone');
            assert.ok(AstroDate.isAstroDate(astrodate), '(' + count + '/' + index + ')String clone: isAstrodate');
            assert.ok(astrodate.isValid(), '(' + count + '/' + index + ')String clone: isValid');
            assert.deepEqual(astrodate.array(), slice, '(' + count + '/' + index + ')String clone: Arrays are the same');
            if (+slice[0] >= 0 && +slice[0] < 10000 && 24 === +slice[3]) {
                assert.equal(astrodate.getTime(), date, '(' + count + '/' + index + ')String clone: dates are the same');
            } else {
                assert.ok(isNaN(date), 'outside of Date capability: ' + slice);
            }

            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')String clone: JSON are the same: ');

            astrodate = new AstroDate().json(json);
            assert.deepEqual(util.jsonParse(astrodate.json()), tObject, '(' + count + '/' + index + ')JSON parse: JSON are the same: ');
        }
    }

    describe('Mixed methods.', function () {
        var repeat;

        if (!process.env.ASTRODATE_REPEAT) {
            repeat = 1;
        } else {
            repeat = 50;
        }

        it('', function (done) {
            this.timeout(60000);

            var delay = 100;

            new util.Fire().run(repeat, single, delay, done);
        });
    });
}());
