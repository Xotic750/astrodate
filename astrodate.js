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

(function (thisContext, private_undefined) {
    "use strict";

    // Safari 2.x NFE bug fix
    // http://kangax.github.io/nfe/
    var tempSafariNFE;

    (function (name, definition) {
        /*global module, require, define */
        var bigNumberFunc = "BigNumber",
            bigNumberString = bigNumberFunc.toLowerCase(),
            projectPaths,
            projectConfig;

        if ("object" === typeof module && null !== module && "object" === typeof module.exports && null !== module.exports) {
            module.exports = definition(require(bigNumberString + ".js"));
        } else if ("function" === typeof define && "object" === typeof define.amd && null !== define.amd) {
            projectPaths = {};
            projectConfig = {};
            projectPaths[bigNumberString] = "//cdn.jsdelivr.net/bignumber.js/1.1.0/bignumber.min";
            projectConfig[bigNumberString] = {};
            require.config({
                paths: projectPaths,
                config: projectConfig
            });

            // name should be removed when local tests are completed
            define(name, [bigNumberString], definition);
        } else {
            thisContext[name] = definition(thisContext[bigNumberFunc]);
        }

        /*global */
    }("astrodate", (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var nfeDefinition;

        tempSafariNFE = function nfeDefinition(BigNumber) {
            BigNumber.config({
                DECIMAL_PLACES : 50,
                ROUNDING_MODE : 4,
                EXPONENTIAL_AT : [-7, 20],
                RANGE : [-1000000000, 1000000000],
                ERRORS : true
            });

            var VERSION = "0.4.1",
                //MAX_INTEGER = 9007199254740991,
                //MIN_INTEGER = -9007199254740991,
                UWORD32 = Math.pow(2, 32),
                MAX_UINT32 = UWORD32 - 1,
                baseObject = {},
                defaultProperties = [],
                baseArray = [],
                baseString = "",
                toObjectString,
                baseNumber = 0,
                baseBoolean = true,
                fullKeys = [],
                shortNameLength = {},
                dayNames = [],
                monthNames = [],
                protoName = "__proto__",
                toObject,
                //j2000 = [2000, 1, 1, 11, 58, 55, 816],
                extend,
                arrayIndexOf,
                defineProperty,
                defineProperties,
                objectFreeze,
                objectIsFrozen,
                objectHasOwnProperty,
                getOwnPropertyDescriptor,
                arrayIsArray,
                objectInstanceOf,
                objectGetPrototypeOf,
                isPlainObject,
                //getReferenceObject,
                //create,
                objectKeys,
                stringTrim,
                stringRepeat,
                stringSplit,
                //startsWith,
                //endsWith,
                stringContains,
                toObjectFixIndexedAccess,
                arrayUnshift,
                arrayForEach,
                arraySome,
                arrayMap,
                //arrayFilter,
                arrayReduce,
                objectIs,
                numberToInteger,
                numberIsNaN,
                numberIsFinite,
                mathSign,
                AstroDate,
                isBigNumber;

            function toNumber(inputArg) {
                return +inputArg;
            }

            function strictEqual(a, b) {
                return a === b;
            }

            function lt(number, limit) {
                return number < limit;
            }

            function lte(number, limit) {
                return number <= limit;
            }

            function gt(number, limit) {
                return number > limit;
            }

            function gte(number, limit) {
                return number >= limit;
            }

            function mod(number1, number2) {
                return number1 % number2;
            }

            function clamp(number, min, max) {
                return Math.min(Math.max(number, min), max);
            }

            function inRange(number, min, max) {
                return gte(number, min) && lte(number, max);
            }

            function isUndefined(inputArg) {
                return strictEqual(typeof inputArg, "undefined");
            }

            function isNull(inputArg) {
                return strictEqual(inputArg, null);
            }

            function isBoolean(inputArg) {
                return strictEqual(inputArg, true) || strictEqual(inputArg, false);
            }

            function isNumber(inputArg) {
                return strictEqual(typeof inputArg, "number");
            }

            function isString(inputArg) {
                return strictEqual(typeof inputArg, "string");
            }

            function checkObjectCoercible(inputArg) {
                if (isUndefined(inputArg) || isNull(inputArg)) {
                    throw new TypeError("Cannot convert '" + inputArg + "' to object");
                }

                return inputArg;
            }

            toObject = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var CtrBoolean = baseBoolean.constructor,
                    CtrNumber = baseNumber.constructor,
                    CtrString = baseString.constructor,
                    nfeToObject;

                tempSafariNFE = function nfeToObject(inputArg) {
                    var object = checkObjectCoercible(inputArg);

                    if (isBoolean(object)) {
                        object = new CtrBoolean(object);
                    } else if (isNumber(object)) {
                        object = new CtrNumber(object);
                    } else if (isString(object)) {
                        object = new CtrString(object);
                    }

                    return object;
                };

                nfeToObject = null;

                return tempSafariNFE;
            }());

            // named anyToString instead of toString because of SpiderMonkey and Blackberry bug
            function anyToString(inputArg) {
                var val;

                if (isString(inputArg)) {
                    val = inputArg;
                } else if (isUndefined(inputArg)) {
                    val = "undefined";
                } else {
                    val = String(inputArg);
                }

                return val;
            }

            toObjectString = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var toStringFN = baseObject.toString,
                    nfeToObjectString;

                try {
                    if (strictEqual(toStringFN.call(), "[object Undefined]") && strictEqual(toStringFN.call(null), "[object Null]")) {
                        tempSafariNFE = function nfeToObjectString(object) {
                            return toStringFN.call(object);
                        };
                    }
                } catch (exception) {
                    tempSafariNFE = null;
                }

                if (isNull(tempSafariNFE)) {
                    tempSafariNFE = function nfeToObjectString(object) {
                        var val;

                        if (isUndefined(object)) {
                            val = "[object Undefined]";
                        } else if (isNull(object)) {
                            val = "[object Null]";
                        } else {
                            val = toStringFN.call(object);
                        }

                        return val;
                    };
                }

                nfeToObjectString = null;

                return tempSafariNFE;
            }());

            function isRegExp(inputArg) {
                return strictEqual(toObjectString(inputArg), "[object RegExp]");
            }

            function isObject(inputArg) {
                return strictEqual(toObjectString(inputArg), "[object Object]");
            }

            function isFunction(inputArg) {
                return strictEqual(toObjectString(inputArg), "[object Function]");
            }

            // named arrayIsArray instead of isArray because of SpiderMonkey and Blackberry bug
            arrayIsArray = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isArrayFN = baseArray.isArray,
                    nfeIsArray;

                if (isFunction(isArrayFN)) {
                    tempSafariNFE = isArrayFN;
                } else {
                    tempSafariNFE = function nfeIsArray(inputArg) {
                        return strictEqual(toObjectString(inputArg), "[object Array]");
                    };
                }

                nfeIsArray = null;

                return tempSafariNFE;
            }());

            function isDate(inputArg) {
                return strictEqual(toObjectString(inputArg), "[object Date]");
            }

            // named objectIs instead of objectIs because of SpiderMonkey and Blackberry bug
            objectIs = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isIsFn = baseObject.constructor.objectIs,
                    nfeIs;

                if (isFunction(isIsFn)) {
                    tempSafariNFE = isIsFn;
                } else {
                    tempSafariNFE = function nfeIs(x, y) {
                        var val;

                        if (strictEqual(x, y)) {
                            if (strictEqual(x, 0)) {
                                val =  strictEqual(1 / x, 1 / y);
                            } else {
                                val = true;
                            }
                        } else {
                            val = !strictEqual(x, x) && !strictEqual(y, y);
                        }

                        return val;
                    };
                }

                nfeIs = null;

                return tempSafariNFE;
            }());

            // named numberIsNaN instead of isNaN because of SpiderMonkey and Blackberry bug
            numberIsNaN = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isNaNFN = baseNumber.constructor.isNaN,
                    nfeIsNaN;

                if (isFunction(isNaNFN)) {
                    tempSafariNFE = isNaNFN;
                } else {
                    tempSafariNFE = function nfeIsNaN(number) {
                        return objectIs(number, NaN);
                    };
                }

                nfeIsNaN = null;

                return tempSafariNFE;
            }());

            // named numberIsFinite instead of isFinite because of SpiderMonkey and Blackberry bug
            numberIsFinite = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isFiniteFN = baseNumber.constructor.isFinite,
                    nfeIsFinite;

                if (isFunction(isFiniteFN)) {
                    tempSafariNFE = isFiniteFN;
                } else {
                    tempSafariNFE = function nfeIsFinite(number) {
                        return isNumber(number) && isFinite(number);
                    };
                }

                nfeIsFinite = null;

                return tempSafariNFE;
            }());

            // named mathSign instead of sign because of SpiderMonkey and Blackberry bug
            mathSign = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var signFN = Math.sign,
                    nfeSign;

                if (isFunction(signFN)) {
                    tempSafariNFE = signFN;
                } else {
                    tempSafariNFE = function nfeSign(value) {
                        var number = toNumber(value),
                            val;

                        if (objectIs(number, 0) || numberIsNaN(number)) {
                            val = number;
                        } else if (lt(number, 0)) {
                            val = -1;
                        } else {
                            val = 1;
                        }

                        return val;
                    };
                }

                nfeSign = null;

                return tempSafariNFE;
            }());

            // named numberToInteger instead of toInteger because of SpiderMonkey and Blackberry bug
            numberToInteger = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var toIntegerFN = Number.toInteger,
                    nfeToInteger;

                if (isFunction(toIntegerFN)) {
                    tempSafariNFE = toIntegerFN;
                } else {
                    tempSafariNFE = function nfeToInteger(inputArg) {
                        var number = toNumber(inputArg),
                            val;

                        if (numberIsNaN(number)) {
                            val = +0;
                        } else if (objectIs(number, 0) || !numberIsFinite(number)) {
                            val = number;
                        } else {
                            val = mathSign(number) * Math.floor(Math.abs(number));
                        }

                        return val;
                    };
                }

                nfeToInteger = null;

                return tempSafariNFE;
            }());

            /*
            function toInt32(inputArg) {
                var number = toNumber(inputArg),
                    int32bit,
                    val;

                if (objectIs(number, 0) || !numberIsFinite(number)) {
                    val = +0;
                } else {
                    int32bit = mod(mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                    if (gt(int32bit, UWORD32)) {
                        val = int32bit - UWORD32;
                    } else {
                        val = int32bit;
                    }
                }

                return val;
            }
            */

            function toUint32(inputArg) {
                var number = toNumber(inputArg),
                    val;

                if (objectIs(number, 0) || !numberIsFinite(number)) {
                    val = +0;
                } else {
                    val = mod(mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                }

                return val;
            }

            function isTypeObject(inputArg) {
                return (!isNull(inputArg) && strictEqual(typeof inputArg, "object")) || isRegExp(inputArg);
            }

            /*
            getReferenceObject = (function () {
                var parent = document.body || document.documentElement,
                    javascript = "javascript";

                return function (name) {
                    var iframe = document.createElement('iframe'),
                        reference;

                    iframe.style.display = "none";
                    iframe.src = javascript + ":";
                    parent.appendChild(iframe);
                    reference = iframe.contentWindow[name];
                    parent.removeChild(iframe);
                    iframe = null;

                    return reference;
                };
            }());

            create = (function () {
                var createFN = baseObject.func,
                    Type,
                    func,
                    createEmpty;

                if (isFunction(createFN)) {
                    func = function (prototype) {
                        return createFN(prototype);
                    };
                } else {
                    Type = function Object() {
                        return;
                    };

                    if (isNull(objectGetPrototypeOf(baseObject)[protoName]) || isUndefined(document)) {
                        createEmpty = function () {
                            var val = {};

                            val[protoName] = null;

                            return val;
                        };
                    } else {
                        createEmpty = function () {
                            var empty = objectGetPrototypeOf(getReferenceObject("Object")),
                                Empty = function Object() {
                                    return;
                                };

                            arrayForEach(defaultProperties, function (element) {
                                delete empty[element];
                            });

                            empty[protoName] = null;
                            Empty.prototype = empty;

                            createEmpty = function () {
                                return new Empty();
                            };

                            return new Empty();
                        };
                    }

                    func = function (prototype) {
                        var object;

                        if (isNull(prototype)) {
                            object = createEmpty();
                        } else {
                            if (!isTypeObject(prototype) && !isFunction(prototype)) {
                                throw new TypeError("Object prototype may only be an Object or null");
                            }

                            Type.prototype = prototype;
                            object = new Type();
                            object[protoName] = prototype;
                        }

                        return object;
                    };
                }

                return func;
            }());
            */

            // named stringSplit instead of split because of SpiderMonkey and Blackberry bug
            stringSplit = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var splitFN = baseString.split,
                    compliantExecNpcg = isUndefined(/()??/.exec("")[1]),
                    nfeSplit;

                function replacer(separator, match, args) {
                    var length = args.length - 2,
                        index;

                    match[0].replace(separator, function () {
                        for (index = 1; lt(index, length); index += 1) {
                            if (isUndefined(arguments[index])) {
                                match[index] = private_undefined;
                            }
                        }
                    });
                }

                tempSafariNFE = function nfeSplit(str, separator, limit) {
                    var string = anyToString(checkObjectCoercible(str)),
                        output,
                        flags,
                        lastLastIndex,
                        separator2,
                        match,
                        lastIndex,
                        lastLength,
                        val;

                    if (isRegExp(separator)) {
                        flags = "g";
                        if (separator.ignoreCase) {
                            flags += "i";
                        }

                        if (separator.multiline) {
                            flags += "m";
                        }

                        if (separator.extended) {
                            flags += "x";
                        }

                        if (separator.sticky) {
                            flags += "y";
                        }

                        separator = new RegExp(separator.source, flags);
                        if (!compliantExecNpcg) {
                            separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
                        }

                        if (isUndefined(limit)) {
                            limit = MAX_UINT32;
                        } else {
                            limit = toUint32(limit);
                        }

                        output = [];
                        flags = "g";
                        lastLastIndex = 0;
                        match = separator.exec(string);
                        while (match) {
                            lastIndex = match.index + match[0].length;
                            if (lastIndex > lastLastIndex) {
                                output.push(string.slice(lastLastIndex, match.index));
                                if (!compliantExecNpcg && gt(match.length, 1)) {
                                    replacer(separator2, match, arguments);
                                }

                                if (gt(match.length, 1) && lt(match.index, string.length)) {
                                    output = output.concat(match.slice(1));
                                }

                                lastLength = match[0].length;
                                lastLastIndex = lastIndex;
                                if (gte(output.length, limit)) {
                                    break;
                                }
                            }

                            if (objectIs(separator.lastIndex, match.index)) {
                                separator.lastIndex += 1;
                            }

                            match = separator.exec(string);
                        }

                        if (objectIs(lastLastIndex, string.length)) {
                            if (lastLength || !separator.test("")) {
                                output.push("");
                            }
                        } else {
                            output.push(string.slice(lastLastIndex));
                        }

                        if (gt(output.length, limit)) {
                            return output.slice(0, limit);
                        }

                        val = output;
                    } else {
                        val = splitFN.call(str, separator, limit);
                    }

                    return val;
                };

                nfeSplit = null;

                return tempSafariNFE;
            }());

            function firstChar(inputArg) {
                return anyToString(checkObjectCoercible(inputArg)).charAt(0);
            }

            function lastChar(inputArg) {
                var thisStr = anyToString(checkObjectCoercible(inputArg));

                return thisStr.charAt(thisStr.length - 1);
            }

            function padLeadingChar(inputArg, character, size) {
                var string = anyToString(checkObjectCoercible(inputArg)),
                    singleChar = firstChar(anyToString(checkObjectCoercible(character))),
                    count = numberToInteger(size) - string.length;

                if (lt(count, 0) || objectIs(count, Infinity)) {
                    count = 0;
                }

                return stringRepeat(singleChar, count) + string;
            }

            // named stringRepeat instead of repeat because of SpiderMonkey and Blackberry bug
            stringRepeat = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var repeatFN = baseString.constructor.repeat,
                    nfeRepeat;

                function rep(s, times) {
                    var half,
                        val;

                    if (lt(times, 1)) {
                        val = "";
                    } else if (mod(times, 2)) {
                        val = rep(s, times - 1) + s;
                    } else {
                        half = rep(s, times / 2);
                        val = half + half;
                    }

                    return val;
                }

                if (isFunction(repeatFN)) {
                    tempSafariNFE = function nfeRepeat(string, times) {
                        return repeatFN.call(string, times);
                    };
                } else {
                    tempSafariNFE = function nfeRepeat(string, count) {
                        var thisString = anyToString(checkObjectCoercible(string)),
                            times = numberToInteger(count);

                        if (lt(times, 0) || objectIs(times, Infinity)) {
                            throw new RangeError();
                        }

                        return rep(thisString, times);
                    };
                }

                nfeRepeat = null;

                return tempSafariNFE;
            }());

            /*
            startsWith = (function () {
                var startsWithFN = baseString.constructor.startsWith,
                    func;

                if (isFunction(startsWithFN)) {
                    func = function (string, searchString, position) {
                        return startsWithFN.call(string, searchString, position);
                    };
                } else {
                    func = function (string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length,
                            start = clamp(toInteger(position), 0, thisLen);

                        return objectIs(thisStr.slice(start, start + thisLen), searchStr);
                    };
                }

                return func;
            }());
            */

            /*
            endsWith = (function () {
                var endsWithFN = baseString.constructor.endsWith,
                    func;

                if (isFunction(endsWithFN)) {
                    func = function (string, searchString, position) {
                        return endsWithFN.call(string, searchString, position);
                    };
                } else {
                    func = function (string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length,
                            end,
                            start;

                        if (isUndefined(position)) {
                            position = thisLen;
                        } else {
                            position = toInteger(position);
                        }

                        end = clamp(position, 0, thisLen);
                        start = end - searchStr.length;

                        return gte(start, 0) && objectIs(thisStr.slice(start, end), searchStr);
                    };
                }

                return func;
            }());
            */

            // named stringContains instead of contains because of SpiderMonkey and Blackberry bug
            stringContains = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var containsFN = baseString.constructor.contains,
                    nfeContains;

                if (isFunction(containsFN)) {
                    tempSafariNFE = function nfeContains(string, searchString, position) {
                        return containsFN.call(string, searchString, position);
                    };
                } else {
                    tempSafariNFE = function nfeContains(string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length;

                        if (isUndefined(position)) {
                            position = thisLen;
                        } else {
                            position = numberToInteger(position);
                        }

                        return !objectIs(baseString.indexOf.call(thisStr, searchStr, clamp(position, 0, thisLen)), -1);
                    };
                }

                nfeContains = null;

                return tempSafariNFE;
            }());

            // named objectGetPrototypeOf instead of getPrototypeOf because of SpiderMonkey and Blackberry bug
            objectGetPrototypeOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
                    nfeGetPrototypeOf,
                    oPrototype;

                if (isFunction(getPrototypeOfFN)) {
                    tempSafariNFE = getPrototypeOfFN;
                } else if (isNull(baseObject.constructor.prototype[protoName])) {
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        return object[protoName];
                    };
                } else {
                    oPrototype = baseObject.constructor.prototype;
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        if (objectIs(object, oPrototype)) {
                            return null;
                        }

                        var prototype = object.constructor.prototype;

                        if (objectIs(object, prototype)) {
                            return oPrototype;
                        }

                        return prototype;
                    };
                }

                nfeGetPrototypeOf = null;

                return tempSafariNFE;
            }());

            function hasProperty(object, property) {
                return property in object;
            }

            // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
            // Create our own local "hasOwnProperty" function: native -> shim -> sham
            // named objectHasOwnProperty instead of hasOwnProperty because of SpiderMonkey and Blackberry bug
            objectHasOwnProperty = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var hasOwnPropertyFN = baseObject.hasOwnProperty, // to combat old IE8- issues, min support IE6
                    propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
                    hasDontEnumBug = true,
                    test = {
                        "toString": null
                    },
                    nfeHasOwnProperty;

                // use nfeHasOwnProperty to save a var
                for (nfeHasOwnProperty in test) {
                    hasDontEnumBug = false;
                }

                function checkDontEnums(object, property) {
                    return hasDontEnumBug && !objectIs(arrayIndexOf(defaultProperties, property), -1) && hasProperty(object, property) && !objectIs(object[property], objectGetPrototypeOf(object)[property]);
                }

                if (isFunction(hasOwnPropertyFN)) {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return hasOwnPropertyFN.call(object, property) || checkDontEnums(object, property);
                    };
                } else if (isFunction(propertyIsEnumerableFN)) {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return propertyIsEnumerableFN.call(object, property) || checkDontEnums(object, property);
                    };
                } else {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return hasProperty(object, property) && isUndefined(objectGetPrototypeOf(object)[property]);
                    };
                }

                nfeHasOwnProperty = null;

                return tempSafariNFE;
            }());

            toObjectFixIndexedAccess = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var boxedString = baseObject.constructor("a"),
                    splitString = !objectIs(boxedString[0], "a") || !hasProperty(boxedString, 0),
                    nfeToObjectFixIndexedAccess;

                if (splitString) {
                    tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
                        var object;

                        if (isString(inputArg)) {
                            object = stringSplit(inputArg, "");
                        } else {
                            object = toObject(inputArg);
                        }

                        return object;
                    };
                } else {
                    tempSafariNFE = toObject;
                }

                nfeToObjectFixIndexedAccess = null;

                return tempSafariNFE;
            }());

            // named arrayForEach instead of forEach because of SpiderMonkey and Blackberry bug
            arrayForEach = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var forEachFN = baseArray.forEach,
                    nfeForEach;

                if (isFunction(forEachFN)) {
                    tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                        return forEachFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        for (index = 0, length = toUint32(object.length); lt(index, length); index += 1) {
                            if (hasProperty(object, index)) {
                                fn.call(thisArg, object[index], index, object);
                            }
                        }
                    };
                }

                nfeForEach = null;

                return tempSafariNFE;
            }());

            // named arraySome instead of some because of SpiderMonkey and Blackberry bug
            arraySome = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var someFN = baseArray.some,
                    nfeSome;

                if (isFunction(someFN)) {
                    tempSafariNFE = function nfeSome(array, fn, thisArg) {
                        return someFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeSome(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index,
                            val;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        for (index = 0, length = toUint32(object.length), val = false; lt(index, length); index += 1) {
                            if (hasProperty(object, index) && fn.call(thisArg, object[index], index, object)) {
                                val = true;
                                break;
                            }
                        }

                        return val;
                    };
                }

                nfeSome = null;

                return tempSafariNFE;
            }());

            // named arrayMap instead of map because of SpiderMonkey and Blackberry bug
            arrayMap = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var mapFN = baseArray.map,
                    nfeMap;

                if (isFunction(mapFN)) {
                    tempSafariNFE = function nfeMap(array, fn, thisArg) {
                        return mapFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeMap(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index,
                            arr;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        for (index = 0, length = toUint32(object.length), arr = []; lt(index, length); index += 1) {
                            arr[index] = fn.call(thisArg, object[index], index, object);
                        }

                        return arr;
                    };
                }

                nfeMap = null;

                return tempSafariNFE;
            }());

            function returnElement(element) {
                return element;
            }

            function argumentsToArray() {
                return arrayMap(arguments, returnElement);
            }

            // named arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
            arrayUnshift = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var unshiftFN = baseArray.unshift,
                    nfeUnshift;

                if (objectIs(unshiftFN.call([], 0), 1)) {
                    tempSafariNFE = function nfeUnshift(array) {
                        return unshiftFN.apply(array, argumentsToArray(arguments).slice(1));
                    };
                } else {
                    tempSafariNFE = function nfeUnshift(array) {
                        unshiftFN.apply(array, argumentsToArray(arguments).slice(1));

                        return array.length;
                    };
                }

                nfeUnshift = null;

                return tempSafariNFE;
            }());

            /*
            // named arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
            arrayFilter = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var filterFN = baseArray.filter,
                    nfeFilter;

                if (isFunction(filterFN)) {
                    tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                        return filterFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            arr,
                            index,
                            element;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        for (index = 0, length = toUint32(object.length), arr = []; lt(index, length); index += 1) {
                            element = object[index];
                            if (fn.call(thisArg, element, index, object)) {
                                arr[index] = element;
                            }
                        }

                        return arr;
                    };
                }

                nfeFilter = null;

                return tempSafariNFE;
            }());
            */

            // named arrayReduce instead of reduce because of SpiderMonkey and Blackberry bug
            arrayReduce = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var reduceFN = baseArray.reduce,
                    errString = "Reduce of empty array with no initial value",
                    nfeReduce;

                if (isFunction(reduceFN)) {
                    tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                        return reduceFN.call(array, fn, initialValue);
                    };
                } else {
                    tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            k,
                            index,
                            accumulator,
                            kPresent;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        if (objectIs(length, 0) && lt(arguments.length, 3)) {
                            throw new TypeError(errString);
                        }

                        k = 0;
                        if (gt(arguments.length, 2)) {
                            accumulator = initialValue;
                        } else {
                            for (k = 0, length = toUint32(object.length), kPresent = false; !kPresent && lt(k, length); k += 1) {
                                kPresent = hasProperty(object, k);
                                if (kPresent) {
                                    accumulator = object[k];
                                }
                            }

                            if (!kPresent) {
                                throw new TypeError(errString);
                            }
                        }

                        for (index = k; lt(index, length); index += 1) {
                            if (hasProperty(object, index)) {
                                accumulator = fn.call(private_undefined, accumulator, object[index], index, object);
                            }
                        }

                        return accumulator;
                    };
                }

                return tempSafariNFE;
            }());

            // named stringTrim instead of trim because of SpiderMonkey and Blackberry bug
            stringTrim = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var trimFN = baseString.constructor.trim,
                    whiteSpacesList = [
                        0x0009, // Tab
                        0x000a, // Line Feed
                        0x000b, // Vertical Tab
                        0x000c, // Form Feed
                        0x000d, // Carriage Return
                        0x0020, // Space
                        0x0085, // Next line
                        0x00a0, // No-break space
                        0x1680, // Ogham space mark
                        0x180e, // Mongolian vowel separator
                        0x2000, // En quad
                        0x2001, // Em quad
                        0x2002, // En space
                        0x2003, // Em space
                        0x2004, // Three-per-em space
                        0x2005, // Four-per-em space
                        0x2006, // Six-per-em space
                        0x2007, // Figure space
                        0x2008, // Punctuation space
                        0x2009, // Thin space
                        0x200a, // Hair space
                        0x200b, // Zero width space
                        0x2028, // Line separator
                        0x2029, // Paragraph separator
                        0x202f, // Narrow no-break space
                        0x205f, // Medium mathematical space
                        0x3000, // Ideographic space
                        0xfeff // Byte Order Mark
                    ],
                    testString,
                    whiteSpacesString,
                    wsTrimRX,
                    nfeTrim;

                function buildTestString(previous, element) {
                    return previous + String.fromCharCode(element);
                }

                function buildWhiteSpaceString(previous, element) {
                    return previous + "\\u" + padLeadingChar(element.toString(16), "0", 4);
                }

                testString = arrayReduce(whiteSpacesList, buildTestString, "");
                if (isFunction(trimFN) && objectIs(trimFN.call(testString).length, 0)) {
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return trimFN.call(inputArg);
                    };
                } else {
                    whiteSpacesString = arrayReduce(whiteSpacesList, buildWhiteSpaceString, "");
                    wsTrimRX = new RegExp("^[" + whiteSpacesString + "]+|[" + whiteSpacesString + "]+$", "g");
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return anyToString(checkObjectCoercible(inputArg)).replace(wsTrimRX, "");
                    };
                }

                nfeTrim = null;

                return tempSafariNFE;
            }());

            // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
            // Create our own local "indexOf" function: native -> polyfill
            // named arrayIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
            arrayIndexOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var indexOfFN = baseArray.indexOf,
                    nfeIndexOf;

                if (isFunction(indexOfFN) && objectIs(indexOfFN.call([0, 1], 1, 2), 1)) {
                    tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                        return indexOfFN.call(array, searchElement, fromIndex);
                    };
                } else {
                    tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                        var object = toObjectFixIndexedAccess(array),
                            length = toUint32(object.length),
                            index,
                            start,
                            val;

                        if (strictEqual(length, 0)) {
                            val = -1;
                        } else {
                            if (gt(arguments.length, 2)) {
                                fromIndex = numberToInteger(fromIndex);
                            } else {
                                fromIndex = 0;
                            }

                            if (gte(fromIndex, length)) {
                                val = -1;
                            } else {
                                if (gte(fromIndex, 0)) {
                                    start = fromIndex;
                                } else {
                                    start = length - Math.abs(fromIndex);
                                }

                                if (lt(start, 0)) {
                                    start = 0;
                                }

                                for (index = start, val = -1; lt(index, length); index += 1) {
                                    if (hasProperty(object, index) && objectIs(searchElement, object[index])) {
                                        val = index;
                                        break;
                                    }
                                }
                            }
                        }

                        return val;
                    };
                }

                nfeIndexOf = null;

                return tempSafariNFE;
            }());

            // named objectKeys instead of keys because of SpiderMonkey and Blackberry bug
            objectKeys = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var keysFN = baseObject.keys,
                    nfeKeys;

                if (isFunction(keysFN)) {
                    tempSafariNFE = keysFN;
                } else {
                    tempSafariNFE = function nfeKeys(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.keys called on a non-object");
                        }

                        var props = [],
                            prop;

                        for (prop in object) {
                            if (objectHasOwnProperty(object, prop)) {
                                props.push(prop);
                            }
                        }

                        return props;
                    };
                }

                nfeKeys = null;

                return tempSafariNFE;
            }());

            // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
            // Create our own local "defineProperty" function: native -> sham
            defineProperty = (function () {
                var definePropertyFN = baseObject.constructor.defineProperty,
                    defineGetter = "__defineGetter__",
                    defineSetter = "__defineSetter__",
                    defineGetterFN,
                    defineSetterFN,
                    test;

                if (isFunction(definePropertyFN)) {
                    try {
                        test = definePropertyFN({}, "sentinel", {
                            "value": null
                        });

                        if (!isNull(test.sentinel)) {
                            definePropertyFN = null;
                        }
                    } catch (exception) {
                        definePropertyFN = null;
                    }
                }

                if (!isFunction(definePropertyFN)) {
                    defineGetterFN = baseObject[defineGetter];
                    defineSetterFN = baseObject[defineSetter];
                    definePropertyFN = function (object, property, descriptor) {
                        var prototype;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.defineProperty called on non-object");
                        }

                        if (!isTypeObject(descriptor) && !isFunction(descriptor)) {
                            throw new TypeError("Property description must be an object");
                        }

                        if (objectHasOwnProperty(descriptor, "value")) {
                            if (isNull(objectGetPrototypeOf(baseObject)[protoName])) {
                                prototype = object[protoName];
                                object[protoName] = objectGetPrototypeOf(baseObject);
                                delete object[property];
                                object[property] = descriptor.value;
                                object[protoName] = prototype;
                            } else {
                                object[property] = descriptor.value;
                            }
                        } else {
                            if (!isFunction(defineGetterFN) || !isFunction(defineSetterFN)) {
                                throw new TypeError("getters & setters can not be defined on this javascript engine");
                            }

                            if (isFunction(descriptor.get)) {
                                defineGetterFN.call(object, property, descriptor.get);
                            }

                            if (isFunction(descriptor.set)) {
                                defineSetterFN.call(object, property, descriptor.set);
                            }
                        }

                        return object;
                    };
                }

                return definePropertyFN;
            }());

            // Create our own local "defineProperties" function: native -> sham
            defineProperties = (function () {
                var definePropertiesFN = baseObject.constructor.defineProperties;

                if (!isFunction(definePropertiesFN)) {
                    definePropertiesFN = function (object, props) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.defineProperties called on non-object");
                        }

                        if (!isTypeObject(props) && !isFunction(props)) {
                            throw new TypeError("Property description must be an object");
                        }

                        arrayForEach(objectKeys(props), function (key) {
                            defineProperty(object, key, props[key]);
                        });

                        return object;
                    };
                }

                return definePropertiesFN;
            }());

            // Create our own local "getOwnPropertyDescriptor" function: native -> sham
            getOwnPropertyDescriptor = (function () {
                var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor,
                    lookupGetter = "__lookupGetter__",
                    lookupSetter = "__lookupSetter__",
                    lookupGetterFN,
                    lookupSetterFN,
                    test;

                if (isFunction(getOwnPropertyDescriptorFN)) {
                    try {
                        test = {
                            "sentinel": null
                        };

                        if (!isNull(getOwnPropertyDescriptorFN(test, "sentinel").value)) {
                            getOwnPropertyDescriptorFN = null;
                        }
                    } catch (exception) {
                        getOwnPropertyDescriptorFN = null;
                    }
                }

                if (!isFunction(getOwnPropertyDescriptorFN)) {
                    lookupGetterFN = baseObject[lookupGetter];
                    lookupSetterFN = baseObject[lookupSetter];
                    getOwnPropertyDescriptorFN = function (object, property) {
                        var descriptor,
                            prototype,
                            getter,
                            setter;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");
                        }

                        if (objectHasOwnProperty(object, property)) {
                            descriptor =  {
                                "enumerable": true,
                                "configurable": true
                            };

                            if (isFunction(lookupGetterFN) && isFunction(lookupSetterFN)) {
                                prototype = object[protoName];
                                object[protoName] = objectGetPrototypeOf(baseObject);
                                getter = lookupGetterFN.call(object, property);
                                setter = lookupSetterFN.call(object, property);
                                object[protoName] = prototype;
                                if (isFunction(getter) || isFunction(setter)) {
                                    if (isFunction(getter)) {
                                        descriptor.get = getter;
                                    }

                                    if (isFunction(setter)) {
                                        descriptor.set = setter;
                                    }
                                }
                            } else {
                                descriptor.value = object[property];
                                descriptor.writable = true;
                            }
                        }

                        return descriptor;
                    };
                }

                return getOwnPropertyDescriptorFN;
            }());

            // Create our own local "freeze" function: native -> sham
            // named objectFreeze instead of freeze because of SpiderMonkey and Blackberry bug
            objectFreeze = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var freezeFN = baseObject.constructor.freeze,
                    nfeFreeze;

                if (isFunction(freezeFN)) {
                    tempSafariNFE = freezeFN;
                } else {
                    tempSafariNFE = function nfeFreeze(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.freeze called on non-object");
                        }

                        return object;
                    };
                }

                nfeFreeze = null;

                return tempSafariNFE;
            }());

            // detect a Rhino bug and patch it
            try {
                objectFreeze(function () {
                    return;
                });
            } catch (exception) {
                objectFreeze = (function (freezeObject) {
                    var nfeFreeze;

                    tempSafariNFE = function nfeFreeze(object) {
                        var val;

                        if (isFunction(object)) {
                            val = object;
                        } else {
                            val = freezeObject(object);
                        }

                        return val;
                    };

                    nfeFreeze = null;

                    return tempSafariNFE;
                }(objectFreeze));
            }

            // Create our own local "isFrozen" function: native -> sham
            // named objectIsFrozen instead of isFrozen because of SpiderMonkey and Blackberry bug
            objectIsFrozen = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var isFrozenFN = baseObject.constructor.isFrozen,
                    nfeIsFrozen;

                if (isFunction(isFrozenFN)) {
                    tempSafariNFE = isFrozenFN;
                } else {
                    tempSafariNFE = function nfeIsFrozen(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError("Object.isFrozen called on non-object");
                        }

                        return false;
                    };
                }

                nfeIsFrozen = null;

                return tempSafariNFE;
            }());

            function deepFreeze(object) {
                var prop,
                    propKey;

                objectFreeze(object);
                for (propKey in object) {
                    prop = object[propKey];
                    if (objectHasOwnProperty(object, propKey) && (isTypeObject(prop) || isFunction(prop)) && !objectIsFrozen(prop)) {
                        deepFreeze(prop);
                    }
                }
            }

            // named objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
            objectInstanceOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                    nfeInstanceOf;

                if (isFunction(isPrototypeOfFN)) {
                    tempSafariNFE = function nfeInstanceOf(object, constructor) {
                        if (!isFunction(constructor)) {
                            throw new TypeError("Expecting a function in instanceOf check");
                        }

                        return isPrototypeOfFN.call(constructor.prototype, object);
                    };
                } else if (isFunction(objectGetPrototypeOf)) {
                    tempSafariNFE = function nfeInstanceOf(object, constructor) {
                        if (!isFunction(constructor)) {
                            throw new TypeError("Expecting a function in instanceOf check");
                        }

                        var val = false;

                        while (object) {
                            if (objectIs(object, constructor.prototype)) {
                                val = true;
                                break;
                            }

                            object = objectGetPrototypeOf(object);
                        }

                        return val;
                    };
                }

                nfeInstanceOf = null;

                return tempSafariNFE;
            }());

            isPlainObject = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var baseObjectPrototype = objectGetPrototypeOf(baseObject),
                    nfeIsPlainObject;

                tempSafariNFE = function nfeIsPlainObject(object) {
                    return isObject(object) && objectIs(objectGetPrototypeOf(object), baseObjectPrototype);
                };

                nfeIsPlainObject = null;

                return tempSafariNFE;
            }());

            extend = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var nfeExtend;

                tempSafariNFE = function nfeExtend(target, source) {
                    if (!isTypeObject(target) && !isFunction(target)) {
                        throw new TypeError("extend called on a non-object");
                    }

                    arrayForEach(objectKeys(source), function (key) {
                        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                    });

                    return target;
                };

                nfeExtend = null;

                return tempSafariNFE;
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
                            var n,
                                config,
                                previousConfig,
                                i,
                                val;

                            if (this.lt(0) || !this.isFinite() || !this.fractionalPart().isZero()) {
                                val = new BigNumber(NaN);
                            } else {
                                if (!isNumber(exponentialAt) && !isString(exponentialAt) && (BigNumber.isBigNumber(exponentialAt) && (exponentialAt.lt(0) || !exponentialAt.isFinite()))) {
                                    exponentialAt = new BigNumber(BigNumber.config().EXPONENTIAL_AT[1]);
                                }

                                if (!BigNumber.isBigNumber(exponentialAt)) {
                                    exponentialAt = new BigNumber(exponentialAt);
                                }

                                n = this.toString();
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
                                    for (i = 2; lte(i, n); i += 1) {
                                        factorialLookup[n] = factorialLookup[n].times(i);
                                    }

                                    extend(config, previousConfig);
                                }

                                val = factorialLookup[n];
                            }

                            return val;
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
                        return padLeadingChar(this.toString(), "0", size);
                    }
                }
            });

            defineProperties(BigNumber, {
                "isBigNumber": {
                    "value": function (inputArg) {
                        return isObject(inputArg) && objectInstanceOf(inputArg, BigNumber);
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
                            if (!numberIsFinite(decimalPlaces) || lt(decimalPlaces, 0)) {
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

                                extend(config, previousConfig);
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

                        if (lt(newAngle, 0)) {
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
                                    if (objectIs(mod(mod(i, 2), 2), 1)) {
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
                return isDate(dateObject) && !numberIsNaN(dateObject.getTime());
            }

            function isDigit(character) {
                return isString(character) && objectIs(character.length, 1) && inRange(character.charCodeAt(0), 48, 57);
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
                    valid = !arraySome(fullKeys, function (element) {
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
                            if (objectIs(julian, true)) {
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
                var k;

                if (isGregorianLeapYear(struct)) {
                    k = 1;
                } else {
                    k = 2;
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

            function normaliseUnits(unitString) {
                var unit;

                if (isString(unitString)) {
                    unitString = stringTrim(unitString).toLowerCase();
                    if (gt(unitString.length, 2) && objectIs(lastChar(unitString), "s")) {
                        unitString = unitString.slice(0, -1);
                    }

                    arraySome(fullKeys, function (element) {
                        var val;

                        if (objectIs(unitString, element.alias) || objectIs(unitString, element.full)) {
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

            function timeTo(struct, unit) {
                var value;

                switch (normaliseUnits(unit)) {
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

                return bignumber(1721424.5).plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, "day"));
            }

            function makeNameShort(name, lang) {
                if (!isString(lang)) {
                    lang = "en-GB";
                }

                var length = shortNameLength[lang];

                if (!isNumber(length) || lt(length, 1)) {
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
                if (objectIs(shortName, true)) {
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

                if (objectIs(shortName, true)) {
                    name = makeNameShort(name, lang);
                }

                return name;
            }

            function fractionToTime(fraction, fractionIn, struct, julian) {
                var time = {},
                    totalMs,
                    days;

                fraction = bignumber(fraction);
                switch (fractionIn) {
                case "year":
                    if (objectIs(julian, true)) {
                        days = daysInJulianYear(struct);
                    } else {
                        days = daysInGregorianYear(struct);
                    }

                    totalMs = fraction.times(days.times(86400000));
                    break;
                case "month":
                    if (objectIs(julian, true)) {
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
                    throw new Error(fractionIn);
                }

                time.hour = totalMs.div(3600000).floor();
                time.minute = totalMs.minus(time.hour.times(3600000)).div(60000).floor();
                time.second = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).div(1000).floor();
                time.millisecond = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).minus(time.second.times(1000)).floor();

                return time;
            }

            function getTime(julianDay) {
                return julianDay.minus(2440587.5).times(86400000).round();
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

                if (arrayIsArray(arr)) {
                    arraySome(fullKeys, function (element, index) {
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
                            if (objectIs(julian, true)) {
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

                        struct[element.full] = bn;

                        return false;
                    });
                }

                return struct;
            }

            function structToArray(struct) {
                var arr;

                if (isValid(struct)) {
                    arr = arrayMap(fullKeys, function (element) {
                        return struct[element.full];
                    });
                } else {
                    arr = [];
                }

                return arr;
            }

            function objectToStruct(object, julian) {
                var struct = {};

                if (isPlainObject(object)) {
                    arraySome(fullKeys, function (element) {
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
                            if (objectIs(julian, true)) {
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

                        struct[element.full] = bn;

                        return false;
                    });
                }

                return struct;
            }

            function structToObject(struct) {
                var newObject = {};

                if (isPlainObject(struct)) {
                    arrayForEach(objectKeys(struct), function (key) {
                        newObject[key] = struct[key].toString();
                    });
                }

                return newObject;
            }

            function dateToStruct(date) {
                var struct = {},
                    value;

                if (isDateValid(date)) {
                    arrayForEach(fullKeys, function (element) {
                        value = bignumber(date[element.local]());
                        if (objectIs(element.full, "month")) {
                            value = value.plus(1);
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
                    struct.offset = bignumber(0);
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

                    struct.offset = bignumber(0);
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
                    for (count = 0; lt(count, 3); count += 1) {
                        if (isUndefined(struct[fullKeys[count].full])) {
                            index = 3;
                            break;
                        }
                    }

                    for (last = fullKeys.length - 1; lt(index, last); index += 1) {
                        key = fullKeys[index].full;
                        value = struct[key];
                        if (objectIs(key, "year")) {
                            if (value.lt(0)) {
                                string += "-";
                                padding = 6;
                            } else if (value.gte(10000)) {
                                string += "+";
                                padding = 6;
                            } else {
                                padding = 4;
                            }
                        } else if (objectIs(key, "hour")) {
                            string += "T";
                            padding = 2;
                        } else if (objectIs(key, "millisecond")) {
                            padding = 3;
                        } else {
                            padding = 2;
                        }

                        string += value.abs().padLeadingZero(padding);
                        if (lt(index, 2)) {
                            string += "-";
                        } else if (inRange(index, 3, 4)) {
                            string += ":";
                        } else if (objectIs(key, "second")) {
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

            function setInvalid(thisContext) {
                return thisContext.setter("struct");
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
                            date,
                            time,
                            offset,
                            signOffset,
                            character,
                            element,
                            length,
                            timeFraction,
                            isTimeOnly,
                            value;

                        if (!isString(isoString)) {
                            return setInvalid(this);
                        }

                        getTimezoneOffset = bignumber(new Date().getTimezoneOffset());
                        temp = stringSplit(stringTrim(isoString), /[T ]/);
                        length = temp.length;
                        if (!inRange(length, 1, 2)) {
                            return setInvalid(this);
                        }

                        element = temp[0];
                        if (objectIs(length, 1)) {
                            if (objectIs(lastChar(element), "Z") || !stringContains(element, ":") || gt(element.indexOf("+"), 1) || (!objectIs(firstChar(element), "-") && !objectIs(element.charAt(4), "-") && objectIs(stringSplit(element, "-").length, 2))) {
                                arrayUnshift(temp, "");
                                isTimeOnly = true;
                            } else {
                                if (getTimezoneOffset.isZero()) {
                                    value = "Z";
                                } else {
                                    value = fractionToTime(getTimezoneOffset.abs(), "minute");
                                    value = value.hour.padLeadingZero(2) + ":" + value.minute.padLeadingZero(2);
                                    if (getTimezoneOffset.lte(0)) {
                                        value = "-" + value;
                                    } else {
                                        value = "+" + value;
                                    }
                                }

                                temp.push("00:00:00.000" + value);
                                isTimeOnly = false;
                            }
                        } else if (objectIs(element.length, 0)) {
                            isTimeOnly = true;
                        }

                        time = temp[1];
                        character = firstChar(time);
                        if (!isDigit(character)) {
                            return setInvalid(this);
                        }

                        if (!isTimeOnly) {
                            date = temp[0];
                            character = firstChar(date);
                            if (!isDigit(character)) {
                                if (objectIs(character, "+") || objectIs(character, "-")) {
                                    signYear = character;
                                } else {
                                    return setInvalid(this);
                                }

                                date = date.slice(1);
                            }

                            if (!stringContains(date, "-")) {
                                temp = [];
                                length = date.length;
                                if (gte(length, 8)) {
                                    if (gte(length, 9) && isUndefined(signYear)) {
                                        return setInvalid(this);
                                    }

                                    temp.push(date.slice(0, length - 4));
                                    temp.push(date.slice(length - 4, length - 2));
                                    temp.push(date.slice(length - 2));
                                } else {
                                    return setInvalid(this);
                                }
                            } else {
                                temp = stringSplit(date, "-");
                            }

                            length = temp.length;
                            if (!inRange(length, 2, 3)) {
                                return setInvalid(this);
                            }

                            if (objectIs(length, 2)) {
                                temp.push("01");
                            }

                            date = {};
                            if (arraySome(temp, function (val, idx) {
                                    var len = val.length,
                                        num = intToNumber(bignumber(val));

                                    switch (idx) {
                                    case 0:
                                        if (lt(len, 4) || (objectIs(signYear, "+") && objectIs(len, 4)) || (gt(len, 4) && !objectIs(signYear, "+") && !objectIs(signYear, "-")) || !num.isFinite()) {
                                            return true;
                                        }

                                        if (objectIs(signYear, "-")) {
                                            num = num.neg();
                                        }

                                        break;
                                    case 1:
                                        if (!objectIs(len, 2) || !inMonthRange(num)) {
                                            return true;
                                        }

                                        break;
                                    case 2:
                                        if (!objectIs(len, 2) || !inDayRange(num, daysInGregorianMonth(date))) {
                                            return true;
                                        }

                                        break;
                                    default:
                                        throw new Error();
                                    }

                                    date[fullKeys[idx].full] = num;

                                    return false;
                                })) {

                                return setInvalid(this);
                            }
                        }

                        character = lastChar(time);
                        if (!isDigit(character)) {
                            if (objectIs(character, "Z")) {
                                time = time.slice(0, -1) + "+00";
                            } else {
                                return setInvalid(this);
                            }
                        }

                        temp = stringSplit(time, /[\-+]/);
                        length = temp.length;
                        if (!inRange(length, 1, 2)) {
                            return setInvalid(this);
                        }

                        if (objectIs(length, 1)) {
                            if (objectIs(getTimezoneOffset, 0)) {
                                value = "00";
                            } else {
                                value = fractionToTime(Math.abs(getTimezoneOffset), "minute");
                                value = value.hour.padLeadingZero(2) + ":" + value.minute.padLeadingZero(2);
                            }

                            temp.push(value);
                        }

                        if (stringContains(time, "-")) {
                            signOffset = -1;
                        } else {
                            signOffset = 1;
                        }

                        offset = stringSplit(temp[1], ":");
                        length = offset.length;
                        if (!inRange(length, 1, 2)) {
                            return setInvalid(this);
                        }

                        if (objectIs(length, 1)) {
                            element = offset[0];
                            switch (offset[0].length) {
                            case 4:
                                offset.push(element.slice(0, 2));
                                offset.push(element.slice(2));
                                break;
                            case 2:
                                offset.push(element);
                                offset.push("00");
                                break;
                            default:
                                return setInvalid(this);
                            }
                        }

                        offset[0] = intToNumber(bignumber(offset[0]));
                        if (!inHourRange(offset[0])) {
                            return setInvalid(this);
                        }

                        offset[1] = intToNumber(bignumber(offset[1]));
                        if (!inMinuteRange(offset[1], offset[0])) {
                            return setInvalid(this);
                        }

                        if (objectIs(signOffset, -1) && offset[0].isZero() && offset[1].isZero()) {
                            return setInvalid(this);
                        }

                        time = temp[0];
                        if (stringContains(time, ".") || stringContains(time, ",")) {
                            temp = stringSplit(time, /[\.,]/);
                            element = temp[1];
                            if (!objectIs(temp.length, 2) || !objectIs(stringSplit(element, ":").length, 1)) {
                                return setInvalid(this);
                            }

                            time = temp[0];
                            timeFraction = bignumber("0." + temp[1]);
                        } else {
                            timeFraction = bignumber(0);
                        }

                        if (!stringContains(time, ":")) {
                            temp = [];
                            switch (time.length) {
                            case 6:
                                temp.push(time.slice(0, 2));
                                temp.push(time.slice(2, 4));
                                temp.push(time.slice(4));
                                break;
                            case 4:
                                temp.push(time.slice(0, 2));
                                temp.push(time.slice(2));
                                break;
                            case 2:
                                temp.push(time);
                                break;
                            default:
                                return setInvalid(this);
                            }
                        } else {
                            temp = stringSplit(time, ":");
                        }

                        length = temp.length;
                        if (!inRange(length, 1, 3)) {
                            return setInvalid(this);
                        }

                        if (!timeFraction.isZero()) {
                            timeFraction = fractionToTime(timeFraction, fullKeys[length + 2].full);
                            if (lt(length, 2)) {
                                temp.push(timeFraction.minute.padLeadingZero(2));
                            }

                            if (lt(length, 3)) {
                                temp.push(timeFraction.second.padLeadingZero(2));
                            }

                            if (lt(length, 4)) {
                                temp.push(timeFraction.millisecond.padLeadingZero(3));
                            }
                        } else {
                            if (lt(length, 2)) {
                                temp.push("00");
                            }

                            if (lt(length, 3)) {
                                temp.push("00");
                            }

                            if (lt(length, 4)) {
                                temp.push("000");
                            }
                        }

                        time = {};
                        if (arraySome(temp, function (val, idx) {
                                var num = intToNumber(bignumber(val));

                                switch (idx) {
                                case 0:
                                    if (!inHourRange(num)) {
                                        return true;
                                    }

                                    break;
                                case 1:
                                    if (!inMinuteRange(num, time.hour)) {
                                        return true;
                                    }

                                    break;
                                case 2:
                                    if (!inSecondRange(num, time.hour)) {
                                        return true;
                                    }

                                    break;
                                case 3:
                                    if (!inMillisecondRange(num, time.hour)) {
                                        return true;
                                    }

                                    break;
                                default:
                                    throw new Error(idx);
                                }

                                time[fullKeys[idx + 3].full] = num;

                                return false;
                            })) {

                            return setInvalid(this);
                        }

                        time.offset = offset[0].times(60).plus(offset[1]).times(signOffset);
                        if (!isTimeOnly) {
                            extend(dateObject, date);
                        }

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
                        var struct;

                        if (this.isValid()) {
                            struct = structToObject(this.getter());
                        }

                        return struct;
                    }
                },

                "toArray": {
                    "value": function () {
                        var arr;

                        if (this.isValid()) {
                            arr = arrayMap(structToArray(this.getter()), function (element) {
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
                                    if (objectIs(isJulian, true)) {
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
                                    struct[unit] = bn;
                                } else {
                                    struct = {};
                                }
                            } else if (arrayIsArray(key)) {
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
                    } else if (arrayIsArray(arg)) {
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
                        arg = stringTrim(arg).toLowerCase();
                        switch (arg) {
                        case "j":
                            arg = args[1];
                            if (arrayIsArray(arg)) {
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
                            if (arrayIsArray(arg)) {
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
                                    val = arrayMap(structToArray(gregorianToJulian(this.getter())), function (element) {
                                        return element.toString();
                                    });
                                } else {
                                    val = arrayMap(structToArray(this.getter()), function (element) {
                                        return element.toString();
                                    });
                                }
                            }
                        } else if (arrayIsArray(dateArray)) {
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
                                val = new Date(parseInt(this.getTime(), 10));
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
                            val = getTime(gregorianToJd(this.getter())).toString();
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
                                struct = this.object();
                                propArray = arrayMap(objectKeys(struct), function (key) {
                                    return '"' + key + '":"' + struct[key] + '"';
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
                        return isObject(inputArg) && objectInstanceOf(inputArg, AstroDate);
                    }
                }
            });

            defineProperties(defaultProperties, {
                0: {
                    "value": "toString",
                    "enumerable": true
                },
                1: {
                    "value": "toLocaleString",
                    "enumerable": true
                },
                2: {
                    "value": "valueOf",
                    "enumerable": true
                },
                3: {
                    "value": "hasOwnProperty",
                    "enumerable": true
                },
                4: {
                    "value": "isPrototypeOf",
                    "enumerable": true
                },
                5: {
                    "value": "propertyIsEnumerable",
                    "enumerable": true
                },
                6: {
                    "value": "constructor",
                    "enumerable": true
                }
            });

            deepFreeze(defaultProperties);

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

            deepFreeze(fullKeys);

            defineProperties(shortNameLength, {
                "en-GB": {
                    "value": 3,
                    "enumerable": true
                },
                "sv-SE": {
                    "value": 3,
                    "enumerable": true
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

            arrayForEach([BigNumber, BigNumber.prototype], function (element) {
                arrayForEach(objectKeys(element), function (key) {
                    defineProperty(element, key, {
                        "enumerable": false,
                        "configurable": false,
                        "writeable": false
                    });
                });
            });

            return AstroDate;
        };

        nfeDefinition = null;

        return tempSafariNFE;
    }())));
}((function (thisContext) {
    "use strict";
    /*global window, global, self */

    // detect the global context of the environment
    if ("object" === typeof window && "null" !== window && window.window === window) {
        thisContext = window;
    } else if ("object" === typeof global && "null" !== global && global.global === global) {
        thisContext = global;
    } else if ("object" === typeof self && "null" !== self && self.self === self) {
        thisContext = self;
    }

    /*global */
    return thisContext;
}(this)), (function () {
    "use strict";

    // return undefined for private_undefined
    return;
}())));
