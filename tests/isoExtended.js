/*global require, process, setTimeout */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx,
        test = required.test,
        offset = new Date().getTimezoneOffset(),
        isOffsetPos = utilx.gt(offset, 0),
        offsetsign = isOffsetPos ? '-' : '+';

    function single() {
        var year = utilx.padLeadingChar(utilx.getRandomInt(0, 9007199254740991), '0', 6),
            month = utilx.padLeadingChar(utilx.getRandomInt(1, 12), '0', 2),
            day,
            hour = utilx.padLeadingChar(utilx.getRandomInt(0, 24), '0', 2),
            minute,
            second,
            millisecond,
            hourOffset,
            minOffset,
            tz,
            formats;

        if (utilx.getRandomInt(0, 1)) {
            year = '+' + year;
        } else {
            year = '-' + year;
        }

        day = utilx.padLeadingChar(utilx.getRandomInt(1, testsUtil.daysInGregorianMonth(+year, +month)), '0', 2);
        if (utilx.strictEqual(hour, '24')) {
            minute = '00';
            second = '00';
            millisecond = '000';
        } else {
            minute = utilx.padLeadingChar(utilx.getRandomInt(0, 59), '0', 2);
            second = utilx.padLeadingChar(utilx.getRandomInt(0, 59), '0', 2);
            millisecond = utilx.padLeadingChar(utilx.getRandomInt(0, 999), '0', 3);
        }

        if (utilx.notStrictEqual(offset, 0)) {
            hourOffset = isOffsetPos ? Math.floor(offset / 60) : Math.ceil(offset / 60);
            minOffset = offset - (hourOffset * 60);
            tz = offsetsign + utilx.padLeadingChar(Math.abs(hourOffset), '0', 2) + ':' + utilx.padLeadingChar(Math.abs(minOffset), '0', 2);
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

        utilx.arrayForEach(formats, function (format) {
            var a = format[0],
                b = format[1],
                withComma = a.replace('.', ',');

            assertx.strictEqual(new AstroDate(a).toISOString(), b, 'AstroDate should be able to parse ISO extended. Input: ' + a);
            assertx.strictEqual(new AstroDate(withComma).toISOString(), b, 'AstroDate should be able to parse ISO extende with commas. Input: ' + withComma);
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
