/*global requirejs, require, module */

/* AstroDate v0.1.1
 *
 * home: https://github.com/Xotic750/astrodate
 *
 * Copyright (C) 2013  Graham Fairweather (a.k.a: Xotic750)
 *
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

(function (global, local_undefined) {
    "use strict";

    var projectString = "astrodate",
        bigNumberCDN = "//cdn.jsdelivr.net/bignumber.js/1.1.0/bignumber.min",
        bigNumberFunc = "BigNumber",
        bigNumberString = bigNumberFunc.toLocaleLowerCase();

    (function (name, definition) {
        if (typeof module === "object" && module && typeof module.exports === "object") {
            module.exports = definition(require(bigNumberString + ".js"));
        } else if (typeof global.define === "function" && global.define.amd) {
            var projectPaths = {},
                projectConfig = {};

            projectPaths[bigNumberString] = bigNumberCDN;
            projectConfig[bigNumberString] = {};
            global.require.config({
                paths: projectPaths,
                config: projectConfig
            });

            global.define(name, [bigNumberString], definition);
        } else {
            global[name] = definition(global[bigNumberFunc]);
        }
    }(projectString, function (BigNumber) {
        BigNumber.config({
            DECIMAL_PLACES : 50,
            ROUNDING_MODE : 4,
            EXPONENTIAL_AT : [-7, 20],
            RANGE : [-1000000000, 1000000000],
            ERRORS : true
        });

        var VERSION = "0.1.1",
            //MAX_INTEGER = 9007199254740991,
            //MIN_INTEGER = -9007199254740991,
            baseObject = {},
            baseArray = [],
            baseString = "",
            toStringFN = baseObject.toString,
            dateObjectString = "[object Date]",
            arrayObjectString = "[object Array]",
            objectObjectString = "[object Object]",
            functionObjectString = "[object Function]",
            fullKeys = ["year", "month", "day", "hour", "minute", "second", "millisecond", "offset"],
            aliases = ["y", "M", "d", "h", "m", "s", "ms", "o"],
            dateMethods = ["getUTCFullYear", "getUTCMonth", "getUTCDate", "getUTCHours", "getUTCMinutes", "getUTCSeconds", "getUTCMilliseconds", "getTimezoneOffset"],
            dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            //j2000 = [2000, 1, 1, 11, 58, 55, 816],
            unitAliases = {},
            unitsLookup = {},
            lengthFullKeys = fullKeys.length,
            indexFullKeys,
            extend,
            hasOwnPropertyFn = baseObject.hasOwnProperty, // to combat old IE8- issues, min support IE6,
            //indexOfFn = baseArray.indexOf,
            //indexOf,
            defineProperty = baseObject.constructor.defineProperty,
            defineProperties = baseObject.constructor.defineProperties,
            hasOwnProperty,
            isArray = baseArray.isArray,
            isPrototypeOf = baseObject.constructor.prototype.isPrototypeOf,
            instanceOf,
            getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
            getPrototypeOf,
            proto = "__proto__",
            supportsProto = baseObject.constructor.prototype[proto] === null,
            oPrototype,
            whiteSpaces = " \\t\\n\\f\\r",
            wsTrimRX = new RegExp("^[" + whiteSpaces + "]+|[" + whiteSpaces + "]+$", "g"),
            trimFN = baseString.constructor.trim,
            trim,
            AstroDate,
            bignumber;

        for (indexFullKeys = 0; indexFullKeys < lengthFullKeys; indexFullKeys += 1) {
            unitAliases[aliases[indexFullKeys]] = fullKeys[indexFullKeys];
            unitsLookup[fullKeys[indexFullKeys]] = true;
        }

        function isUndefined(inputArg) {
            return inputArg === local_undefined;
        }

        function isObject(inputArg) {
            return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === objectObjectString;
        }

        function isDate(inputArg) {
            return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === dateObjectString;
        }

        function isFunction(inputArg) {
            return inputArg !== null && (typeof inputArg === "function" || (typeof inputArg === "object" && toStringFN.call(inputArg) === functionObjectString));
        }

        if (!isFunction(isArray)) {
            isArray = function isArray(inputArg) {
                return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === arrayObjectString;
            };
        }

        function isNumber(inputArg) {
            return typeof inputArg === "number";
        }

        function isString(inputArg) {
            return typeof inputArg === "string";
        }

        if (isFunction(trimFN)) {
            trim = function (inputArg) {
                return inputArg.trim();
            };
        } else {
            trim = function (inputArg) {
                return inputArg.replace(wsTrimRX, "");
            };
        }

        // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
        // Create our own local "hasOwnProperty" function: native -> fallback
        if (isFunction(hasOwnPropertyFn)) {
            hasOwnProperty = function (object, property) {
                return hasOwnPropertyFn.call(object, property);
            };
        } else {
            hasOwnProperty = function (object, property) {
                return (property in object) && (isUndefined(object.constructor.prototype[property]));
            };
        }

        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "indexOf" function: native -> polyfill
        /*
        if (isFunction(indexOfFn)) {
            indexOf = function (array, searchElement) {
                return indexOfFn.call(array, searchElement);
            };
        } else {
            indexOf = function (array, searchElement) {
                var length,
                    key;

                for (key = 0, length = array.length; key < length; key += 1) {
                    if (hasOwnProperty(array, key) && searchElement === array[key]) {
                        return key;
                    }
                }

                return -1;
            };
        }
        */

        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "defineProperty" function: native -> none
        if (isFunction(defineProperty)) {
            try {
                defineProperty({}, "sentinel", {});
            } catch (exception) {
                defineProperty = null;
            }
        }

        if (!isFunction(defineProperty)) {
            defineProperty = function (object, property, descriptor) {
                if (hasOwnProperty(descriptor, "value")) {
                    object[property] = descriptor.value;
                }
            };
        }

        if (!isFunction(defineProperties)) {
            defineProperty = function (object, props) {
                var prop;

                for (prop in props) {
                    if (hasOwnProperty(props, prop)) {
                        defineProperty(object, prop, props[prop]);
                    }
                }
            };
        }

        if (isFunction(getPrototypeOfFN)) {
            getPrototypeOf = getPrototypeOfFN;
        } else if (supportsProto) {
            getPrototypeOf = function getPrototypeOf(object) {
                return object[proto];
            };
        } else {
            oPrototype = baseObject.constructor.prototype;
            getPrototypeOf = function getPrototypeOf(object) {
                if (object === oPrototype) {
                    return null;
                }

                var prototype = object.constructor.prototype;

                if (object === prototype) {
                    return oPrototype;
                }

                return prototype;
            };
        }

        if (isFunction(isPrototypeOf)) {
            instanceOf = function instanceOf(object, constructor) {
                return isPrototypeOf.call(constructor.prototype, object);
            };
        } else if (isFunction(getPrototypeOf)) {
            instanceOf = function instanceOf(object, constructor) {
                while (object) {
                    if (object === constructor.prototype) {
                        return true;
                    }

                    object = getPrototypeOf(object);
                }

                return false;
            };
        }

        extend = (function () {
            var hasDontEnumBug = true,
                dontEnums = [
                    "toString",
                    "toLocaleString",
                    "valueOf",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "constructor"
                ],
                dontEnumsLength = dontEnums.length,
                testObject = {
                    "toString": null
                },
                key;

            for (key in testObject) {
                hasDontEnumBug = !key;
            }

            return function extend(thisObject, withObject) {
                var name,
                    index,
                    dontEnum;

                for (name in withObject) {
                    if (hasOwnProperty(withObject, name)) {
                        thisObject[name] = withObject[name];
                    }
                }

                if (hasDontEnumBug) {
                    for (index = 0; index < dontEnumsLength; index += 1) {
                        dontEnum = dontEnums[index];
                        if (withObject.hasOwnProprty(dontEnum)) {
                            thisObject[dontEnum] = withObject[dontEnum];
                        }
                    }
                }

                return thisObject;
            };
        }());


        function normaliseAngle(angle) {
            var newAngle = bignumber(angle);

            while (newAngle.lt(-360)) {
                newAngle = newAngle.plus(360);
            }

            while (newAngle.gt(360)) {
                newAngle = newAngle.minus(360);
            }

            return newAngle;
        }

        /*
        function toPositiveAngle(angle) {
            var newAngle = normaliseAngle(angle);

            if (newAngle < 0) {
                newAngle = newAngle.plus(360);
            }

            return newAngle;
        }
        */

        defineProperties(BigNumber.prototype, {
            "toNumber": {
                "value": function () {
                    return +this;
                }
            },

            "integerPart": {
                "value": function () {
                    var bn = this;

                    if (bn.isFinite()) {
                        if (bn.gte(0)) {
                            bn = bn.floor();
                        } else {
                            bn = bn.ceil();
                        }
                    }

                    return bn;
                }
            },

            "fractionalPart": {
                "value": function () {
                    var bn = this;

                    if (bn.isFinite()) {
                        bn = bn.minus(this.integerPart());
                    } else {
                        bn = bignumber(NaN);
                    }

                    return bn;
                }
            },

            "difference": {
                "value": function (value) {
                    var diff;

                    if (this.gt(value)) {
                        diff = this.minus(value);
                    } else {
                        diff = this.neg().plus(value);
                    }

                    return diff;
                }
            },

            "factorial": {
                "value": (function () {
                    var factorialLookup = {};

                    return function (exponentialAt) {
                        if (!this.isFinite() || this.lt(0) || !this.fractionalPart().equals(0)) {
                            return bignumber(NaN);
                        }

                        if (isUndefined(exponentialAt)) {
                            exponentialAt = BigNumber.config().EXPONENTIAL_AT[1];
                        }

                        if (!BigNumber.isBigNumber(exponentialAt)) {
                            exponentialAt = bignumber(exponentialAt).floor();
                        } else {
                            exponentialAt = exponentialAt.floor();
                        }

                        if (!exponentialAt.isFinite() || exponentialAt.lt(0)) {
                            exponentialAt = bignumber(BigNumber.config().EXPONENTIAL_AT[1]);
                        }

                        var n = this.toNumber(),
                            config,
                            previousConfig,
                            prop,
                            i;

                        if (!factorialLookup[n]) {
                            config = BigNumber.config();
                            previousConfig = {};
                            for (prop in config) {
                                if (hasOwnProperty(config, prop)) {
                                    previousConfig[prop] = config[prop];
                                }
                            }

                            BigNumber.config({
                                DECIMAL_PLACES : 20,
                                ROUNDING_MODE : 4,
                                EXPONENTIAL_AT : [-7, exponentialAt.toNumber()],
                                RANGE : [-1000000000, 1000000000],
                                ERRORS : true
                            });

                            factorialLookup[n] = bignumber(1);
                            for (i = 2; i <= n; i += 1) {
                                factorialLookup[n] = factorialLookup[n].times(i);
                            }

                            for (prop in previousConfig) {
                                if (hasOwnProperty(previousConfig, prop)) {
                                    config[prop] = previousConfig[prop];
                                }
                            }
                        }

                        return factorialLookup[n];
                    };
                }())
            },

            "toRadians": {
                "value": function (decimalPlacesOfPI) {
                    return this.times(BigNumber.pi(decimalPlacesOfPI).div(180));
                }
            },

            "abs": {
                "value": function () {
                    if (this.lt(0)) {
                        return this.neg();
                    }

                    return this;
                }
            }
        });

        defineProperties(BigNumber, {
            "isBigNumber": {
                "value": function (inputArg) {
                    return inputArg && typeof inputArg === "object" && (instanceOf(inputArg, BigNumber || inputArg instanceof BigNumber));
                }
            },

            "integerPart": {
                "value": function (number) {
                    return bignumber(number).integerPart();
                }
            },

            "fractionalPart": {
                "value": function (number) {
                    return bignumber(number).fractionalPart();
                }
            },

            "difference": {
                "value": function (number1, number2) {
                    return bignumber(number1).difference(number2);
                }
            },

            "abs": {
                "value": function (number) {
                    return bignumber(number).abs();
                }
            },

            "factorial": {
                "value": function (number, exponentialAt) {
                    return bignumber(number).factorial(exponentialAt);
                }
            },

            "pi": {
                "value": (function () {
                    var piLookup = {};

                    return function (decimalPlaces) {
                        if (isUndefined(decimalPlaces)) {
                            decimalPlaces = BigNumber.config().DECIMAL_PLACES;
                        }

                        if (!BigNumber.isBigNumber(decimalPlaces)) {
                            decimalPlaces = bignumber(decimalPlaces).floor();
                        }

                        if (!decimalPlaces.isFinite() || decimalPlaces.lt(0)) {
                            decimalPlaces = bignumber(BigNumber.config().DECIMAL_PLACES);
                        }

                        var config,
                            previousConfig,
                            k = 0,
                            prop,
                            sum,
                            ta,
                            tb,
                            divisor,
                            a,
                            b;

                        if (!piLookup[decimalPlaces]) {
                            config = BigNumber.config();
                            previousConfig = {};
                            for (prop in config) {
                                if (hasOwnProperty(config, prop)) {
                                    previousConfig[prop] = config[prop];
                                }
                            }

                            BigNumber.config({
                                DECIMAL_PLACES : decimalPlaces.toNumber(),
                                ROUNDING_MODE : 4,
                                EXPONENTIAL_AT : [-7, 20],
                                RANGE : [-1000000000, 1000000000],
                                ERRORS : true
                            });

                            sum = bignumber(0);
                            a = ta = bignumber(16).div(5);
                            b = tb = bignumber(-4).div(239);
                            while (!a.equals(b)) {
                                divisor = 2 * k + 1;
                                a = ta.div(divisor);
                                b = tb.div(divisor);
                                sum = sum.plus(a).plus(b);
                                ta = ta.neg().div(25);
                                tb = tb.neg().div(57121);
                                k += 1;
                            }

                            for (prop in previousConfig) {
                                if (hasOwnProperty(previousConfig, prop)) {
                                    config[prop] = previousConfig[prop];
                                }
                            }

                            piLookup[decimalPlaces] = sum;
                        }

                        return piLookup[decimalPlaces];
                    };
                }())
            },

            "toRadians": {
                "value": function (number, decimalPlacesPI) {
                    return bignumber(number).toRadians(decimalPlacesPI);
                }
            },

            "sin": {
                "value": (function () {
                    var sineLookup = {};

                    return function (angle) {
                        angle = normaliseAngle(angle);
                        var sum,
                            prev,
                            k,
                            mod,
                            fact,
                            i;

                        if (!sineLookup[angle.toString()]) {
                            sum = angle;
                            prev = bignumber(0);
                            i = 1;
                            k = 3;
                            while (!sum.equals(prev)) {
                                prev = sum;
                                fact = BigNumber.factorial(k);
                                mod = i % 2 % 2;
                                if (mod === 1) {
                                    sum = sum.minus(angle.pow(k).div(fact));
                                } else {
                                    sum = sum.plus(angle.pow(k).div(fact));
                                }

                                i += 1;
                                k += 2;
                            }

                            sineLookup[angle.toString()] = sum;
                        }

                        return sineLookup[angle.toString()];
                    };
                }())
            }
        });

        bignumber = function bignumber(inputArg) {
            var bn;

            if (BigNumber.isBigNumber(inputArg)) {
                bn = inputArg;
            } else {
                bn = new BigNumber(inputArg);
            }

            return bn;
        };

        function isDateValid(inputArg) {
            return isDate(inputArg) && !isNaN(inputArg.getTime());
        }

        function isDigit(character) {
            if (!isString(character) || character.length !== 1) {
                return false;
            }

            var charCode = character.charCodeAt(0);

            return charCode >= 48 && charCode <= 57;
        }

        function isValidValue(value) {
            return (isNumber(value) || (isString(value) && trim(value).length)) && isFinite(value);
        }

        function intToNumber(input) {
            var number = +input;

            if ((!isNumber(input) && !isString(input)) || !isFinite(number) || parseInt(input, 10) !== number) {
                number = NaN;
            }

            return number;
        }

        function isGregorianLeapYear(struct) {
            return struct.year % 400 === 0 || (struct.year % 100 !== 0 && struct.year % 4 === 0);
        }

        function isJulianLeapYear(struct) {
            var modTest = 3;

            if (struct.year > 0) {
                modTest = 0;
            }

            return struct.year % 4 === modTest;
        }

        function daysInGregorianMonth(struct) {
            var days;

            if (struct.month === 2) {
                days = 28 + isGregorianLeapYear(struct);
            } else {
                days = 31 - ((struct.month - 1) % 7 % 2);
            }

            return days;
        }

        function daysInJulianMonth(struct) {
            var days = 28;

            if (struct.month === 2) {
                days += isJulianLeapYear(struct);
            }

            return days;
        }

        function daysInGregorianYear(struct) {
            return 365 + isGregorianLeapYear(struct);
        }

        function daysInJulianYear(struct) {
            return 365 + isJulianLeapYear(struct);
        }

        function inMonthRange(month) {
            if (BigNumber.isBigNumber(month)) {
                month = month.toNumber();
            }

            return isNumber(month) && month > 0 && month < 13;
        }

        function inDayRange(day, dim) {
            if (BigNumber.isBigNumber(day)) {
                day = day.toNumber();
            }

            if (BigNumber.isBigNumber(dim)) {
                dim = dim.toNumber();
            }

            return isNumber(day) && isNumber(dim) && day > 0 && day <= dim;
        }

        function inHourRange(hour) {
            if (BigNumber.isBigNumber(hour)) {
                hour = hour.toNumber();
            }

            return isNumber(hour) && hour >= 0 && hour <= 24;
        }

        function inMinuteRange(minute, hour) {
            if (BigNumber.isBigNumber(minute)) {
                minute = minute.toNumber();
            }

            if (BigNumber.isBigNumber(hour)) {
                hour = hour.toNumber();
            }

            return isNumber(minute) && isNumber(hour) && ((hour === 24 && minute === 0) || (hour !== 24 && minute >= 0 && minute < 60));
        }

        function inSecondRange(second, hour) {
            if (BigNumber.isBigNumber(second)) {
                second = second.toNumber();
            }

            if (BigNumber.isBigNumber(hour)) {
                hour = hour.toNumber();
            }

            return isNumber(second) && isNumber(hour) && ((hour === 24 && second === 0) || (hour !== 24 && second >= 0 && second < 60));
        }

        function inMillisecondRange(millisecond, hour) {
            if (BigNumber.isBigNumber(millisecond)) {
                millisecond = millisecond.toNumber();
            }

            if (BigNumber.isBigNumber(hour)) {
                hour = hour.toNumber();
            }

            return isNumber(millisecond) && isNumber(hour) && ((hour === 24 && millisecond === 0) || (hour !== 24 && millisecond >= 0 && millisecond < 1000));
        }

        function inOffsetRange(offset) {
            if (BigNumber.isBigNumber(offset)) {
                offset = offset.toNumber();
            }

            return isNumber(offset) && offset >= -1440 && offset <= 1440;
        }

        function isValid(struct, julian) {
            var dim,
                index,
                number,
                prop;

            if (!isObject(struct)) {
                return false;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                prop = fullKeys[index];
                if (!hasOwnProperty(struct, prop)) {
                    return false;
                }

                number = struct[prop];
                if (!isNumber(number) || isNaN(intToNumber(number))) {
                    return false;
                }

                switch (index) {
                case 0:
                    if (julian === true && number === 0) {
                        return false;
                    }

                    break;
                case 1:
                    if (!inMonthRange(number)) {
                        return false;
                    }

                    break;
                case 2:
                    if (julian === true) {
                        dim = daysInJulianMonth(struct);
                    } else {
                        dim = daysInGregorianMonth(struct);
                    }

                    if (!inDayRange(number, dim)) {
                        return false;
                    }

                    break;
                case 3:
                    if (!inHourRange(number)) {
                        return false;
                    }

                    break;
                case 4:
                    if (!inMinuteRange(number, struct.hour)) {
                        return false;
                    }

                    break;
                case 5:
                    if (!inSecondRange(number, struct.hour)) {
                        return false;
                    }

                    break;
                case 6:
                    if (!inMillisecondRange(number, struct.hour)) {
                        return false;
                    }

                    break;
                case 7:
                    if (!inOffsetRange(number)) {
                        return false;
                    }

                    break;
                default:
                    return false;
                }
            }

            return true;
        }

        function dayOfGregorianYear(struct) {
            return Math.floor((275 * struct.month) / 9) - (2 - isGregorianLeapYear(struct)) * Math.floor((struct.month + 9) / 12) + struct.day - 30;
        }

        function dayOfJulianYear(struct) {
            var doy = 28 * struct.month + struct.day;

            if (struct.month >= 2) {
                doy += isJulianLeapYear(struct);
            }

            return doy;
        }

        function dayOfWeek(julianDay) {
            var day = bignumber(julianDay).plus(1.5).mod(7).floor().toNumber();

            if (day < 0) {
                day = 7 + day;
            }

            return dayNames[day];
        }

        function dayFractionToTime(dayFraction) {
            var totalMs = bignumber(dayFraction).abs().times(86400000),
                hour = totalMs.div(3600000),
                minute = hour.fractionalPart().times(60),
                second = minute.fractionalPart().times(60),
                millisecond = second.fractionalPart().times(1000);

            return [hour.floor().toNumber(), minute.floor().toNumber(), second.floor().toNumber(), millisecond.floor().toNumber()];
        }

        function padLeadingZero(number, size) {
            var numString = number.toString(),
                length = size - numString.length,
                i;

            for (i = 0; i < length; i += 1) {
                numString = "0" + numString;
            }

            return numString;
        }

        function fractionToTime(fraction, fractionIn) {
            var totalMs,
                hour,
                minute,
                second,
                millisecond;

            fraction = bignumber(fraction);
            switch (fractionIn) {
            case "day":
                totalMs = fraction.times(86400000);
                break;
            case "hour":
                totalMs = fraction.times(3600000);
                break;
            case "minute":
                totalMs = fraction.times(60000);
                break;
            case "second":
                totalMs = fraction.times(1000);
                break;
            case "millisecond":
                totalMs = fraction;
                break;
            default:
            }

            hour = totalMs.div(3600000).floor();
            minute = totalMs.minus(hour.times(3600000)).div(60000).floor();
            second = totalMs.minus(hour.times(3600000)).minus(minute.times(60000)).div(1000).floor();
            millisecond = totalMs.minus(hour.times(3600000)).minus(minute.times(60000)).minus(second.times(1000)).floor();

            return [padLeadingZero(hour.toNumber(), 2), padLeadingZero(minute.toNumber(), 2), padLeadingZero(second.toNumber(), 2), padLeadingZero(millisecond.toNumber(), 3)];
        }

        function getTime(astrodate) {
            var jd1970 = bignumber(2440587.5),
                julianDay = bignumber(astrodate.julianDay());

            return julianDay.minus(jd1970).times(86400000).round().toString();
        }

        // DeltaT
        //http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
        function deltaTime(struct, canonCorrection) {
            var year = bignumber(struct.year),
                month = bignumber(struct.month),
                y = year.plus(month.minus(0.5).div(12)),
                u,
                t,
                r;

            if (year.gte(-500) && year.lte(2150)) {
                if (year.lt(500)) {
                    u = y.div(100);
                    r = bignumber(10583.6).minus(u.times(1014.41)).plus(u.pow(2).times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4).times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6).times(0.0090316521));
                } else if (year.lt(1600)) {
                    u = y.minus(1000).div(100);
                    r = bignumber(1574.2).minus(u.times(556.01)).plus(u.pow(2).times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4).times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6).times(0.0083572073));
                } else if (year.lt(1700)) {
                    t = y.minus(1600);
                    r = bignumber(120).minus(t.times(0.9808)).minus(t.pow(2).times(0.01532)).plus(t.pow(3).div(7129));
                } else if (year.lt(1800)) {
                    t = y.minus(1700);
                    r = bignumber(8.83).plus(t.times(0.1603)).minus(t.pow(2).times(0.0059285)).plus(t.pow(3).times(0.00013336)).minus(t.pow(4).div(1174000));
                } else if (year.lt(1860)) {
                    t = y.minus(1800);
                    r = bignumber(13.72).minus(t.times(0.332447)).plus(t.pow(2).times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4).times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6).times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
                } else if (year.lt(1900)) {
                    t = y.minus(1860);
                    r = bignumber(7.62).plus(t.times(0.5737)).minus(t.pow(2).times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4).times(0.0004473624)).plus(t.pow(5).div(233174));
                } else if (year.lt(1920)) {
                    t = y.minus(1900);
                    r = bignumber(-2.79).plus(t.times(1.494119)).minus(t.pow(2).times(0.0598939)).plus(t.pow(3).times(0.0061966)).minus(t.pow(4).times(0.000197));
                } else if (year.lt(1941)) {
                    t = y.minus(1920);
                    r = bignumber(21.20).plus(t.times(0.84493)).minus(t.pow(2).times(0.076100)).plus(t.pow(3).times(0.0020936));
                } else if (year.lt(1961)) {
                    t = y.minus(1950);
                    r = bignumber(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233)).plus(t.pow(3).div(2547));
                } else if (year.lt(1986)) {
                    t = y.minus(1975);
                    r = bignumber(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260)).minus(t.pow(3).div(718));
                } else if (year.lt(2005)) {
                    t = y.minus(2000);
                    r = bignumber(63.86).plus(t.times(0.3345)).minus(t.pow(2).times(0.060374)).plus(t.pow(3).times(0.0017275)).plus(t.pow(4).times(0.000651814)).plus(t.pow(5).times(0.00002373599));
                } else if (year.lt(2005)) {
                    t = y.minus(2000);
                    r = bignumber(62.92).plus(t.times(0.32217)).plus(t.pow(2).times(0.005589));
                } else {
                    r = bignumber(-20).plus(y.minus(1820).div(100).pow(2).times(32)).minus(y.neg().plus(2150).times(0.5628));
                }
            } else {
                u = y.minus(1820).div(100);
                r = u.pow(2).times(32).plus(-20);
            }

            if (canonCorrection && year.gte(1955) && year.lt(2005)) {
                r.plus(y.minus(1955).pow(2).times(-0.000012932));
            }

            return r.tostring();
        }

        function arrayToObject(arr, julian) {
            var length = arr.length,
                struct = {},
                temp = {},
                dim,
                //day,
                //time,
                fraction,
                index,
                element,
                number;

            if (length < 1 || length > lengthFullKeys) {
                //invalid
                return temp;
            }

            /*
            day = bignumber(arr[2]);
            dayFraction = day.fractionalPart();
            if (!dayFraction.equals(0)) {
                time = dayFractionToTime(dayFraction);
                arr[2] = day.floor().toNumber();
                for (index = 3; index < lengthFullKeys; index += 1) {
                    arr[index] = time[index - 3];
                }
            }
            */

            for (index = 0; index < lengthFullKeys; index += 1) {
                element = arr[index];
                if (isValidValue(element)) {
                    number = bignumber(element);
                    fraction = number.fractionalPart();
                    if (!fraction.isZero() && index !== lengthFullKeys - 1) {
                        //invalid
                        return temp;
                    }
                } else {
                    number = bignumber(NaN);
                }

                switch (index) {
                case 0:
                    if (!number.isFinite()) {
                        //invalid
                        return temp;
                    }

                    break;
                case 1:
                    if (isUndefined(element)) {
                        number = bignumber(1);
                    }

                    if (!inMonthRange(number)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 2:
                    struct = {
                        "year": struct.year,
                        "month": struct.month
                    };

                    if (julian === true) {
                        dim = daysInJulianMonth(struct);
                    } else {
                        dim = daysInGregorianMonth(struct);
                    }

                    if (isUndefined(element)) {
                        number = bignumber(1);
                    }

                    if (!inDayRange(number, dim)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 3:
                    if (isUndefined(element)) {
                        number = bignumber(0);
                    }

                    if (!inHourRange(number)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 4:
                    if (isUndefined(element)) {
                        number = bignumber(0);
                    }

                    if (!inMinuteRange(number, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 5:
                    if (isUndefined(element)) {
                        number = bignumber(0);
                    }

                    if (!inSecondRange(number, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 6:
                    if (isUndefined(element)) {
                        number = bignumber(0);
                    }

                    if (!inMillisecondRange(number, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 7:
                    if (isUndefined(element)) {
                        number = bignumber(0);
                    }

                    if (!inOffsetRange(number)) {
                        //invalid
                        return temp;
                    }

                    break;
                default:
                }

                struct[fullKeys[index]] = number.toNumber();
            }

            return struct;
        }

        function objectToArray(struct) {
            var arr = [],
                index,
                value;

            if (!isValid(struct)) {
                return arr;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                value = struct[fullKeys[index]];
                if (!isUndefined(value)) {
                    arr.push(value);
                }
            }

            return arr;
        }

        function dateToObject(date) {
            var struct = {},
                index,
                key,
                value;

            if (!isDateValid(date)) {
                return struct;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                key = fullKeys[index];
                value = date[dateMethods[index].replace("UTC", "")]();
                if (key === "month") {
                    value += 1;
                }

                struct[key] = value;
            }

            return struct;
        }

        function objectToDate(struct) {
            if (!isValid(struct)) {
                return new Date(NaN);
            }

            var date = new Date(),
                index,
                key,
                value,
                last = lengthFullKeys - 1,
                offset = struct[fullKeys[last]],
                time = fractionToTime(Math.abs(offset), "minute"),
                signOffset = 1;

            if (offset < 0) {
                signOffset = -1;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                key = fullKeys[index];
                value = struct[key];
                switch (key) {
                case "month":
                    value -= 1;
                    break;
                case "hour":
                    value += signOffset * time[0];
                    break;
                case "minute":
                    value += signOffset * time[1];
                    break;
                case "second":
                    value += signOffset * time[2];
                    break;
                case "millisecond":
                    value += signOffset * time[3];
                    break;
                default:
                }

                if (index < last) {
                    date[dateMethods[index].replace("get", "set")](value);
                }
            }

            return date;
        }

        function toISOString(astrodate) {
            if (!astrodate.isValid()) {
                return astrodate.toString();
            }

            var struct = astrodate.getter(),
                string = "",
                index = 0,
                count,
                padding,
                last,
                value,
                signYear;

            for (count = 0; count < 3; count += 1) {
                if (isUndefined(struct[fullKeys[count]])) {
                    index = 3;
                    break;
                }
            }

            for (last = lengthFullKeys - 1; index < last; index += 1) {
                value = struct[fullKeys[index]];
                padding = 2;
                if (index === 0) {
                    if (value >= 0) {
                        signYear = "+";
                    } else {
                        signYear = "-";
                    }

                    value = Math.abs(value);
                    padding = 4;
                } else if (index === 3) {
                    string += "T";
                } else if (index === 6) {
                    padding = 3;
                }

                if (index === 0 && (value >= 10000 || signYear === "-")) {
                    string += signYear;
                }

                string += padLeadingZero(value, padding);
                if (index < 2) {
                    string += "-";
                } else if (index > 2 && index < 5) {
                    string += ":";
                } else if (index === 5) {
                    string += ".";
                }
            }

            value = struct[fullKeys[lengthFullKeys - 1]];
            if (value === 0) {
                string += "Z";
            } else {
                if (value > 0) {
                    string += "+";
                } else {
                    string += "-";
                }

                value = fractionToTime(Math.abs(value), "minute");
                string += padLeadingZero(value[0], 2);
                string += ":";
                string += padLeadingZero(value[1], 2);
            }

            return string;
        }

        function setInvalid(thisObject) {
            return thisObject.setter("struct");
        }

        function ISO(isoString) {
            var struct;

            defineProperties(this, {
                "getter": {
                    "value": function () {
                        return extend({}, struct);
                    }
                },

                "setter": {
                    "value": function (isoStruct) {
                        if (isValid(isoStruct)) {
                            struct = extend({}, isoStruct);
                        } else {
                            struct = {};
                        }

                        return this;
                    }
                }
            });

            struct = this.parse(isoString).valueOf();
        }

        defineProperties(ISO.prototype, {
            "parse": {
                "value": function parse(isoString) {
                    var dateObject = {},
                        getTimezoneOffset,
                        signYear,
                        temp,
                        last,
                        date,
                        time,
                        offset,
                        signOffset,
                        character,
                        number,
                        index,
                        element,
                        length,
                        timeFraction,
                        found,
                        isTime,
                        value;

                    if (!isString(isoString)) {
                        return setInvalid(this);
                    }

                    getTimezoneOffset = new Date().getTimezoneOffset();
                    temp = trim(isoString).split(/[T ]/);
                    length = temp.length;
                    if (length < 1 || length > 2) {
                        return setInvalid(this);
                    }

                    element = temp[0];
                    if (length === 1) {
                        if (element.charAt(element.length - 1) === "Z" || element.indexOf(":") !== -1 || element.indexOf("+") > 1 || (element.charAt(0) !== "-" && element.charAt(4) !== "-" && element.split("-").length === 2)) {
                            temp.unshift("");
                            isTime = true;
                        } else {
                            if (getTimezoneOffset === 0) {
                                value = "Z";
                            } else {
                                value = fractionToTime(Math.abs(getTimezoneOffset), "minute");
                                value = padLeadingZero(value[0], 2) + ":" + padLeadingZero(value[1], 2);
                                if (getTimezoneOffset < 0) {
                                    value = "-" + value;
                                } else {
                                    value = "+" + value;
                                }
                            }

                            temp.push("00:00:00.000" + value);
                            isTime = false;
                        }
                    } else {
                        if (!element.length) {
                            isTime = true;
                        }
                    }

                    time = temp[1];
                    character = time.charAt(0);
                    if (!isDigit(character)) {
                        return setInvalid(this);
                    }

                    if (!isTime) {
                        date = temp[0];
                        character = date.charAt(0);
                        if (!isDigit(character)) {
                            if (character === "+" || character === "-") {
                                signYear = character;
                            } else {
                                return setInvalid(this);
                            }

                            date = date.slice(1);
                        }

                        if (date.indexOf("-") === -1) {
                            temp = [];
                            length = date.length;
                            if (length >= 8) {
                                if (length >= 9 && isUndefined(signYear)) {
                                    return setInvalid(this);
                                }

                                temp[0] = date.slice(0, length - 4);
                                temp[1] = date.slice(length - 4, length - 2);
                                temp[2] = date.slice(length - 2);
                            } else {
                                return setInvalid(this);
                            }
                        } else {
                            temp = date.split("-");
                        }

                        length = temp.length;
                        if (length < 2 || length > 3) {
                            return setInvalid(this);
                        }

                        if (length === 2) {
                            temp.push("01");
                        }

                        date = {};
                        for (index = 0; index < 3; index += 1) {
                            element = temp[index];
                            length = element.length;
                            number = intToNumber(element);
                            switch (index) {
                            case 0:
                                if (length < 4 || (signYear === "+" && length === 4) || (length > 4 && signYear !== "+" && signYear !== "-") || !isFinite(number)) {
                                    return setInvalid(this);
                                }

                                if (signYear === "-") {
                                    number *= -1;
                                }

                                break;
                            case 1:
                                if (length !== 2 || !inMonthRange(number)) {
                                    return setInvalid(this);
                                }

                                break;
                            case 2:
                                if (length !== 2 || !inDayRange(number, daysInGregorianMonth(date))) {
                                    return setInvalid(this);
                                }

                                break;
                            default:
                                return setInvalid(this);
                            }

                            date[fullKeys[index]] = number;
                        }
                    }

                    last = time.length - 1;
                    character = time.charAt(last);
                    if (!isDigit(character)) {
                        if (character === "Z") {
                            time = time.slice(0, last) + "+00";
                        } else {
                            return setInvalid(this);
                        }
                    }

                    temp = time.split(/[\-+]/);
                    length = temp.length;
                    if (length < 1 || length > 2) {
                        return setInvalid(this);
                    }

                    if (length === 1) {
                        if (getTimezoneOffset === 0) {
                            value = "00";
                        } else {
                            value = fractionToTime(Math.abs(getTimezoneOffset), "minute");
                            value = padLeadingZero(value[0], 2) + ":" + padLeadingZero(value[1], 2);
                        }

                        temp.push(value);
                    }

                    if (time.indexOf("-") !== -1) {
                        signOffset = -1;
                    } else {
                        signOffset = 1;
                    }

                    offset = temp[1].split(":");
                    length = offset.length;
                    if (length < 1 || length > 2) {
                        return setInvalid(this);
                    }

                    if (length === 1) {
                        element = offset[0];
                        switch (offset[0].length) {
                        case 4:
                            offset[0] = element.slice(0, 2);
                            offset[1] = element.slice(2);
                            break;
                        case 2:
                            offset[0] = element;
                            offset[1] = "00";
                            break;
                        default:
                            return setInvalid(this);
                        }
                    }

                    number = intToNumber(offset[0]);
                    if (!inHourRange(number)) {
                        return setInvalid(this);
                    }

                    offset[0] = number;
                    number = intToNumber(offset[1]);
                    if (!inMinuteRange(number, offset[0])) {
                        return setInvalid(this);
                    }

                    offset[1] = number;
                    if (signOffset === -1 && offset[0] === 0 && offset[1] === 0) {
                        return setInvalid(this);
                    }

                    time = temp[0];
                    if (time.indexOf(".") !== -1 || time.indexOf(",") !== -1) {
                        temp = time.split(/[\.,]/);
                        element = temp[1];
                        if (temp.length !== 2 || element.split(":").length !== 1) {
                            return setInvalid(this);
                        }

                        time = temp[0];
                        timeFraction = "0." + temp[1];
                        found = true;
                    } else {
                        timeFraction = "";
                        found = false;
                    }

                    if (time.indexOf(":") === -1) {
                        temp = [];
                        switch (time.length) {
                        case 6:
                            temp[0] = time.slice(0, 2);
                            temp[1] = time.slice(2, 4);
                            temp[2] = time.slice(4);
                            break;
                        case 4:
                            temp[0] = time.slice(0, 2);
                            temp[1] = time.slice(2);
                            break;
                        case 2:
                            temp[0] = time;
                            break;
                        default:
                            return setInvalid(this);
                        }
                    } else {
                        temp = time.split(":");
                    }

                    length = temp.length;
                    if (length < 1 || length > 3) {
                        return setInvalid(this);
                    }

                    if (found) {
                        temp = temp.concat(fractionToTime(timeFraction, fullKeys[length + 2]).slice(length));
                    } else {
                        if (length < 2) {
                            temp.push("00");
                        }

                        if (length < 3) {
                            temp.push("00");
                        }

                        if (length < 4) {
                            temp.push("000");
                        }
                    }

                    time = {};
                    found = false;
                    for (index = 0; index < 4; index += 1) {
                        number = intToNumber(temp[index]);
                        switch (index) {
                        case 0:
                            if (!inHourRange(number)) {
                                return setInvalid(this);
                            }

                            break;
                        case 1:
                            if (!inMinuteRange(number, time.hour)) {
                                return setInvalid(this);
                            }

                            break;
                        case 2:
                            if (!inSecondRange(number, time.hour)) {
                                return setInvalid(this);
                            }

                            break;
                        case 3:
                            if (!inMillisecondRange(number, time.hour)) {
                                return setInvalid(this);
                            }

                            break;
                        default:
                            return setInvalid(this);
                        }

                        time[fullKeys[index + 3]] = number;
                    }

                    if (!isTime) {
                        extend(dateObject, date);
                    }

                    time[fullKeys[lengthFullKeys - 1]] = signOffset * (offset[0] * 60  + offset[1]);
                    extend(dateObject, time);
                    return this.setter(dateObject);
                }
            },

            "isValid": {
                "value": function () {
                    return isValid(this.getter());
                }
            },

            "toString": {
                "value": function () {
                    var struct = this.getter(),
                        strArray,
                        index,
                        prop;

                    if (!isValid(struct)) {
                        return "Invalid Date";
                    }

                    strArray = [];
                    for (index = 0; index < lengthFullKeys; index += 1) {
                        prop = fullKeys[index];
                        strArray.push(prop + ":" + struct[prop]);
                    }

                    return strArray.join(",");
                }
            },

            "valueOf": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return struct;
                }
            },

            "toArray": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return objectToArray(struct);
                }
            }
        });

        function timeTo(struct, unit) {
            var hour = bignumber(struct.hour),
                minute = bignumber(struct.minute),
                second = bignumber(struct.second),
                millisecond = bignumber(struct.millisecond),
                value;

            switch (AstroDate.normaliseUnits(unit)) {
            case "day":
                value = hour.div(24).plus(minute.div(1440)).plus(second.div(86400)).plus(millisecond.div(86400000));
                break;
            case "hour":
                value = hour.plus(minute.div(60)).plus(second.div(3600)).plus(millisecond.div(3600000));
                break;
            case "minute":
                value = hour.times(60).plus(minute).plus(second.div(60)).plus(millisecond.div(60000));
                break;
            case "second":
                value = hour.times(3600).plus(minute.times(60)).plus(second).plus(millisecond.div(1000));
                break;
            case "millisecond":
                value = hour.times(3600000).plus(minute.times(60000)).plus(second.times(1000)).plus(millisecond);
                break;
            default:
                value = NaN;
            }

            return value.toString();
        }

        function gregorianToJd(struct) {
            var a = bignumber(1721424.5),
                b = bignumber(struct.year).minus(1),
                c = b.times(365),
                d = b.div(4).floor(),
                e = b.div(100).floor().neg(),
                f = b.div(400).floor(),
                g = bignumber(struct.month).times(367).minus(362).div(12).floor(),
                h = 0,
                jd;

            if (struct.month > 2) {
                h = -2 + isGregorianLeapYear(struct);
            }

            jd = a.plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, "day"));

            return jd.toString();
        }

        function julianToJd(struct) {
            if (struct.year === 0) {
                return "NaN";
            }

            if (struct.year < 1) {
                struct.year += 1;
            }

            if (struct.month <= 2) {
                struct.year -= 1;
                struct.month += 12;
            }

            var a = bignumber(struct.year).plus(4716).times(365.25).floor(),
                b = bignumber(struct.month).plus(1).times(30.6001).floor(),
                jd = a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, "day"));

            return jd.toString();
        }

        function jdToGregorian(julianDay) {
            var struct = {},
                jd,
                time,
                a,
                b,
                c,
                d,
                e;

            if (!isValidValue(julianDay)) {
                return struct;
            }

            jd = bignumber(julianDay).plus(0.5);
            time = dayFractionToTime(jd.fractionalPart());
            a = jd.plus(68569).floor();
            b = a.times(4).div(146097).floor();
            a = a.minus(b.times(146097).plus(3).div(4).floor());
            c = a.plus(1).times(4000).div(1461001).floor();
            a = a.minus(c.times(1461).div(4).floor()).plus(31);
            d = a.times(80).div(2447).floor();
            e = a.minus(d.times(2447).div(80).floor());
            a = d.div(11).floor();
            d = d.plus(2).minus(a.times(12));
            c = b.minus(49).times(100).plus(c).plus(a).floor();

            struct[fullKeys[0]] = c.toNumber();
            struct[fullKeys[1]] = d.toNumber();
            struct[fullKeys[2]] = e.toNumber();
            struct[fullKeys[3]] = time[0];
            struct[fullKeys[4]] = time[1];
            struct[fullKeys[5]] = time[2];
            struct[fullKeys[6]] = time[3];
            struct[fullKeys[7]] = 0;

            return struct;
        }

        function jdToJulian(julianDay) {
            var struct = {},
                a,
                b,
                c,
                d,
                e,
                g,
                z,
                year,
                month,
                day,
                time;

            if (!isValidValue(julianDay)) {
                return struct;
            }

            z = bignumber(julianDay).plus(0.5);
            a = z.floor();
            b = a.plus(1524);
            c = b.minus(122.1).div(365.25).floor();
            d = c.times(365.25).floor();
            g = b.minus(d);
            e = g.div(30.6001).floor();

            day = g.minus(e.times(30.6001).floor());
            if (e.lt(14)) {
                month = e.minus(1);
            } else {
                month = e.minus(13);
            }

            if (month.gt(2)) {
                year = c.minus(4716);
            } else {
                year = c.minus(4715);
            }

            /*  If year is less than 1, subtract one to convert from
                a zero based date system to the common era system in
                which the year -1 (1 BCE) is followed by year 1 (1 CE).  */
            if (year.lt(1)) {
                year = year.minus(1);
            }

            time = dayFractionToTime(z.fractionalPart());
            struct[fullKeys[0]] = year.toNumber();
            struct[fullKeys[1]] = month.toNumber();
            struct[fullKeys[2]] = day.toNumber();
            struct[fullKeys[3]] = time[0];
            struct[fullKeys[4]] = time[1];
            struct[fullKeys[5]] = time[2];
            struct[fullKeys[6]] = time[3];
            struct[fullKeys[7]] = 0;

            return struct;
        }

        function gregorianToJulian(struct) {
            return jdToJulian(gregorianToJd(struct));
        }

        function julianToGregorian(struct) {
            return jdToGregorian(julianToJd(struct));
        }

        function gregorianEaster(struct) {
            var year = bignumber(struct.year),
                a = year.mod(19),
                b = year.div(100).floor(),
                c = year.mod(100).floor(),
                d = b.div(4),
                e = b.mod(4),
                f = b.plus(8).div(25).floor(),
                g = b.minus(f).plus(1).div(3).floor(),
                h = bignumber(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30),
                i = c.div(4).floor(),
                k = c.mod(4),
                l = bignumber(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7),
                m = a.plus(h.times(11)).plus(l.times(22)).div(451).floor(),
                n = h.plus(l).minus(m.times(7)).plus(114);

            return new AstroDate([year.toNumber(), n.div(31).floor().toNumber(), n.mod(31).plus(1).toNumber()]);
        }

        function julianEaster(struct) {
            var year = bignumber(struct.year),
                a = year.mod(4),
                b = year.mod(7),
                c = year.mod(19),
                d = c.times(19).plus(15).mod(30),
                e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7),
                f = d.plus(e).plus(114);

            return new AstroDate([year.toNumber(), f.div(31).floor().minus(1).toNumber(), f.mod(31).plus(1).toNumber()]);
        }

        AstroDate = function () {
            var args = arguments,
                argsLength = args.length,
                isJulian = false,
                struct,
                arg;

            defineProperties(this, {
                "getter": {
                    "value": function (key) {
                        if (isString(key) && key === "isJulian") {
                            return isJulian;
                        }

                        return extend({}, struct);
                    }
                },

                "setter": {
                    "value": function (key, value) {
                        var unit = AstroDate.normaliseUnits(key),
                            number;

                        if (unitsLookup[unit]) {
                            number = +value;
                            if (!isValidValue(value)) {
                                if (number === 0 || isNaN(number)) {
                                    number = NaN;
                                }

                                if (unit !== "year" && unit !== "month" && unit !== "day") {
                                    number = number || 0;
                                }
                            }

                            struct[unit] = number;
                        } else if (isArray(key)) {
                            struct = arrayToObject(key, false);
                        } else if (AstroDate.isAstroDate(key)) {
                            struct = key.v.getter();
                            isJulian = key.isJulian();
                        } else if (isDate(key)) {
                            struct = dateToObject(key);
                        } else if (isString(key)) {
                            if (key === "struct") {
                                if (isValid(value)) {
                                    struct = extend({}, value);
                                } else {
                                    struct = {};
                                    return this;
                                }
                            } else if (key === "isJulian") {
                                isJulian = !!value;
                            } else {
                                struct = new ISO(key).valueOf();
                            }
                        } else {
                            throw new SyntaxError();
                        }

                        return this;
                    }
                }
            });

            switch (argsLength) {
            case 0:
                struct = dateToObject(new Date());
                break;
            case 1:
                arg = args[0];
                if (AstroDate.isAstroDate(arg)) {
                    struct = extend({}, arg.valueOf());
                    isJulian = arg.isJulian();
                } else if (isArray(arg)) {
                    struct = arrayToObject(arg, false);
                } else if (isDate(arg)) {
                    struct = dateToObject(arg);
                } else {
                    if (isNumber(arg)) {
                        struct = dateToObject(new Date(arg));
                    } else if (isString(arg)) {
                        struct = new ISO(arg).valueOf();
                    } else if (isObject(arg)) {
                        if (isValid(arg)) {
                            struct = extend({}, arg);
                        }
                    } else {
                        throw new TypeError();
                    }
                }

                break;
            case 2:
                arg = args[0];
                if (isString(arg)) {
                    arg = trim(arg).toLowerCase();
                    if (arg === "j") {
                        arg = args[1];
                        if (isArray(arg)) {
                            struct = julianToGregorian(arrayToObject(arg, true));
                        } else if (isObject(arg)) {
                            if (isValid(arg, true)) {
                                struct = julianToGregorian(arg);
                            }
                        }
                    } else if (arg === "g") {
                        arg = args[1];
                        if (isArray(arg)) {
                            struct = arrayToObject(arg, false);
                        } else if (isObject(arg)) {
                            if (isValid(arg)) {
                                struct = extend({}, arg);
                            }
                        }
                    } else {
                        throw new SyntaxError();
                    }
                } else {
                    throw new TypeError();
                }

                break;
            default:
                throw new SyntaxError();
            }

            if (!isValid(struct)) {
                struct = {};
            }
        };

        defineProperties(AstroDate.prototype, {
            "julian": {
                "value": function () {
                    return this.setter("isJulian", true);
                }
            },

            "gregorian": {
                "value": function () {
                    return this.setter("isJulian", false);
                }
            },

            "isJulian": {
                "value": function () {
                    return this.getter("isJulian");
                }
            },

            "isValid": {
                "value": function () {
                    return isValid(this.getter());
                }
            },

            "parse": {
                "value": function (isoString) {
                    if (typeof isoString === "string") {
                        return this.setter("struct", new ISO(isoString).valueOf());
                    }

                    throw new SyntaxError();
                }
            },

            "toString": {
                "value": function () {
                    var struct = this.getter(),
                        str,
                        value,
                        jd,
                        type;

                    if (!isValid(struct)) {
                        return "Invalid Date";
                    }

                    jd = gregorianToJd(struct);
                    str = dayOfWeek(jd).slice(0, 3) + ", ";
                    if (this.isJulian()) {
                        struct = jdToJulian(jd);
                        type = " (OS)";
                    } else {
                        type = " (NS)";
                    }

                    str += struct.day + " ";
                    str += monthNames[struct.month - 1].slice(0, 3) + " ";
                    str += padLeadingZero(Math.abs(struct.year), 4) + " ";
                    if (struct.year < 0) {
                        str += "BCE ";
                    } else {
                        str += "CE ";
                    }

                    str += padLeadingZero(struct.hour, 2) + ":";
                    str += padLeadingZero(struct.minute, 2) + ":";
                    str += padLeadingZero(struct.second, 2) + ".";
                    str += padLeadingZero(struct.millisecond, 3);
                    value = struct[fullKeys[lengthFullKeys - 1]];
                    if (value === 0) {
                        str += " GMT";
                    } else {
                        if (value > 0) {
                            str += " +";
                        } else {
                            str += " -";
                        }

                        value = fractionToTime(Math.abs(value), "minute");
                        str += padLeadingZero(value[0], 2);
                        str += padLeadingZero(value[1], 2);
                    }

                    return str + type;
                }
            },

            "toISOString": {
                "value": function () {
                    return toISOString(this);
                }
            },

            "valueOf": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        struct = gregorianToJulian(struct);
                    }

                    return struct;
                }
            },

            "clone": {
                "value": function () {
                    return new AstroDate(this);
                }
            },

            "array": {
                "value": function (astroArray) {
                    var struct,
                        isJulian = this.isJulian();

                    if (isUndefined(astroArray)) {
                        struct = this.getter();
                        if (!isValid(struct)) {
                            return local_undefined;
                        }

                        if (isJulian) {
                            struct = gregorianToJulian(struct);
                        }

                        return objectToArray(struct);
                    }

                    return this.setter("struct", arrayToObject(astroArray, isJulian));
                }
            },

            "date": {
                "value": function (date) {
                    if (isUndefined(date)) {
                        return objectToDate(this.getter());
                    }

                    return this.setter(date);
                }
            },

            "getTime": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return getTime(this);
                }
            },

            "deltaTime": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return deltaTime(struct);
                }
            },

            "timeTo": {
                "value": function (unit) {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return timeTo(struct, unit);
                }
            },

            "julianDay": {
                "value": function (julianDay) {
                    if (isUndefined(julianDay)) {
                        return gregorianToJd(this.getter());
                    }

                    return this.setter("struct", jdToGregorian(julianDay));
                }
            },

            "easter": {
                "value": function () {
                    var struct = this.getter(),
                        astrodate;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        astrodate = julianEaster(gregorianToJulian(struct));
                    } else {
                        astrodate = gregorianEaster(struct);
                    }

                    return astrodate;
                }
            },

            "monthOfYear": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        struct = gregorianToJulian(struct);
                    }

                    return monthNames[struct.month - 1];
                }
            },

            "dayOfWeek": {
                "value": function () {
                    return dayOfWeek(this.julianDay());
                }
            },

            "isLeapYear": {
                "value": function () {
                    var struct = this.getter(),
                        leapYear;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        struct = gregorianToJulian(struct);
                        leapYear = isJulianLeapYear(struct);
                    } else {
                        leapYear = isGregorianLeapYear(struct);
                    }

                    return leapYear;
                }
            },

            "daysInYear": {
                "value": function () {
                    var struct = this.getter(),
                        days;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        days = daysInJulianYear(gregorianToJulian(struct));
                    } else {
                        days = daysInGregorianYear(struct);
                    }

                    return days;
                }
            },

            "daysInMonth": {
                "value": function () {
                    var struct = this.getter(),
                        days;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        days = daysInJulianMonth(gregorianToJulian(struct));
                    } else {
                        days = daysInGregorianMonth(struct);
                    }

                    return days;
                }
            },

            "dayOfYear": {
                "value": function () {
                    var struct = this.getter(),
                        doy;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    if (this.isJulian()) {
                        doy = dayOfJulianYear(gregorianToJulian(struct));
                    } else {
                        doy = dayOfGregorianYear(struct);
                    }

                    return doy;
                }
            },

            "json": {
                "value": function (jsonString) {
                    var struct,
                        prop,
                        propArray,
                        str;

                    if (isUndefined(jsonString)) {
                        struct = this.getter();
                        if (isFunction(JSON.stringify)) {
                            str = JSON.stringify(struct);
                        } else {
                            propArray = [];
                            for (prop in struct) {
                                if (hasOwnProperty(struct, prop)) {
                                    propArray.push('"' + prop + '":' + struct[prop]);
                                }
                            }

                            str = "{" + propArray.join(",") + "}";
                        }

                        return str;
                    }

                    if (isString(jsonString)) {
                        if (isFunction(JSON.parse)) {
                            struct = JSON.parse(jsonString);
                        } else {
                            /*jslint evil: true */
                            struct = (new Function("return" + jsonString)());
                            /*jslint evil:   false */
                        }

                        if (!isValid(struct)) {
                            throw new SyntaxError();
                        }

                        return this.setter("struct", struct);
                    }

                    throw new TypeError();
                }
            }
        });

        defineProperties(AstroDate, {
            "version": {
                "value": VERSION
            },

            "ISO": {
                "value": ISO
            },

            "bignumber": {
                "value": bignumber
            },

            "BigNumber": {
                "value": BigNumber
            },

            "normaliseUnits": {
                "value": function (unitString) {
                    var units;

                    if (isString(unitString)) {
                        unitString = trim(unitString);
                        if (unitString.length) {
                            units = unitAliases[unitString] || unitString.toLowerCase().replace(/([\S\s])s$/, "$1");
                        }
                    }

                    return units;
                }
            },

            "isAstroDate": {
                "value": function (inputArg) {
                    return isObject(inputArg) && (instanceOf(inputArg, AstroDate) || inputArg instanceof AstroDate);
                }
            },

            "dayFractionToTime": {
                "value": function (dayFraction) {
                    return dayFractionToTime(dayFraction);
                }
            }
        });

        return AstroDate;
    }));
}(this, void(0)));
