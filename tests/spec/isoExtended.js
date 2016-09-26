/*global require, describe, it */
(function() {
  'use strict';

  var AstroDate = require('../../scripts/loadModule.js')('../index.js');
  var testsUtil = require('../../scripts/testsUtil.js');
  var randomInt = testsUtil.randomInt;
  var daysInGregorianMonth = testsUtil.daysInGregorianMonth;

  describe('Parsing ISO8601 extended patterns.', function() {
    it('should not throw an error in each case', function() {
      var offset = new Date().getTimezoneOffset();
      var isOffsetPos = offset > 0;
      var offsetsign = isOffsetPos ? '-' : '+';
      var year = randomInt(0, Number.MAX_SAFE_INTEGER).toString().padStart(6, '0');
      var month = randomInt(1, 12).toString().padStart(2, '0');
      var day;
      var hour = randomInt(0, 24).toString().padStart(2, '0');
      var minute;
      var second;
      var millisecond;
      var hourOffset;
      var minOffset;
      var tz;
      var extYMD;
      var formats;

      if (randomInt(0, 1)) {
        year = '+' + year;
      } else {
        year = '-' + year;
      }

      day = randomInt(1, daysInGregorianMonth(Number(year), Number(month))).toString().padStart(2, '0');
      if (hour === '24') {
        minute = '00';
        second = '00';
        millisecond = '000';
      } else {
        minute = randomInt(0, 59).toString().padStart(2, '0');
        second = randomInt(0, 59).toString().padStart(2, '0');
        millisecond = randomInt(0, 999).toString().padStart(3, '0');
      }

      if (offset !== 0) {
        hourOffset = isOffsetPos ? Math.floor(offset / 60) : Math.ceil(offset / 60);
        minOffset = offset - (hourOffset * 60);
        tz = offsetsign + Math.abs(hourOffset).toString().padStart(2, '0') + ':' + Math.abs(minOffset).toString().padStart(2, '0');
      } else {
        tz = 'Z';
      }

      extYMD = year + '-' + month + '-' + day;
      formats = [
        [extYMD, extYMD + 'T00:00:00.000' + tz],
        [extYMD + 'T' + hour, extYMD + 'T' + hour + ':00:00.000' + tz],
        [extYMD + 'T' + hour + ':' + minute, extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
        [extYMD + 'T' + hour + ':' + minute + ':' + second, extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
        [extYMD + 'T' + hour + ':' + minute + tz, extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
        [extYMD + 'T' + hour + ':' + minute + ':' + second + tz, extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

        [extYMD + 'T' + hour + 'Z', extYMD + 'T' + hour + ':00:00.000Z'],
        [extYMD + 'T' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + 'T' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + 'T' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + 'T' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

        [extYMD + ' ' + hour, extYMD + 'T' + hour + ':00:00.000' + tz],
        [extYMD + ' ' + hour + ':' + minute, extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
        [extYMD + ' ' + hour + ':' + minute + ':' + second, extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],
        [extYMD + ' ' + hour + ':' + minute + tz, extYMD + 'T' + hour + ':' + minute + ':00.000' + tz],
        [extYMD + ' ' + hour + ':' + minute + ':' + second + tz, extYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz],

        [extYMD + ' ' + hour + 'Z', extYMD + 'T' + hour + ':00:00.000Z'],
        [extYMD + ' ' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + ' ' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + ' ' + hour + ':' + minute + 'Z', extYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [extYMD + ' ' + hour + ':' + minute + ':' + second + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [extYMD + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z', extYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
      ];

      formats.forEach(function(format) {
        var a = format[0];
        var b = format[1];
        var withComma = a.replace('.', ',');
        expect(new AstroDate(a).toISOString()).toBe(b);
        expect(new AstroDate(withComma).toISOString()).toBe(b);
      });
    });
  });
}());
