/*global require, describe, expect, it */
(function() {
  'use strict';

  var AstroDate = require('../../scripts/loadModule.js')('../index.js');
  var testsUtil = require('../../scripts/testsUtil.js');
  var randomInt = testsUtil.randomInt;
  var daysInGregorianMonth = testsUtil.daysInGregorianMonth;

  describe('Mixed methods.', function() {
    it('should not throw an error in each case', function() {
      var zeroArray = [NaN, 1, 1, 0, 0, 0, 0, new Date().getTimezoneOffset() * 60];
      var fullArray = [];
      var fullArrayString;
      var year = randomInt(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER).toString();
      var month = randomInt(1, 12);
      var hour = randomInt(0, 24);
      var fullArrayLength;
      var astrodate;
      var date;

      fullArray.push(year);
      fullArray.push(month);
      fullArray.push(randomInt(1, daysInGregorianMonth(year, month)));
      fullArray.push(hour);
      if (hour === 24) {
        fullArray.push(0);
        fullArray.push(0);
        fullArray.push(0);
      } else {
        fullArray.push(randomInt(0, 59));
        fullArray.push(randomInt(0, 59));
        fullArray.push(randomInt(0, 999));
      }

      fullArray.push(randomInt(-43200, 50400));
      fullArrayLength = fullArray.length;
      fullArrayString = fullArray.map(function(element) {
        return element.toString();
      });

      fullArray.forEach(function(element, index) {
        var end = index === 0 ? fullArrayLength : -index;
        var slice = fullArray.slice(0, end).concat(zeroArray.slice(end)).toString().split(',');
        var tObject = {
          'year': slice[0],
          'month': slice[1],
          'day': slice[2],
          'hour': slice[3],
          'minute': slice[4],
          'second': slice[5],
          'millisecond': slice[6],
          'offset': slice[7]
        };
        var json = JSON.stringify(tObject);
        var numYear = +slice[0];
        var isInLimits = numYear >= 0 && numYear <= 9999 && Number(slice[3]) !== 24;

        switch (index) {
          case 7:
            astrodate = new AstroDate(fullArray[0], null);
            break;
          case 6:
            astrodate = new AstroDate(fullArray[0], fullArray[1]);
            break;
          case 5:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2]);
            break;
          case 4:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3]);
            break;
          case 3:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4]);
            break;
          case 2:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5]);
            break;
          case 1:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5], fullArray[6]);
            break;
          case 0:
            astrodate = new AstroDate(fullArray[0], fullArray[1], fullArray[2], fullArray[3], fullArray[4], fullArray[5], fullArray[6], fullArray[7]);
            break;
        }

        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        date = new Date(astrodate.toISOString()).getTime();
        if (isInLimits) {
          expect(astrodate.getTime()).toBe(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        astrodate = new AstroDate().array(fullArray.slice(0, end));
        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        if (isInLimits) {
          expect(astrodate.getTime()).toBe(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        astrodate = new AstroDate(astrodate);
        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        if (isInLimits) {
          expect(astrodate.getTime()).toBe(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        switch (index) {
          case 7:
            astrodate = new AstroDate(fullArrayString[0], null);
            break;
          case 6:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1]);
            break;
          case 5:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2]);
            break;
          case 4:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3]);
            break;
          case 3:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4]);
            break;
          case 2:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5]);
            break;
          case 1:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5], fullArrayString[6]);
            break;
          case 0:
            astrodate = new AstroDate(fullArrayString[0], fullArrayString[1], fullArrayString[2], fullArrayString[3], fullArrayString[4], fullArrayString[5], fullArrayString[6], fullArrayString[7]);
            break;
        }

        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        if (isInLimits) {
          expect(astrodate.getTime()).toBe(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        astrodate = new AstroDate().array(fullArrayString.slice(0, end));
        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        if (isInLimits) {
          expect(astrodate.getTime()).toBe(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        astrodate = astrodate.clone();
        expect(astrodate).not.toBe(astrodate.clone());
        expect(AstroDate.isAstroDate(astrodate)).toBe(true);
        expect(astrodate.isValid()).toBe(true);
        expect(astrodate.array()).toEqual(slice);
        if (isInLimits) {
          expect(astrodate.getTime()).toEqual(date.toString());
        } else {
          expect(isNaN(date)).toBe(true);
        }

        expect(JSON.parse(astrodate.json())).toEqual(tObject);

        astrodate = new AstroDate().json(json);
        expect(JSON.parse(astrodate.json())).toEqual(tObject);
      });
    });
  });
}());
