/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        AstroDate = required.AstroDate,
        utilx = required.utilx,
        testsUtil = required.testsUtil,
        assertx = required.assertx;

    describe('Parsing ISO8601 basic patterns.', function () {
        it('should not throw an error in each case', function () {
            var offset = new Date().getTimezoneOffset(),
                isOffsetPos = utilx.Object.gt(offset, 0),
                offsetsign = isOffsetPos ? '-' : '+',
                year = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 9999), '0', 4),
                month = utilx.String.padLeadingChar(utilx.Number.randomInt(1, 12), '0', 2),
                day = utilx.String.padLeadingChar(utilx.Number.randomInt(1,
                        testsUtil.daysInGregorianMonth(utilx.Number.toNumber(year), utilx.Number.toNumber(month))),
                            '0', 2),

                hour = utilx.String.padLeadingChar(utilx.Number.randomInt(0, 24), '0', 2),
                minute,
                second,
                millisecond,
                hourOffset,
                minOffset,
                tz,
                tz1,
                fmtYMD,
                isoYMD,
                formats;

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

                tz = offsetsign + utilx.String.padLeadingChar(Math.abs(hourOffset), '0', 2) +
                        utilx.String.padLeadingChar(Math.abs(minOffset), '0', 2);

                tz1 = offsetsign + utilx.String.padLeadingChar(Math.abs(hourOffset), '0', 2) + ':' +
                        utilx.String.padLeadingChar(Math.abs(minOffset), '0', 2);
            } else {
                tz = tz1 = 'Z';
            }

            fmtYMD = year + month + day;
            isoYMD = year + '-' + month + '-' + day;
            formats = [
                [fmtYMD,
                    isoYMD + 'T00:00:00.000' + tz1],
                [fmtYMD + 'T' + hour,
                    isoYMD + 'T' + hour + ':00:00.000' + tz1],
                [fmtYMD + 'T' + hour + minute,
                    isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [fmtYMD + 'T' + hour + minute + second,
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
                [fmtYMD + 'T' + hour + minute + tz,
                    isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [fmtYMD + 'T' + hour + minute + second + tz,
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

                [fmtYMD + 'T' + hour + 'Z',
                    isoYMD + 'T' + hour + ':00:00.000Z'],
                [fmtYMD + 'T' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + 'T' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + 'T' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + 'T' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + 'T' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + 'T' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + 'T' + hour + minute + second + '.' + millisecond + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

                [fmtYMD + ' ' + hour,
                    isoYMD + 'T' + hour + ':00:00.000' + tz1],
                [fmtYMD + ' ' + hour + minute,
                    isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [fmtYMD + ' ' + hour + minute + second,
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
                [fmtYMD + ' ' + hour + minute + tz,
                    isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
                [fmtYMD + ' ' + hour + minute + second + tz,
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

                [fmtYMD + ' ' + hour + 'Z',
                    isoYMD + 'T' + hour + ':00:00.000Z'],
                [fmtYMD + ' ' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + ' ' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + ' ' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + ' ' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + ' ' + hour + minute + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
                [fmtYMD + ' ' + hour + minute + second + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
                [fmtYMD + ' ' + hour + minute + second + '.' + millisecond + 'Z',
                    isoYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
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
