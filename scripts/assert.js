/**
 * @file An assertion library for server and client side JavaScript.
 * @version 0.0.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @module assert
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

/*global module, define, require */

(function (globalThis) {
    'use strict';

    function factory(util) {
        function AssertionError(opts) {
            var err,
                stk;

            if (!util.isPlainObject(opts)) {
                opts = {};
            }

            if (!util.isString(opts.message)) {
                opts.message = util.privateUndefined;
            }

            if (!util.isString(opts.operator)) {
                opts.operator = '<-->';
            }

            if (!util.isFunction(opts.stackStartFunction)) {
                opts.stackStartFunction = AssertionError;
            }

            util.objectDefineProperties(this, {
                message: {
                    value: opts.message,
                    writable: true
                },

                actual: {
                    value: opts.actual,
                    writable: true
                },

                expected: {
                    value: opts.expected,
                    writable: true
                },

                operator: {
                    value: opts.operator,
                    writable: true
                },

                stackStartFunction: {
                    value: opts.stackStartFunction,
                    writable: true
                }
            });

            if (util.isFunction(Error.captureStackTrace)) {
                Error.captureStackTrace(this, this.stackStartFunction);
            } else {
                err = Error.call(this, this.message);
                err.name = this.name;
                this.message = err.message;
                if (util.isString(err.stack)) {
                    stk = err.stack;
                } else if (util.isString(err.stacktrace)) {
                    stk = err.stacktrace;
                } else {
                    stk = '(unavailable)';
                }

                util.objectDefineProperty(this, 'stack', {
                    value: stk,
                    writable: true
                });
            }
        }

        util.objectDefineProperty(AssertionError, 'prototype', {
            value: util.objectCreate(Error.prototype)
        });

        util.objectDefineProperties(AssertionError.prototype, {
            constructor: {
                value: AssertionError
            },

            name: {
                value: 'AssertionError'
            },

            toString: {
                value: function () {
                    var theString = this.name + ': ';

                    if (util.isString(this.message)) {
                        theString += this.message;
                    } else {
                        theString += '"' + this.actual + '" ' + this.operator + ' "' + this.expected + '"';
                    }

                    return theString;
                }
            }
        });

        function assert(message, actual, expected, operator, stackStartFunction) {
            if (!util.isFunction(stackStartFunction)) {
                stackStartFunction = assert;
            }

            throw new AssertionError({
                message: message,
                actual: actual,
                expected: expected,
                operator: operator,
                stackStartFunction: stackStartFunction
            });
        }

        util.objectDefineProperties(assert, {
            AssertionError: {
                value: AssertionError
            },

            ok: {
                value: function (value, message) {
                    var pass = Boolean(value);

                    if (util.notStrictEqual(pass, true)) {
                        assert(message, pass, true, 'ok', assert.ok);
                    }
                }
            },

            equal: {
                value: function (actual, expected, message) {
                    if (util.notEqual(actual, expected)) {
                        assert(message, actual, expected, '==', assert.equal);
                    }
                }
            },

            notEqual: {
                value: function (actual, expected, message) {
                    if (util.equal(actual, expected)) {
                        assert(message, actual, expected, '!=', assert.notEqual);
                    }
                }
            },

            deepEqual: {
                value: function (actual, expected, message) {
                    if (!util.deepEqual(actual, expected, true)) {
                        assert(message, actual, expected, 'deepEqual', assert.deepEqual);
                    }
                }
            },

            notDeepEqual: {
                value: function (actual, expected, message) {
                    if (util.deepEqual(actual, expected, true)) {
                        assert(message, actual, expected, '!deepEqual', assert.notDeepEqual);
                    }
                }
            },

            strictEqual: {
                value: function (actual, expected, message) {
                    if (util.notStrictEqual(actual, expected)) {
                        assert(message, actual, expected, '===', assert.strictEqual);
                    }
                }
            },

            notStrictEqual: {
                value: function (actual, expected, message) {
                    if (util.strictEqual(actual, expected)) {
                        assert(message, actual, expected, '!==', assert.notStrictEqual);
                    }
                }
            },

            throws: {
                value: function (func, Constructor, message) {
                    var funcString = 'function',
                        pass,
                        exc;

                    if (!util.isFunction(func)) {
                        assert('"func" not a function!', funcString, typeof func, 'throws', assert.throws);
                    }

                    if (util.isString(Constructor)) {
                        message = Constructor;
                        Constructor = Error;
                    } else if (!util.isFunction(Constructor)) {
                        assert('"Constructor" not a function!', funcString, typeof Constructor, 'throws', assert.throws);
                    }

                    if (!util.isString(message)) {
                        message = util.privateUndefined;
                    }

                    try {
                        func();
                        pass = false;
                    } catch (e) {
                        exc = e;
                        pass = exc instanceof Constructor;
                    }

                    if (util.notStrictEqual(pass, true)) {
                        assert(message, Constructor, exc, 'throws', assert.throws);
                    }
                }
            }
        });

        return assert;
    }

    /*
     *
     * UMD
     *
     */

    var publicAssert;

    if (typeof globalThis !== 'object' && null === globalThis) {
        throw new TypeError('Invalid global context');
    }

    /*global module, define */
    if (typeof module === 'object' && null !== module && typeof module.exports === 'object' && null !== module.exports) {
        publicAssert = factory(require('./util'));
        publicAssert.factory = function (deep) {
            var pa;

            if (true === deep) {
                pa = factory(require('./util').factory());
            } else {
                pa = factory(require('./util'));
            }

            pa.factory = publicAssert.factory;

            return pa;
        };

        module.exports = publicAssert;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && null !== define.amd) {
        define(['./util'], function (util) {
            publicAssert = factory(util);
            publicAssert.factory = function (deep) {
                var pa;

                if (true === deep) {
                    pa = factory(util.factory());
                } else {
                    pa = factory(util);
                }

                pa.factory = publicAssert.factory;

                return pa;
            };

            return publicAssert;
        });
    } else {
        publicAssert = factory(globalThis.util);
        publicAssert.factory = function (deep) {
            var pa;

            if (true === deep) {
                pa = factory(globalThis.util.factory());
            } else {
                pa = factory(globalThis.util);
            }

            pa.factory = publicAssert.factory;

            return pa;
        };

        globalThis.assert = publicAssert;
    }
}(this));
