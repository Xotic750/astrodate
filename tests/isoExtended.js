/*global require, process , describe, it */
(function () {
    'use strict';

    var AstroDate = require('../scripts/whichAstroDate'),
        util = require('../scripts/util'),
        assert = require('chai').assert;


    function single() {
        var offset = new Date().getTimezoneOffset(),
            year = util.padLeadingZero(util.getRandomInt(0, 9999), 4),
            month = util.padLeadingZero(util.getRandomInt(1, 12), 2),
            day = util.padLeadingZero(util.getRandomInt(1, util.daysInGregorianMonth(+year, +month)), 2),
            hour = util.padLeadingZero(util.getRandomInt(0, 24), 2),
            minute,
            second,
            millisecond,
            hourOffset,
            minOffset,
            tz,
            formats,
            length,
            index,
            a,
            b,
            withComma;

        year = util.padLeadingZero(util.getRandomInt(0, 9007199254740991), 6);
        if (util.getRandomInt(0, 1)) {
            year = '+' + year;
        } else {
            year = '-' + year;
        }

        month = util.padLeadingZero(util.getRandomInt(1, 12), 2);
        day = util.padLeadingZero(util.getRandomInt(1, util.daysInGregorianMonth(+year, +month)), 2);
        hour = util.padLeadingZero(util.getRandomInt(0, 24), 2);
        if ('24' === hour) {
            minute = '00';
            second = '00';
            millisecond = '000';
        } else {
            minute = util.padLeadingZero(util.getRandomInt(0, 59), 2);
            second = util.padLeadingZero(util.getRandomInt(0, 59), 2);
            millisecond = util.padLeadingZero(util.getRandomInt(0, 999), 3);
        }

        if (0 !== offset) {
            hourOffset = (offset > 0) ? Math.floor(offset / 60) : Math.ceil(offset / 60);
            minOffset = offset - (hourOffset * 60);
            tz = (offset > 0 ? '-' : '+') + util.padLeadingZero(Math.abs(hourOffset), 2) + ':' + util.padLeadingZero(Math.abs(minOffset), 2);
        } else {
            tz = 'Z';
        }

        formats = [
            [year + '-' + month + '-' + day, year + '-' + month + '-' + day + 'T00:00:00.000' + tz],
            [year + '-' + month + '-' + day + 'T' + hour, year + '-' + month + '-' + day + 'T' + hour + ':00:00.000' + tz],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

            [year + '-' + month + '-' + day + 'T' + hour + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':00:00.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

            [year + '-' + month + '-' + day + ' ' + hour, year + '-' + month + '-' + day + 'T' + hour + ':00:00.000' + tz],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000' + tz],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + tz, year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

            [year + '-' + month + '-' + day + ' ' + hour + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':00:00.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':00.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
            [year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z', year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
        ];

        for (index = 0, length = formats.length; index < length; index += 1) {
            a = formats[index][0];
            b = formats[index][1];
            withComma = a.replace('.', ',');
            assert.equal(new AstroDate(a).toISOString(), b, 'AstroDate should be able to parse ISO extended. Input: ' + a);
            assert.equal(new AstroDate(withComma).toISOString(), b, 'AstroDate should be able to parse ISO extende with commas. Input: ' + withComma);
        }
    }

    describe('Parsing ISO8601 extended patterns.', function () {
        var repeat;

        if (!process.env.ASTRODATE_REPEAT) {
            repeat = 1;
        } else {
            repeat = 50;
        }

        it('', function (done) {
            var delay = 100;

            new util.Fire().run(repeat, single, delay, done);
        });
    });
}());
