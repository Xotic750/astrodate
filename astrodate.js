/*global requirejs, require, module */

/* AstroDate
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
        bigNumberString = bigNumberFunc.toLowerCase();

    (function (name, definition) {
        if (typeof module === "object" && module !== null && typeof module.exports === "object") {
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

            // name should be removed when local tests are completed
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

        var VERSION = "0.3.2",
            //MAX_INTEGER = 9007199254740991,
            //MIN_INTEGER = -9007199254740991,
            baseObject = {},
            baseArray = [],
            baseString = "",
            toStringFN = baseObject.toString,
            fullKeys = [],
            shortNameLength = {},
            dayNames = [],
            monthNames = [],
            //j2000 = [2000, 1, 1, 11, 58, 55, 816],
            extend,
            indexOf,
            defineProperty,
            defineProperties,
            hasOwnProperty,
            getOwnPropertyDescriptor,
            isArray,
            instanceOf,
            getPrototypeOf,
            isPlainObject,
            trim,
            forEach,
            some,
            map,
            AstroDate,
            isBigNumber;

        function isUndefined(inputArg) {
            return inputArg === local_undefined;
        }

        function isBoolean(inputArg) {
            return inputArg === true || inputArg === false;
        }

        function isObject(inputArg) {
            return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === "[object Object]";
        }

        function isDate(inputArg) {
            return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === "[object Date]";
        }

        function isFunction(inputArg) {
            return inputArg !== null && (typeof inputArg === "function" || (typeof inputArg === "object" && toStringFN.call(inputArg) === "[object Function]"));
        }

        isArray = (function () {
            var isArrayFN = baseArray.isArray;

            if (!isFunction(isArrayFN)) {
                isArrayFN = function (inputArg) {
                    return inputArg !== null && typeof inputArg === "object" && toStringFN.call(inputArg) === "[object Array]";
                };
            }

            return isArrayFN;
        }());

        function isNumber(inputArg) {
            return typeof inputArg === "number";
        }

        function isString(inputArg) {
            return typeof inputArg === "string";
        }

        trim = (function () {
            var whiteSpaces = "\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF",
                wsTrimRX = new RegExp("^[" + whiteSpaces + "]+|[" + whiteSpaces + "]+$", "g"),
                trimFN = baseString.constructor.trim,
                func;

            if (isFunction(trimFN)) {
                func = function (inputArg) {
                    return trimFN.call(inputArg);
                };
            } else {
                func = function (inputArg) {
                    return inputArg.replace(wsTrimRX, "");
                };
            }

            return func;
        }());

        // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
        // Create our own local "hasOwnProperty" function: native -> fallback
        hasOwnProperty = (function () {
            var hasOwnPropertyFN = baseObject.hasOwnProperty, // to combat old IE8- issues, min support IE6
                func;

            if (isFunction(hasOwnPropertyFN)) {
                func = function (object, property) {
                    return hasOwnPropertyFN.call(object, property);
                };
            } else {
                func = function (object, property) {
                    return (property in object) && (isUndefined(object.constructor.prototype[property]));
                };
            }

            return func;
        }());

        forEach = (function () {
            var forEachFN = baseArray.forEach,
                func;

            if (isFunction(forEachFN)) {
                func = function (array, fn) {
                    return forEachFN.call(array, fn);
                };
            } else {
                func = function (array, fn) {
                    var length,
                        index;

                    for (index = 0, length = array.length; index < length; index += 1) {
                        if (hasOwnProperty(array, index)) {
                            fn(array[index], index);
                        }
                    }
                };
            }

            return func;
        }());

        some = (function () {
            var someFN = baseArray.some,
                func;

            if (isFunction(someFN)) {
                func = function (array, fn) {
                    return someFN.call(array, fn);
                };
            } else {
                func = function (array, fn) {
                    var length,
                        index;

                    for (index = 0, length = array.length; index < length; index += 1) {
                        if (hasOwnProperty(array, index) && fn(array[index], index)) {
                            return true;
                        }
                    }

                    return false;
                };
            }

            return func;
        }());

        map = (function () {
            var mapFN = baseArray.map,
                func;

            if (isFunction(mapFN)) {
                func = function (array, fn) {
                    return mapFN.call(array, fn);
                };
            } else {
                func = function (array, fn) {
                    var arr = [],
                        length,
                        index;

                    for (index = 0, length = array.length; index < length; index += 1) {
                        if (hasOwnProperty(array, index)) {
                            defineProperty(arr, {
                                "value": fn(array[index], index),
                                "enumerable": true,
                                "configurable": true,
                                "writable": true
                            });
                        }
                    }
                };
            }

            return func;
        }());

        function iterateObject(obj, fn) {
            var prop,
                val;

            for (prop in obj) {
                if (hasOwnProperty(obj, prop)) {
                    val = fn(obj[prop], prop);
                    if (val) {
                        break;
                    }
                }
            }

            return val;
        }

        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "indexOf" function: native -> polyfill
        indexOf = (function () {
            var indexOfFN = baseArray.indexOf,
                func;

            if (isFunction(indexOfFN)) {
                func = function (array, searchElement) {
                    return indexOfFN.call(array, searchElement);
                };
            } else {
                func = function (array, searchElement) {
                    var length,
                        index;

                    for (index = 0, length = array.length; index < length; index += 1) {
                        if (hasOwnProperty(array, index) && searchElement === array[index]) {
                            return index;
                        }
                    }

                    return -1;
                };
            }

            return func;
        }());

        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "defineProperty" function: native -> none
        defineProperty = (function () {
            var definePropertyFN = baseObject.constructor.defineProperty;

            if (isFunction(definePropertyFN)) {
                try {
                    definePropertyFN({}, "sentinel", {});
                } catch (exception) {
                    definePropertyFN = null;
                }
            }

            if (!isFunction(definePropertyFN)) {
                definePropertyFN = function (object, property, descriptor) {
                    if (hasOwnProperty(descriptor, "value")) {
                        object[property] = descriptor.value;
                    }
                };
            }

            return definePropertyFN;
        }());

        defineProperties = (function () {
            var definePropertiesFN = baseObject.constructor.defineProperties;

            if (!isFunction(definePropertiesFN)) {
                definePropertiesFN = function (object, props) {
                    iterateObject(props, function (element, prop) {
                        defineProperty(object, prop, element);
                    });
                };
            }

            return definePropertiesFN;
        }());

        getOwnPropertyDescriptor = (function () {
            var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor;

            if (!isFunction(getOwnPropertyDescriptorFN)) {
                getOwnPropertyDescriptorFN = function (object, prop) {
                    return {
                        "value": object[prop]
                    };
                };
            }

            return getOwnPropertyDescriptorFN;
        }());

        getPrototypeOf = (function () {
            var proto = "__proto__",
                supportsProto = baseObject.constructor.prototype[proto] === null,
                getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
                func;

            if (isFunction(getPrototypeOfFN)) {
                func = getPrototypeOfFN;
            } else if (supportsProto) {
                func = function (object) {
                    return object[proto];
                };
            } else {
                func = (function () {
                    var oPrototype = baseObject.constructor.prototype;

                    return function (object) {
                        if (object === oPrototype) {
                            return null;
                        }

                        var prototype = object.constructor.prototype;

                        if (object === prototype) {
                            return oPrototype;
                        }

                        return prototype;
                    };
                }());
            }

            return func;
        }());

        instanceOf = (function () {
            var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                func;

            if (isFunction(isPrototypeOfFN)) {
                func = function (object, constructor) {
                    return isPrototypeOfFN.call(constructor.prototype, object);
                };
            } else if (isFunction(getPrototypeOf)) {
                func = function (object, constructor) {
                    while (object) {
                        if (object === constructor.prototype) {
                            return true;
                        }

                        object = getPrototypeOf(object);
                    }

                    return false;
                };
            }

            return func;
        }());

        isPlainObject = (function () {
            var baseObjectPrototype = getPrototypeOf(baseObject);

            return function (object) {
                return isObject(object) &&  getPrototypeOf(object) === baseObjectPrototype;
            };
        }());

        extend = (function () {
            return function (thisObject, withObject) {
                /*jslint unparam: true */
                iterateObject(withObject, function (element, name) {
                    defineProperty(thisObject, name, getOwnPropertyDescriptor(withObject, name));
                });
                /*jslint unparam: false */

                return thisObject;
            };
        }());

        defineProperties(BigNumber.prototype, {
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
                        if (this.lt(0) || !this.isFinite() || !this.fractionalPart().isZero()) {
                            return new BigNumber(NaN);
                        }

                        if (!isNumber(exponentialAt) && !isString(exponentialAt) && (BigNumber.isBigNumber(exponentialAt) && (exponentialAt.lt(0) || !exponentialAt.isFinite()))) {
                            exponentialAt = new BigNumber(BigNumber.config().EXPONENTIAL_AT[1]);
                        }

                        if (!BigNumber.isBigNumber(exponentialAt)) {
                            exponentialAt = new BigNumber(exponentialAt);
                        }

                        var n = this.toString(),
                            config,
                            previousConfig,
                            i;

                        if (!factorialLookup[n]) {
                            config = BigNumber.config();
                            previousConfig = {};
                            extend(previousConfig, config);

                            BigNumber.config({
                                DECIMAL_PLACES : 20,
                                ROUNDING_MODE : 4,
                                EXPONENTIAL_AT : [-7, parseInt(exponentialAt.toString(), 10)],
                                RANGE : [-1000000000, 1000000000],
                                ERRORS : true
                            });

                            factorialLookup[n] = new BigNumber(1);
                            for (i = 2; i <= n; i += 1) {
                                factorialLookup[n] = factorialLookup[n].times(i);
                            }

                            iterateObject(previousConfig, function (element, prop) {
                                config[prop] = element;
                            });
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
                            sum,
                            ta,
                            tb,
                            divisor,
                            a,
                            b;

                        if (!piLookup[lookupProp]) {
                            config = BigNumber.config();
                            previousConfig = {};
                            extend(previousConfig, config);

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

                            iterateObject(previousConfig, function (element, prop) {
                                config[prop] = element;
                            });

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
            return struct.year.mod(4).equals(0);
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

        function inYearRange(year) {
            return year.isFinite();
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
            var valid = false;

            if (isPlainObject(struct)) {
                valid = !some(fullKeys, function (element) {
                    var bn = struct[element.full],
                        dim;

                    if (!isBigNumber(bn)) {
                        return true;
                    }

                    switch (element.full) {
                    case "year":
                        if (!inYearRange(bn)) {
                            return true;
                        }

                        break;
                    case "month":
                        if (!inMonthRange(bn)) {
                            return true;
                        }

                        break;
                    case "day":
                        if (julian === true) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (!inDayRange(bn, dim)) {
                            return true;
                        }

                        break;
                    case "hour":
                        if (!inHourRange(bn)) {
                            return true;
                        }

                        break;
                    case "minute":
                        if (!inMinuteRange(bn, struct.hour)) {
                            return true;
                        }

                        break;
                    case "second":
                        if (!inSecondRange(bn, struct.hour)) {
                            return true;
                        }

                        break;
                    case "millisecond":
                        if (!inMillisecondRange(bn, struct.hour)) {
                            return true;
                        }

                        break;
                    case "offset":
                        if (!inOffsetRange(bn)) {
                            return true;
                        }

                        break;
                    default:
                        throw new Error(element.full);
                    }

                    return false;
                });
            }

            return valid;
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

        function timeTo(struct, unit) {
            var value;

            switch (unit) {
            case "day":
                value = struct.hour.div(24).plus(struct.minute.div(1440)).plus(struct.second.div(86400)).plus(struct.millisecond.div(86400000));
                break;
            case "hour":
                value = struct.hour.plus(struct.minute.div(60)).plus(struct.second.div(3600)).plus(struct.millisecond.div(3600000));
                break;
            case "minute":
                value = struct.hour.times(60).plus(struct.minute).plus(struct.second.div(60)).plus(struct.millisecond.div(60000));
                break;
            case "second":
                value = struct.hour.times(3600).plus(struct.minute.times(60)).plus(struct.second).plus(struct.millisecond.div(1000));
                break;
            case "millisecond":
                value = struct.hour.times(3600000).plus(struct.minute.times(60000)).plus(struct.second.times(1000)).plus(struct.millisecond);
                break;
            default:
                value = bignumber(NaN);
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
                h = 0;

            if (struct.month.gt(2)) {
                if (isGregorianLeapYear(struct)) {
                    h = -1;
                } else {
                    h = -2;
                }
            }

            return bignumber(1721424.5).plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, "day"));
        }

        function makeNameShort(name, lang) {
            if (!isString(lang)) {
                lang = "en-GB";
            }

            var length = shortNameLength[lang];

            if (!isNumber(length) || length < 1) {
                length = 3;
            }

            return name.slice(0, length);
        }

        function dayOfWeek(jd, shortName, lang) {
            var day = jd.plus(1.5).mod(7).floor(),
                name;

            if (day.lt(0)) {
                day = day.plus(7);
            }

            if (!isString(lang)) {
                lang = "en-GB";
            }

            if (!isBoolean(shortName)) {
                shortName = false;
            }

            name = dayNames[parseInt(day.toString(), 10)][lang];
            if (shortName === true) {
                name = makeNameShort(name, lang);
            }

            return name;
        }

        function monthName(struct, shortName, lang) {
            if (!isString(lang)) {
                lang = "en-GB";
            }

            if (!isBoolean(shortName)) {
                shortName = false;
            }

            var name = monthNames[parseInt(struct.month.minus(1).toString(), 10)][lang];

            if (shortName === true) {
                name = makeNameShort(name, lang);
            }

            return name;
        }

        function fractionToTime(fraction, fractionIn, struct, julian) {
            var time = {},
                days,
                totalMs,
                hour,
                minute,
                second,
                millisecond;

            fraction = bignumber(fraction);
            switch (fractionIn) {
            case "year":
                if (julian === true) {
                    days = daysInJulianYear(struct);
                } else {
                    days = daysInGregorianYear(struct);
                }

                totalMs = fraction.times(days.times(86400000));
                break;
            case "month":
                if (julian === true) {
                    days = daysInJulianMonth(struct);
                } else {
                    days = daysInGregorianMonth(struct);
                }

                totalMs = fraction.times(days.times(86400000));
                break;
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
            defineProperties(time, {
                "hour": {
                    "value": hour,
                    "enumerable": true,
                    "configurable": true,
                    "writable": true
                },
                "minute": {
                    "value": minute,
                    "enumerable": true,
                    "configurable": true,
                    "writable": true
                },
                "second": {
                    "value": second,
                    "enumerable": true,
                    "configurable": true,
                    "writable": true
                },
                "millisecond": {
                    "value": millisecond,
                    "enumerable": true,
                    "configurable": true,
                    "writable": true
                }
            });

            return time;
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

            return r;
        }

        function arrayToStruct(arr, julian) {
            var struct = {};

            if (isArray(arr)) {
                some(fullKeys, function (element, index) {
                    var value = arr[index],
                        bn = bignumber(value),
                        dim;

                    switch (element.full) {
                    case "year":
                        if (!inYearRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "month":
                        if (isUndefined(value)) {
                            bn = bignumber(1);
                        }

                        if (!inMonthRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "day":
                        if (julian === true) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (isUndefined(value)) {
                            bn = bignumber(1);
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "hour":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "minute":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "second":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inSecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "millisecond":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inMillisecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "offset":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inOffsetRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    default:
                        throw new Error(element);
                    }

                    defineProperty(struct, element.full, {
                        "value": bn,
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });

                    return false;
                });
            }

            return struct;
        }

        function structToArray(struct) {
            var arr = [];

            if (isValid(struct)) {
                forEach(fullKeys, function (element, index) {
                    defineProperty(arr, index, {
                        "value": struct[element.full],
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });
                });
            }

            return arr;
        }

        function objectToStruct(object, julian) {
            var struct = {};

            if (isPlainObject(object)) {
                some(fullKeys, function (element) {
                    var value = object[element.alias] || object[element.full] || object[element.full + "s"],
                        bn = bignumber(value),
                        dim;

                    switch (element.full) {
                    case "year":
                        if (!inYearRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "month":
                        if (isUndefined(value)) {
                            bn = bignumber(1);
                        }

                        if (!inMonthRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "day":
                        if (julian === true) {
                            dim = daysInJulianMonth(struct);
                        } else {
                            dim = daysInGregorianMonth(struct);
                        }

                        if (isUndefined(value)) {
                            bn = bignumber(1);
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "hour":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "minute":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "second":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inSecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "millisecond":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inMillisecondRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case "offset":
                        if (isUndefined(value)) {
                            bn = bignumber(0);
                        }

                        if (!inOffsetRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    default:
                        throw new Error(element);
                    }

                    defineProperty(struct, element.full, {
                        "value": bn,
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });

                    return false;
                });
            }

            return struct;
        }

        function structToObject(struct) {
            var newObject = {};

            if (isPlainObject(struct)) {
                iterateObject(struct, function (element, prop) {
                    defineProperty(newObject, prop, {
                        "value": element.toString(),
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });
                });
            }

            return newObject;
        }

        function dateToStruct(date) {
            var struct = {},
                value;

            if (isDateValid(date)) {
                forEach(fullKeys, function (element) {
                    value = bignumber(date[element.local]());
                    if (element.full === "month") {
                        value = value.plus(1);
                    }

                    defineProperty(struct, element.full, {
                        "value": value,
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });
                });
            }

            return struct;
        }

        function normaliseUnits(unitString) {
            var unit,
                length;

            if (isString(unitString)) {
                unitString = trim(unitString).toLowerCase();
                length = unitString.length;
                if (length > 2 && unitString.charAt(length - 1) === "s") {
                    unitString = unitString.slice(0, -1);
                }

                some(fullKeys, function (element) {
                    if (unitString === element.alias || unitString === element.full) {
                        unit = element.full;
                        return true;
                    }

                    return false;
                });
            }

            return unit;
        }

        function julianToJd(struct) {
            var year = struct.year,
                month,
                a,
                b,
                jd;

            month = struct.month;
            if (month.lte(2)) {
                year = year.minus(1);
                month = month.plus(12);
            }

            a = year.plus(4716).times(365.25).floor();
            b = month.plus(1).times(30.6001).floor();
            jd = a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, "day"));

            return jd;
        }

        function jdToGregorian(julianDay) {
            var struct = {},
                jd = bignumber(julianDay),
                a,
                b,
                year,
                month,
                day;

            if (jd.isFinite()) {
                jd = jd.plus(0.5);
                a = jd.plus(68569).floor();
                b = a.times(4).div(146097).floor();
                a = a.minus(b.times(146097).plus(3).div(4).floor());
                year = a.plus(1).times(4000).div(1461001).floor();
                a = a.minus(year.times(1461).div(4).floor()).plus(31);
                month = a.times(80).div(2447).floor();
                day = a.minus(month.times(2447).div(80).floor());
                a = month.div(11).floor();
                month = month.plus(2).minus(a.times(12));
                year = b.minus(49).times(100).plus(year).plus(a).floor();

                defineProperties(struct, {
                    "year": {
                        "value": year,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "month": {
                        "value": month,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "day": {
                        "value": day,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "offset": {
                        "value": bignumber(0),
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    }
                });

                extend(struct, fractionToTime(jd.fractionalPart(), "day"));
            }

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
                day;

            if (jd.isFinite()) {
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

                defineProperties(struct, {
                    "year": {
                        "value": year,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "month": {
                        "value": month,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "day": {
                        "value": day,
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    },
                    "offset": {
                        "value": bignumber(0),
                        "enumerable": true,
                        "configurable": true,
                        "writeable": true
                    }
                });

                extend(struct, fractionToTime(jd.fractionalPart(), "day"));
            }

            return struct;
        }

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

        function gregorianEaster(struct) {
            var a = struct.year.mod(19),
                b = struct.year.div(100).floor(),
                c = struct.year.mod(100).floor(),
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

            return new AstroDate([struct.year, n.div(31).floor(), n.mod(31).plus(1)]);
        }

        function julianEaster(struct) {
            var a = struct.year.mod(4),
                b = struct.year.mod(7),
                c = struct.year.mod(19),
                d = c.times(19).plus(15).mod(30),
                e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7),
                f = d.plus(e).plus(114);

            return new AstroDate([struct.year, f.div(31).floor().minus(1), f.mod(31).plus(1)]);
        }

        function toISOString(date) {
            var struct = date.getter(),
                string,
                index,
                count,
                padding,
                last,
                value,
                key;

            if (isValid(struct)) {
                index = 0;
                string = "";
                for (count = 0; count < 3; count += 1) {
                    if (isUndefined(struct[fullKeys[count].full])) {
                        index = 3;
                        break;
                    }
                }

                for (last = fullKeys.length - 1; index < last; index += 1) {
                    key = fullKeys[index].full;
                    value = struct[key];
                    if (key === "year") {
                        if (value.lt(0)) {
                            string += "-";
                            padding = 6;
                        } else if (value.gte(10000)) {
                            string += "+";
                            padding = 6;
                        } else {
                            padding = 4;
                        }
                    } else if (key === "hour") {
                        string += "T";
                        padding = 2;
                    } else if (key === "millisecond") {
                        padding = 3;
                    } else {
                        padding = 2;
                    }

                    string += value.abs().padLeadingZero(padding);
                    if (index < 2) {
                        string += "-";
                    } else if (index > 2 && index < 5) {
                        string += ":";
                    } else if (key === "second") {
                        string += ".";
                    }
                }

                value = struct.offset;
                if (value.isZero()) {
                    string += "Z";
                } else {
                    if (value.lte(0)) {
                        string += "+";
                    } else {
                        string += "-";
                    }

                    value = fractionToTime(value.abs(), "minute");
                    string += value.hour.padLeadingZero(2);
                    string += ":";
                    string += value.minute.padLeadingZero(2);
                }
            } else {
                string = "Invalid Date";
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

                            defineProperty(date, fullKeys[index].full, {
                                "value": number,
                                "enumerable": true,
                                "configurable": true,
                                "writable": true
                            });
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
                        timeFraction = fractionToTime(timeFraction, fullKeys[length + 2].full);
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

                        defineProperty(time, fullKeys[index + 3].full, {
                            "value": number,
                            "enumerable": true,
                            "configurable": true,
                            "writable": true
                        });
                    }

                    if (!isTime) {
                        extend(dateObject, date);
                    }

                    defineProperty(time, "offset", {
                        "value": offset[0].times(60).plus(offset[1]).times(signOffset),
                        "enumerable": true,
                        "configurable": true,
                        "writable": true
                    });

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

                    if (isValid(struct)) {
                        struct = structToObject(struct);
                    } else {
                        struct = local_undefined;
                    }

                    return struct;
                }
            },

            "toArray": {
                "value": function () {
                    var struct = this.getter(),
                        arr;

                    if (isValid(struct)) {
                        arr = map(structToArray(struct), function (element) {
                            return element.toString();
                        });
                    }

                    return arr;
                }
            }
        });

        AstroDate = function () {
            var args = arguments,
                input = arguments,
                argsLength = args.length,
                isJulian = false,
                error = null,
                struct,
                arg;

            defineProperties(this, {
                "getter": {
                    "value": function (key) {
                        var got;

                        if (isUndefined(key)) {
                            got = extend({}, struct);
                        } else if (isString(key)) {
                            switch (key) {
                            case "struct":
                                got = extend({}, struct);
                                break;
                            case "isJulian":
                                got = isJulian;
                                break;
                            case "args":
                                got = args;
                                break;
                            case "input":
                                got = input;
                                break;
                            case "error":
                                got = error;
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

                "setter": {
                    "value": function (key, value) {
                        var unit = normaliseUnits(key),
                            valid = false,
                            bn,
                            dim;

                        if (unit) {
                            bn = bignumber(value);
                            switch (unit) {
                            case "year":
                                valid = inYearRange(bn);
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
                                throw new Error(unit);
                            }

                            if (valid) {
                                defineProperty(struct, unit, {
                                    "value": bn,
                                    "enumerable": true,
                                    "configurable": true,
                                    "writable": true
                                });
                            } else {
                                struct = {};
                            }
                        } else if (isArray(key)) {
                            struct = arrayToStruct(key, false);
                        } else if (AstroDate.isAstroDate(key)) {
                            struct = key.getter();
                            isJulian = key.isJulian();
                        } else if (isDate(key)) {
                            struct = dateToStruct(key);
                        } else if (isString(key)) {
                            switch (key) {
                            case "input":
                                input = value;
                                break;
                            case "error":
                                error = value;
                                break;
                            case "struct":
                                if (isValid(value)) {
                                    struct = extend({}, value);
                                } else {
                                    struct = {};
                                }

                                break;
                            case "isJulian":
                                isJulian = !!value;
                                break;
                            default:
                                struct = new ISO(key).getter();
                            }
                        } else {
                            throw new SyntaxError(key);
                        }

                        return this;
                    }
                }
            });

            switch (argsLength) {
            case 0:
                struct = dateToStruct(new Date());
                break;
            case 1:
                arg = args[0];
                if (AstroDate.isAstroDate(arg)) {
                    isJulian = arg.getter("isJulian");
                    struct = extend({}, arg.getter());
                } else if (isArray(arg)) {
                    struct = arrayToStruct(arg, false);
                } else if (isDate(arg)) {
                    struct = dateToStruct(arg);
                } else if (isNumber(arg)) {
                    struct = dateToStruct(new Date(arg));
                } else if (isString(arg)) {
                    struct = new ISO(arg).getter();
                } else if (isPlainObject(arg)) {
                    struct = objectToStruct(arg);
                    if (!isValid(struct)) {
                        struct = {};
                    }
                } else {
                    throw new TypeError(arg);
                }

                break;
            case 2:
                arg = args[0];
                if (isString(arg)) {
                    arg = trim(arg).toLowerCase();
                    switch (arg) {
                    case "j":
                        arg = args[1];
                        if (isArray(arg)) {
                            struct = julianToGregorian(arrayToStruct(arg, true));
                        } else if (isPlainObject(arg)) {
                            struct = objectToStruct(arg, true);
                            if (isValid(struct, true)) {
                                struct = julianToGregorian(struct);
                            } else {
                                struct = {};
                            }
                        } else {
                            throw new TypeError(arg);
                        }

                        break;
                    case "g":
                        arg = args[1];
                        if (isArray(arg)) {
                            struct = arrayToStruct(arg, false);
                        } else if (isPlainObject(arg)) {
                            struct = objectToStruct(arg);
                            if (!isValid(struct)) {
                                struct = {};
                            }
                        } else {
                            throw new TypeError(arg);
                        }

                        break;
                    case "jd":
                        arg = args[1];
                        this.julianDay(arg);
                        break;
                    default:
                        throw new SyntaxError(arg);
                    }
                } else {
                    throw new TypeError(arg);
                }

                break;
            default:
                throw new SyntaxError(argsLength);
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
                    var val;

                    if (isString(isoString)) {
                        val = this.setter("struct", new ISO(isoString).getter());
                    } else {
                        throw new TypeError(isoString);
                    }

                    return val;
                }
            },

            "toString": {
                "value": function () {
                    var args,
                        shortName,
                        lang,
                        struct,
                        string,
                        offset;

                    if (this.isValid()) {
                        args = arguments;
                        if (isBoolean(args[0])) {
                            shortName = args[0];
                            lang = args[1];
                        } else if (isString(args[0])) {
                            shortName = true;
                            lang = args[0];
                        }

                        if (this.isJulian()) {
                            struct = jdToJulian(this.julianDay());
                            string = "[OS] ";
                        } else {
                            struct = this.getter();
                            string = "[NS] ";
                        }

                        string += this.dayOfWeek(shortName, lang) + " ";
                        string += struct.day.toString() + " ";
                        string += this.monthOfYear(shortName, lang) + " ";
                        if (struct.year.lt(0)) {
                            string += "-";
                        }

                        string += struct.year.abs().padLeadingZero(4) + " ";
                        string += struct.hour.padLeadingZero(2) + ":";
                        string += struct.minute.padLeadingZero(2) + ":";
                        string += struct.second.padLeadingZero(2) + ".";
                        string += struct.millisecond.padLeadingZero(3) + " ";
                        offset = struct.offset;
                        if (offset.lte(0)) {
                            string += "+";
                        } else {
                            string += "-";
                        }

                        offset = fractionToTime(offset.abs(), "minute");
                        string += offset.hour.padLeadingZero(2);
                        string += offset.minute.padLeadingZero(2);
                    } else {
                        string = "Invalid Date";
                    }

                    return string;
                }
            },

            "toISOString": {
                "value": function () {
                    return toISOString(this);
                }
            },

            "valueOf": {
                "value": function () {
                    return this.julianDay();
                }
            },

            "object": {
                "value": function (dateObject) {
                    var val;

                    if (isUndefined(dateObject)) {
                        if (this.isValid()) {
                            if (this.isJulian()) {
                                val = structToObject(gregorianToJulian(this.getter()));
                            } else {
                                val = structToObject(this.getter());
                            }
                        }
                    } else if (isPlainObject(dateObject)) {
                        val = this.setter("struct", objectToStruct(dateObject, this.isJulian()));
                    } else {
                        throw new TypeError(dateObject);
                    }

                    return val;
                }
            },

            "clone": {
                "value": function () {
                    return new AstroDate(this);
                }
            },

            "array": {
                "value": function (dateArray) {
                    var val;

                    if (isUndefined(dateArray)) {
                        if (this.isValid()) {
                            if (this.isJulian()) {
                                val = map(structToArray(gregorianToJulian(this.getter())), function (element) {
                                    return element.toString();
                                });
                            } else {
                                val = map(structToArray(this.getter()), function (element) {
                                    return element.toString();
                                });
                            }
                        }
                    } else if (isArray(dateArray)) {
                        val = this.setter("struct", arrayToStruct(dateArray, this.isJulian()));
                    } else {
                        throw new TypeError(dateArray);
                    }

                    return val;
                }
            },

            "date": {
                "value": function (date) {
                    var val;

                    if (isUndefined(date)) {
                        if (this.isValid()) {
                            val = new Date(parseInt(this.getTime(this), 10));
                        } else {
                            val = new Date(NaN);
                        }
                    } else if (isDate(date)) {
                        val = this.setter(date);
                    } else {
                        throw new TypeError(date);
                    }

                    return val;
                }
            },

            "getTime": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        val = getTime(this).toString();
                    }

                    return val;
                }
            },

            "deltaTime": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        val = deltaTime(this.getter()).toString();
                    }

                    return val;
                }
            },

            "timeTo": {
                "value": function (unit) {
                    var val;

                    if (this.isValid()) {
                        val = timeTo(this.getter(), normaliseUnits(unit)).toString();
                    }

                    return val;
                }
            },

            "julianDay": {
                "value": function (julianDay) {
                    var val;

                    if (isUndefined(julianDay)) {
                        if (this.isValid()) {
                            val = gregorianToJd(this.getter()).toString();
                        }
                    } else if (isNumber(julianDay) || isString(julianDay)) {
                        val = this.setter("struct", jdToGregorian(julianDay));
                    } else {
                        throw new TypeError(julianDay);
                    }

                    return val;
                }
            },

            "easter": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        if (this.isJulian()) {
                            val = julianEaster(gregorianToJulian(this.getter()));
                        } else {
                            val = gregorianEaster(this.getter());
                        }
                    }

                    return val;
                }
            },

            "monthOfYear": {
                "value": function () {
                    var args,
                        shortName,
                        lang,
                        val;

                    if (this.isValid()) {
                        args = arguments;
                        if (isBoolean(args[0])) {
                            shortName = args[0];
                            lang = args[1];
                        } else if (isString(args[0])) {
                            shortName = true;
                            lang = args[0];
                        }

                        if (this.isJulian()) {
                            val = monthName(gregorianToJulian(this.getter()), shortName, lang);
                        } else {
                            val = monthName(this.getter(), shortName, lang);
                        }
                    }

                    return val;
                }
            },

            "dayOfWeek": {
                "value": function () {
                    var args,
                        shortName,
                        lang,
                        val;

                    if (this.isValid()) {
                        args = arguments;
                        if (isBoolean(args[0])) {
                            shortName = args[0];
                            lang = args[1];
                        } else if (isString(args[0])) {
                            shortName = true;
                            lang = args[0];
                        }

                        val = dayOfWeek(gregorianToJd(this.getter()), shortName, lang);
                    }

                    return val;
                }
            },

            "isLeapYear": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        if (this.isJulian()) {
                            val = isJulianLeapYear(gregorianToJulian(this.getter()));
                        } else {
                            val = isGregorianLeapYear(this.getter());
                        }
                    }

                    return val;
                }
            },

            "daysInYear": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        if (this.isJulian()) {
                            val = daysInJulianYear(gregorianToJulian(this.getter())).toString();
                        } else {
                            val = daysInGregorianYear(this.getter()).toString();
                        }
                    }

                    return val;
                }
            },

            "daysInMonth": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        if (this.isJulian()) {
                            val = daysInJulianMonth(gregorianToJulian(this.getter())).toString();
                        } else {
                            val = daysInGregorianMonth(this.getter()).toString();
                        }
                    }

                    return val;
                }
            },

            "dayOfYear": {
                "value": function () {
                    var val;

                    if (this.isValid()) {
                        if (this.isJulian()) {
                            val = dayOfJulianYear(gregorianToJulian(this.getter())).toString();
                        } else {
                            val = dayOfGregorianYear(this.getter()).toString();
                        }
                    }

                    return val;
                }
            },

            "json": {
                "value": function (jsonString) {
                    var struct,
                        propArray,
                        val;

                    if (isUndefined(jsonString)) {
                        if (isFunction(JSON.stringify)) {
                            val = JSON.stringify(this.object());
                        } else {
                            propArray = [];
                            iterateObject(this.object(), function (element, prop) {
                                propArray.push('"' + prop + '":"' + element + '"');
                            });

                            val = "{" + propArray.join(",") + "}";
                        }
                    } else if (isString(jsonString)) {
                        if (isFunction(JSON.parse)) {
                            struct = objectToStruct(JSON.parse(jsonString), this.isJulian());
                        } else {
                            /*jslint evil: true */
                            struct = objectToStruct(new Function("return" + jsonString)(), this.isJulian());
                            /*jslint evil:   false */
                        }

                        if (!isValid(struct)) {
                            throw new SyntaxError(struct);
                        }

                        val = this.setter("struct", struct);
                    } else {
                        throw new TypeError(jsonString);
                    }

                    return val;
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
                    return normaliseUnits(unitString);
                }
            },

            "isAstroDate": {
                "value": function (inputArg) {
                    return isObject(inputArg) && (instanceOf(inputArg, AstroDate) || inputArg instanceof AstroDate);
                }
            }
        });

        defineProperties(fullKeys, {
            0: {
                "value": {
                    "full": "year",
                    "alias": "y",
                    "local": "getFullYear"
                },
                "enumerable": true
            },
            1: {
                "value": {
                    "full": "month",
                    "alias": "M",
                    "local": "getMonth"
                },
                "enumerable": true
            },
            2: {
                "value": {
                    "full": "day",
                    "alias": "d",
                    "local": "getDate"
                },
                "enumerable": true
            },
            3: {
                "value": {
                    "full": "hour",
                    "alias": "h",
                    "local": "getHours"
                },
                "enumerable": true
            },
            4: {
                "value": {
                    "full": "minute",
                    "alias": "m",
                    "local": "getMinutes"
                },
                "enumerable": true
            },
            5: {
                "value": {
                    "full": "second",
                    "alias": "s",
                    "local": "getSeconds"
                },
                "enumerable": true
            },
            6: {
                "value": {
                    "full": "millisecond",
                    "alias": "ms",
                    "local": "getMilliseconds"
                },
                "enumerable": true
            },
            7: {
                "value": {
                    "full": "offset",
                    "alias": "z",
                    "local": "getTimezoneOffset"
                },
                "enumerable": true
            }
        });

        defineProperties(shortNameLength, {
            "en-GB": {
                "value": 3
            },
            "sv-SE": {
                "value": 3
            }
        });

        defineProperties(dayNames, {
            0: {
                "value": {
                    "en-GB": "Sunday",
                    "sv-SE": "söndag"
                },
                "enumerable": true
            },
            1: {
                "value": {
                    "en-GB": "Monday",
                    "sv-SE": "måndag"
                },
                "enumerable": true
            },
            2: {
                "value": {
                    "en-GB": "Tuesday",
                    "sv-SE": "tisdag"
                },
                "enumerable": true
            },
            3: {
                "value": {
                    "en-GB": "Wednesday",
                    "sv-SE": "onsdag"
                },
                "enumerable": true
            },
            4: {
                "value": {
                    "en-GB": "Thursday",
                    "sv-SE": "torsdag"
                },
                "enumerable": true
            },
            5: {
                "value": {
                    "en-GB": "Friday",
                    "sv-SE": "fredag"
                },
                "enumerable": true
            },
            6: {
                "value": {
                    "en-GB": "Saturday",
                    "sv-SE": "lördag"
                },
                "enumerable": true
            }
        });

        defineProperties(monthNames, {
            0: {
                "value": {
                    "en-GB": "January",
                    "sv-SE": "januari"
                },
                "enumerable": true
            },
            1: {
                "value": {
                    "en-GB": "February",
                    "sv-SE": "februari"
                },
                "enumerable": true
            },
            2: {
                "value": {
                    "en-GB": "March",
                    "sv-SE": "mars"
                },
                "enumerable": true
            },
            3: {
                "value": {
                    "en-GB": "April",
                    "sv-SE": "april"
                },
                "enumerable": true
            },
            4: {
                "value": {
                    "en-GB": "May",
                    "sv-SE": "maj"
                },
                "enumerable": true
            },
            5: {
                "value": {
                    "en-GB": "June",
                    "sv-SE": "juni"
                },
                "enumerable": true
            },
            6: {
                "value": {
                    "en-GB": "July",
                    "sv-SE": "juli"
                },
                "enumerable": true
            },
            7: {
                "value": {
                    "en-GB": "August",
                    "sv-SE": "augusti"
                },
                "enumerable": true
            },
            8: {
                "value": {
                    "en-GB": "September",
                    "sv-SE": "september"
                },
                "enumerable": true
            },
            9: {
                "value": {
                    "en-GB": "October",
                    "sv-SE": "oktober"
                },
                "enumerable": true
            },
            10: {
                "value": {
                    "en-GB": "November",
                    "sv-SE": "november"
                },
                "enumerable": true
            },
            11: {
                "value": {
                    "en-GB": "December",
                    "sv-SE": "december"
                },
                "enumerable": true
            }
        });

        return AstroDate;
    }));
}(this, void(0)));
