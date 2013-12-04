/*global require, process */
(function () {
    'use strict';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var test = require('tape'),
        AstroDate;

    if (!process.env.ASTRODATE_COVERAGE) {
        AstroDate = require('../lib/astrodate');
    } else {
        AstroDate = require('../lib/astrodate.min');
    }

    test('array/isAstroDate/isValid/from AstroDate', {compact: true, name: 'All tests'}, function (t) {
        var repeat = 50,
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
            date,
            temp;

        for (count = 0; count < repeat; count += 1) {
            fullArray.length = 0;
            fullArrayString.length = 0;
            year = getRandomInt(-9007199254740991, 9007199254740991).toString();
            month = getRandomInt(1, 12);
            hour = getRandomInt(0, 24);
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

            for (index = 1; index < fullArrayLength; index += 1) {
                end = -index;
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

                astrodate = new AstroDate(fullArrayString.slice(0, end));
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
                temp = astrodate.array();
                t.deepEqual(temp, slice, '(' + count + '/' + index + ')String clone: Arrays are the same');
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

        t.end();
    });
}());
