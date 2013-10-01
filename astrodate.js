/*global requirejs, require, module */

/* AstroDate v0.2.1
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
            isBigNumber;

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
                        bn = new BigNumber(NaN);
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
                            return new BigNumber(NaN);
                        }

                        if (isUndefined(exponentialAt)) {
                            exponentialAt = BigNumber.config().EXPONENTIAL_AT[1];
                        }

                        if (!BigNumber.isBigNumber(exponentialAt)) {
                            exponentialAt = new BigNumber(exponentialAt).floor();
                        } else {
                            exponentialAt = exponentialAt.floor();
                        }

                        if (!exponentialAt.isFinite() || exponentialAt.lt(0)) {
                            exponentialAt = new BigNumber(BigNumber.config().EXPONENTIAL_AT[1]);
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

                            factorialLookup[n] = new BigNumber(1);
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

            "padLeadingZero": {
                "value": function (size) {
                    var numString = this.toString(),
                        bnSize = new BigNumber(size).floor(),
                        length,
                        i;

                    if (!bnSize.isFinite() || bnSize.lt(0)) {
                        size = 0;
                    }

                    for (i = 0, length = size - numString.length; i < length; i += 1) {
                        numString = "0" + numString;
                    }

                    return numString;
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
                    return new BigNumber(number).integerPart();
                }
            },

            "fractionalPart": {
                "value": function (number) {
                    return new BigNumber(number).fractionalPart();
                }
            },

            "difference": {
                "value": function (number1, number2) {
                    return new BigNumber(number1).difference(number2);
                }
            },

            "factorial": {
                "value": function (number, exponentialAt) {
                    return new BigNumber(number).factorial(exponentialAt);
                }
            },

            "pi": {
                "value": (function () {
                    var piLookup = {};

                    return function (decimalPlaces) {
                        if (!isNumber(decimalPlaces) || !isFinite(decimalPlaces) || decimalPlaces < 0) {
                            decimalPlaces = BigNumber.config().DECIMAL_PLACES;
                        } else {
                            decimalPlaces = Math.floor(decimalPlaces);
                        }

                        var lookupProp = decimalPlaces.toString(),
                            config,
                            previousConfig,
                            k = 0,
                            prop,
                            sum,
                            ta,
                            tb,
                            divisor,
                            a,
                            b;

                        if (!piLookup[lookupProp]) {
                            config = BigNumber.config();
                            previousConfig = {};
                            for (prop in config) {
                                if (hasOwnProperty(config, prop)) {
                                    previousConfig[prop] = config[prop];
                                }
                            }

                            BigNumber.config({
                                DECIMAL_PLACES : decimalPlaces,
                                ROUNDING_MODE : 4,
                                EXPONENTIAL_AT : [-7, 20],
                                RANGE : [-1000000000, 1000000000],
                                ERRORS : true
                            });

                            sum = new BigNumber(0);
                            a = ta = new BigNumber(16).div(5);
                            b = tb = new BigNumber(-4).div(239);
                            while (!a.equals(b)) {
                                divisor = k * 2 + 1;
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

                            piLookup[lookupProp] = sum;
                        }

                        return piLookup[lookupProp];
                    };
                }())
            },

            "toRadians": {
                "value": function (number, decimalPlacesPI) {
                    return new BigNumber(number).toRadians(decimalPlacesPI);
                }
            },

            "normaliseAngle": {
                "value": function (angle) {
                    var newAngle = new BigNumber(angle);

                    while (newAngle.lt(-360)) {
                        newAngle = newAngle.plus(360);
                    }

                    while (newAngle.gt(360)) {
                        newAngle = newAngle.minus(360);
                    }

                    return newAngle;
                }
            },

            "toPositiveAngle": {
                "value": function (angle) {
                    var newAngle = BigNumber.normaliseAngle(angle);

                    if (newAngle < 0) {
                        newAngle = newAngle.plus(360);
                    }

                    return newAngle;
                }
            },

            "sin": {
                "value": (function () {
                    var sineLookup = {};

                    return function (angle) {
                        var newAngle = BigNumber.normaliseAngle(angle),
                            lookupProp = newAngle.toString(),
                            sum,
                            prev,
                            k,
                            mod,
                            fact,
                            i;

                        if (!sineLookup[lookupProp]) {
                            sum = newAngle;
                            prev = new BigNumber(0);
                            i = 1;
                            k = 3;
                            while (!sum.equals(prev)) {
                                prev = sum;
                                fact = BigNumber.factorial(k);
                                mod = i % 2 % 2;
                                if (mod === 1) {
                                    sum = sum.minus(newAngle.pow(k).div(fact));
                                } else {
                                    sum = sum.plus(newAngle.pow(k).div(fact));
                                }

                                i += 1;
                                k += 2;
                            }

                            sineLookup[lookupProp] = sum;
                        }

                        return sineLookup[lookupProp];
                    };
                }())
            }
        });

        isBigNumber = BigNumber.isBigNumber;

        function bignumber(inputArg) {
            if (!isNumber(inputArg) && !isString(inputArg) && !isBigNumber(inputArg)) {
                inputArg = NaN;
            }

            return new BigNumber(inputArg);
        }

        function isDateValid(dateObject) {
            return isDate(dateObject) && !isNaN(dateObject.getTime());
        }

        function isDigit(character) {
            var digit = false,
                charCode;

            if (isString(character) && character.length === 1) {
                charCode = character.charCodeAt(0);
                digit = charCode >= 48 && charCode <= 57;
            }

            return digit;
        }

        function intToNumber(input) {
            var number = input;

            if (!number.isFinite(number) || !number.fractionalPart().isZero()) {
                number = bignumber(NaN);
            }

            return number;
        }

        function isGregorianLeapYear(struct) {
            return struct.year.mod(400).isZero() || (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
        }

        function isJulianLeapYear(struct) {
            var modTest = 3;

            if (struct.year.gt(0)) {
                modTest = 0;
            }

            return struct.year.mod(4).equals(modTest);
        }

        function daysInGregorianMonth(struct) {
            var days;

            if (struct.month.eq(2)) {
                days = bignumber(28);
                if (isGregorianLeapYear(struct)) {
                    days = days.plus(1);
                }
            } else {
                days = struct.month.minus(1).mod(7).mod(2).neg().plus(31);
            }

            return days;
        }

        function daysInJulianMonth(struct) {
            var days = bignumber(28);

            if (struct.month.eq(2) && isJulianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function daysInGregorianYear(struct) {
            var days = bignumber(365);

            if (isGregorianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function daysInJulianYear(struct) {
            var days = bignumber(365);

            if (isJulianLeapYear(struct)) {
                days = days.plus(1);
            }

            return days;
        }

        function inYearRange(year, julian) {
            return (julian !== true && year.isFinite()) || (julian === true && year.isFinite() && !year.isZero());
        }

        function inMonthRange(month) {
            return month.gt(0) && month.lte(13);
        }

        function inDayRange(day, dim) {
            return day.gt(0) && day.lte(dim);
        }

        function inHourRange(hour) {
            return hour.gte(0) && hour.lte(24);
        }

        function inMinuteRange(minute, hour) {
            return (hour.equals(24) && minute.isZero()) || (!hour.equals(24) && minute.gte(0) && minute.lt(60));
        }

        function inSecondRange(second, hour) {
            return (hour.equals(24) && second.isZero()) || (!hour.equals(24) && second.gte(0) && second.lt(60));
        }

        function inMillisecondRange(millisecond, hour) {
            return (hour.equals(24) && millisecond.isZero()) || (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
        }

        function inOffsetRange(offset) {
            return offset.gte(-1440) && offset.lte(1440);
        }

        function isValid(struct, julian) {
            var dim,
                index,
                bn;

            if (!isObject(struct)) {
                return false;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                bn = struct[fullKeys[index]];
                switch (index) {
                case 0:
                    if (!inYearRange(bn, julian)) {
                        return false;
                    }

                    break;
                case 1:
                    if (!inMonthRange(bn)) {
                        return false;
                    }

                    break;
                case 2:
                    if (julian === true) {
                        dim = daysInJulianMonth(struct);
                    } else {
                        dim = daysInGregorianMonth(struct);
                    }

                    if (!inDayRange(bn, dim)) {
                        return false;
                    }

                    break;
                case 3:
                    if (!inHourRange(bn)) {
                        return false;
                    }

                    break;
                case 4:
                    if (!inMinuteRange(bn, struct.hour)) {
                        return false;
                    }

                    break;
                case 5:
                    if (!inSecondRange(bn, struct.hour)) {
                        return false;
                    }

                    break;
                case 6:
                    if (!inMillisecondRange(bn, struct.hour)) {
                        return false;
                    }

                    break;
                case 7:
                    if (!inOffsetRange(bn)) {
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
            var k = 2;

            if (isGregorianLeapYear(struct)) {
                k = 1;
            }

            return struct.month.times(275).div(9).floor().minus(struct.month.plus(9).div(12).floor().times(k)).plus(struct.day).minus(30);
        }

        function dayOfJulianYear(struct) {
            var doy = struct.month.times(28).plus(struct.day);

            if (struct.month.gte(2) && isJulianLeapYear(struct)) {
                doy = doy.plus(1);
            }

            return doy;
        }

        function dayOfWeek(julianDay) {
            var day = bignumber(julianDay).plus(1.5).mod(7).floor();

            if (day.lt(0)) {
                day = day.plus(7);
            }

            return dayNames[day.toNumber()];
        }

        /*
        function dayFractionToTime(dayFraction) {
            var totalMs = bignumber(dayFraction).abs().times(86400000),
                hour = totalMs.div(3600000),
                minute = hour.fractionalPart().times(60),
                second = minute.fractionalPart().times(60),
                millisecond = second.fractionalPart().times(1000);

            return {"hour": hour.floor(), "minute": minute.floor(), "second": second.floor(), "millisecond": millisecond.floor()};
        }
        */

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

            return {"hour": hour, "minute": minute, "second": second, "millisecond": millisecond};
        }

        function getTime(astrodate) {
            return bignumber(astrodate.julianDay()).minus(2440587.5).times(86400000).round();
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
                index,
                element,
                bn;

            if (length < 1 || length > lengthFullKeys) {
                //invalid
                return temp;
            }

            for (index = 0; index < lengthFullKeys; index += 1) {
                element = arr[index];
                bn = bignumber(element);
                switch (index) {
                case 0:
                    if (!inYearRange(bn, julian)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 1:
                    if (isUndefined(element)) {
                        bn = bignumber(1);
                    }

                    if (!inMonthRange(bn)) {
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
                        bn = bignumber(1);
                    }

                    if (!inDayRange(bn, dim)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 3:
                    if (isUndefined(element)) {
                        bn = bignumber(0);
                    }

                    if (!inHourRange(bn)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 4:
                    if (isUndefined(element)) {
                        bn = bignumber(0);
                    }

                    if (!inMinuteRange(bn, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 5:
                    if (isUndefined(element)) {
                        bn = bignumber(0);
                    }

                    if (!inSecondRange(bn, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 6:
                    if (isUndefined(element)) {
                        bn = bignumber(0);
                    }

                    if (!inMillisecondRange(bn, struct.hour)) {
                        //invalid
                        return temp;
                    }

                    break;
                case 7:
                    if (isUndefined(element)) {
                        bn = bignumber(0);
                    }

                    if (!inOffsetRange(bn)) {
                        //invalid
                        return temp;
                    }

                    break;
                default:
                    return temp;
                }

                struct[fullKeys[index]] = bn;
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

        function objectToStruct(input) {
            var struct = {},
                prop;

            if (!isObject(input)) {
                return struct;
            }

            for (prop in input) {
                if (hasOwnProperty(input, prop)) {
                    struct[prop] = bignumber(input[prop]);
                }
            }

            return struct;
        }

        function structToObject(struct) {
            var newObject = {},
                prop;

            for (prop in struct) {
                if (hasOwnProperty(struct, prop)) {
                    newObject[prop] = struct[prop].toString();
                }
            }

            return newObject;
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
                value = bignumber(date[dateMethods[index].replace("UTC", "")]());
                if (key === "month") {
                    value = value.plus(1);
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
                time = fractionToTime(offset.abs(), "minute"),
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
                default:
                    value = value + time[key].times(signOffset);
                }

                if (index < last) {
                    date[dateMethods[index].replace("get", "set")](value);
                }
            }

            return date;
        }

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
                value = bignumber(NaN);
            }

            return value;
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
                jd = bignumber(julianDay),
                time,
                a,
                b,
                c,
                d,
                e;

            if (!jd.isFinite()) {
                return struct;
            }

            jd = jd.plus(0.5);
            time = fractionToTime(jd.fractionalPart(), "day");
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

            struct[fullKeys[0]] = c;
            struct[fullKeys[1]] = d;
            struct[fullKeys[2]] = e;
            struct[fullKeys[3]] = time.hour;
            struct[fullKeys[4]] = time.minute;
            struct[fullKeys[5]] = time.second;
            struct[fullKeys[6]] = time.millisecond;
            struct[fullKeys[7]] = bignumber(0);

            return struct;
        }

        function jdToJulian(julianDay) {
            var struct = {},
                jd = bignumber(julianDay),
                a,
                b,
                c,
                d,
                e,
                g,
                year,
                month,
                day,
                time;

            if (!jd.isFinite()) {
                return struct;
            }

            jd = jd.plus(0.5);
            a = jd.floor();
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

            time = fractionToTime(jd.fractionalPart(), "day");
            struct[fullKeys[0]] = year;
            struct[fullKeys[1]] = month;
            struct[fullKeys[2]] = day;
            struct[fullKeys[3]] = time.hour;
            struct[fullKeys[4]] = time.minute;
            struct[fullKeys[5]] = time.second;
            struct[fullKeys[6]] = time.millisecond;
            struct[fullKeys[7]] = bignumber(0);

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

            return new AstroDate([year, n.div(31).floor(), n.mod(31).plus(1)]);
        }

        function julianEaster(struct) {
            var year = bignumber(struct.year),
                a = year.mod(4),
                b = year.mod(7),
                c = year.mod(19),
                d = c.times(19).plus(15).mod(30),
                e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7),
                f = d.plus(e).plus(114);

            return new AstroDate([year, f.div(31).floor().minus(1), f.mod(31).plus(1)]);
        }

        function toISOString(date) {
            if (!date.isValid()) {
                return date.toString();
            }

            var struct = date.getter(),
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
                    if (value.gte(0)) {
                        signYear = "+";
                    } else {
                        signYear = "-";
                    }

                    value = value.abs();
                    padding = 4;
                } else if (index === 3) {
                    string += "T";
                } else if (index === 6) {
                    padding = 3;
                }

                if (index === 0 && (value.gte(10000) || signYear === "-")) {
                    string += signYear;
                }

                string += value.padLeadingZero(padding);
                if (index < 2) {
                    string += "-";
                } else if (index > 2 && index < 5) {
                    string += ":";
                } else if (index === 5) {
                    string += ".";
                }
            }

            value = struct[fullKeys[lengthFullKeys - 1]];
            if (value.isZero()) {
                string += "Z";
            } else {
                if (value.gt(0)) {
                    string += "+";
                } else {
                    string += "-";
                }

                value = fractionToTime(value.abs(), "minute");
                string += value.hour.padLeadingZero(2);
                string += ":";
                string += value.minute.padLeadingZero(2);
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

            struct = this.parse(isoString).getter();
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
                        isTime,
                        value;

                    if (!isString(isoString)) {
                        return setInvalid(this);
                    }

                    getTimezoneOffset = bignumber(new Date().getTimezoneOffset());
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
                            if (getTimezoneOffset.isZero()) {
                                value = "Z";
                            } else {
                                value = fractionToTime(getTimezoneOffset.abs(), "minute");
                                value = value.hour.padLeadingZero(2) + ":" + value.minute.padLeadingZero(2);
                                if (getTimezoneOffset.lt(0)) {
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
                            number = intToNumber(bignumber(element));
                            switch (index) {
                            case 0:
                                if (length < 4 || (signYear === "+" && length === 4) || (length > 4 && signYear !== "+" && signYear !== "-") || !number.isFinite()) {
                                    return setInvalid(this);
                                }

                                if (signYear === "-") {
                                    number = number.neg();
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
                            value = value.hour.padLeadingZero(2) + ":" + value.minute.padLeadingZero(2);
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

                    number = intToNumber(bignumber(offset[0]));
                    if (!inHourRange(number)) {
                        return setInvalid(this);
                    }

                    offset[0] = number;
                    number = intToNumber(bignumber(offset[1]));
                    if (!inMinuteRange(number, offset[0])) {
                        return setInvalid(this);
                    }

                    offset[1] = number;
                    if (signOffset === -1 && offset[0].isZero() && offset[1].isZero()) {
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
                        timeFraction = bignumber("0." + temp[1]);
                    } else {
                        timeFraction = bignumber(0);
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

                    if (!timeFraction.isZero()) {
                        timeFraction = fractionToTime(timeFraction, fullKeys[length + 2]);
                        if (length < 2) {
                            temp.push(timeFraction.minute.padLeadingZero(2));
                        }

                        if (length < 3) {
                            temp.push(timeFraction.second.padLeadingZero(2));
                        }

                        if (length < 4) {
                            temp.push(timeFraction.millisecond.padLeadingZero(3));
                        }
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
                    for (index = 0; index < 4; index += 1) {
                        number = intToNumber(bignumber(temp[index]));
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

                    time[fullKeys[lengthFullKeys - 1]] = offset[0].times(60).plus(offset[1]).times(signOffset);
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
                    return toISOString(this);
                }
            },

            "valueOf": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    struct = structToObject(struct);

                    return struct;
                }
            },

            "toArray": {
                "value": function () {
                    var struct = this.getter(),
                        arr,
                        length,
                        index;

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    arr = objectToArray(struct);
                    for (index = 0, length = arr.length; index < length; index += 1) {
                        arr[index] = arr[index].toString();
                    }

                    return arr;
                }
            }
        });

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
                            valid = false,
                            bn,
                            dim;

                        if (unitsLookup[unit]) {
                            bn = bignumber(value);
                            switch (unit) {
                            case "year":
                                valid = inYearRange(bn, isJulian);
                                break;
                            case "month":
                                valid = inMonthRange(bn);
                                break;
                            case "day":
                                if (isJulian === true) {
                                    dim = daysInJulianMonth(struct);
                                } else {
                                    dim = daysInGregorianMonth(struct);
                                }

                                valid = inDayRange(bn, dim);
                                break;
                            case "hour":
                                valid = inHourRange(bn);
                                break;
                            case "minute":
                                valid = inMinuteRange(bn, struct.hour);
                                break;
                            case "second":
                                valid = inSecondRange(bn, struct.hour);
                                break;
                            case "millisecond":
                                valid = inMillisecondRange(bn, struct.hour);
                                break;
                            case "offset":
                                valid = inOffsetRange(bn);
                                break;
                            default:
                            }

                            if (valid) {
                                struct[unit] = bn;
                            } else {
                                struct = {};
                            }
                        } else if (isArray(key)) {
                            struct = arrayToObject(key, false);
                        } else if (AstroDate.isAstroDate(key)) {
                            struct = key.getter();
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
                                struct = new ISO(key).getter();
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
                    struct = extend({}, arg.getter());
                    isJulian = arg.isJulian();
                } else if (isArray(arg)) {
                    struct = arrayToObject(arg, false);
                } else if (isDate(arg)) {
                    struct = dateToObject(arg);
                } else {
                    if (isNumber(arg)) {
                        struct = dateToObject(new Date(arg));
                    } else if (isString(arg)) {
                        struct = new ISO(arg).getter();
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
                    if (isString(isoString)) {
                        return this.setter("struct", new ISO(isoString).getter());
                    }

                    throw new TypeError();
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
                    str += monthNames[struct.month.minus(1).toNumber()].slice(0, 3) + " ";
                    str += struct.year.abs().padLeadingZero(4) + " ";
                    if (struct.year.lt(0)) {
                        str += "BCE ";
                    } else {
                        str += "CE ";
                    }

                    str += struct.hour.padLeadingZero(2) + ":";
                    str += struct.minute.padLeadingZero(2) + ":";
                    str += struct.second.padLeadingZero(2) + ".";
                    str += struct.millisecond.padLeadingZero(3);
                    value = struct[fullKeys[lengthFullKeys - 1]];
                    if (value.isZero()) {
                        str += " GMT";
                    } else {
                        if (value.gt(0)) {
                            str += " +";
                        } else {
                            str += " -";
                        }

                        value = fractionToTime(value.abs(), "minute");
                        str += value.hour.padLeadingZero(2);
                        str += ":";
                        str += value.minute.padLeadingZero(2);
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

                    struct = structToObject(struct);

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
                        isJulian = this.isJulian(),
                        arr,
                        length,
                        index;

                    if (isUndefined(astroArray)) {
                        struct = this.getter();
                        if (!isValid(struct)) {
                            return local_undefined;
                        }

                        if (isJulian) {
                            struct = gregorianToJulian(struct);
                        }

                        arr = objectToArray(struct);
                        for (index = 0, length = arr.length; index < length; index += 1) {
                            arr[index] = arr[index].toString();
                        }

                        return arr;
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

                    return getTime(this).toString();
                }
            },

            "deltaTime": {
                "value": function () {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return deltaTime(struct).toString();
                }
            },

            "timeTo": {
                "value": function (unit) {
                    var struct = this.getter();

                    if (!isValid(struct)) {
                        return local_undefined;
                    }

                    return timeTo(struct, unit).toString();
                }
            },

            "julianDay": {
                "value": function (julianDay) {
                    if (isUndefined(julianDay)) {
                        return gregorianToJd(this.getter()).toString();
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

                    return days.toString();
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

                    return days.toString();
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

                    return doy.toString();
                }
            },

            "json": {
                "value": function (jsonString) {
                    var struct,
                        prop,
                        propArray,
                        str;

                    if (isUndefined(jsonString)) {
                        struct = this.valueOf();
                        if (isFunction(JSON.stringify)) {
                            str = JSON.stringify(struct);
                        } else {
                            propArray = [];
                            for (prop in struct) {
                                if (hasOwnProperty(struct, prop)) {
                                    propArray.push('"' + prop + '":"' + struct[prop] + '"');
                                }
                            }

                            str = "{" + propArray.join(",") + "}";
                        }

                        return str;
                    }

                    if (isString(jsonString)) {
                        if (isFunction(JSON.parse)) {
                            struct = objectToStruct(JSON.parse(jsonString));
                        } else {
                            /*jslint evil: true */
                            struct = objectToStruct(new Function("return" + jsonString)());
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
            }
        });

        return AstroDate;
    }));
}(this, void(0)));
