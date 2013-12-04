/*global require, process */
(function () {
    'use strict';

    var test = require('tape-compact'),
        AstroDate;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function padLeadingZero(number, size) {
        var numString = number.toString(),
            length = size - numString.length,
            i;

        for (i = 0; i < length; i += 1) {
            numString = '0' + numString;
        }

        return numString;
    }

    if (!process.env.ASTRODATE_COVERAGE) {
        AstroDate = require('../lib/astrodate');
    } else {
        AstroDate = require('../lib/astrodate.min');
    }

    test('parsing iso basic', {compact: true, name: 'All tests'}, function (t) {
        var repeat = 50,
            count,
            offset = new Date().getTimezoneOffset(),
            hourOffset,
            minOffset,
            tz,
            tz1,
            formats,
            index,
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            withComma;

        for (count = 0; count < repeat; count += 1) {
            year = padLeadingZero(getRandomInt(0, 9999), 4);
            month = padLeadingZero(getRandomInt(1, 12), 2);
            day = padLeadingZero(getRandomInt(1, +new AstroDate([year, month]).daysInMonth()), 2);
            hour = padLeadingZero(getRandomInt(0, 24), 2);
            if ('24' === hour) {
                minute = '00';
                second = '00';
                millisecond = '000';
            } else {
                minute = padLeadingZero(getRandomInt(0, 59), 2);
                second = padLeadingZero(getRandomInt(0, 59), 2);
                millisecond = padLeadingZero(getRandomInt(0, 999), 3);
            }

            if (0 !== offset) {
                hourOffset = (offset > 0) ? Math.floor(offset / 60) : Math.ceil(offset / 60);
                minOffset = offset - (hourOffset * 60);
                tz = (offset > 0 ? '-' : '+') + padLeadingZero(Math.abs(hourOffset), 2) + padLeadingZero(Math.abs(minOffset), 2);
                tz1 = (offset > 0 ? '-' : '+') + padLeadingZero(Math.abs(hourOffset), 2) + ':' + padLeadingZero(Math.abs(minOffset), 2);
            } else {
                tz = tz1 = 'Z';
            }

            formats = [
                [year + month + day, year + '-' + month + '-' + day + 'T00:00:00.000' + tz1],
                [year + month + day + 'T' + hour, year + '-' + month + '-' + day + 'T' + hour + ':00:00.000' + tz1],
                [year + month + day + 'T' + hour + minute, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [year + month + day + 'T' + hour + minute + second, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
                [year + month + day + 'T' + hour + minute + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [year + month + day + 'T' + hour + minute + second + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

                [year + month + day + 'T' + hour + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':00:00.000Z'],
                [year + month + day + 'T' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + 'T' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + 'T' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + 'T' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + 'T' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + 'T' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + 'T' + hour + minute + second + '.' + millisecond + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

                [year + month + day + ' ' + hour, year + '-' + month + '-' + day + 'T' + hour + ':00:00.000' + tz1],
                [year + month + day + ' ' + hour + minute, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [year + month + day + ' ' + hour + minute + second, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
                [year + month + day + ' ' + hour + minute + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [year + month + day + ' ' + hour + minute + second + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

                [year + month + day + ' ' + hour + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':00:00.000Z'],
                [year + month + day + ' ' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + ' ' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + ' ' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + ' ' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + ' ' + hour + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
                [year + month + day + ' ' + hour + minute + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [year + month + day + ' ' + hour + minute + second + '.' + millisecond + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
            ];


            for (index = 0; index < formats.length; index += 1) {
                t.equal(new AstroDate(formats[index][0]).toISOString(), formats[index][1], '(' + index + ')AstroDate should be able to parse ISO basic ' + formats[index][0]);
                withComma = formats[index][0].replace('.', ',');
                t.equal(new AstroDate(withComma).toISOString(), formats[index][1], '(' + index + ')AstroDate should be able to parse ISO basic ' + withComma);
            }
        }

        t.end();
    });
}());
