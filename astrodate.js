/*global requirejs, require, module */

/* DOMTokenList v0.1.1
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
            trim;

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
            var newAngle = new BigNumber(angle);

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
                            exponentialAt = new BigNumber(exponentialAt).integerPart();
                        } else {
                            exponentialAt = exponentialAt.integerPart();
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
            }
        });

        defineProperties(BigNumber, {
            "isBigNumber": {
                "value": function (inputArg) {
                    return inputArg && typeof inputArg === "object" && (inputArg instanceof BigNumber || instanceOf(inputArg, BigNumber));
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
                        if (isUndefined(decimalPlaces)) {
                            decimalPlaces = BigNumber.config().DECIMAL_PLACES;
                        }

                        if (!BigNumber.isBigNumber(decimalPlaces)) {
                            decimalPlaces = new BigNumber(decimalPlaces).integerPart();
                        }

                        if (!decimalPlaces.isFinite() || decimalPlaces.lt(0)) {
                            decimalPlaces = new BigNumber(BigNumber.config().DECIMAL_PLACES);
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

                            sum = new BigNumber(0);
                            a = ta = new BigNumber(16).div(5);
                            b = tb = new BigNumber(-4).div(239);
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
                    return new BigNumber(number).toRadians(decimalPlacesPI);
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
                            prev = new BigNumber(0);
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

        function bignumber(inputArg) {
            var bn;

            if (BigNumber.isBigNumber(inputArg)) {
                bn = inputArg;
            } else {
                bn = new BigNumber(inputArg);
            }

            return bn;
        }

        function isDateValid(inputArg) {
            return isDate(inputArg) && !isNaN(inputArg.getTime());
        }

        function isDigit(character) {
            return isString(character) && trim(character).length === 1 && !isNaN(character);
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

        function isLeapYear(year) {
            return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
        }

        function daysInMonth(year, month) {
            var days;

            if (month === 2) {
                days = 28 + isLeapYear(year);
            } else {
                days = 31 - ((month - 1) % 7 % 2);
            }

            return days;
        }

        function daysInYear(year) {
            return 365 + isLeapYear(year);
        }

        function dayOfYear(year, month, day) {
            var k = 2 - isLeapYear(year);

            return Math.floor((275 * month) / 9) - k * Math.floor((month + 9) / 12) + day - 30;
        }

        function dayFractionToTime(dayFraction) {
            var totalMs = dayFraction.times(86400000),
                hour = totalMs.div(3600000),
                minute = hour.fractionalPart().times(60),
                second = minute.fractionalPart().times(60),
                millisecond = second.fractionalPart().times(1000);

            return [hour.integerPart().toNumber(),  minute.integerPart().toNumber(), second.integerPart().toNumber(),  millisecond.integerPart().toNumber()];
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

            hour = totalMs.div(3600000).integerPart();
            minute = totalMs.minus(hour.times(3600000)).div(60000).integerPart();
            second = totalMs.minus(hour.times(3600000)).minus(minute.times(60000)).div(1000).integerPart();
            millisecond = totalMs.minus(hour.times(3600000)).minus(minute.times(60000)).minus(second.times(1000)).integerPart();

            return [padLeadingZero(hour.toNumber(), 2), padLeadingZero(minute.toNumber(), 2), padLeadingZero(second.toNumber(), 2), padLeadingZero(millisecond.toNumber(), 3)];
        }

        function isValid(struct) {
            if (!isObject(struct)) {
                return false;
            }

            var count = 0,
                element,
                prop;

            for (prop in struct) {
                if (hasOwnProperty(struct, prop)) {
                    element = struct[prop];
                    if (!isNumber(element) || !isFinite(element)) {
                        return false;
                    }

                    count += 1;
                }
            }

            return count !== 0;
        }

        function arrayToObject(arr) {
            var length = arr.length,
                struct = {},
                temp = {},
                //day,
                fraction,
                index,
                element,
                number,
                //time,
                asString;

            if (length < 1 || length > lengthFullKeys) {
                //invalid
                return temp;
            }

            /*
            day = bignumber(arr[2]);
            dayFraction = day.fractionalPart();
            if (!dayFraction.equals(0)) {
                time = dayFractionToTime(dayFraction);
                arr[2] = day.integerPart().toNumber();
                for (index = 3; index < lengthFullKeys; index += 1) {
                    arr[index] = time[index - 3];
                }
            }
            */

            for (index = 0; index < lengthFullKeys; index += 1) {
                element = arr[index];
                if (isValidValue(element)) {
                    asString = element.toString();
                    number = bignumber(asString);
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
                    if (number.isNaN() || number.lte(-100000) || number.gte(100000)) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber();
                    break;
                case 1:
                    if (!number.isNaN() && (number.lt(1) || number.gt(12))) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 1;
                    break;
                case 2:
                    if (!number.isNaN() && (number.lt(1) || number.gt(daysInMonth(arr[0], arr[1])))) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 1;
                    break;
                case 3:
                    if (!number.isNaN() && (number.lt(0) || number.gt(24))) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 0;
                    break;
                case 4:
                case 5:
                    if (!number.isNaN() && (number.lt(0) || number.gt(59) || (bignumber(arr[3]).equals(24) && !number.isZero()))) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 0;
                    break;
                case 6:
                    if (!number.isNaN() && (number.lt(0) || number.gte(1000))) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 0;
                    break;
                case 7:
                    if (number.lt(-1440) || number.gt(1440)) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 0;
                    break;
                default:
                    number = local_undefined;
                }

                if (!isUndefined(number)) {
                    struct[fullKeys[index]] = number;
                }
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
                return "Invalid Date";
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

        function ISO(isoString) {
            var isoObject;

            defineProperties(this, {
                "getter": {
                    "value": function () {
                        return extend({}, isoObject);
                    }
                },

                "setter": {
                    "value": function (newIsoObject) {
                        if (isValid(newIsoObject)) {
                            isoObject = extend({}, newIsoObject);
                        } else {
                            isoObject = {};
                        }

                        return this;
                    }
                }
            });

            isoObject = this.parse(isoString).valueOf();
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
                        name,
                        value;

                    if (!isString(isoString)) {
                        return dateObject;
                    }

                    getTimezoneOffset = new Date().getTimezoneOffset();
                    temp = trim(isoString).split(/[T ]/);
                    length = temp.length;
                    if (length < 1 || length > 2) {
                        //invalid
                        this.setter(dateObject);
                        return this;
                    }

                    element = temp[0];
                    if (length === 1) {
                        if (element.charAt(element.length - 1) === "Z" || element.indexOf(":") !== -1 || element.indexOf("+") > 1 || (element.charAt(0) !== "-" && element.split("-").length === 2 && !/^\d{4}-\d{2}$/.test(element))) {
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
                        //invalid
                        this.setter(dateObject);
                        return this;
                    }

                    if (!isTime) {
                        date = temp[0];
                        character = date.charAt(0);
                        if (!isDigit(character)) {
                            if (character === "+" || character === "-") {
                                signYear = character;
                            } else {
                                //invalid
                                this.setter(dateObject);
                                return this;
                            }

                            date = date.slice(1);
                        }

                        if (date.indexOf("-") === -1) {
                            temp = [];
                            switch (date.length) {
                            case 9:
                                if (signYear) {
                                    temp[0] = date.slice(0, 5);
                                    temp[1] = date.slice(5, 7);
                                    temp[2] = date.slice(7);
                                } else {
                                    //invalid
                                    this.setter(dateObject);
                                    return this;
                                }

                                break;
                            case 8:
                                temp[0] = date.slice(0, 4);
                                temp[1] = date.slice(4, 6);
                                temp[2] = date.slice(6);
                                break;
                            case 4:
                                temp[0] = date;
                                temp[1] = "01";
                                temp[2] = "01";
                                break;
                            case 2:
                                temp[0] = date + "00";
                                temp[1] = "01";
                                temp[2] = "01";
                                break;
                            default:
                                //invalid
                                this.setter(dateObject);
                                return this;
                            }
                        } else {
                            temp = date.split("-");
                        }

                        length = temp.length;
                        if (length < 2 || length > 3) {
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }

                        if (length === 2) {
                            temp.push("01");
                        }

                        date = {};
                        for (index = 0; index < 3; index += 1) {
                            element = temp[index];
                            length = element.length;
                            if ((index && length !== 2) || (!index && (length < 4 || (signYear === "+" && length === 4)))) {
                                //invalid
                                this.setter(dateObject);
                                return this;
                            }

                            number = intToNumber(element);
                            if (isNaN(number) || (index === 1 && (number < 1 || number > 12)) || (index === 2 && (number < 1 || number > daysInMonth(date.year, date.month)))) {
                                //invalid
                                this.setter(dateObject);
                                return this;
                            }

                            if (!index && signYear) {
                                if (signYear === "-") {
                                    number = -1 * number;
                                }
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
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }
                    }

                    temp = time.split(/[\-+]/);
                    length = temp.length;
                    if (length < 1 || length > 2) {
                        //invalid
                        this.setter(dateObject);
                        return this;
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
                        //invalid
                        this.setter(dateObject);
                        return this;
                    }

                    if (length === 1) {
                        element = offset[0];
                        length = offset[0].length;
                        switch (length) {
                        case 4:
                            offset[0] = element.slice(0, 2);
                            offset[1] = element.slice(2);
                            break;
                        case 2:
                            offset[0] = element;
                            offset[1] = "00";
                            break;
                        default:
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }
                    }

                    for (index = 0; index < 2; index += 1) {
                        element = offset[index];
                        length = element.length;
                        if (length !== 2) {
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }

                        number = intToNumber(element);
                        if (isNaN(number) || number < -1440 || number > 1440) {
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }

                        offset[index] = number;
                    }

                    if (signOffset === -1 && offset[0] === 0 && offset[1] === 0) {
                        //invalid
                        this.setter(dateObject);
                        return this;
                    }

                    time = temp[0];
                    if (time.indexOf(".") !== -1 || time.indexOf(",") !== -1) {
                        temp = time.split(/[\.,]/);
                        element = temp[1];
                        if (temp.length !== 2 || element.split(":").length !== 1) {
                            //invalid
                            this.setter(dateObject);
                            return this;
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
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }
                    } else {
                        temp = time.split(":");
                    }

                    length = temp.length;
                    if (length < 1 || length > 3) {
                        //invalid
                        this.setter(dateObject);
                        return this;
                    }

                    if (found) {
                        switch (length) {
                        case 1:
                            name = "hour";
                            break;
                        case 2:
                            name = "minute";
                            break;
                        case 3:
                            name = "second";
                            break;
                        default:
                        }

                        temp = temp.concat(fractionToTime(timeFraction, name).slice(length));
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
                        element = temp[index];
                        length = element.length;
                        if (length < 1 || (index < 3 && length > 2) || (index === 3 && length > 3)) {
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }

                        number = intToNumber(element);
                        if (!index && number === 24) {
                            found = true;
                        }

                        if (isNaN(number) || number < 0 || (found && index && number > 0) || (!index && number > 24) || (index > 0 && index < 3 && number > 59) || (index === 4 && number >= 1000)) {
                            //invalid
                            this.setter(dateObject);
                            return this;
                        }

                        time[fullKeys[index + 3]] = number;
                    }

                    if (!isTime) {
                        extend(dateObject, date);
                    }

                    time[fullKeys[lengthFullKeys - 1]] = signOffset * (offset[0] * 60  + offset[1]);
                    extend(dateObject, time);
                    this.setter(dateObject);

                    return this;
                }
            },

            "isValid": {
                "value": function () {
                    return isValid(this.getter());
                }
            },

            "toString": {
                "value": function () {
                    var str = "",
                        isoObject = this.getter(),
                        index,
                        prop;

                    for (index = 0; index < lengthFullKeys; index += 1) {
                        if (index) {
                            str += ",";
                        }

                        prop = fullKeys[index];
                        str += prop + ":" + isoObject[prop];
                    }

                    return str;
                }
            },

            "valueOf": {
                "value": function () {
                    return this.getter();
                }
            },

            "toArray": {
                "value": function () {
                    return objectToArray(this.getter());
                }
            }
        });

        function AstroDate() {
            var args = arguments,
                argsLength = args.length,
                struct,
                arg;

            defineProperties(this, {
                "getter": {
                    "value": function () {
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
                            struct = arrayToObject(key);
                        } else if (AstroDate.isAstroDate(key)) {
                            struct = arrayToObject(key.valueOf());
                        } else if (isDate(key)) {
                            struct = dateToObject(key);
                        } else if (typeof key === "string") {
                            if (key === "struct") {
                                if (isValid(value)) {
                                    struct = extend({}, value);
                                } else {
                                    throw new SyntaxError();
                                }
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
                } else if (isArray(arg)) {
                    struct = arrayToObject(arg);
                } else if (isDate(arg)) {
                    struct = dateToObject(arg);
                } else {
                    if (isNumber(arg)) {
                        struct = dateToObject(new Date(arg));
                    } else if (isString(arg)) {
                        struct = new ISO(arg).valueOf();
                    } else if (isObject(arg)) {
                        struct = arg;
                        if (!this.isValid()) {
                            struct = {};
                        }
                    } else {
                        throw new TypeError();
                    }
                }

                break;
            default:
                throw new SyntaxError();
            }
        }

        defineProperties(AstroDate.prototype, {
            "isValid": {
                "value": function () {
                    return isValid(this.getter());
                }
            },

            "parse": {
                "value": function (isoString) {
                    if (typeof isoString === "string") {
                        this.setter("struct", new ISO(isoString).valueOf());
                    } else {
                        throw new SyntaxError();
                    }

                    return this;
                }
            },

            "toString": {
                "value": function () {
                    return toISOString(this);
                }
            },

            "valueOf": {
                "value": function () {
                    return this.getter();
                }
            },

            "array": {
                "value": function (astroArray) {
                    if (isUndefined(astroArray)) {
                        return objectToArray(this.getter());
                    }

                    this.setter("struct", arrayToObject(astroArray));

                    return this;
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

            "timeTo": {
                "value": function (unit) {
                    var struct = this.getter(),
                        hour = bignumber(struct.hour),
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
            },

            "julianDay": {
                "value": function (julianDay) {
                    var struct,
                        year,
                        month,
                        day,
                        a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        z,
                        alpha,
                        time,
                        julian;

                    if (isUndefined(julianDay)) {
                        struct = this.getter();
                        year = bignumber(struct.year);
                        month = bignumber(struct.month);
                        if (month.lte(2)) {
                            year = year.minus(1);
                            month = month.plus(12);
                        }

                        a = year.div(100).integerPart();
                        julian = false;
                        if (julian) {
                            b = bignumber(0);
                        } else {
                            b = a.neg().plus(2).plus(a.div(4).integerPart());
                        }

                        return year.plus(4716).times(365.25).integerPart().plus(month.plus(1).times(30.6001).integerPart()).plus(struct.day).plus(this.timeTo("day")).plus(b).minus(1524.5);
                    }

                    z = bignumber(julianDay).plus(0.5);
                    if (z.lt(2299.161)) {
                        a = z.integerPart();
                    } else {
                        alpha = z.minus(1867216.25).div(36524.25).integerPart();
                        a = z.integerPart().plus(1).plus(alpha).minus(alpha.div(4).integerPart());
                    }

                    b = a.plus(1524);
                    c = b.minus(122.1).div(365.25).integerPart();
                    d = c.times(365.25).integerPart();
                    e = b.minus(d).div(30.6001).integerPart();
                    f = z.fractionalPart();
                    day = b.minus(d).minus(e.times(30.6001).integerPart());
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

                    this.setter("year", year.toNumber());
                    this.setter("month", month.toNumber());
                    this.setter("day", day.toNumber());
                    time = dayFractionToTime(f);
                    this.setter("hour", time[0]);
                    this.setter("minute", time[1]);
                    this.setter("second", time[2]);
                    this.setter("millisecond", time[3]);
                    this.setter("offset", 0);

                    return this;
                }
            },

            "monthOfYear": {
                "value": function () {
                    return monthNames[this.getter().month];
                }
            },

            "dayOfWeek": {
                "value": function () {
                    return dayNames[(this.julianDay() + 1.5) % 7];
                }
            },

            "isLeapYear": {
                "value": function () {
                    return isLeapYear(this.getter().year);
                }
            },

            "daysInYear": {
                "value": function () {
                    return daysInYear(this.getter().year);
                }
            },

            "daysInMonth": {
                "value": function () {
                    var struct = this.getter();

                    return daysInMonth(struct.year, struct.month);
                }
            },

            "dayOfYear": {
                "value": function () {
                    var struct = this.getter();

                    return dayOfYear(struct.year, struct.month, struct.day);
                }
            },

            "dayFractionToTime": {
                "value": function (dayFraction) {
                    return dayFractionToTime(dayFraction);
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

                        this.setter("struct", struct);

                        return this;
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

                    if (typeof unitString === "string" && unitString) {
                        units = trim(unitString);
                        units = unitAliases[units] || trim(units.toLowerCase().replace(/([\S\s])s$/, "$1"));
                    }

                    return units;
                }
            },

            "isAstroDate": {
                "value": function (inputArg) {
                    return isObject(inputArg) && (inputArg instanceof AstroDate || instanceOf(inputArg, AstroDate));
                }
            },

            "monthOfYear": {
                "value": function (month) {
                    return monthNames[month];
                }
            },

            "isLeapYear": {
                "value": function (year) {
                    return isLeapYear(year);
                }
            },

            "daysInYear": {
                "value": function (year) {
                    return daysInYear(year);
                }
            },

            "daysInMonth": {
                "value": function (year, month) {
                    return daysInMonth(year, month);
                }
            },

            "dayOfYear": {
                "value": function (year, month, day) {
                    return dayOfYear(year, month, day);
                }
            },

            // really? Could be better
            "dayFractionToTime": {
                "value": function (dayFraction) {
                    return dayFractionToTime(dayFraction);
                }
            }
        });

        return AstroDate;
    }));
}(this, void(0)));
