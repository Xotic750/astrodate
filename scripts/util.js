/**
 * @file Utility library for server and client side JavaScript.
 * @version 0.0.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @module util
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

    function factory() {
        var util = {},
            UWORD32 = Math.pow(2, 32),
            MAX_UINT32 = UWORD32 - 1,
            baseObject = {},
            baseArray = [],
            baseString = '',
            baseNumber = 0,
            baseBoolean = true,
            CtrBoolean = baseBoolean.constructor,
            CtrNumber = baseNumber.constructor,
            CtrString = baseString.constructor,
            protoName = '__proto__',

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

            // Safari 2.x NFE bug fix
            // http://kangax.github.io/nfe/
            tempSafariNFE;

        /**
         * Returns the primitive value undefined.
         * @ignore
         * @private
         * @function
         * @return {undefined}
         */
        util.noop = function () {
            return;
        };

        util.privateUndefined = (function () {
            return util.noop();
        }());

        /**
         * Coerces an input to a number.
         * @private
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        util.toNumber = function (inputArg) {
            return +inputArg;
        };

        /**
         * Returns true if the operands are loosely equal.
         * @private
         * @function
         * @param {*} a
         * @param {*} b
         * @return {boolean}
         */
        util.equal = function (a, b) {
            /*jslint eqeq: true */
            return a == b;
        };

        /**
         * Returns true if the operands are not loosely equal.
         * @private
         * @function
         * @param {*} a
         * @param {*} b
         * @return {boolean}
         */
        util.notEqual = function (a, b) {
            /*jslint eqeq: true */
            return a != b;
        };

        /**
         * Returns true if the operands are strictly equal with no type conversion.
         * @private
         * @function
         * @param {*} a
         * @param {*} b
         * @return {boolean}
         */
        util.strictEqual = function (a, b) {
            return a === b;
        };

        /**
         * Returns true if the operands are not strictly equal with no type conversion.
         * @private
         * @function
         * @param {*} a
         * @param {*} b
         * @return {boolean}
         */
        util.notStrictEqual = function (a, b) {
            return a !== b;
        };

        /**
         * Returns true if the operand number is less than limit.
         * @private
         * @param {number} number
         * @param {number} limit
         * @return {boolean}
         */
        util.lt = function (number, limit) {
            return number < limit;
        };

        /**
         * Returns true if the operand number is less than or equal to limit.
         * @private
         * @function
         * @param {number} number
         * @param {number} limit
         * @return {boolean}
         */
        util.lte = function (number, limit) {
            return number <= limit;
        };

        /**
         * Returns true if the operand number is greater than limit.
         * @private
         * @function
         * @param {number} number
         * @param {number} limit
         * @return {boolean}
         */
        util.gt = function (number, limit) {
            return number > limit;
        };

        /**
         * Returns true if the operand number is greater than or equal to limit.
         * @private
         * @function
         * @param {number} number
         * @param {number} limit
         * @return {boolean}
         */
        util.gte = function (number, limit) {
            return number >= limit;
        };

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
        util.mod = function (number1, number2) {
            return number1 % number2;
        };

        /**
         * Returns a number clamped to the range set by min and max.
         * @private
         * @function
         * @param {number} number
         * @param {number} min
         * @param {number} max
         * @return {number}
         */
        util.clamp = function (number, min, max) {
            return Math.min(Math.max(number, min), max);
        };

        /**
         * Returns true if the operand number is greater than or equal to min or if number is less than or equal to max.
         * @private
         * @function
         * @param {number} number
         * @param {number} min
         * @param {number} max
         * @return {boolean}
         */
        util.inRange = function (number, min, max) {
            return util.gte(number, min) && util.lte(number, max);
        };

        /**
         * Returns true if the operand inputArg is undefined.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isUndefined = function (inputArg) {
            return util.strictEqual(typeof inputArg, 'undefined');
        };

        /**
         * Returns true if the operand inputArg is null.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isNull = function (inputArg) {
            return util.strictEqual(inputArg, null);
        };

        /**
         * Returns true if the operand inputArg is undefined or null.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isUndefinedOrNull = function (value) {
            return util.isUndefined(value) || util.isNull(value);
        };

        /**
         * Returns true if the operand inputArg is a true.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isTrue = function (inputArg) {
            return util.strictEqual(inputArg, true);
        };

        /**
         * Returns true if the operand inputArg is a false.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isFalse = function (inputArg) {
            return util.strictEqual(inputArg, false);
        };

        /**
         * Returns true if the operand inputArg is a boolean.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isBoolean = function (inputArg) {
            return util.isTrue(inputArg) || util.isFalse(inputArg);
        };

        /**
         * Returns true if the operand inputArg is a number.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isNumber = function (inputArg) {
            return util.strictEqual(typeof inputArg, 'number');
        };

        /**
         * Returns true if the operand inputArg is the number 0.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isZero = function (inputArg) {
            return util.strictEqual(inputArg, 0);
        };

        /**
         * Returns true if the operand inputArg is a string.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isString = function (inputArg) {
            return util.strictEqual(typeof inputArg, 'string');
        };

        /**
         * Returns true if the operand inputArg is a primitive object.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isPrimitive = function (object) {
            return util.isUndefinedOrNull(object) || util.isString(object) || util.isNumber(object) || util.isBoolean(object);
        };

        /**
         * Returns true if the operand inputArg is an empty string.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isEmptyString = function (inputArg) {
            return util.strictEqual(inputArg, '');
        };

        /**
         * Returns true if the operand inputArg is deemed numeric.
         * @ignore
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isNumeric = function (inputArg) {
            var val = false,
                string;

            if (util.isNumber(inputArg) || util.isString(inputArg)) {
                string = inputArg.toString().replace(/^[+\-]?/, '');
                if (!isNaN(parseFloat(string)) && isFinite(string)) {
                    val = true;
                }
            }

            return val;
        };

        /**
         * The abstract operation throws an error if its argument is a value that cannot be
         * converted to an Object using util.argToObject, otherwise returns the argument.
         * @private
         * @function
         * @param {*} inputArg
         * @param {string} [msg]
         * @return {boolean}
         */
        util.checkObjectCoercible = function (inputArg) {
            if (util.isUndefinedOrNull(inputArg)) {
                throw new TypeError('Cannot convert "' + inputArg + '" to object');
            }

            return inputArg;
        };

        /**
         * The abstract operation converts its argument to a value of type Object
         * @private
         * @function
         * @param {*} inputArg
         * @return {object}
         */
        util.argToObject = function (inputArg) {
            var object = util.checkObjectCoercible(inputArg);

            if (util.isBoolean(object)) {
                object = new CtrBoolean(object);
            } else if (util.isNumber(object)) {
                object = new CtrNumber(object);
            } else if (util.isString(object)) {
                object = new CtrString(object);
            }

            return object;
        };

        /**
         * The abstract operation converts its argument to a value of type String
         * @private
         * @function
         * @param {*} inputArg
         * @return {string}
         */
        // named util.anyToString instead of toString because of SpiderMonkey and Blackberry bug
        util.anyToString = function (inputArg) {
            var val;

            if (util.isString(inputArg)) {
                val = inputArg;
            } else if (util.isUndefined(inputArg)) {
                val = 'undefined';
            } else {
                val = String(inputArg);
            }

            return val;
        };

        /**
         * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
         * @private
         * @function
         * @param {*} object
         * @return {string}
         */
        util.toObjectString = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var toStringFN = baseObject.toString,
                undefinedString = '[object Undefined]',
                nullString = '[object Null]',
                nfeToObjectString;

            try {
                tempSafariNFE = null;
                if (util.strictEqual(toStringFN.call(), undefinedString) && util.strictEqual(toStringFN.call(null), nullString)) {
                    tempSafariNFE = function nfeToObjectString(object) {
                        return toStringFN.call(object);
                    };
                }
            } catch (exception) {
                tempSafariNFE = null;
            }

            if (util.isNull(tempSafariNFE)) {
                tempSafariNFE = function nfeToObjectString(object) {
                    var val;

                    if (util.isUndefined(object)) {
                        val = undefinedString;
                    } else if (util.isNull(object)) {
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
        util.isRegExp = function (inputArg) {
            return util.strictEqual(util.toObjectString(inputArg), '[object RegExp]');
        };

        /**
         * Returns true if the operand inputArg is an Object.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isObject = function (inputArg) {
            return util.strictEqual(util.toObjectString(inputArg), '[object Object]');
        };

        /**
         * Returns true if the operand inputArg is a Function.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isFunction = function (inputArg) {
            return util.strictEqual(util.toObjectString(inputArg), '[object Function]');
        };

        /**
         * Returns true if the operand inputArg is an argumenta object.
         * @ignore
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isArguments = (function () {
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

            if (util.strictEqual(util.toObjectString(getArgs()), argumentsString)) {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return util.strictEqual(util.toObjectString(inputArg), argumentsString);
                };
            } else if (util.isFunction(propertyIsEnumerableFN)) {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return util.isObject(inputArg) && util.objectHasOwnProperty(inputArg, calleeString) && !propertyIsEnumerableFN.call(inputArg, calleeString) && util.objectHasOwnProperty(inputArg, lengthString) && !propertyIsEnumerableFN.call(inputArg, lengthString) && util.isNumber(inputArg.length);
                };
            } else {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return util.isObject(inputArg) && util.objectHasOwnProperty(inputArg, calleeString) && util.objectHasOwnProperty(inputArg, lengthString) && util.isNumber(inputArg.length);
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
        util.isTypeOfObject = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var testRx = /test/,
                objectString = 'object',
                isRxObject = util.strictEqual(typeof testRx, objectString),
                nfeIsTypeOfObject;

            if (util.isTrue(isRxObject)) {
                tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                    return util.strictEqual(typeof inputArg, objectString);
                };
            } else {
                tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                    return util.strictEqual(typeof inputArg, objectString) || util.isRegExp(inputArg);
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
        util.isTypeObject = function (inputArg) {
            return !util.isNull(inputArg) && util.isTypeOfObject(inputArg);
        };

        /**
         * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
         * whose class internal property is "Array"; otherwise it returns false.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        // named util.arrayIsArray instead of isArray because of SpiderMonkey and Blackberry bug
        util.arrayIsArray = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isArrayFN = baseArray.isArray,
                nfeIsArray;

            if (util.isFunction(isArrayFN)) {
                tempSafariNFE = isArrayFN;
            } else {
                tempSafariNFE = function nfeIsArray(inputArg) {
                    return util.strictEqual(util.toObjectString(inputArg), '[object Array]');
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
        util.hasProperty = function (object, property) {
            return property in object;
        };

        /**
         * The function takes one argument inputArg, if the argument is an object whose class internal property is "Array"
         * or is an Object whose class internal property is "Arguments"; returns true if length is zero otherwise it returns false.
         * Otherwise returns null if the argument does not match the rquirements.
         * @private
         * @function
         * @param {array} inputArg
         * @return {(boolean|null)}
         */
        util.isEmptyArray = function (inputArg) {
            var val;

            if (util.arrayIsArray(inputArg) || util.isArguments(inputArg)) {
                val = util.isZero(inputArg.length);
            } else {
                val = null;
            }

            return val;
        };

        /**
         * Returns the first element of an array; otherwise returns undefined.
         * @private
         * @function
         * @param {array} inputArg
         * @return {(*|undefined)}
         */
        util.arrayFirst = function (inputArg) {
            var val;

            if (!util.isEmptyArray(inputArg)) {
                val = inputArg[0];
            }

            return val;
        };

        /**
         * Returns the last element of an array; otherwise returns undefined.
         * @private
         * @function
         * @param {array} inputArg
         * @return {(*|undefined)}
         */
        util.arrayLast = function (inputArg) {
            var val;

            if (!util.isEmptyArray(inputArg)) {
                val = inputArg[inputArg.length - 1];
            }

            return val;
        };

        /**
         * Returns true if the operand inputArg is a Date object.
         * @private
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        util.isDate = function (inputArg) {
            return util.strictEqual(util.toObjectString(inputArg), '[object Date]');
        };

        /**
         * Determines whether two values are the same value.
         * @private
         * @function
         * @param {*} x
         * @param {*} y
         * @return {boolean}
         */
        // named util.objectIs instead of util.objectIs because of SpiderMonkey and Blackberry bug
        util.objectIs = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isIsFn = baseObject.constructor.is,
                nfeIs;

            if (util.isFunction(isIsFn)) {
                tempSafariNFE = isIsFn;
            } else {
                tempSafariNFE = function nfeIs(x, y) {
                    var val;

                    if (util.strictEqual(x, y)) {
                        if (util.isZero(x)) {
                            val = util.strictEqual(1 / x, 1 / y);
                        } else {
                            val = true;
                        }
                    } else {
                        val = util.notStrictEqual(x, x) && util.notStrictEqual(y, y);
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
        // named util.numberIsNaN instead of isNaN because of SpiderMonkey and Blackberry bug
        util.numberIsNaN = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isNaNFN = baseNumber.constructor.isNaN,
                nfeIsNaN;

            if (util.isFunction(isNaNFN)) {
                tempSafariNFE = isNaNFN;
            } else {
                tempSafariNFE = function nfeIsNaN(number) {
                    return util.objectIs(number, NaN);
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
        // named util.numberIsFinite instead of isFinite because of SpiderMonkey and Blackberry bug
        util.numberIsFinite = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isFiniteFN = baseNumber.constructor.isFinite,
                nfeIsFinite;

            if (util.isFunction(isFiniteFN)) {
                tempSafariNFE = isFiniteFN;
            } else {
                tempSafariNFE = function nfeIsFinite(number) {
                    return util.isNumber(number) && isFinite(number);
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
        util.mathSign = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var signFN = Math.sign,
                nfeSign;

            if (util.isFunction(signFN)) {
                tempSafariNFE = signFN;
            } else {
                tempSafariNFE = function nfeSign(value) {
                    var number = util.toNumber(value),
                        val;

                    if (util.isZero(number) || util.numberIsNaN(number)) {
                        val = number;
                    } else if (util.lt(number, 0)) {
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
        // named util.numberToInteger instead of toInteger because of SpiderMonkey and Blackberry bug
        util.numberToInteger = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var toIntegerFN = Number.toInteger,
                nfeToInteger;

            if (util.isFunction(toIntegerFN)) {
                tempSafariNFE = toIntegerFN;
            } else {
                tempSafariNFE = function nfeToInteger(inputArg) {
                    var number = util.toNumber(inputArg),
                        val;

                    if (util.numberIsNaN(number)) {
                        val = +0;
                    } else if (util.isZero(number) || !util.numberIsFinite(number)) {
                        val = number;
                    } else {
                        val = util.mathSign(number) * Math.floor(Math.abs(number));
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
        util.toInt32 = function (inputArg) {
            var number = util.toNumber(inputArg),
                int32bit,
                val;

            if (util.isZero(number) || !util.numberIsFinite(number)) {
                val = +0;
            } else {
                int32bit = util.mod(util.mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                if (util.gt(int32bit, UWORD32)) {
                    val = int32bit - UWORD32;
                } else {
                    val = int32bit;
                }
            }

            return val;
        };

        /**
         * The abstract operation converts its argument to one of 2^32 integer values in the range 0 through 2^32-1,inclusive.
         * @private
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        util.toUint32 = function (inputArg) {
            var number = util.toNumber(inputArg),
                val;

            if (util.isZero(number) || !util.numberIsFinite(number)) {
                val = +0;
            } else {
                val = util.mod(util.mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
            }

            return val;
        };

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

            util.arrayFirst(match).replace(separator, function () {
                for (index = 1; util.lt(index, length); index += 1) {
                    if (util.isUndefined(arguments[index])) {
                        match[index] = util.privateUndefined;
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
        // named util.stringSplit instead of split because of SpiderMonkey and Blackberry bug
        util.stringSplit = (function () {
            var splitFN = baseString.split,
                compliantExecNpcg = util.isUndefined(/()??/.exec('')[1]);

            return function (str, separator, limit) {
                var string = util.anyToString(util.checkObjectCoercible(str)),
                    output,
                    flags,
                    lastLastIndex,
                    separator2,
                    match,
                    lastIndex,
                    lastLength,
                    val;

                if (util.isRegExp(separator)) {
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
                    if (util.isFalse(compliantExecNpcg)) {
                        separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
                    }

                    if (util.isUndefined(limit)) {
                        limit = MAX_UINT32;
                    } else {
                        limit = util.toUint32(limit);
                    }

                    output = [];
                    flags = 'g';
                    lastLastIndex = 0;
                    match = separator.exec(string);
                    while (match) {
                        lastIndex = match.index + util.arrayFirst(match).length;
                        if (util.gt(lastIndex, lastLastIndex)) {
                            output.push(string.slice(lastLastIndex, match.index));
                            if (util.isFalse(compliantExecNpcg) && util.gt(match.length, 1)) {
                                stringSplitReplacer(separator2, match, arguments);
                            }

                            if (util.gt(match.length, 1) && util.lt(match.index, string.length)) {
                                output = output.concat(match.slice(1));
                            }

                            lastLength = util.arrayFirst(match).length;
                            lastLastIndex = lastIndex;
                            if (util.gte(output.length, limit)) {
                                break;
                            }
                        }

                        if (util.strictEqual(separator.lastIndex, match.index)) {
                            separator.lastIndex += 1;
                        }

                        match = separator.exec(string);
                    }

                    if (util.strictEqual(lastLastIndex, string.length)) {
                        if (lastLength || !separator.test('')) {
                            output.push('');
                        }
                    } else {
                        output.push(string.slice(lastLastIndex));
                    }

                    if (util.gt(output.length, limit)) {
                        return output.slice(0, limit);
                    }

                    val = output;
                } else {
                    val = splitFN.call(str, separator, limit);
                }

                return val;
            };
        }());

        /**
         * Coerces its argument to a string and returns the first character of that string.
         * If the argument is an empty string, returns an empty string.
         * Throws an error if the argument can not be coerced, i.e. null or undefined.
         * @private
         * @function
         * @param {string} inputArg
         * @return {string}
         */
        util.firstChar = function (inputArg) {
            return util.anyToString(util.checkObjectCoercible(inputArg)).charAt(0);
        };

        /**
         * Coerces inputArg to a string and compares the first character to the argument character.
         * Throws an error if the arguments can not be coerced, i.e. null or undefined.
         * @private
         * @function
         * @param {string} inputArg
         * @param {string} character
         * @return {boolean}
         */
        util.firstCharIs = function (inputArg, character) {
            return util.strictEqual(util.firstChar(inputArg), util.firstChar(character));
        };

        /**
         * Coerces its argument to a string and returns the last character of that string.
         * If the argument is an empty string, returns an empty string.
         * Throws an error if the argument can not be coerced, i.e. null or undefined.
         * @private
         * @function
         * @param {string} inputArg
         * @return {string}
         */
        util.lastChar = function (inputArg) {
            var thisStr = util.anyToString(util.checkObjectCoercible(inputArg));

            return thisStr.charAt(thisStr.length - 1);
        };

        /**
         * Coerces inputArg to a string and compares the last character to the argument character.
         * Throws an error if the arguments can not be coerced, i.e. null or undefined.
         * @private
         * @function
         * @param {string} inputArg
         * @param {string} character
         * @return {boolean}
         */
        util.lastCharIs = function (inputArg, character) {
            return util.strictEqual(util.lastChar(inputArg), util.firstChar(character));
        };

        /**
         * Coerces inputArg to a string and counts the occurences of the argument character.
         * Throws an error if the arguments can not be coerced, i.e. null or undefined.
         * @private
         * @function
         * @param {string} inputArg
         * @param {string} character
         * @return {number}
         */
        util.countCharacter = function (inputArg, character) {
            return util.clamp(util.stringSplit(util.anyToString(util.checkObjectCoercible(inputArg)), util.firstChar(character)).length - 1, 0, Number.POSITIVE_INFINITY);
        };

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
        util.padLeadingChar = function (inputArg, character, size) {
            var string = util.anyToString(util.checkObjectCoercible(inputArg)),
                singleChar = util.firstChar(character),
                count = util.numberToInteger(size) - string.length;

            if (util.lt(count, 0) || util.strictEqual(count, Infinity)) {
                count = 0;
            }

            return util.stringRepeat(singleChar, count) + string;
        };

        /**
         * Repeat the current string several times, return the new string.
         * @private
         * @function
         * @param {string} string
         * @param {number} times
         * @return {string}
         */
        // named util.stringRepeat instead of repeat because of SpiderMonkey and Blackberry bug
        util.stringRepeat = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var repeatFN = baseString.constructor.repeat,
                nfeRepeat;

            function rep(s, times) {
                var half,
                    val;

                if (util.lt(times, 1)) {
                    val = '';
                } else if (util.mod(times, 2)) {
                    val = rep(s, times - 1) + s;
                } else {
                    half = rep(s, times / 2);
                    val = half + half;
                }

                return val;
            }

            if (util.isFunction(repeatFN)) {
                tempSafariNFE = function nfeRepeat(string, times) {
                    return repeatFN.call(string, times);
                };
            } else {
                tempSafariNFE = function nfeRepeat(string, count) {
                    var thisString = util.anyToString(util.checkObjectCoercible(string)),
                        times = util.numberToInteger(count);

                    if (util.lt(times, 0) || util.strictEqual(times, Infinity)) {
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
        // named stringStartsWith instead of startsWith because of SpiderMonkey and Blackberry bug
        util.stringStartsWith = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var startsWithFN = baseString.constructor.startsWith,
                nfeStartsWith;

            if (util.isFunction(startsWithFN)) {
                tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                    return startsWithFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                    var thisStr = util.anyToString(util.checkObjectCoercible(string)),
                        searchStr = util.anyToString(searchString),
                        start = util.clamp(util.numberToInteger(position), 0, thisStr.length);

                    return util.strictEqual(thisStr.slice(start, start + searchStr.length), searchStr);
                };
            }

            nfeStartsWith = null;

            return tempSafariNFE;
        }());

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
        // named stringEndsWith instead of endsWith because of SpiderMonkey and Blackberry bug
        util.stringEndsWith = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var endsWithFN = baseString.constructor.endsWith,
                nfeEndsWith;

            if (util.isFunction(endsWithFN)) {
                tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                    return endsWithFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                    var thisStr = util.anyToString(util.checkObjectCoercible(string)),
                        searchStr = util.anyToString(searchString),
                        thisLen = thisStr.length,
                        end,
                        start;

                    if (util.isUndefined(position)) {
                        position = thisLen;
                    } else {
                        position = util.numberToInteger(position);
                    }

                    end = util.clamp(position, 0, thisLen);
                    start = end - searchStr.length;

                    return util.gte(start, 0) && util.strictEqual(thisStr.slice(start, end), searchStr);
                };
            }

            nfeEndsWith = null;

            return tempSafariNFE;
        }());

        /**
         * Determines whether a string contains the characters of another string, returning true or false as appropriate.
         * @private
         * @function
         * @param {string} string
         * @param {string} searchString
         * @param {number} [position]
         * @return {boolean}
         */
        // named util.stringContains instead of contains because of SpiderMonkey and Blackberry bug
        util.stringContains = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var containsFN = baseString.constructor.contains,
                nfeContains;

            if (util.isFunction(containsFN)) {
                tempSafariNFE = function nfeContains(string, searchString, position) {
                    return containsFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeContains(string, searchString, position) {
                    var thisStr = util.anyToString(util.checkObjectCoercible(string)),
                        searchStr = util.anyToString(searchString),
                        thisLen = thisStr.length;

                    if (util.isUndefined(position)) {
                        position = 0;
                    } else {
                        position = util.numberToInteger(position);
                    }

                    return util.notStrictEqual(baseString.indexOf.call(thisStr, searchStr, util.clamp(position, 0, thisLen)), -1);
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
        // named util.objectGetPrototypeOf instead of getPrototypeOf because of SpiderMonkey and Blackberry bug
        util.objectGetPrototypeOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
                nfeGetPrototypeOf,
                bocProto;

            if (util.isFunction(getPrototypeOfFN)) {
                tempSafariNFE = getPrototypeOfFN;
            } else if (util.isNull(baseObject.constructor.prototype[protoName])) {
                tempSafariNFE = function nfeGetPrototypeOf(object) {
                    return object[protoName];
                };
            } else {
                bocProto = baseObject.constructor.prototype;
                tempSafariNFE = function nfeGetPrototypeOf(object) {
                    if (util.strictEqual(object, bocProto)) {
                        return null;
                    }

                    var ctrProto = object.constructor.prototype;

                    if (util.strictEqual(object, ctrProto)) {
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
        util.arrayContains = function (array, searchElement) {
            return util.notStrictEqual(util.arrayIndexOf(array, searchElement), -1);
        };

        /**
         * Returns a boolean indicating whether the object has the specified property.
         * This function can be used to determine whether an object has the specified property as a direct property of that object;
         * unlike the util.hasProperty function, this method does not check down the object's prototype chain.
         * @private
         * @function
         * @param {object} object
         * @param {string} property
         * @return {boolean}
         */
        // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
        // Create our own local "hasOwnProperty" function: native -> shim -> sham
        // named util.objectHasOwnProperty instead of hasOwnProperty because of SpiderMonkey and Blackberry bug
        util.objectHasOwnProperty = (function () {
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
                if (util.strictEqual(nfeHasOwnProperty, 'toString') && util.isNull(testObject[nfeHasOwnProperty])) {
                    hasDontEnumBug = false;
                }
            }

            function checkDontEnums(object, property) {
                return hasDontEnumBug && util.arrayContains(defaultProperties, property) && util.hasProperty(object, property) && util.notStrictEqual(object[property], util.objectGetPrototypeOf(object)[property]);
            }

            if (util.isFunction(hasOwnPropertyFN)) {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return hasOwnPropertyFN.call(object, property) || checkDontEnums(object, property);
                };
            } else if (util.isFunction(propertyIsEnumerableFN)) {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return propertyIsEnumerableFN.call(object, property) || checkDontEnums(object, property);
                };
            } else {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return util.hasProperty(object, property) && util.isUndefined(util.objectGetPrototypeOf(object)[property]);
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
        util.toObjectFixIndexedAccess = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var boxedString = baseObject.constructor('a'),
                splitString = util.notStrictEqual(boxedString[0], 'a') || !util.hasProperty(boxedString, 0),
                nfeToObjectFixIndexedAccess;

            tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
                var object;

                if (splitString && util.isString(inputArg)) {
                    object = util.stringSplit(inputArg, '');
                } else {
                    object = util.argToObject(inputArg);
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
        // named util.arrayForEach instead of forEach because of SpiderMonkey and Blackberry bug
        util.arrayForEach = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var forEachFN = baseArray.forEach,
                nfeForEach;

            if (util.isFunction(forEachFN)) {
                tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                    return forEachFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length,
                        index;

                    if (!util.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = util.toUint32(object.length); util.lt(index, length); index += 1) {
                        if (util.hasProperty(object, index)) {
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
        // named util.arraySome instead of some because of SpiderMonkey and Blackberry bug
        util.arraySome = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var someFN = baseArray.some,
                nfeSome;

            if (util.isFunction(someFN)) {
                tempSafariNFE = function nfeSome(array, fn, thisArg) {
                    return someFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeSome(array, fn, thisArg) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length,
                        index,
                        val;

                    if (!util.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = util.toUint32(object.length), val = false; util.lt(index, length); index += 1) {
                        if (util.hasProperty(object, index) && fn.call(thisArg, object[index], index, object)) {
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
        // named util.arrayMap instead of map because of SpiderMonkey and Blackberry bug
        util.arrayMap = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var mapFN = baseArray.map,
                nfeMap;

            if (util.isFunction(mapFN)) {
                tempSafariNFE = function nfeMap(array, fn, thisArg) {
                    return mapFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeMap(array, fn, thisArg) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length,
                        index,
                        arr;

                    if (!util.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = util.toUint32(object.length), arr = []; util.lt(index, length); index += 1) {
                        arr[index] = fn.call(thisArg, object[index], index, object);
                    }

                    return arr;
                };
            }

            nfeMap = null;

            return tempSafariNFE;
        }());

        util.argumentsSlice = function (args, start, end) {
            var val;

            if (util.isArguments(args)) {
                val = baseArray.slice.call(args, start, end);
            }

            return val;
        };

        // named util.arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
        util.arrayUnshift = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var unshiftFN = baseArray.unshift,
                nfeUnshift;

            if (util.strictEqual(unshiftFN.call([], 0), 1)) {
                tempSafariNFE = function nfeUnshift(array) {
                    return unshiftFN.apply(array, util.argumentsSlice(arguments, 1, arguments.length));
                };
            } else {
                tempSafariNFE = function nfeUnshift(array) {
                    unshiftFN.apply(array, util.argumentsSlice(arguments, 1, arguments.length));

                    return array.length;
                };
            }

            nfeUnshift = null;

            return tempSafariNFE;
        }());

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
        // named util.arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
        util.arrayFilter = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var filterFN = baseArray.filter,
                nfeFilter;

            if (util.isFunction(filterFN)) {
                tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                    return filterFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length,
                        arr,
                        index,
                        element;

                    if (!util.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = util.toUint32(object.length), arr = []; util.lt(index, length); index += 1) {
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

        /**
         * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
         * @private
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {*} [initialValue]
         * @return {*}
         */
        // named util.arrayReduce instead of reduce because of SpiderMonkey and Blackberry bug
        util.arrayReduce = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var reduceFN = baseArray.reduce,
                errString = 'Reduce of empty array with no initial value',
                nfeReduce;

            if (util.isFunction(reduceFN)) {
                tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                    return reduceFN.call(array, fn, initialValue);
                };
            } else {
                tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length,
                        k,
                        index,
                        accumulator,
                        kPresent;

                    if (!util.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    if (util.isZero(length) && util.lt(arguments.length, 3)) {
                        throw new TypeError(errString);
                    }

                    k = 0;
                    if (util.gt(arguments.length, 2)) {
                        accumulator = initialValue;
                    } else {
                        for (k = 0, length = util.toUint32(object.length), kPresent = false; util.isFalse(kPresent) && util.lt(k, length); k += 1) {
                            kPresent = util.hasProperty(object, k);
                            if (util.isTrue(kPresent)) {
                                accumulator = object[k];
                            }
                        }

                        if (util.isFalse(kPresent)) {
                            throw new TypeError(errString);
                        }
                    }

                    for (index = k; util.lt(index, length); index += 1) {
                        if (util.hasProperty(object, index)) {
                            accumulator = fn.call(util.privateUndefined, accumulator, object[index], index, object);
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
        // named util.stringTrim instead of trim because of SpiderMonkey and Blackberry bug
        util.stringTrim = (function () {
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

            testString = util.arrayReduce(whiteSpacesList, tempSafariNFE, '');
            if (util.isFunction(trimFN) && util.isZero(trimFN.call(testString).length)) {
                tempSafariNFE = function nfeTrim(inputArg) {
                    return trimFN.call(inputArg);
                };
            } else {
                tempSafariNFE = function nfeBuildWhiteSpaceString(previous, element) {
                    return previous + '\\u' + util.padLeadingChar(element.toString(16), '0', 4);
                };

                whiteSpacesString = util.arrayReduce(whiteSpacesList, tempSafariNFE, '');
                wsTrimRX = new RegExp('^[' + whiteSpacesString + ']+|[' + whiteSpacesString + ']+$', 'g');
                tempSafariNFE = function nfeTrim(inputArg) {
                    return util.anyToString(util.checkObjectCoercible(inputArg)).replace(wsTrimRX, '');
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
        // named util.arrayIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
        util.arrayIndexOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var indexOfFN = baseArray.indexOf,
                nfeIndexOf;

            if (util.isFunction(indexOfFN) && util.strictEqual(indexOfFN.call([0, 1], 1, 2), 1)) {
                tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                    return indexOfFN.call(array, searchElement, fromIndex);
                };
            } else {
                tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                    var object = util.toObjectFixIndexedAccess(array),
                        length = util.toUint32(object.length),
                        index,
                        start,
                        val;

                    if (util.isZero(length)) {
                        val = -1;
                    } else {
                        if (util.gt(arguments.length, 2)) {
                            fromIndex = util.numberToInteger(fromIndex);
                        } else {
                            fromIndex = 0;
                        }

                        if (util.gte(fromIndex, length)) {
                            val = -1;
                        } else {
                            if (util.gte(fromIndex, 0)) {
                                start = fromIndex;
                            } else {
                                start = length - Math.abs(fromIndex);
                            }

                            if (util.lt(start, 0)) {
                                start = 0;
                            }

                            for (index = start, val = -1; util.lt(index, length); index += 1) {
                                if (util.hasProperty(object, index) && util.strictEqual(searchElement, object[index])) {
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
        // named util.objectKeys instead of keys because of SpiderMonkey and Blackberry bug
        util.objectKeys = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var keysFN = baseObject.keys,
                nfeKeys;

            if (util.isFunction(keysFN)) {
                tempSafariNFE = keysFN;
            } else {
                tempSafariNFE = function nfeKeys(object) {
                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
                        throw new TypeError('Object.keys called on a non-object');
                    }

                    var props = [],
                        prop;

                    for (prop in object) {
                        if (util.objectHasOwnProperty(object, prop)) {
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
        // named util.objectDefineProperty instead of defineProperty because of SpiderMonkey and Blackberry bug
        util.objectDefineProperty = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var definePropertyFN = baseObject.constructor.defineProperty,
                defineGetter = '__defineGetter__',
                defineSetter = '__defineSetter__',
                defineGetterFN,
                defineSetterFN,
                testObject,
                nfeDefineProperty;

            if (util.isFunction(definePropertyFN)) {
                try {
                    testObject = definePropertyFN({}, 'sentinel', {
                        value: null
                    });

                    if (!util.isNull(testObject.sentinel)) {
                        definePropertyFN = null;
                    }
                } catch (exception) {
                    definePropertyFN = null;
                }
            }

            if (util.isFunction(definePropertyFN)) {
                tempSafariNFE = definePropertyFN;
            } else {
                defineGetterFN = baseObject[defineGetter];
                defineSetterFN = baseObject[defineSetter];
                tempSafariNFE = function nfeDefineProperty(object, property, descriptor) {
                    var prototype;

                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
                        throw new TypeError('Object.defineProperty called on non-object');
                    }

                    if (!util.isTypeObject(descriptor) && !util.isFunction(descriptor)) {
                        throw new TypeError('Property description must be an object');
                    }

                    if (util.objectHasOwnProperty(descriptor, 'value')) {
                        if (util.isNull(util.objectGetPrototypeOf(baseObject)[protoName])) {
                            prototype = object[protoName];
                            object[protoName] = util.objectGetPrototypeOf(baseObject);
                            delete object[property];
                            object[property] = descriptor.value;
                            object[protoName] = prototype;
                        } else {
                            object[property] = descriptor.value;
                        }
                    } else {
                        if (!util.isFunction(defineGetterFN) || !util.isFunction(defineSetterFN)) {
                            throw new TypeError('getters & setters can not be defined on this javascript engine');
                        }

                        if (util.isFunction(descriptor.get)) {
                            defineGetterFN.call(object, property, descriptor.get);
                        }

                        if (util.isFunction(descriptor.set)) {
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
        // named util.objectDefineProperties instead of defineProperties because of SpiderMonkey and Blackberry bug
        util.objectDefineProperties = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var definePropertiesFN = baseObject.constructor.defineProperties,
                nfeDefineProperties;

            if (util.isFunction(definePropertiesFN)) {
                tempSafariNFE = definePropertiesFN;
            } else {
                tempSafariNFE = function nfeDefineProperties(object, props) {
                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
                        throw new TypeError('Object.defineProperties called on non-object');
                    }

                    if (!util.isTypeObject(props) && !util.isFunction(props)) {
                        throw new TypeError('Property description must be an object');
                    }

                    util.arrayForEach(util.objectKeys(props), function (key) {
                        util.objectDefineProperty(object, key, props[key]);
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
        // named util.objectGetOwnPropertyDescriptor instead of getOwnPropertyDescriptor because of SpiderMonkey and Blackberry bug
        util.objectGetOwnPropertyDescriptor = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor,
                lookupGetter = '__lookupGetter__',
                lookupSetter = '__lookupSetter__',
                lookupGetterFN,
                lookupSetterFN,
                testObject,
                nfeGetOwnPropertyDescriptor;

            if (util.isFunction(getOwnPropertyDescriptorFN)) {
                try {
                    testObject = {
                        sentinel: null
                    };

                    if (!util.isNull(getOwnPropertyDescriptorFN(testObject, 'sentinel').value)) {
                        getOwnPropertyDescriptorFN = null;
                    }
                } catch (exception) {
                    getOwnPropertyDescriptorFN = null;
                }
            }

            if (util.isFunction(getOwnPropertyDescriptorFN)) {
                tempSafariNFE = getOwnPropertyDescriptorFN;
            } else {
                lookupGetterFN = baseObject[lookupGetter];
                lookupSetterFN = baseObject[lookupSetter];
                tempSafariNFE = function nfeGetOwnPropertyDescriptor(object, property) {
                    var descriptor,
                        prototype,
                        getter,
                        setter;

                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
                        throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object');
                    }

                    if (util.objectHasOwnProperty(object, property)) {
                        descriptor = {
                            enumerable: true,
                            configurable: true
                        };

                        if (util.isFunction(lookupGetterFN) && util.isFunction(lookupSetterFN)) {
                            prototype = object[protoName];
                            object[protoName] = util.objectGetPrototypeOf(baseObject);
                            getter = lookupGetterFN.call(object, property);
                            setter = lookupSetterFN.call(object, property);
                            object[protoName] = prototype;
                            if (util.isFunction(getter) || util.isFunction(setter)) {
                                if (util.isFunction(getter)) {
                                    descriptor.get = getter;
                                }

                                if (util.isFunction(setter)) {
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
        // named util.objectFreeze instead of freeze because of SpiderMonkey and Blackberry bug
        util.objectFreeze = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var freezeFN = baseObject.constructor.freeze,
                nfeFreeze;

            if (util.isFunction(freezeFN)) {
                tempSafariNFE = freezeFN;
            } else {
                tempSafariNFE = function nfeFreeze(object) {
                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
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
            util.objectFreeze(util.noop);
        } catch (exception) {
            util.objectFreeze = (function (freezeObject) {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var nfeFreezeR;

                tempSafariNFE = function nfeFreezeR(object) {
                    var val;

                    if (util.isFunction(object)) {
                        val = object;
                    } else {
                        val = freezeObject(object);
                    }

                    return val;
                };

                nfeFreezeR = null;

                return tempSafariNFE;
            }(util.objectFreeze));
        }

        /**
         * Determine if an object is frozen.
         * @private
         * @function
         * @param {object} object
         * @return {boolean}
         */
        // Create our own local "isFrozen" function: native -> sham
        // named util.objectIsFrozen instead of isFrozen because of SpiderMonkey and Blackberry bug
        util.objectIsFrozen = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var isFrozenFN = baseObject.constructor.isFrozen,
                nfeIsFrozen;

            if (util.isFunction(isFrozenFN)) {
                tempSafariNFE = isFrozenFN;
            } else {
                tempSafariNFE = function nfeIsFrozen(object) {
                    if (!util.isTypeObject(object) && !util.isFunction(object)) {
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
        util.deepFreeze = function (object) {
            util.objectFreeze(object);
            util.arrayForEach(util.objectKeys(object), function (propKey) {
                var prop = object[propKey];

                if ((util.isTypeObject(prop) || util.isFunction(prop)) && !util.objectIsFrozen(prop)) {
                    util.deepFreeze(prop);
                }
            });

            return object;
        };

        /**
         * The function tests whether an object has in its prototype chain the prototype property of a constructor.
         * @private
         * @function
         * @param {object} object
         * @param {function} ctr
         * @return {boolean}
         */
        // named util.objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
        util.objectInstanceOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                nfeInstanceOf;

            if (util.isFunction(isPrototypeOfFN)) {
                tempSafariNFE = function nfeInstanceOf(object, ctr) {
                    if (!util.isFunction(ctr)) {
                        throw new TypeError('Expecting a function in instanceOf check');
                    }

                    return isPrototypeOfFN.call(ctr.prototype, object);
                };
            } else if (util.isFunction(util.objectGetPrototypeOf)) {
                tempSafariNFE = function nfeInstanceOf(object, ctr) {
                    if (!util.isFunction(ctr)) {
                        throw new TypeError('Expecting a function in instanceOf check');
                    }

                    var val = false;

                    while (object) {
                        if (util.strictEqual(object, ctr.prototype)) {
                            val = true;
                            break;
                        }

                        object = util.objectGetPrototypeOf(object);
                    }

                    return val;
                };
            }

            nfeInstanceOf = null;

            return tempSafariNFE;
        }());

        /**
         * The util.objectCreate method creates a new object with the specified prototype object and properties.
         * @private
         * @function
         * @param {object} prototype
         * @return {object}
         */
        // named util.objectCreate instead of create because of SpiderMonkey and Blackberry bug
        util.objectCreate = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var objectCreateFN = baseObject.constructor.create,
                nfeObjectCreate,
                Func;

            if (util.isFunction(objectCreateFN)) {
                tempSafariNFE = objectCreateFN;
            } else if (util.isFunction(util.objectGetPrototypeOf)) {
                Func = function () {
                    return;
                };

                tempSafariNFE = function nfeObjectCreate(prototype) {
                    if (util.notStrictEqual(arguments.length, 1)) {
                        throw new Error('Object.create implementation only accepts one parameter.');
                    }

                    Func.prototype = prototype;

                    return new Func();
                };
            }

            nfeObjectCreate = null;

            return tempSafariNFE;
        }());

        /**
         * Check to see if an object is a plain object (created using "{}" or "new Object").
         * @private
         * @function
         * @param {object} object
         * @return {boolean}
         */
        util.isPlainObject = (function () {
            var baseObjectPrototype = util.objectGetPrototypeOf(baseObject);

            return function (object) {
                return util.isObject(object) && util.strictEqual(util.objectGetPrototypeOf(object), baseObjectPrototype);
            };
        }());

        /**
         * Merge the contents of source object together into the target object.
         * @private
         * @function
         * @param {object} target
         * @param {object} source
         * @return {object}
         */
        util.extend = function (target, source) {
            if (!util.isTypeObject(target) && !util.isFunction(target)) {
                throw new TypeError('util.extend called on a non-object');
            }

            util.arrayForEach(util.objectKeys(source), function (key) {
                util.objectDefineProperty(target, key, util.objectGetOwnPropertyDescriptor(source, key));
            });

            return target;
        };

        /**
         * Returns true if the operand inputArg is a Date object and is valid.
         * @private
         * @function
         * @param {*} dateObject
         * @return {boolean}
         */
        util.isDateValid = function (dateObject) {
            return util.isDate(dateObject) && !util.numberIsNaN(dateObject.getTime());
        };

        /**
         * Returns true if the operand inputArg is a String and only contains numerical digits.
         * @private
         * @function
         * @param {*} string
         * @return {boolean}
         */
        util.isDigits = function (string) {
            return util.isString(string) && (/^\d+$/).test(string);
        };

        /**
         * Takes string and puts a backslash in front of every character that is part of the regular expression syntax.
         * This is useful if you have a run-time string that you need to match in some text and the string may contain special regex characters.
         * @private
         * @function
         * @param {string} string
         * @return {string}
         */
        util.escapeRegex = function (string) {
            return string.replace(/[\[\](){}?*+\^$\\.|]/g, '\\$&');
        };

        /**
         * Wraps a string within the string character.
         * @private
         * @function
         * @param {string} string
         * @param {string} character
         * @return {string}
         */
        util.wrapInChar = function (string, character) {
            return character + string + character;
        };

        /**
         * Replace all occurences of a string pattern within a string with the string characters.
         * @private
         * @function
         * @param {string} string
         * @param {string} pattern
         * @param {string} characters
         * @return {string}
         */
        util.replaceAll = function (string, pattern, characters) {
            return string.replace(new RegExp(util.escapeRegex(pattern), 'g'), characters);
        };

        util.deepEqual = function (actual, expected) {
            if (util.objectIs(actual, expected)) {
                return true;
            }

            if (util.isDate(actual) && util.isDate(expected)) {
                return util.objectIs(actual.getTime(), expected.getTime());
            }

            if (util.isRegExp(actual) && util.isRegExp(expected)) {
                return util.objectIs(actual.source, expected.source) &&
                       util.objectIs(actual.global, expected.global) &&
                       util.objectIs(actual.multiline, expected.multiline) &&
                       util.objectIs(actual.lastIndex, expected.lastIndex) &&
                       util.objectIs(actual.ignoreCase, expected.ignoreCase) &&
                       util.objectIs(actual.sticky, expected.sticky);
            }

            if (!util.isTypeObject(actual) && !util.isTypeObject(expected)) {
                return util.objectIs(actual, expected);
            }

            if (!util.objectIs(util.objectGetPrototypeOf(actual), util.objectGetPrototypeOf(expected))) {
                return false;
            }

            if (util.isArguments(actual)) {
                if (!util.isArguments(expected)) {
                    return false;
                }

                actual = util.argumentsSlice(actual);
                expected = util.argumentsSlice(expected);

                return util.deepEqual(actual, expected);
            }

            var ka,
                kb,
                status;

            try {
                ka = util.objectKeys(actual);
                kb = util.objectKeys(expected);
            } catch (e) {
                return false;
            }

            if (util.notStrictEqual(ka.length, kb.length)) {
                return false;
            }

            ka.sort();
            kb.sort();
            status = util.arraySome(ka, function (aKey, index) {
                return !util.objectIs(aKey, kb[index]);
            });

            if (util.isTrue(status)) {
                return false;
            }

            status = util.arraySome(ka, function (aKey) {
                return !util.deepEqual(actual[aKey], expected[aKey]);
            });

            if (util.isTrue(status)) {
                return false;
            }

            return true;
        };

        util.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        util.jsonParse = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var nfeJSONParse;

            if (typeof JSON === 'object' && !util.isNull(JSON) && util.isFunction(JSON.parse)) {
                tempSafariNFE = JSON.parse;
            } else {
                tempSafariNFE = function nfeJSONParse(jsonString) {
                    var object;

                    /*jslint evil: true */
                    object = new Function('return' + jsonString)();
                    /*jslint evil: false */

                    return object;
                };
            }

            nfeJSONParse = null;

            return tempSafariNFE;
        }());

        tempSafariNFE = null;

        return util;
    }

    /*
     *
     * UMD
     *
     */

    var publicUtil = factory();

    publicUtil.factory = function () {
        var pu = factory();

        pu.factory = publicUtil.factory;

        return pu;
    };

    if (typeof globalThis !== 'object' && null === globalThis) {
        throw new TypeError('Invalid global context');
    }

    /*global module, define */
    if (typeof module === 'object' && null !== module && typeof module.exports === 'object' && null !== module.exports) {
        module.exports = publicUtil;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && null !== define.amd) {
        define(publicUtil);
    } else {
        globalThis.util = publicUtil;
    }
}(this));
