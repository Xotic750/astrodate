/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx;


    describe('Parsing ISO8601 extended patterns.', function () {
        it('should not throw an error in each case', function () {
            var offset = new Date().getTimezoneOffset(),
                isOffsetPos = utilx.Object.gt(offset, 0),
                offsetsign = isOffsetPos ? '-' : '+',
                year = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 9007199254740991), '0', 6),
                month = utilx.String.padLeadingChar(utilx.Number.randomInt(1, 12), '0', 2),
                day,
                hour = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 24), '0', 2),
                minute,
                second,
                millisecond,
                hourOffset,
                minOffset,
                tz,
                extYMD,
                formats;

            if (utilx.Number.randomInt(0, 1)) {
                year = '+' + year;
            } else {
                year = '-' + year;
            }

            day = utilx.String.padLeadingChar(utilx.Number.randomInt(1,
                    testsUtil.daysInGregorianMonth(utilx.Number.toNumber(year), utilx.Number.toNumber(month))), '0', 2);
            if (utilx.Object.strictEqual(hour, '24')) {
                minute = '00';
                second = '00';
                millisecond = '000';
            } else {
                minute = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 59), '0', 2);
                second = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 59), '0', 2);
                millisecond = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 999), '0', 3);
            }

            if (utilx.Object.notStrictEqual(offset, 0)) {
                hourOffset = isOffsetPos ? Math.floor(offset / 60) : Math.ceil(offset / 60);
                minOffset = offset - (hourOffset * 60);
                tz = offsetsign + utilx.String.padLeadingChar(Math.abs(hourOffset), '0', 2) + ':' +
                        utilx.String.padLeadingChar(Math.abs(minOffset), '0', 2);
            } else {
                tz = 'Z';
            }

            extYMD = year + '-' + month + '-' + day;
            formats = [
                [extYMD,
                    extYMD + 'T00:00:00.000' + tz],
                [extYMD + 'T' + hour,
                    extYMD + 'T' + hour + ':00:00.000' + tz],
                [extYMD + 'T' + hour + ':' + minute,
                    extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
                [extYMD + 'T' + hour + ':' + minute + ':' + second,
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
                [extYMD + 'T' + hour + ':' + minute + tz,
                    extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
                [extYMD + 'T' + hour + ':' + minute + ':' + second + tz,
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

                [extYMD + 'T' + hour + 'Z',
                    extYMD + 'T' + hour + ':00:00.000Z'],
                [extYMD + 'T' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + 'T' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + 'T' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

                [extYMD + ' ' + hour,
                    extYMD + 'T' + hour + ':00:00.000' + tz],
                [extYMD + ' ' + hour + ':' + minute,
                    extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
                [extYMD + ' ' + hour + ':' + minute + ':' + second,
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
                [extYMD + ' ' + hour + ':' + minute + tz,
                    extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
                [extYMD + ' ' + hour + ':' + minute + ':' + second + tz,
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

                [extYMD + ' ' + hour + 'Z',
                    extYMD + 'T' + hour + ':00:00.000Z'],
                [extYMD + ' ' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + ' ' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + ' ' + hour + ':' + minute + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [extYMD + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z',
                    extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
            ];

            utilx.Array.forEach(formats, function (format) {
                var a = format[0],
                    b = format[1],
                    withComma = a.replace('.', ',');

                assertx.strictEqual(new AstroDate(a).toISOString(), b);
                assertx.strictEqual(new AstroDate(withComma).toISOString(), b);
            });
        });
    });
}());
