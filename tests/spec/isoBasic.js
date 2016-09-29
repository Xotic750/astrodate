/*global require, describe, expect, it */
(function() {
  'use strict';

  var AstroDate = require('../../scripts/loadModule.js')('../index.js');
  var testsUtil = require('../../scripts/testsUtil.js');
  var randomInt = testsUtil.randomInt;
  var daysInGregorianMonth = testsUtil.daysInGregorianMonth;

  describe('Parsing ISO8601 basic patterns.', function() {
    it('should not throw an error in each case', function() {
      var offset = new Date().getTimezoneOffset();
      var isOffsetPos = offset > 0;
      var offsetsign = isOffsetPos ? '-' : '+';
      var year = randomInt(0, 9999).toString().padStart(4, '0');
      var month = randomInt(1, 12).toString().padStart(2, '0');
      var day = randomInt(1, daysInGregorianMonth(Number(year), Number(month))).toString().padStart(2, '0');
      var hour = randomInt(0, 24).toString().padStart(2, '0');
      var minute;
      var second;
      var millisecond;
      var hourOffset;
      var minOffset;
      var tz;
      var tz1;
      var fmtYMD;
      var isoYMD;
      var formats;

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
        tz = offsetsign + Math.abs(hourOffset).toString().padStart(2, '0') + Math.abs(minOffset).toString().padStart(2, '0');
        tz1 = offsetsign + Math.abs(hourOffset).toString().padStart(2,'0') + ':' + Math.abs(minOffset).toString().padStart(2, '0');
      } else {
        tz = tz1 = 'Z';
      }

      fmtYMD = year + month + day;
      isoYMD = year + '-' + month + '-' + day;
      formats = [
        [fmtYMD, isoYMD + 'T00:00:00.000' + tz1],
        [fmtYMD + 'T' + hour, isoYMD + 'T' + hour + ':00:00.000' + tz1],
        [fmtYMD + 'T' + hour + minute, isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
        [fmtYMD + 'T' + hour + minute + second, isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
        [fmtYMD + 'T' + hour + minute + tz, isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
        [fmtYMD + 'T' + hour + minute + second + tz, isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

        [fmtYMD + 'T' + hour + 'Z', isoYMD + 'T' + hour + ':00:00.000Z'],
        [fmtYMD + 'T' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + 'T' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + 'T' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + 'T' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + 'T' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + 'T' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + 'T' + hour + minute + second + '.' + millisecond + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z'],

        [fmtYMD + ' ' + hour, isoYMD + 'T' + hour + ':00:00.000' + tz1],
        [fmtYMD + ' ' + hour + minute, isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
        [fmtYMD + ' ' + hour + minute + second, isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],
        [fmtYMD + ' ' + hour + minute + tz, isoYMD + 'T' + hour + ':' + minute + ':00.000' + tz1],
        [fmtYMD + ' ' + hour + minute + second + tz, isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000' + tz1],

        [fmtYMD + ' ' + hour + 'Z', isoYMD + 'T' + hour + ':00:00.000Z'],
        [fmtYMD + ' ' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + ' ' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + ' ' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + ' ' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + ' ' + hour + minute + 'Z', isoYMD + 'T' + hour + ':' + minute + ':00.000Z'],
        [fmtYMD + ' ' + hour + minute + second + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.000Z'],
        [fmtYMD + ' ' + hour + minute + second + '.' + millisecond + 'Z', isoYMD + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + 'Z']
      ];

      formats.forEach(function(format) {
        var a = format[0];
        var b = format[1];
        var withComma = a.replace('.', ',');
        expect(new AstroDate(a).toISOString()).toBe(b, a);
        expect(new AstroDate(withComma).toISOString()).toBe(b, withComma);
      });
    });
  });
}());
