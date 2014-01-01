/**
 * @file {@link @@HOMEPAGE AstroDate}. @@DESCRIPTION.
 * @version @@VERSION
 * @author @@AUTHORNAME <@@AUTHOREMAIL>
 * @copyright @@COPYRIGHT @@AUTHORNAME
 * @license {@link <@@LICLINK> @@LICENSE}
 * @module @@MODULE
 */

/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function (globalThis, privateUndefined) {
    /* jshint -W034 */
    'use strict';

    var publicAstroDate,
        canonicalizeLocaleRx,
        j2000 = {
            jdtt: '2451545.0',
            tt: '2000-01-01T12:00:00.000Z',
            tai: '2000-01-01T11:59:27.816Z',
            utc: '2000-01-01T11:58:55.816Z'
        };

    /**
     * Variables and utility functions used by the AstroDate class and requiring the BigNumber library.
     * @private
     * @function
     * @param {object} utilx
     * @param {class} BigNumber
     * @return {class} AsroDate
     */
    function defineAstroDate(utilx, BigNumber) {
        BigNumber.config({
            DECIMAL_PLACES: 9,
            ROUNDING_MODE: 0,
            EXPONENTIAL_AT: [-7, 20],
            RANGE: [-1000000000, 1000000000],
            ERRORS: true
        });

        /**
         * The BigNumber library namespace.
         * @ignore
         * @external BigNumber
         * @see {@link http://mikemcl.github.io/bignumber.js/}
         */
        utilx.objectDefineProperties(BigNumber.prototype, {
            /**
             * @memberOf external:BigNumber.prototype
             * @function
             * @this BigNumber
             * @return {BigNumber}
             */
            trunc: {
                value: function () {
                    return this.round(0, 1);
                }
            },

            /**
             * @memberOf external:BigNumber.prototype
             * @function
             * @this BigNumber
             * @return {boolean}
             */
            inRange: {
                value: function (min, max) {
                    return this.gte(min) && this.lte(max);
                }
            },

            /**
             * @memberOf external:BigNumber.prototype
             * @function
             * @this BigNumber
             * @return {BigNumber}
             */
            modf: {
                value: function () {
                    var bn = this;

                    if (bn.isFinite()) {
                        bn = bn.mod(bn.trunc());
                    } else {
                        bn = new BigNumber(NaN);
                    }

                    return bn;
                }
            },

            /**
             * @memberOf external:BigNumber.prototype
             * @function
             * @this BigNumber
             * @return {BigNumber}
             */
            difference: {
                value: function (value) {
                    var diff;

                    if (this.gt(value)) {
                        diff = this.minus(value);
                    } else {
                        diff = this.neg().plus(value);
                    }

                    return diff;
                }
            },

            /**
             * @memberOf external:BigNumber.prototype
             * @function
             * @this BigNumber
             * @return {string}
             */
            padLeadingZero: {
                value: function (size) {
                    return utilx.padLeadingChar(this.toString(), '0', size);
                }
            }
        });

        utilx.objectDefineProperties(BigNumber, {
            /**
             * @memberOf external:BigNumber
             * @function
             * @param {*} inputArg
             * @return {boolean}
             */
            isBigNumber: {
                value: function (inputArg) {
                    return utilx.isObject(inputArg) && utilx.objectInstanceOf(inputArg, BigNumber);
                }
            },

            /**
             * @memberOf external:BigNumber
             * @function
             * @param {(number|string)} inputArg
             * @return {BigNumber}
             */
            trunc: {
                value: function (number) {
                    return new BigNumber(number).trunc();
                }
            },

            /**
             * @memberOf external:BigNumber
             * @function
             * @param {(number|string)} inputArg
             * @return {BigNumber}
             */
            modf: {
                value: function (number) {
                    return new BigNumber(number).modf();
                }
            },

            /**
             * @memberOf external:BigNumber
             * @function
             * @param {(number|string)} number1
             * @param {(number|string)} number2
             * @return {BigNumber}
             *
             */
            difference: {
                value: function (number1, number2) {
                    return new BigNumber(number1).difference(number2);
                }
            },

            /**
             * @memberOf external:BigNumber
             * @function
             * @return {BigNumber}
             */
            zero: {
                value: function () {
                    return new BigNumber(0);
                }
            },

            /**
             * @memberOf external:BigNumber
             * @function
             * @return {BigNumber}
             */
            one: {
                value: function () {
                    return new BigNumber(1);
                }
            }
        });

        var VERSION = '@@VERSION',
            /**
             * For normalising options.
             * @private
             * @readonly
             * @type {array.<object>}
             */
            fullOptions = [{
                full: 'julian',
                alias: 'j'
            }, {
                full: 'offset',
                alias: 'o'
            }],
            /**
             * For normalising user input and looking up Date object methods.
             * @private
             * @readonly
             * @type {array.<object>}
             */
            fullKeys = [{
                full: 'year',
                alias: 'y',
                local: 'getFullYear'
            }, {
                full: 'month',
                alias: 'M',
                local: 'getMonth'
            }, {
                full: 'day',
                alias: 'd',
                local: 'getDate'
            }, {
                full: 'hour',
                alias: 'h',
                local: 'getHours'
            }, {
                full: 'minute',
                alias: 'm',
                local: 'getMinutes'
            }, {
                full: 'second',
                alias: 's',
                local: 'getSeconds'
            }, {
                full: 'millisecond',
                alias: 'ms',
                local: 'getMilliseconds'
            }, {
                full: 'offset',
                alias: 'z',
                local: 'getTimezoneOffset'
            }],
            /**
             * For looking up CLDR day translations.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
            /**
             * For looking up CLDR month translations.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            monthKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            /**
             * For looking up CLDR format translations.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            nameTypes = ['format', 'stand-alone'],
            /**
             * For looking up CLDR width translations.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            widthTypes = ['wide', 'abbreviated', 'narrow'],
            /**
             * For looking up CLDR date and time patterns.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            formatTypes = ['full', 'long', 'medium', 'short'],
            invalidISOCharsRx = new RegExp('[^\\d\\-+WT Z:,\\.]'),
            replaceTokenRX = new RegExp('([^\\\']+)|(\\\'[^\\\']+\\\')', 'g'),
            unmatchedTokenRx = new RegExp('[^a-z]', 'gi'),
            //j2000 = [2000, 1, 1, 11, 58, 55, 816],
            /**
             * For holding CLDR language specific data.
             * @private
             * @type {object}
             */
            languages = {},
            /**
             * For parsing CLDR date patterns.
             * @private
             * @readonly
             * @type {array.<string>}
             */
            datePatterns,
            /**
             * For parsing CLDR time patterns
             * @private
             * @readonly
             * @type {array.<string>}
             */
            timePatterns,
            /**
             * The current default language of the AstroDate constructor.
             * @private
             * @type {string}
             */
            defaultLanguage,
            /**
             * The current default locale of the AstroDate constructor.
             * @private
             * @type {string}
             */
            defaultLocale,
            //calendarTypes,
            leapSeconds,
            /**
             * For holding CLDR supplemental data.
             * @private
             * @type {object}
             */
            supplemental;

        utilx.deepFreeze(fullOptions);
        utilx.deepFreeze(fullKeys);
        utilx.deepFreeze(monthKeys);
        utilx.deepFreeze(dayKeys);
        utilx.deepFreeze(nameTypes);
        utilx.deepFreeze(widthTypes);
        utilx.deepFreeze(formatTypes);

        /*
        function InvalidError(message) {
            //this.name = "InvalidError";
            this.message = message || "";
        }

        InvalidError.prototype = new Error();

        function NotImplimentedError(message) {
            //this.name = "NotImplementedError";
            this.message = message || "";
        }

        NotImplimentedError.prototype = new Error();
        */

        function isGregorianLeapYear(struct) {
            return struct.year.mod(400).isZero() || (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
        }

        function isJulianLeapYear(struct) {
            return struct.year.mod(4).equals(0);
        }

        function daysInGregorianMonth(struct) {
            var days;

            if (struct.month.eq(2)) {
                days = new BigNumber(28);
                if (isGregorianLeapYear(struct)) {
                    days = days.plus(1);
                }
            } else {
                days = struct.month.minus(1).mod(7).mod(2).neg().plus(31);
            }

            return days;
        }

        function daysInJulianMonth(struct) {
            var days = new BigNumber(28);

            if (struct.month.eq(2) && isJulianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function daysInGregorianYear(struct) {
            var days = new BigNumber(365);

            if (isGregorianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function daysInJulianYear(struct) {
            var days = new BigNumber(365);

            if (isJulianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function inYearRange(year) {
            return year.isFinite();
        }

        function inMonthRange(month) {
            return month.inRange(1, 12);
        }

        function inDayRange(day, dim) {
            return day.inRange(1, dim);
        }

        function inHourRange(hour) {
            return hour.inRange(0, 24);
        }

        function inMinuteRange(minute, hour) {
            return (hour.equals(24) && minute.isZero()) || (!hour.equals(24) && minute.gte(0) && minute.lt(60));
        }

        function inSecondRange(second, struct) {
            var maxSecond = 60,
                leapSecond;

            if (struct.year.gte(1961) && struct.hour.equals(23) && struct.minute.equals(59)) {
                if (!utilx.isPlainObject(leapSeconds)) {
                    throw new Error('No leap second table!');
                }

                leapSecond = leapSeconds[struct.year.toString()];
                if (utilx.isPlainObject(leapSecond)) {
                    leapSecond = leapSecond[struct.month.toString()];
                    if (utilx.isPlainObject(leapSecond)) {
                        leapSecond = utilx.toNumber(leapSecond[struct.day.toString()]);
                        if (utilx.numberIsFinite(leapSecond)) {
                            maxSecond += leapSecond;
                        }
                    }
                }
            }

            return (struct.hour.equals(24) && second.isZero()) ||
                    (!struct.hour.equals(24) && second.gte(0) && second.lt(maxSecond));
        }

        function inMillisecondRange(millisecond, hour) {
            return (hour.equals(24) && millisecond.isZero()) ||
                    (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
        }

        function inOffsetRange(offset) {
            return offset.inRange(-43200, 50400);
        }

        /*
        function inWeekRange(week, year) {
            return offset.inRange(1, 53);
        }

        function inWeekDayRange(weekDay) {
            return weekDay.inRange(1, 7);
        }
        */

        function isValid(struct, julian) {
            var valid = false;

            if (utilx.isPlainObject(struct)) {
                valid = !utilx.arraySome(fullKeys, function (element) {
                    var bn = struct[element.full],
                        dim;

                    if (!BigNumber.isBigNumber(bn)) {
                        return true;
                    }

                    switch (element.full) {
                    case 'year':
                        if (!inYearRange(bn)) {
                            return true;
                        }

                        break;
                    case 'month':
                        if (!inMonthRange(bn)) {
                            return true;
                        }

                        break;
                    case 'day':
                        if (utilx.strictEqual(julian, true)) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (!inDayRange(bn, dim)) {
                            return true;
                        }

                        break;
                    case 'hour':
                        if (!inHourRange(bn)) {
                            return true;
                        }

                        break;
                    case 'minute':
                        if (!inMinuteRange(bn, struct.hour)) {
                            return true;
                        }

                        break;
                    case 'second':
                        if (!inSecondRange(bn, struct)) {
                            return true;
                        }

                        break;
                    case 'millisecond':
                        if (!inMillisecondRange(bn, struct.hour)) {
                            return true;
                        }

                        break;
                    case 'offset':
                        if (!inOffsetRange(bn)) {
                            return true;
                        }

                        break;
                        /*
                    case 'week':
                        if (!inWeekRange(bn)) {
                            return true;
                        }

                        break;
                    case 'weekDay':
                        if (!inWeekDayRange(bn)) {
                            return true;
                        }

                        break;
                    */
                    default:
                        throw new Error(element.full);
                    }

                    return false;
                });
            }

            return valid;
        }

        function dayOfGregorianYear(struct) {
            var k;

            if (isGregorianLeapYear(struct)) {
                k = 1;
            } else {
                k = 2;
            }

            return struct.month.times(275).div(9).floor().minus(struct.month.plus(9).div(12).floor().times(k))
                    .plus(struct.day).minus(30);
        }

        function dayOfJulianYear(struct) {
            var dayOfYear = struct.month.times(28).plus(struct.day);

            if (struct.month.gte(2) && isJulianLeapYear(struct)) {
                dayOfYear = dayOfYear.plus(1);
            }

            return dayOfYear;
        }

        function normaliseUnits(unitString) {
            var unit;

            if (utilx.isString(unitString)) {
                unitString = utilx.stringTrim(unitString).toLowerCase();
                if (utilx.gt(unitString.length, 2) && utilx.lastCharIs(unitString, 's')) {
                    unitString = unitString.slice(0, -1);
                }

                utilx.arraySome(fullKeys, function (element) {
                    var val;

                    if (utilx.strictEqual(unitString, element.alias) || utilx.strictEqual(unitString, element.full)) {
                        unit = element.full;
                        val = true;
                    } else {
                        val = false;
                    }

                    return val;
                });
            }

            return unit;
        }

        function normaliseOptions(options) {
            var normalised = {};

            if (utilx.isPlainObject(options)) {
                utilx.arrayForEach(utilx.objectKeys(options), function (element) {
                    element = element.toLowerCase();
                    utilx.arrayForEach(fullOptions, function (opt) {
                        if (utilx.strictEqual(element, opt.alias) || utilx.strictEqual(element, opt.full)) {
                            normalised[element] = opt.full;
                        }
                    });
                });
            }

            return normalised;
        }

        function timeTo(struct, unit) {
            var value;

            switch (normaliseUnits(unit)) {
            case 'day':
                value = struct.hour.div(24).plus(struct.minute.div(1440)).plus(struct.second.div(86400))
                            .plus(struct.millisecond.div(86400000));
                break;
            case 'hour':
                value = struct.hour.plus(struct.minute.div(60)).plus(struct.second.div(3600))
                            .plus(struct.millisecond.div(3600000));
                break;
            case 'minute':
                value = struct.hour.times(60).plus(struct.minute).plus(struct.second.div(60))
                            .plus(struct.millisecond.div(60000));
                break;
            case 'second':
                value = struct.hour.times(3600).plus(struct.minute.times(60)).plus(struct.second)
                            .plus(struct.millisecond.div(1000));
                break;
            case 'millisecond':
                value = struct.hour.times(3600000).plus(struct.minute.times(60000)).plus(struct.second.times(1000))
                            .plus(struct.millisecond);
                break;
            default:
                throw new Error(unit);
            }

            return value;
        }

        function gregorianToJd(struct) {
            var b = struct.year.minus(1),
                c = b.times(365),
                d = b.div(4).floor(),
                e = b.div(100).floor().neg(),
                f = b.div(400).floor(),
                g = struct.month.times(367).minus(362).div(12).floor(),
                h;

            if (struct.month.gt(2)) {
                if (isGregorianLeapYear(struct)) {
                    h = -1;
                } else {
                    h = -2;
                }
            } else {
                h = 0;
            }

            return new BigNumber(1721424.5).plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor())
                    .plus(timeTo(struct, 'day'));
        }

        function gregorianToJdn(struct) {
            return gregorianToJd(struct).round(1, 1);
        }

        /*
        function objectValues(inputArg) {
            return utilx.arrayMap(utilx.objectKeys(inputArg), function (key) {
                return inputArg[key];
            });
        }
        */

        function dayOfWeekNumber(struct) {
            var day = gregorianToJd(struct).plus(1.5).mod(7).floor();

            if (day.lt(0)) {
                day = day.plus(7);
            }

            return day;
        }

        function weekDayNumber(struct) {
            var bnWeekDay = dayOfWeekNumber(struct);

            if (bnWeekDay.isZero()) {
                bnWeekDay = new BigNumber(7);
            }

            return bnWeekDay;
        }

        function cldrDayKey(struct) {
            return dayKeys[utilx.toNumber(dayOfWeekNumber(struct))];
        }

        function fractionToTime(fraction, fractionIn, struct, julian) {
            var time = {},
                totalMs,
                days;

            fraction = new BigNumber(fraction);
            switch (fractionIn) {
            case 'year':
                if (utilx.strictEqual(julian, true)) {
                    days = daysInJulianYear(struct);
                } else {
                    days = daysInGregorianYear(struct);
                }

                totalMs = fraction.times(days.times(86400000));
                break;
            case 'month':
                if (utilx.strictEqual(julian, true)) {
                    days = daysInJulianMonth(struct);
                } else {
                    days = daysInGregorianMonth(struct);
                }

                totalMs = fraction.times(days.times(86400000));
                break;
            case 'day':
                totalMs = fraction.times(86400000);
                break;
            case 'hour':
                totalMs = fraction.times(3600000);
                break;
            case 'minute':
                totalMs = fraction.times(60000);
                break;
            case 'second':
                totalMs = fraction.times(1000);
                break;
            case 'millisecond':
                totalMs = fraction;
                break;
            default:
                throw new Error(fractionIn);
            }

            time.hour = totalMs.div(3600000).floor();
            time.minute = totalMs.minus(time.hour.times(3600000)).div(60000).floor();
            time.second = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).div(1000).floor();
            time.millisecond = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000))
                                    .minus(time.second.times(1000)).floor();

            return time;
        }

        function getTime(struct) {
            return gregorianToJd(struct).minus(2440587.5).times(86400000).floor();
        }

        // DeltaT
        //http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
        function deltaTime(struct, canonCorrection) {
            var y = struct.year.plus(struct.month.minus(0.5).div(12)),
                u,
                t,
                r;

            if (struct.year.inRange(-500, 2150)) {
                if (struct.year.lt(500)) {
                    u = y.div(100);
                    r = new BigNumber(10583.6).minus(u.times(1014.41)).plus(u.pow(2)
                            .times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4)
                            .times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6)
                            .times(0.0090316521));
                } else if (struct.year.lt(1600)) {
                    u = y.minus(1000).div(100);
                    r = new BigNumber(1574.2).minus(u.times(556.01)).plus(u.pow(2)
                            .times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4)
                            .times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6)
                            .times(0.0083572073));
                } else if (struct.year.lt(1700)) {
                    t = y.minus(1600);
                    r = new BigNumber(120).minus(t.times(0.9808)).minus(t.pow(2)
                            .times(0.01532)).plus(t.pow(3).div(7129));
                } else if (struct.year.lt(1800)) {
                    t = y.minus(1700);
                    r = new BigNumber(8.83).plus(t.times(0.1603)).minus(t.pow(2)
                            .times(0.0059285)).plus(t.pow(3).times(0.00013336)).minus(t.pow(4).div(1174000));
                } else if (struct.year.lt(1860)) {
                    t = y.minus(1800);
                    r = new BigNumber(13.72).minus(t.times(0.332447)).plus(t.pow(2)
                            .times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4)
                            .times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6)
                            .times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
                } else if (struct.year.lt(1900)) {
                    t = y.minus(1860);
                    r = new BigNumber(7.62).plus(t.times(0.5737)).minus(t.pow(2)
                            .times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4)
                            .times(0.0004473624)).plus(t.pow(5).div(233174));
                } else if (struct.year.lt(1920)) {
                    t = y.minus(1900);
                    r = new BigNumber(-2.79).plus(t.times(1.494119)).minus(t.pow(2)
                            .times(0.0598939)).plus(t.pow(3).times(0.0061966)).minus(t.pow(4).times(0.000197));
                } else if (struct.year.lt(1941)) {
                    t = y.minus(1920);
                    r = new BigNumber(21.20).plus(t.times(0.84493)).minus(t.pow(2)
                            .times(0.076100)).plus(t.pow(3).times(0.0020936));
                } else if (struct.year.lt(1961)) {
                    t = y.minus(1950);
                    r = new BigNumber(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233)).plus(t.pow(3).div(2547));
                } else if (struct.year.lt(1986)) {
                    t = y.minus(1975);
                    r = new BigNumber(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260)).minus(t.pow(3).div(718));
                } else if (struct.year.lt(2005)) {
                    t = y.minus(2000);
                    r = new BigNumber(63.86).plus(t.times(0.3345)).minus(t.pow(2).times(0.060374))
                        .plus(t.pow(3).times(0.0017275)).plus(t.pow(4).times(0.000651814))
                        .plus(t.pow(5).times(0.00002373599));
                } else if (struct.year.lt(2050)) {
                    t = y.minus(2000);
                    r = new BigNumber(62.92).plus(t.times(0.32217)).plus(t.pow(2).times(0.005589));
                } else {
                    r = new BigNumber(-20).plus(y.minus(1820).div(100).pow(2).times(32))
                        .minus(y.neg().plus(2150).times(0.5628));
                }
            } else {
                u = y.minus(1820).div(100);
                r = u.pow(2).times(32).plus(-20);
            }

            if (canonCorrection && !struct.year.inRange(1955, 2004)) {
                r.plus(y.minus(1955).pow(2).times(-0.000012932));
            }

            return r.times(1000).trunc();
        }

        function bnGetTimezoneOffset() {
            return new BigNumber(new Date().getTimezoneOffset() * 60);
        }

        /**
         * Changes a '-' or '+' character to a multipler value '-1' or '+1' string.
         * @private
         * @function
         * @param {string} sign
         * @return {string}
         */
        function toSignMultipler(sign) {
            return sign + '1';
        }

        /**
         * Converts offset hours, minutes and seconds to seconds.
         * @private
         * @function
         * @param {number|string} hour
         * @param {number|string} [minute]
         * @param {number|string} [second]
         * @return {BigNumber}
         */
        function offsetToSeconds(hour, minute, second) {
            return timeTo({
                hour: new BigNumber(hour),
                minute: new BigNumber(minute || 0),
                second: new BigNumber(second || 0),
                millisecond: BigNumber.zero()
            }, 'second');
        }

        function bnOffset(value) {
            var val,
                bn,
                rx,
                off;

            if (utilx.isNumber(value) || utilx.isString(value)) {
                val = utilx.toNumber(value);
                if (!utilx.numberIsFinite(val)) {
                    val = value.toString().toUpperCase();
                }
            } else {
                val = '';
            }

            if (utilx.isNumber(val)) {
                bn = new BigNumber(val);
            } else if (utilx.strictEqual(val, 'Z') || utilx.strictEqual(val, 'UTC') || utilx.strictEqual(val, 'GMT')) {
                bn = BigNumber.zero();
            } else {
                rx = /^([\-+])?(\d{1,2}):(\d{2})(?::(\d{2}))?$/;
                if (rx.test(val)) {
                    off = val.match(rx);
                    bn = offsetToSeconds(off[2], off[3], off[4]).times(toSignMultipler(off[1] || '+')).neg();
                } else {
                    bn = bnGetTimezoneOffset();
                }
            }

            return bn;
        }

        function arrayToStruct(arr, julian) {
            var struct = {};

            if (utilx.arrayIsArray(arr)) {
                utilx.arraySome(fullKeys, function (element, index) {
                    var value = arr[index],
                        bn,
                        dim;

                    if (utilx.isNumber(value) || utilx.isString(value) || (value && value instanceof BigNumber)) {
                        bn = new BigNumber(value);
                    } else {
                        bn = new BigNumber(NaN);
                    }

                    switch (element.full) {
                    case 'year':
                        if (!inYearRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'month':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.one();
                        }

                        if (!inMonthRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'day':
                        if (utilx.strictEqual(julian, true)) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.one();
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'hour':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'minute':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'second':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inSecondRange(bn, struct)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'millisecond':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMillisecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'offset':
                        bn = bnOffset(value);
                        if (!inOffsetRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    default:
                        throw new Error(element);
                    }

                    struct[element.full] = bn;

                    return false;
                });
            }

            return struct;
        }

        function structToArray(struct) {
            var arr;

            if (isValid(struct)) {
                arr = utilx.arrayMap(fullKeys, function (element) {
                    return struct[element.full];
                });
            } else {
                arr = [];
            }

            return arr;
        }

        function returnElementToString(element) {
            return element.toString();
        }

        function structToArrayOfString(struct) {
            return utilx.arrayMap(structToArray(struct), returnElementToString);
        }

        function objectToStruct(object, julian) {
            var struct = {};

            if (utilx.isPlainObject(object)) {
                utilx.arraySome(fullKeys, function (element) {
                    var value = object[element.alias] || object[element.full] || object[element.full + 's'],
                        bn,
                        dim;

                    if (utilx.isNumber(value) || utilx.isString(value) || (value && value instanceof BigNumber)) {
                        bn = new BigNumber(value);
                    } else {
                        bn = new BigNumber(NaN);
                    }

                    switch (element.full) {
                    case 'year':
                        if (!inYearRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'month':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.one();
                        }

                        if (!inMonthRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'day':
                        if (utilx.strictEqual(julian, true)) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.one();
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'hour':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'minute':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'second':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inSecondRange(bn, struct)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'millisecond':
                        if (utilx.isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMillisecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'offset':
                        bn = bnOffset(value);
                        if (!inOffsetRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    default:
                        throw new Error(element);
                    }

                    struct[element.full] = bn;

                    return false;
                });
            }

            return struct;
        }

        function structToObject(struct) {
            var newObject = {};

            if (utilx.isPlainObject(struct)) {
                utilx.arrayForEach(fullKeys, function (key) {
                    newObject[key.full] = struct[key.full].toString();
                });
            }

            return newObject;
        }

        function dateToStruct(date) {
            var struct = {};

            if (utilx.isDateValid(date)) {
                utilx.arrayForEach(fullKeys, function (element) {
                    var value = new BigNumber(date[element.local]());

                    if (utilx.strictEqual(element.full, 'month')) {
                        value = value.plus(1);
                    }

                    if (utilx.strictEqual(element.full, 'offset')) {
                        value = value.times(60);
                    }

                    struct[element.full] = value;
                });
            }

            return struct;
        }

        function julianToJd(struct) {
            var year = struct.year,
                month,
                a,
                b;

            month = struct.month;
            if (month.lte(2)) {
                year = year.minus(1);
                month = month.plus(12);
            }

            a = year.plus(4716).times(365.25).floor();
            b = month.plus(1).times(30.6001).floor();

            return a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, 'day'));
        }

        /*
        function julianToJdn(struct) {
            return julianToJd(struct).round(1, 1);
        }
        */

        function jdToGregorian(julianDate) {
            var struct = {},
                jd = new BigNumber(julianDate),
                a,
                b;

            if (jd.isFinite()) {
                jd = jd.plus(0.5);
                a = jd.plus(68569).floor();
                b = a.times(4).div(146097).floor();
                a = a.minus(b.times(146097).plus(3).div(4).floor());
                struct.year = a.plus(1).times(4000).div(1461001).floor();
                a = a.minus(struct.year.times(1461).div(4).floor()).plus(31);
                struct.month = a.times(80).div(2447).floor();
                struct.day = a.minus(struct.month.times(2447).div(80).floor());
                a = struct.month.div(11).floor();
                struct.month = struct.month.plus(2).minus(a.times(12));
                struct.year = b.minus(49).times(100).plus(struct.year).plus(a).floor();
                struct.offset = BigNumber.zero();
                utilx.extend(struct, fractionToTime(jd.modf().abs(), 'day'));
            }

            return struct;
        }

        function jdToJulian(julianDate) {
            var struct = {},
                jd = new BigNumber(julianDate),
                a,
                b,
                c,
                d,
                e,
                g;

            if (jd.isFinite()) {
                jd = jd.plus(0.5);
                a = jd.floor();
                b = a.plus(1524);
                c = b.minus(122.1).div(365.25).floor();
                d = c.times(365.25).floor();
                g = b.minus(d);
                e = g.div(30.6001).floor();

                struct.day = g.minus(e.times(30.6001).floor());
                if (e.lt(14)) {
                    struct.month = e.minus(1);
                } else {
                    struct.month = e.minus(13);
                }

                if (struct.month.gt(2)) {
                    struct.year = c.minus(4716);
                } else {
                    struct.year = c.minus(4715);
                }

                struct.offset = BigNumber.zero();
                utilx.extend(struct, fractionToTime(jd.modf().abs(), 'day'));
            }

            return struct;
        }

        function gregorianToMJD(struct) {
            return gregorianToJd(struct).minus(2400000.5);
        }

        function julianToMJD(struct) {
            return julianToJd(struct).minus(2400000.5);
        }

        /*
        function jdToMJD(jd) {
            return jd.minus(2400000.5);
        }
        */

        function gregorianToJulian(struct) {
            var newStruct;

            if (isValid(struct)) {
                newStruct = jdToJulian(gregorianToJd(struct));
            } else {
                newStruct = {};
            }

            return newStruct;
        }

        function julianToGregorian(struct) {
            var newStruct;

            if (isValid(struct)) {
                newStruct = jdToGregorian(julianToJd(struct));
            } else {
                newStruct = {};
            }

            return newStruct;
        }

        function toUT(struct) {
            return jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).div(86400000));
        }

        function toTT(struct) {
            var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).div(86400000));

            structTT.offset = offset;

            return structTT;
        }

        function addDT(struct) {
            var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));

            structTT.offset = offset;

            return structTT;
        }

        function subDT(struct) {
            var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));

            structTT.offset = offset;

            return structTT;
        }

        function toLocal(struct) {
            var timezoneOffset = bnGetTimezoneOffset(),
                structLocal = jdToGregorian(gregorianToJd(struct).times(86400000)
                                .plus(struct.offset.times(1000)).minus(timezoneOffset.times(1000)).div(86400000));

            structLocal.offset = timezoneOffset;

            return structLocal;
        }

        /*
        function toTAI(struct) {
            var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000)
                    .minus(deltaTime(struct)).minus(32184).div(86400000));

            structTT.offset = offset;

            return structTT;
        }

        function toGPS(struct) {
              var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000)
                    .minus(deltaTime(struct)).minus(51184).div(86400000));

            structTT.offset = offset;

            return structTT;
        }
        */

        /**
         * Converts a date struct to an ISO extended dateTime stamp.
         * This routine needs changing so that the type of ISO dateTime stamp can be choosen.
         * @private
         * @function
         * @param {object} struct
         * @param {number} userPadding
         * @return {string}
         */
        function toISOString(struct, userPadding) {
            var string,
                index,
                count,
                padding,
                last,
                value,
                key,
                number;

            number = utilx.toNumber(userPadding);
            if (utilx.lt(number, 5) || !utilx.numberIsFinite(number)) {
                number = 6;
            }

            index = 0;
            string = '';
            for (count = 0; utilx.lt(count, 3); count += 1) {
                if (utilx.isUndefined(struct[fullKeys[count].full])) {
                    index = 3;
                    break;
                }
            }

            for (last = fullKeys.length - 1; utilx.lt(index, last); index += 1) {
                key = fullKeys[index].full;
                value = struct[key];
                if (utilx.strictEqual(key, 'year')) {
                    if (value.lt(0)) {
                        string += '-';
                        padding = number;
                    } else if (value.gte(10000)) {
                        string += '+';
                        padding = number;
                    } else {
                        padding = 4;
                    }
                } else if (utilx.strictEqual(key, 'hour')) {
                    string += 'T';
                    padding = 2;
                } else if (utilx.strictEqual(key, 'millisecond')) {
                    padding = 3;
                } else {
                    padding = 2;
                }

                string += value.abs().padLeadingZero(padding);
                if (utilx.lt(index, 2)) {
                    string += '-';
                } else if (utilx.inRange(index, 3, 4)) {
                    string += ':';
                } else if (utilx.strictEqual(key, 'second')) {
                    string += '.';
                }
            }

            value = struct.offset;
            if (value.isZero()) {
                string += 'Z';
            } else {
                if (value.lte(0)) {
                    string += '+';
                } else {
                    string += '-';
                }

                value = fractionToTime(value.abs(), 'second');
                string += value.hour.padLeadingZero(2);
                string += ':';
                string += value.minute.padLeadingZero(2);
            }

            return string;
        }

        /**
         * Returns true if the ISO timeDate stamp has the correct character counts/looks like an ISO timeDate stamp.
         * @private
         * @function
         * @param {string} string
         * @return {boolean}
         */
        function isoHasValidCharacterCounts(string) {
            var val;

            if (!utilx.inRange(utilx.countCharacter(string, ' ') + utilx.countCharacter(string, 'T'), 0, 1)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, 'W'), 0, 1)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, 'Z'), 0, 1)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, '.') + utilx.countCharacter(string, ','), 0, 1)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, '+'), 0, 2)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, '-'), 0, 4)) {
                val = false;
            } else if (!utilx.inRange(utilx.countCharacter(string, ':'), 0, 4)) {
                val = false;
            } else if (utilx.lt(string.replace(/\D/g, '').length, 2)) {
                val = false;
            } else {
                val = true;
            }

            return val;
        }

        /**
         * Convert the ISO ordinal date to a date struct.
         * @private
         * @function
         * @param {(number|string|BigNumber)} year
         * @param {(number|string|BigNumber)} dayOfYear
         * @return {object}
         */
        function ordinalToCalendar(year, dayOfYear) {
            var struct = {
                year: new BigNumber(year),
                month: BigNumber.one(),
                day: BigNumber.one(),
                hour: BigNumber.zero(),
                minute: BigNumber.zero(),
                second: BigNumber.zero(),
                millisecond: BigNumber.zero()
            },
                daysInYear = daysInGregorianYear(struct),
                result;

            dayOfYear = new BigNumber(dayOfYear);
            if (dayOfYear.inRange(1, daysInYear)) {
                struct = jdToGregorian(gregorianToJd(struct).plus(dayOfYear).minus(1));
                result = {
                    sign: 1,
                    year: struct.year,
                    month: struct.month,
                    day: struct.day
                };
            }

            return result;
        }

        /**
         * Convert the ISO week date to a date struct.
         * @private
         * @function
         * @param {(number|string|BigNumber)} year
         * @param {(number|string|BigNumber)} week
         * @param {(number|string|BigNumber)} weekDay
         * @return {object}
         */
        function weekDateToCalendar(year, week, weekDay) {
            var struct = {
                year: new BigNumber(year),
                month: BigNumber.one(),
                day: new BigNumber(4),
                hour: BigNumber.zero(),
                minute: BigNumber.zero(),
                second: BigNumber.zero(),
                millisecond: BigNumber.zero()
            },
                weekDayJan4 = weekDayNumber(struct),
                dayOfYear;

            dayOfYear = new BigNumber(7).times(week).plus(weekDay).minus(weekDayJan4.plus(3));
            if (dayOfYear.lt(1)) {
                struct.year = struct.year.minus(1);
                dayOfYear = daysInGregorianYear(struct).plus(dayOfYear);
            } else if (dayOfYear.gt(daysInGregorianYear(struct))) {
                struct.year = struct.year.plus(1);
                dayOfYear = dayOfYear.minus(daysInGregorianYear(struct));
            }

            return ordinalToCalendar(struct.year, dayOfYear);
        }

        /**
         * Returns the ISO week date.
         * @private
         * @function
         * @param {object} struct
         * @return {object}
         */
        function calendarToWeekDate(struct) {
            var weekDay = weekDayNumber(struct),
                year = struct.year,
                month = struct.month,
                nearestThursday,
                val;

            nearestThursday = struct.day.plus(4).minus(weekDay);
            if (struct.month.equals(12) && nearestThursday.gt(31)) {
                val = {
                    year: year.plus(1),
                    week: BigNumber.one(),
                    weekDay: weekDay
                };
            } else {
                if (struct.month.equals(1) && nearestThursday.lt(1)) {
                    year = struct.year.minus(1);
                    month = new BigNumber(12);
                    nearestThursday = nearestThursday.plus(31);
                }

                val = {
                    year: year,
                    week: dayOfGregorianYear({
                        year: year,
                        month: month,
                        day: nearestThursday
                    }).div(7).floor().plus(1),
                    weekDay: weekDay
                };
            }

            return val;
        }

        /**
         * ISO says that the first week of a year is the first week containing
         * a Thursday. Extending that says that the first week of the month is
         * the first week containing a Thursday. ICU agrees.
         * @private
         * @function
         * @param {object} struct
         * @return {BigNumber}
         */
        function calendarToWeekOfMonth(struct) {
            return struct.day.plus(4).minus(weekDayNumber(struct)).plus(6).div(7).floor();
        }

        /**
         * Returns the ISO weekDay number.
         * @private
         * @function
         * @param {object} struct
         * @return {BigNumber}
         */
        function weekDayOfMonth(struct) {
            return struct.day.minus(1).div(7).plus(1).floor();
        }

        /**
         * Returns true if BigNumber is any number except if it is minus zero.
         * @private
         * @function
         * @param {BigNumber} bn
         * @param {string} sign
         * @return {boolean}
         */
        function isNotNegativeZero(bn, sign) {
            return utilx.strictEqual(sign, '+') || !bn.isZero() || (bn.isZero() && !utilx.strictEqual(sign, '-'));
        }

        /**
         * Covert the fractional part of hours to a time object.
         * @private
         * @function
         * @param {(number|string)} number
         * @param {(number|string|BigNumber)} offset
         * @param {(number|string)} hour
         * @return {object.BigNumber}
         */
        function hourFractionToTime(number, offset, hour) {
            var frac = fractionToTime('0.' + number, 'hour');

            frac.hour = new BigNumber(hour);
            frac.offset = new BigNumber(offset);

            return frac;
        }

        /**
         * Covert the fractional part of minutes to a time object.
         * @private
         * @function
         * @param {(number|string)} number
         * @param {(number|string|BigNumber)} offset
         * @param {(number|string)} hour
         * @param {(number|string)} [minute]
         * @param {(number|string)} [second]
         * @return {object.BigNumber}
         */
        function minuteFractionToTime(number, offset, hour, minute, second) {
            var frac = fractionToTime('0.' + number, 'minute');

            frac.hour = new BigNumber(hour);

            if (!utilx.isUndefined(minute)) {
                frac.minute = new BigNumber(minute);
            }

            if (!utilx.isUndefined(second)) {
                frac.second = new BigNumber(second);
            }

            frac.offset = new BigNumber(offset);

            return frac;
        }

        /**
         * Covert the fractional part of seconds to a time object.
         * @private
         * @function
         * @param {(number|string)} number
         * @param {(number|string|BigNumber)} offset
         * @param {(number|string)} hour
         * @param {(number|string)} minute
         * @param {(number|string)} second
         * @return {object.BigNumber}
         */
        function secondFractionToTime(number, offset, hour, minute, second) {
            var frac = fractionToTime('0.' + number, 'second');

            frac.hour = new BigNumber(hour);
            frac.minute = new BigNumber(minute);
            frac.second = new BigNumber(second);
            frac.offset = new BigNumber(offset);

            return frac;
        }

        /**
         * Splits the given string into its date and time string components.
         * @private
         * @function
         * @param {string} string
         * @return {object}
         */
        function isoSplitDateTime(string) {
            var dtObject = {
                date: '',
                time: ''
            },
                firstSplit = utilx.stringSplit(utilx.stringTrim(string), /[T ]/),
                splitLength = firstSplit.length,
                element;

            if (utilx.inRange(splitLength, 1, 2)) {
                if (utilx.strictEqual(splitLength, 1)) {
                    element = utilx.arrayFirst(firstSplit);
                    // we make a best guess
                    if (utilx.strictEqual(element.slice(-4), '-') || utilx.firstCharIs(element, '+') ||
                            utilx.firstCharIs(element, '-') || utilx.strictEqual(element.length, 2) ||
                            utilx.gte(utilx.countCharacter(element, '-'), 2) || utilx.stringContains(element, 'W')) {

                        // only ordinal dates have a "-" at -4
                        // only dates begin with "+" or "-"
                        // dates and times can be only 2 digits but will default to
                        // date unless preceeded with " " or "T"
                        // only dates have 2 or more "-"
                        // only dates have a week number "W"
                        dtObject.date = element;
                        dtObject.time = '00';
                    } else if (utilx.lastCharIs(element, 'Z') || utilx.stringContains(element, ':') ||
                               utilx.stringContains(element, '.') || utilx.stringContains(element, ',') ||
                               utilx.stringContains(element, '+') || utilx.strictEqual(element.slice(-3), '-')) {

                        // only times end with a "Z"
                        // only times contain a ":" or a "." or a ","
                        // only times contain a "+" that is not at the beginning
                        // only times have a "-" at -3
                        dtObject.date = '00';
                        dtObject.time = element;
                    } else {
                        // otherwise we guess it is a date
                        dtObject.date = element;
                        dtObject.time = '00';
                    }
                } else {
                    dtObject.date = utilx.arrayFirst(firstSplit) || '00';
                    dtObject.time = utilx.arrayLast(firstSplit);
                }
            }

            return dtObject;
        }

        function dateToObject(year, month, day) {
            return {
                year: new BigNumber(year),
                month: new BigNumber(month),
                day: new BigNumber(day)
            };
        }

        /**
         * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 date patterns.
         * @private
         * @readonly
         * @type {object.array.object}
         * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
         */
        datePatterns = {

            /**
             * The basic date patterns.
             * @private
             * @type {array.object}
             */
            basic: [{
                /**
                 * yy
                 * @private
                 */
                regex: /^(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(rxResult[1] + '00', 1, 1);
                }
            }, {
                /**
                 * yyyy
                 * @private
                 */
                regex: /^(\d{4})$/,
                func: function (rxResult) {
                    return dateToObject(rxResult[1], 1, 1);
                }
            }, {
                /**
                 * yyyyMMdd
                 * @private
                 */
                regex: /^(\d{4})(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * yyyyddd
                 * @private
                 */
                regex: /^(\d{4})(\d{3})$/,
                func: function (rxResult) {
                    return ordinalToCalendar(rxResult[1], rxResult[2]);
                }
            }, {
                /**
                 * yyyyWww
                 * @private
                 */
                regex: /^(\d{4})W(\d{2})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                }
            }, {
                /**
                 * yyyyWwwD
                 * @private
                 */
                regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                }
            }],

            /**
             * The extended date patterns.
             * @private
             * @type {array.object}
             */
            extended: [{
                // need to add tests for -0
                /**
                 * -+[..y]yyyyy-MM
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], 1);
                }
            }, {
                /**
                 * yyyy-MM
                 * @private
                 */
                regex: /^(\d{4})-(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(rxResult[1], rxResult[2], 1);
                }
            }, {
                /**
                 * yyyy-MM-dd
                 * @private
                 */
                regex: /^(\d{4})-(\d{2})-(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * -+[..y]yyyyy-MM-dd
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-(\d{2})-(\d{2})$/,
                func: function (rxResult) {
                    return dateToObject(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                                        rxResult[3], rxResult[4]);
                }
            }, {
                /**
                 * yyyy-DDD
                 * @private
                 */
                regex: /^(\d{4})-(\d{3})$/,
                func: function (rxResult) {
                    return ordinalToCalendar(rxResult[1], rxResult[2]);
                }
            }, {
                /**
                 * yyyy-Www
                 * @private
                 */
                regex: /^(\d{4})-W(\d{2})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                }
            }, {
                /**
                 * yyyy-Www-D
                 * @private
                 */
                regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * -+[..y]yyyy-DDD
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-(\d{3})$/,
                func: function (rxResult) {
                    return ordinalToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                                             rxResult[3]);
                }
            }, {
                /**
                 * -+[..y]yyyyy-Www
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-W(\d{2})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                                              rxResult[3], 1);
                }
            }, {
                /**
                 * -+[..y]yyyyy-Www-D
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-W(\d{2})-([1-7]{1})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                                              rxResult[3], rxResult[4]);
                }
            }]
        };

        /** Make datePatterns readonly */
        utilx.deepFreeze(datePatterns);

        function createTimeObject(hour, minute, second, offset, sign) {
            return {
                hour: new BigNumber(hour),
                minute: new BigNumber(minute),
                second: new BigNumber(second),
                millisecond: BigNumber.zero(),
                offset: new BigNumber(offset).times(toSignMultipler(sign || '-')).neg()
            };
        }

        /**
         * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 time patterns.
         * @private
         * @readonly
         * @type {object.array.object}
         * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
         */
        timePatterns = {

            /**
             * The basic time patterns.
             * @private
             * @type {array.object}
             */
            basic: [{
                /**
                 * HH
                 * @private
                 */
                regex: /^(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], 0, 0, bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HHMM
                 * @private
                 */
                regex: /^(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], 0, bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HHMMSS
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], rxResult[3], bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HHZ
                 * @private
                 */
                regex: /^(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], 0, 0, 0);
                }
            }, {
                /**
                 * HHMMZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], 0, 0);
                }
            }, {
                /**
                 * HHMMSSZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
                }
            }, {
                /**
                 * HH-+ZZ
                 * @private
                 */
                regex: /^(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[2],
                        offset = offsetToSeconds(rxResult[3]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], 0, 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMM-+ZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMMSS-+ZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[2],
                        offset = offsetToSeconds(rxResult[3], rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], 0, 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMM-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4], rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMMSS-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5], rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH.,[..f]f
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return hourFractionToTime(rxResult[2], bnGetTimezoneOffset(), rxResult[1]);
                }
            }, {
                /**
                 * HHMM.,[..f]f
                 * @private
                 */
                regex: /^(\d{2})(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return minuteFractionToTime(rxResult[3], bnGetTimezoneOffset(), rxResult[1], rxResult[2]);
                }
            }, {
                /**
                 * HHMMSS.,[..f]f
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(),
                                                rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * HH.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return hourFractionToTime(rxResult[2], 0, rxResult[1]);
                }
            }, {
                /**
                 * HHMM.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[2]);
                }
            }, {
                /**
                 * HHMMSS.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * HH.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMM.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2]);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMMSS.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[5],
                        offset = offsetToSeconds(rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2], rxResult[3]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH.,[..f]f-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4], rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMM.,[..f]f-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5], rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2]);
                    }

                    return val;
                }
            }, {
                /**
                 * HHMMSS.,[..f]f-+ZZZZ
                 * @private
                 */
                regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+])(\d{2})(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[5],
                        offset = offsetToSeconds(rxResult[6], rxResult[7]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2], rxResult[3]);
                    }

                    return val;
                }
            }],

            /**
             * The extended time patterns.
             * @private
             * @type {array.object}
             */
            extended: [{
                /**
                 * HH
                 * @private
                 */
                regex: /^(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], 0, 0, bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HH:MM
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], 0, bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HH:MM:SS
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], rxResult[3], bnGetTimezoneOffset());
                }
            }, {
                /**
                 * HHZ
                 * @private
                 */
                regex: /^(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], 0, 0, 0);
                }
            }, {
                /**
                 * HH:MMZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], 0, 0);
                }
            }, {
                /**
                 * HH:MM:SSZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})Z$/,
                func: function (rxResult) {
                    return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
                }
            }, {
                /**
                 * HH-+ZZ
                 * @private
                 */
                regex: /^(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[2],
                        offset = offsetToSeconds(rxResult[3]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], 0, 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM-+ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM:SS-+ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2})([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[2],
                        offset = offsetToSeconds(rxResult[3], rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], 0, 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4], rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], 0, offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM:SS-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5], rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset, sign);
                    }

                    return val;
                }
            }, {
                /**
                 * HH.,[..f]f
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return hourFractionToTime(rxResult[2], bnGetTimezoneOffset(), rxResult[1]);
                }
            }, {
                /**
                 * HH:MM.,[..f]f
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return minuteFractionToTime(rxResult[3], bnGetTimezoneOffset(), rxResult[1], rxResult[2]);
                }
            }, {
                /**
                 * HH:MM:SS.,[..f]f
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)$/,
                func: function (rxResult) {
                    return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(),
                                                rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * HH.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return hourFractionToTime(rxResult[2], 0, rxResult[1]);
                }
            }, {
                /**
                 * HH:MM.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[1]);
                }
            }, {
                /**
                 * HH:MM:SS.,[..f]fZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)Z$/,
                func: function (rxResult) {
                    return secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
                }
            }, {
                /**
                 * HH.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM:SS.,[..f]f-+ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[5],
                        offset = offsetToSeconds(rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2], rxResult[3]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH.,[..f]f-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[3],
                        offset = offsetToSeconds(rxResult[4], rxResult[5]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = hourFractionToTime(rxResult[2], offset.times(toSignMultipler(sign)).neg(), rxResult[1]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM.,[..f]f-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[4],
                        offset = offsetToSeconds(rxResult[5], rxResult[6]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2]);
                    }

                    return val;
                }
            }, {
                /**
                 * HH:MM:SS.,[..f]f-+ZZ:ZZ
                 * @private
                 */
                regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+])(\d{2}):(\d{2})$/,
                func: function (rxResult) {
                    var sign = rxResult[5],
                        offset = offsetToSeconds(rxResult[6], rxResult[7]),
                        val;

                    if (isNotNegativeZero(offset, sign)) {
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(),
                                                   rxResult[1], rxResult[2], rxResult[3]);
                    }

                    return val;
                }
            }]
        };

        /** Make timePatterns readonly */
        utilx.deepFreeze(timePatterns);

        /**
         * Takes a give string an parses it as a given ISO timestamp returning the date and time matches as an object.
         * Uses datePatterns and timePatterns for precision matching.
         * @private
         * @function
         * @param {string} isoString
         * @return {object}
         */
        function isoParse(isoString) {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var dtObject = {
                input: isoString
            },
                searchString;

            function searchPatterns(pattern) {
                var rxResult = pattern.regex.exec(searchString),
                    val = false,
                    result;

                if (!utilx.isNull(rxResult)) {
                    result = pattern.func(rxResult);
                    if (!utilx.isUndefined(result)) {
                        utilx.extend(dtObject, result);
                    }

                    val = true;
                }

                return val;
            }

            if (utilx.isString(isoString) && !utilx.isEmptyString(isoString) &&
                    !invalidISOCharsRx.test(isoString) && isoHasValidCharacterCounts(isoString)) {

                utilx.extend(dtObject, isoSplitDateTime(isoString));
                searchString = dtObject.date;
                if (!utilx.arraySome(datePatterns.basic, searchPatterns)) {
                    if (utilx.arraySome(datePatterns.extended, searchPatterns)) {
                        searchString = dtObject.time;
                        utilx.arraySome(timePatterns.extended, searchPatterns);
                    }
                } else {
                    searchString = dtObject.time;
                    utilx.arraySome(timePatterns.basic, searchPatterns);
                }
            }

            return dtObject;
        }

        /**
         * Converts the given Gregorian structure to an appropriate structure depending
         * on the AstroDate instance settings.
         * @private
         * @function
         * @param {AstroDate} thisAstroDate
         * @param {object} struct
         * @return {object}
         */
        function getCorrectStruct(thisAstroDate, struct) {
            if (thisAstroDate.isDT()) {
                if (thisAstroDate.isUT2TT()) {
                    struct = subDT(struct);
                } else {
                    struct = addDT(struct);
                }
            }

            /*
            if (thisAstroDate.isTT()) {
                struct = toTT(struct);
            }
            */

            if (thisAstroDate.isUT()) {
                struct = toUT(struct);
            } else if (thisAstroDate.isLocal()) {
                struct = toLocal(struct);
            }

            return struct;
        }

        /**
         * Left pads a number with '0's so that it is of the require length as given by size.
         * @private
         * @function
         * @param {number|string} num
         * @param {number} size
         * @return {string}
         */
        function cldrPadLeadingZero(num, size) {
            var strNum = utilx.anyToString(utilx.checkObjectCoercible(num)),
                firsrCharacter,
                val;

            if (utilx.isDigits(strNum) && new BigNumber(strNum).isFinite()) {
                firsrCharacter = utilx.firstChar(strNum);
                val = '';
                if (utilx.strictEqual(firsrCharacter, '-')) {
                    strNum = strNum.slice(1);
                    size -= 1;
                    val = firsrCharacter;
                }

                val += utilx.padLeadingChar(strNum, '0', size);
            } else {
                val = strNum;
            }

            return val;
        }

        /**
         * Replaces the given token pattern in the given pattern with the supplied string value.
         * @private
         * @function
         * @param {string} pattern
         * @param {string} token
         * @param {string} value
         * @return {string}
         */
        function replaceToken(pattern, token, value) {
            if (!utilx.isString(token) || utilx.isEmptyString(token)) {
                throw new Error();
            }

            var firstCharacter,
                count,
                copyMatch,
                noWrap;

            if ((/^\{\d\}$/).test(token)) {
                token = utilx.escapeRegex(token);
                copyMatch = token;
                noWrap = true;
            } else {
                firstCharacter = utilx.firstChar(token);
                if (!(/^\S\{\d+,\d*\}$/).test(token)) {
                    count = token.length;
                    if (!utilx.strictEqual(count, utilx.countCharacter(token, firstCharacter))) {
                        throw new Error(token);
                    }
                }

                copyMatch = '(?:^|[^' + firstCharacter + '])(' + token + ')(?:[^' + firstCharacter + ']|$)';
            }

            /**
             * Replaces tokens, handles padding choice and wraps replacements (if required) in sinqle quotes so
             * they are ignored in future.
             * @private
             * @function
             * @param {string} $0
             * @param {string} $1
             * @return {string}
             */
            function tokenReplacerPadWrap($0, $1) {
                var val;

                if ($1) {
                    val = cldrPadLeadingZero(value, $1.length);
                } else {
                    val = value;
                }

                if (!utilx.strictEqual(noWrap, true)) {
                    val = utilx.wrapInChar(val, '\'');
                }

                return $0.replace(new RegExp(token, 'g'), val);
            }

            /**
             * Returns strings of non-tokens untouched or calls the replacer on strings with tokens.
             * @private
             * @function
             * @param {string} $0
             * @param {string} $1
             * @param {string} $2
             * @return {string}
             */
            function tokenReplacer($0, $1, $2) {
                var val;

                if ($0) {
                    if ($1) {
                        val = $1.replace(new RegExp(copyMatch, 'g'), tokenReplacerPadWrap);
                    } else {
                        val = $2;
                    }
                }

                return val;
            }

            return pattern.replace(replaceTokenRX, tokenReplacer);
        }

        /**
         * Remove all non-token from a given pattern and returns a string with any tokens that remain.
         * @private
         * @function
         * @param {string} pattern
         * @return {string}
         */
        function remainingTokens(pattern) {
            function tokenReplacer($0, $1, $2) {
                var val;

                if ($0 && $1 && !$2) {
                    val = $1;
                } else {
                    val = '';
                }

                return val;
            }

            return pattern.replace(replaceTokenRX, tokenReplacer).replace(unmatchedTokenRx, '');
        }

        /**
         * Returns true if there are any remaining tokens in the given pattern.
         * @private
         * @function
         * @param {string} pattern
         * @return {boolean}
         */
        function hasRemainingTokens(pattern) {
            return !utilx.isEmptyString(remainingTokens(pattern));
        }

        /**
         * Remove all signle quote characters from a given dtring.
         * @private
         * @function
         * @param {string} string
         * @return {string}
         */
        function stripSingleQuotes(string) {
            return utilx.replaceAll(string, '\'', '');
        }

        /**
         * Replace all occurences of '-' with '_'.
         * @private
         * @function
         * @param {string} string
         * @return {string}
         */
        function minusToUnderscore(string) {
            return utilx.replaceAll(string, '-', '_');
        }

        /*
        calendarTypes = {
            julian: {
                abbreviated: 'OS',
                wide: 'Julian',
                narrow: 'O'
            },
            gregorian: {
                abbreviated: 'NS',
                wide: 'Gregorian',
                narrow: 'N'
            }
        };

        utilx.deepFreeze(calendarTypes);
        */

        /**
         * Split a string at '_'s.
         * @private
         * @function
         * @param {string} string
         * @return {array.<string>}
         */
        function splitUnderscore(string) {
            return string.split('_');
        }

        canonicalizeLocaleRx = new RegExp('^([a-z]{2,3}|[a-z]{2,3}[\\-_][a-z]{2}|' +
                                          '[a-z]{2,3}[\\-_][a-z]{4}|[a-z]{2,3}[\\-_][a-z]{4}[\\-_][a-z]{2})$', 'i');

        /**
         * Canonalizes a locale string.
         * @private
         * @function
         * @param {string} locale
         * @return {string}
         */
        function canonicalizeLocale(locale) {
            var val = [],
                firstSplit,
                firstSplitLength,
                element,
                elementLength,
                script,
                region;

            if (utilx.isString(locale) && canonicalizeLocaleRx.test(locale)) {
                firstSplit = splitUnderscore(minusToUnderscore(locale));
                firstSplitLength = firstSplit.length;
                val.push(firstSplit[0].toLowerCase());
                if (!utilx.strictEqual(firstSplitLength, 1)) {
                    element = firstSplit[1];
                    if (utilx.strictEqual(firstSplitLength, 2)) {
                        elementLength = element.length;
                        if (utilx.strictEqual(elementLength, 2)) {
                            region = element.toUpperCase();
                        } else {
                            script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                        }
                    } else {
                        script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                        region = firstSplit[2].toUpperCase();
                    }
                }

                if (!utilx.isUndefined(script) && !utilx.strictEqual(script, 'Zzzz')) {
                    val.push(script);
                }

                if (!utilx.isUndefined(region) && !utilx.strictEqual(region, 'ZZ')) {
                    val.push(region);
                }
            }

            return val.join('_');
        }

        /**
         * Perform a locale lookup from the CLDR likeySubtags given a full or patial locale string.
         * @private
         * @function
         * @param {string} locale
         * @return {string}
         */
        function lookupLocale(locale) {
            var canonicalizedLocale = canonicalizeLocale(locale),
                likelySubtags,
                lookup,
                firstSplit,
                lang,
                script,
                region,
                length,
                element,
                elementLength;

            if (!utilx.isEmptyString(canonicalizedLocale)) {
                likelySubtags = supplemental.likelySubtags;
                lookup = likelySubtags[canonicalizedLocale];
                if (utilx.isUndefined(lookup)) {
                    firstSplit = splitUnderscore(canonicalizedLocale);
                    length = firstSplit.length;
                    lang = utilx.arrayFirst(firstSplit);
                    if (utilx.strictEqual(length, 3)) {
                        region = utilx.arrayLast(firstSplit);
                        script = firstSplit[1];
                    } else if (utilx.strictEqual(length, 2)) {
                        element = utilx.arrayLast(firstSplit);
                        elementLength = element.length;
                        if (utilx.strictEqual(elementLength, 2)) {
                            region = element;
                        } else {
                            script = element;
                        }
                    }

                    if (utilx.isUndefined(lookup) && !utilx.isUndefined(region)) {
                        lookup = likelySubtags[[lang, region].join('_')];
                    }

                    if (utilx.isUndefined(lookup) && !utilx.isUndefined(script)) {
                        lookup = likelySubtags[[lang, script].join('_')];
                    }

                    if (utilx.isUndefined(lookup)) {
                        if (!utilx.isUndefined(languages[canonicalizedLocale])) {
                            lookup = canonicalizedLocale;
                        }
                    }

                    if (utilx.isUndefined(lookup)) {
                        lookup = likelySubtags[lang];
                    }

                    if (utilx.isUndefined(lookup) && !utilx.isUndefined(script)) {
                        lookup = likelySubtags[['und', script].join('_')];
                    }
                }
            }

            if (utilx.isUndefined(lookup)) {
                lookup = '';
            }

            return lookup;
        }

        /**
         * Finds a loaded language from the given locale string.
         * @private
         * @function
         * @param {string} locale
         * @return {string}
         */
        function languageLoaded(locale) {
            var loaded,
                lang,
                firstSplit;

            if (!utilx.isEmptyString(locale)) {
                lang = minusToUnderscore(locale);
                if (!utilx.isUndefined(languages[lang])) {
                    loaded = lang;
                } else {
                    firstSplit = splitUnderscore(lookupLocale(locale));
                    lang = [utilx.arrayFirst(firstSplit), utilx.arrayLast(firstSplit)].join('_');
                    if (!utilx.isUndefined(languages[lang])) {
                        loaded = lang;
                    } else {
                        lang = utilx.arrayFirst(firstSplit);
                        if (!utilx.isUndefined(languages[lang])) {
                            loaded = lang;
                        }
                    }
                }
            } else {
                loaded = '';
            }

            return loaded;
        }

        /**
         * Gets the region part of a locale string.
         * @private
         * @function
         * @param {string} locale
         * @return {string}
         */
        function getRegion(locale) {
            return utilx.arrayLast(splitUnderscore(locale));
        }

        /**
         * Takes a date pattern of tokens and replaces those tokens with the appropriate CLDR translations.
         * @private
         * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
         * @function
         * @param {object} struct
         * @param {string} pattern
         * @param {boolean} julian
         * @param {string} lang
         * @param {string} locale
         * @return {string}
         */
        // struct should not be UTC but UT
        function formatDate(struct, pattern, julian, lang, locale) {
            var gregorian = languages[lang].dates.calendars.gregorian,
                dateFormats = gregorian.dateFormats,
                eras = gregorian.eras,
                standAlone = utilx.arrayLast(nameTypes),
                months = gregorian.months,
                monthsFormat = months.format,
                monthsStandAlone = months[standAlone],
                days = gregorian.days,
                daysFormat = days.format,
                daysStandAlone = days[standAlone],
                shortStr = utilx.arrayLast(formatTypes),
                weekDate = calendarToWeekDate(struct), // should use alternative CLDR
                dayKey = cldrDayKey(struct),
                eraNum,
                eraNumStr,
                year,
                yearSign,
                month,
                dayOfYear,
                dayStr,
                week,
                dayOfWeekLocaleNumber,
                mjd;

            if (utilx.arrayContains(formatTypes, pattern)) {
                /*
                switch (pattern) {
                case 'long':
                    calendarPattern = '\'(\'CCCC\')\'';
                    break;
                case 'medium':
                    calendarPattern = '\'(\'C\')\'';
                    break;
                case 'short':
                    calendarPattern = '\'(\'CCCCCC\')\'';
                    break;
                default:
                    calendarPattern = '\'(\'CCCC\')\'';
                }
                */

                pattern = dateFormats[pattern];

            }

            /*
            if (julian) {
                calendarType = 'julian';
            } else {
                calendarType = 'gregorian';
            }
            */

            /*
            pattern = replaceToken(pattern, 'CCCCC', calendarTypes[calendarType].narrow);
            pattern = replaceToken(pattern, 'CCCC', calendarTypes[calendarType].wide);
            pattern = replaceToken(pattern, 'C{1,3}', calendarTypes[calendarType].abbreviated);
            */

            if (struct.year.lt(1)) {
                eraNum = 0;
            } else {
                eraNum = 1;
            }

            eraNumStr = eraNum.toString();
            pattern = replaceToken(pattern, 'GGGGG', eras.eraNarrow[eraNumStr]);
            pattern = replaceToken(pattern, 'GGGG', eras.eraNames[eraNumStr]);
            pattern = replaceToken(pattern, 'G{1,3}', eras.eraAbbr[eraNumStr]);

            year = struct.year.plus(eraNum - 1);
            if (year.lt(0)) {
                yearSign = '-';
            } else {
                yearSign = '';
            }

            pattern = replaceToken(pattern, 'y{3,}', year);
            pattern = replaceToken(pattern, 'yy', yearSign + year.toString().slice(-2));
            pattern = replaceToken(pattern, 'y', year);
            pattern = replaceToken(pattern, 'U{1,}', year);

            pattern = replaceToken(pattern, 'u{1,}', struct.year);

            pattern = replaceToken(pattern, 'Y{1,}', weekDate.year);
            week = weekDate.week.toString();
            pattern = replaceToken(pattern, 'w{1,2}', week);
            pattern = replaceToken(pattern, 'W', calendarToWeekOfMonth(struct));

            /*
            pattern = replaceToken(pattern, 'Q{1,2}', value);
            pattern = replaceToken(pattern, 'QQQ', value);
            pattern = replaceToken(pattern, 'QQQQ', value);
            pattern = replaceToken(pattern, 'q{1,2}', value);
            pattern = replaceToken(pattern, 'qqq', value);
            pattern = replaceToken(pattern, 'qqqq', value);
            */

            month = struct.month.toString();
            pattern = replaceToken(pattern, 'MMMMM', monthsFormat.narrow[month]);
            pattern = replaceToken(pattern, 'MMMM', monthsFormat.wide[month]);
            pattern = replaceToken(pattern, 'MMM', monthsFormat.abbreviated[month]);
            pattern = replaceToken(pattern, 'M{1,2}', month);
            pattern = replaceToken(pattern, 'LLLLL', monthsStandAlone.narrow[month]);
            pattern = replaceToken(pattern, 'LLLL', monthsStandAlone.wide[month]);
            pattern = replaceToken(pattern, 'LLL', monthsStandAlone.abbreviated[month]);
            pattern = replaceToken(pattern, 'L{1,2}', month);

            pattern = replaceToken(pattern, 'd{1,2}', struct.day);
            if (julian) {
                dayOfYear = dayOfJulianYear(gregorianToJulian(struct));
            } else {
                dayOfYear = dayOfGregorianYear(struct);
            }

            pattern = replaceToken(pattern, 'D{1,3}', dayOfYear);

            pattern = replaceToken(pattern, 'F', weekDayOfMonth(struct));
            if (julian) {
                mjd = julianToMJD(toUT(struct));
            } else {
                mjd = gregorianToMJD(toUT(struct));
            }

            pattern = replaceToken(pattern, 'g{1,}', mjd);

            dayStr = daysFormat[shortStr][dayKey];
            pattern = replaceToken(pattern, 'EEEEEE', dayStr);
            pattern = replaceToken(pattern, 'eeeeee', dayStr);
            dayStr = daysFormat.narrow[dayKey];
            pattern = replaceToken(pattern, 'EEEEE', dayStr);
            pattern = replaceToken(pattern, 'eeeee', dayStr);
            dayStr = daysFormat.wide[dayKey];
            pattern = replaceToken(pattern, 'EEEE', dayStr);
            pattern = replaceToken(pattern, 'eeee', dayStr);
            dayStr = daysFormat.abbreviated[dayKey];
            pattern = replaceToken(pattern, 'EEE', dayStr);
            pattern = replaceToken(pattern, 'eee', dayStr);

            pattern = replaceToken(pattern, 'E{1,2}', weekDate.weekDay);

            dayOfWeekLocaleNumber = utilx.mod(1 +
                (7 - utilx.arrayIndexOf(dayKeys, supplemental.weekData.firstDay[getRegion(locale)]) +
                 utilx.arrayIndexOf(dayKeys, dayKey)), 7);

            pattern = replaceToken(pattern, 'e{1,2}', dayOfWeekLocaleNumber);

            pattern = replaceToken(pattern, 'cccccc', daysStandAlone[shortStr][dayKey]);
            pattern = replaceToken(pattern, 'ccccc', daysStandAlone.narrow[dayKey]);
            pattern = replaceToken(pattern, 'cccc', daysStandAlone.wide[dayKey]);
            pattern = replaceToken(pattern, 'ccc', daysStandAlone.abbreviated[dayKey]);
            pattern = replaceToken(pattern, 'c{1,2}', dayOfWeekLocaleNumber);

            return pattern;
        }

        /**
         * Formats ISO timezone tokens with the appropriate CLDR translations.
         * @private
         * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
         * @function
         * @param {object} struct
         * @param {string} lang
         * @param {boolean} withZ
         * @param {string} format
         * @param {boolean} optional
         * @return {string}
         */
        // ISO 8601 time zone formats.
        function formatIsoTimeZone(struct, lang, withZ, format, optional) {
            var timeZoneNames = languages[lang].dates.timeZoneNames,
                offsetFormats = timeZoneNames.hourFormat.split(';'),
                offsetFormat,
                offset,
                pattern;

            if (withZ && struct.offset.isZero()) {
                pattern = 'Z';
            } else {
                offset = fractionToTime(struct.offset.abs(), 'second');
                if (struct.offset.lte(0)) {
                    offsetFormat = utilx.arrayFirst(offsetFormats);
                } else {
                    offsetFormat = utilx.arrayLast(offsetFormats);
                }

                offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
                if (utilx.strictEqual(format, 'basic')) {
                    if (utilx.strictEqual(optional, true) && offset.minute.isZero()) {
                        offsetFormat = utilx.arrayFirst(offsetFormat.split(':'));
                    } else {
                        offsetFormat = offsetFormat.replace(':', '');
                    }
                }

                pattern = replaceToken(offsetFormat, 'H{1,2}', offset.hour);
                pattern = replaceToken(pattern, 'm{1,2}', offset.minute);
                if (hasRemainingTokens(pattern)) {
                    throw new Error('formatIsoTimeZone has remaining tokens! ' + remainingTokens(pattern));
                }
            }

            return stripSingleQuotes(pattern);
        }

        /**
         * Formats ISO timezone tokens with the appropriate CLDR translations.
         * @private
         * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
         * @function
         * @param {object} struct
         * @param {string} lang
         * @param {boolean} withZ
         * @param {string} format
         * @param {boolean} optional
         * @return {string}
         */
        // ISO 8601 time zone formats.
        function formatIsoTimeZoneSeconds(struct, lang, withZ, format, optional) {
            var timeZoneNames = languages[lang].dates.timeZoneNames,
                offsetFormats = timeZoneNames.hourFormat.split(';'),
                offsetFormat,
                offset,
                pattern;

            if (withZ && struct.offset.isZero()) {
                pattern = 'Z';
            } else {
                offset = fractionToTime(struct.offset.abs(), 'second');
                if (struct.offset.lte(0)) {
                    offsetFormat = utilx.arrayFirst(offsetFormats);
                } else {
                    offsetFormat = utilx.arrayLast(offsetFormats);
                }

                offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:') + ':ss';
                if (utilx.strictEqual(format, 'basic')) {
                    if (utilx.strictEqual(optional, true) && offset.second.isZero()) {
                        offsetFormat = offsetFormat.split(':');
                        offsetFormat.pop();
                        offsetFormat = offsetFormat.join('');
                    } else {
                        offsetFormat = offsetFormat.replace(':', '');
                    }
                }

                pattern = replaceToken(offsetFormat, 'H{1,2}', offset.hour);
                pattern = replaceToken(pattern, 'm{1,2}', offset.minute);
                pattern = replaceToken(pattern, 's{1,2}', offset.second);
                if (hasRemainingTokens(pattern)) {
                    throw new Error('formatIsoTimeZone has remaining tokens! ' + remainingTokens(pattern));
                }
            }

            return stripSingleQuotes(pattern);
        }

        /**
         * Formats localized GMT timezone tokens with the appropriate CLDR translations.
         * @private
         * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
         * @function
         * @param {object} struct
         * @param {string} lang
         * @param {boolean} requestedShort
         * @return {string}
         */
        // The localized GMT format.
        function formatLocalisedGMT(struct, lang, requestedShort) {
            var timeZoneNames = languages[lang].dates.timeZoneNames,
                offsetFormats = timeZoneNames.hourFormat.split(';'),
                offsetFormat,
                offset,
                pattern;

            if (struct.offset.isZero()) {
                pattern = timeZoneNames.gmtZeroFormat;
            } else {
                offset = fractionToTime(struct.offset.abs(), 'second');
                if (struct.offset.lte(0)) {
                    offsetFormat = utilx.arrayFirst(offsetFormats);
                } else {
                    offsetFormat = utilx.arrayLast(offsetFormats);
                }

                if (utilx.strictEqual(requestedShort, true)) {
                    offsetFormat = offsetFormat.replace('HH', 'H');
                } else {
                    offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
                }

                if (requestedShort && offset.minute.isZero()) {
                    offsetFormat = utilx.arrayFirst(offsetFormat.split(':'));
                }

                pattern = replaceToken(offsetFormat, 'H{1,2}', offset.hour);
                pattern = replaceToken(pattern, 'm{1,2}', offset.minute);
                if (hasRemainingTokens(pattern)) {
                    throw new Error('formatLocalisedGMT has remaining tokens! ' + remainingTokens(pattern));
                }

                pattern = replaceToken(timeZoneNames.gmtFormat, '{0}', pattern);
            }

            return stripSingleQuotes(pattern);
        }

        /**
         * Takes a time pattern of tokens and replaces those tokens with the appropriate CLDR translations.
         * @private
         * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
         * @function
         * @param {object} struct
         * @param {string} pattern
         * @param {string} lang
         * @return {string}
         */
        // struct should not be UTC but UT
        function formatTime(struct, pattern, lang) {
            var language = languages[lang],
                gregorian = language.dates.calendars.gregorian,
                shortLocalisedGMT,
                longLocalisedGMT,
                isoBasic,
                dayPeriod,
                hour;

            if (utilx.arrayContains(formatTypes, pattern)) {
                pattern = gregorian.timeFormats[pattern];
            }

            if (struct.hour.inRange(12, 23)) {
                dayPeriod = 'pm';
            } else {
                dayPeriod = 'am';
            }

            pattern = replaceToken(pattern, 'a', gregorian.dayPeriods.format.abbreviated[dayPeriod]);
            hour = struct.hour.plus(11).mod(12).plus(1);
            pattern = replaceToken(pattern, 'h{1,2}', hour);
            pattern = replaceToken(pattern, 'H{1,2}', struct.hour);
            pattern = replaceToken(pattern, 'K{1,2}', hour.minus(1));

            // if hour is 24, needs to be handled in date too
            //temp = new AstroDate().jd(new AstroDate().jd());
            //pattern = replaceToken(pattern, 'k{1,2}', struct.hour.plus(1));

            //pattern = replaceToken(pattern, 'j{1,2}', struct.hour);

            pattern = replaceToken(pattern, 'm{1,2}', struct.minute);
            pattern = replaceToken(pattern, 's{1,2}', struct.second);
            // needs fixing
            pattern = replaceToken(pattern, 'S{1,}', struct.millisecond);

            //pattern = replaceToken(pattern, 'A{1,}', value);

            // The short localized GMT format.
            shortLocalisedGMT = formatLocalisedGMT(struct, lang, true);
            pattern = replaceToken(pattern, 'O', shortLocalisedGMT);
            pattern = replaceToken(pattern, 'z{1,3}', shortLocalisedGMT);
            // The long localized GMT format.
            longLocalisedGMT = formatLocalisedGMT(struct, lang, false);
            pattern = replaceToken(pattern, 'OOOO', longLocalisedGMT);
            pattern = replaceToken(pattern, 'zzzz', longLocalisedGMT);
            pattern = replaceToken(pattern, 'ZZZZ', longLocalisedGMT);
            pattern = replaceToken(pattern, 'vvvv', longLocalisedGMT);
            pattern = replaceToken(pattern, 'v', longLocalisedGMT);
            pattern = replaceToken(pattern, 'VVVV', longLocalisedGMT);
            // The ISO8601 basic format short
            pattern = replaceToken(pattern, 'X', formatIsoTimeZone(struct, lang, true, 'basic', true));
            // The ISO8601 basic format short no Z
            pattern = replaceToken(pattern, 'x', formatIsoTimeZone(struct, lang, false, 'basic', true));
            // The ISO8601 basic format
            isoBasic = formatIsoTimeZone(struct, lang, true, 'basic', false);
            pattern = replaceToken(pattern, 'Z{1,3}', isoBasic);
            pattern = replaceToken(pattern, 'XX', isoBasic);
            // The ISO8601 basic format no Z
            pattern = replaceToken(pattern, 'xx', formatIsoTimeZone(struct, lang, false, 'basic', false));
            //The ISO8601 extended format
            pattern = replaceToken(pattern, 'XXX', formatIsoTimeZone(struct, lang, true, 'extended', false));
            //The ISO8601 extended format no Z
            pattern = replaceToken(pattern, 'xxx', formatIsoTimeZone(struct, lang, false, 'extended', false));
            // The ISO8601 basic format optional seconds
            pattern = replaceToken(pattern, 'XXXX', formatIsoTimeZone(struct, lang, true, 'basic', true));
            // The ISO8601 basic format no Z optional seconds
            pattern = replaceToken(pattern, 'xxxx', formatIsoTimeZoneSeconds(struct, lang, false, 'basic', true));
            //The ISO8601 extended format optional seconds
            pattern = replaceToken(pattern, 'XXXXX', formatIsoTimeZoneSeconds(struct, lang, true, 'extended', true));
            //The ISO8601 extended format no Z optional seconds
            pattern = replaceToken(pattern, 'xxxxx', formatIsoTimeZoneSeconds(struct, lang, false, 'extended', true));
            //The ISO8601 extended format optional seconds
            pattern = replaceToken(pattern, 'ZZZZZ', formatIsoTimeZoneSeconds(struct, lang, true, 'extended', true));

            return pattern;
        }

        /**
         * @constructor AstroDate
         * @classdesc This is what becomes exported or made global.
         * @this AstroDate
         * @param {...*} [arguments]
         * @return {AstroDate}
         *
         * @desc Used to create a new instance of a date.
         * <pre><code>
         * new AstroDate();
         * new AstroDate(value);
         * new AstroDate(dateString);
         * new AstroDate(dateObject);
         * new AstroDate(astroDateObject);
         * new AstroDate(year[, month, day, hour, minute, second, millisecond, offset][, options]);
         * </code></pre>
         * <ul>
         * <li><b>value</b><br>
         * Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).</li>
         * <li><b>dateString</b><br>
         * String value representing a date. The string must be in the format of ISO8601.</li>
         * <li><b>dateObject</b><br>
         * A Javascript Date object.</li>
         * <li><b>astroDateObject</b><br>
         * An AstroDate object.</li>
         * <li><b>year</b><br>
         * Integer or string value representing the year. The year must always be provided in full
         * (e.g. 98 is treated as 98, not 1998).</li>
         * <li><b>month</b><br>
         * Integer or string value representing the month, beginning with 0 for January to 11 for December.</li>
         * <li><b>day</b><br>
         * Integer or string value representing the day of the month.</li>
         * <li><b>hour</b><br>
         * Integer or string value representing the hour of the day.</li>
         * <li><b>minute</b><br>
         * Integer or string value representing the minute segment of a time.</li>
         * <li><b>second</b><br>
         * Integer or string value representing the second segment of a time.</li>
         * <li><b>millisecond</b><br>
         * Integer or string value representing the millisecond segment of a time.</li>
         * <li><b>offset</b><br>
         * Integer or string value representing the offset from UT in seconds.</li>
         * <li><b>options</b><br>
         * null or object Must be used when only year is specified. Allows date to be specified in
         * Julian Calender (more/changes coming). </li>
         * </ul>
         *
         * @example <caption>Example usage of constructor.</caption>
         *
         * // If no arguments are provided, the constructor creates an AstroDate object for the
         * // current date and time according to system settings.
         * new AstroDate();
         *
         * // Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch).
         * // -9,007,199,254,740,992 to 9,007,199,254,740,992 or NaN
         * new AstroDate(819170640000); //1995-12-17T03:24:00.000Z
         * new AstroDate(NaN); //Invalid Date
         *
         * // String value representing a date. The string must be in the format of ISO8601.
         * new AstroDate('1995-12-17T03:24:00.000Z');
         *
         * // A Javascript Date object.
         * new AstroDate(new Date(1995, 12, 17, 3, 24, 0, 0));
         *
         * // An AstroDate object.
         * new AstroDate(new AstroDate(1995, 12, 17, 3, 24, 0, 0, 3600)); // offset is same as '-01:00:00'
         *
         * // Using an arguments list.
         * new AstroDate(1995, null);
         * new AstroDate(1995, {offset: -3600}); // offset is same as '+01:00:00'
         * new AstroDate(55, {julian: true, offset: -3600});
         * // year 55 of the Julian Calendar, offset is same as '+01:00:00'
         * new AstroDate(1995, 12, 17, 3, 24, 0, 0, -3600); // offset is same as '+01:00:00'
         * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '-5400'); // offset is same as '+01:30:00'
         * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '+01:30:00'); // offset is same as -5400
         * new AstroDate('-10', '5', '7', {julian: true}); // year -10 of the Julian Calendar
         */
        function AstroDate() {
            var args = arguments,
                input = arguments,
                argsLength = args.length,
                isJulian = false,
                isUT = false,
                isTT = false,
                isLocal = false,
                error = null,
                delta = 0,
                /**
                 * The current language of the AstroDate instance.
                 * @private
                 * @type {string}
                 */
                currentLanguage = defaultLanguage,
                /**
                 * The current locale of the AstroDate instance.
                 * @private
                 * @type {string}
                 */
                currentLocale = defaultLocale,
                struct,
                arg,
                length,
                opts;

            utilx.objectDefineProperties(this, {
                /**
                 * Gets the value of a specific internal property.
                 * @readonly
                 * @protected
                 * @memberOf AstroDate
                 * @instance
                 * @function
                 * @param {*} key
                 * @return {*}
                 */
                getter: {
                    value: function (key) {
                        var got;

                        if (utilx.isUndefined(key)) {
                            got = utilx.extend({}, struct);
                        } else if (utilx.isString(key)) {
                            switch (key) {
                            case 'struct':
                                got = utilx.extend({}, struct);
                                break;
                            case 'isJulian':
                                got = isJulian;
                                break;
                            case 'isUT':
                                got = isUT;
                                break;
                            case 'isTT':
                                got = isTT;
                                break;
                            case 'DT':
                                got = delta;
                                break;
                            case 'isLocal':
                                got = isLocal;
                                break;
                            case 'args':
                                got = args;
                                break;
                            case 'input':
                                got = input;
                                break;
                            case 'error':
                                got = error;
                                break;
                            case 'lang':
                                got = currentLanguage;
                                break;
                            case 'locale':
                                got = currentLocale;
                                break;
                            default:
                                throw new SyntaxError(key);
                            }
                        } else {
                            throw new TypeError(key);
                        }

                        return got;
                    }
                },

                /**
                 * Sets the value of a specific internal property.
                 * @protected
                 * @instance
                 * @memberOf AstroDate
                 * @function
                 * @param {*} key
                 * @param {*} value
                 * @return {AstroDate}
                 * @this AstroDate
                 */
                setter: {
                    value: function (key, value) {
                        var unit = normaliseUnits(key),
                            valid = false,
                            bn,
                            dim;

                        if (unit) {
                            bn = new BigNumber(value);
                            switch (unit) {
                            case 'year':
                                valid = inYearRange(bn);
                                break;
                            case 'month':
                                valid = inMonthRange(bn);
                                break;
                            case 'day':
                                if (utilx.strictEqual(isJulian, true)) {
                                    dim = daysInJulianMonth(struct);
                                } else {
                                    dim = daysInGregorianMonth(struct);
                                }

                                valid = inDayRange(bn, dim);
                                break;
                            case 'hour':
                                valid = inHourRange(bn);
                                break;
                            case 'minute':
                                valid = inMinuteRange(bn, struct.hour);
                                break;
                            case 'second':
                                valid = inSecondRange(bn, struct);
                                break;
                            case 'millisecond':
                                valid = inMillisecondRange(bn, struct.hour);
                                break;
                            case 'offset':
                                valid = inOffsetRange(bn);
                                break;
                            default:
                                throw new Error(unit);
                            }

                            if (valid) {
                                struct[unit] = bn;
                            } else {
                                struct = {};
                            }
                        } else if (utilx.arrayIsArray(key)) {
                            struct = arrayToStruct(key, false);
                        } else if (AstroDate.isAstroDate(key)) {
                            struct = key.getter();
                            isJulian = key.isJulian();
                        } else if (utilx.isDate(key)) {
                            struct = dateToStruct(key);
                        } else if (utilx.isString(key)) {
                            switch (key) {
                            case 'input':
                                input = value;
                                break;
                            case 'error':
                                error = value;
                                break;
                            case 'struct':
                                if (isValid(value)) {
                                    struct = utilx.extend({}, value);
                                } else {
                                    struct = {};
                                }

                                break;
                            case 'isJulian':
                                isJulian = utilx.toBoolean(value);
                                break;
                            case 'isUT':
                                isUT = utilx.toBoolean(value);
                                break;
                            case 'isTT':
                                isTT = utilx.toBoolean(value);
                                break;
                            case 'DT':
                                delta = utilx.mathSign(value) || 0;
                                break;
                            case 'isLocal':
                                isLocal = utilx.toBoolean(value);
                                break;
                            case 'lang':
                                if (utilx.isString(value) && !utilx.isEmptyString(value)) {
                                    currentLanguage = value;
                                } else {
                                    currentLanguage = defaultLanguage;
                                    currentLocale = defaultLocale;
                                }

                                break;
                            case 'locale':
                                if (utilx.isString(value) && !utilx.isEmptyString(value)) {
                                    currentLocale = lookupLocale(value);
                                } else {
                                    currentLanguage = defaultLanguage;
                                    currentLocale = defaultLocale;
                                }

                                break;
                            default:
                                struct = isoParse(key);
                            }
                        } else {
                            throw new SyntaxError(key);
                        }

                        return this;
                    }
                }
            });

            length = argsLength;
            if (utilx.strictEqual(length, 0)) {
                struct = dateToStruct(new Date());
            } else if (utilx.strictEqual(length, 1)) {
                arg = utilx.arrayFirst(args);
                if (AstroDate.isAstroDate(arg)) {
                    isJulian = arg.getter('isJulian');
                    struct = utilx.extend({}, arg.getter());
                } else if (utilx.isDate(arg)) {
                    struct = dateToStruct(arg);
                } else if (utilx.isNumber(arg)) {
                    struct = dateToStruct(new Date(arg));
                } else if (utilx.isString(arg)) {
                    struct = isoParse(arg);
                } else {
                    throw new TypeError(arg);
                }
            } else {
                arg = utilx.arrayLast(args);
                opts = normaliseOptions(arg);
                if (utilx.isNull(arg) || utilx.isPlainObject(arg)) {
                    if (opts.Julian) {
                        isJulian = true;
                    }

                    struct = arrayToStruct(utilx.argumentsSlice(args, 0, -1), isJulian);
                    if (isJulian) {
                        struct = julianToGregorian(struct);
                    }
                } else {
                    struct = arrayToStruct(utilx.argumentsSlice(args, 0, args.length), isJulian);
                }

                if (utilx.isUndefined(args[8]) && !utilx.isUndefined(opts.offset)) {
                    struct.offset = bnOffset(opts.offset);
                }
            }

            if (!isValid(struct)) {
                struct = {};
            }
        }

        utilx.objectDefineProperties(AstroDate.prototype, {
            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            julian: {
                value: function () {
                    return this.setter('isJulian', true);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            gregorian: {
                value: function () {
                    return this.setter('isJulian', false);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {AstroDate}
             * @this AstroDate
             */
            local: {
                value: function () {
                    this.setter('isLocal', true);
                    this.setter('isUT', false);

                    return this;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {AstroDate}
             * @this AstroDate
             */
            UT: {
                value: function () {
                    this.setter('isLocal', false);
                    this.setter('isUT', true);

                    return this;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            TT: {
                value: function () {
                    return this.setter('isTT', true);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            UT2TT: {
                value: function () {
                    return this.setter('DT', -1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            TT2UT: {
                value: function () {
                    return this.setter('DT', 1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            civil: {
                value: function () {
                    return this.setter('isTT', false);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {AstroDate}
             * @this AstroDate
             */
            raw: {
                value: function () {
                    this.setter('isLocal', false);
                    this.setter('isUT', false);
                    this.setter('isTT', false);
                    this.setter('DT', 0);

                    return this;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isJulian: {
                value: function () {
                    return this.getter('isJulian');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isGregorian: {
                value: function () {
                    return !this.getter('isJulian');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isUT: {
                value: function () {
                    return this.getter('isUT');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isTT: {
                value: function () {
                    return this.getter('isTT');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isUT2TT: {
                value: function () {
                    return utilx.strictEqual(this.getter('DT'), -1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isTT2UT: {
                value: function () {
                    return utilx.strictEqual(this.getter('DT'), 1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isDT: {
                value: function () {
                    return !utilx.strictEqual(this.getter('DT'), 0);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isCivil: {
                value: function () {
                    return !this.getter('isTT');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isLocal: {
                value: function () {
                    return this.getter('isLocal');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isRaw: {
                value: function () {
                    return !this.getter('isUT') && !this.getter('isTT') && this.getter('isLocal');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {string}
             * @this AstroDate
             */
            currentLang: {
                value: function () {
                    return this.getter('lang');
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            isWeekDay: {
                value: function () {
                    var val;

                    if (this.isValid()) {
                        val = weekDayNumber(getCorrectStruct(this, this.getter())).inRange(1, 5);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            isWeekend: {
                value: function () {
                    var val;

                    if (this.isValid()) {
                        val = weekDayNumber(getCorrectStruct(this, this.getter())).inRange(6, 7);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            zone: {
                value: function () {
                    var val;

                    if (this.isValid()) {
                        val = getCorrectStruct(this, this.getter()).offset.toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isValid: {
                value: function () {
                    return isValid(this.getter());
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} isoString
             * @this AstroDate
             */
            parse: {
                value: function (isoString) {
                    var val;

                    if (utilx.isString(isoString)) {
                        val = this.setter('struct', isoParse(isoString));
                    } else {
                        throw new TypeError(isoString);
                    }

                    return val;
                }
            },

            /**
             * @memberOf AstroDate.prototype
             * @function
             * @param {string} pattern
             * @this AstroDate
             *
             * @desc
             * <p>Date and time formats are specified by <em>date and time pattern</em> strings.
             * Within date and time pattern strings, all unquoted ASCII letters [A-Za-z] are reserved as
             * pattern letters representing calendar fields.
             * <code>astrodate</code> supports the date and time formatting algorithm and pattern letters defined by
             * <a href="http://www.unicode.org/reports/tr35/">UTS#35 Unicode Locale Data Markup Language (LDML)</a>.
             * The following pattern letters are currently available:</p>
             * <table border="1">
             * <thead>
             * <tr>
             * <th>Field</th>
             * <th style="text-align: center">Sym.</th>
             * <th style="text-align: center">No.</th>
             * <th>Example</th>
             * <th>Description</th>
             * </tr>
             * </thead>
             * <tbody>
             * <tr>
             * <th rowspan="3">era</th>
             * <td style="text-align: center" rowspan="3">G</td>
             * <td style="text-align: center">1..3</td>
             * <td>AD</td>
             * <td rowspan="3">Era - Replaced with the Era string for the current date.
             * One to three letters for the abbreviated form,
             * four letters for the long form, five for the narrow form.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Anno Domini</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>A</td>
             * </tr>
             * <tr>
             * <th rowspan="6">year</th>
             * <td style="text-align: center">y</td>
             * <td style="text-align: center">1..n</td>
             * <td>1996</td>
             * <td>
             * Year. Normally the length specifies the padding,
             * but for two letters it also specifies the maximum length.
             * Example:
             * <div align="center">
             * <center>
             * <table border="1" cellpadding="2" cellspacing="0">
             * <tbody>
             * <tr>
             * <th>Year</th>
             * <th style="text-align: right">y</th>
             * <th style="text-align: right">yy</th>
             * <th style="text-align: right">yyy</th>
             * <th style="text-align: right">yyyy</th>
             * <th style="text-align: right">yyyyy</th>
             * </tr>
             * <tr>
             * <td>AD 1</td>
             * <td style="text-align: right">1</td>
             * <td style="text-align: right">01</td>
             * <td style="text-align: right">001</td>
             * <td style="text-align: right">0001</td>
             * <td style="text-align: right">00001</td>
             * </tr>
             * <tr>
             * <td>AD 12</td>
             * <td style="text-align: right">12</td>
             * <td style="text-align: right">12</td>
             * <td style="text-align: right">012</td>
             * <td style="text-align: right">0012</td>
             * <td style="text-align: right">00012</td>
             * </tr>
             * <tr>
             * <td>AD 123</td>
             * <td style="text-align: right">123</td>
             * <td style="text-align: right">23</td>
             * <td style="text-align: right">123</td>
             * <td style="text-align: right">0123</td>
             * <td style="text-align: right">00123</td>
             * </tr>
             * <tr>
             * <td>AD 1234</td>
             * <td style="text-align: right">1234</td>
             * <td style="text-align: right">34</td>
             * <td style="text-align: right">1234</td>
             * <td style="text-align: right">1234</td>
             * <td style="text-align: right">01234</td>
             * </tr>
             * <tr>
             * <td>AD 12345</td>
             * <td style="text-align: right">12345</td>
             * <td style="text-align: right">45</td>
             * <td style="text-align: right">12345</td>
             * <td style="text-align: right">12345</td>
             * <td style="text-align: right">12345</td>
             * </tr>
             * </tbody>
             * </table>
             * </center>
             * </div>
             * </td>
             * </tr>
             * <tr>
             * <td style="text-align: center">Y</td>
             * <td style="text-align: center">1..n</td>
             * <td>1997</td>
             * <td>Year (in "Week of Year" based calendars). Normally the length specifies the padding,
             * but for two letters it also specifies the maximum length.
             * This year designation is used in ISO year-week calendar as defined by ISO 8601,
             * but can be used in non-Gregorian based calendar systems where week date processing is desired.
             * May not always be the same value as calendar year.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">u</td>
             * <td style="text-align: center">1..n</td>
             * <td>4601</td>
             * <td>Extended year. This is a single number designating the year of this calendar system,
             * encompassing all supra-year fields.
             * For example, for the Julian calendar system, year numbers are positive, with an era of BCE or CE.
             * An extended year value for the Julian calendar system assigns positive values to CE years and
             * negative values to BCE years, with 1 BCE being year 0.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center" rowspan="3">U</td>
             * <td style="text-align: center">1..3</td>
             * <td>&#x7532;&#x5B50;</td>
             * <td rowspan="3">Cyclic year name. Calendars such as the Chinese lunar calendar (and related calendars)
             * and the Hindu calendars use 60-year cycles of year names.
             * Use one through three letters for the abbreviated name,
             * four for the full name, or five for the narrow name
             * (currently the data only provides abbreviated names,
             * which will be used for all requested name widths).
             * If the calendar does not provide cyclic year name data,
             * or if the year value to be formatted is out of the range
             * of years for which cyclic name data is provided, then numeric formatting is used (behaves like 'y').</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>(currently also &#x7532;&#x5B50;)</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>(currently also &#x7532;&#x5B50;)</td>
             * </tr>
             * <tr>
             * <th rowspan="6">quarter</th>
             * <td rowspan="3" style="text-align: center">Q</td>
             * <td style="text-align: center">1..2</td>
             * <td>02</td>
             * <td rowspan="3">Quarter - Use one or two for the numerical quarter, three for the abbreviation,
             * or four for the full name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Q2</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>2nd quarter</td>
             * </tr>
             * <tr>
             * <td rowspan="3" style="text-align: center">q</td>
             * <td style="text-align: center">1..2</td>
             * <td>02</td>
             * <td rowspan="3"><b>Stand-Alone</b> Quarter - Use one or two for the numerical quarter,
             * three for the abbreviation, or four for the full name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Q2</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>2nd quarter</td>
             * </tr>
             * <tr>
             * <th rowspan="8">month</th>
             * <td rowspan="4" style="text-align: center">M</td>
             * <td style="text-align: center">1..2</td>
             * <td>09</td>
             * <td rowspan="4">Month - Use one or two for the numerical month, three for the abbreviation,
             * four for the full name, or five for the narrow name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Sept</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>September</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>S</td>
             * </tr>
             * <tr>
             * <td rowspan="4" style="text-align: center">L</td>
             * <td style="text-align: center">1..2</td>
             * <td>09</td>
             * <td rowspan="4"><b>Stand-Alone</b> Month - Use one or two for the numerical month,
             * three for the abbreviation, or four for the full name, or 5 for the narrow name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Sept</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>September</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>S</td>
             * </tr>
             * <tr>
             * <th rowspan="2">week</th>
             * <td style="text-align: center">w</td>
             * <td style="text-align: center">1..2</td>
             * <td>27</td>
             * <td>Week of Year.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">W</td>
             * <td style="text-align: center">1</td>
             * <td>3</td>
             * <td>Week of Month. From 0..5. The first week of the month is the first week that contains a Thursday.
             * This is based on the ICU definition of week of month, and correlates to the ISO8601 week of year
             * definition. A day in the week before the week with the first Thursday will be week 0.</td>
             * </tr>
             * <tr>
             * <th rowspan="4">day</th>
             * <td style="text-align: center">d</td>
             * <td style="text-align: center">1..2</td>
             * <td>1</td>
             * <td>Date - Day of the month</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">D</td>
             * <td style="text-align: center">1..3</td>
             * <td>345</td>
             * <td>Day of year</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">F</td>
             * <td style="text-align: center">1</td>
             * <td>2</td>
             * <td>Day of Week in Month. The example is for the 2nd Wed in July</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">g</td>
             * <td style="text-align: center">1..n</td>
             * <td>2451334</td>
             * <td>Modified Julian day. This is different from the conventional Julian day number in two regards.
             * First, it demarcates days at local zone midnight, rather than noon GMT.
             * Second, it is a local number; that is, it depends on the local time zone.
             * It can be thought of as a single number that encompasses all the date-related fields.</td>
             * </tr>
             * <tr>
             * <th rowspan="15">week<br>
             * day</th>
             * <td rowspan="5" style="text-align: center">E</td>
             * <td style="text-align: center">1..2</td>
             * <td>2</td>
             * <td rowspan="5">Day of week - Use one through two for ISO number, or three for the short day,
             * or four for the full name, five for the narrow name, or six for the short name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Tue</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Tuesday</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>T</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">6</td>
             * <td>Tu</td>
             * </tr>
             * <tr>
             * <td rowspan="5" style="text-align: center">e</td>
             * <td style="text-align: center">1..2</td>
             * <td>2</td>
             * <td rowspan="5">Local day of week. Same as E except adds a numeric value that will depend on the
             * local starting day of the week, using one or two letters. For this example,
             * Monday is the first day of the week.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Tue</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Tuesday</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>T</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">6</td>
             * <td>Tu</td>
             * </tr>
             * <tr>
             * <td rowspan="5" style="text-align: center">c</td>
             * <td style="text-align: center">1..2</td>
             * <td>2</td>
             * <td rowspan="5"><b>Stand-Alone</b> local day of week - Use one or two letters for the local numeric value
             * (same as 'e'), three for the short day, four for the full name, five for the narrow name,
             * or six for the short name.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Tue</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Tuesday</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>T</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">6</td>
             * <td>Tu</td>
             * </tr>
             * <tr>
             * <th>period</th>
             * <td style="text-align: center">a</td>
             * <td style="text-align: center">1</td>
             * <td>AM</td>
             * <td>AM or PM</td>
             * </tr>
             * <tr>
             * <th rowspan="4">hour</th>
             * <td style="text-align: center">h</td>
             * <td style="text-align: center">1..2</td>
             * <td>11</td>
             * <td>Hour [1-12]. When used in skeleton data or in a skeleton passed in an API
             * for flexible data pattern generation,
             * it should match the 12-hour-cycle format preferred by the locale (h or K);
             * it should not match a 24-hour-cycle format (H or k). Use hh for zero padding.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">H</td>
             * <td style="text-align: center">1..2</td>
             * <td>13</td>
             * <td>Hour [0-23]. When used in skeleton data or in a skeleton passed in an API
             * for flexible data pattern generation,
             * it should match the 24-hour-cycle format preferred by the locale (H or k);
             * it should not match a 12-hour-cycle format (h or K). Use HH for zero padding.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">K</td>
             * <td style="text-align: center">1..2</td>
             * <td>0</td>
             * <td>Hour [0-11]. When used in a skeleton, only matches K or h, see above. Use KK for zero padding.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">k</td>
             * <td style="text-align: center">1..2</td>
             * <td>24</td>
             * <td>Hour [1-24]. When used in a skeleton, only matches k or H, see above. Use kk for zero padding.</td>
             * </tr>
             * <tr>
             * <th>minute</th>
             * <td style="text-align: center">m</td>
             * <td style="text-align: center">1..2</td>
             * <td>59</td>
             * <td>Minute. Use one or two for zero padding.</td>
             * </tr>
             * <tr>
             * <th rowspan="3">second</th>
             * <td style="text-align: center">s</td>
             * <td style="text-align: center">1..2</td>
             * <td>12</td>
             * <td>Second. Use one or two for zero padding.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">S</td>
             * <td style="text-align: center">1..n</td>
             * <td>3456</td>
             * <td>Fractional Second - truncates (like other time fields) to the count of letters.
             * (example shows display using pattern SSSS for seconds value 12.34567)</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">A</td>
             * <td style="text-align: center">1..n</td>
             * <td>69540000</td>
             * <td>Milliseconds in day. This field behaves <i>exactly</i> like a composite of all time-related fields,
             * not including the zone fields. As such, it also reflects discontinuities
             * of those fields on DST transition days.
             * On a day of DST onset, it will jump forward. On a day of DST cessation, it will jump backward.
             * This reflects the fact that is must be combined with the offset field
             * to obtain a unique local time value.</td>
             * </tr>
             * <tr>
             * <th rowspan="23">zone</th>
             * <td rowspan="2" style="text-align: center">z</td>
             * <td style="text-align: center">1..3</td>
             * <td>PDT</td>
             * <td>The <i>short specific non-location format</i>. Where that is unavailable, falls back to the
             * <i>short localized GMT format</i> ("O").</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Pacific Daylight Time</td>
             * <td>The <i>long specific non-location format</i>. Where that is unavailable, falls back to the
             * <i>long localized GMT format</i> ("OOOO").</td>
             * </tr>
             * <tr>
             * <td rowspan="3" style="text-align: center">Z</td>
             * <td style="text-align: center">1..3</td>
             * <td>-0800</td>
             * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
             * The format is equivalent to RFC 822 zone format (when optional seconds field is absent).
             * This is equivalent to the "xxxx" specifier.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>GMT-8:00</td>
             * <td>The <i>long localized GMT format</i>. This is equivalent to the "OOOO" specifier.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>-08:00<br>
             * -07:52:58</td>
             * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.
             * This is equivalent to the "XXXXX" specifier.</td>
             * </tr>
             * <tr>
             * <td rowspan="2" style="text-align: center">O</td>
             * <td style="text-align: center">1</td>
             * <td>GMT-8</td>
             * <td>The <i>short localized GMT format</i>.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>GMT-08:00</td>
             * <td>The <i>long localized GMT format</i>.</td>
             * </tr>
             * <tr>
             * <td rowspan="2" style="text-align: center">v</td>
             * <td style="text-align: center">1</td>
             * <td>PT</td>
             * <td>The <i>short generic non-location format</i>. Where that is unavailable, falls back to the
             * <i>generic location format</i> ("VVVV"),
             * then the <i>short localized GMT format</i> as the final fallback.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Pacific Time</td>
             * <td>The <i>long generic non-location format</i>. Where that is unavailable, falls back to
             * <i>generic location format</i> ("VVVV").</td>
             * </tr>
             * <tr>
             * <td rowspan="4" style="text-align: center">V</td>
             * <td style="text-align: center">1</td>
             * <td>uslax</td>
             * <td><b>NOT SUPPORTED!</b> The short time zone ID. Where that is unavailable,
             * the special short time zone ID <i>unk</i> (Unknown Zone) is used.<br>
             * <i><b>Note</b>: This specifier was originally used for a variant of the short specific
             * non-location format,
             * but it was deprecated in the later version of the LDML specification. In CLDR 23/ICU 51,
             * the definition of the specifier was changed to designate a short time zone ID.</i></td>
             * </tr>
             * <tr>
             * <td style="text-align: center">2</td>
             * <td>America/Los_Angeles</td>
             * <td><b>NOT SUPPORTED!</b> The long time zone ID.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>Los Angeles</td>
             * <td><b>NOT SUPPORTED!</b> The exemplar city (location) for the time zone. Where that is unavailable,
             * the localized exemplar city name for the special zone <i>Etc/Unknown</i> is used as the fallback
             * (for example, "Unknown City").</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>Los Angeles Time</td>
             * <td>The <i>generic location format</i>. Where that is unavailable, falls back to the
             * <i>long localized GMT format</i> ("OOOO"; Note: Fallback is only necessary with a GMT-style Time Zone ID,
             * like Etc/GMT-830.)<br>
             * This is especially useful when presenting possible timezone choices for user selection,
             * since the naming is more uniform than the "v" format.</td>
             * </tr>
             * <tr>
             * <td rowspan="5" style="text-align: center">X</td>
             * <td style="text-align: center">1</td>
             * <td>-08<br>
             * +0530<br>
             * Z</td>
             * <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field.
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">2</td>
             * <td>-0800<br>
             * Z</td>
             * <td>The <i>ISO8601 basic format</i> with hours and minutes fields.
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>-08:00<br>
             * Z</td>
             * <td>The <i>ISO8601 extended format</i> with hours and minutes fields.
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>-0800<br>
             * -075258<br>
             * Z</td>
             * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
             * (Note: The seconds field is not supported by the ISO8601 specification.)
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>-08:00<br>
             * -07:52:58<br>
             * Z</td>
             * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
             * (Note: The seconds field is not supported by the ISO8601 specification.)
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
             * </tr>
             * <tr>
             * <td rowspan="5" style="text-align: center">x</td>
             * <td style="text-align: center">1</td>
             * <td>-08<br>
             * +0530</td>
             * <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">2</td>
             * <td>-0800</td>
             * <td>The <i>ISO8601 basic format</i> with hours and minutes fields.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">3</td>
             * <td>-08:00</td>
             * <td>The <i>ISO8601 extended format</i> with hours and minutes fields.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">4</td>
             * <td>-0800<br>
             * -075258</td>
             * <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields.
             * (Note: The seconds field is not supported by the ISO8601 specification.)</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">5</td>
             * <td>-08:00<br>
             * -07:52:58</td>
             * <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields.
             * (Note: The seconds field is not supported by the ISO8601 specification.)</td>
             * </tr>
             * </tbody>
             * </table>
             * <p>Any characters in the pattern that are not in the ranges of ['a'..'z'] and ['A'..'Z']
             * will be treated as quoted text. For instance, characters like ':', '.', ' ', '#' and '@'
             * will appear in the resulting time text even they are not embraced within single quotes.</p>
             * <p>A pattern containing any invalid pattern letter will result in a
             * thrown exception during formatting.</p>
             **/
            format: {
                value: function (pattern) {
                    var struct,
                        string,
                        isJulian,
                        lang,
                        dateTimeFormats,
                        dateTimeFormat;

                    if (this.isValid()) {
                        lang = this.currentLang();
                        if (!utilx.isString(lang) || utilx.isEmptyString(lang) ||
                                !utilx.isPlainObject(languages[lang])) {

                            if (!utilx.isString(defaultLanguage) || utilx.isEmptyString(defaultLanguage) ||
                                    !utilx.isPlainObject(languages[defaultLanguage])) {

                                throw new Error('Language not loaded!');
                            }

                            lang = defaultLanguage;
                        }

                        isJulian = this.isJulian();
                        if (isJulian) {
                            struct = jdToJulian(this.jd());
                        } else {
                            struct = this.getter();
                        }

                        struct = getCorrectStruct(this, struct);
                        dateTimeFormats = languages[lang].dates.calendars.gregorian.dateTimeFormats;
                        if (!utilx.isString(pattern) || utilx.isEmptyString(pattern)) {
                            pattern = utilx.arrayFirst(formatTypes);
                        }

                        if (utilx.arrayContains(utilx.objectKeys(dateTimeFormats), pattern)) {
                            dateTimeFormat = dateTimeFormats[pattern];
                            dateTimeFormat = replaceToken(dateTimeFormat, '{1}',
                                                          formatDate(struct, pattern, isJulian, lang, this.locale()));
                            dateTimeFormat = replaceToken(dateTimeFormat, '{0}', formatTime(struct, pattern, lang));
                        } else {
                            dateTimeFormat = formatDate(struct, pattern, isJulian, lang, this.locale());
                            dateTimeFormat = formatTime(struct, dateTimeFormat, lang);
                        }

                        if (hasRemainingTokens(dateTimeFormat)) {
                            throw new Error('Pattern has remaining tokens!: ' + remainingTokens(dateTimeFormat));
                        }

                        string = stripSingleQuotes(dateTimeFormat);
                    } else {
                        string = 'Invalid Date';
                    }

                    return string;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [pattern]
             * @return {string}
             * @this AstroDate
             */
            toString: {
                value: function (pattern) {
                    if (!utilx.isString(pattern) || utilx.isEmptyString(pattern) ||
                            !utilx.arrayContains(formatTypes, pattern)) {

                        pattern = utilx.arrayFirst(formatTypes);
                    }

                    return this.format(pattern);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [pattern]
             * @return {string}
             * @this AstroDate
             */
            toDateString: {
                value: function (pattern) {
                    var struct,
                        string,
                        isJulian,
                        lang;

                    if (this.isValid()) {
                        lang = this.currentLang();
                        if (!utilx.isString(lang) || utilx.isEmptyString(lang) ||
                                !utilx.isPlainObject(languages[lang])) {

                            if (!utilx.isString(defaultLanguage) || utilx.isEmptyString(defaultLanguage) ||
                                    !utilx.isPlainObject(languages[defaultLanguage])) {

                                throw new Error('Language not loaded!');
                            }

                            lang = defaultLanguage;
                        }

                        isJulian = this.isJulian();
                        if (isJulian) {
                            struct = jdToJulian(this.jd());
                        } else {
                            struct = this.getter();
                        }

                        if (!utilx.isString(pattern) || utilx.isEmptyString(pattern) ||
                                !utilx.arrayContains(formatTypes, pattern)) {

                            pattern = utilx.arrayFirst(formatTypes);
                        }

                        pattern = formatDate(getCorrectStruct(this, struct), pattern, isJulian, lang, this.locale());
                        if (hasRemainingTokens(pattern)) {
                            throw new Error('Pattern has remaining tokens!: ' + remainingTokens(pattern));
                        }

                        string = stripSingleQuotes(pattern);
                    } else {
                        string = 'Invalid Date';
                    }

                    return string;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [pattern]
             * @return {string}
             * @this AstroDate
             */
            toTimeString: {
                value: function (pattern) {
                    var struct,
                        string,
                        isJulian,
                        lang;

                    if (this.isValid()) {
                        lang = this.currentLang();
                        if (!utilx.isString(lang) || utilx.isEmptyString(lang) ||
                                !utilx.isPlainObject(languages[lang])) {

                            if (!utilx.isString(defaultLanguage) || utilx.isEmptyString(defaultLanguage) ||
                                    !utilx.isPlainObject(languages[defaultLanguage])) {

                                throw new Error('Language not loaded!');
                            }

                            lang = defaultLanguage;
                        }

                        isJulian = this.isJulian();
                        if (isJulian) {
                            struct = jdToJulian(this.jd());
                        } else {
                            struct = this.getter();
                        }

                        if (!utilx.isString(pattern) || utilx.isEmptyString(pattern) ||
                                !utilx.arrayContains(formatTypes, pattern)) {

                            pattern = utilx.arrayFirst(formatTypes);
                        }

                        pattern = formatTime(getCorrectStruct(this, struct), pattern, lang);
                        if (hasRemainingTokens(pattern)) {
                            throw new Error('Pattern has remaining tokens!: ' + remainingTokens(pattern));
                        }

                        string = stripSingleQuotes(pattern);
                    } else {
                        string = 'Invalid Date';
                    }

                    return string;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {string}
             * @this AstroDate
             */
            toISOString: {
                value: function (padding) {
                    var val;

                    if (this.isValid()) {
                        // should be gregorian?!
                        // add weekDate = calendarToWeekDate(struct)
                        val = toISOString(getCorrectStruct(this, this.getter()), padding);
                    } else {
                        val = 'Invalid Date';
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {string}
             * @this AstroDate
             */
            valueOf: {
                value: function () {
                    var val;

                    if (this.isJulian()) {
                        val = this.jd();
                    } else {
                        val = this.getTime();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            unix: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        if (this.isTT()) {
                            struct = toTT(this.getter());
                        } else {
                            struct = this.getter();
                        }

                        val = getTime(toUT(struct)).div(1000).trunc().toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {object} [dateObject]
             * @this AstroDate
             */
            object: {
                value: function (dateObject) {
                    var struct,
                        val;

                    if (utilx.isUndefined(dateObject)) {
                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = structToObject(gregorianToJulian(struct));
                            } else {
                                val = structToObject(struct);
                            }
                        }
                    } else if (utilx.isPlainObject(dateObject)) {
                        val = this.setter('struct', objectToStruct(dateObject, this.isJulian()));
                    } else {
                        throw new TypeError(dateObject);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {AstroDate}
             * @this AstroDate
             */
            clone: {
                value: function () {
                    return new AstroDate(this);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {array} [dateArray]
             * @this AstroDate
             */
            array: {
                value: function (dateArray) {
                    var struct,
                        val;

                    if (utilx.isUndefined(dateArray)) {
                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = structToArrayOfString(gregorianToJulian(struct));
                            } else {
                                val = structToArrayOfString(struct);
                            }
                        }
                    } else if (utilx.arrayIsArray(dateArray)) {
                        val = this.setter('struct', arrayToStruct(dateArray, this.isJulian()));
                    } else {
                        throw new TypeError(dateArray);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {window.Date} [date]
             * @this AstroDate
             */
            date: {
                value: function (date) {
                    var val;

                    if (utilx.isUndefined(date)) {
                        if (this.isValid()) {
                            val = new Date(parseInt(this.getTime(), 10));
                        } else {
                            val = new Date(NaN);
                        }
                    } else if (utilx.isDate(date)) {
                        val = this.setter(date);
                    } else {
                        throw new TypeError(date);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            getTime: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        if (this.isTT()) {
                            struct = toTT(this.getter());
                        } else {
                            struct = this.getter();
                        }

                        val = getTime(toUT(struct)).toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            deltaTime: {
                value: function () {
                    var val;

                    if (this.isValid()) {
                        val = deltaTime(getCorrectStruct(this, this.getter())).toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} unit
             * @this AstroDate
             */
            timeTo: {
                value: function (unit) {
                    var val;

                    if (this.isValid()) {
                        val = timeTo(getCorrectStruct(this, this.getter()), normaliseUnits(unit)).toString();
                    }

                    return val;
                }
            },

            /**
             * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus the
             * fraction of the day since that instant.
             * Julian Dates are expressed as a Julian day number with a decimal fraction added.
             * For example, the Julian Date for 00:30:00.0 UT 1 January 2013 is 2456293.520833334
             * If argument is passed then this function acts as a setter; otherwise it is a getter.
             * If AstroDate is invalid then undefined is returned.
             * Throws an error if the argument is not of the correct type.
             * @memberOf AstroDate.prototype
             * @function
             * @param {(number|string)} [jd]
             * @return {string|undefined}
             * @this AstroDate
             */
            jd: {
                value: function (jd) {
                    var struct,
                        val;

                    if (utilx.isUndefined(jd)) {
                        if (this.isValid()) {
                            if (this.isTT()) {
                                struct = toTT(this.getter());
                            } else {
                                struct = this.getter();
                            }

                            val = gregorianToJd(toUT(struct)).toFixed(BigNumber.config().DECIMAL_PLACES);
                        }
                    } else if (utilx.isNumber(jd) || utilx.isString(jd) || (jd && jd instanceof BigNumber)) {
                        val = this.setter('struct', jdToGregorian(jd));
                    } else {
                        throw new TypeError(jd);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            jdn: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        if (this.isTT()) {
                            struct = toTT(this.getter());
                        } else {
                            struct = this.getter();
                        }

                        val = gregorianToJdn(toUT(struct)).toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            mjd: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        if (this.isTT()) {
                            struct = toTT(this.getter());
                        } else {
                            struct = this.getter();
                        }

                        val = gregorianToMJD(toUT(struct)).toString();
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            easter: {
                value: function () {
                    var struct,
                        val,
                        a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        k,
                        l,
                        m,
                        n;

                    if (this.isValid()) {
                        struct = getCorrectStruct(this, this.getter());
                        if (this.isJulian()) {
                            a = struct.year.mod(4);
                            b = struct.year.mod(7);
                            c = struct.year.mod(19);
                            d = c.times(19).plus(15).mod(30);
                            e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7);
                            f = d.plus(e).plus(114);
                            val = new AstroDate([struct.year, f.div(31).floor().minus(1), f.mod(31).plus(1)]);
                        } else {
                            a = struct.year.mod(19);
                            b = struct.year.div(100).floor();
                            c = struct.year.mod(100).floor();
                            d = b.div(4);
                            e = b.mod(4);
                            f = b.plus(8).div(25).floor();
                            g = b.minus(f).plus(1).div(3).floor();
                            h = new BigNumber(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30);
                            i = c.div(4).floor();
                            k = c.mod(4);
                            l = new BigNumber(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7);
                            m = a.plus(h.times(11)).plus(l.times(22)).div(451).floor();
                            n = h.plus(l).minus(m.times(7)).plus(114);
                            val = new AstroDate([struct.year, n.div(31).floor(), n.mod(31).plus(1)]);
                        }
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            isLeapYear: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        struct = getCorrectStruct(this, this.getter());
                        if (this.isJulian()) {
                            val = isJulianLeapYear(gregorianToJulian(struct));
                        } else {
                            val = isGregorianLeapYear(struct);
                        }
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             * @return {number}
             */
            daysInYear: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        struct = getCorrectStruct(this, this.getter());
                        if (this.isJulian()) {
                            val = utilx.toNumber(daysInJulianYear(gregorianToJulian(struct)).toString());
                        } else {
                            val = utilx.toNumber(daysInGregorianYear(struct).toString());
                        }
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             * @return {number}
             */
            daysInMonth: {
                value: function () {
                    var struct,
                        val;

                    if (this.isValid()) {
                        struct = getCorrectStruct(this, this.getter());
                        if (this.isJulian()) {
                            val = utilx.toNumber(daysInJulianMonth(gregorianToJulian(struct)).toString());
                        } else {
                            val = utilx.toNumber(daysInGregorianMonth(struct).toString());
                        }
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [jsonString]
             * @return {string}
             * @this AstroDate
             */
            json: {
                value: function (jsonString) {
                    var struct,
                        val;

                    if (utilx.isUndefined(jsonString)) {
                        if (typeof JSON === 'object' && utilx.isFunction(JSON.stringify)) {
                            val = utilx.jsonStringify(this.object());
                        }
                    } else if (utilx.isString(jsonString)) {
                        if (typeof JSON === 'object' && utilx.isFunction(JSON.parse)) {
                            struct = objectToStruct(utilx.jsonParse(jsonString), this.isJulian());
                        }

                        if (!isValid(struct)) {
                            throw new SyntaxError(struct);
                        }

                        val = this.setter('struct', struct);
                    } else {
                        throw new TypeError(jsonString);
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {string}
             * @this AstroDate
             */
            toJSON: {
                value: function (padding, type) {
                    return this.toISOString(padding, type);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @this AstroDate
             */
            calendarToWeekDate: {
                value: function () {
                    var val;

                    if (this.isValid()) {
                        val = structToObject(calendarToWeekDate(getCorrectStruct(this, this.getter())));
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [id]
             * @return {string}
             * @this AstroDate
             */
            lang: {
                value: function (id) {
                    var val,
                        lang;

                    if (utilx.isString(id) && !utilx.isEmptyString(id)) {
                        lang = minusToUnderscore(id);
                        if (utilx.isPlainObject(languages[lang])) {
                            this.setter('lang', lang);
                            this.setter('locale', lookupLocale(lang));
                        }

                        val = this;
                    } else {
                        val = this.getter('lang');
                    }

                    return val;
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @param {string} [id]
             * @return {string}
             * @this AstroDate
             */
            locale: {
                value: function (id) {
                    var lang,
                        val;

                    if (utilx.isString(id) && !utilx.isEmptyString(id)) {
                        lang = languageLoaded(id);
                        if (!utilx.isEmptyString(lang)) {
                            this.setter('lang', lang);
                            this.setter('locale', lookupLocale(id));
                        }

                        val = this;
                    } else {
                        val = this.getter('locale');
                    }

                    return val;
                }
            }
        });

        utilx.objectDefineProperties(AstroDate, {
            /** @memberOf AstroDate
             * @function
             * @return {string}
             */
            version: {
                value: function () {
                    return VERSION;
                }
            },

            /** @memberOf AstroDate
             * @function
             * @param {string} [id]
             * @param {object} [object]
             * @param {boolean} [freeze]
             * @return {string}
             */
            lang: {
                value: function (id, object, freeze) {
                    var lang;

                    if (utilx.isString(id) && !utilx.isEmptyString(id)) {
                        lang = minusToUnderscore(id);
                        if (utilx.isPlainObject(object)) {
                            languages[lang] = object;
                            if (!utilx.strictEqual(freeze, false)) {
                                utilx.deepFreeze(languages[lang]);
                            }
                        }

                        if (utilx.isPlainObject(languages[lang])) {
                            defaultLanguage = lang;
                            defaultLocale = lookupLocale(lang);
                        }
                    }

                    return defaultLanguage;
                }
            },

            /** @memberOf AstroDate
             * @function
             * @return {array.<String>}
             */
            langs: {
                value: function () {
                    return utilx.objectKeys(languages);
                }
            },

            /** @memberOf AstroDate
             * @function
             * @param {string} [id] The string representing the required locale, e.g. 'en_GB'
             * @return {string} Returns the current locale, e.g. 'en_GB'
             */
            locale: {
                value: function (id) {
                    var lang;

                    if (utilx.isString(id) && !utilx.isEmptyString(id)) {
                        lang = languageLoaded(id);
                        if (!utilx.isEmptyString(lang)) {
                            defaultLanguage = lang;
                            defaultLocale = lookupLocale(id);
                        }
                    }

                    return defaultLocale;
                }
            },

            /** @memberOf AstroDate
             * @function
             * @param {object} object
             * @param {boolean} freeze
             * @return {object}
             */
            leapSeconds: {
                value: function (object, freeze) {
                    if (utilx.isPlainObject(object)) {
                        leapSeconds = object;
                        if (!utilx.strictEqual(freeze, false)) {
                            utilx.deepFreeze(leapSeconds);
                        }
                    }

                    return leapSeconds;
                }
            },

            /** @memberOf AstroDate
             * @function
             * @param {object} object
             * @param {boolean} freeze
             * @return {object}
             */
            supplemental: {
                value: function (object, freeze) {
                    if (utilx.isPlainObject(object)) {
                        supplemental = object;
                        if (!utilx.strictEqual(freeze, false)) {
                            utilx.deepFreeze(supplemental);
                        }
                    }

                    return supplemental;
                }
            },

            /** @memberOf AstroDate
             * @function
             * @return {BigNumber}
             */
            BigNumber: {
                value: BigNumber
            },

            /** @memberOf AstroDate
             * @function
             * @param {string} unitString
             */
            normaliseUnits: {
                value: function (unitString) {
                    return normaliseUnits(unitString);
                }
            },

            /**
             * Tests if the provided input is an instance of AstroDate.
             * @memberOf AstroDate
             * @function
             * @param {object} inputArg
             * @return {boolean}
             */
            isAstroDate: {
                value: function (inputArg) {
                    return utilx.isObject(inputArg) && utilx.objectInstanceOf(inputArg, AstroDate);
                }
            },

            /**
             * Time is measured in ECMAScript in milliseconds since 01 January, 1970 UTC. In time values leap seconds
             * are ignored. It is assumed that there are exactly 86,400,000 milliseconds per day.
             * @memberOf AstroDate
             * @function
             * @return {string}
             */
            now: {
                value: function () {
                    return new AstroDate().getTime();
                }
            },

            /**
             * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus
             * the fraction of the day since that instant.
             * Julian Dates are expressed as a Julian day number with a decimal fraction added.
             * For example, the Julian Date for 00:30:00.0 UT 1 January 2013 is 2456293.520833334
             * @memberOf AstroDate
             * @function
             * @return {string}
             */
            jd: {
                value: function () {
                    return new AstroDate().jd();
                }
            },
            /**
             * The Julian Day Number (JDN) is the integer assigned to a whole solar day in the Julian day count
             * starting from noon Greenwich Mean Time,
             * with Julian day number 0 assigned to the day starting at noon on 1 January 4713 BC proleptic
             * Julian calendar (24 November 4714 BC, in the proleptic Gregorian calendar).
             * For example, the Julian day number for 1 January 2000 was 2,451,545.0
             * @memberOf AstroDate
             * @function
             * @return {string}
             */
            jdn: {
                value: function () {
                    return new AstroDate().jdn();
                }
            },

            /**
             * The Modified Julian Date (MJD) was introduced by the Smithsonian Astrophysical Observatory
             * in 1957 to record the orbit of
             * Sputnik via an IBM 704 (36-bit machine) and using only 18 bits until August 7, 2576.
             * MJD is the epoch of OpenVMS, using 63-bit date/time postponing the next Y2K campaign to
             * July 31, 31086 02:48:05.47.
             * MJD is defined relative to midnight, rather than noon.
             * @memberOf AstroDate
             * @function
             * @return {string}
             */
            mjd: {
                value: function () {
                    return new AstroDate().mjd();
                }
            },

            /**
             * The time now represented in Unix time.
             * Unix time, or POSIX time, is a system for describing instants in time,
             * defined as the number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC),
             * Thursday, 1 January 1970, not counting leap seconds.
             * It is used widely in Unix-like and many other operating systems and file formats.
             * Due to its handling of leap seconds, it is neither a linear representation of time nor
             * a true representation of UTC.
             * Unix time may be checked on most Unix systems by typing date +%s on the command line.
             * @memberOf AstroDate
             * @function
             * @return {string}
             */
            unix: {
                value: function () {
                    return new AstroDate().unix();
                }
            }
        });

        /*jslint white: true */
        /* jshint quotmark: false, -W100 */
        leapSeconds = utilx.deepFreeze( /*@@leapSeconds*/ );

        supplemental = utilx.deepFreeze( /*@@supplemental*/ );

        languages = utilx.deepFreeze( /*@@languages*/ );
        /*jslint white: false */

        AstroDate.locale('en_GB');

        return AstroDate;
    }

    /*
     *
     * UMD
     *
     */

    if (typeof globalThis !== 'object' || null === globalThis) {
        throw new TypeError('Invalid global context');
    }

    function addBigNumberModule(module, define) {
        if (privateUndefined !== module || privateUndefined !== define) {
            throw new Error();
        }

        /*jslint eqeq: true, plusplus: true, sub: true, white: true,
            newcap: true, vars: true, ass: true, bitwise: true */
        /*jshint unused: false, expr: true, asi: true, eqnull: true,
            laxbreak: true, validthis: true, noempty: false,
            -W017, -W018, -W032, -W041, -W084, -W116, -W120 */
        /*@@BigNumber*/

        return this.BigNumber;
    }

    /*global require, module, define */
    if (typeof module === 'object' && null !== module &&
            typeof module.exports === 'object' && null !== module.exports) {

        publicAstroDate = defineAstroDate(require('util-x'), addBigNumberModule.call({}));
        publicAstroDate.factory = function (deep) {
            var pa;

            if (true === deep) {
                pa = defineAstroDate(require('util-x').factory(), addBigNumberModule.call({}));
            } else {
                pa = defineAstroDate(require('util-x'), addBigNumberModule.call({}));
            }

            pa.factory = publicAstroDate.factory;

            return pa;
        };

        module.exports = publicAstroDate;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && null !== define.amd) {
        define(['util-x'], function (utilx) {
            publicAstroDate = defineAstroDate(utilx, addBigNumberModule.call({}));
            publicAstroDate.factory = function (deep) {
                var pa;

                if (true === deep) {
                    pa = defineAstroDate(utilx.factory(), addBigNumberModule.call({}));
                } else {
                    pa = defineAstroDate(utilx, addBigNumberModule.call({}));
                }

                pa.factory = publicAstroDate.factory;

                return pa;
            };

            return publicAstroDate;
        });
    } else {
        publicAstroDate = defineAstroDate(globalThis.utilx, addBigNumberModule.call({}));
        publicAstroDate.factory = function (deep) {
            var pa;

            if (true === deep) {
                pa = defineAstroDate(globalThis.utilx.factory(), addBigNumberModule.call({}));
            } else {
                pa = defineAstroDate(globalThis.utilx, addBigNumberModule.call({}));
            }

            pa.factory = publicAstroDate.factory;

            return pa;
        };

        globalThis.assertx = publicAstroDate;
    }
}(this));
