/*global require, process, setTimeout */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        util = required.util,
        testsUtil = required.testsUtil,
        assert = required.assert,
        test = required.test;

    function single() {
        var offset = new Date().getTimezoneOffset(),
            isOffsetPos = util.gt(offset, 0),
            offsetsign = isOffsetPos ? '-' : '+',
            year = util.padLeadingChar(util.getRandomInt(0, 9999), '0', 4),
            month = util.padLeadingChar(util.getRandomInt(1, 12), '0', 2),
            day = util.padLeadingChar(util.getRandomInt(1, testsUtil.daysInGregorianMonth(+year, +month)), '0', 2),
            hour = util.padLeadingChar(util.getRandomInt(0, 24), '0', 2),
            minute,
            second,
            millisecond,
            hourOffset,
            minOffset,
            tz,
            formats;

        year = util.padLeadingChar(util.getRandomInt(0, 9007199254740991), '0', 6);
        if (util.getRandomInt(0, 1)) {
            year = '+' + year;
        } else {
            year = '-' + year;
        }

        month = util.padLeadingChar(util.getRandomInt(1, 12), '0', 2);
        day = util.padLeadingChar(util.getRandomInt(1, testsUtil.daysInGregorianMonth(+year, +month)), '0', 2);
        hour = util.padLeadingChar(util.getRandomInt(0, 24), '0', 2);
        if (util.strictEqual(hour, '24')) {
            minute = '00';
            second = '00';
            millisecond = '000';
        } else {
            minute = util.padLeadingChar(util.getRandomInt(0, 59), '0', 2);
            second = util.padLeadingChar(util.getRandomInt(0, 59), '0', 2);
            millisecond = util.padLeadingChar(util.getRandomInt(0, 999), '0', 3);
        }

        if (util.notStrictEqual(offset, 0)) {
            hourOffset = isOffsetPos ? Math.floor(offset / 60) : Math.ceil(offset / 60);
            minOffset = offset - (hourOffset * 60);
            tz = offsetsign + util.padLeadingChar(Math.abs(hourOffset), '0', 2) + ':' + util.padLeadingChar(Math.abs(minOffset), '0', 2);
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

        util.arrayForEach(formats, function (format) {
            var a = format[0],
                b = format[1],
                withComma = a.replace('.', ',');

            assert.strictEqual(new AstroDate(a).toISOString(), b, 'AstroDate should be able to parse ISO extended. Input: ' + a);
            assert.strictEqual(new AstroDate(withComma).toISOString(), b, 'AstroDate should be able to parse ISO extende with commas. Input: ' + withComma);
        });
    }

    test('Parsing ISO8601 extended patterns.', function (t) {
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
            if (util.lt(cnt, repeat)) {
                cnt += 1;
                setTimeout(function () {
                    try {
                        single();
                        run();
                    } catch (e) {
                        t.error(e, e.message, {
                            operator : e.name,
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
