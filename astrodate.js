/*global requirejs, require, module */

(function (global, undef) {
    "use strict";

    var projectString = "astrodate",
        bigNumberCDN = "//cdn.jsdelivr.net/bignumber.js/1.1.0/bignumber.min",
        bigNumberFunc = "BigNumber",
        bigNumberString = bigNumberFunc.toLocaleLowerCase();

    (function (name, definition) {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = definition(require("./node_modules/" + bigNumberString + ".js"));
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
            toStringFN = {}.toString,
            dateObjectString = "[object Date]",
            arrayObjectString = "[object Array]",
            fullKeys = ["year", "month", "day", "hour", "minute", "second", "millisecond", "offset"],
            aliases = ["y", "M", "d", "h", "m", "s", "ms", "o"],
            dateMethods = ["getUTCFullYear", "getUTCMonth", "getUTCDate", "getUTCHours", "getUTCMinutes", "getUTCSeconds", "getUTCMilliseconds", "getTimezoneOffset"],
            dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            j2000 = [2000, 1, 1, 11, 58, 55, 816],
            unitAliases = {},
            unitsLookup = {},
            lengthFullKeys = fullKeys.length,
            indexFullKeys,
            extend;

        for (indexFullKeys = 0; indexFullKeys < lengthFullKeys; indexFullKeys += 1) {
            unitAliases[aliases[indexFullKeys]] = fullKeys[indexFullKeys];
            unitsLookup[fullKeys[indexFullKeys]] = true;
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
                    if (withObject.hasOwnProperty(name)) {
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

        function toPositiveAngle(angle) {
            var newAngle = normaliseAngle(angle);

            if (newAngle < 0) {
                newAngle = newAngle.plus(360);
            }

            return newAngle;
        }

        extend(BigNumber.prototype, {
            "toNumber": function () {
                return +this;
            },

            "integerPart": function () {
                var bn = this;

                if (bn.isFinite()) {
                    if (bn.gte(0)) {
                        bn = bn.floor();
                    } else {
                        bn = bn.ceil();
                    }
                }

                return bn;
            },

            "fractionalPart": function () {
                var bn = this;

                if (bn.isFinite()) {
                    bn = bn.minus(this.integerPart());
                } else {
                    bn = new BigNumber(NaN);
                }

                return bn;
            },

            "difference": function (value) {
                var diff;

                if (this.gt(value)) {
                    diff = this.minus(value);
                } else {
                    diff = this.neg().plus(value);
                }

                return diff;
            },

            "factorial": (function () {
                var factorialLookup = {};

                return function (exponentialAt) {
                    if (!this.isFinite() || this.lt(0) || !this.fractionalPart().equals(0)) {
                        return new BigNumber(NaN);
                    }

                    if (exponentialAt === undef) {
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
                            if (config.hasOwnProperty(prop)) {
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
                            if (previousConfig.hasOwnProperty(prop)) {
                                config[prop] = previousConfig[prop];
                            }
                        }
                    }

                    return factorialLookup[n];
                };
            }()),

            "toRadians": function (decimalPlacesOfPI) {
                return this.times(BigNumber.pi(decimalPlacesOfPI).div(180));
            }
        });

        extend(BigNumber, {
            "isBigNumber": function (inputArg) {
                return inputArg && typeof inputArg === "object" && inputArg instanceof BigNumber;
            },

            "integerPart": function (number) {
                return new BigNumber(number).integerPart();
            },

            "fractionalPart": function (number) {
                return new BigNumber(number).fractionalPart();
            },

            "difference": function (number1, number2) {
                return new BigNumber(number1).difference(number2);
            },

            "factorial": function (number, exponentialAt) {
                return new BigNumber(number).factorial(exponentialAt);
            },

            "pi": (function () {
                var piLookup = {};

                return function (decimalPlaces) {
                    if (decimalPlaces === undef) {
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
                            if (config.hasOwnProperty(prop)) {
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
                            if (previousConfig.hasOwnProperty(prop)) {
                                config[prop] = previousConfig[prop];
                            }
                        }

                        piLookup[decimalPlaces] = sum;
                    }

                    return piLookup[decimalPlaces];
                };
            }()),

            "toRadians": function (number, decimalPlacesPI) {
                return new BigNumber(number).toRadians(decimalPlacesPI);
            },

            "sin": (function () {
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

        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }

        function isArray(inputArg) {
            return inputArg && typeof inputArg === "object" && toStringFN.call(inputArg) === arrayObjectString;
        }

        function isDate(inputArg) {
            return inputArg && typeof inputArg === "object" && toStringFN.call(inputArg) === dateObjectString;
        }

        function isDateValid(inputArg) {
            return inputArg && isDate(inputArg) && !isNaN(inputArg.getTime());
        }

        function isDigit(character) {
            return typeof character === "string" && trim(character).length === 1 && !isNaN(character);
        }

        function isValidValue(value) {
            var type = typeof value;

            return (type === "number" || (type === "string" && trim(value).length)) && isFinite(value);
        }

        function intToNumber(input) {
            var number = +input,
                type = typeof input;

            if ((type !== "number" && type !== "string") || !isFinite(number) || parseInt(input, 10) !== number) {
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

        function arrayToObject(arr) {
            var length = arr.length,
                struct = {},
                temp = {},
                day,
                fraction,
                index,
                element,
                number,
                time,
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
                    if (number.lt(-24) || number.gt(24)) {
                        //invalid
                        return temp;
                    }

                    number = number.toNumber() || 0;
                    break;
                default:
                    number = undef;
                }

                if (number !== undef) {
                    struct[fullKeys[index]] = number;
                }
            }

            return struct;
        }

        function objectToArray(struct) {
            var arr = [],
                index,
                value;

            for (index = 0; index < lengthFullKeys; index += 1) {
                value = struct[fullKeys[index]];
                if (value !== undef) {
                    arr.push(value);
                }
            }

            return arr;
        }

        function dateToObject(date) {
            var struct = {},
                valid = isDateValid(date),
                index,
                key,
                value;

            for (index = 0; index < lengthFullKeys; index += 1) {
                key = fullKeys[index];
                if (valid) {
                    value = date[dateMethods[index]]();
                    if (key === "month") {
                        value += 1;
                    }
                } else {
                    value = NaN;
                }

                struct[key] = value;
            }

            return struct;
        }

        function objectToDate(struct) {
            var date = new Date(),
                index,
                key,
                value;

            for (index = 0; index < lengthFullKeys; index += 1) {
                key = fullKeys[index];
                value = struct[fullKeys[index]];
                if (key === "month") {
                    value -= 1;
                }

                date[dateMethods[index]](value.toNumber());
            }

            return date;
        }

        function toISOString(date) {
            if (!date.isValid()) {
                return "Invalid Date";
            }

            var string = "",
                index = 0,
                count,
                padding,
                last,
                value;

            for (count = 0; count < 3; count += 1) {
                if (date.get(fullKeys[count]) === undef) {
                    index = 3;
                    break;
                }
            }

            for (last = lengthFullKeys - 1; index < last; index += 1) {
                padding = 2;
                if (index === 0) {
                    padding = 4;
                } else if (index === 3) {
                    string += "T";
                } else if (index === 6) {
                    padding = 3;
                }

                value = date.get(fullKeys[index]);
                string += padLeadingZero(value, padding);
                if (index < 2) {
                    string += "-";
                } else if (index > 2 && index < 5) {
                    string += ":";
                } else if (index === 5) {
                    string += ".";
                }
            }

            value = date.get(fullKeys[lengthFullKeys - 1]);
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

            this.get = function () {
                return extend({}, isoObject);
            };

            this.set = function (newIsoObject) {
                isoObject = extend({}, newIsoObject);

                return this;
            };

            isoObject = this.parse(isoString).valueOf();
        }

        extend(ISO.prototype, {
            "parse": function parse(isoString) {
                var dateObject = {},
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

                temp = trim(isoString).split("T");
                length = temp.length;
                if (length < 1 || length > 2) {
                    //invalid
                    this.set(dateObject);
                    return this;
                }

                element = temp[0];
                if (length === 1) {
                    if (element.charAt(element.length - 1) === "Z" || element.search(/[\.,:]|\d[\-+]/) !== -1) {
                        temp.unshift("");
                        isTime = true;
                    } else {
                        temp.push("00:00:00,000Z");
                        isTime = false;
                    }
                } else {
                    if (!element.length) {
                        isTime = true;
                    }
                }

                time = temp[1];
                if (!isTime) {
                    date = temp[0];
                    character = date.charAt(0);
                    if (!isDigit(character)) {
                        if (character === "+") {
                            signYear = 1;
                        } else if (character === "-") {
                            signYear = -1;
                        } else {
                            //invalid
                            this.set(dateObject);
                            return this;
                        }

                        date = date.slice(1);
                    }

                    if (date.indexOf("-") === -1) {
                        temp = [];
                        switch (date.length) {
                        case 8:
                            temp[0] = date.slice(0, 4);
                            temp[1] = date.slice(4, 2);
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
                            this.set(dateObject);
                            return this;
                        }
                    } else {
                        temp = date.split("-");
                    }

                    length = temp.length;
                    if (length < 2 || length > 3) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    if (length === 2) {
                        temp.push("01");
                    }

                    date = {};
                    for (index = 0; index < 3; index += 1) {
                        element = temp[index];
                        length = element.length;
                        if ((index && length !== 2) || (!index && ((!signYear && length !== 4) || (signYear && length !== 5)))) {
                            //invalid
                            this.set(dateObject);
                            return this;
                        }

                        number = intToNumber(element);
                        if (isNaN(number) || (index === 1 && (number < 1 || number > 12)) || (index === 2 && (number < 1 || number > daysInMonth(date.year, date.month)))) {
                            //invalid
                            this.set(dateObject);
                            return this;
                        }

                        if (!index && signYear) {
                            number *= signYear;
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
                        this.set(dateObject);
                        return this;
                    }
                }

                temp = time.split(/[\-+]/);
                length = temp.length;
                if (length < 1 || length > 2) {
                    //invalid
                    this.set(dateObject);
                    return this;
                }

                if (length === 1) {
                    value = new Date().getTimezoneOffset();
                    if (value === 0) {
                        value = "00";
                    } else {
                        value = fractionToTime(Math.abs(value), "minute");
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
                    this.set(dateObject);
                    return this;
                }

                if (length === 1) {
                    offset.push("00");
                }

                for (index = 0; index < 2; index += 1) {
                    element = offset[index];
                    length = element.length;
                    if (length !== 2) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    number = intToNumber(element);
                    if (isNaN(number)) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    offset[index] = number;
                }

                if (signOffset === -1 && offset[0] === 0 && offset[1] === 0) {
                    //invalid
                    this.set(dateObject);
                    return this;
                }

                time = temp[0];
                if (time.search(/[\.,:]/) === -1) {
                    temp = [];
                    switch (time.length) {
                    case 6:
                        temp[0] = time.slice(0, 2);
                        temp[1] = time.slice(2, 2);
                        temp[2] = time.slice(4);
                        break;
                    case 4:
                        temp[0] = time.slice(0, 2);
                        temp[1] = time.slice(2);
                        temp[2] = "00";
                        break;
                    case 2:
                        temp[0] = time;
                        temp[1] = "00";
                        temp[2] = "00";
                        break;
                    default:
                        //invalid
                        this.set(dateObject);
                        return this;
                    }
                } else if (time.search(/[\.,]/) !== -1) {
                    temp = time.split(":");
                    length = temp.length;
                    if (length > 3) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    for (index = 0; index < length; index += 1) {
                        element = temp[index];
                        timeFraction = element.split(/[\.,]/);
                        if (found || timeFraction.length > 2 || (timeFraction.length === 2 && (isNaN(intToNumber(timeFraction[0])) || isNaN(intToNumber(timeFraction[1]))))) {
                            //invalid
                            this.set(dateObject);
                            return this;
                        }

                        if (timeFraction.length === 2) {

                            found = true;
                        }
                    }

                    temp = time.split(/[\.,:]/);
                } else {
                    temp = time.split(":");
                }

                length = temp.length;
                if (length < 2 || length > 5) {
                    //invalid
                    this.set(dateObject);
                    return this;
                }

                if (found) {
                    last = length - 1;
                    element = temp[last];
                    temp.pop();
                    switch (length) {
                    case 2:
                        name = "hour";
                        break;
                    case 3:
                        name = "minute";
                        break;
                    case 4:
                        name = "second";
                        break;
                    default:
                    }

                    temp = temp.concat(fractionToTime("0." + element, name).slice(last));
                } else {
                    if (length <= 3) {
                        temp.push("00");
                        if (length < 4) {
                            temp.push("000");
                        }
                    }
                }

                time = {};
                found = false;
                for (index = 0; index < 4; index += 1) {
                    element = temp[index];
                    length = element.length;
                    if (length < 1 || (index < 3 && length > 2) || (index === 3 && length > 3)) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    number = intToNumber(element);
                    if (!index && number === 24) {
                        found = true;
                    }

                    if (isNaN(number) || number < 0 || (found && index && number > 0) || (!index && number > 24) || (index > 0 && index < 4 && number > 59) || (index === 4 && number >= 1000)) {
                        //invalid
                        this.set(dateObject);
                        return this;
                    }

                    time[fullKeys[index + 3]] = number;
                }

                if (!isTime) {
                    extend(dateObject, date);
                }

                time[fullKeys[lengthFullKeys - 1]] = signOffset * (offset[0] * 60  + offset[1]);
                extend(dateObject, time);
                this.set(dateObject);

                return this;
            },

            "isValid": function isValid() {
                var isoObject = this.get(),
                    count = 0,
                    element,
                    prop;

                if (isoObject === null || typeof isoObject !== "object") {
                    return false;
                }

                for (prop in isoObject) {
                    if (isoObject.hasOwnProperty(prop)) {
                        element = isoObject[prop];
                        if (typeof element !== "number" || !isFinite(element)) {
                            return false;
                        }

                        count += 1;
                    }
                }

                return count !== 0;
            },

            "toString": function () {
                var str = "",
                    isoObject = this.get(),
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
            },

            "valueOf": function () {
                return extend({}, this.get());
            },

            "toArray": function () {
                return objectToArray(this.get());
            }
        });

        function AstroDate() {
            var args = arguments,
                argsLength = args.length,
                struct,
                arg,
                type;

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
                    type = typeof arg;
                    if (type === "number") {
                        struct = dateToObject(new Date(arg));
                    } else if (type === "string") {
                        struct = new ISO(arg).valueOf();
                    } else {
                        throw new TypeError();
                    }
                }

                break;
            default:
                throw new SyntaxError();
            }

            extend(this, {
                "get": function (key) {
                    var unit = AstroDate.normaliseUnits(key),
                        value;

                    if (unit === "date") {
                        value = objectToDate(struct);
                    } else if (unit === "struct") {
                        value = extend({}, struct);
                    } else if (unit) {
                        value = struct[unit];
                    }

                    return value;
                },

                "set": function (key, value) {
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
                            struct = extend({}, value);
                        } else {
                            struct = new ISO(key).valueOf();
                        }
                    } else {
                        throw new SyntaxError();
                    }

                    return this;
                }
            });
        }

        extend(AstroDate.prototype, {
            "isValid": function isValid() {
                var structObject = this.get("struct"),
                    count = 0,
                    element,
                    prop;

                if (structObject === null || typeof structObject !== "object") {
                    return false;
                }

                for (prop in structObject) {
                    if (structObject.hasOwnProperty(prop)) {
                        element = structObject[prop];
                        if (typeof element !== "number" || !isFinite(element)) {
                            return false;
                        }

                        count += 1;
                    }
                }

                return count !== 0;
            },

            "parse": function (isoString) {
                if (typeof isoString === "string") {
                    this.set("struct", new ISO(isoString).valueOf());
                } else {
                    throw new SyntaxError();
                }

                return this;
            },

            "toString": function () {
                return toISOString(this);
            },

            "valueOf": function () {
                return this.get("struct");
            },

            "toArray": function () {
                return objectToArray(this.get("struct"));
            },

            "timeTo": function (unit) {
                var hour = bignumber(this.get("hour")),
                    minute = bignumber(this.get("minute")),
                    second = bignumber(this.get("second")),
                    millisecond = bignumber(this.get("millisecond")),
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
            },

            "julianDay": function (julianDay) {
                var year,
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

                if (julianDay === undef) {
                    year = bignumber(this.get("year"));
                    month = bignumber(this.get("month"));
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

                    return year.plus(4716).times(365.25).integerPart().plus(month.plus(1).times(30.6001).integerPart()).plus(this.get("day")).plus(this.timeTo("day")).plus(b).minus(1524.5);
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

                this.set("year", year.toNumber());
                this.set("month", month.toNumber());
                this.set("day", day.toNumber());
                time = dayFractionToTime(f);
                this.set("hour", time[0]);
                this.set("minute", time[1]);
                this.set("second", time[2]);
                this.set("millisecond", time[3]);
                this.set("offset", 0);
                return this;
            },

            "monthOfYear": function () {
                return monthNames[this.get("month")];
            },

            "dayOfWeek": function () {
                return dayNames[(this.julianDay() + 1.5) % 7];
            },

            "isLeapYear": function () {
                return isLeapYear(this.get("year"));
            },

            "daysInYear": function () {
                return daysInYear(this.get("year"));
            },

            "daysInMonth": function () {
                return daysInMonth(this.get("year"), this.get("month"));
            },

            "dayOfYear": function () {
                return dayOfYear(this.get("year"), this.get("month"), this.get("day"));
            },

            "dayFractionToTime": function (dayFraction) {
                return dayFractionToTime(dayFraction);
            }
        });

        if (JSON) {
            if (typeof JSON.stringify === "function") {
                extend(AstroDate.prototype, {
                    "toJSON": function () {
                        return JSON.stringify(this.get("struct"));
                    }
                });
            }

            if (typeof JSON.parse === "function") {
                extend(AstroDate.prototype, {
                    "fromJSON": function (jsonString) {
                        var parsedObject = JSON.parse(jsonString),
                            struct = {},
                            astrodate;

                        if (parsedObject !== null && typeof parsedObject === "object") {
                            astrodate = new AstroDate(parsedObject);
                            if (astrodate.isValid()) {
                                struct = astrodate.valueOf();
                            }
                        }

                        this.set("struct", struct);

                        return this;
                    }
                });
            }
        }

        extend(AstroDate, {
            "version": VERSION,

            "bignumber": bignumber,

            "BigNumber": BigNumber,

            "normaliseUnits": function (unitString) {
                var units;

                if (typeof unitString === "string" && unitString) {
                    units = trim(unitString);
                    units = unitAliases[units] || trim(units.toLowerCase().replace(/([\S\s])s$/, "$1"));
                }

                return units;
            },

            "isAstroDate": function (inputArg) {
                return inputArg && typeof inputArg === "object" && inputArg instanceof AstroDate;
            },

            "monthOfYear": function (month) {
                return monthNames[month];
            },

            "isLeapYear": function (year) {
                return isLeapYear(year);
            },

            "daysInYear": function (year) {
                return daysInYear(year);
            },

            "daysInMonth": function (year, month) {
                return daysInMonth(year, month);
            },

            "dayOfYear": function (year, month, day) {
                return dayOfYear(year, month, day);
            },

            // really? Could be better
            "dayFractionToTime": function (dayFraction) {
                return dayFractionToTime(dayFraction);
            }
        });

        return AstroDate;
    }));
}(this));
