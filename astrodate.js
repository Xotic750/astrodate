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

(function (thisContext, privateUndefined) {
    'use strict';

    // Safari 2.x NFE bug fix
    // http://kangax.github.io/nfe/
    var tempSafariNFE;

    (function (name, definition) {
        /*global module, require, define */
        var bigNumberFunc = 'BigNumber',
            bigNumberString = bigNumberFunc.toLowerCase(),
            projectPaths,
            projectConfig;

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            module.exports = definition(require(bigNumberString + '.js'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            projectPaths = {};
            projectConfig = {};
            projectPaths[bigNumberString] = '//cdn.jsdelivr.net/bignumber.js/1.1.0/bignumber.min';
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
    }('astrodate', (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var nfeDefinition;

        tempSafariNFE = function nfeDefinition(BigNumber) {
            BigNumber.config({
                DECIMAL_PLACES: 50,
                ROUNDING_MODE: 4,
                EXPONENTIAL_AT: [-7, 20],
                RANGE: [-1000000000, 1000000000],
                ERRORS: true
            });

            var VERSION = '0.4.1',
                //MAX_INTEGER = 9007199254740991,
                //MIN_INTEGER = -9007199254740991,
                UWORD32 = Math.pow(2, 32),
                MAX_UINT32 = UWORD32 - 1,
                baseObject = {},
                defaultProperties,
                baseArray = [],
                baseString = '',
                toObjectString,
                baseNumber = 0,
                baseBoolean = true,
                fullKeys,
                shortNameLength,
                dayNames,
                monthNames,
                protoName = '__proto__',
                invalidISOCharsRx = new RegExp('[^\\d\\-+WT Z:,\\.]'),
                toObject,
                //j2000 = [2000, 1, 1, 11, 58, 55, 816],
                extend,
                arrayIndexOf,
                objectDefineProperty,
                objectDefineProperties,
                objectFreeze,
                objectIsFrozen,
                objectHasOwnProperty,
                objectGetOwnPropertyDescriptor,
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
                datePatterns,
                timePatterns;

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
                return strictEqual(typeof inputArg, 'undefined');
            }

            function isNull(inputArg) {
                return strictEqual(inputArg, null);
            }

            function isBoolean(inputArg) {
                return strictEqual(inputArg, true) || strictEqual(inputArg, false);
            }

            function isNumber(inputArg) {
                return strictEqual(typeof inputArg, 'number');
            }

            function isZero(inputArg) {
                return strictEqual(inputArg, 0);
            }

            function isString(inputArg) {
                return strictEqual(typeof inputArg, 'string');
            }

            function isEmptyString(inputArg) {
                return strictEqual(inputArg, '');
            }

            /*
            function isNumeric(inputArg) {
                var val = false,
                    string;

                if (isNumber(inputArg) || isString(inputArg)) {
                    string = inputArg.toString().replace(/^[+\-]?/, "");
                    if (!isNaN(parseFloat(string)) && isFinite(string)) {
                        val = true;
                    }
                }

                return val;
            }
            */

            function checkObjectCoercible(inputArg) {
                if (isUndefined(inputArg) || isNull(inputArg)) {
                    throw new TypeError('Cannot convert "' + inputArg + '" to object');
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
                    val = 'undefined';
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
                    if (strictEqual(toStringFN.call(), '[object Undefined]') && strictEqual(toStringFN.call(null), '[object Null]')) {
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
                            val = '[object Undefined]';
                        } else if (isNull(object)) {
                            val = '[object Null]';
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
                return strictEqual(toObjectString(inputArg), '[object RegExp]');
            }

            function isObject(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Object]');
            }

            function isFunction(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Function]');
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
                        return strictEqual(toObjectString(inputArg), '[object Array]');
                    };
                }

                nfeIsArray = null;

                return tempSafariNFE;
            }());

            /*
            function isEmptyArray(inputArg) {
                return isZero(inputArg.length);
            }
            */

            function isDate(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Date]');
            }

            // named objectIs instead of objectIs because of SpiderMonkey and Blackberry bug
            objectIs = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isIsFn = baseObject.constructor.is,
                    nfeIs;

                if (isFunction(isIsFn)) {
                    tempSafariNFE = isIsFn;
                } else {
                    tempSafariNFE = function nfeIs(x, y) {
                        var val;

                        if (strictEqual(x, y)) {
                            if (isZero(x)) {
                                val = strictEqual(1 / x, 1 / y);
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

                        if (isZero(number) || numberIsNaN(number)) {
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
                        } else if (isZero(number) || !numberIsFinite(number)) {
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

                if (isZero(number) || !numberIsFinite(number)) {
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

                if (isZero(number) || !numberIsFinite(number)) {
                    val = +0;
                } else {
                    val = mod(mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                }

                return val;
            }

            function isTypeObject(inputArg) {
                return (!isNull(inputArg) && strictEqual(typeof inputArg, 'object')) || isRegExp(inputArg);
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
                    compliantExecNpcg = isUndefined(/()??/.exec('')[1]),
                    nfeSplit;

                function replacer(separator, match, args) {
                    var length = args.length - 2,
                        index;

                    match[0].replace(separator, function () {
                        for (index = 1; lt(index, length); index += 1) {
                            if (isUndefined(arguments[index])) {
                                match[index] = privateUndefined;
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
                        flags = 'g';
                        if (separator.ignoreCase) {
                            flags += 'i';
                        }

                        if (separator.multiline) {
                            flags += 'm';
                        }

                        if (separator.extended) {
                            flags += 'x';
                        }

                        if (separator.sticky) {
                            flags += 'y';
                        }

                        separator = new RegExp(separator.source, flags);
                        if (!compliantExecNpcg) {
                            separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
                        }

                        if (isUndefined(limit)) {
                            limit = MAX_UINT32;
                        } else {
                            limit = toUint32(limit);
                        }

                        output = [];
                        flags = 'g';
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

                            if (strictEqual(separator.lastIndex, match.index)) {
                                separator.lastIndex += 1;
                            }

                            match = separator.exec(string);
                        }

                        if (strictEqual(lastLastIndex, string.length)) {
                            if (lastLength || !separator.test('')) {
                                output.push('');
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

            function firstCharIs(inputArg, character) {
                return strictEqual(firstChar(inputArg), firstChar(character));
            }

            function lastChar(inputArg) {
                var thisStr = anyToString(checkObjectCoercible(inputArg));

                return thisStr.charAt(thisStr.length - 1);
            }

            function lastCharIs(inputArg, character) {
                return strictEqual(lastChar(inputArg), firstChar(character));
            }

            function countCharacter(inputArg, character) {
                return clamp(stringSplit(anyToString(checkObjectCoercible(inputArg)), firstChar(character)).length - 1, 0, Number.POSITIVE_INFINITY);
            }

            function padLeadingChar(inputArg, character, size) {
                var string = anyToString(checkObjectCoercible(inputArg)),
                    singleChar = firstChar(character),
                    count = numberToInteger(size) - string.length;

                if (lt(count, 0) || strictEqual(count, Infinity)) {
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
                        val = '';
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

                        if (lt(times, 0) || strictEqual(times, Infinity)) {
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

                        return strictEqual(thisStr.slice(start, start + thisLen), searchStr);
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

                        return gte(start, 0) && strictEqual(thisStr.slice(start, end), searchStr);
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
                            position = 0;
                        } else {
                            position = numberToInteger(position);
                        }

                        return !strictEqual(baseString.indexOf.call(thisStr, searchStr, clamp(position, 0, thisLen)), -1);
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
                    bocProto;

                if (isFunction(getPrototypeOfFN)) {
                    tempSafariNFE = getPrototypeOfFN;
                } else if (isNull(baseObject.constructor.prototype[protoName])) {
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        return object[protoName];
                    };
                } else {
                    bocProto = baseObject.constructor.prototype;
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        if (strictEqual(object, bocProto)) {
                            return null;
                        }

                        var ctrProto = object.constructor.prototype;

                        if (strictEqual(object, ctrProto)) {
                            return bocProto;
                        }

                        return ctrProto;
                    };
                }

                nfeGetPrototypeOf = null;

                return tempSafariNFE;
            }());

            function hasProperty(object, property) {
                return property in object;
            }

            function arrayContains(array, searchElement) {
                return !strictEqual(arrayIndexOf(array, searchElement), -1);
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
                    testObject = {
                        toString: null
                    },
                    nfeHasOwnProperty;

                // use nfeHasOwnProperty to save a var
                for (nfeHasOwnProperty in testObject) {
                    if (strictEqual(nfeHasOwnProperty, 'toString') && isNull(testObject[nfeHasOwnProperty])) {
                        hasDontEnumBug = false;
                    }
                }

                function checkDontEnums(object, property) {
                    return hasDontEnumBug && arrayContains(defaultProperties, property) && hasProperty(object, property) && !strictEqual(object[property], objectGetPrototypeOf(object)[property]);
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
                var boxedString = baseObject.constructor('a'),
                    splitString = !strictEqual(boxedString[0], 'a') || !hasProperty(boxedString, 0),
                    nfeToObjectFixIndexedAccess;

                if (splitString) {
                    tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
                        var object;

                        if (isString(inputArg)) {
                            object = stringSplit(inputArg, '');
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
                            throw new TypeError(fn + ' is not a function');
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
                            throw new TypeError(fn + ' is not a function');
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
                            throw new TypeError(fn + ' is not a function');
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

            function argumentsToArray(args) {
                return arrayMap(args, returnElement);
            }

            // named arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
            arrayUnshift = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var unshiftFN = baseArray.unshift,
                    nfeUnshift;

                if (strictEqual(unshiftFN.call([], 0), 1)) {
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
                    errString = 'Reduce of empty array with no initial value',
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
                            throw new TypeError(fn + ' is not a function');
                        }

                        if (isZero(length) && lt(arguments.length, 3)) {
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
                                accumulator = fn.call(privateUndefined, accumulator, object[index], index, object);
                            }
                        }

                        return accumulator;
                    };
                }

                nfeReduce = null;

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
                    nfeTrim,
                    nfeBuildTestString,
                    nfeBuildWhiteSpaceString;

                tempSafariNFE = function nfeBuildTestString(previous, element) {
                    return previous + String.fromCharCode(element);
                };

                testString = arrayReduce(whiteSpacesList, tempSafariNFE, '');
                if (isFunction(trimFN) && isZero(trimFN.call(testString).length)) {
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return trimFN.call(inputArg);
                    };
                } else {
                    tempSafariNFE = function nfeBuildWhiteSpaceString(previous, element) {
                        return previous + '\\u' + padLeadingChar(element.toString(16), '0', 4);
                    };

                    whiteSpacesString = arrayReduce(whiteSpacesList, tempSafariNFE, '');
                    wsTrimRX = new RegExp('^[' + whiteSpacesString + ']+|[' + whiteSpacesString + ']+$', 'g');
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return anyToString(checkObjectCoercible(inputArg)).replace(wsTrimRX, '');
                    };
                }

                nfeTrim = null;
                nfeBuildTestString = null;
                nfeBuildWhiteSpaceString = null;

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

                if (isFunction(indexOfFN) && strictEqual(indexOfFN.call([0, 1], 1, 2), 1)) {
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

                        if (isZero(length)) {
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
                                    if (hasProperty(object, index) && strictEqual(searchElement, object[index])) {
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
                            throw new TypeError('Object.keys called on a non-object');
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
            // named objectDefineProperty instead of defineProperty because of SpiderMonkey and Blackberry bug
            objectDefineProperty = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var definePropertyFN = baseObject.constructor.defineProperty,
                    defineGetter = '__defineGetter__',
                    defineSetter = '__defineSetter__',
                    defineGetterFN,
                    defineSetterFN,
                    testObject,
                    nfeDefineProperty;

                if (isFunction(definePropertyFN)) {
                    try {
                        testObject = definePropertyFN({}, 'sentinel', {
                            value: null
                        });

                        if (!isNull(testObject.sentinel)) {
                            definePropertyFN = null;
                        }
                    } catch (exception) {
                        definePropertyFN = null;
                    }
                }

                if (isFunction(definePropertyFN)) {
                    tempSafariNFE = definePropertyFN;
                } else {
                    defineGetterFN = baseObject[defineGetter];
                    defineSetterFN = baseObject[defineSetter];
                    tempSafariNFE = function nfeDefineProperty(object, property, descriptor) {
                        var prototype;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.defineProperty called on non-object');
                        }

                        if (!isTypeObject(descriptor) && !isFunction(descriptor)) {
                            throw new TypeError('Property description must be an object');
                        }

                        if (objectHasOwnProperty(descriptor, 'value')) {
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
                                throw new TypeError('getters & setters can not be defined on this javascript engine');
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

                nfeDefineProperty = null;

                return tempSafariNFE;
            }());

            // Create our own local "defineProperties" function: native -> sham
            // named objectDefineProperties instead of defineProperties because of SpiderMonkey and Blackberry bug
            objectDefineProperties = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var definePropertiesFN = baseObject.constructor.defineProperties,
                    nfeDefineProperties;

                if (isFunction(definePropertiesFN)) {
                    tempSafariNFE = definePropertiesFN;
                } else {
                    tempSafariNFE = function nfeDefineProperties(object, props) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.defineProperties called on non-object');
                        }

                        if (!isTypeObject(props) && !isFunction(props)) {
                            throw new TypeError('Property description must be an object');
                        }

                        arrayForEach(objectKeys(props), function (key) {
                            objectDefineProperty(object, key, props[key]);
                        });

                        return object;
                    };
                }

                nfeDefineProperties = null;

                return tempSafariNFE;
            }());

            // Create our own local "getOwnPropertyDescriptor" function: native -> sham
            // named objectGetOwnPropertyDescriptor instead of getOwnPropertyDescriptor because of SpiderMonkey and Blackberry bug
            objectGetOwnPropertyDescriptor = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor,
                    lookupGetter = '__lookupGetter__',
                    lookupSetter = '__lookupSetter__',
                    lookupGetterFN,
                    lookupSetterFN,
                    testObject,
                    nfeGetOwnPropertyDescriptor;

                if (isFunction(getOwnPropertyDescriptorFN)) {
                    try {
                        testObject = {
                            sentinel: null
                        };

                        if (!isNull(getOwnPropertyDescriptorFN(testObject, 'sentinel').value)) {
                            getOwnPropertyDescriptorFN = null;
                        }
                    } catch (exception) {
                        getOwnPropertyDescriptorFN = null;
                    }
                }

                if (isFunction(getOwnPropertyDescriptorFN)) {
                    tempSafariNFE = getOwnPropertyDescriptorFN;
                } else {
                    lookupGetterFN = baseObject[lookupGetter];
                    lookupSetterFN = baseObject[lookupSetter];
                    tempSafariNFE = function nfeGetOwnPropertyDescriptor(object, property) {
                        var descriptor,
                            prototype,
                            getter,
                            setter;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object');
                        }

                        if (objectHasOwnProperty(object, property)) {
                            descriptor = {
                                enumerable: true,
                                configurable: true
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

                nfeGetOwnPropertyDescriptor = null;

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
                            throw new TypeError('Object.freeze called on non-object');
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
                            throw new TypeError('Object.isFrozen called on non-object');
                        }

                        return false;
                    };
                }

                nfeIsFrozen = null;

                return tempSafariNFE;
            }());

            function deepFreeze(object) {
                objectFreeze(object);
                arrayForEach(objectKeys(object), function (propKey) {
                    var prop = object[propKey];

                    if ((isTypeObject(prop) || isFunction(prop)) && !objectIsFrozen(prop)) {
                        deepFreeze(prop);
                    }
                });
            }

            // named objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
            objectInstanceOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                    nfeInstanceOf;

                if (isFunction(isPrototypeOfFN)) {
                    tempSafariNFE = function nfeInstanceOf(object, ctr) {
                        if (!isFunction(ctr)) {
                            throw new TypeError('Expecting a function in instanceOf check');
                        }

                        return isPrototypeOfFN.call(ctr.prototype, object);
                    };
                } else if (isFunction(objectGetPrototypeOf)) {
                    tempSafariNFE = function nfeInstanceOf(object, ctr) {
                        if (!isFunction(ctr)) {
                            throw new TypeError('Expecting a function in instanceOf check');
                        }

                        var val = false;

                        while (object) {
                            if (strictEqual(object, ctr.prototype)) {
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
                    return isObject(object) && strictEqual(objectGetPrototypeOf(object), baseObjectPrototype);
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
                        throw new TypeError('extend called on a non-object');
                    }

                    arrayForEach(objectKeys(source), function (key) {
                        objectDefineProperty(target, key, objectGetOwnPropertyDescriptor(source, key));
                    });

                    return target;
                };

                nfeExtend = null;

                return tempSafariNFE;
            }());

            function bnZero() {
                return new BigNumber(0);
            }

            function bnOne() {
                return new BigNumber(1);
            }

            objectDefineProperties(BigNumber.prototype, {
                truncate: {
                    value: function () {
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

                inRange: {
                    value: function (min, max) {
                        return this.gte(min) && this.lte(max);
                    }
                },

                fractionalPart: {
                    value: function () {
                        var bn = this;

                        if (bn.isFinite()) {
                            bn = bn.minus(this.truncate());
                        } else {
                            bn = new BigNumber(NaN);
                        }

                        return bn;
                    }
                },

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

                factorial: {
                    value: (function () {
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
                                    config = new BigNumber.config();
                                    previousConfig = {};
                                    extend(previousConfig, config);

                                    BigNumber.config({
                                        DECIMAL_PLACES: 20,
                                        ROUNDING_MODE: 4,
                                        EXPONENTIAL_AT: [-7, parseInt(exponentialAt.toString(), 10)],
                                        RANGE: [-1000000000, 1000000000],
                                        ERRORS: true
                                    });

                                    factorialLookup[n] = bnOne();
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

                toRadians: {
                    value: function (decimalPlacesOfPI) {
                        return this.times(BigNumber.pi(decimalPlacesOfPI).div(180));
                    }
                },

                padLeadingZero: {
                    value: function (size) {
                        return padLeadingChar(this.toString(), '0', size);
                    }
                }
            });

            objectDefineProperties(BigNumber, {
                isBigNumber: {
                    value: function (inputArg) {
                        return isObject(inputArg) && objectInstanceOf(inputArg, BigNumber);
                    }
                },

                truncate: {
                    value: function (number) {
                        return new BigNumber(number).truncate();
                    }
                },

                fractionalPart: {
                    value: function (number) {
                        return new BigNumber(number).fractionalPart();
                    }
                },

                difference: {
                    value: function (number1, number2) {
                        return new BigNumber(number1).difference(number2);
                    }
                },

                factorial: {
                    value: function (number, exponentialAt) {
                        return new BigNumber(number).factorial(exponentialAt);
                    }
                },

                pi: {
                    value: (function () {
                        var piLookup = {};

                        return function (decimalPlaces) {
                            if (!numberIsFinite(decimalPlaces) || lt(decimalPlaces, 0)) {
                                decimalPlaces = new BigNumber.config().DECIMAL_PLACES;
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
                                config = new BigNumber.config();
                                previousConfig = {};
                                extend(previousConfig, config);

                                BigNumber.config({
                                    DECIMAL_PLACES: decimalPlaces,
                                    ROUNDING_MODE: 4,
                                    EXPONENTIAL_AT: [-7, 20],
                                    RANGE: [-1000000000, 1000000000],
                                    ERRORS: true
                                });

                                sum = bnZero();
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

                toRadians: {
                    value: function (number, decimalPlacesPI) {
                        return new BigNumber(number).toRadians(decimalPlacesPI);
                    }
                },

                normaliseAngle: {
                    value: function (angle) {
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

                toPositiveAngle: {
                    value: function (angle) {
                        var newAngle = new BigNumber.normaliseAngle(angle);

                        if (lt(newAngle, 0)) {
                            newAngle = newAngle.plus(360);
                        }

                        return newAngle;
                    }
                },

                sin: {
                    value: (function () {
                        var sineLookup = {};

                        return function (angle) {
                            var newAngle = new BigNumber.normaliseAngle(angle),
                                lookupProp = newAngle.toString(),
                                sum,
                                prev,
                                k,
                                fact,
                                i;

                            if (!sineLookup[lookupProp]) {
                                sum = newAngle;
                                prev = bnZero();
                                i = 1;
                                k = 3;
                                while (!sum.equals(prev)) {
                                    prev = sum;
                                    fact = new BigNumber.factorial(k);
                                    if (strictEqual(mod(mod(i, 2), 2), 1)) {
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

            function isDateValid(dateObject) {
                return isDate(dateObject) && !numberIsNaN(dateObject.getTime());
            }

            /*
            function intToNumber(input) {
                var number = input;

                if (!number.isFinite(number) || !number.fractionalPart().isZero()) {
                    number = new BigNumber(NaN);
                }

                return number;
            }
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

            function inSecondRange(second, hour) {
                return (hour.equals(24) && second.isZero()) || (!hour.equals(24) && second.gte(0) && second.lt(60));
            }

            function inMillisecondRange(millisecond, hour) {
                return (hour.equals(24) && millisecond.isZero()) || (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
            }

            function inOffsetRange(offset) {
                return offset.inRange(-1440, 1440);
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

                if (isPlainObject(struct)) {
                    valid = !arraySome(fullKeys, function (element) {
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
                            if (strictEqual(julian, true)) {
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
                            if (!inSecondRange(bn, struct.hour)) {
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
                    if (gt(unitString.length, 2) && lastCharIs(unitString, 's')) {
                        unitString = unitString.slice(0, -1);
                    }

                    arraySome(fullKeys, function (element) {
                        var val;

                        if (strictEqual(unitString, element.alias) || strictEqual(unitString, element.full)) {
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
                case 'day':
                    value = struct.hour.div(24).plus(struct.minute.div(1440)).plus(struct.second.div(86400)).plus(struct.millisecond.div(86400000));
                    break;
                case 'hour':
                    value = struct.hour.plus(struct.minute.div(60)).plus(struct.second.div(3600)).plus(struct.millisecond.div(3600000));
                    break;
                case 'minute':
                    value = struct.hour.times(60).plus(struct.minute).plus(struct.second.div(60)).plus(struct.millisecond.div(60000));
                    break;
                case 'second':
                    value = struct.hour.times(3600).plus(struct.minute.times(60)).plus(struct.second).plus(struct.millisecond.div(1000));
                    break;
                case 'millisecond':
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

                return new BigNumber(1721424.5).plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, 'day'));
            }

            function makeNameShort(name, lang) {
                if (!isString(lang)) {
                    lang = 'en-GB';
                }

                var length = shortNameLength[lang];

                if (!isNumber(length) || lt(length, 1)) {
                    length = 3;
                }

                return name.slice(0, length);
            }

            function makeNamesMin(arrayNames, lang) {
                var arrayMinNames = [],
                    count = 1,
                    maxLength = 0,
                    anLength = arrayNames.length;

                if (!isString(lang)) {
                    lang = 'en-GB';
                }

                function sliceCountCompare(element) {
                    var characters = element[lang].slice(0, count),
                        ret;

                    if (arrayContains(arrayMinNames, characters)) {
                        ret = true;
                    } else {
                        arrayMinNames.push(characters);
                        ret = false;
                    }

                    return ret;
                }

                arrayForEach(arrayNames, function (element) {
                    var word = element[lang],
                        length = word.length;

                    if (length > maxLength) {
                        maxLength = length;
                    }
                });

                while (!strictEqual(arrayMinNames.length, anLength) && count <= maxLength) {
                    arrayMinNames.length = 0;
                    arraySome(arrayNames, sliceCountCompare);
                    count += 1;
                }

                return arrayMinNames;
            }

            function makeNamesArray(arrayNames, args) {
                var shortName,
                    lang;

                if (isBoolean(args[1])) {
                    shortName = args[1];
                    lang = args[2];
                } else if (isString(args[1])) {
                    shortName = false;
                    lang = args[1];
                }

                if (!isString(lang)) {
                    lang = 'en-GB';
                }

                return arrayMap(arrayNames, function (element) {
                    var name;

                    if (shortName) {
                        name = makeNameShort(element[lang], lang);
                    } else {
                        name = element[lang];
                    }

                    return name;
                });
            }

            function dayOfWeekNumber(jd) {
                var day = jd.plus(1.5).mod(7).floor();

                if (day.lt(0)) {
                    day = day.plus(7);
                }

                return day;
            }

            function weekDayNumber(jd) {
                var bnWeekDay = dayOfWeekNumber(jd);

                if (bnWeekDay.isZero()) {
                    bnWeekDay = new BigNumber(7);
                }

                return bnWeekDay;
            }

            function dayOfWeek(jd, shortName, lang) {
                var dayNum = toNumber(dayOfWeekNumber(jd)),
                    name;

                if (!isString(lang)) {
                    lang = 'en-GB';
                }

                if (!isBoolean(shortName)) {
                    shortName = false;
                }

                name = dayNames[dayNum][lang];
                if (strictEqual(shortName, true)) {
                    name = makeNameShort(name, lang);
                }

                return name;
            }

            function monthName(struct, shortName, lang) {
                if (!isString(lang)) {
                    lang = 'en-GB';
                }

                if (!isBoolean(shortName)) {
                    shortName = false;
                }

                var name = monthNames[parseInt(struct.month.minus(1).toString(), 10)][lang];

                if (strictEqual(shortName, true)) {
                    name = makeNameShort(name, lang);
                }

                return name;
            }

            function fractionToTime(fraction, fractionIn, struct, julian) {
                var time = {},
                    totalMs,
                    days;

                fraction = new BigNumber(fraction);
                switch (fractionIn) {
                case 'year':
                    if (strictEqual(julian, true)) {
                        days = daysInJulianYear(struct);
                    } else {
                        days = daysInGregorianYear(struct);
                    }

                    totalMs = fraction.times(days.times(86400000));
                    break;
                case 'month':
                    if (strictEqual(julian, true)) {
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
                time.millisecond = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).minus(time.second.times(1000)).floor();

                return time;
            }

            function getTime(struct) {
                return gregorianToJd(struct).minus(2440587.5).times(86400000).round();
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
                        r = new BigNumber(10583.6).minus(u.times(1014.41)).plus(u.pow(2).times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4).times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6).times(0.0090316521));
                    } else if (struct.year.lt(1600)) {
                        u = y.minus(1000).div(100);
                        r = new BigNumber(1574.2).minus(u.times(556.01)).plus(u.pow(2).times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4).times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6).times(0.0083572073));
                    } else if (struct.year.lt(1700)) {
                        t = y.minus(1600);
                        r = new BigNumber(120).minus(t.times(0.9808)).minus(t.pow(2).times(0.01532)).plus(t.pow(3).div(7129));
                    } else if (struct.year.lt(1800)) {
                        t = y.minus(1700);
                        r = new BigNumber(8.83).plus(t.times(0.1603)).minus(t.pow(2).times(0.0059285)).plus(t.pow(3).times(0.00013336)).minus(t.pow(4).div(1174000));
                    } else if (struct.year.lt(1860)) {
                        t = y.minus(1800);
                        r = new BigNumber(13.72).minus(t.times(0.332447)).plus(t.pow(2).times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4).times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6).times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
                    } else if (struct.year.lt(1900)) {
                        t = y.minus(1860);
                        r = new BigNumber(7.62).plus(t.times(0.5737)).minus(t.pow(2).times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4).times(0.0004473624)).plus(t.pow(5).div(233174));
                    } else if (struct.year.lt(1920)) {
                        t = y.minus(1900);
                        r = new BigNumber(-2.79).plus(t.times(1.494119)).minus(t.pow(2).times(0.0598939)).plus(t.pow(3).times(0.0061966)).minus(t.pow(4).times(0.000197));
                    } else if (struct.year.lt(1941)) {
                        t = y.minus(1920);
                        r = new BigNumber(21.20).plus(t.times(0.84493)).minus(t.pow(2).times(0.076100)).plus(t.pow(3).times(0.0020936));
                    } else if (struct.year.lt(1961)) {
                        t = y.minus(1950);
                        r = new BigNumber(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233)).plus(t.pow(3).div(2547));
                    } else if (struct.year.lt(1986)) {
                        t = y.minus(1975);
                        r = new BigNumber(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260)).minus(t.pow(3).div(718));
                    } else if (struct.year.lt(2005)) {
                        t = y.minus(2000);
                        r = new BigNumber(63.86).plus(t.times(0.3345)).minus(t.pow(2).times(0.060374)).plus(t.pow(3).times(0.0017275)).plus(t.pow(4).times(0.000651814)).plus(t.pow(5).times(0.00002373599));
                    } else if (struct.year.lt(2050)) {
                        t = y.minus(2000);
                        r = new BigNumber(62.92).plus(t.times(0.32217)).plus(t.pow(2).times(0.005589));
                    } else {
                        r = new BigNumber(-20).plus(y.minus(1820).div(100).pow(2).times(32)).minus(y.neg().plus(2150).times(0.5628));
                    }
                } else {
                    u = y.minus(1820).div(100);
                    r = u.pow(2).times(32).plus(-20);
                }

                if (canonCorrection && !struct.year.inRange(1955, 2004)) {
                    r.plus(y.minus(1955).pow(2).times(-0.000012932));
                }

                return r;
            }

            function arrayToStruct(arr, julian) {
                var struct = {};

                if (arrayIsArray(arr)) {
                    arraySome(fullKeys, function (element, index) {
                        var value = arr[index],
                            bn,
                            dim;

                        if (isNumber(value) || isString(value) || BigNumber.isBigNumber(value)) {
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
                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inMonthRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'day':
                            if (strictEqual(julian, true)) {
                                dim = daysInJulianMonth(struct);
                            } else {
                                dim = daysInGregorianMonth(struct);
                            }

                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inDayRange(bn, dim)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'hour':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inHourRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'minute':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMinuteRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'second':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inSecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'millisecond':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMillisecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'offset':
                            if (isUndefined(value)) {
                                bn = bnZero();
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

            function returnElementToString(element) {
                return element.toString();
            }

            function structToArrayOfString(struct) {
                return arrayMap(structToArray(struct), returnElementToString);
            }

            function objectToStruct(object, julian) {
                var struct = {};

                if (isPlainObject(object)) {
                    arraySome(fullKeys, function (element) {
                        var value = object[element.alias] || object[element.full] || object[element.full + 's'],
                            bn,
                            dim;

                        if (isNumber(value) || isString(value) || BigNumber.isBigNumber(value)) {
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
                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inMonthRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'day':
                            if (strictEqual(julian, true)) {
                                dim = daysInJulianMonth(struct);
                            } else {
                                dim = daysInGregorianMonth(struct);
                            }

                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inDayRange(bn, dim)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'hour':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inHourRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'minute':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMinuteRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'second':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inSecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'millisecond':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMillisecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'offset':
                            if (isUndefined(value)) {
                                bn = bnZero();
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
                var struct = {};

                if (isDateValid(date)) {
                    arrayForEach(fullKeys, function (element) {
                        var value = new BigNumber(date[element.local]());

                        if (strictEqual(element.full, 'month')) {
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
                jd = a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, 'day'));

                return jd;
            }

            function jdToGregorian(julianDay) {
                var struct = {},
                    jd = new BigNumber(julianDay),
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
                    struct.offset = bnZero();
                    extend(struct, fractionToTime(jd.fractionalPart().abs(), 'day'));
                }

                return struct;
            }

            function jdToJulian(julianDay) {
                var struct = {},
                    jd = new BigNumber(julianDay),
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

                    struct.offset = bnZero();
                    extend(struct, fractionToTime(jd.fractionalPart().abs(), 'day'));
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
                    h = new BigNumber(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30),
                    i = c.div(4).floor(),
                    k = c.mod(4),
                    l = new BigNumber(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7),
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

            function toUT(struct) {
                return jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(60000)).div(86400000).round(8, 2));
            }

            function toTT(struct) {
                var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(timeTo(fractionToTime(deltaTime(struct), 'minute'), 'millisecond')).div(86400000).round(8, 2));

                structTT.offset = offset;

                return structTT;
            }

            function bnGetTimezoneOffset() {
                return new BigNumber(new Date().getTimezoneOffset());
            }

            function toLocal(struct) {
                var timezoneOffset = bnGetTimezoneOffset(),
                    structLocal = jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(60000)).minus(bnGetTimezoneOffset().times(60000)).div(86400000).round(8, 2));

                structLocal.offset = timezoneOffset;

                return structLocal;
            }

            /*
            function toTAI(struct) {
                var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(timeTo(fractionToTime(deltaTime(struct), 'minute'), 'millisecond')).minus(32184).div(86400000).round(8, 2));

                structTT.offset = offset;

                return structTT;
            }

            function toGPS(struct) {
                  var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(timeTo(fractionToTime(deltaTime(struct), 'minute'), 'millisecond')).minus(51184).div(86400000).round(8, 2));

                structTT.offset = offset;

                return structTT;
            }
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

                number = toNumber(userPadding);
                if (lt(number, 5) || !numberIsFinite(number)) {
                    number = 6;
                }

                index = 0;
                string = '';
                for (count = 0; lt(count, 3); count += 1) {
                    if (isUndefined(struct[fullKeys[count].full])) {
                        index = 3;
                        break;
                    }
                }

                for (last = fullKeys.length - 1; lt(index, last); index += 1) {
                    key = fullKeys[index].full;
                    value = struct[key];
                    if (strictEqual(key, 'year')) {
                        if (value.lt(0)) {
                            string += '-';
                            padding = number;
                        } else if (value.gte(10000)) {
                            string += '+';
                            padding = number;
                        } else {
                            padding = 4;
                        }
                    } else if (strictEqual(key, 'hour')) {
                        string += 'T';
                        padding = 2;
                    } else if (strictEqual(key, 'millisecond')) {
                        padding = 3;
                    } else {
                        padding = 2;
                    }

                    string += value.abs().padLeadingZero(padding);
                    if (lt(index, 2)) {
                        string += '-';
                    } else if (inRange(index, 3, 4)) {
                        string += ':';
                    } else if (strictEqual(key, 'second')) {
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

                    value = fractionToTime(value.abs(), 'minute');
                    string += value.hour.padLeadingZero(2);
                    string += ':';
                    string += value.minute.padLeadingZero(2);
                }

                return string;
            }

            function isoHasValidCharacterCounts(string) {
                var val;

                if (!inRange(countCharacter(string, ' ') + countCharacter(string, 'T'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, 'W'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, 'Z'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '.') + countCharacter(string, ','), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '+'), 0, 2)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '-'), 0, 4)) {
                    val = false;
                } else if (!inRange(countCharacter(string, ':'), 0, 4)) {
                    val = false;
                } else if (lt(string.replace(/\D/g, '').length, 2)) {
                    val = false;
                } else {
                    val = true;
                }

                return val;
            }

            function ordinalToCalendar(year, dayOfYear) {
                var struct = {
                        year: new BigNumber(year),
                        month: bnOne(),
                        day: bnOne(),
                        hour: bnZero(),
                        minute: bnZero(),
                        second: bnZero(),
                        millisecond: bnZero()
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

            function weekDateToCalendar(year, week, weekDay) {
                var struct = {
                        year: new BigNumber(year),
                        month: bnOne(),
                        day: new BigNumber(4),
                        hour: bnZero(),
                        minute: bnZero(),
                        second: bnZero(),
                        millisecond: bnZero()
                    },
                    weekDayJan4 = weekDayNumber(gregorianToJd(struct)),
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

            function calendarToWeekDate(struct) {
                var weekDay = weekDayNumber(gregorianToJd(struct)),
                    year = struct.year,
                    month = struct.month,
                    nearestThursday,
                    val;

                nearestThursday = struct.day.plus(4).minus(weekDay);
                if (struct.month.equals(12) && nearestThursday.gt(31)) {
                    val = {
                        year: year.plus(1),
                        week: bnOne(),
                        weekDay: weekDay
                    };
                } else {
                    if (struct.month.equals(1) && nearestThursday.lt(1)) {
                        year = struct.year.minus(1);
                        month = 12;
                        nearestThursday = nearestThursday.plus(31);
                    }

                    val = {
                        year: year,
                        week: dayOfGregorianYear({year: year, month: month, day: nearestThursday}).div(7).floor().plus(1),
                        weekDay: weekDay
                    };
                }

                return val;
            }

            function isNotNegativeZero(bn, sign) {
                return strictEqual(sign, '+') || !bn.isZero() || (bn.isZero() && !strictEqual(sign, '-'));
            }

            function hourMinuteToMinutes(minute, second) {
                return new BigNumber(minute).times(60).plus(second);
            }

            function hourFractionToTime(number) {
                return fractionToTime('0.' + number, 'hour');
            }

            function minuteFractionToTime(number) {
                return fractionToTime('0.' + number, 'minute');
            }

            function secondFractionToTime(number) {
                return fractionToTime('0.' + number, 'second');
            }

            function toSignMultipler(sign) {
                return sign + '1';
            }

            datePatterns = {
                basic: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1] + '00'),
                            month: bnOne(),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: bnOne(),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: new BigNumber(rxResult[3])
                        };
                    }
                }, {
                    regex: /^(\d{4})(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(rxResult[1], rxResult[2]);
                    }
                }, {
                    regex: /^(\d{4})W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                    }
                }, {
                    regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                    }
                }],
                extended: [{ // need to add tests for -0
                    regex: /^([\-+]{1})(\d{5,})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                            month: new BigNumber(rxResult[3]),
                            day: bnOne()
                        };
                    }
                },  {
                    regex: /^(\d{4})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})-(\d{2})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: new BigNumber(rxResult[3])
                        };
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-(\d{2})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                            month: new BigNumber(rxResult[3]),
                            day: new BigNumber(rxResult[4])
                        };
                    }
                }, {
                    regex: /^(\d{4})-(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(rxResult[1], rxResult[2]);
                    }
                }, {
                    regex: /^(\d{4})-W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                    }
                }, {
                    regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3]);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], 1);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-W(\d{2})-([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], rxResult[4]);
                    }
                }]
            };

            deepFreeze(datePatterns);

            timePatterns = {
                basic: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], rxResult[4]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.minute = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], rxResult[7]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.minute = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }],
                extended: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], rxResult[4]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.second = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], rxResult[7]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.second = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }]
            };

            deepFreeze(timePatterns);

            function isoSplitDateTime(string) {
                var dtObject = {
                        date: '',
                        time: ''
                    },
                    firstSplit = stringSplit(stringTrim(string), /[T ]/),
                    splitLength = firstSplit.length,
                    element;

                if (inRange(splitLength, 1, 2)) {
                    if (strictEqual(splitLength, 1)) {
                        element = firstSplit[0];
                        // we make a best guess
                        if (strictEqual(element.slice(-4), '-') || firstCharIs(element, '+') || firstCharIs(element, '-') || strictEqual(element.length, 2) || gte(countCharacter(element, '-'), 2) || stringContains(element, 'W')) {
                            // only ordinal dates have a "-" at -4
                            // only dates begin with "+" or "-"
                            // dates and times can be only 2 digits but will default to date unless preceeded with " " or "T"
                            // only dates have 2 or more "-"
                            // only dates have a week number "W"
                            dtObject.date = element;
                            dtObject.time = '00';
                        } else if (lastCharIs(element, 'Z') || stringContains(element, ':') || stringContains(element, '.') || stringContains(element, ',') || stringContains(element, '+') || strictEqual(element.slice(-3), '-')) {
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
                        dtObject.date = firstSplit[0] || '00';
                        dtObject.time = firstSplit[1];
                    }
                }

                return dtObject;
            }

            function isoParse(isoString) {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var dtObject = {
                        input: isoString
                    },
                    nfeSearchPatterns,
                    searchPatternFN,
                    searchString;

                if (isString(isoString) && !isEmptyString(isoString) && !invalidISOCharsRx.test(isoString) && isoHasValidCharacterCounts(isoString)) {
                    searchPatternFN = function nfeSearchPatterns(pattern) {
                        var rxResult = pattern.regex.exec(searchString),
                            val = false,
                            result;

                        if (!isNull(rxResult)) {
                            result = pattern.func(rxResult);
                            if (!isUndefined(result)) {
                                extend(dtObject, result);
                            }

                            val = true;
                        }

                        return val;
                    };

                    extend(dtObject, isoSplitDateTime(isoString));
                    searchString = dtObject.date;
                    if (!arraySome(datePatterns.basic, searchPatternFN)) {
                        if (arraySome(datePatterns.extended, searchPatternFN)) {
                            searchString = dtObject.time;
                            arraySome(timePatterns.extended, searchPatternFN);
                        }
                    } else {
                        searchString = dtObject.time;
                        arraySome(timePatterns.basic, searchPatternFN);
                    }
                }


                nfeSearchPatterns = null;

                return dtObject;
            }

            function getCorrectStruct(thisAstroDate, struct) {
                if (thisAstroDate.isTT()) {
                    struct = toTT(struct);
                }

                if (thisAstroDate.isUT()) {
                    struct = toUT(struct);
                } else if (thisAstroDate.isLocal()) {
                    struct = toLocal(struct);
                }

                return struct;
            }

            AstroDate = function () {
                var args = arguments,
                    input = arguments,
                    argsLength = args.length,
                    isJulian = false,
                    isUT = false,
                    isTT = false,
                    isLocal = false,
                    error = null,
                    struct,
                    arg;

                objectDefineProperties(this, {
                    getter: {
                        value: function (key) {
                            var got;

                            if (isUndefined(key)) {
                                got = extend({}, struct);
                            } else if (isString(key)) {
                                switch (key) {
                                case 'struct':
                                    got = extend({}, struct);
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
                                default:
                                    throw new SyntaxError(key);
                                }
                            } else {
                                throw new TypeError(key);
                            }

                            return got;
                        }
                    },

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
                                    if (strictEqual(isJulian, true)) {
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
                                    valid = inSecondRange(bn, struct.hour);
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
                            } else if (arrayIsArray(key)) {
                                struct = arrayToStruct(key, false);
                            } else if (AstroDate.isAstroDate(key)) {
                                struct = key.getter();
                                isJulian = key.isJulian();
                            } else if (isDate(key)) {
                                struct = dateToStruct(key);
                            } else if (isString(key)) {
                                switch (key) {
                                case 'input':
                                    input = value;
                                    break;
                                case 'error':
                                    error = value;
                                    break;
                                case 'struct':
                                    if (isValid(value)) {
                                        struct = extend({}, value);
                                    } else {
                                        struct = {};
                                    }

                                    break;
                                case 'isJulian':
                                    isJulian = Boolean(value);
                                    break;
                                case 'isUT':
                                    isUT = Boolean(value);
                                    break;
                                case 'isTT':
                                    isTT = Boolean(value);
                                    break;
                                case 'isLocal':
                                    isLocal = Boolean(value);
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

                switch (argsLength.toString()) {
                case '0':
                    struct = dateToStruct(new Date());
                    break;
                case '1':
                    arg = args[0];
                    if (AstroDate.isAstroDate(arg)) {
                        isJulian = arg.getter('isJulian');
                        struct = extend({}, arg.getter());
                    } else if (arrayIsArray(arg)) {
                        struct = arrayToStruct(arg, false);
                    } else if (isDate(arg)) {
                        struct = dateToStruct(arg);
                    } else if (isNumber(arg)) {
                        struct = dateToStruct(new Date(arg));
                    } else if (isString(arg)) {
                        struct = isoParse(arg);
                    } else if (isPlainObject(arg)) {
                        struct = objectToStruct(arg);
                        if (!isValid(struct)) {
                            struct = {};
                        }
                    } else {
                        throw new TypeError(arg);
                    }

                    break;
                case '2':
                    arg = args[0];
                    if (isString(arg)) {
                        arg = stringTrim(arg).toLowerCase();
                        switch (arg) {
                        case 'j':
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
                        case 'g':
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
                        case 'jd':
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

            objectDefineProperties(AstroDate.prototype, {
                julian: {
                    value: function () {
                        return this.setter('isJulian', true);
                    }
                },

                gregorian: {
                    value: function () {
                        return this.setter('isJulian', false);
                    }
                },

                local: {
                    value: function () {
                        this.setter('isLocal', true);
                        this.setter('isUT', false);

                        return this;
                    }
                },

                UT: {
                    value: function () {
                        this.setter('isLocal', false);
                        this.setter('isUT', true);

                        return this;
                    }
                },

                TT: {
                    value: function () {
                        return this.setter('isTT', true);
                    }
                },

                civil: {
                    value: function () {
                        return this.setter('isTT', false);
                    }
                },

                raw: {
                    value: function () {
                        this.setter('isLocal', false);
                        this.setter('isUT', false);
                        this.setter('isTT', false);

                        return this;
                    }
                },

                isJulian: {
                    value: function () {
                        return this.getter('isJulian');
                    }
                },

                isGregorian: {
                    value: function () {
                        return !this.getter('isJulian');
                    }
                },

                isUT: {
                    value: function () {
                        return this.getter('isUT');
                    }
                },

                isTT: {
                    value: function () {
                        return this.getter('isTT');
                    }
                },

                isCivil: {
                    value: function () {
                        return !this.getter('isTT');
                    }
                },

                isLocal: {
                    value: function () {
                        return this.getter('isLocal');
                    }
                },

                isRaw: {
                    value: function () {
                        return !this.getter('isUT') && !this.getter('isTT') && this.getter('isLocal');
                    }
                },

                isWeekend: {
                    value: function () {
                        return weekDayNumber(gregorianToJd(getCorrectStruct(this, this.getter()))).inRange(6, 7);
                    }
                },

                zone: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = getCorrectStruct(this, this.getter()).offset.toString();
                        }

                        return val;
                    }
                },

                isValid: {
                    value: function () {
                        return isValid(this.getter());
                    }
                },

                parse: {
                    value: function (isoString) {
                        var val;

                        if (isString(isoString)) {
                            val = this.setter('struct', isoParse(isoString));
                        } else {
                            throw new TypeError(isoString);
                        }

                        return val;
                    }
                },

                toString: {
                    value: function () {
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
                                string = '[OS] ';
                            } else {
                                struct = this.getter();
                                string = '[NS] ';
                            }

                            struct = getCorrectStruct(this, struct);
                            string += this.dayOfWeek(shortName, lang) + ' ';
                            string += struct.day.toString() + ' ';
                            string += this.monthOfYear(shortName, lang) + ' ';
                            if (struct.year.lt(0)) {
                                string += '-';
                            }

                            string += struct.year.abs().padLeadingZero(4) + ' ';
                            string += struct.hour.padLeadingZero(2) + ':';
                            string += struct.minute.padLeadingZero(2) + ':';
                            string += struct.second.padLeadingZero(2) + '.';
                            string += struct.millisecond.padLeadingZero(3) + ' ';
                            offset = struct.offset;
                            if (offset.lte(0)) {
                                string += '+';
                            } else {
                                string += '-';
                            }

                            offset = fractionToTime(offset.abs(), 'minute');
                            string += offset.hour.padLeadingZero(2);
                            string += offset.minute.padLeadingZero(2);
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toDateString: {
                    value: function () {
                        var args,
                            shortName,
                            lang,
                            struct,
                            string;

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
                                string = '[OS] ';
                            } else {
                                struct = this.getter();
                                string = '[NS] ';
                            }

                            struct = getCorrectStruct(this, struct);
                            string += this.dayOfWeek(shortName, lang) + ' ';
                            string += struct.day.toString() + ' ';
                            string += this.monthOfYear(shortName, lang) + ' ';
                            if (struct.year.lt(0)) {
                                string += '-';
                            }

                            string += struct.year.abs().padLeadingZero(4) + ' ';
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toTimeString: {
                    value: function () {
                        var struct,
                            string,
                            offset;

                        if (this.isValid()) {
                            string = '';
                            if (this.isJulian()) {
                                struct = jdToJulian(this.julianDay());
                            } else {
                                struct = this.getter();
                            }

                            struct = getCorrectStruct(this, struct);
                            string += struct.hour.padLeadingZero(2) + ':';
                            string += struct.minute.padLeadingZero(2) + ':';
                            string += struct.second.padLeadingZero(2) + '.';
                            string += struct.millisecond.padLeadingZero(3) + ' ';
                            offset = struct.offset;
                            if (offset.lte(0)) {
                                string += '+';
                            } else {
                                string += '-';
                            }

                            offset = fractionToTime(offset.abs(), 'minute');
                            string += offset.hour.padLeadingZero(2);
                            string += offset.minute.padLeadingZero(2);
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toISOString: {
                    value: function (padding) {
                        var val;

                        if (this.isValid()) {
                            val = toISOString(getCorrectStruct(this, this.getter()), padding);
                        } else {
                            val = 'Invalid Date';
                        }

                        return val;
                    }
                },

                valueOf: {
                    value: function () {
                        var val;

                        if (this.isJulian()) {
                            val = this.julianDay();
                        } else {
                            val = this.getTime();
                        }

                        return val;
                    }
                },

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

                            val = getTime(toUT(struct)).div(1000).truncate().toString();
                        }

                        return val;
                    }
                },

                object: {
                    value: function (dateObject) {
                        var struct,
                            val;

                        if (isUndefined(dateObject)) {
                            if (this.isValid()) {
                                struct = getCorrectStruct(this, this.getter());
                                if (this.isJulian()) {
                                    val = structToObject(gregorianToJulian(struct));
                                } else {
                                    val = structToObject(struct);
                                }
                            }
                        } else if (isPlainObject(dateObject)) {
                            val = this.setter('struct', objectToStruct(dateObject, this.isJulian()));
                        } else {
                            throw new TypeError(dateObject);
                        }

                        return val;
                    }
                },

                clone: {
                    value: function () {
                        return new AstroDate(this);
                    }
                },

                array: {
                    value: function (dateArray) {
                        var struct,
                            val;

                        if (isUndefined(dateArray)) {
                            if (this.isValid()) {
                                struct = getCorrectStruct(this, this.getter());
                                if (this.isJulian()) {
                                    val = structToArrayOfString(gregorianToJulian(struct));
                                } else {
                                    val = structToArrayOfString(struct);
                                }
                            }
                        } else if (arrayIsArray(dateArray)) {
                            val = this.setter('struct', arrayToStruct(dateArray, this.isJulian()));
                        } else {
                            throw new TypeError(dateArray);
                        }

                        return val;
                    }
                },

                date: {
                    value: function (date) {
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

                deltaTime: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = deltaTime(getCorrectStruct(this, this.getter())).toString();
                        }

                        return val;
                    }
                },

                timeTo: {
                    value: function (unit) {
                        var val;

                        if (this.isValid()) {
                            val = timeTo(getCorrectStruct(this, this.getter()), normaliseUnits(unit)).toString();
                        }

                        return val;
                    }
                },

                julianDay: {
                    value: function (julianDay) {
                        var val;

                        if (isUndefined(julianDay)) {
                            if (this.isValid()) {
                                val = gregorianToJd(getCorrectStruct(this, this.getter())).toString();
                            }
                        } else if (isNumber(julianDay) || isString(julianDay) || BigNumber.isBigNumber(julianDay)) {
                            val = this.setter('struct', jdToGregorian(julianDay));
                        } else {
                            throw new TypeError(julianDay);
                        }

                        return val;
                    }
                },

                easter: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = julianEaster(gregorianToJulian(struct));
                            } else {
                                val = gregorianEaster(struct);
                            }
                        }

                        return val;
                    }
                },

                monthOfYear: {
                    value: function () {
                        var args,
                            shortName,
                            lang,
                            val,
                            struct;

                        if (this.isValid()) {
                            args = arguments;
                            if (isBoolean(args[0])) {
                                shortName = args[0];
                                lang = args[1];
                            } else if (isString(args[0])) {
                                shortName = false;
                                lang = args[0];
                            }

                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = monthName(gregorianToJulian(struct), shortName, lang);
                            } else {
                                val = monthName(struct, shortName, lang);
                            }
                        }

                        return val;
                    }
                },

                dayOfWeek: {
                    value: function () {
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
                                shortName = false;
                                lang = args[0];
                            }

                            val = dayOfWeek(gregorianToJd(getCorrectStruct(this, this.getter())), shortName, lang);
                        }

                        return val;
                    }
                },

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

                daysInYear: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = daysInJulianYear(gregorianToJulian(struct)).toString();
                            } else {
                                val = daysInGregorianYear(struct).toString();
                            }
                        }

                        return val;
                    }
                },

                daysInMonth: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = daysInJulianMonth(gregorianToJulian(struct)).toString();
                            } else {
                                val = daysInGregorianMonth(struct).toString();
                            }
                        }

                        return val;
                    }
                },

                dayOfYear: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = dayOfJulianYear(gregorianToJulian(struct)).toString();
                            } else {
                                val = dayOfGregorianYear(struct).toString();
                            }
                        }

                        return val;
                    }
                },

                json: {
                    value: function (jsonString) {
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

                                val = '{' + propArray.join(',') + '}';
                            }
                        } else if (isString(jsonString)) {
                            if (isFunction(JSON.parse)) {
                                struct = objectToStruct(JSON.parse(jsonString), this.isJulian());
                            } else {
                                /*jslint evil: true */
                                struct = objectToStruct(new Function('return' + jsonString)(), this.isJulian());
                                /*jslint evil:   false */
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

                toJSON: {
                    value: function (padding) {
                        return this.toISOString(padding);
                    }
                },

                calendarToWeekDate: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = structToObject(calendarToWeekDate(getCorrectStruct(this, this.getter())));
                        }

                        return val;
                    }
                }
            });

            objectDefineProperties(AstroDate, {
                version: {
                    value: VERSION
                },

                BigNumber: {
                    value: BigNumber
                },

                normaliseUnits: {
                    value: function (unitString) {
                        return normaliseUnits(unitString);
                    }
                },

                isAstroDate: {
                    value: function (inputArg) {
                        return isObject(inputArg) && objectInstanceOf(inputArg, AstroDate);
                    }
                },

                now: {
                    value: function () {
                        return new AstroDate().getTime();
                    }
                },

                julianDay: {
                    value: function () {
                        return new AstroDate().julianDay();
                    }
                },

                unix: {
                    value: function () {
                        return new AstroDate().unix();
                    }
                },

                months: {
                    value: function () {
                        return makeNamesArray(monthNames, arguments);
                    }
                },

                monthsMin: {
                    value: function (lang) {
                        return makeNamesMin(monthNames, lang);
                    }
                },

                weekDays: {
                    value: function () {
                        return makeNamesArray(dayNames, arguments);
                    }
                },

                weekDaysMin: {
                    value: function (lang) {
                        return makeNamesMin(dayNames, lang);
                    }
                }
            });

            defaultProperties = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

            deepFreeze(defaultProperties);

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
            }];

            /*
            , {
                full: 'week',
                alias: 'W',
                local: null
            }, {
                full: 'weekDay',
                alias: 'E',
                local: null
            }
            */

            deepFreeze(fullKeys);

            shortNameLength = {
                'en-GB': 3,
                'sv-SE': 3
            };

            dayNames = [{
                'en-GB': 'Sunday',
                'sv-SE': 'söndag'
            }, {
                'en-GB': 'Monday',
                'sv-SE': 'måndag'
            }, {
                'en-GB': 'Tuesday',
                'sv-SE': 'tisdag'
            }, {
                'en-GB': 'Wednesday',
                'sv-SE': 'onsdag'
            }, {
                'en-GB': 'Thursday',
                'sv-SE': 'torsdag'
            }, {
                'en-GB': 'Friday',
                'sv-SE': 'fredag'
            }, {
                'en-GB': 'Saturday',
                'sv-SE': 'lördag'
            }];

            monthNames = [{
                'en-GB': 'January',
                'sv-SE': 'januari'
            }, {
                'en-GB': 'February',
                'sv-SE': 'februari'
            }, {
                'en-GB': 'March',
                'sv-SE': 'mars'
            }, {
                'en-GB': 'April',
                'sv-SE': 'april'
            }, {
                'en-GB': 'May',
                'sv-SE': 'maj'
            }, {
                'en-GB': 'June',
                'sv-SE': 'juni'
            }, {
                'en-GB': 'July',
                'sv-SE': 'juli'
            }, {
                'en-GB': 'August',
                'sv-SE': 'augusti'
            }, {
                'en-GB': 'September',
                'sv-SE': 'september'
            }, {
                'en-GB': 'October',
                'sv-SE': 'oktober'
            }, {
                'en-GB': 'November',
                'sv-SE': 'november'
            }, {
                'en-GB': 'December',
                'sv-SE': 'december'
            }];

            arrayForEach([BigNumber, BigNumber.prototype], function (element) {
                arrayForEach(objectKeys(element), function (key) {
                    objectDefineProperty(element, key, {
                        enumerable: false,
                        configurable: false,
                        writeable: false
                    });
                });
            });

            return AstroDate;
        };

        nfeDefinition = null;

        return tempSafariNFE;
    }())));

    tempSafariNFE = null;
}((function (thisContext) {
    'use strict';
    /*global window, global, self */

    // detect the global context of the environment
    if ('object' === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ('object' === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ('object' === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    /*global */
    return thisContext;
}(this)), (function () {
    'use strict';

    // return undefined for privateUndefined
    return;
}())));
