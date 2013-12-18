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

(function (globalThis) {
    /* jshint -W034 */
    'use strict';

    var UWORD32 = Math.pow(2, 32),
        MAX_UINT32 = UWORD32 - 1,
        baseObject = {},
        /**
         * For hasOwnProperty bug.
         * @private
         * @readonly
         * @type {array.<string>}
         */
        defaultProperties = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        baseArray = [],
        baseString = '',
        toObjectString,
        baseNumber = 0,
        baseBoolean = true,
        protoName = '__proto__',
        CtrBoolean = baseBoolean.constructor,
        CtrNumber = baseNumber.constructor,
        CtrString = baseString.constructor,
        isArguments,
        isTypeOfObject,
        toObjectFixIndexedAccess,
        arrayIndexOf,
        objectDefineProperty,
        objectDefineProperties,
        objectFreeze,
        objectIsFrozen,
        objectHasOwnProperty,
        objectGetOwnPropertyDescriptor,
        //objectCreate,
        arrayIsArray,
        objectInstanceOf,
        objectGetPrototypeOf,
        baseObjectPrototype,
        objectKeys,
        stringTrim,
        stringRepeat,
        splitFN = baseString.split,
        compliantExecNpcg,
        //stringStartsWith,
        //stringEndsWith,
        stringContains,
        //arrayUnshift,
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
        Definition,
        j2000 = {
            jdtt: '2451545.0',
            tt: '2000-01-01T12:00:00.000Z',
            tai: '2000-01-01T11:59:27.816Z',
            utc: '2000-01-01T11:58:55.816Z'
        },
        // Safari 2.x NFE bug fix
        // http://kangax.github.io/nfe/
        tempSafariNFE,
        privateUndefined;

    /**
     * Returns the primitive value undefined.
     * @ignore
     * @private
     * @function
     * @return {undefined}
     */
    function noop() {
        return;
    }

    privateUndefined = (function () {
        return noop();
    }());

    /**
     * Coerces an input to a number.
     * @private
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    function toNumber(inputArg) {
        return +inputArg;
    }

    /**
     * Returns true if the operands are strictly equal with no type conversion.
     * @private
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    function strictEqual(a, b) {
        return a === b;
    }

    /**
     * Returns true if the operand number is less than limit.
     * @private
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    function lt(number, limit) {
        return number < limit;
    }

    /**
     * Returns true if the operand number is less than or equal to limit.
     * @private
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    function lte(number, limit) {
        return number <= limit;
    }

    /**
     * Returns true if the operand number is greater than limit.
     * @private
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    function gt(number, limit) {
        return number > limit;
    }

    /**
     * Returns true if the operand number is greater than or equal to limit.
     * @private
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    function gte(number, limit) {
        return number >= limit;
    }

    /**
     * The mod/remainder operator returns the first operand modulo of the second operand, that is, number1 modulo number2, in the preceding statement,
     * where number1 and number2 are numbers. The modulo function is the integer remainder of dividing number1 by number2.
     * For example, 12 % 5 returns 2. The result will have the same sign as number1; that is, -1 % 2 returns -1.
     * @private
     * @function
     * @param {number} number1
     * @param {number} number2
     * @return {number}
     */
    function mod(number1, number2) {
        return number1 % number2;
    }

    /**
     * Returns a number clamped to the range set by min and max.
     * @private
     * @function
     * @param {number} number
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    function clamp(number, min, max) {
        return Math.min(Math.max(number, min), max);
    }

    /**
     * Returns true if the operand number is greater than or equal to min or if number is less than or equal to max.
     * @private
     * @function
     * @param {number} number
     * @param {number} min
     * @param {number} max
     * @return {boolean}
     */
    function inRange(number, min, max) {
        return gte(number, min) && lte(number, max);
    }

    /**
     * Returns true if the operand inputArg is undefined.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isUndefined(inputArg) {
        return strictEqual(typeof inputArg, 'undefined');
    }

    /**
     * Returns true if the operand inputArg is null.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isNull(inputArg) {
        return strictEqual(inputArg, null);
    }

    /**
     * Returns true if the operand inputArg is a boolean.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isBoolean(inputArg) {
        return strictEqual(inputArg, true) || strictEqual(inputArg, false);
    }

    /**
     * Returns true if the operand inputArg is a number.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isNumber(inputArg) {
        return strictEqual(typeof inputArg, 'number');
    }

    /**
     * Returns true if the operand inputArg is the number 0.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isZero(inputArg) {
        return strictEqual(inputArg, 0);
    }

    /**
     * Returns true if the operand inputArg is a string.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isString(inputArg) {
        return strictEqual(typeof inputArg, 'string');
    }

    /**
     * Returns true if the operand inputArg is an empty string.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isEmptyString(inputArg) {
        return strictEqual(inputArg, '');
    }

    /**
     * Returns true if the operand inputArg is deemed numeric.
     * @ignore
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
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

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object using argToObject, otherwise returns the argument.
     * @private
     * @function
     * @param {*} inputArg
     * @param {string} [msg]
     * @return {boolean}
     */
    function checkObjectCoercible(inputArg) {
        if (isUndefined(inputArg) || isNull(inputArg)) {
            throw new TypeError('Cannot convert "' + inputArg + '" to object');
        }

        return inputArg;
    }

    /**
     * The abstract operation converts its argument to a value of type Object
     * @private
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    function argToObject(inputArg) {
        var object = checkObjectCoercible(inputArg);

        if (isBoolean(object)) {
            object = new CtrBoolean(object);
        } else if (isNumber(object)) {
            object = new CtrNumber(object);
        } else if (isString(object)) {
            object = new CtrString(object);
        }

        return object;
    }

    /**
     * The abstract operation converts its argument to a value of type String
     * @private
     * @function
     * @param {*} inputArg
     * @return {string}
     */
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

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * @private
     * @function
     * @param {*} object
     * @return {string}
     */
    toObjectString = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var toStringFN = baseObject.toString,
            undefinedString = '[object Undefined]',
            nullString = '[object Null]',
            nfeToObjectString;

        try {
            tempSafariNFE = null;
            if (strictEqual(toStringFN.call(), undefinedString) && strictEqual(toStringFN.call(null), nullString)) {
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
                    val = undefinedString;
                } else if (isNull(object)) {
                    val = nullString;
                } else {
                    val = toStringFN.call(object);
                }

                return val;
            };
        }

        nfeToObjectString = null;

        return tempSafariNFE;
    }());

    /**
     * Returns true if the operand inputArg is a RegExp.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isRegExp(inputArg) {
        return strictEqual(toObjectString(inputArg), '[object RegExp]');
    }

    /**
     * Returns true if the operand inputArg is an Object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isObject(inputArg) {
        return strictEqual(toObjectString(inputArg), '[object Object]');
    }

    /**
     * Returns true if the operand inputArg is a Function.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isFunction(inputArg) {
        return strictEqual(toObjectString(inputArg), '[object Function]');
    }

    /**
     * Returns true if the operand inputArg is an argumenta object.
     * @ignore
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    isArguments = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
            argumentsString = '[object Arguments]',
            calleeString = 'callee',
            lengthString = 'length',
            nfeIsArguments;

        function getArgs() {
            return arguments;
        }

        if (strictEqual(toObjectString(getArgs()), argumentsString)) {
            tempSafariNFE = function nfeIsArguments(inputArg) {
                return strictEqual(toObjectString(inputArg), argumentsString);
            };
        } else if (isFunction(propertyIsEnumerableFN)) {
            tempSafariNFE = function nfeIsArguments(inputArg) {
                return isObject(inputArg) && objectHasOwnProperty(inputArg, calleeString) && !propertyIsEnumerableFN.call(inputArg, calleeString) && objectHasOwnProperty(inputArg, lengthString) && !propertyIsEnumerableFN.call(inputArg, lengthString) && isNumber(inputArg.length);
            };
        } else {
            tempSafariNFE = function nfeIsArguments(inputArg) {
                return isObject(inputArg) && objectHasOwnProperty(inputArg, calleeString) && objectHasOwnProperty(inputArg, lengthString) && isNumber(inputArg.length);
            };
        }

        nfeIsArguments = null;

        return tempSafariNFE;
    }());

    /**
     * Returns true if the operand inputArg is typeof Object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    isTypeOfObject = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var testRx = /test/,
            objectString = 'object',
            isRxObject = strictEqual(typeof testRx, objectString),
            nfeIsTypeOfObject;

        if (isRxObject) {
            tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                return strictEqual(typeof inputArg, objectString);
            };
        } else {
            tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                return strictEqual(typeof inputArg, objectString) || isRegExp(inputArg);
            };
        }

        nfeIsTypeOfObject = null;

        return tempSafariNFE;
    }());

    /**
     * Returns true if the operand inputArg is of type Object but not if null.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isTypeObject(inputArg) {
        return !isNull(inputArg) && isTypeOfObject(inputArg);
    }

    /**
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
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

    /**
     * Returns true if the specified property is in the specified object.
     * @private
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
    function hasProperty(object, property) {
        return property in object;
    }

    /**
     * The function takes one argument inputArg, if the argument is an object whose class internal property is "Array"
     * or is an Object whose class internal property is "Arguments"; returns true if length is zero otherwise it returns false.
     * Otherwise returns null if the argument does not match the rquirements.
     * @private
     * @function
     * @param {array} inputArg
     * @return {(boolean|null)}
     */
    function isEmptyArray(inputArg) {
        var val;

        if (arrayIsArray(inputArg) || isArguments(inputArg)) {
            val = isZero(inputArg.length);
        } else {
            val = null;
        }

        return val;
    }

    /**
     * Returns the first element of an array; otherwise returns undefined.
     * @private
     * @function
     * @param {array} inputArg
     * @return {(*|undefined)}
     */
    function arrayFirst(inputArg) {
        var val;

        if (!isEmptyArray(inputArg)) {
            val = inputArg[0];
        }

        return val;
    }

    /**
     * Returns the last element of an array; otherwise returns undefined.
     * @private
     * @function
     * @param {array} inputArg
     * @return {(*|undefined)}
     */
    function arrayLast(inputArg) {
        var val;

        if (!isEmptyArray(inputArg)) {
            val = inputArg[inputArg.length - 1];
        }

        return val;
    }

    /**
     * Returns true if the operand inputArg is a Date object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isDate(inputArg) {
        return strictEqual(toObjectString(inputArg), '[object Date]');
    }

    /**
     * Determines whether two values are the same value.
     * @private
     * @function
     * @param {*} x
     * @param {*} y
     * @return {boolean}
     */
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

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * @private
     * @function
     * @param {*} number
     * @return {boolean}
     */
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

    /**
     * The function determines whether the passed value is finite. More robust version of the original global isFinite.
     * @private
     * @function
     * @param {*} number
     * @return {boolean}
     */
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

    /**
     * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
     * "negative number", "positive zero",  "negative zero" and NaN respectively
     * @private
     * @function
     * @param {*} value
     * @return {number}
     */
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

    /**
     * The function evaluates the passed value and converts it to an integer.
     * @private
     * @function
     * @param {*} inputArg
     * @return {number}
     */
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

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in the range -2^31 through 2^31-1, inclusive.
     * @ignore
     * @private
     * @function
     * @param {*} inputArg
     * @return {number}
     */
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

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in the range 0 through 2^32-1,inclusive.
     * @private
     * @function
     * @param {*} inputArg
     * @return {number}
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

    compliantExecNpcg = isUndefined(/()??/.exec('')[1]);

    /**
     * @private
     * @function
     * @param {regexp} separator
     * @param {array} match
     * @param {arguments} args
     */
    function stringSplitReplacer(separator, match, args) {
        var length = args.length - 2,
            index;

        arrayFirst(match).replace(separator, function () {
            for (index = 1; lt(index, length); index += 1) {
                if (isUndefined(arguments[index])) {
                    match[index] = privateUndefined;
                }
            }
        });
    }

    /**
     * Splits a String object into an array of strings by separating the string into substrings.
     * @private
     * @function
     * @param {string} str
     * @param {string} [separator]
     * @param {number} [limit]
     * @return {array.<string>}
     */
    // named stringSplit instead of split because of SpiderMonkey and Blackberry bug
    function stringSplit(str, separator, limit) {
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
                lastIndex = match.index + arrayFirst(match).length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (!compliantExecNpcg && gt(match.length, 1)) {
                        stringSplitReplacer(separator2, match, arguments);
                    }

                    if (gt(match.length, 1) && lt(match.index, string.length)) {
                        output = output.concat(match.slice(1));
                    }

                    lastLength = arrayFirst(match).length;
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
    }

    /**
     * Coerces its argument to a string and returns the first character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    function firstChar(inputArg) {
        return anyToString(checkObjectCoercible(inputArg)).charAt(0);
    }

    /**
     * Coerces inputArg to a string and compares the first character to the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {boolean}
     */
    function firstCharIs(inputArg, character) {
        return strictEqual(firstChar(inputArg), firstChar(character));
    }

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    function lastChar(inputArg) {
        var thisStr = anyToString(checkObjectCoercible(inputArg));

        return thisStr.charAt(thisStr.length - 1);
    }

    /**
     * Coerces inputArg to a string and compares the last character to the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {boolean}
     */
    function lastCharIs(inputArg, character) {
        return strictEqual(lastChar(inputArg), firstChar(character));
    }

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {number}
     */
    function countCharacter(inputArg, character) {
        return clamp(stringSplit(anyToString(checkObjectCoercible(inputArg)), firstChar(character)).length - 1, 0, Number.POSITIVE_INFINITY);
    }

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @private
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @param {number} size
     * @return {string}
     */
    function padLeadingChar(inputArg, character, size) {
        var string = anyToString(checkObjectCoercible(inputArg)),
            singleChar = firstChar(character),
            count = numberToInteger(size) - string.length;

        if (lt(count, 0) || strictEqual(count, Infinity)) {
            count = 0;
        }

        return stringRepeat(singleChar, count) + string;
    }

    /**
     * Repeat the current string several times, return the new string.
     * @private
     * @function
     * @param {string} string
     * @param {number} times
     * @return {string}
     */
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

    /**
     * Determines whether a string begins with the characters of another string, returning true or false as appropriate.
     * @ignore
     * @private
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    /*
// named stringStartsWith instead of startsWith because of SpiderMonkey and Blackberry bug
    stringStartsWith = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe
        var startsWithFN = baseString.constructor.startsWith,
            nfeStartsWith;

        if (isFunction(startsWithFN)) {
            tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                return startsWithFN.call(string, searchString, position);
            };
        } else {
            tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                var thisStr = anyToString(checkObjectCoercible(string)),
                    searchStr = anyToString(searchString),
                    thisLen = thisStr.length,
                    start = clamp(toInteger(position), 0, thisLen);

                return strictEqual(thisStr.slice(start, start + thisLen), searchStr);
            };
        }

        nfeStartsWith = null;

        return tempSafariNFE;
    }());
    */

    /**
     * Determines whether a string ends with the characters of another string, returning true or false as appropriate.
     * @ignore
     * @private
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    /*
    // named stringEndsWith instead of endsWith because of SpiderMonkey and Blackberry bug
    stringEndsWith = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe
        var endsWithFN = baseString.constructor.endsWith,
            nfeEndsWith;

        if (isFunction(endsWithFN)) {
            tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                return endsWithFN.call(string, searchString, position);
            };
        } else {
            tempSafariNFE = function nfeEndsWith(string, searchString, position) {
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

        nfeEndsWith = null;

        return tempSafariNFE;
    }());
    */

    /**
     * Determines whether a string contains the characters of another string, returning true or false as appropriate.
     * @private
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
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

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * @private
     * @function
     * @param {object} object
     * @return {Prototype}
     */
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

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     * @private
     * @function
     * @param {array} array
     * @param {*} searchElement
     * @return {boolean}
     */
    function arrayContains(array, searchElement) {
        return !strictEqual(arrayIndexOf(array, searchElement), -1);
    }

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of that object;
     * unlike the hasProperty function, this method does not check down the object's prototype chain.
     * @private
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
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

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * @private
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    toObjectFixIndexedAccess = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe
        var boxedString = baseObject.constructor('a'),
            splitString = !strictEqual(boxedString[0], 'a') || !hasProperty(boxedString, 0),
            nfeToObjectFixIndexedAccess;

        tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
            var object;

            if (splitString && isString(inputArg)) {
                object = stringSplit(inputArg, '');
            } else {
                object = argToObject(inputArg);
            }

            return object;
        };

        nfeToObjectFixIndexedAccess = null;

        return tempSafariNFE;
    }());

    /**
     * Executes a provided function once per array element.
     * @private
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     */
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

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     * @private
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {boolean}
     */
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

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     * @private
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
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

    function argumentsSlice(args, start, end) {
        var val;

        if (isArguments(args)) {
            val = baseArray.slice.call(args, start, end);
        }

        return val;
    }

    // named arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
    /*
    arrayUnshift = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe
        var unshiftFN = baseArray.unshift,
            nfeUnshift;

        if (strictEqual(unshiftFN.call([], 0), 1)) {
            tempSafariNFE = function nfeUnshift(array) {
                return unshiftFN.apply(array, argumentsSlice(arguments, 1, arguments.length));
            };
        } else {
            tempSafariNFE = function nfeUnshift(array) {
                unshiftFN.apply(array, argumentsSlice(arguments, 1, arguments.length));

                return array.length;
            };
        }

        nfeUnshift = null;

        return tempSafariNFE;
    }());
    */

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     * @ignore
     * @private
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
    // named arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
    /*
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
                    throw new TypeError(fn + ' is not a function');
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

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
     * @private
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {*} [initialValue]
     * @return {*}
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

    /**
     * Removes whitespace from both ends of the string.
     * @private
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    // named stringTrim instead of trim because of SpiderMonkey and Blackberry bug
    stringTrim = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var trimFN = baseString.trim,
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

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @private
     * @function
     * @param {array} array
     * @param {object} searchElement
     * @param {number} [fromIndex]
     * @return {number}
     */
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

    /**
     * Returns an array of a given object's own enumerable properties, in the same order as that provided by a for-in loop
     * (the difference being that a for-in loop enumerates properties in the prototype chain as well).
     * @private
     * @function
     * @param {object} object
     * @return {array}
     */
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

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
     * @private
     * @function
     * @param {object} object
     * @param {string} property
     * @param {object} descriptor
     * @return {object}
     */
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

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     * @private
     * @function
     * @param {object} object
     * @param {string} props
     * @return {object}
     */
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

    /**
     * Returns a property descriptor for an own property (that is, one directly present on an object,
     * not present by dint of being along an object's prototype chain) of a given object.
     * @private
     * @function
     * @param {object} object
     * @param {string} property
     * @return {object}
     */
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
                    }

                    descriptor.value = object[property];
                    descriptor.writable = true;
                }

                return descriptor;
            };
        }

        nfeGetOwnPropertyDescriptor = null;

        return tempSafariNFE;
    }());

    /**
     * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed;
     * and prevents existing properties, or their enumerability, configurability, or writability, from being changed.
     * In essence the object is made effectively immutable. Returns the object being frozen.
     * @private
     * @function
     * @param {object} object
     * @return {object}
     */
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
        objectFreeze(noop);
    } catch (exception) {
        objectFreeze = (function (freezeObject) {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var nfeFreezeR;

            tempSafariNFE = function nfeFreezeR(object) {
                var val;

                if (isFunction(object)) {
                    val = object;
                } else {
                    val = freezeObject(object);
                }

                return val;
            };

            nfeFreezeR = null;

            return tempSafariNFE;
        }(objectFreeze));
    }

    /**
     * Determine if an object is frozen.
     * @private
     * @function
     * @param {object} object
     * @return {boolean}
     */
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

    /**
     * To make object fully immutable, freeze each object in object.
     * @private
     * @function
     * @param {object} object
     * @return {object}
     */
    function deepFreeze(object) {
        objectFreeze(object);
        arrayForEach(objectKeys(object), function (propKey) {
            var prop = object[propKey];

            if ((isTypeObject(prop) || isFunction(prop)) && !objectIsFrozen(prop)) {
                deepFreeze(prop);
            }
        });

        return object;
    }

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     * @private
     * @function
     * @param {object} object
     * @param {function} ctr
     * @return {boolean}
     */
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

    /**
     * The objectCreate method creates a new object with the specified prototype object and properties.
     * @private
     * @function
     * @param {object} prototype
     * @return {object}
     */
    // named objectCreate instead of create because of SpiderMonkey and Blackberry bug
    /*
    objectCreate = (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe
        var objectCreateFN = baseObject.constructor.create,
            nfeObjectCreate,
            Func;

        if (isFunction(objectCreateFN)) {
            tempSafariNFE = objectCreateFN;
        } else if (isFunction(objectGetPrototypeOf)) {
            Func = function () {
                return;
            };

            tempSafariNFE = function nfeObjectCreate(prototype) {
                if (!strictEqual(arguments.length, 1)) {
                    throw new Error('Object.create implementation only accepts one parameter.');
                }

                Func.prototype = prototype;

                return new Func();
            };
        }

        nfeObjectCreate = null;

        return tempSafariNFE;
    }());
    */

    baseObjectPrototype = objectGetPrototypeOf(baseObject);

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * @private
     * @function
     * @param {object} object
     * @return {boolean}
     */
    function isPlainObject(object) {
        return isObject(object) && strictEqual(objectGetPrototypeOf(object), baseObjectPrototype);
    }

    /**
     * Merge the contents of source object together into the target object.
     * @private
     * @function
     * @param {object} target
     * @param {object} source
     * @return {object}
     */
    function extend(target, source) {
        if (!isTypeObject(target) && !isFunction(target)) {
            throw new TypeError('extend called on a non-object');
        }

        arrayForEach(objectKeys(source), function (key) {
            objectDefineProperty(target, key, objectGetOwnPropertyDescriptor(source, key));
        });

        return target;
    }

    /**
     * Returns true if the operand inputArg is a Date object and is valid.
     * @private
     * @function
     * @param {*} dateObject
     * @return {boolean}
     */
    function isDateValid(dateObject) {
        return isDate(dateObject) && !numberIsNaN(dateObject.getTime());
    }

    /**
     * Returns true if the operand inputArg is a String and only contains numerical digits.
     * @private
     * @function
     * @param {*} string
     * @return {boolean}
     */
    function isDigits(string) {
        return isString(string) && (/^\d+$/).test(string);
    }

    /**
     * Takes string and puts a backslash in front of every character that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain special regex characters.
     * @private
     * @function
     * @param {string} string
     * @return {string}
     */
    function escapeRegex(string) {
        return string.replace(/[\[\](){}?*+\^$\\.|]/g, '\\$&');
    }

    /**
     * Wraps a string within the string character.
     * @private
     * @function
     * @param {string} string
     * @param {string} character
     * @return {string}
     */
    function wrapInChar(string, character) {
        return character + string + character;
    }

    /**
     * Replace all occurences of a string pattern within a string with the string characters.
     * @private
     * @function
     * @param {string} string
     * @param {string} pattern
     * @param {string} characters
     * @return {string}
     */
    function replaceAll(string, pattern, characters) {
        return string.replace(new RegExp(escapeRegex(pattern), 'g'), characters);
    }

    deepFreeze(defaultProperties);

    /**
     * Variables and utility functions used by the AstroDate class and requiring the BigNumber library.
     * @private
     * @function
     * @param {class} BigNumber
     * @return {class} AsroDate
     */
    function defineAstroDate(BigNumber) {
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
        objectDefineProperties(BigNumber.prototype, {
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
                    return padLeadingChar(this.toString(), '0', size);
                }
            }
        });

        objectDefineProperties(BigNumber, {
            /**
             * @memberOf external:BigNumber
             * @function
             * @param {*} inputArg
             * @return {boolean}
             */
            isBigNumber: {
                value: function (inputArg) {
                    return isObject(inputArg) && objectInstanceOf(inputArg, BigNumber);
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

        deepFreeze(fullOptions);
        deepFreeze(fullKeys);
        deepFreeze(monthKeys);
        deepFreeze(dayKeys);
        deepFreeze(nameTypes);
        deepFreeze(widthTypes);
        deepFreeze(formatTypes);

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
                if (!isPlainObject(leapSeconds)) {
                    throw new Error('No leap second table!');
                }

                leapSecond = leapSeconds[struct.year.toString()];
                if (isPlainObject(leapSecond)) {
                    leapSecond = leapSecond[struct.month.toString()];
                    if (isPlainObject(leapSecond)) {
                        leapSecond = toNumber(leapSecond[struct.day.toString()]);
                        if (numberIsFinite(leapSecond)) {
                            maxSecond += leapSecond;
                        }
                    }
                }
            }

            return (struct.hour.equals(24) && second.isZero()) || (!struct.hour.equals(24) && second.gte(0) && second.lt(maxSecond));
        }

        function inMillisecondRange(millisecond, hour) {
            return (hour.equals(24) && millisecond.isZero()) || (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
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

            return struct.month.times(275).div(9).floor().minus(struct.month.plus(9).div(12).floor().times(k)).plus(struct.day).minus(30);
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

        function normaliseOptions(options) {
            var normalised = {};

            if (isPlainObject(options)) {
                arrayForEach(objectKeys(options), function (element) {
                    element = element.toLowerCase();
                    arrayForEach(fullOptions, function (opt) {
                        if (strictEqual(element, opt.alias) || strictEqual(element, opt.full)) {
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

        function gregorianToJdn(struct) {
            return gregorianToJd(struct).round(1, 1);
        }

        /*
        function objectValues(inputArg) {
            return arrayMap(objectKeys(inputArg), function (key) {
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
            return dayKeys[toNumber(dayOfWeekNumber(struct))];
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

            if (isNumber(value) || isString(value)) {
                val = toNumber(value);
                if (!numberIsFinite(val)) {
                    val = value.toString().toUpperCase();
                }
            } else {
                val = '';
            }

            if (isNumber(val)) {
                bn = new BigNumber(val);
            } else if (strictEqual(val, 'Z') || strictEqual(val, 'UTC') || strictEqual(val, 'GMT')) {
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

            if (arrayIsArray(arr)) {
                arraySome(fullKeys, function (element, index) {
                    var value = arr[index],
                        bn,
                        dim;

                    if (isNumber(value) || isString(value) || (value && value instanceof BigNumber)) {
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
                            bn = BigNumber.one();
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
                            bn = BigNumber.one();
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'hour':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'minute':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'second':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inSecondRange(bn, struct)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'millisecond':
                        if (isUndefined(value)) {
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

                    if (isNumber(value) || isString(value) || (value && value instanceof BigNumber)) {
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
                            bn = BigNumber.one();
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
                            bn = BigNumber.one();
                        }

                        if (!inDayRange(bn, dim)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'hour':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inHourRange(bn)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'minute':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inMinuteRange(bn, struct.hour)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'second':
                        if (isUndefined(value)) {
                            bn = BigNumber.zero();
                        }

                        if (!inSecondRange(bn, struct)) {
                            struct = {};
                            return true;
                        }

                        break;
                    case 'millisecond':
                        if (isUndefined(value)) {
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

            if (isPlainObject(struct)) {
                arrayForEach(fullKeys, function (key) {
                    newObject[key.full] = struct[key.full].toString();
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

                    if (strictEqual(element.full, 'offset')) {
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
                extend(struct, fractionToTime(jd.modf().abs(), 'day'));
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
                extend(struct, fractionToTime(jd.modf().abs(), 'day'));
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
                structLocal = jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).minus(timezoneOffset.times(1000)).div(86400000));

            structLocal.offset = timezoneOffset;

            return structLocal;
        }

        /*
        function toTAI(struct) {
            var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(32184).div(86400000));

            structTT.offset = offset;

            return structTT;
        }

        function toGPS(struct) {
              var offset = struct.offset,
                structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(51184).div(86400000));

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
            return strictEqual(sign, '+') || !bn.isZero() || (bn.isZero() && !strictEqual(sign, '-'));
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

            if (!isUndefined(minute)) {
                frac.minute = new BigNumber(minute);
            }

            if (!isUndefined(second)) {
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
                firstSplit = stringSplit(stringTrim(string), /[T ]/),
                splitLength = firstSplit.length,
                element;

            if (inRange(splitLength, 1, 2)) {
                if (strictEqual(splitLength, 1)) {
                    element = arrayFirst(firstSplit);
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
                    dtObject.date = arrayFirst(firstSplit) || '00';
                    dtObject.time = arrayLast(firstSplit);
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
                    return dateToObject(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], rxResult[4]);
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
                    return ordinalToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3]);
                }
            }, {
                /**
                 * -+[..y]yyyyy-Www
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-W(\d{2})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], 1);
                }
            }, {
                /**
                 * -+[..y]yyyyy-Www-D
                 * @private
                 */
                regex: /^([\-+])(\d{5,})-W(\d{2})-([1-7]{1})$/,
                func: function (rxResult) {
                    return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], rxResult[4]);
                }
            }]
        };

        /** Make datePatterns readonly */
        deepFreeze(datePatterns);

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
                    return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
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
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
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
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
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
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
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
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
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
                    return secondFractionToTime(rxResult[4], bnGetTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
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
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
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
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
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
                        val = minuteFractionToTime(rxResult[3], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2]);
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
                        val = secondFractionToTime(rxResult[4], offset.times(toSignMultipler(sign)).neg(), rxResult[1], rxResult[2], rxResult[3]);
                    }

                    return val;
                }
            }]
        };

        /** Make timePatterns readonly */
        deepFreeze(timePatterns);

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

                if (!isNull(rxResult)) {
                    result = pattern.func(rxResult);
                    if (!isUndefined(result)) {
                        extend(dtObject, result);
                    }

                    val = true;
                }

                return val;
            }

            if (isString(isoString) && !isEmptyString(isoString) && !invalidISOCharsRx.test(isoString) && isoHasValidCharacterCounts(isoString)) {
                extend(dtObject, isoSplitDateTime(isoString));
                searchString = dtObject.date;
                if (!arraySome(datePatterns.basic, searchPatterns)) {
                    if (arraySome(datePatterns.extended, searchPatterns)) {
                        searchString = dtObject.time;
                        arraySome(timePatterns.extended, searchPatterns);
                    }
                } else {
                    searchString = dtObject.time;
                    arraySome(timePatterns.basic, searchPatterns);
                }
            }

            return dtObject;
        }

        /**
         * Converts the given Gregorian structure to an appropriate structure depending on the AstroDate instance settings.
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
            var strNum = anyToString(checkObjectCoercible(num)),
                firsrCharacter,
                val;

            if (isDigits(strNum) && new BigNumber(strNum).isFinite()) {
                firsrCharacter = firstChar(strNum);
                val = '';
                if (strictEqual(firsrCharacter, '-')) {
                    strNum = strNum.slice(1);
                    size -= 1;
                    val = firsrCharacter;
                }

                val += padLeadingChar(strNum, '0', size);
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
            if (!isString(token) || isEmptyString(token)) {
                throw new Error();
            }

            var firstCharacter,
                count,
                copyMatch,
                noWrap;

            if ((/^\{\d\}$/).test(token)) {
                token = escapeRegex(token);
                copyMatch = token;
                noWrap = true;
            } else {
                firstCharacter = firstChar(token);
                if (!(/^\S\{\d+,\d*\}$/).test(token)) {
                    count = token.length;
                    if (!strictEqual(count, countCharacter(token, firstCharacter))) {
                        throw new Error(token);
                    }
                }

                copyMatch = '(?:^|[^' + firstCharacter + '])(' + token + ')(?:[^' + firstCharacter + ']|$)';
            }

            /**
             * Replaces tokens, handles padding choice and wraps replacements (if required) in sinqle quotes so they are ignored in future.
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

                if (!strictEqual(noWrap, true)) {
                    val = wrapInChar(val, '\'');
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
            return !isEmptyString(remainingTokens(pattern));
        }

        /**
         * Remove all signle quote characters from a given dtring.
         * @private
         * @function
         * @param {string} string
         * @return {string}
         */
        function stripSingleQuotes(string) {
            return replaceAll(string, '\'', '');
        }

        /**
         * Replace all occurences of '-' with '_'.
         * @private
         * @function
         * @param {string} string
         * @return {string}
         */
        function minusToUnderscore(string) {
            return replaceAll(string, '-', '_');
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

        deepFreeze(calendarTypes);
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

            if (isString(locale) && (/^([a-z]{2,3}|[a-z]{2,3}[\-_][a-z]{2}|[a-z]{2,3}[\-_][a-z]{4}|[a-z]{2,3}[\-_][a-z]{4}[\-_][a-z]{2})$/i).test(locale)) {
                firstSplit = splitUnderscore(minusToUnderscore(locale));
                firstSplitLength = firstSplit.length;
                val.push(firstSplit[0].toLowerCase());
                if (!strictEqual(firstSplitLength, 1)) {
                    element = firstSplit[1];
                    if (strictEqual(firstSplitLength, 2)) {
                        elementLength = element.length;
                        if (strictEqual(elementLength, 2)) {
                            region = element.toUpperCase();
                        } else {
                            script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                        }
                    } else {
                        script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                        region = firstSplit[2].toUpperCase();
                    }
                }

                if (!isUndefined(script) && !strictEqual(script, 'Zzzz')) {
                    val.push(script);
                }

                if (!isUndefined(region) && !strictEqual(region, 'ZZ')) {
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

            if (!isEmptyString(canonicalizedLocale)) {
                likelySubtags = supplemental.likelySubtags;
                lookup = likelySubtags[canonicalizedLocale];
                if (isUndefined(lookup)) {
                    firstSplit = splitUnderscore(canonicalizedLocale);
                    length = firstSplit.length;
                    lang = arrayFirst(firstSplit);
                    if (strictEqual(length, 3)) {
                        region = arrayLast(firstSplit);
                        script = firstSplit[1];
                    } else if (strictEqual(length, 2)) {
                        element = arrayLast(firstSplit);
                        elementLength = element.length;
                        if (strictEqual(elementLength, 2)) {
                            region = element;
                        } else {
                            script = element;
                        }
                    }

                    if (isUndefined(lookup) && !isUndefined(region)) {
                        lookup = likelySubtags[[lang, region].join('_')];
                    }

                    if (isUndefined(lookup) && !isUndefined(script)) {
                        lookup = likelySubtags[[lang, script].join('_')];
                    }

                    if (isUndefined(lookup)) {
                        if (!isUndefined(languages[canonicalizedLocale])) {
                            lookup = canonicalizedLocale;
                        }
                    }

                    if (isUndefined(lookup)) {
                        lookup = likelySubtags[lang];
                    }

                    if (isUndefined(lookup) && !isUndefined(script)) {
                        lookup = likelySubtags[['und', script].join('_')];
                    }
                }
            }

            if (isUndefined(lookup)) {
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

            if (!isEmptyString(locale)) {
                lang = minusToUnderscore(locale);
                if (!isUndefined(languages[lang])) {
                    loaded = lang;
                } else {
                    firstSplit = splitUnderscore(lookupLocale(locale));
                    lang = [arrayFirst(firstSplit), arrayLast(firstSplit)].join('_');
                    if (!isUndefined(languages[lang])) {
                        loaded = lang;
                    } else {
                        lang = arrayFirst(firstSplit);
                        if (!isUndefined(languages[lang])) {
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
            return arrayLast(splitUnderscore(locale));
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
                standAlone = arrayLast(nameTypes),
                months = gregorian.months,
                monthsFormat = months.format,
                monthsStandAlone = months[standAlone],
                days = gregorian.days,
                daysFormat = days.format,
                daysStandAlone = days[standAlone],
                shortStr = arrayLast(formatTypes),
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

            if (arrayContains(formatTypes, pattern)) {
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

            dayOfWeekLocaleNumber = mod(1 + (7 - arrayIndexOf(dayKeys, supplemental.weekData.firstDay[getRegion(locale)]) + arrayIndexOf(dayKeys, dayKey)), 7);
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
                    offsetFormat = arrayFirst(offsetFormats);
                } else {
                    offsetFormat = arrayLast(offsetFormats);
                }

                offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
                if (strictEqual(format, 'basic')) {
                    if (strictEqual(optional, true) && offset.minute.isZero()) {
                        offsetFormat = arrayFirst(offsetFormat.split(':'));
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
                    offsetFormat = arrayFirst(offsetFormats);
                } else {
                    offsetFormat = arrayLast(offsetFormats);
                }

                offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:') + ':ss';
                if (strictEqual(format, 'basic')) {
                    if (strictEqual(optional, true) && offset.second.isZero()) {
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
                    offsetFormat = arrayFirst(offsetFormats);
                } else {
                    offsetFormat = arrayLast(offsetFormats);
                }

                if (strictEqual(requestedShort, true)) {
                    offsetFormat = offsetFormat.replace('HH', 'H');
                } else {
                    offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
                }

                if (requestedShort && offset.minute.isZero()) {
                    offsetFormat = arrayFirst(offsetFormat.split(':'));
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

            if (arrayContains(formatTypes, pattern)) {
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
         * Integer or string value representing the year. The year must always be provided in full (e.g. 98 is treated as 98, not 1998).</li>
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
         * null or object Must be used when only year is specified. Allows date to be specified in Julian Calender (more/changes coming). </li>
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
         * new AstroDate(55, {julian: true, offset: -3600}); // year 55 of the Julian Calendar, offset is same as '+01:00:00'
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

            objectDefineProperties(this, {
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
                            case 'DT':
                                delta = mathSign(value) || 0;
                                break;
                            case 'isLocal':
                                isLocal = Boolean(value);
                                break;
                            case 'lang':
                                if (isString(value) && !isEmptyString(value)) {
                                    currentLanguage = value;
                                } else {
                                    currentLanguage = defaultLanguage;
                                    currentLocale = defaultLocale;
                                }

                                break;
                            case 'locale':
                                if (isString(value) && !isEmptyString(value)) {
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
            if (strictEqual(length, 0)) {
                struct = dateToStruct(new Date());
            } else if (strictEqual(length, 1)) {
                arg = arrayFirst(args);
                if (AstroDate.isAstroDate(arg)) {
                    isJulian = arg.getter('isJulian');
                    struct = extend({}, arg.getter());
                } else if (isDate(arg)) {
                    struct = dateToStruct(arg);
                } else if (isNumber(arg)) {
                    struct = dateToStruct(new Date(arg));
                } else if (isString(arg)) {
                    struct = isoParse(arg);
                } else {
                    throw new TypeError(arg);
                }
            } else {
                arg = arrayLast(args);
                opts = normaliseOptions(arg);
                if (isNull(arg) || isPlainObject(arg)) {
                    if (opts.Julian) {
                        isJulian = true;
                    }

                    struct = arrayToStruct(argumentsSlice(args, 0, -1), isJulian);
                    if (isJulian) {
                        struct = julianToGregorian(struct);
                    }
                } else {
                    struct = arrayToStruct(argumentsSlice(args, 0, args.length), isJulian);
                }

                if (isUndefined(args[8]) && !isUndefined(opts.offset)) {
                    struct.offset = bnOffset(opts.offset);
                }
            }

            if (!isValid(struct)) {
                struct = {};
            }
        }

        objectDefineProperties(AstroDate.prototype, {
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
                    return strictEqual(this.getter('DT'), -1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isTT2UT: {
                value: function () {
                    return strictEqual(this.getter('DT'), 1);
                }
            },

            /** @memberOf AstroDate.prototype
             * @function
             * @return {boolean}
             * @this AstroDate
             */
            isDT: {
                value: function () {
                    return !strictEqual(this.getter('DT'), 0);
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

                    if (isString(isoString)) {
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
             * One to three letters for the abbreviated form, four letters for the long form, five for the narrow form.</td>
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
             * Year. Normally the length specifies the padding, but for two letters it also specifies the maximum length.
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
             * Use one through three letters for the abbreviated name, four for the full name, or five for the narrow name
             * (currently the data only provides abbreviated names,
             * which will be used for all requested name widths). If the calendar does not provide cyclic year name data,
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
             * This is based on the ICU definition of week of month, and correlates to the ISO8601 week of year definition.
             * A day in the week before the week with the first Thursday will be week 0.</td>
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
             * local starting day of the week, using one or two letters. For this example, Monday is the first day of the week.</td>
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
             * <td>Hour [1-12]. When used in skeleton data or in a skeleton passed in an API for flexible data pattern generation,
             * it should match the 12-hour-cycle format preferred by the locale (h or K);
             * it should not match a 24-hour-cycle format (H or k). Use hh for zero padding.</td>
             * </tr>
             * <tr>
             * <td style="text-align: center">H</td>
             * <td style="text-align: center">1..2</td>
             * <td>13</td>
             * <td>Hour [0-23]. When used in skeleton data or in a skeleton passed in an API for flexible data pattern generation,
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
             * not including the zone fields. As such, it also reflects discontinuities of those fields on DST transition days.
             * On a day of DST onset, it will jump forward. On a day of DST cessation, it will jump backward.
             * This reflects the fact that is must be combined with the offset field to obtain a unique local time value.</td>
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
             * The ISO8601 UTC indicator "Z" is used when local time offset is 0. This is equivalent to the "XXXXX" specifier.</td>
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
             * <i>generic location format</i> ("VVVV"), then the <i>short localized GMT format</i> as the final fallback.</td>
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
             * <td><b>NOT SUPPORTED!</b> The short time zone ID. Where that is unavailable, the special short time zone ID
             * <i>unk</i> (Unknown Zone) is used.<br>
             * <i><b>Note</b>: This specifier was originally used for a variant of the short specific non-location format,
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
             * <p>A pattern containing any invalid pattern letter will result in a thrown exception during formatting.</p>
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
                        if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                            if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
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
                        if (!isString(pattern) || isEmptyString(pattern)) {
                            pattern = arrayFirst(formatTypes);
                        }

                        if (arrayContains(objectKeys(dateTimeFormats), pattern)) {
                            dateTimeFormat = dateTimeFormats[pattern];
                            dateTimeFormat = replaceToken(dateTimeFormat, '{1}', formatDate(struct, pattern, isJulian, lang, this.locale()));
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
                    if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                        pattern = arrayFirst(formatTypes);
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
                        if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                            if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
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

                        if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                            pattern = arrayFirst(formatTypes);
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
                        if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                            if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
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

                        if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                            pattern = arrayFirst(formatTypes);
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

            /** @memberOf AstroDate.prototype
             * @function
             * @param {window.Date} [date]
             * @this AstroDate
             */
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
             * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus the fraction of the day since that instant.
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

                    if (isUndefined(jd)) {
                        if (this.isValid()) {
                            if (this.isTT()) {
                                struct = toTT(this.getter());
                            } else {
                                struct = this.getter();
                            }

                            val = gregorianToJd(toUT(struct)).toFixed(BigNumber.config().DECIMAL_PLACES);
                        }
                    } else if (isNumber(jd) || isString(jd) || (jd && jd instanceof BigNumber)) {
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
                            val = toNumber(daysInJulianYear(gregorianToJulian(struct)).toString());
                        } else {
                            val = toNumber(daysInGregorianYear(struct).toString());
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
                            val = toNumber(daysInJulianMonth(gregorianToJulian(struct)).toString());
                        } else {
                            val = toNumber(daysInGregorianMonth(struct).toString());
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
                        propArray,
                        val;

                    if (isUndefined(jsonString)) {
                        if (typeof JSON === 'object' && isFunction(JSON.stringify)) {
                            val = JSON.stringify(this.object());
                        } else {
                            struct = this.object();
                            propArray = arrayMap(objectKeys(struct), function (key) {
                                return '"' + key + '":"' + struct[key] + '"';
                            });

                            val = '{' + propArray.join(',') + '}';
                        }
                    } else if (isString(jsonString)) {
                        if (typeof JSON === 'object' && isFunction(JSON.parse)) {
                            struct = objectToStruct(JSON.parse(jsonString), this.isJulian());
                        } else {
                            /*jslint evil: true */
                            struct = objectToStruct(new Function('return' + jsonString)(), this.isJulian());
                            /*jslint evil: false */
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

                    if (isString(id) && !isEmptyString(id)) {
                        lang = minusToUnderscore(id);
                        if (isPlainObject(languages[lang])) {
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

                    if (isString(id) && !isEmptyString(id)) {
                        lang = languageLoaded(id);
                        if (!isEmptyString(lang)) {
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

        objectDefineProperties(AstroDate, {
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

                    if (isString(id) && !isEmptyString(id)) {
                        lang = minusToUnderscore(id);
                        if (isPlainObject(object)) {
                            languages[lang] = object;
                            if (!strictEqual(freeze, false)) {
                                deepFreeze(languages[lang]);
                            }
                        }

                        if (isPlainObject(languages[lang])) {
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
                    return objectKeys(languages);
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

                    if (isString(id) && !isEmptyString(id)) {
                        lang = languageLoaded(id);
                        if (!isEmptyString(lang)) {
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
                    if (isPlainObject(object)) {
                        leapSeconds = object;
                        if (!strictEqual(freeze, false)) {
                            deepFreeze(leapSeconds);
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
                    if (isPlainObject(object)) {
                        supplemental = object;
                        if (!strictEqual(freeze, false)) {
                            deepFreeze(supplemental);
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
                    return isObject(inputArg) && objectInstanceOf(inputArg, AstroDate);
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
             * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus the fraction of the day since that instant.
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
             * The Julian Day Number (JDN) is the integer assigned to a whole solar day in the Julian day count starting from noon Greenwich Mean Time,
             * with Julian day number 0 assigned to the day starting at noon on 1 January 4713 BC proleptic Julian calendar (24 November 4714 BC, in the proleptic Gregorian calendar).
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
             * The Modified Julian Date (MJD) was introduced by the Smithsonian Astrophysical Observatory in 1957 to record the orbit of
             * Sputnik via an IBM 704 (36-bit machine) and using only 18 bits until August 7, 2576.
             * MJD is the epoch of OpenVMS, using 63-bit date/time postponing the next Y2K campaign to July 31, 31086 02:48:05.47.
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
             * Due to its handling of leap seconds, it is neither a linear representation of time nor a true representation of UTC.
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

        /* jshint quotmark: false, -W100 */
        leapSeconds = deepFreeze( /*@@leapSeconds*/ );

        supplemental = deepFreeze( /*@@supplemental*/ );

        languages = deepFreeze( /*@@languages*/ );

        AstroDate.locale('en_GB');

        return AstroDate;
    }

    /*
     *
     * UMD
     *
     */

    if (!isTypeObject(globalThis)) {
        throw new TypeError('Invalid global context');
    }

    function addBigNumberModule(module, define) {
        if (!isUndefined(module) || !isUndefined(define)) {
            throw new Error();
        }

        /*jslint eqeq: true, plusplus: true, sub: true, white: true, newcap: true, vars: true, ass: true, bitwise: true */
        /*jshint unused: false, expr: true, asi: true, eqnull: true, laxbreak: true, validthis: true, noempty: false, -W017, -W018, -W032, -W041, -W084, -W116, -W120 */
        /*@@BigNumber*/

        return this.BigNumber;
    }

    Definition = defineAstroDate(addBigNumberModule.call({}));
    /*global module, define */
    if (typeof module === 'object' && null !== module && typeof module.exports === 'object' && null !== module.exports) {
        module.exports = Definition;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && null !== define.amd) {
        define(function () {
            return Definition;
        });
    } else {
        globalThis.AstroDate = Definition;
    }

    tempSafariNFE = null;
}(this));
