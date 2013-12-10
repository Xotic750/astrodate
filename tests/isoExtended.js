/*global require, process */
(function () {
    'use strict';

    var test = require('../scripts/whichTape'),
        AstroDate = require('../scripts/whichAstroDate'),
        util = require('../scripts/util'),
        delay = 100,
        fireSingle = new util.Fire(),
        args = ['parsing iso extended'],
        offset = new Date().getTimezoneOffset(),
        repeat;

    if (!process.env.ASTRODATE_TAPE) {
        repeat = 1;
        args.push({
            compact: true,
            name: 'All tests'
        });
    } else {
        repeat = 50;
    }

    args.push(function (t) {
        function single() {
            var year = util.padLeadingZero(util.getRandomInt(0, 9999), 4),
                month = util.padLeadingZero(util.getRandomInt(1, 12), 2),
                day = util.padLeadingZero(util.getRandomInt(1, util.daysInGregorianMonth(+year, +month)), 2),
                hour = util.padLeadingZero(util.getRandomInt(0, 24), 2),
                index,
                withComma,
                minute,
                second,
                millisecond,
                hourOffset,
                minOffset,
                tz,
                formats;

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

            for (index = 0; index < formats.length; index += 1) {
                t.equal(new AstroDate(formats[index][0]).toISOString(), formats[index][1], '(' + index + ')AstroDate should be able to parse ISO extended ' + formats[index][0]);
                withComma = formats[index][0].replace('.', ',');
                t.equal(new AstroDate(withComma).toISOString(), formats[index][1], '(' + index + ')AstroDate should be able to parse ISO extended ' + withComma);
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
