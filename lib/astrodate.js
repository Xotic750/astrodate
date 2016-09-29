(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*global require, module */
(function() {
  'use strict';

  module.exports = _dereq_('./src/astrodate.js');
}());

},{"./src/astrodate.js":33}],2:[function(_dereq_,module,exports){
/*! bignumber.js v2.4.0 https://github.com/MikeMcl/bignumber.js/LICENCE */

;(function (globalObj) {
    'use strict';

    /*
      bignumber.js v2.4.0
      A JavaScript library for arbitrary-precision arithmetic.
      https://github.com/MikeMcl/bignumber.js
      Copyright (c) 2016 Michael Mclaughlin <M8ch88l@gmail.com>
      MIT Expat Licence
    */


    var BigNumber, cryptoObj, parseNumeric,
        isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        mathceil = Math.ceil,
        mathfloor = Math.floor,
        notBool = ' not a boolean or binary digit',
        roundingMode = 'rounding mode',
        tooManyDigits = 'number type has more than 15 significant digits',
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
        BASE = 1e14,
        LOG_BASE = 14,
        MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
        // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
        POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        SQRT_BASE = 1e7,

        /*
         * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
         * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
         * exception is thrown (if ERRORS is true).
         */
        MAX = 1E9;                                   // 0 to MAX_INT32

    if ( typeof crypto != 'undefined' ) cryptoObj = crypto;


    /*
     * Create and return a BigNumber constructor.
     */
    function constructorFactory(configObj) {
        var div,

            // id tracks the caller function, so its name can be included in error messages.
            id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),


            /********************************* EDITABLE DEFAULTS **********************************/


            /*
             * The default values below must be integers within the inclusive ranges stated.
             * The values can also be changed at run-time using BigNumber.config.
             */

            // The maximum number of decimal places for operations involving division.
            DECIMAL_PLACES = 20,                     // 0 to MAX

            /*
             * The rounding mode used when rounding to the above decimal places, and when using
             * toExponential, toFixed, toFormat and toPrecision, and round (default value).
             * UP         0 Away from zero.
             * DOWN       1 Towards zero.
             * CEIL       2 Towards +Infinity.
             * FLOOR      3 Towards -Infinity.
             * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
             * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
             * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
             * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
             * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
             */
            ROUNDING_MODE = 4,                       // 0 to 8

            // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

            // The exponent value at and beneath which toString returns exponential notation.
            // Number type: -7
            TO_EXP_NEG = -7,                         // 0 to -MAX

            // The exponent value at and above which toString returns exponential notation.
            // Number type: 21
            TO_EXP_POS = 21,                         // 0 to MAX

            // RANGE : [MIN_EXP, MAX_EXP]

            // The minimum exponent value, beneath which underflow to zero occurs.
            // Number type: -324  (5e-324)
            MIN_EXP = -1e7,                          // -1 to -MAX

            // The maximum exponent value, above which overflow to Infinity occurs.
            // Number type:  308  (1.7976931348623157e+308)
            // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
            MAX_EXP = 1e7,                           // 1 to MAX

            // Whether BigNumber Errors are ever thrown.
            ERRORS = true,                           // true or false

            // Change to intValidatorNoErrors if ERRORS is false.
            isValidInt = intValidatorWithErrors,     // intValidatorWithErrors/intValidatorNoErrors

            // Whether to use cryptographically-secure random number generation, if available.
            CRYPTO = false,                          // true or false

            /*
             * The modulo mode used when calculating the modulus: a mod n.
             * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
             * The remainder (r) is calculated as: r = a - n * q.
             *
             * UP        0 The remainder is positive if the dividend is negative, else is negative.
             * DOWN      1 The remainder has the same sign as the dividend.
             *             This modulo mode is commonly known as 'truncated division' and is
             *             equivalent to (a % n) in JavaScript.
             * FLOOR     3 The remainder has the same sign as the divisor (Python %).
             * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
             * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
             *             The remainder is always positive.
             *
             * The truncated division, floored division, Euclidian division and IEEE 754 remainder
             * modes are commonly used for the modulus operation.
             * Although the other rounding modes can also be used, they may not give useful results.
             */
            MODULO_MODE = 1,                         // 0 to 9

            // The maximum number of significant digits of the result of the toPower operation.
            // If POW_PRECISION is 0, there will be unlimited significant digits.
            POW_PRECISION = 100,                     // 0 to MAX

            // The format specification used by the BigNumber.prototype.toFormat method.
            FORMAT = {
                decimalSeparator: '.',
                groupSeparator: ',',
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: '\xA0',      // non-breaking space
                fractionGroupSize: 0
            };


        /******************************************************************************************/


        // CONSTRUCTOR


        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */
        function BigNumber( n, b ) {
            var c, e, i, num, len, str,
                x = this;

            // Enable constructor usage without new.
            if ( !( x instanceof BigNumber ) ) {

                // 'BigNumber() constructor call without new: {n}'
                if (ERRORS) raise( 26, 'constructor call without new', n );
                return new BigNumber( n, b );
            }

            // 'new BigNumber() base not an integer: {b}'
            // 'new BigNumber() base out of range: {b}'
            if ( b == null || !isValidInt( b, 2, 64, id, 'base' ) ) {

                // Duplicate.
                if ( n instanceof BigNumber ) {
                    x.s = n.s;
                    x.e = n.e;
                    x.c = ( n = n.c ) ? n.slice() : n;
                    id = 0;
                    return;
                }

                if ( ( num = typeof n == 'number' ) && n * 0 == 0 ) {
                    x.s = 1 / n < 0 ? ( n = -n, -1 ) : 1;

                    // Fast path for integers.
                    if ( n === ~~n ) {
                        for ( e = 0, i = n; i >= 10; i /= 10, e++ );
                        x.e = e;
                        x.c = [n];
                        id = 0;
                        return;
                    }

                    str = n + '';
                } else {
                    if ( !isNumeric.test( str = n + '' ) ) return parseNumeric( x, str, num );
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }
            } else {
                b = b | 0;
                str = n + '';

                // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
                // Allow exponential notation to be used with base 10 argument.
                if ( b == 10 ) {
                    x = new BigNumber( n instanceof BigNumber ? n : str );
                    return round( x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE );
                }

                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                // Any number in exponential form will fail due to the [Ee][+-].
                if ( ( num = typeof n == 'number' ) && n * 0 != 0 ||
                  !( new RegExp( '^-?' + ( c = '[' + ALPHABET.slice( 0, b ) + ']+' ) +
                    '(?:\\.' + c + ')?$',b < 37 ? 'i' : '' ) ).test(str) ) {
                    return parseNumeric( x, str, num, b );
                }

                if (num) {
                    x.s = 1 / n < 0 ? ( str = str.slice(1), -1 ) : 1;

                    if ( ERRORS && str.replace( /^0\.0*|\./, '' ).length > 15 ) {

                        // 'new BigNumber() number type has more than 15 significant digits: {n}'
                        raise( id, tooManyDigits, n );
                    }

                    // Prevent later check for length on converted number.
                    num = false;
                } else {
                    x.s = str.charCodeAt(0) === 45 ? ( str = str.slice(1), -1 ) : 1;
                }

                str = convertBase( str, 10, b, x.s );
            }

            // Decimal point?
            if ( ( e = str.indexOf('.') ) > -1 ) str = str.replace( '.', '' );

            // Exponential form?
            if ( ( i = str.search( /e/i ) ) > 0 ) {

                // Determine exponent.
                if ( e < 0 ) e = i;
                e += +str.slice( i + 1 );
                str = str.substring( 0, i );
            } else if ( e < 0 ) {

                // Integer.
                e = str.length;
            }

            // Determine leading zeros.
            for ( i = 0; str.charCodeAt(i) === 48; i++ );

            // Determine trailing zeros.
            for ( len = str.length; str.charCodeAt(--len) === 48; );
            str = str.slice( i, len + 1 );

            if (str) {
                len = str.length;

                // Disallow numbers with over 15 significant digits if number type.
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                if ( num && ERRORS && len > 15 && ( n > MAX_SAFE_INTEGER || n !== mathfloor(n) ) ) {
                    raise( id, tooManyDigits, x.s * n );
                }

                e = e - i - 1;

                 // Overflow?
                if ( e > MAX_EXP ) {

                    // Infinity.
                    x.c = x.e = null;

                // Underflow?
                } else if ( e < MIN_EXP ) {

                    // Zero.
                    x.c = [ x.e = 0 ];
                } else {
                    x.e = e;
                    x.c = [];

                    // Transform base

                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = ( e + 1 ) % LOG_BASE;
                    if ( e < 0 ) i += LOG_BASE;

                    if ( i < len ) {
                        if (i) x.c.push( +str.slice( 0, i ) );

                        for ( len -= LOG_BASE; i < len; ) {
                            x.c.push( +str.slice( i, i += LOG_BASE ) );
                        }

                        str = str.slice(i);
                        i = LOG_BASE - str.length;
                    } else {
                        i -= len;
                    }

                    for ( ; i--; str += '0' );
                    x.c.push( +str );
                }
            } else {

                // Zero.
                x.c = [ x.e = 0 ];
            }

            id = 0;
        }


        // CONSTRUCTOR PROPERTIES


        BigNumber.another = constructorFactory;

        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;


        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */
        BigNumber.config = function () {
            var v, p,
                i = 0,
                r = {},
                a = arguments,
                o = a[0],
                has = o && typeof o == 'object'
                  ? function () { if ( o.hasOwnProperty(p) ) return ( v = o[p] ) != null; }
                  : function () { if ( a.length > i ) return ( v = a[i++] ) != null; };

            // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
            // 'config() DECIMAL_PLACES not an integer: {v}'
            // 'config() DECIMAL_PLACES out of range: {v}'
            if ( has( p = 'DECIMAL_PLACES' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                DECIMAL_PLACES = v | 0;
            }
            r[p] = DECIMAL_PLACES;

            // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
            // 'config() ROUNDING_MODE not an integer: {v}'
            // 'config() ROUNDING_MODE out of range: {v}'
            if ( has( p = 'ROUNDING_MODE' ) && isValidInt( v, 0, 8, 2, p ) ) {
                ROUNDING_MODE = v | 0;
            }
            r[p] = ROUNDING_MODE;

            // EXPONENTIAL_AT {number|number[]}
            // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
            // 'config() EXPONENTIAL_AT not an integer: {v}'
            // 'config() EXPONENTIAL_AT out of range: {v}'
            if ( has( p = 'EXPONENTIAL_AT' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, 0, 2, p ) && isValidInt( v[1], 0, MAX, 2, p ) ) {
                        TO_EXP_NEG = v[0] | 0;
                        TO_EXP_POS = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    TO_EXP_NEG = -( TO_EXP_POS = ( v < 0 ? -v : v ) | 0 );
                }
            }
            r[p] = [ TO_EXP_NEG, TO_EXP_POS ];

            // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
            // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
            // 'config() RANGE not an integer: {v}'
            // 'config() RANGE cannot be zero: {v}'
            // 'config() RANGE out of range: {v}'
            if ( has( p = 'RANGE' ) ) {

                if ( isArray(v) ) {
                    if ( isValidInt( v[0], -MAX, -1, 2, p ) && isValidInt( v[1], 1, MAX, 2, p ) ) {
                        MIN_EXP = v[0] | 0;
                        MAX_EXP = v[1] | 0;
                    }
                } else if ( isValidInt( v, -MAX, MAX, 2, p ) ) {
                    if ( v | 0 ) MIN_EXP = -( MAX_EXP = ( v < 0 ? -v : v ) | 0 );
                    else if (ERRORS) raise( 2, p + ' cannot be zero', v );
                }
            }
            r[p] = [ MIN_EXP, MAX_EXP ];

            // ERRORS {boolean|number} true, false, 1 or 0.
            // 'config() ERRORS not a boolean or binary digit: {v}'
            if ( has( p = 'ERRORS' ) ) {

                if ( v === !!v || v === 1 || v === 0 ) {
                    id = 0;
                    isValidInt = ( ERRORS = !!v ) ? intValidatorWithErrors : intValidatorNoErrors;
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = ERRORS;

            // CRYPTO {boolean|number} true, false, 1 or 0.
            // 'config() CRYPTO not a boolean or binary digit: {v}'
            // 'config() crypto unavailable: {crypto}'
            if ( has( p = 'CRYPTO' ) ) {

                if ( v === !!v || v === 1 || v === 0 ) {
                    CRYPTO = !!( v && cryptoObj );
                    if ( v && !CRYPTO && ERRORS ) raise( 2, 'crypto unavailable', cryptoObj );
                } else if (ERRORS) {
                    raise( 2, p + notBool, v );
                }
            }
            r[p] = CRYPTO;

            // MODULO_MODE {number} Integer, 0 to 9 inclusive.
            // 'config() MODULO_MODE not an integer: {v}'
            // 'config() MODULO_MODE out of range: {v}'
            if ( has( p = 'MODULO_MODE' ) && isValidInt( v, 0, 9, 2, p ) ) {
                MODULO_MODE = v | 0;
            }
            r[p] = MODULO_MODE;

            // POW_PRECISION {number} Integer, 0 to MAX inclusive.
            // 'config() POW_PRECISION not an integer: {v}'
            // 'config() POW_PRECISION out of range: {v}'
            if ( has( p = 'POW_PRECISION' ) && isValidInt( v, 0, MAX, 2, p ) ) {
                POW_PRECISION = v | 0;
            }
            r[p] = POW_PRECISION;

            // FORMAT {object}
            // 'config() FORMAT not an object: {v}'
            if ( has( p = 'FORMAT' ) ) {

                if ( typeof v == 'object' ) {
                    FORMAT = v;
                } else if (ERRORS) {
                    raise( 2, p + ' not an object', v );
                }
            }
            r[p] = FORMAT;

            return r;
        };


        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.max = function () { return maxOrMin( arguments, P.lt ); };


        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */
        BigNumber.min = function () { return maxOrMin( arguments, P.gt ); };


        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */
        BigNumber.random = (function () {
            var pow2_53 = 0x20000000000000;

            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
              ? function () { return mathfloor( Math.random() * pow2_53 ); }
              : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
                  (Math.random() * 0x800000 | 0); };

            return function (dp) {
                var a, b, e, k, v,
                    i = 0,
                    c = [],
                    rand = new BigNumber(ONE);

                dp = dp == null || !isValidInt( dp, 0, MAX, 14 ) ? DECIMAL_PLACES : dp | 0;
                k = mathceil( dp / LOG_BASE );

                if (CRYPTO) {

                    // Browsers supporting crypto.getRandomValues.
                    if ( cryptoObj && cryptoObj.getRandomValues ) {

                        a = cryptoObj.getRandomValues( new Uint32Array( k *= 2 ) );

                        for ( ; i < k; ) {

                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if ( v >= 9e15 ) {
                                b = cryptoObj.getRandomValues( new Uint32Array(2) );
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {

                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 2;
                            }
                        }
                        i = k / 2;

                    // Node.js supporting crypto.randomBytes.
                    } else if ( cryptoObj && cryptoObj.randomBytes ) {

                        // buffer
                        a = cryptoObj.randomBytes( k *= 7 );

                        for ( ; i < k; ) {

                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = ( ( a[i] & 31 ) * 0x1000000000000 ) + ( a[i + 1] * 0x10000000000 ) +
                                  ( a[i + 2] * 0x100000000 ) + ( a[i + 3] * 0x1000000 ) +
                                  ( a[i + 4] << 16 ) + ( a[i + 5] << 8 ) + a[i + 6];

                            if ( v >= 9e15 ) {
                                cryptoObj.randomBytes(7).copy( a, i );
                            } else {

                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push( v % 1e14 );
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else if (ERRORS) {
                        raise( 14, 'crypto unavailable', cryptoObj );
                    }
                }

                // Use Math.random: CRYPTO is false or crypto is unavailable and ERRORS is false.
                if (!i) {

                    for ( ; i < k; ) {
                        v = random53bitInt();
                        if ( v < 9e15 ) c[i++] = v % 1e14;
                    }
                }

                k = c[--i];
                dp %= LOG_BASE;

                // Convert trailing digits to zeros according to dp.
                if ( k && dp ) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor( k / v ) * v;
                }

                // Remove trailing elements which are zero.
                for ( ; c[i] === 0; c.pop(), i-- );

                // Zero?
                if ( i < 0 ) {
                    c = [ e = 0 ];
                } else {

                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for ( e = -1 ; c[0] === 0; c.shift(), e -= LOG_BASE);

                    // Count the digits of the first element of c to determine leading zeros, and...
                    for ( i = 1, v = c[0]; v >= 10; v /= 10, i++);

                    // adjust the exponent accordingly.
                    if ( i < LOG_BASE ) e -= LOG_BASE - i;
                }

                rand.e = e;
                rand.c = c;
                return rand;
            };
        })();


        // PRIVATE FUNCTIONS


        // Convert a numeric string of baseIn to a numeric string of baseOut.
        function convertBase( str, baseOut, baseIn, sign ) {
            var d, e, k, r, x, xc, y,
                i = str.indexOf( '.' ),
                dp = DECIMAL_PLACES,
                rm = ROUNDING_MODE;

            if ( baseIn < 37 ) str = str.toLowerCase();

            // Non-integer.
            if ( i >= 0 ) {
                k = POW_PRECISION;

                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace( '.', '' );
                y = new BigNumber(baseIn);
                x = y.pow( str.length - i );
                POW_PRECISION = k;

                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut( toFixedPoint( coeffToString( x.c ), x.e ), 10, baseOut );
                y.e = y.c.length;
            }

            // Convert the number as integer.
            xc = toBaseOut( str, baseIn, baseOut );
            e = k = xc.length;

            // Remove trailing zeros.
            for ( ; xc[--k] == 0; xc.pop() );
            if ( !xc[0] ) return '0';

            if ( i < 0 ) {
                --e;
            } else {
                x.c = xc;
                x.e = e;

                // sign is needed for correct rounding.
                x.s = sign;
                x = div( x, y, dp, rm, baseOut );
                xc = x.c;
                r = x.r;
                e = x.e;
            }

            d = e + dp + 1;

            // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;

            r = rm < 4 ? ( i != null || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                       : i > k || i == k &&( rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
                         rm == ( x.s < 0 ? 8 : 7 ) );

            if ( d < 1 || !xc[0] ) {

                // 1^-dp or 0.
                str = r ? toFixedPoint( '1', -dp ) : '0';
            } else {
                xc.length = d;

                if (r) {

                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for ( --baseOut; ++xc[--d] > baseOut; ) {
                        xc[d] = 0;

                        if ( !d ) {
                            ++e;
                            xc.unshift(1);
                        }
                    }
                }

                // Determine trailing zeros.
                for ( k = xc.length; !xc[--k]; );

                // E.g. [4, 11, 15] becomes 4bf.
                for ( i = 0, str = ''; i <= k; str += ALPHABET.charAt( xc[i++] ) );
                str = toFixedPoint( str, e );
            }

            // The caller will add the sign.
            return str;
        }


        // Perform division in the specified base. Called by div and convertBase.
        div = (function () {

            // Assume non-zero x and k.
            function multiply( x, k, base ) {
                var m, temp, xlo, xhi,
                    carry = 0,
                    i = x.length,
                    klo = k % SQRT_BASE,
                    khi = k / SQRT_BASE | 0;

                for ( x = x.slice(); i--; ) {
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + ( ( m % SQRT_BASE ) * SQRT_BASE ) + carry;
                    carry = ( temp / base | 0 ) + ( m / SQRT_BASE | 0 ) + khi * xhi;
                    x[i] = temp % base;
                }

                if (carry) x.unshift(carry);

                return x;
            }

            function compare( a, b, aL, bL ) {
                var i, cmp;

                if ( aL != bL ) {
                    cmp = aL > bL ? 1 : -1;
                } else {

                    for ( i = cmp = 0; i < aL; i++ ) {

                        if ( a[i] != b[i] ) {
                            cmp = a[i] > b[i] ? 1 : -1;
                            break;
                        }
                    }
                }
                return cmp;
            }

            function subtract( a, b, aL, base ) {
                var i = 0;

                // Subtract b from a.
                for ( ; aL--; ) {
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }

                // Remove leading zeros.
                for ( ; !a[0] && a.length > 1; a.shift() );
            }

            // x: dividend, y: divisor.
            return function ( x, y, dp, rm, base ) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
                    yL, yz,
                    s = x.s == y.s ? 1 : -1,
                    xc = x.c,
                    yc = y.c;

                // Either NaN, Infinity or 0?
                if ( !xc || !xc[0] || !yc || !yc[0] ) {

                    return new BigNumber(

                      // Return NaN if either NaN, or both Infinity or 0.
                      !x.s || !y.s || ( xc ? yc && xc[0] == yc[0] : !yc ) ? NaN :

                        // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                        xc && xc[0] == 0 || !yc ? s * 0 : s / 0
                    );
                }

                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;

                if ( !base ) {
                    base = BASE;
                    e = bitFloor( x.e / LOG_BASE ) - bitFloor( y.e / LOG_BASE );
                    s = s / LOG_BASE | 0;
                }

                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for ( i = 0; yc[i] == ( xc[i] || 0 ); i++ );
                if ( yc[i] > ( xc[i] || 0 ) ) e--;

                if ( s < 0 ) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;

                    // Normalise xc and yc so highest order digit of yc is >= base / 2.

                    n = mathfloor( base / ( yc[0] + 1 ) );

                    // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
                    // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {
                    if ( n > 1 ) {
                        yc = multiply( yc, n, base );
                        xc = multiply( xc, n, base );
                        yL = yc.length;
                        xL = xc.length;
                    }

                    xi = yL;
                    rem = xc.slice( 0, yL );
                    remL = rem.length;

                    // Add zeros to make remainder as long as divisor.
                    for ( ; remL < yL; rem[remL++] = 0 );
                    yz = yc.slice();
                    yz.unshift(0);
                    yc0 = yc[0];
                    if ( yc[1] >= base / 2 ) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

                    do {
                        n = 0;

                        // Compare divisor and remainder.
                        cmp = compare( yc, rem, yL, remL );

                        // If divisor < remainder.
                        if ( cmp < 0 ) {

                            // Calculate trial digit, n.

                            rem0 = rem[0];
                            if ( yL != remL ) rem0 = rem0 * base + ( rem[1] || 0 );

                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor( rem0 / yc0 );

                            //  Algorithm:
                            //  1. product = divisor * trial digit (n)
                            //  2. if product > remainder: product -= divisor, n--
                            //  3. remainder -= product
                            //  4. if product was < remainder at 2:
                            //    5. compare new remainder and divisor
                            //    6. If remainder > divisor: remainder -= divisor, n++

                            if ( n > 1 ) {

                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;

                                // product = divisor * trial digit.
                                prod = multiply( yc, n, base );
                                prodL = prod.length;
                                remL = rem.length;

                                // Compare product and remainder.
                                // If product > remainder.
                                // Trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while ( compare( prod, rem, prodL, remL ) == 1 ) {
                                    n--;

                                    // Subtract divisor from product.
                                    subtract( prod, yL < prodL ? yz : yc, prodL, base );
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {

                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if ( n == 0 ) {

                                    // divisor < remainder, so n must be at least 1.
                                    cmp = n = 1;
                                }

                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }

                            if ( prodL < remL ) prod.unshift(0);

                            // Subtract product from remainder.
                            subtract( rem, prod, remL, base );
                            remL = rem.length;

                             // If product was < remainder.
                            if ( cmp == -1 ) {

                                // Compare divisor and new remainder.
                                // If divisor < new remainder, subtract divisor from remainder.
                                // Trial digit n too low.
                                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                                while ( compare( yc, rem, yL, remL ) < 1 ) {
                                    n++;

                                    // Subtract divisor from remainder.
                                    subtract( rem, yL < remL ? yz : yc, remL, base );
                                    remL = rem.length;
                                }
                            }
                        } else if ( cmp === 0 ) {
                            n++;
                            rem = [0];
                        } // else cmp === 1 and n will be 0

                        // Add the next digit, n, to the result array.
                        qc[i++] = n;

                        // Update the remainder.
                        if ( rem[0] ) {
                            rem[remL++] = xc[xi] || 0;
                        } else {
                            rem = [ xc[xi] ];
                            remL = 1;
                        }
                    } while ( ( xi++ < xL || rem[0] != null ) && s-- );

                    more = rem[0] != null;

                    // Leading zero?
                    if ( !qc[0] ) qc.shift();
                }

                if ( base == BASE ) {

                    // To calculate q.e, first get the number of digits of qc[0].
                    for ( i = 1, s = qc[0]; s >= 10; s /= 10, i++ );
                    round( q, dp + ( q.e = i + e * LOG_BASE - 1 ) + 1, rm, more );

                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }

                return q;
            };
        })();


        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */
        function format( n, i, rm, caller ) {
            var c0, e, ne, len, str;

            rm = rm != null && isValidInt( rm, 0, 8, caller, roundingMode )
              ? rm | 0 : ROUNDING_MODE;

            if ( !n.c ) return n.toString();
            c0 = n.c[0];
            ne = n.e;

            if ( i == null ) {
                str = coeffToString( n.c );
                str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG
                  ? toExponential( str, ne )
                  : toFixedPoint( str, ne );
            } else {
                n = round( new BigNumber(n), i, rm );

                // n.e may have changed if the value was rounded up.
                e = n.e;

                str = coeffToString( n.c );
                len = str.length;

                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.

                // Exponential notation.
                if ( caller == 19 || caller == 24 && ( i <= e || e <= TO_EXP_NEG ) ) {

                    // Append zeros?
                    for ( ; len < i; str += '0', len++ );
                    str = toExponential( str, e );

                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint( str, e );

                    // Append zeros?
                    if ( e + 1 > len ) {
                        if ( --i > 0 ) for ( str += '.'; i--; str += '0' );
                    } else {
                        i += e - len;
                        if ( i > 0 ) {
                            if ( e + 1 == len ) str += '.';
                            for ( ; i--; str += '0' );
                        }
                    }
                }
            }

            return n.s < 0 && c0 ? '-' + str : str;
        }


        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin( args, method ) {
            var m, n,
                i = 0;

            if ( isArray( args[0] ) ) args = args[0];
            m = new BigNumber( args[0] );

            for ( ; ++i < args.length; ) {
                n = new BigNumber( args[i] );

                // If any number is NaN, return NaN.
                if ( !n.s ) {
                    m = n;
                    break;
                } else if ( method.call( m, n ) ) {
                    m = n;
                }
            }

            return m;
        }


        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */
        function intValidatorWithErrors( n, min, max, caller, name ) {
            if ( n < min || n > max || n != truncate(n) ) {
                raise( caller, ( name || 'decimal places' ) +
                  ( n < min || n > max ? ' out of range' : ' not an integer' ), n );
            }

            return true;
        }


        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */
        function normalise( n, c, e ) {
            var i = 1,
                j = c.length;

             // Remove trailing zeros.
            for ( ; !c[--j]; c.pop() );

            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for ( j = c[0]; j >= 10; j /= 10, i++ );

            // Overflow?
            if ( ( e = i + e * LOG_BASE - 1 ) > MAX_EXP ) {

                // Infinity.
                n.c = n.e = null;

            // Underflow?
            } else if ( e < MIN_EXP ) {

                // Zero.
                n.c = [ n.e = 0 ];
            } else {
                n.e = e;
                n.c = c;
            }

            return n;
        }


        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function () {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                dotAfter = /^([^.]+)\.$/,
                dotBefore = /^\.([^.]+)$/,
                isInfinityOrNaN = /^-?(Infinity|NaN)$/,
                whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

            return function ( x, str, num, b ) {
                var base,
                    s = num ? str : str.replace( whitespaceOrPlus, '' );

                // No exception on ±Infinity or NaN.
                if ( isInfinityOrNaN.test(s) ) {
                    x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                } else {
                    if ( !num ) {

                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace( basePrefix, function ( m, p1, p2 ) {
                            base = ( p2 = p2.toLowerCase() ) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });

                        if (b) {
                            base = b;

                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace( dotAfter, '$1' ).replace( dotBefore, '0.$1' );
                        }

                        if ( str != s ) return new BigNumber( s, base );
                    }

                    // 'new BigNumber() not a number: {n}'
                    // 'new BigNumber() not a base {b} number: {n}'
                    if (ERRORS) raise( id, 'not a' + ( b ? ' base ' + b : '' ) + ' number', str );
                    x.s = null;
                }

                x.c = x.e = null;
                id = 0;
            }
        })();


        // Throw a BigNumber Error.
        function raise( caller, msg, val ) {
            var error = new Error( [
                'new BigNumber',     // 0
                'cmp',               // 1
                'config',            // 2
                'div',               // 3
                'divToInt',          // 4
                'eq',                // 5
                'gt',                // 6
                'gte',               // 7
                'lt',                // 8
                'lte',               // 9
                'minus',             // 10
                'mod',               // 11
                'plus',              // 12
                'precision',         // 13
                'random',            // 14
                'round',             // 15
                'shift',             // 16
                'times',             // 17
                'toDigits',          // 18
                'toExponential',     // 19
                'toFixed',           // 20
                'toFormat',          // 21
                'toFraction',        // 22
                'pow',               // 23
                'toPrecision',       // 24
                'toString',          // 25
                'BigNumber'          // 26
            ][caller] + '() ' + msg + ': ' + val );

            error.name = 'BigNumber Error';
            id = 0;
            throw error;
        }


        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */
        function round( x, sd, rm, r ) {
            var d, i, j, k, n, ni, rd,
                xc = x.c,
                pows10 = POWS_TEN;

            // if x is not Infinity or NaN...
            if (xc) {

                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {

                    // Get the number of digits of the first element of xc.
                    for ( d = 1, k = xc[0]; k >= 10; k /= 10, d++ );
                    i = sd - d;

                    // If the rounding digit is in the first element of xc...
                    if ( i < 0 ) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ ni = 0 ];

                        // Get the rounding digit at index j of n.
                        rd = n / pows10[ d - j - 1 ] % 10 | 0;
                    } else {
                        ni = mathceil( ( i + 1 ) / LOG_BASE );

                        if ( ni >= xc.length ) {

                            if (r) {

                                // Needed by sqrt.
                                for ( ; xc.length <= ni; xc.push(0) );
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else {
                                break out;
                            }
                        } else {
                            n = k = xc[ni];

                            // Get the number of digits of n.
                            for ( d = 1; k >= 10; k /= 10, d++ );

                            // Get the index of rd within n.
                            i %= LOG_BASE;

                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;

                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[ d - j - 1 ] % 10 | 0;
                        }
                    }

                    r = r || sd < 0 ||

                    // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                      xc[ni + 1] != null || ( j < 0 ? n : n % pows10[ d - j - 1 ] );

                    r = rm < 4
                      ? ( rd || r ) && ( rm == 0 || rm == ( x.s < 0 ? 3 : 2 ) )
                      : rd > 5 || rd == 5 && ( rm == 4 || r || rm == 6 &&

                        // Check whether the digit to the left of the rounding digit is odd.
                        ( ( i > 0 ? j > 0 ? n / pows10[ d - j ] : 0 : xc[ni - 1] ) % 10 ) & 1 ||
                          rm == ( x.s < 0 ? 8 : 7 ) );

                    if ( sd < 1 || !xc[0] ) {
                        xc.length = 0;

                        if (r) {

                            // Convert sd to decimal places.
                            sd -= x.e + 1;

                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[ ( LOG_BASE - sd % LOG_BASE ) % LOG_BASE ];
                            x.e = -sd || 0;
                        } else {

                            // Zero.
                            xc[0] = x.e = 0;
                        }

                        return x;
                    }

                    // Remove excess digits.
                    if ( i == 0 ) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[ LOG_BASE - i ];

                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor( n / pows10[ d - j ] % pows10[j] ) * k : 0;
                    }

                    // Round up?
                    if (r) {

                        for ( ; ; ) {

                            // If the digit to be rounded up is in the first element of xc...
                            if ( ni == 0 ) {

                                // i will be the length of xc[0] before k is added.
                                for ( i = 1, j = xc[0]; j >= 10; j /= 10, i++ );
                                j = xc[0] += k;
                                for ( k = 1; j >= 10; j /= 10, k++ );

                                // if i != k the length has increased.
                                if ( i != k ) {
                                    x.e++;
                                    if ( xc[0] == BASE ) xc[0] = 1;
                                }

                                break;
                            } else {
                                xc[ni] += k;
                                if ( xc[ni] != BASE ) break;
                                xc[ni--] = 0;
                                k = 1;
                            }
                        }
                    }

                    // Remove trailing zeros.
                    for ( i = xc.length; xc[--i] === 0; xc.pop() );
                }

                // Overflow? Infinity.
                if ( x.e > MAX_EXP ) {
                    x.c = x.e = null;

                // Underflow? Zero.
                } else if ( x.e < MIN_EXP ) {
                    x.c = [ x.e = 0 ];
                }
            }

            return x;
        }


        // PROTOTYPE/INSTANCE METHODS


        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */
        P.absoluteValue = P.abs = function () {
            var x = new BigNumber(this);
            if ( x.s < 0 ) x.s = 1;
            return x;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */
        P.ceil = function () {
            return round( new BigNumber(this), this.e + 1, 2 );
        };


        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */
        P.comparedTo = P.cmp = function ( y, b ) {
            id = 1;
            return compare( this, new BigNumber( y, b ) );
        };


        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */
        P.decimalPlaces = P.dp = function () {
            var n, v,
                c = this.c;

            if ( !c ) return null;
            n = ( ( v = c.length - 1 ) - bitFloor( this.e / LOG_BASE ) ) * LOG_BASE;

            // Subtract the number of trailing zeros of the last number.
            if ( v = c[v] ) for ( ; v % 10 == 0; v /= 10, n-- );
            if ( n < 0 ) n = 0;

            return n;
        };


        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.dividedBy = P.div = function ( y, b ) {
            id = 3;
            return div( this, new BigNumber( y, b ), DECIMAL_PLACES, ROUNDING_MODE );
        };


        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */
        P.dividedToIntegerBy = P.divToInt = function ( y, b ) {
            id = 4;
            return div( this, new BigNumber( y, b ), 0, 1 );
        };


        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.equals = P.eq = function ( y, b ) {
            id = 5;
            return compare( this, new BigNumber( y, b ) ) === 0;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */
        P.floor = function () {
            return round( new BigNumber(this), this.e + 1, 3 );
        };


        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.greaterThan = P.gt = function ( y, b ) {
            id = 6;
            return compare( this, new BigNumber( y, b ) ) > 0;
        };


        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.greaterThanOrEqualTo = P.gte = function ( y, b ) {
            id = 7;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === 1 || b === 0;

        };


        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */
        P.isFinite = function () {
            return !!this.c;
        };


        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */
        P.isInteger = P.isInt = function () {
            return !!this.c && bitFloor( this.e / LOG_BASE ) > this.c.length - 2;
        };


        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */
        P.isNaN = function () {
            return !this.s;
        };


        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */
        P.isNegative = P.isNeg = function () {
            return this.s < 0;
        };


        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */
        P.isZero = function () {
            return !!this.c && this.c[0] == 0;
        };


        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */
        P.lessThan = P.lt = function ( y, b ) {
            id = 8;
            return compare( this, new BigNumber( y, b ) ) < 0;
        };


        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */
        P.lessThanOrEqualTo = P.lte = function ( y, b ) {
            id = 9;
            return ( b = compare( this, new BigNumber( y, b ) ) ) === -1 || b === 0;
        };


        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */
        P.minus = P.sub = function ( y, b ) {
            var i, j, t, xLTy,
                x = this,
                a = x.s;

            id = 10;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
            if ( a != b ) {
                y.s = -b;
                return x.plus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Either Infinity?
                if ( !xc || !yc ) return xc ? ( y.s = -b, y ) : new BigNumber( yc ? x : NaN );

                // Either zero?
                if ( !xc[0] || !yc[0] ) {

                    // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                    return yc[0] ? ( y.s = -b, y ) : new BigNumber( xc[0] ? x :

                      // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                      ROUNDING_MODE == 3 ? -0 : 0 );
                }
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Determine which is the bigger number.
            if ( a = xe - ye ) {

                if ( xLTy = a < 0 ) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                t.reverse();

                // Prepend zeros to equalise exponents.
                for ( b = a; b--; t.push(0) );
                t.reverse();
            } else {

                // Exponents equal. Check digit by digit.
                j = ( xLTy = ( a = xc.length ) < ( b = yc.length ) ) ? a : b;

                for ( a = b = 0; b < j; b++ ) {

                    if ( xc[b] != yc[b] ) {
                        xLTy = xc[b] < yc[b];
                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

            b = ( j = yc.length ) - ( i = xc.length );

            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if ( b > 0 ) for ( ; b--; xc[i++] = 0 );
            b = BASE - 1;

            // Subtract yc from xc.
            for ( ; j > a; ) {

                if ( xc[--j] < yc[j] ) {
                    for ( i = j; i && !xc[--i]; xc[i] = b );
                    --xc[i];
                    xc[j] += BASE;
                }

                xc[j] -= yc[j];
            }

            // Remove leading zeros and adjust exponent accordingly.
            for ( ; xc[0] == 0; xc.shift(), --ye );

            // Zero?
            if ( !xc[0] ) {

                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [ y.e = 0 ];
                return y;
            }

            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise( y, xc, ye );
        };


        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */
        P.modulo = P.mod = function ( y, b ) {
            var q, s,
                x = this;

            id = 11;
            y = new BigNumber( y, b );

            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if ( !x.c || !y.s || y.c && !y.c[0] ) {
                return new BigNumber(NaN);

            // Return x if y is Infinity or x is zero.
            } else if ( !y.c || x.c && !x.c[0] ) {
                return new BigNumber(x);
            }

            if ( MODULO_MODE == 9 ) {

                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div( x, y, 0, 3 );
                y.s = s;
                q.s *= s;
            } else {
                q = div( x, y, 0, MODULO_MODE );
            }

            return x.minus( q.times(y) );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */
        P.negated = P.neg = function () {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };


        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */
        P.plus = P.add = function ( y, b ) {
            var t,
                x = this,
                a = x.s;

            id = 12;
            y = new BigNumber( y, b );
            b = y.s;

            // Either NaN?
            if ( !a || !b ) return new BigNumber(NaN);

            // Signs differ?
             if ( a != b ) {
                y.s = -b;
                return x.minus(y);
            }

            var xe = x.e / LOG_BASE,
                ye = y.e / LOG_BASE,
                xc = x.c,
                yc = y.c;

            if ( !xe || !ye ) {

                // Return ±Infinity if either ±Infinity.
                if ( !xc || !yc ) return new BigNumber( a / 0 );

                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if ( !xc[0] || !yc[0] ) return yc[0] ? y : new BigNumber( xc[0] ? x : a * 0 );
            }

            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();

            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if ( a = xe - ye ) {
                if ( a > 0 ) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                t.reverse();
                for ( ; a--; t.push(0) );
                t.reverse();
            }

            a = xc.length;
            b = yc.length;

            // Point xc to the longer array, and b to the shorter length.
            if ( a - b < 0 ) t = yc, yc = xc, xc = t, b = a;

            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for ( a = 0; b; ) {
                a = ( xc[--b] = xc[b] + yc[b] + a ) / BASE | 0;
                xc[b] %= BASE;
            }

            if (a) {
                xc.unshift(a);
                ++ye;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise( y, xc, ye );
        };


        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */
        P.precision = P.sd = function (z) {
            var n, v,
                x = this,
                c = x.c;

            // 'precision() argument not a boolean or binary digit: {z}'
            if ( z != null && z !== !!z && z !== 1 && z !== 0 ) {
                if (ERRORS) raise( 13, 'argument' + notBool, z );
                if ( z != !!z ) z = null;
            }

            if ( !c ) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;

            if ( v = c[v] ) {

                // Subtract the number of trailing zeros of the last element.
                for ( ; v % 10 == 0; v /= 10, n-- );

                // Add the number of digits of the first element.
                for ( v = c[0]; v >= 10; v /= 10, n++ );
            }

            if ( z && x.e + 1 > n ) n = x.e + 1;

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */
        P.round = function ( dp, rm ) {
            var n = new BigNumber(this);

            if ( dp == null || isValidInt( dp, 0, MAX, 15 ) ) {
                round( n, ~~dp + this.e + 1, rm == null ||
                  !isValidInt( rm, 0, 8, 15, roundingMode ) ? ROUNDING_MODE : rm | 0 );
            }

            return n;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */
        P.shift = function (k) {
            var n = this;
            return isValidInt( k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument' )

              // k < 1e+21, or truncate(k) will produce exponential notation.
              ? n.times( '1e' + truncate(k) )
              : new BigNumber( n.c && n.c[0] && ( k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER )
                ? n.s * ( k < 0 ? 0 : 1 / 0 )
                : n );
        };


        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */
        P.squareRoot = P.sqrt = function () {
            var m, n, r, rep, t,
                x = this,
                c = x.c,
                s = x.s,
                e = x.e,
                dp = DECIMAL_PLACES + 4,
                half = new BigNumber('0.5');

            // Negative/NaN/Infinity/zero?
            if ( s !== 1 || !c || !c[0] ) {
                return new BigNumber( !s || s < 0 && ( !c || c[0] ) ? NaN : c ? x : 1 / 0 );
            }

            // Initial estimate.
            s = Math.sqrt( +x );

            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if ( s == 0 || s == 1 / 0 ) {
                n = coeffToString(c);
                if ( ( n.length + e ) % 2 == 0 ) n += '0';
                s = Math.sqrt(n);
                e = bitFloor( ( e + 1 ) / 2 ) - ( e < 0 || e % 2 );

                if ( s == 1 / 0 ) {
                    n = '1e' + e;
                } else {
                    n = s.toExponential();
                    n = n.slice( 0, n.indexOf('e') + 1 ) + e;
                }

                r = new BigNumber(n);
            } else {
                r = new BigNumber( s + '' );
            }

            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if ( r.c[0] ) {
                e = r.e;
                s = e + dp;
                if ( s < 3 ) s = 0;

                // Newton-Raphson iteration.
                for ( ; ; ) {
                    t = r;
                    r = half.times( t.plus( div( x, t, dp, 1 ) ) );

                    if ( coeffToString( t.c   ).slice( 0, s ) === ( n =
                         coeffToString( r.c ) ).slice( 0, s ) ) {

                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if ( r.e < e ) --s;
                        n = n.slice( s - 3, s + 1 );

                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if ( n == '9999' || !rep && n == '4999' ) {

                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if ( !rep ) {
                                round( t, t.e + DECIMAL_PLACES + 2, 0 );

                                if ( t.times(t).eq(x) ) {
                                    r = t;
                                    break;
                                }
                            }

                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {

                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if ( !+n || !+n.slice(1) && n.charAt(0) == '5' ) {

                                // Truncate to the first rounding digit.
                                round( r, r.e + DECIMAL_PLACES + 2, 1 );
                                m = !r.times(r).eq(x);
                            }

                            break;
                        }
                    }
                }
            }

            return round( r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m );
        };


        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */
        P.times = P.mul = function ( y, b ) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
                base, sqrtBase,
                x = this,
                xc = x.c,
                yc = ( id = 17, y = new BigNumber( y, b ) ).c;

            // Either NaN, ±Infinity or ±0?
            if ( !xc || !yc || !xc[0] || !yc[0] ) {

                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if ( !x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc ) {
                    y.c = y.e = y.s = null;
                } else {
                    y.s *= x.s;

                    // Return ±Infinity if either is ±Infinity.
                    if ( !xc || !yc ) {
                        y.c = y.e = null;

                    // Return ±0 if either is ±0.
                    } else {
                        y.c = [0];
                        y.e = 0;
                    }
                }

                return y;
            }

            e = bitFloor( x.e / LOG_BASE ) + bitFloor( y.e / LOG_BASE );
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;

            // Ensure xc points to longer array and xcL to its length.
            if ( xcL < ycL ) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

            // Initialise the result array with zeros.
            for ( i = xcL + ycL, zc = []; i--; zc.push(0) );

            base = BASE;
            sqrtBase = SQRT_BASE;

            for ( i = ycL; --i >= 0; ) {
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;

                for ( k = xcL, j = i + k; j > i; ) {
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + ( ( m % sqrtBase ) * sqrtBase ) + zc[j] + c;
                    c = ( xlo / base | 0 ) + ( m / sqrtBase | 0 ) + yhi * xhi;
                    zc[j--] = xlo % base;
                }

                zc[j] = c;
            }

            if (c) {
                ++e;
            } else {
                zc.shift();
            }

            return normalise( y, zc, e );
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */
        P.toDigits = function ( sd, rm ) {
            var n = new BigNumber(this);
            sd = sd == null || !isValidInt( sd, 1, MAX, 18, 'precision' ) ? null : sd | 0;
            rm = rm == null || !isValidInt( rm, 0, 8, 18, roundingMode ) ? ROUNDING_MODE : rm | 0;
            return sd ? round( n, sd, rm ) : n;
        };


        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */
        P.toExponential = function ( dp, rm ) {
            return format( this,
              dp != null && isValidInt( dp, 0, MAX, 19 ) ? ~~dp + 1 : null, rm, 19 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */
        P.toFixed = function ( dp, rm ) {
            return format( this, dp != null && isValidInt( dp, 0, MAX, 20 )
              ? ~~dp + this.e + 1 : null, rm, 20 );
        };


        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */
        P.toFormat = function ( dp, rm ) {
            var str = format( this, dp != null && isValidInt( dp, 0, MAX, 21 )
              ? ~~dp + this.e + 1 : null, rm, 21 );

            if ( this.c ) {
                var i,
                    arr = str.split('.'),
                    g1 = +FORMAT.groupSize,
                    g2 = +FORMAT.secondaryGroupSize,
                    groupSeparator = FORMAT.groupSeparator,
                    intPart = arr[0],
                    fractionPart = arr[1],
                    isNeg = this.s < 0,
                    intDigits = isNeg ? intPart.slice(1) : intPart,
                    len = intDigits.length;

                if (g2) i = g1, g1 = g2, g2 = i, len -= i;

                if ( g1 > 0 && len > 0 ) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr( 0, i );

                    for ( ; i < len; i += g1 ) {
                        intPart += groupSeparator + intDigits.substr( i, g1 );
                    }

                    if ( g2 > 0 ) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }

                str = fractionPart
                  ? intPart + FORMAT.decimalSeparator + ( ( g2 = +FORMAT.fractionGroupSize )
                    ? fractionPart.replace( new RegExp( '\\d{' + g2 + '}\\B', 'g' ),
                      '$&' + FORMAT.fractionGroupSeparator )
                    : fractionPart )
                  : intPart;
            }

            return str;
        };


        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */
        P.toFraction = function (md) {
            var arr, d0, d2, e, exp, n, n0, q, s,
                k = ERRORS,
                x = this,
                xc = x.c,
                d = new BigNumber(ONE),
                n1 = d0 = new BigNumber(ONE),
                d1 = n0 = new BigNumber(ONE);

            if ( md != null ) {
                ERRORS = false;
                n = new BigNumber(md);
                ERRORS = k;

                if ( !( k = n.isInt() ) || n.lt(ONE) ) {

                    if (ERRORS) {
                        raise( 22,
                          'max denominator ' + ( k ? 'out of range' : 'not an integer' ), md );
                    }

                    // ERRORS is false:
                    // If md is a finite non-integer >= 1, round it to an integer and use it.
                    md = !k && n.c && round( n, n.e + 1, 1 ).gte(ONE) ? n : null;
                }
            }

            if ( !xc ) return x.toString();
            s = coeffToString(xc);

            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[ ( exp = e % LOG_BASE ) < 0 ? LOG_BASE + exp : exp ];
            md = !md || n.cmp(d) > 0 ? ( e > 0 ? d : n1 ) : n;

            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);

            // n0 = d1 = 0
            n0.c[0] = 0;

            for ( ; ; )  {
                q = div( n, d, 0, 1 );
                d2 = d0.plus( q.times(d1) );
                if ( d2.cmp(md) == 1 ) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus( q.times( d2 = n1 ) );
                n0 = d2;
                d = n.minus( q.times( d2 = d ) );
                n = d2;
            }

            d2 = div( md.minus(d0), d1, 0, 1 );
            n0 = n0.plus( d2.times(n1) );
            d0 = d0.plus( d2.times(d1) );
            n0.s = n1.s = x.s;
            e *= 2;

            // Determine which fraction is closer to x, n0/d0 or n1/d1
            arr = div( n1, d1, e, ROUNDING_MODE ).minus(x).abs().cmp(
                  div( n0, d0, e, ROUNDING_MODE ).minus(x).abs() ) < 1
                    ? [ n1.toString(), d1.toString() ]
                    : [ n0.toString(), d0.toString() ];

            MAX_EXP = exp;
            return arr;
        };


        /*
         * Return the value of this BigNumber converted to a number primitive.
         */
        P.toNumber = function () {
            return +this;
        };


        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If m is present, return the result modulo m.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using
         * ROUNDING_MODE.
         *
         * The modular power operation works efficiently when x, n, and m are positive integers,
         * otherwise it is equivalent to calculating x.toPower(n).modulo(m) (with POW_PRECISION 0).
         *
         * n {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         * [m] {number|string|BigNumber} The modulus.
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         *
         * Performs 54 loop iterations for n of 9007199254740991.
         */
        P.toPower = P.pow = function ( n, m ) {
            var k, y, z,
                i = mathfloor( n < 0 ? -n : +n ),
                x = this;

            if ( m != null ) {
                id = 23;
                m = new BigNumber(m);
            }

            // Pass ±Infinity to Math.pow if exponent is out of range.
            if ( !isValidInt( n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent' ) &&
              ( !isFinite(n) || i > MAX_SAFE_INTEGER && ( n /= 0 ) ||
                parseFloat(n) != n && !( n = NaN ) ) || n == 0 ) {
                k = Math.pow( +x, n );
                return new BigNumber( m ? k % m : k );
            }

            if (m) {
                if ( n > 1 && x.gt(ONE) && x.isInt() && m.gt(ONE) && m.isInt() ) {
                    x = x.mod(m);
                } else {
                    z = m;

                    // Nullify m so only a single mod operation is performed at the end.
                    m = null;
                }
            } else if (POW_PRECISION) {

                // Truncating each coefficient array to a length of k after each multiplication
                // equates to truncating significant digits to POW_PRECISION + [28, 41],
                // i.e. there will be a minimum of 28 guard digits retained.
                // (Using + 1.5 would give [9, 21] guard digits.)
                k = mathceil( POW_PRECISION / LOG_BASE + 2 );
            }

            y = new BigNumber(ONE);

            for ( ; ; ) {
                if ( i % 2 ) {
                    y = y.times(x);
                    if ( !y.c ) break;
                    if (k) {
                        if ( y.c.length > k ) y.c.length = k;
                    } else if (m) {
                        y = y.mod(m);
                    }
                }

                i = mathfloor( i / 2 );
                if ( !i ) break;
                x = x.times(x);
                if (k) {
                    if ( x.c && x.c.length > k ) x.c.length = k;
                } else if (m) {
                    x = x.mod(m);
                }
            }

            if (m) return y;
            if ( n < 0 ) y = ONE.div(y);

            return z ? y.mod(z) : k ? round( y, POW_PRECISION, ROUNDING_MODE ) : y;
        };


        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */
        P.toPrecision = function ( sd, rm ) {
            return format( this, sd != null && isValidInt( sd, 1, MAX, 24, 'precision' )
              ? sd | 0 : null, rm, 24 );
        };


        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */
        P.toString = function (b) {
            var str,
                n = this,
                s = n.s,
                e = n.e;

            // Infinity or NaN?
            if ( e === null ) {

                if (s) {
                    str = 'Infinity';
                    if ( s < 0 ) str = '-' + str;
                } else {
                    str = 'NaN';
                }
            } else {
                str = coeffToString( n.c );

                if ( b == null || !isValidInt( b, 2, 64, 25, 'base' ) ) {
                    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                      ? toExponential( str, e )
                      : toFixedPoint( str, e );
                } else {
                    str = convertBase( toFixedPoint( str, e ), b | 0, 10, s );
                }

                if ( s < 0 && n.c[0] ) str = '-' + str;
            }

            return str;
        };


        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */
        P.truncated = P.trunc = function () {
            return round( new BigNumber(this), this.e + 1, 1 );
        };



        /*
         * Return as toString, but do not accept a base argument, and include the minus sign for
         * negative zero.
         */
        P.valueOf = P.toJSON = function () {
            var str,
                n = this,
                e = n.e;

            if ( e === null ) return n.toString();

            str = coeffToString( n.c );

            str = e <= TO_EXP_NEG || e >= TO_EXP_POS
                ? toExponential( str, e )
                : toFixedPoint( str, e );

            return n.s < 0 ? '-' + str : str;
        };


        // Aliases for BigDecimal methods.
        //P.add = P.plus;         // P.add included above
        //P.subtract = P.minus;   // P.sub included above
        //P.multiply = P.times;   // P.mul included above
        //P.divide = P.div;
        //P.remainder = P.mod;
        //P.compareTo = P.cmp;
        //P.negate = P.neg;


        if ( configObj != null ) BigNumber.config(configObj);

        return BigNumber;
    }


    // PRIVATE HELPER FUNCTIONS


    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }


    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for ( ; i < j; ) {
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for ( ; z--; s = '0' + s );
            r += s;
        }

        // Determine trailing zeros.
        for ( j = r.length; r.charCodeAt(--j) === 48; );
        return r.slice( 0, j + 1 || 1 );
    }


    // Compare the value of BigNumbers x and y.
    function compare( x, y ) {
        var a, b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either NaN?
        if ( !i || !j ) return null;

        a = xc && !xc[0];
        b = yc && !yc[0];

        // Either zero?
        if ( a || b ) return a ? b ? 0 : -j : i;

        // Signs differ?
        if ( i != j ) return i;

        a = i < 0;
        b = k == l;

        // Either Infinity?
        if ( !xc || !yc ) return b ? 0 : !xc ^ a ? 1 : -1;

        // Compare exponents.
        if ( !b ) return k > l ^ a ? 1 : -1;

        j = ( k = xc.length ) < ( l = yc.length ) ? k : l;

        // Compare digit by digit.
        for ( i = 0; i < j; i++ ) if ( xc[i] != yc[i] ) return xc[i] > yc[i] ^ a ? 1 : -1;

        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }


    /*
     * Return true if n is a valid number in range, otherwise false.
     * Use for argument validation when ERRORS is false.
     * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
     */
    function intValidatorNoErrors( n, min, max ) {
        return ( n = truncate(n) ) >= min && n <= max;
    }


    function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
    }


    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. convertBase('255', 10, 16) returns [15, 15].
     * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut( str, baseIn, baseOut ) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for ( ; i < len; ) {
            for ( arrL = arr.length; arrL--; arr[arrL] *= baseIn );
            arr[ j = 0 ] += ALPHABET.indexOf( str.charAt( i++ ) );

            for ( ; j < arr.length; j++ ) {

                if ( arr[j] > baseOut - 1 ) {
                    if ( arr[j + 1] == null ) arr[j + 1] = 0;
                    arr[j + 1] += arr[j] / baseOut | 0;
                    arr[j] %= baseOut;
                }
            }
        }

        return arr.reverse();
    }


    function toExponential( str, e ) {
        return ( str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str ) +
          ( e < 0 ? 'e' : 'e+' ) + e;
    }


    function toFixedPoint( str, e ) {
        var len, z;

        // Negative exponent?
        if ( e < 0 ) {

            // Prepend zeros.
            for ( z = '0.'; ++e; z += '0' );
            str = z + str;

        // Positive exponent
        } else {
            len = str.length;

            // Append zeros.
            if ( ++e > len ) {
                for ( z = '0', e -= len; --e; z += '0' );
                str += z;
            } else if ( e < len ) {
                str = str.slice( 0, e ) + '.' + str.slice(e);
            }
        }

        return str;
    }


    function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
    }


    // EXPORT


    BigNumber = constructorFactory();
    BigNumber.default = BigNumber.BigNumber = BigNumber;


    // AMD.
    if ( typeof define == 'function' && define.amd ) {
        define( function () { return BigNumber; } );

    // Node.js and other environments that support module.exports.
    } else if ( typeof module != 'undefined' && module.exports ) {
        module.exports = BigNumber;

        // Split string stops browserify adding crypto shim.
        if ( !cryptoObj ) try { cryptoObj = _dereq_('cry' + 'pto'); } catch (e) {}

    // Browser.
    } else {
        if ( !globalObj ) globalObj = typeof self != 'undefined' ? self : Function('return this')();
        globalObj.BigNumber = BigNumber;
    }
})(this);

},{}],3:[function(_dereq_,module,exports){
module.exports={
  "supplemental": {
    "version": {
      "_number": "$Revision: 12404 $",
      "_unicodeVersion": "8.0.0",
      "_cldrVersion": "29"
    },
    "metadata": {
      "alias": {
        "languageAlias": {
          "aa-SAAHO": {
            "_reason": "deprecated",
            "_replacement": "ssy"
          },
          "aar": {
            "_reason": "overlong",
            "_replacement": "aa"
          },
          "abk": {
            "_reason": "overlong",
            "_replacement": "ab"
          },
          "afr": {
            "_reason": "overlong",
            "_replacement": "af"
          },
          "aju": {
            "_reason": "macrolanguage",
            "_replacement": "jrb"
          },
          "aka": {
            "_reason": "overlong",
            "_replacement": "ak"
          },
          "alb": {
            "_reason": "bibliographic",
            "_replacement": "sq"
          },
          "als": {
            "_reason": "macrolanguage",
            "_replacement": "sq"
          },
          "amh": {
            "_reason": "overlong",
            "_replacement": "am"
          },
          "ara": {
            "_reason": "overlong",
            "_replacement": "ar"
          },
          "arb": {
            "_reason": "macrolanguage",
            "_replacement": "ar"
          },
          "arg": {
            "_reason": "overlong",
            "_replacement": "an"
          },
          "arm": {
            "_reason": "bibliographic",
            "_replacement": "hy"
          },
          "art-lojban": {
            "_reason": "deprecated",
            "_replacement": "jbo"
          },
          "asm": {
            "_reason": "overlong",
            "_replacement": "as"
          },
          "ava": {
            "_reason": "overlong",
            "_replacement": "av"
          },
          "ave": {
            "_reason": "overlong",
            "_replacement": "ae"
          },
          "aym": {
            "_reason": "overlong",
            "_replacement": "ay"
          },
          "ayr": {
            "_reason": "macrolanguage",
            "_replacement": "ay"
          },
          "az-AZ": {
            "_reason": "legacy",
            "_replacement": "az-Latn-AZ"
          },
          "aze": {
            "_reason": "overlong",
            "_replacement": "az"
          },
          "azj": {
            "_reason": "macrolanguage",
            "_replacement": "az"
          },
          "bak": {
            "_reason": "overlong",
            "_replacement": "ba"
          },
          "bam": {
            "_reason": "overlong",
            "_replacement": "bm"
          },
          "baq": {
            "_reason": "bibliographic",
            "_replacement": "eu"
          },
          "bcc": {
            "_reason": "macrolanguage",
            "_replacement": "bal"
          },
          "bcl": {
            "_reason": "macrolanguage",
            "_replacement": "bik"
          },
          "bel": {
            "_reason": "overlong",
            "_replacement": "be"
          },
          "ben": {
            "_reason": "overlong",
            "_replacement": "bn"
          },
          "bih": {
            "_reason": "overlong",
            "_replacement": "bh"
          },
          "bis": {
            "_reason": "overlong",
            "_replacement": "bi"
          },
          "bod": {
            "_reason": "overlong",
            "_replacement": "bo"
          },
          "bos": {
            "_reason": "overlong",
            "_replacement": "bs"
          },
          "bre": {
            "_reason": "overlong",
            "_replacement": "br"
          },
          "bs-BA": {
            "_reason": "legacy",
            "_replacement": "bs-Latn-BA"
          },
          "bul": {
            "_reason": "overlong",
            "_replacement": "bg"
          },
          "bur": {
            "_reason": "bibliographic",
            "_replacement": "my"
          },
          "bxk": {
            "_reason": "macrolanguage",
            "_replacement": "luy"
          },
          "bxr": {
            "_reason": "macrolanguage",
            "_replacement": "bua"
          },
          "cat": {
            "_reason": "overlong",
            "_replacement": "ca"
          },
          "ces": {
            "_reason": "overlong",
            "_replacement": "cs"
          },
          "cha": {
            "_reason": "overlong",
            "_replacement": "ch"
          },
          "che": {
            "_reason": "overlong",
            "_replacement": "ce"
          },
          "chi": {
            "_reason": "bibliographic",
            "_replacement": "zh"
          },
          "chu": {
            "_reason": "overlong",
            "_replacement": "cu"
          },
          "chv": {
            "_reason": "overlong",
            "_replacement": "cv"
          },
          "cld": {
            "_reason": "macrolanguage",
            "_replacement": "syr"
          },
          "cmn": {
            "_reason": "macrolanguage",
            "_replacement": "zh"
          },
          "cor": {
            "_reason": "overlong",
            "_replacement": "kw"
          },
          "cos": {
            "_reason": "overlong",
            "_replacement": "co"
          },
          "cre": {
            "_reason": "overlong",
            "_replacement": "cr"
          },
          "cwd": {
            "_reason": "macrolanguage",
            "_replacement": "cr"
          },
          "cym": {
            "_reason": "overlong",
            "_replacement": "cy"
          },
          "cze": {
            "_reason": "bibliographic",
            "_replacement": "cs"
          },
          "dan": {
            "_reason": "overlong",
            "_replacement": "da"
          },
          "deu": {
            "_reason": "overlong",
            "_replacement": "de"
          },
          "dgo": {
            "_reason": "macrolanguage",
            "_replacement": "doi"
          },
          "dhd": {
            "_reason": "macrolanguage",
            "_replacement": "mwr"
          },
          "dik": {
            "_reason": "macrolanguage",
            "_replacement": "din"
          },
          "diq": {
            "_reason": "macrolanguage",
            "_replacement": "zza"
          },
          "div": {
            "_reason": "overlong",
            "_replacement": "dv"
          },
          "dut": {
            "_reason": "bibliographic",
            "_replacement": "nl"
          },
          "dzo": {
            "_reason": "overlong",
            "_replacement": "dz"
          },
          "ekk": {
            "_reason": "macrolanguage",
            "_replacement": "et"
          },
          "ell": {
            "_reason": "overlong",
            "_replacement": "el"
          },
          "emk": {
            "_reason": "macrolanguage",
            "_replacement": "man"
          },
          "eng": {
            "_reason": "overlong",
            "_replacement": "en"
          },
          "epo": {
            "_reason": "overlong",
            "_replacement": "eo"
          },
          "esk": {
            "_reason": "macrolanguage",
            "_replacement": "ik"
          },
          "est": {
            "_reason": "overlong",
            "_replacement": "et"
          },
          "eus": {
            "_reason": "overlong",
            "_replacement": "eu"
          },
          "ewe": {
            "_reason": "overlong",
            "_replacement": "ee"
          },
          "fao": {
            "_reason": "overlong",
            "_replacement": "fo"
          },
          "fas": {
            "_reason": "overlong",
            "_replacement": "fa"
          },
          "fat": {
            "_reason": "macrolanguage",
            "_replacement": "ak"
          },
          "fij": {
            "_reason": "overlong",
            "_replacement": "fj"
          },
          "fin": {
            "_reason": "overlong",
            "_replacement": "fi"
          },
          "fra": {
            "_reason": "overlong",
            "_replacement": "fr"
          },
          "fre": {
            "_reason": "bibliographic",
            "_replacement": "fr"
          },
          "fry": {
            "_reason": "overlong",
            "_replacement": "fy"
          },
          "fuc": {
            "_reason": "macrolanguage",
            "_replacement": "ff"
          },
          "ful": {
            "_reason": "overlong",
            "_replacement": "ff"
          },
          "gaz": {
            "_reason": "macrolanguage",
            "_replacement": "om"
          },
          "gbo": {
            "_reason": "macrolanguage",
            "_replacement": "grb"
          },
          "geo": {
            "_reason": "bibliographic",
            "_replacement": "ka"
          },
          "ger": {
            "_reason": "bibliographic",
            "_replacement": "de"
          },
          "gla": {
            "_reason": "overlong",
            "_replacement": "gd"
          },
          "gle": {
            "_reason": "overlong",
            "_replacement": "ga"
          },
          "glg": {
            "_reason": "overlong",
            "_replacement": "gl"
          },
          "glv": {
            "_reason": "overlong",
            "_replacement": "gv"
          },
          "gno": {
            "_reason": "macrolanguage",
            "_replacement": "gon"
          },
          "gre": {
            "_reason": "bibliographic",
            "_replacement": "el"
          },
          "grn": {
            "_reason": "overlong",
            "_replacement": "gn"
          },
          "gug": {
            "_reason": "macrolanguage",
            "_replacement": "gn"
          },
          "guj": {
            "_reason": "overlong",
            "_replacement": "gu"
          },
          "gya": {
            "_reason": "macrolanguage",
            "_replacement": "gba"
          },
          "ha-Latn-GH": {
            "_reason": "legacy",
            "_replacement": "ha-GH"
          },
          "ha-Latn-NE": {
            "_reason": "legacy",
            "_replacement": "ha-NE"
          },
          "ha-Latn-NG": {
            "_reason": "legacy",
            "_replacement": "ha-NG"
          },
          "hat": {
            "_reason": "overlong",
            "_replacement": "ht"
          },
          "hau": {
            "_reason": "overlong",
            "_replacement": "ha"
          },
          "hbs": {
            "_reason": "overlong",
            "_replacement": "sr-Latn"
          },
          "hdn": {
            "_reason": "macrolanguage",
            "_replacement": "hai"
          },
          "hea": {
            "_reason": "macrolanguage",
            "_replacement": "hmn"
          },
          "heb": {
            "_reason": "overlong",
            "_replacement": "he"
          },
          "her": {
            "_reason": "overlong",
            "_replacement": "hz"
          },
          "him": {
            "_reason": "macrolanguage",
            "_replacement": "srx"
          },
          "hin": {
            "_reason": "overlong",
            "_replacement": "hi"
          },
          "hmo": {
            "_reason": "overlong",
            "_replacement": "ho"
          },
          "hrv": {
            "_reason": "overlong",
            "_replacement": "hr"
          },
          "hun": {
            "_reason": "overlong",
            "_replacement": "hu"
          },
          "hye": {
            "_reason": "overlong",
            "_replacement": "hy"
          },
          "i-ami": {
            "_reason": "deprecated",
            "_replacement": "ami"
          },
          "i-bnn": {
            "_reason": "deprecated",
            "_replacement": "bnn"
          },
          "i-hak": {
            "_reason": "deprecated",
            "_replacement": "hak"
          },
          "i-klingon": {
            "_reason": "deprecated",
            "_replacement": "tlh"
          },
          "i-lux": {
            "_reason": "deprecated",
            "_replacement": "lb"
          },
          "i-navajo": {
            "_reason": "deprecated",
            "_replacement": "nv"
          },
          "i-pwn": {
            "_reason": "deprecated",
            "_replacement": "pwn"
          },
          "i-tao": {
            "_reason": "deprecated",
            "_replacement": "tao"
          },
          "i-tay": {
            "_reason": "deprecated",
            "_replacement": "tay"
          },
          "i-tsu": {
            "_reason": "deprecated",
            "_replacement": "tsu"
          },
          "ibo": {
            "_reason": "overlong",
            "_replacement": "ig"
          },
          "ice": {
            "_reason": "bibliographic",
            "_replacement": "is"
          },
          "ido": {
            "_reason": "overlong",
            "_replacement": "io"
          },
          "iii": {
            "_reason": "overlong",
            "_replacement": "ii"
          },
          "ike": {
            "_reason": "macrolanguage",
            "_replacement": "iu"
          },
          "iku": {
            "_reason": "overlong",
            "_replacement": "iu"
          },
          "ile": {
            "_reason": "overlong",
            "_replacement": "ie"
          },
          "in": {
            "_reason": "deprecated",
            "_replacement": "id"
          },
          "ina": {
            "_reason": "overlong",
            "_replacement": "ia"
          },
          "ind": {
            "_reason": "overlong",
            "_replacement": "id"
          },
          "ipk": {
            "_reason": "overlong",
            "_replacement": "ik"
          },
          "isl": {
            "_reason": "overlong",
            "_replacement": "is"
          },
          "ita": {
            "_reason": "overlong",
            "_replacement": "it"
          },
          "iw": {
            "_reason": "deprecated",
            "_replacement": "he"
          },
          "jav": {
            "_reason": "overlong",
            "_replacement": "jv"
          },
          "ji": {
            "_reason": "deprecated",
            "_replacement": "yi"
          },
          "jpn": {
            "_reason": "overlong",
            "_replacement": "ja"
          },
          "jw": {
            "_reason": "deprecated",
            "_replacement": "jv"
          },
          "kal": {
            "_reason": "overlong",
            "_replacement": "kl"
          },
          "kan": {
            "_reason": "overlong",
            "_replacement": "kn"
          },
          "kas": {
            "_reason": "overlong",
            "_replacement": "ks"
          },
          "kat": {
            "_reason": "overlong",
            "_replacement": "ka"
          },
          "kau": {
            "_reason": "overlong",
            "_replacement": "kr"
          },
          "kaz": {
            "_reason": "overlong",
            "_replacement": "kk"
          },
          "khk": {
            "_reason": "macrolanguage",
            "_replacement": "mn"
          },
          "khm": {
            "_reason": "overlong",
            "_replacement": "km"
          },
          "kik": {
            "_reason": "overlong",
            "_replacement": "ki"
          },
          "kin": {
            "_reason": "overlong",
            "_replacement": "rw"
          },
          "kir": {
            "_reason": "overlong",
            "_replacement": "ky"
          },
          "kk-Cyrl-KZ": {
            "_reason": "legacy",
            "_replacement": "kk-KZ"
          },
          "kmr": {
            "_reason": "macrolanguage",
            "_replacement": "ku"
          },
          "knc": {
            "_reason": "macrolanguage",
            "_replacement": "kr"
          },
          "kng": {
            "_reason": "macrolanguage",
            "_replacement": "kg"
          },
          "knn": {
            "_reason": "macrolanguage",
            "_replacement": "kok"
          },
          "kom": {
            "_reason": "overlong",
            "_replacement": "kv"
          },
          "kon": {
            "_reason": "overlong",
            "_replacement": "kg"
          },
          "kor": {
            "_reason": "overlong",
            "_replacement": "ko"
          },
          "kpv": {
            "_reason": "macrolanguage",
            "_replacement": "kv"
          },
          "ks-Arab-IN": {
            "_reason": "legacy",
            "_replacement": "ks-IN"
          },
          "kua": {
            "_reason": "overlong",
            "_replacement": "kj"
          },
          "kur": {
            "_reason": "overlong",
            "_replacement": "ku"
          },
          "ky-Cyrl-KG": {
            "_reason": "legacy",
            "_replacement": "ky-KG"
          },
          "lao": {
            "_reason": "overlong",
            "_replacement": "lo"
          },
          "lat": {
            "_reason": "overlong",
            "_replacement": "la"
          },
          "lav": {
            "_reason": "overlong",
            "_replacement": "lv"
          },
          "lbk": {
            "_reason": "macrolanguage",
            "_replacement": "bnc"
          },
          "lim": {
            "_reason": "overlong",
            "_replacement": "li"
          },
          "lin": {
            "_reason": "overlong",
            "_replacement": "ln"
          },
          "lit": {
            "_reason": "overlong",
            "_replacement": "lt"
          },
          "ltz": {
            "_reason": "overlong",
            "_replacement": "lb"
          },
          "lub": {
            "_reason": "overlong",
            "_replacement": "lu"
          },
          "lug": {
            "_reason": "overlong",
            "_replacement": "lg"
          },
          "lvs": {
            "_reason": "macrolanguage",
            "_replacement": "lv"
          },
          "mac": {
            "_reason": "bibliographic",
            "_replacement": "mk"
          },
          "mah": {
            "_reason": "overlong",
            "_replacement": "mh"
          },
          "mal": {
            "_reason": "overlong",
            "_replacement": "ml"
          },
          "mao": {
            "_reason": "bibliographic",
            "_replacement": "mi"
          },
          "mar": {
            "_reason": "overlong",
            "_replacement": "mr"
          },
          "may": {
            "_reason": "bibliographic",
            "_replacement": "ms"
          },
          "mhr": {
            "_reason": "macrolanguage",
            "_replacement": "chm"
          },
          "mkd": {
            "_reason": "overlong",
            "_replacement": "mk"
          },
          "mlg": {
            "_reason": "overlong",
            "_replacement": "mg"
          },
          "mlt": {
            "_reason": "overlong",
            "_replacement": "mt"
          },
          "mn-Cyrl-MN": {
            "_reason": "legacy",
            "_replacement": "mn-MN"
          },
          "mnk": {
            "_reason": "macrolanguage",
            "_replacement": "man"
          },
          "mo": {
            "_reason": "deprecated",
            "_replacement": "ro-MD"
          },
          "mol": {
            "_reason": "overlong",
            "_replacement": "ro-MD"
          },
          "mon": {
            "_reason": "overlong",
            "_replacement": "mn"
          },
          "mri": {
            "_reason": "overlong",
            "_replacement": "mi"
          },
          "ms-Latn-BN": {
            "_reason": "legacy",
            "_replacement": "ms-BN"
          },
          "ms-Latn-MY": {
            "_reason": "legacy",
            "_replacement": "ms-MY"
          },
          "ms-Latn-SG": {
            "_reason": "legacy",
            "_replacement": "ms-SG"
          },
          "msa": {
            "_reason": "overlong",
            "_replacement": "ms"
          },
          "mup": {
            "_reason": "macrolanguage",
            "_replacement": "raj"
          },
          "mya": {
            "_reason": "overlong",
            "_replacement": "my"
          },
          "nau": {
            "_reason": "overlong",
            "_replacement": "na"
          },
          "nav": {
            "_reason": "overlong",
            "_replacement": "nv"
          },
          "nbl": {
            "_reason": "overlong",
            "_replacement": "nr"
          },
          "nde": {
            "_reason": "overlong",
            "_replacement": "nd"
          },
          "ndo": {
            "_reason": "overlong",
            "_replacement": "ng"
          },
          "nep": {
            "_reason": "overlong",
            "_replacement": "ne"
          },
          "nld": {
            "_reason": "overlong",
            "_replacement": "nl"
          },
          "nno": {
            "_reason": "overlong",
            "_replacement": "nn"
          },
          "no": {
            "_reason": "legacy",
            "_replacement": "nb"
          },
          "no-bok": {
            "_reason": "deprecated",
            "_replacement": "nb"
          },
          "no-BOKMAL": {
            "_reason": "deprecated",
            "_replacement": "nb"
          },
          "no-nyn": {
            "_reason": "deprecated",
            "_replacement": "nn"
          },
          "no-NYNORSK": {
            "_reason": "deprecated",
            "_replacement": "nn"
          },
          "nob": {
            "_reason": "overlong",
            "_replacement": "nb"
          },
          "nor": {
            "_reason": "overlong",
            "_replacement": "nb"
          },
          "npi": {
            "_reason": "macrolanguage",
            "_replacement": "ne"
          },
          "nya": {
            "_reason": "overlong",
            "_replacement": "ny"
          },
          "oci": {
            "_reason": "overlong",
            "_replacement": "oc"
          },
          "ojg": {
            "_reason": "macrolanguage",
            "_replacement": "oj"
          },
          "oji": {
            "_reason": "overlong",
            "_replacement": "oj"
          },
          "ori": {
            "_reason": "overlong",
            "_replacement": "or"
          },
          "orm": {
            "_reason": "overlong",
            "_replacement": "om"
          },
          "ory": {
            "_reason": "macrolanguage",
            "_replacement": "or"
          },
          "oss": {
            "_reason": "overlong",
            "_replacement": "os"
          },
          "pa-IN": {
            "_reason": "legacy",
            "_replacement": "pa-Guru-IN"
          },
          "pa-PK": {
            "_reason": "legacy",
            "_replacement": "pa-Arab-PK"
          },
          "pan": {
            "_reason": "overlong",
            "_replacement": "pa"
          },
          "pbu": {
            "_reason": "macrolanguage",
            "_replacement": "ps"
          },
          "per": {
            "_reason": "bibliographic",
            "_replacement": "fa"
          },
          "pes": {
            "_reason": "macrolanguage",
            "_replacement": "fa"
          },
          "pli": {
            "_reason": "overlong",
            "_replacement": "pi"
          },
          "plt": {
            "_reason": "macrolanguage",
            "_replacement": "mg"
          },
          "pnb": {
            "_reason": "macrolanguage",
            "_replacement": "lah"
          },
          "pol": {
            "_reason": "overlong",
            "_replacement": "pl"
          },
          "por": {
            "_reason": "overlong",
            "_replacement": "pt"
          },
          "pus": {
            "_reason": "overlong",
            "_replacement": "ps"
          },
          "que": {
            "_reason": "overlong",
            "_replacement": "qu"
          },
          "quz": {
            "_reason": "macrolanguage",
            "_replacement": "qu"
          },
          "rmy": {
            "_reason": "macrolanguage",
            "_replacement": "rom"
          },
          "roh": {
            "_reason": "overlong",
            "_replacement": "rm"
          },
          "ron": {
            "_reason": "overlong",
            "_replacement": "ro"
          },
          "rum": {
            "_reason": "bibliographic",
            "_replacement": "ro"
          },
          "run": {
            "_reason": "overlong",
            "_replacement": "rn"
          },
          "rus": {
            "_reason": "overlong",
            "_replacement": "ru"
          },
          "sag": {
            "_reason": "overlong",
            "_replacement": "sg"
          },
          "san": {
            "_reason": "overlong",
            "_replacement": "sa"
          },
          "scc": {
            "_reason": "deprecated",
            "_replacement": "sr"
          },
          "scr": {
            "_reason": "deprecated",
            "_replacement": "hr"
          },
          "sgn-BE-FR": {
            "_reason": "deprecated",
            "_replacement": "sfb"
          },
          "sgn-BE-NL": {
            "_reason": "deprecated",
            "_replacement": "vgt"
          },
          "sgn-CH-DE": {
            "_reason": "deprecated",
            "_replacement": "sgg"
          },
          "sh": {
            "_reason": "legacy",
            "_replacement": "sr-Latn"
          },
          "shi-MA": {
            "_reason": "legacy",
            "_replacement": "shi-Tfng-MA"
          },
          "sin": {
            "_reason": "overlong",
            "_replacement": "si"
          },
          "slk": {
            "_reason": "overlong",
            "_replacement": "sk"
          },
          "slo": {
            "_reason": "bibliographic",
            "_replacement": "sk"
          },
          "slv": {
            "_reason": "overlong",
            "_replacement": "sl"
          },
          "sme": {
            "_reason": "overlong",
            "_replacement": "se"
          },
          "smo": {
            "_reason": "overlong",
            "_replacement": "sm"
          },
          "sna": {
            "_reason": "overlong",
            "_replacement": "sn"
          },
          "snd": {
            "_reason": "overlong",
            "_replacement": "sd"
          },
          "som": {
            "_reason": "overlong",
            "_replacement": "so"
          },
          "sot": {
            "_reason": "overlong",
            "_replacement": "st"
          },
          "spa": {
            "_reason": "overlong",
            "_replacement": "es"
          },
          "spy": {
            "_reason": "macrolanguage",
            "_replacement": "kln"
          },
          "sqi": {
            "_reason": "overlong",
            "_replacement": "sq"
          },
          "sr-BA": {
            "_reason": "legacy",
            "_replacement": "sr-Cyrl-BA"
          },
          "sr-ME": {
            "_reason": "legacy",
            "_replacement": "sr-Latn-ME"
          },
          "sr-RS": {
            "_reason": "legacy",
            "_replacement": "sr-Cyrl-RS"
          },
          "sr-XK": {
            "_reason": "legacy",
            "_replacement": "sr-Cyrl-XK"
          },
          "src": {
            "_reason": "macrolanguage",
            "_replacement": "sc"
          },
          "srd": {
            "_reason": "overlong",
            "_replacement": "sc"
          },
          "srp": {
            "_reason": "overlong",
            "_replacement": "sr"
          },
          "ssw": {
            "_reason": "overlong",
            "_replacement": "ss"
          },
          "sun": {
            "_reason": "overlong",
            "_replacement": "su"
          },
          "swa": {
            "_reason": "overlong",
            "_replacement": "sw"
          },
          "swe": {
            "_reason": "overlong",
            "_replacement": "sv"
          },
          "swh": {
            "_reason": "macrolanguage",
            "_replacement": "sw"
          },
          "tah": {
            "_reason": "overlong",
            "_replacement": "ty"
          },
          "tam": {
            "_reason": "overlong",
            "_replacement": "ta"
          },
          "tat": {
            "_reason": "overlong",
            "_replacement": "tt"
          },
          "tel": {
            "_reason": "overlong",
            "_replacement": "te"
          },
          "tgk": {
            "_reason": "overlong",
            "_replacement": "tg"
          },
          "tgl": {
            "_reason": "overlong",
            "_replacement": "fil"
          },
          "tha": {
            "_reason": "overlong",
            "_replacement": "th"
          },
          "tib": {
            "_reason": "bibliographic",
            "_replacement": "bo"
          },
          "tir": {
            "_reason": "overlong",
            "_replacement": "ti"
          },
          "tl": {
            "_reason": "legacy",
            "_replacement": "fil"
          },
          "ton": {
            "_reason": "overlong",
            "_replacement": "to"
          },
          "tsn": {
            "_reason": "overlong",
            "_replacement": "tn"
          },
          "tso": {
            "_reason": "overlong",
            "_replacement": "ts"
          },
          "ttq": {
            "_reason": "macrolanguage",
            "_replacement": "tmh"
          },
          "tuk": {
            "_reason": "overlong",
            "_replacement": "tk"
          },
          "tur": {
            "_reason": "overlong",
            "_replacement": "tr"
          },
          "tw": {
            "_reason": "macrolanguage",
            "_replacement": "ak"
          },
          "twi": {
            "_reason": "overlong",
            "_replacement": "ak"
          },
          "tzm-Latn-MA": {
            "_reason": "legacy",
            "_replacement": "tzm-MA"
          },
          "ug-Arab-CN": {
            "_reason": "legacy",
            "_replacement": "ug-CN"
          },
          "uig": {
            "_reason": "overlong",
            "_replacement": "ug"
          },
          "ukr": {
            "_reason": "overlong",
            "_replacement": "uk"
          },
          "umu": {
            "_reason": "macrolanguage",
            "_replacement": "del"
          },
          "urd": {
            "_reason": "overlong",
            "_replacement": "ur"
          },
          "uz-AF": {
            "_reason": "legacy",
            "_replacement": "uz-Arab-AF"
          },
          "uz-UZ": {
            "_reason": "legacy",
            "_replacement": "uz-Latn-UZ"
          },
          "uzb": {
            "_reason": "overlong",
            "_replacement": "uz"
          },
          "uzn": {
            "_reason": "macrolanguage",
            "_replacement": "uz"
          },
          "vai-LR": {
            "_reason": "legacy",
            "_replacement": "vai-Vaii-LR"
          },
          "ven": {
            "_reason": "overlong",
            "_replacement": "ve"
          },
          "vie": {
            "_reason": "overlong",
            "_replacement": "vi"
          },
          "vol": {
            "_reason": "overlong",
            "_replacement": "vo"
          },
          "wel": {
            "_reason": "bibliographic",
            "_replacement": "cy"
          },
          "wln": {
            "_reason": "overlong",
            "_replacement": "wa"
          },
          "wol": {
            "_reason": "overlong",
            "_replacement": "wo"
          },
          "xho": {
            "_reason": "overlong",
            "_replacement": "xh"
          },
          "xpe": {
            "_reason": "macrolanguage",
            "_replacement": "kpe"
          },
          "xsl": {
            "_reason": "macrolanguage",
            "_replacement": "den"
          },
          "ydd": {
            "_reason": "macrolanguage",
            "_replacement": "yi"
          },
          "yid": {
            "_reason": "overlong",
            "_replacement": "yi"
          },
          "yor": {
            "_reason": "overlong",
            "_replacement": "yo"
          },
          "zai": {
            "_reason": "macrolanguage",
            "_replacement": "zap"
          },
          "zh-CN": {
            "_reason": "legacy",
            "_replacement": "zh-Hans-CN"
          },
          "zh-guoyu": {
            "_reason": "deprecated",
            "_replacement": "zh"
          },
          "zh-hakka": {
            "_reason": "deprecated",
            "_replacement": "hak"
          },
          "zh-HK": {
            "_reason": "legacy",
            "_replacement": "zh-Hant-HK"
          },
          "zh-min-nan": {
            "_reason": "deprecated",
            "_replacement": "nan"
          },
          "zh-MO": {
            "_reason": "legacy",
            "_replacement": "zh-Hant-MO"
          },
          "zh-SG": {
            "_reason": "legacy",
            "_replacement": "zh-Hans-SG"
          },
          "zh-TW": {
            "_reason": "legacy",
            "_replacement": "zh-Hant-TW"
          },
          "zh-xiang": {
            "_reason": "deprecated",
            "_replacement": "hsn"
          },
          "zha": {
            "_reason": "overlong",
            "_replacement": "za"
          },
          "zho": {
            "_reason": "overlong",
            "_replacement": "zh"
          },
          "zsm": {
            "_reason": "macrolanguage",
            "_replacement": "ms"
          },
          "zul": {
            "_reason": "overlong",
            "_replacement": "zu"
          },
          "zyb": {
            "_reason": "macrolanguage",
            "_replacement": "za"
          }
        },
        "scriptAlias": {
          "Qaai": {
            "_reason": "deprecated",
            "_replacement": "Zinh"
          }
        },
        "territoryAlias": {
          "004": {
            "_reason": "overlong",
            "_replacement": "AF"
          },
          "008": {
            "_reason": "overlong",
            "_replacement": "AL"
          },
          "010": {
            "_reason": "overlong",
            "_replacement": "AQ"
          },
          "012": {
            "_reason": "overlong",
            "_replacement": "DZ"
          },
          "016": {
            "_reason": "overlong",
            "_replacement": "AS"
          },
          "020": {
            "_reason": "overlong",
            "_replacement": "AD"
          },
          "024": {
            "_reason": "overlong",
            "_replacement": "AO"
          },
          "028": {
            "_reason": "overlong",
            "_replacement": "AG"
          },
          "031": {
            "_reason": "overlong",
            "_replacement": "AZ"
          },
          "032": {
            "_reason": "overlong",
            "_replacement": "AR"
          },
          "036": {
            "_reason": "overlong",
            "_replacement": "AU"
          },
          "040": {
            "_reason": "overlong",
            "_replacement": "AT"
          },
          "044": {
            "_reason": "overlong",
            "_replacement": "BS"
          },
          "048": {
            "_reason": "overlong",
            "_replacement": "BH"
          },
          "050": {
            "_reason": "overlong",
            "_replacement": "BD"
          },
          "051": {
            "_reason": "overlong",
            "_replacement": "AM"
          },
          "052": {
            "_reason": "overlong",
            "_replacement": "BB"
          },
          "056": {
            "_reason": "overlong",
            "_replacement": "BE"
          },
          "060": {
            "_reason": "overlong",
            "_replacement": "BM"
          },
          "062": {
            "_reason": "deprecated",
            "_replacement": "034 143"
          },
          "064": {
            "_reason": "overlong",
            "_replacement": "BT"
          },
          "068": {
            "_reason": "overlong",
            "_replacement": "BO"
          },
          "070": {
            "_reason": "overlong",
            "_replacement": "BA"
          },
          "072": {
            "_reason": "overlong",
            "_replacement": "BW"
          },
          "074": {
            "_reason": "overlong",
            "_replacement": "BV"
          },
          "076": {
            "_reason": "overlong",
            "_replacement": "BR"
          },
          "084": {
            "_reason": "overlong",
            "_replacement": "BZ"
          },
          "086": {
            "_reason": "overlong",
            "_replacement": "IO"
          },
          "090": {
            "_reason": "overlong",
            "_replacement": "SB"
          },
          "092": {
            "_reason": "overlong",
            "_replacement": "VG"
          },
          "096": {
            "_reason": "overlong",
            "_replacement": "BN"
          },
          "100": {
            "_reason": "overlong",
            "_replacement": "BG"
          },
          "104": {
            "_reason": "overlong",
            "_replacement": "MM"
          },
          "108": {
            "_reason": "overlong",
            "_replacement": "BI"
          },
          "112": {
            "_reason": "overlong",
            "_replacement": "BY"
          },
          "116": {
            "_reason": "overlong",
            "_replacement": "KH"
          },
          "120": {
            "_reason": "overlong",
            "_replacement": "CM"
          },
          "124": {
            "_reason": "overlong",
            "_replacement": "CA"
          },
          "132": {
            "_reason": "overlong",
            "_replacement": "CV"
          },
          "136": {
            "_reason": "overlong",
            "_replacement": "KY"
          },
          "140": {
            "_reason": "overlong",
            "_replacement": "CF"
          },
          "144": {
            "_reason": "overlong",
            "_replacement": "LK"
          },
          "148": {
            "_reason": "overlong",
            "_replacement": "TD"
          },
          "152": {
            "_reason": "overlong",
            "_replacement": "CL"
          },
          "156": {
            "_reason": "overlong",
            "_replacement": "CN"
          },
          "158": {
            "_reason": "overlong",
            "_replacement": "TW"
          },
          "162": {
            "_reason": "overlong",
            "_replacement": "CX"
          },
          "166": {
            "_reason": "overlong",
            "_replacement": "CC"
          },
          "170": {
            "_reason": "overlong",
            "_replacement": "CO"
          },
          "172": {
            "_reason": "deprecated",
            "_replacement": "RU AM AZ BY GE KG KZ MD TJ TM UA UZ"
          },
          "174": {
            "_reason": "overlong",
            "_replacement": "KM"
          },
          "175": {
            "_reason": "overlong",
            "_replacement": "YT"
          },
          "178": {
            "_reason": "overlong",
            "_replacement": "CG"
          },
          "180": {
            "_reason": "overlong",
            "_replacement": "CD"
          },
          "184": {
            "_reason": "overlong",
            "_replacement": "CK"
          },
          "188": {
            "_reason": "overlong",
            "_replacement": "CR"
          },
          "191": {
            "_reason": "overlong",
            "_replacement": "HR"
          },
          "192": {
            "_reason": "overlong",
            "_replacement": "CU"
          },
          "196": {
            "_reason": "overlong",
            "_replacement": "CY"
          },
          "200": {
            "_reason": "deprecated",
            "_replacement": "CZ SK"
          },
          "203": {
            "_reason": "overlong",
            "_replacement": "CZ"
          },
          "204": {
            "_reason": "overlong",
            "_replacement": "BJ"
          },
          "208": {
            "_reason": "overlong",
            "_replacement": "DK"
          },
          "212": {
            "_reason": "overlong",
            "_replacement": "DM"
          },
          "214": {
            "_reason": "overlong",
            "_replacement": "DO"
          },
          "218": {
            "_reason": "overlong",
            "_replacement": "EC"
          },
          "222": {
            "_reason": "overlong",
            "_replacement": "SV"
          },
          "226": {
            "_reason": "overlong",
            "_replacement": "GQ"
          },
          "230": {
            "_reason": "deprecated",
            "_replacement": "ET"
          },
          "231": {
            "_reason": "overlong",
            "_replacement": "ET"
          },
          "232": {
            "_reason": "overlong",
            "_replacement": "ER"
          },
          "233": {
            "_reason": "overlong",
            "_replacement": "EE"
          },
          "234": {
            "_reason": "overlong",
            "_replacement": "FO"
          },
          "238": {
            "_reason": "overlong",
            "_replacement": "FK"
          },
          "239": {
            "_reason": "overlong",
            "_replacement": "GS"
          },
          "242": {
            "_reason": "overlong",
            "_replacement": "FJ"
          },
          "246": {
            "_reason": "overlong",
            "_replacement": "FI"
          },
          "248": {
            "_reason": "overlong",
            "_replacement": "AX"
          },
          "249": {
            "_reason": "overlong",
            "_replacement": "FR"
          },
          "250": {
            "_reason": "overlong",
            "_replacement": "FR"
          },
          "254": {
            "_reason": "overlong",
            "_replacement": "GF"
          },
          "258": {
            "_reason": "overlong",
            "_replacement": "PF"
          },
          "260": {
            "_reason": "overlong",
            "_replacement": "TF"
          },
          "262": {
            "_reason": "overlong",
            "_replacement": "DJ"
          },
          "266": {
            "_reason": "overlong",
            "_replacement": "GA"
          },
          "268": {
            "_reason": "overlong",
            "_replacement": "GE"
          },
          "270": {
            "_reason": "overlong",
            "_replacement": "GM"
          },
          "275": {
            "_reason": "overlong",
            "_replacement": "PS"
          },
          "276": {
            "_reason": "overlong",
            "_replacement": "DE"
          },
          "278": {
            "_reason": "overlong",
            "_replacement": "DE"
          },
          "280": {
            "_reason": "deprecated",
            "_replacement": "DE"
          },
          "288": {
            "_reason": "overlong",
            "_replacement": "GH"
          },
          "292": {
            "_reason": "overlong",
            "_replacement": "GI"
          },
          "296": {
            "_reason": "overlong",
            "_replacement": "KI"
          },
          "300": {
            "_reason": "overlong",
            "_replacement": "GR"
          },
          "304": {
            "_reason": "overlong",
            "_replacement": "GL"
          },
          "308": {
            "_reason": "overlong",
            "_replacement": "GD"
          },
          "312": {
            "_reason": "overlong",
            "_replacement": "GP"
          },
          "316": {
            "_reason": "overlong",
            "_replacement": "GU"
          },
          "320": {
            "_reason": "overlong",
            "_replacement": "GT"
          },
          "324": {
            "_reason": "overlong",
            "_replacement": "GN"
          },
          "328": {
            "_reason": "overlong",
            "_replacement": "GY"
          },
          "332": {
            "_reason": "overlong",
            "_replacement": "HT"
          },
          "334": {
            "_reason": "overlong",
            "_replacement": "HM"
          },
          "336": {
            "_reason": "overlong",
            "_replacement": "VA"
          },
          "340": {
            "_reason": "overlong",
            "_replacement": "HN"
          },
          "344": {
            "_reason": "overlong",
            "_replacement": "HK"
          },
          "348": {
            "_reason": "overlong",
            "_replacement": "HU"
          },
          "352": {
            "_reason": "overlong",
            "_replacement": "IS"
          },
          "356": {
            "_reason": "overlong",
            "_replacement": "IN"
          },
          "360": {
            "_reason": "overlong",
            "_replacement": "ID"
          },
          "364": {
            "_reason": "overlong",
            "_replacement": "IR"
          },
          "368": {
            "_reason": "overlong",
            "_replacement": "IQ"
          },
          "372": {
            "_reason": "overlong",
            "_replacement": "IE"
          },
          "376": {
            "_reason": "overlong",
            "_replacement": "IL"
          },
          "380": {
            "_reason": "overlong",
            "_replacement": "IT"
          },
          "384": {
            "_reason": "overlong",
            "_replacement": "CI"
          },
          "388": {
            "_reason": "overlong",
            "_replacement": "JM"
          },
          "392": {
            "_reason": "overlong",
            "_replacement": "JP"
          },
          "398": {
            "_reason": "overlong",
            "_replacement": "KZ"
          },
          "400": {
            "_reason": "overlong",
            "_replacement": "JO"
          },
          "404": {
            "_reason": "overlong",
            "_replacement": "KE"
          },
          "408": {
            "_reason": "overlong",
            "_replacement": "KP"
          },
          "410": {
            "_reason": "overlong",
            "_replacement": "KR"
          },
          "414": {
            "_reason": "overlong",
            "_replacement": "KW"
          },
          "417": {
            "_reason": "overlong",
            "_replacement": "KG"
          },
          "418": {
            "_reason": "overlong",
            "_replacement": "LA"
          },
          "422": {
            "_reason": "overlong",
            "_replacement": "LB"
          },
          "426": {
            "_reason": "overlong",
            "_replacement": "LS"
          },
          "428": {
            "_reason": "overlong",
            "_replacement": "LV"
          },
          "430": {
            "_reason": "overlong",
            "_replacement": "LR"
          },
          "434": {
            "_reason": "overlong",
            "_replacement": "LY"
          },
          "438": {
            "_reason": "overlong",
            "_replacement": "LI"
          },
          "440": {
            "_reason": "overlong",
            "_replacement": "LT"
          },
          "442": {
            "_reason": "overlong",
            "_replacement": "LU"
          },
          "446": {
            "_reason": "overlong",
            "_replacement": "MO"
          },
          "450": {
            "_reason": "overlong",
            "_replacement": "MG"
          },
          "454": {
            "_reason": "overlong",
            "_replacement": "MW"
          },
          "458": {
            "_reason": "overlong",
            "_replacement": "MY"
          },
          "462": {
            "_reason": "overlong",
            "_replacement": "MV"
          },
          "466": {
            "_reason": "overlong",
            "_replacement": "ML"
          },
          "470": {
            "_reason": "overlong",
            "_replacement": "MT"
          },
          "474": {
            "_reason": "overlong",
            "_replacement": "MQ"
          },
          "478": {
            "_reason": "overlong",
            "_replacement": "MR"
          },
          "480": {
            "_reason": "overlong",
            "_replacement": "MU"
          },
          "484": {
            "_reason": "overlong",
            "_replacement": "MX"
          },
          "492": {
            "_reason": "overlong",
            "_replacement": "MC"
          },
          "496": {
            "_reason": "overlong",
            "_replacement": "MN"
          },
          "498": {
            "_reason": "overlong",
            "_replacement": "MD"
          },
          "499": {
            "_reason": "overlong",
            "_replacement": "ME"
          },
          "500": {
            "_reason": "overlong",
            "_replacement": "MS"
          },
          "504": {
            "_reason": "overlong",
            "_replacement": "MA"
          },
          "508": {
            "_reason": "overlong",
            "_replacement": "MZ"
          },
          "512": {
            "_reason": "overlong",
            "_replacement": "OM"
          },
          "516": {
            "_reason": "overlong",
            "_replacement": "NA"
          },
          "520": {
            "_reason": "overlong",
            "_replacement": "NR"
          },
          "524": {
            "_reason": "overlong",
            "_replacement": "NP"
          },
          "528": {
            "_reason": "overlong",
            "_replacement": "NL"
          },
          "530": {
            "_reason": "overlong",
            "_replacement": "CW SX BQ"
          },
          "531": {
            "_reason": "overlong",
            "_replacement": "CW"
          },
          "532": {
            "_reason": "deprecated",
            "_replacement": "CW SX BQ"
          },
          "533": {
            "_reason": "overlong",
            "_replacement": "AW"
          },
          "534": {
            "_reason": "overlong",
            "_replacement": "SX"
          },
          "535": {
            "_reason": "overlong",
            "_replacement": "BQ"
          },
          "536": {
            "_reason": "overlong",
            "_replacement": "SA IQ"
          },
          "540": {
            "_reason": "overlong",
            "_replacement": "NC"
          },
          "548": {
            "_reason": "overlong",
            "_replacement": "VU"
          },
          "554": {
            "_reason": "overlong",
            "_replacement": "NZ"
          },
          "558": {
            "_reason": "overlong",
            "_replacement": "NI"
          },
          "562": {
            "_reason": "overlong",
            "_replacement": "NE"
          },
          "566": {
            "_reason": "overlong",
            "_replacement": "NG"
          },
          "570": {
            "_reason": "overlong",
            "_replacement": "NU"
          },
          "574": {
            "_reason": "overlong",
            "_replacement": "NF"
          },
          "578": {
            "_reason": "overlong",
            "_replacement": "NO"
          },
          "580": {
            "_reason": "overlong",
            "_replacement": "MP"
          },
          "581": {
            "_reason": "overlong",
            "_replacement": "UM"
          },
          "582": {
            "_reason": "deprecated",
            "_replacement": "FM MH MP PW"
          },
          "583": {
            "_reason": "overlong",
            "_replacement": "FM"
          },
          "584": {
            "_reason": "overlong",
            "_replacement": "MH"
          },
          "585": {
            "_reason": "overlong",
            "_replacement": "PW"
          },
          "586": {
            "_reason": "overlong",
            "_replacement": "PK"
          },
          "591": {
            "_reason": "overlong",
            "_replacement": "PA"
          },
          "598": {
            "_reason": "overlong",
            "_replacement": "PG"
          },
          "600": {
            "_reason": "overlong",
            "_replacement": "PY"
          },
          "604": {
            "_reason": "overlong",
            "_replacement": "PE"
          },
          "608": {
            "_reason": "overlong",
            "_replacement": "PH"
          },
          "612": {
            "_reason": "overlong",
            "_replacement": "PN"
          },
          "616": {
            "_reason": "overlong",
            "_replacement": "PL"
          },
          "620": {
            "_reason": "overlong",
            "_replacement": "PT"
          },
          "624": {
            "_reason": "overlong",
            "_replacement": "GW"
          },
          "626": {
            "_reason": "overlong",
            "_replacement": "TL"
          },
          "630": {
            "_reason": "overlong",
            "_replacement": "PR"
          },
          "634": {
            "_reason": "overlong",
            "_replacement": "QA"
          },
          "638": {
            "_reason": "overlong",
            "_replacement": "RE"
          },
          "642": {
            "_reason": "overlong",
            "_replacement": "RO"
          },
          "643": {
            "_reason": "overlong",
            "_replacement": "RU"
          },
          "646": {
            "_reason": "overlong",
            "_replacement": "RW"
          },
          "652": {
            "_reason": "overlong",
            "_replacement": "BL"
          },
          "654": {
            "_reason": "overlong",
            "_replacement": "SH"
          },
          "659": {
            "_reason": "overlong",
            "_replacement": "KN"
          },
          "660": {
            "_reason": "overlong",
            "_replacement": "AI"
          },
          "662": {
            "_reason": "overlong",
            "_replacement": "LC"
          },
          "663": {
            "_reason": "overlong",
            "_replacement": "MF"
          },
          "666": {
            "_reason": "overlong",
            "_replacement": "PM"
          },
          "670": {
            "_reason": "overlong",
            "_replacement": "VC"
          },
          "674": {
            "_reason": "overlong",
            "_replacement": "SM"
          },
          "678": {
            "_reason": "overlong",
            "_replacement": "ST"
          },
          "682": {
            "_reason": "overlong",
            "_replacement": "SA"
          },
          "686": {
            "_reason": "overlong",
            "_replacement": "SN"
          },
          "688": {
            "_reason": "overlong",
            "_replacement": "RS"
          },
          "690": {
            "_reason": "overlong",
            "_replacement": "SC"
          },
          "694": {
            "_reason": "overlong",
            "_replacement": "SL"
          },
          "702": {
            "_reason": "overlong",
            "_replacement": "SG"
          },
          "703": {
            "_reason": "overlong",
            "_replacement": "SK"
          },
          "704": {
            "_reason": "overlong",
            "_replacement": "VN"
          },
          "705": {
            "_reason": "overlong",
            "_replacement": "SI"
          },
          "706": {
            "_reason": "overlong",
            "_replacement": "SO"
          },
          "710": {
            "_reason": "overlong",
            "_replacement": "ZA"
          },
          "716": {
            "_reason": "overlong",
            "_replacement": "ZW"
          },
          "720": {
            "_reason": "overlong",
            "_replacement": "YE"
          },
          "724": {
            "_reason": "overlong",
            "_replacement": "ES"
          },
          "728": {
            "_reason": "overlong",
            "_replacement": "SS"
          },
          "729": {
            "_reason": "overlong",
            "_replacement": "SD"
          },
          "732": {
            "_reason": "overlong",
            "_replacement": "EH"
          },
          "736": {
            "_reason": "deprecated",
            "_replacement": "SD"
          },
          "740": {
            "_reason": "overlong",
            "_replacement": "SR"
          },
          "744": {
            "_reason": "overlong",
            "_replacement": "SJ"
          },
          "748": {
            "_reason": "overlong",
            "_replacement": "SZ"
          },
          "752": {
            "_reason": "overlong",
            "_replacement": "SE"
          },
          "756": {
            "_reason": "overlong",
            "_replacement": "CH"
          },
          "760": {
            "_reason": "overlong",
            "_replacement": "SY"
          },
          "762": {
            "_reason": "overlong",
            "_replacement": "TJ"
          },
          "764": {
            "_reason": "overlong",
            "_replacement": "TH"
          },
          "768": {
            "_reason": "overlong",
            "_replacement": "TG"
          },
          "772": {
            "_reason": "overlong",
            "_replacement": "TK"
          },
          "776": {
            "_reason": "overlong",
            "_replacement": "TO"
          },
          "780": {
            "_reason": "overlong",
            "_replacement": "TT"
          },
          "784": {
            "_reason": "overlong",
            "_replacement": "AE"
          },
          "788": {
            "_reason": "overlong",
            "_replacement": "TN"
          },
          "792": {
            "_reason": "overlong",
            "_replacement": "TR"
          },
          "795": {
            "_reason": "overlong",
            "_replacement": "TM"
          },
          "796": {
            "_reason": "overlong",
            "_replacement": "TC"
          },
          "798": {
            "_reason": "overlong",
            "_replacement": "TV"
          },
          "800": {
            "_reason": "overlong",
            "_replacement": "UG"
          },
          "804": {
            "_reason": "overlong",
            "_replacement": "UA"
          },
          "807": {
            "_reason": "overlong",
            "_replacement": "MK"
          },
          "810": {
            "_reason": "overlong",
            "_replacement": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ"
          },
          "818": {
            "_reason": "overlong",
            "_replacement": "EG"
          },
          "826": {
            "_reason": "overlong",
            "_replacement": "GB"
          },
          "830": {
            "_reason": "deprecated",
            "_replacement": "JE GG"
          },
          "831": {
            "_reason": "overlong",
            "_replacement": "GG"
          },
          "832": {
            "_reason": "overlong",
            "_replacement": "JE"
          },
          "833": {
            "_reason": "overlong",
            "_replacement": "IM"
          },
          "834": {
            "_reason": "overlong",
            "_replacement": "TZ"
          },
          "840": {
            "_reason": "overlong",
            "_replacement": "US"
          },
          "850": {
            "_reason": "overlong",
            "_replacement": "VI"
          },
          "854": {
            "_reason": "overlong",
            "_replacement": "BF"
          },
          "858": {
            "_reason": "overlong",
            "_replacement": "UY"
          },
          "860": {
            "_reason": "overlong",
            "_replacement": "UZ"
          },
          "862": {
            "_reason": "overlong",
            "_replacement": "VE"
          },
          "876": {
            "_reason": "overlong",
            "_replacement": "WF"
          },
          "882": {
            "_reason": "overlong",
            "_replacement": "WS"
          },
          "886": {
            "_reason": "deprecated",
            "_replacement": "YE"
          },
          "887": {
            "_reason": "overlong",
            "_replacement": "YE"
          },
          "890": {
            "_reason": "deprecated",
            "_replacement": "RS ME SI HR MK BA"
          },
          "891": {
            "_reason": "overlong",
            "_replacement": "RS ME"
          },
          "894": {
            "_reason": "overlong",
            "_replacement": "ZM"
          },
          "958": {
            "_reason": "overlong",
            "_replacement": "AA"
          },
          "959": {
            "_reason": "overlong",
            "_replacement": "QM"
          },
          "960": {
            "_reason": "overlong",
            "_replacement": "QN"
          },
          "962": {
            "_reason": "overlong",
            "_replacement": "QP"
          },
          "963": {
            "_reason": "overlong",
            "_replacement": "QQ"
          },
          "964": {
            "_reason": "overlong",
            "_replacement": "QR"
          },
          "965": {
            "_reason": "overlong",
            "_replacement": "QS"
          },
          "966": {
            "_reason": "overlong",
            "_replacement": "QT"
          },
          "967": {
            "_reason": "overlong",
            "_replacement": "EU"
          },
          "968": {
            "_reason": "overlong",
            "_replacement": "QV"
          },
          "969": {
            "_reason": "overlong",
            "_replacement": "QW"
          },
          "970": {
            "_reason": "overlong",
            "_replacement": "QX"
          },
          "971": {
            "_reason": "overlong",
            "_replacement": "QY"
          },
          "972": {
            "_reason": "overlong",
            "_replacement": "QZ"
          },
          "973": {
            "_reason": "overlong",
            "_replacement": "XA"
          },
          "974": {
            "_reason": "overlong",
            "_replacement": "XB"
          },
          "975": {
            "_reason": "overlong",
            "_replacement": "XC"
          },
          "976": {
            "_reason": "overlong",
            "_replacement": "XD"
          },
          "977": {
            "_reason": "overlong",
            "_replacement": "XE"
          },
          "978": {
            "_reason": "overlong",
            "_replacement": "XF"
          },
          "979": {
            "_reason": "overlong",
            "_replacement": "XG"
          },
          "980": {
            "_reason": "overlong",
            "_replacement": "XH"
          },
          "981": {
            "_reason": "overlong",
            "_replacement": "XI"
          },
          "982": {
            "_reason": "overlong",
            "_replacement": "XJ"
          },
          "983": {
            "_reason": "overlong",
            "_replacement": "XK"
          },
          "984": {
            "_reason": "overlong",
            "_replacement": "XL"
          },
          "985": {
            "_reason": "overlong",
            "_replacement": "XM"
          },
          "986": {
            "_reason": "overlong",
            "_replacement": "XN"
          },
          "987": {
            "_reason": "overlong",
            "_replacement": "XO"
          },
          "988": {
            "_reason": "overlong",
            "_replacement": "XP"
          },
          "989": {
            "_reason": "overlong",
            "_replacement": "XQ"
          },
          "990": {
            "_reason": "overlong",
            "_replacement": "XR"
          },
          "991": {
            "_reason": "overlong",
            "_replacement": "XS"
          },
          "992": {
            "_reason": "overlong",
            "_replacement": "XT"
          },
          "993": {
            "_reason": "overlong",
            "_replacement": "XU"
          },
          "994": {
            "_reason": "overlong",
            "_replacement": "XV"
          },
          "995": {
            "_reason": "overlong",
            "_replacement": "XW"
          },
          "996": {
            "_reason": "overlong",
            "_replacement": "XX"
          },
          "997": {
            "_reason": "overlong",
            "_replacement": "XY"
          },
          "998": {
            "_reason": "overlong",
            "_replacement": "XZ"
          },
          "999": {
            "_reason": "overlong",
            "_replacement": "ZZ"
          },
          "AAA": {
            "_reason": "overlong",
            "_replacement": "AA"
          },
          "ABW": {
            "_reason": "overlong",
            "_replacement": "AW"
          },
          "AFG": {
            "_reason": "overlong",
            "_replacement": "AF"
          },
          "AGO": {
            "_reason": "overlong",
            "_replacement": "AO"
          },
          "AIA": {
            "_reason": "overlong",
            "_replacement": "AI"
          },
          "ALA": {
            "_reason": "overlong",
            "_replacement": "AX"
          },
          "ALB": {
            "_reason": "overlong",
            "_replacement": "AL"
          },
          "AN": {
            "_reason": "deprecated",
            "_replacement": "CW SX BQ"
          },
          "AND": {
            "_reason": "overlong",
            "_replacement": "AD"
          },
          "ANT": {
            "_reason": "overlong",
            "_replacement": "CW SX BQ"
          },
          "ARE": {
            "_reason": "overlong",
            "_replacement": "AE"
          },
          "ARG": {
            "_reason": "overlong",
            "_replacement": "AR"
          },
          "ARM": {
            "_reason": "overlong",
            "_replacement": "AM"
          },
          "ASC": {
            "_reason": "overlong",
            "_replacement": "AC"
          },
          "ASM": {
            "_reason": "overlong",
            "_replacement": "AS"
          },
          "ATA": {
            "_reason": "overlong",
            "_replacement": "AQ"
          },
          "ATF": {
            "_reason": "overlong",
            "_replacement": "TF"
          },
          "ATG": {
            "_reason": "overlong",
            "_replacement": "AG"
          },
          "AUS": {
            "_reason": "overlong",
            "_replacement": "AU"
          },
          "AUT": {
            "_reason": "overlong",
            "_replacement": "AT"
          },
          "AZE": {
            "_reason": "overlong",
            "_replacement": "AZ"
          },
          "BDI": {
            "_reason": "overlong",
            "_replacement": "BI"
          },
          "BEL": {
            "_reason": "overlong",
            "_replacement": "BE"
          },
          "BEN": {
            "_reason": "overlong",
            "_replacement": "BJ"
          },
          "BES": {
            "_reason": "overlong",
            "_replacement": "BQ"
          },
          "BFA": {
            "_reason": "overlong",
            "_replacement": "BF"
          },
          "BGD": {
            "_reason": "overlong",
            "_replacement": "BD"
          },
          "BGR": {
            "_reason": "overlong",
            "_replacement": "BG"
          },
          "BHR": {
            "_reason": "overlong",
            "_replacement": "BH"
          },
          "BHS": {
            "_reason": "overlong",
            "_replacement": "BS"
          },
          "BIH": {
            "_reason": "overlong",
            "_replacement": "BA"
          },
          "BLM": {
            "_reason": "overlong",
            "_replacement": "BL"
          },
          "BLR": {
            "_reason": "overlong",
            "_replacement": "BY"
          },
          "BLZ": {
            "_reason": "overlong",
            "_replacement": "BZ"
          },
          "BMU": {
            "_reason": "overlong",
            "_replacement": "BM"
          },
          "BOL": {
            "_reason": "overlong",
            "_replacement": "BO"
          },
          "BRA": {
            "_reason": "overlong",
            "_replacement": "BR"
          },
          "BRB": {
            "_reason": "overlong",
            "_replacement": "BB"
          },
          "BRN": {
            "_reason": "overlong",
            "_replacement": "BN"
          },
          "BTN": {
            "_reason": "overlong",
            "_replacement": "BT"
          },
          "BU": {
            "_reason": "deprecated",
            "_replacement": "MM"
          },
          "BUR": {
            "_reason": "overlong",
            "_replacement": "MM"
          },
          "BVT": {
            "_reason": "overlong",
            "_replacement": "BV"
          },
          "BWA": {
            "_reason": "overlong",
            "_replacement": "BW"
          },
          "CAF": {
            "_reason": "overlong",
            "_replacement": "CF"
          },
          "CAN": {
            "_reason": "overlong",
            "_replacement": "CA"
          },
          "CCK": {
            "_reason": "overlong",
            "_replacement": "CC"
          },
          "CHE": {
            "_reason": "overlong",
            "_replacement": "CH"
          },
          "CHL": {
            "_reason": "overlong",
            "_replacement": "CL"
          },
          "CHN": {
            "_reason": "overlong",
            "_replacement": "CN"
          },
          "CIV": {
            "_reason": "overlong",
            "_replacement": "CI"
          },
          "CMR": {
            "_reason": "overlong",
            "_replacement": "CM"
          },
          "COD": {
            "_reason": "overlong",
            "_replacement": "CD"
          },
          "COG": {
            "_reason": "overlong",
            "_replacement": "CG"
          },
          "COK": {
            "_reason": "overlong",
            "_replacement": "CK"
          },
          "COL": {
            "_reason": "overlong",
            "_replacement": "CO"
          },
          "COM": {
            "_reason": "overlong",
            "_replacement": "KM"
          },
          "CPT": {
            "_reason": "overlong",
            "_replacement": "CP"
          },
          "CPV": {
            "_reason": "overlong",
            "_replacement": "CV"
          },
          "CRI": {
            "_reason": "overlong",
            "_replacement": "CR"
          },
          "CS": {
            "_reason": "deprecated",
            "_replacement": "RS ME"
          },
          "CT": {
            "_reason": "deprecated",
            "_replacement": "KI"
          },
          "CUB": {
            "_reason": "overlong",
            "_replacement": "CU"
          },
          "CUW": {
            "_reason": "overlong",
            "_replacement": "CW"
          },
          "CXR": {
            "_reason": "overlong",
            "_replacement": "CX"
          },
          "CYM": {
            "_reason": "overlong",
            "_replacement": "KY"
          },
          "CYP": {
            "_reason": "overlong",
            "_replacement": "CY"
          },
          "CZE": {
            "_reason": "overlong",
            "_replacement": "CZ"
          },
          "DD": {
            "_reason": "deprecated",
            "_replacement": "DE"
          },
          "DDR": {
            "_reason": "overlong",
            "_replacement": "DE"
          },
          "DEU": {
            "_reason": "overlong",
            "_replacement": "DE"
          },
          "DGA": {
            "_reason": "overlong",
            "_replacement": "DG"
          },
          "DJI": {
            "_reason": "overlong",
            "_replacement": "DJ"
          },
          "DMA": {
            "_reason": "overlong",
            "_replacement": "DM"
          },
          "DNK": {
            "_reason": "overlong",
            "_replacement": "DK"
          },
          "DOM": {
            "_reason": "overlong",
            "_replacement": "DO"
          },
          "DY": {
            "_reason": "deprecated",
            "_replacement": "BJ"
          },
          "DZA": {
            "_reason": "overlong",
            "_replacement": "DZ"
          },
          "ECU": {
            "_reason": "overlong",
            "_replacement": "EC"
          },
          "EGY": {
            "_reason": "overlong",
            "_replacement": "EG"
          },
          "ERI": {
            "_reason": "overlong",
            "_replacement": "ER"
          },
          "ESH": {
            "_reason": "overlong",
            "_replacement": "EH"
          },
          "ESP": {
            "_reason": "overlong",
            "_replacement": "ES"
          },
          "EST": {
            "_reason": "overlong",
            "_replacement": "EE"
          },
          "ETH": {
            "_reason": "overlong",
            "_replacement": "ET"
          },
          "FIN": {
            "_reason": "overlong",
            "_replacement": "FI"
          },
          "FJI": {
            "_reason": "overlong",
            "_replacement": "FJ"
          },
          "FLK": {
            "_reason": "overlong",
            "_replacement": "FK"
          },
          "FQ": {
            "_reason": "deprecated",
            "_replacement": "AQ TF"
          },
          "FRA": {
            "_reason": "overlong",
            "_replacement": "FR"
          },
          "FRO": {
            "_reason": "overlong",
            "_replacement": "FO"
          },
          "FSM": {
            "_reason": "overlong",
            "_replacement": "FM"
          },
          "FX": {
            "_reason": "deprecated",
            "_replacement": "FR"
          },
          "FXX": {
            "_reason": "overlong",
            "_replacement": "FR"
          },
          "GAB": {
            "_reason": "overlong",
            "_replacement": "GA"
          },
          "GBR": {
            "_reason": "overlong",
            "_replacement": "GB"
          },
          "GEO": {
            "_reason": "overlong",
            "_replacement": "GE"
          },
          "GGY": {
            "_reason": "overlong",
            "_replacement": "GG"
          },
          "GHA": {
            "_reason": "overlong",
            "_replacement": "GH"
          },
          "GIB": {
            "_reason": "overlong",
            "_replacement": "GI"
          },
          "GIN": {
            "_reason": "overlong",
            "_replacement": "GN"
          },
          "GLP": {
            "_reason": "overlong",
            "_replacement": "GP"
          },
          "GMB": {
            "_reason": "overlong",
            "_replacement": "GM"
          },
          "GNB": {
            "_reason": "overlong",
            "_replacement": "GW"
          },
          "GNQ": {
            "_reason": "overlong",
            "_replacement": "GQ"
          },
          "GRC": {
            "_reason": "overlong",
            "_replacement": "GR"
          },
          "GRD": {
            "_reason": "overlong",
            "_replacement": "GD"
          },
          "GRL": {
            "_reason": "overlong",
            "_replacement": "GL"
          },
          "GTM": {
            "_reason": "overlong",
            "_replacement": "GT"
          },
          "GUF": {
            "_reason": "overlong",
            "_replacement": "GF"
          },
          "GUM": {
            "_reason": "overlong",
            "_replacement": "GU"
          },
          "GUY": {
            "_reason": "overlong",
            "_replacement": "GY"
          },
          "HKG": {
            "_reason": "overlong",
            "_replacement": "HK"
          },
          "HMD": {
            "_reason": "overlong",
            "_replacement": "HM"
          },
          "HND": {
            "_reason": "overlong",
            "_replacement": "HN"
          },
          "HRV": {
            "_reason": "overlong",
            "_replacement": "HR"
          },
          "HTI": {
            "_reason": "overlong",
            "_replacement": "HT"
          },
          "HUN": {
            "_reason": "overlong",
            "_replacement": "HU"
          },
          "HV": {
            "_reason": "deprecated",
            "_replacement": "BF"
          },
          "IDN": {
            "_reason": "overlong",
            "_replacement": "ID"
          },
          "IMN": {
            "_reason": "overlong",
            "_replacement": "IM"
          },
          "IND": {
            "_reason": "overlong",
            "_replacement": "IN"
          },
          "IOT": {
            "_reason": "overlong",
            "_replacement": "IO"
          },
          "IRL": {
            "_reason": "overlong",
            "_replacement": "IE"
          },
          "IRN": {
            "_reason": "overlong",
            "_replacement": "IR"
          },
          "IRQ": {
            "_reason": "overlong",
            "_replacement": "IQ"
          },
          "ISL": {
            "_reason": "overlong",
            "_replacement": "IS"
          },
          "ISR": {
            "_reason": "overlong",
            "_replacement": "IL"
          },
          "ITA": {
            "_reason": "overlong",
            "_replacement": "IT"
          },
          "JAM": {
            "_reason": "overlong",
            "_replacement": "JM"
          },
          "JEY": {
            "_reason": "overlong",
            "_replacement": "JE"
          },
          "JOR": {
            "_reason": "overlong",
            "_replacement": "JO"
          },
          "JPN": {
            "_reason": "overlong",
            "_replacement": "JP"
          },
          "JT": {
            "_reason": "deprecated",
            "_replacement": "UM"
          },
          "KAZ": {
            "_reason": "overlong",
            "_replacement": "KZ"
          },
          "KEN": {
            "_reason": "overlong",
            "_replacement": "KE"
          },
          "KGZ": {
            "_reason": "overlong",
            "_replacement": "KG"
          },
          "KHM": {
            "_reason": "overlong",
            "_replacement": "KH"
          },
          "KIR": {
            "_reason": "overlong",
            "_replacement": "KI"
          },
          "KNA": {
            "_reason": "overlong",
            "_replacement": "KN"
          },
          "KOR": {
            "_reason": "overlong",
            "_replacement": "KR"
          },
          "KWT": {
            "_reason": "overlong",
            "_replacement": "KW"
          },
          "LAO": {
            "_reason": "overlong",
            "_replacement": "LA"
          },
          "LBN": {
            "_reason": "overlong",
            "_replacement": "LB"
          },
          "LBR": {
            "_reason": "overlong",
            "_replacement": "LR"
          },
          "LBY": {
            "_reason": "overlong",
            "_replacement": "LY"
          },
          "LCA": {
            "_reason": "overlong",
            "_replacement": "LC"
          },
          "LIE": {
            "_reason": "overlong",
            "_replacement": "LI"
          },
          "LKA": {
            "_reason": "overlong",
            "_replacement": "LK"
          },
          "LSO": {
            "_reason": "overlong",
            "_replacement": "LS"
          },
          "LTU": {
            "_reason": "overlong",
            "_replacement": "LT"
          },
          "LUX": {
            "_reason": "overlong",
            "_replacement": "LU"
          },
          "LVA": {
            "_reason": "overlong",
            "_replacement": "LV"
          },
          "MAC": {
            "_reason": "overlong",
            "_replacement": "MO"
          },
          "MAF": {
            "_reason": "overlong",
            "_replacement": "MF"
          },
          "MAR": {
            "_reason": "overlong",
            "_replacement": "MA"
          },
          "MCO": {
            "_reason": "overlong",
            "_replacement": "MC"
          },
          "MDA": {
            "_reason": "overlong",
            "_replacement": "MD"
          },
          "MDG": {
            "_reason": "overlong",
            "_replacement": "MG"
          },
          "MDV": {
            "_reason": "overlong",
            "_replacement": "MV"
          },
          "MEX": {
            "_reason": "overlong",
            "_replacement": "MX"
          },
          "MHL": {
            "_reason": "overlong",
            "_replacement": "MH"
          },
          "MI": {
            "_reason": "deprecated",
            "_replacement": "UM"
          },
          "MKD": {
            "_reason": "overlong",
            "_replacement": "MK"
          },
          "MLI": {
            "_reason": "overlong",
            "_replacement": "ML"
          },
          "MLT": {
            "_reason": "overlong",
            "_replacement": "MT"
          },
          "MMR": {
            "_reason": "overlong",
            "_replacement": "MM"
          },
          "MNE": {
            "_reason": "overlong",
            "_replacement": "ME"
          },
          "MNG": {
            "_reason": "overlong",
            "_replacement": "MN"
          },
          "MNP": {
            "_reason": "overlong",
            "_replacement": "MP"
          },
          "MOZ": {
            "_reason": "overlong",
            "_replacement": "MZ"
          },
          "MRT": {
            "_reason": "overlong",
            "_replacement": "MR"
          },
          "MSR": {
            "_reason": "overlong",
            "_replacement": "MS"
          },
          "MTQ": {
            "_reason": "overlong",
            "_replacement": "MQ"
          },
          "MUS": {
            "_reason": "overlong",
            "_replacement": "MU"
          },
          "MWI": {
            "_reason": "overlong",
            "_replacement": "MW"
          },
          "MYS": {
            "_reason": "overlong",
            "_replacement": "MY"
          },
          "MYT": {
            "_reason": "overlong",
            "_replacement": "YT"
          },
          "NAM": {
            "_reason": "overlong",
            "_replacement": "NA"
          },
          "NCL": {
            "_reason": "overlong",
            "_replacement": "NC"
          },
          "NER": {
            "_reason": "overlong",
            "_replacement": "NE"
          },
          "NFK": {
            "_reason": "overlong",
            "_replacement": "NF"
          },
          "NGA": {
            "_reason": "overlong",
            "_replacement": "NG"
          },
          "NH": {
            "_reason": "deprecated",
            "_replacement": "VU"
          },
          "NIC": {
            "_reason": "overlong",
            "_replacement": "NI"
          },
          "NIU": {
            "_reason": "overlong",
            "_replacement": "NU"
          },
          "NLD": {
            "_reason": "overlong",
            "_replacement": "NL"
          },
          "NOR": {
            "_reason": "overlong",
            "_replacement": "NO"
          },
          "NPL": {
            "_reason": "overlong",
            "_replacement": "NP"
          },
          "NQ": {
            "_reason": "deprecated",
            "_replacement": "AQ"
          },
          "NRU": {
            "_reason": "overlong",
            "_replacement": "NR"
          },
          "NT": {
            "_reason": "deprecated",
            "_replacement": "SA IQ"
          },
          "NTZ": {
            "_reason": "overlong",
            "_replacement": "SA IQ"
          },
          "NZL": {
            "_reason": "overlong",
            "_replacement": "NZ"
          },
          "OMN": {
            "_reason": "overlong",
            "_replacement": "OM"
          },
          "PAK": {
            "_reason": "overlong",
            "_replacement": "PK"
          },
          "PAN": {
            "_reason": "overlong",
            "_replacement": "PA"
          },
          "PC": {
            "_reason": "deprecated",
            "_replacement": "FM MH MP PW"
          },
          "PCN": {
            "_reason": "overlong",
            "_replacement": "PN"
          },
          "PER": {
            "_reason": "overlong",
            "_replacement": "PE"
          },
          "PHL": {
            "_reason": "overlong",
            "_replacement": "PH"
          },
          "PLW": {
            "_reason": "overlong",
            "_replacement": "PW"
          },
          "PNG": {
            "_reason": "overlong",
            "_replacement": "PG"
          },
          "POL": {
            "_reason": "overlong",
            "_replacement": "PL"
          },
          "PRI": {
            "_reason": "overlong",
            "_replacement": "PR"
          },
          "PRK": {
            "_reason": "overlong",
            "_replacement": "KP"
          },
          "PRT": {
            "_reason": "overlong",
            "_replacement": "PT"
          },
          "PRY": {
            "_reason": "overlong",
            "_replacement": "PY"
          },
          "PSE": {
            "_reason": "overlong",
            "_replacement": "PS"
          },
          "PU": {
            "_reason": "deprecated",
            "_replacement": "UM"
          },
          "PYF": {
            "_reason": "overlong",
            "_replacement": "PF"
          },
          "PZ": {
            "_reason": "deprecated",
            "_replacement": "PA"
          },
          "QAT": {
            "_reason": "overlong",
            "_replacement": "QA"
          },
          "QMM": {
            "_reason": "overlong",
            "_replacement": "QM"
          },
          "QNN": {
            "_reason": "overlong",
            "_replacement": "QN"
          },
          "QPP": {
            "_reason": "overlong",
            "_replacement": "QP"
          },
          "QQQ": {
            "_reason": "overlong",
            "_replacement": "QQ"
          },
          "QRR": {
            "_reason": "overlong",
            "_replacement": "QR"
          },
          "QSS": {
            "_reason": "overlong",
            "_replacement": "QS"
          },
          "QTT": {
            "_reason": "overlong",
            "_replacement": "QT"
          },
          "QU": {
            "_reason": "deprecated",
            "_replacement": "EU"
          },
          "QUU": {
            "_reason": "overlong",
            "_replacement": "EU"
          },
          "QVV": {
            "_reason": "overlong",
            "_replacement": "QV"
          },
          "QWW": {
            "_reason": "overlong",
            "_replacement": "QW"
          },
          "QXX": {
            "_reason": "overlong",
            "_replacement": "QX"
          },
          "QYY": {
            "_reason": "overlong",
            "_replacement": "QY"
          },
          "QZZ": {
            "_reason": "overlong",
            "_replacement": "QZ"
          },
          "REU": {
            "_reason": "overlong",
            "_replacement": "RE"
          },
          "RH": {
            "_reason": "deprecated",
            "_replacement": "ZW"
          },
          "ROU": {
            "_reason": "overlong",
            "_replacement": "RO"
          },
          "RUS": {
            "_reason": "overlong",
            "_replacement": "RU"
          },
          "RWA": {
            "_reason": "overlong",
            "_replacement": "RW"
          },
          "SAU": {
            "_reason": "overlong",
            "_replacement": "SA"
          },
          "SCG": {
            "_reason": "overlong",
            "_replacement": "RS ME"
          },
          "SDN": {
            "_reason": "overlong",
            "_replacement": "SD"
          },
          "SEN": {
            "_reason": "overlong",
            "_replacement": "SN"
          },
          "SGP": {
            "_reason": "overlong",
            "_replacement": "SG"
          },
          "SGS": {
            "_reason": "overlong",
            "_replacement": "GS"
          },
          "SHN": {
            "_reason": "overlong",
            "_replacement": "SH"
          },
          "SJM": {
            "_reason": "overlong",
            "_replacement": "SJ"
          },
          "SLB": {
            "_reason": "overlong",
            "_replacement": "SB"
          },
          "SLE": {
            "_reason": "overlong",
            "_replacement": "SL"
          },
          "SLV": {
            "_reason": "overlong",
            "_replacement": "SV"
          },
          "SMR": {
            "_reason": "overlong",
            "_replacement": "SM"
          },
          "SOM": {
            "_reason": "overlong",
            "_replacement": "SO"
          },
          "SPM": {
            "_reason": "overlong",
            "_replacement": "PM"
          },
          "SRB": {
            "_reason": "overlong",
            "_replacement": "RS"
          },
          "SSD": {
            "_reason": "overlong",
            "_replacement": "SS"
          },
          "STP": {
            "_reason": "overlong",
            "_replacement": "ST"
          },
          "SU": {
            "_reason": "deprecated",
            "_replacement": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ"
          },
          "SUN": {
            "_reason": "overlong",
            "_replacement": "RU AM AZ BY EE GE KZ KG LV LT MD TJ TM UA UZ"
          },
          "SUR": {
            "_reason": "overlong",
            "_replacement": "SR"
          },
          "SVK": {
            "_reason": "overlong",
            "_replacement": "SK"
          },
          "SVN": {
            "_reason": "overlong",
            "_replacement": "SI"
          },
          "SWE": {
            "_reason": "overlong",
            "_replacement": "SE"
          },
          "SWZ": {
            "_reason": "overlong",
            "_replacement": "SZ"
          },
          "SXM": {
            "_reason": "overlong",
            "_replacement": "SX"
          },
          "SYC": {
            "_reason": "overlong",
            "_replacement": "SC"
          },
          "SYR": {
            "_reason": "overlong",
            "_replacement": "SY"
          },
          "TAA": {
            "_reason": "overlong",
            "_replacement": "TA"
          },
          "TCA": {
            "_reason": "overlong",
            "_replacement": "TC"
          },
          "TCD": {
            "_reason": "overlong",
            "_replacement": "TD"
          },
          "TGO": {
            "_reason": "overlong",
            "_replacement": "TG"
          },
          "THA": {
            "_reason": "overlong",
            "_replacement": "TH"
          },
          "TJK": {
            "_reason": "overlong",
            "_replacement": "TJ"
          },
          "TKL": {
            "_reason": "overlong",
            "_replacement": "TK"
          },
          "TKM": {
            "_reason": "overlong",
            "_replacement": "TM"
          },
          "TLS": {
            "_reason": "overlong",
            "_replacement": "TL"
          },
          "TMP": {
            "_reason": "overlong",
            "_replacement": "TL"
          },
          "TON": {
            "_reason": "overlong",
            "_replacement": "TO"
          },
          "TP": {
            "_reason": "deprecated",
            "_replacement": "TL"
          },
          "TTO": {
            "_reason": "overlong",
            "_replacement": "TT"
          },
          "TUN": {
            "_reason": "overlong",
            "_replacement": "TN"
          },
          "TUR": {
            "_reason": "overlong",
            "_replacement": "TR"
          },
          "TUV": {
            "_reason": "overlong",
            "_replacement": "TV"
          },
          "TWN": {
            "_reason": "overlong",
            "_replacement": "TW"
          },
          "TZA": {
            "_reason": "overlong",
            "_replacement": "TZ"
          },
          "UGA": {
            "_reason": "overlong",
            "_replacement": "UG"
          },
          "UK": {
            "_reason": "deprecated",
            "_replacement": "GB"
          },
          "UKR": {
            "_reason": "overlong",
            "_replacement": "UA"
          },
          "UMI": {
            "_reason": "overlong",
            "_replacement": "UM"
          },
          "URY": {
            "_reason": "overlong",
            "_replacement": "UY"
          },
          "USA": {
            "_reason": "overlong",
            "_replacement": "US"
          },
          "UZB": {
            "_reason": "overlong",
            "_replacement": "UZ"
          },
          "VAT": {
            "_reason": "overlong",
            "_replacement": "VA"
          },
          "VCT": {
            "_reason": "overlong",
            "_replacement": "VC"
          },
          "VD": {
            "_reason": "deprecated",
            "_replacement": "VN"
          },
          "VEN": {
            "_reason": "overlong",
            "_replacement": "VE"
          },
          "VGB": {
            "_reason": "overlong",
            "_replacement": "VG"
          },
          "VIR": {
            "_reason": "overlong",
            "_replacement": "VI"
          },
          "VNM": {
            "_reason": "overlong",
            "_replacement": "VN"
          },
          "VUT": {
            "_reason": "overlong",
            "_replacement": "VU"
          },
          "WK": {
            "_reason": "deprecated",
            "_replacement": "UM"
          },
          "WLF": {
            "_reason": "overlong",
            "_replacement": "WF"
          },
          "WSM": {
            "_reason": "overlong",
            "_replacement": "WS"
          },
          "XAA": {
            "_reason": "overlong",
            "_replacement": "XA"
          },
          "XBB": {
            "_reason": "overlong",
            "_replacement": "XB"
          },
          "XCC": {
            "_reason": "overlong",
            "_replacement": "XC"
          },
          "XDD": {
            "_reason": "overlong",
            "_replacement": "XD"
          },
          "XEE": {
            "_reason": "overlong",
            "_replacement": "XE"
          },
          "XFF": {
            "_reason": "overlong",
            "_replacement": "XF"
          },
          "XGG": {
            "_reason": "overlong",
            "_replacement": "XG"
          },
          "XHH": {
            "_reason": "overlong",
            "_replacement": "XH"
          },
          "XII": {
            "_reason": "overlong",
            "_replacement": "XI"
          },
          "XJJ": {
            "_reason": "overlong",
            "_replacement": "XJ"
          },
          "XKK": {
            "_reason": "overlong",
            "_replacement": "XK"
          },
          "XLL": {
            "_reason": "overlong",
            "_replacement": "XL"
          },
          "XMM": {
            "_reason": "overlong",
            "_replacement": "XM"
          },
          "XNN": {
            "_reason": "overlong",
            "_replacement": "XN"
          },
          "XOO": {
            "_reason": "overlong",
            "_replacement": "XO"
          },
          "XPP": {
            "_reason": "overlong",
            "_replacement": "XP"
          },
          "XQQ": {
            "_reason": "overlong",
            "_replacement": "XQ"
          },
          "XRR": {
            "_reason": "overlong",
            "_replacement": "XR"
          },
          "XSS": {
            "_reason": "overlong",
            "_replacement": "XS"
          },
          "XTT": {
            "_reason": "overlong",
            "_replacement": "XT"
          },
          "XUU": {
            "_reason": "overlong",
            "_replacement": "XU"
          },
          "XVV": {
            "_reason": "overlong",
            "_replacement": "XV"
          },
          "XWW": {
            "_reason": "overlong",
            "_replacement": "XW"
          },
          "XXX": {
            "_reason": "overlong",
            "_replacement": "XX"
          },
          "XYY": {
            "_reason": "overlong",
            "_replacement": "XY"
          },
          "XZZ": {
            "_reason": "overlong",
            "_replacement": "XZ"
          },
          "YD": {
            "_reason": "deprecated",
            "_replacement": "YE"
          },
          "YEM": {
            "_reason": "overlong",
            "_replacement": "YE"
          },
          "YMD": {
            "_reason": "overlong",
            "_replacement": "YE"
          },
          "YU": {
            "_reason": "deprecated",
            "_replacement": "RS ME"
          },
          "YUG": {
            "_reason": "overlong",
            "_replacement": "RS ME"
          },
          "ZAF": {
            "_reason": "overlong",
            "_replacement": "ZA"
          },
          "ZAR": {
            "_reason": "overlong",
            "_replacement": "CD"
          },
          "ZMB": {
            "_reason": "overlong",
            "_replacement": "ZM"
          },
          "ZR": {
            "_reason": "deprecated",
            "_replacement": "CD"
          },
          "ZWE": {
            "_reason": "overlong",
            "_replacement": "ZW"
          },
          "ZZZ": {
            "_reason": "overlong",
            "_replacement": "ZZ"
          }
        },
        "variantAlias": {
          "AALAND": {
            "_reason": "deprecated",
            "_replacement": "AX"
          },
          "HEPLOC": {
            "_reason": "deprecated",
            "_replacement": "ALALC97"
          },
          "POLYTONI": {
            "_reason": "deprecated",
            "_replacement": "POLYTON"
          }
        },
        "zoneAlias": {
          "Africa": {
            "Timbuktu": {
              "_reason": "deprecated",
              "_replacement": "Africa/Bamako"
            }
          },
          "America": {
            "Montreal": {
              "_reason": "deprecated",
              "_replacement": "America/Toronto"
            },
            "Shiprock": {
              "_reason": "deprecated",
              "_replacement": "America/Denver"
            }
          },
          "Antarctica": {
            "South_Pole": {
              "_reason": "deprecated",
              "_replacement": "Pacific/Auckland"
            }
          },
          "Asia": {
            "Chongqing": {
              "_reason": "deprecated",
              "_replacement": "Asia/Shanghai"
            },
            "Harbin": {
              "_reason": "deprecated",
              "_replacement": "Asia/Shanghai"
            },
            "Kashgar": {
              "_reason": "deprecated",
              "_replacement": "Asia/Urumqi"
            }
          },
          "Atlantic": {
            "Jan_Mayen": {
              "_reason": "deprecated",
              "_replacement": "Europe/Oslo"
            }
          },
          "EST": {
            "_reason": "deprecated",
            "_replacement": "America/Indianapolis"
          },
          "Europe": {
            "Belfast": {
              "_reason": "deprecated",
              "_replacement": "Europe/London"
            }
          },
          "HST": {
            "_reason": "deprecated",
            "_replacement": "Pacific/Honolulu"
          },
          "MST": {
            "_reason": "deprecated",
            "_replacement": "America/Phoenix"
          },
          "Pacific": {
            "Yap": {
              "_reason": "deprecated",
              "_replacement": "Pacific/Truk"
            }
          },
          "SystemV": {
            "AST4": {
              "_reason": "deprecated",
              "_replacement": "America/Puerto_Rico"
            },
            "AST4ADT": {
              "_reason": "deprecated",
              "_replacement": "America/Halifax"
            },
            "CST6": {
              "_reason": "deprecated",
              "_replacement": "America/Regina"
            },
            "CST6CDT": {
              "_reason": "deprecated",
              "_replacement": "America/Chicago"
            },
            "EST5": {
              "_reason": "deprecated",
              "_replacement": "America/Indianapolis"
            },
            "EST5EDT": {
              "_reason": "deprecated",
              "_replacement": "America/New_York"
            },
            "HST10": {
              "_reason": "deprecated",
              "_replacement": "Pacific/Honolulu"
            },
            "MST7": {
              "_reason": "deprecated",
              "_replacement": "America/Phoenix"
            },
            "MST7MDT": {
              "_reason": "deprecated",
              "_replacement": "America/Denver"
            },
            "PST8": {
              "_reason": "deprecated",
              "_replacement": "Pacific/Pitcairn"
            },
            "PST8PDT": {
              "_reason": "deprecated",
              "_replacement": "America/Los_Angeles"
            },
            "YST9": {
              "_reason": "deprecated",
              "_replacement": "Pacific/Gambier"
            },
            "YST9YDT": {
              "_reason": "deprecated",
              "_replacement": "America/Anchorage"
            }
          }
        }
      }
    }
  }
}

},{}],4:[function(_dereq_,module,exports){
module.exports={
  "supplemental": {
    "version": {
      "_number": "$Revision: 12447 $",
      "_unicodeVersion": "8.0.0",
      "_cldrVersion": "29"
    },
    "likelySubtags": {
      "aa": "aa-Latn-ET",
      "ab": "ab-Cyrl-GE",
      "abr": "abr-Latn-GH",
      "ace": "ace-Latn-ID",
      "ach": "ach-Latn-UG",
      "ada": "ada-Latn-GH",
      "ady": "ady-Cyrl-RU",
      "ae": "ae-Avst-IR",
      "aeb": "aeb-Arab-TN",
      "af": "af-Latn-ZA",
      "agq": "agq-Latn-CM",
      "aho": "aho-Ahom-IN",
      "ak": "ak-Latn-GH",
      "akk": "akk-Xsux-IQ",
      "aln": "aln-Latn-XK",
      "alt": "alt-Cyrl-RU",
      "am": "am-Ethi-ET",
      "amo": "amo-Latn-NG",
      "aoz": "aoz-Latn-ID",
      "ar": "ar-Arab-EG",
      "arc": "arc-Armi-IR",
      "arc-Nbat": "arc-Nbat-JO",
      "arc-Palm": "arc-Palm-SY",
      "arn": "arn-Latn-CL",
      "aro": "aro-Latn-BO",
      "arq": "arq-Arab-DZ",
      "ary": "ary-Arab-MA",
      "arz": "arz-Arab-EG",
      "as": "as-Beng-IN",
      "asa": "asa-Latn-TZ",
      "ase": "ase-Sgnw-US",
      "ast": "ast-Latn-ES",
      "atj": "atj-Latn-CA",
      "av": "av-Cyrl-RU",
      "awa": "awa-Deva-IN",
      "ay": "ay-Latn-BO",
      "az": "az-Latn-AZ",
      "az-Arab": "az-Arab-IR",
      "az-IQ": "az-Arab-IQ",
      "az-IR": "az-Arab-IR",
      "az-RU": "az-Cyrl-RU",
      "ba": "ba-Cyrl-RU",
      "bal": "bal-Arab-PK",
      "ban": "ban-Latn-ID",
      "bap": "bap-Deva-NP",
      "bar": "bar-Latn-AT",
      "bas": "bas-Latn-CM",
      "bax": "bax-Bamu-CM",
      "bbc": "bbc-Latn-ID",
      "bbj": "bbj-Latn-CM",
      "bci": "bci-Latn-CI",
      "be": "be-Cyrl-BY",
      "bej": "bej-Arab-SD",
      "bem": "bem-Latn-ZM",
      "bew": "bew-Latn-ID",
      "bez": "bez-Latn-TZ",
      "bfd": "bfd-Latn-CM",
      "bfq": "bfq-Taml-IN",
      "bft": "bft-Arab-PK",
      "bfy": "bfy-Deva-IN",
      "bg": "bg-Cyrl-BG",
      "bgc": "bgc-Deva-IN",
      "bgn": "bgn-Arab-PK",
      "bgx": "bgx-Grek-TR",
      "bhb": "bhb-Deva-IN",
      "bhi": "bhi-Deva-IN",
      "bhk": "bhk-Latn-PH",
      "bho": "bho-Deva-IN",
      "bi": "bi-Latn-VU",
      "bik": "bik-Latn-PH",
      "bin": "bin-Latn-NG",
      "bjj": "bjj-Deva-IN",
      "bjn": "bjn-Latn-ID",
      "bkm": "bkm-Latn-CM",
      "bku": "bku-Latn-PH",
      "blt": "blt-Tavt-VN",
      "bm": "bm-Latn-ML",
      "bmq": "bmq-Latn-ML",
      "bn": "bn-Beng-BD",
      "bo": "bo-Tibt-CN",
      "bpy": "bpy-Beng-IN",
      "bqi": "bqi-Arab-IR",
      "bqv": "bqv-Latn-CI",
      "br": "br-Latn-FR",
      "bra": "bra-Deva-IN",
      "brh": "brh-Arab-PK",
      "brx": "brx-Deva-IN",
      "bs": "bs-Latn-BA",
      "bsq": "bsq-Bass-LR",
      "bss": "bss-Latn-CM",
      "bto": "bto-Latn-PH",
      "btv": "btv-Deva-PK",
      "bua": "bua-Cyrl-RU",
      "buc": "buc-Latn-YT",
      "bug": "bug-Latn-ID",
      "bum": "bum-Latn-CM",
      "bvb": "bvb-Latn-GQ",
      "byn": "byn-Ethi-ER",
      "byv": "byv-Latn-CM",
      "bze": "bze-Latn-ML",
      "ca": "ca-Latn-ES",
      "cch": "cch-Latn-NG",
      "ccp": "ccp-Beng-IN",
      "ccp-Cakm": "ccp-Cakm-BD",
      "ce": "ce-Cyrl-RU",
      "ceb": "ceb-Latn-PH",
      "cgg": "cgg-Latn-UG",
      "ch": "ch-Latn-GU",
      "chk": "chk-Latn-FM",
      "chm": "chm-Cyrl-RU",
      "cho": "cho-Latn-US",
      "chp": "chp-Latn-CA",
      "chr": "chr-Cher-US",
      "cja": "cja-Arab-KH",
      "cjm": "cjm-Cham-VN",
      "ckb": "ckb-Arab-IQ",
      "co": "co-Latn-FR",
      "cop": "cop-Copt-EG",
      "cps": "cps-Latn-PH",
      "cr": "cr-Cans-CA",
      "crj": "crj-Cans-CA",
      "crk": "crk-Cans-CA",
      "crl": "crl-Cans-CA",
      "crm": "crm-Cans-CA",
      "crs": "crs-Latn-SC",
      "cs": "cs-Latn-CZ",
      "csb": "csb-Latn-PL",
      "csw": "csw-Cans-CA",
      "ctd": "ctd-Pauc-MM",
      "cu": "cu-Cyrl-RU",
      "cu-Glag": "cu-Glag-BG",
      "cv": "cv-Cyrl-RU",
      "cy": "cy-Latn-GB",
      "da": "da-Latn-DK",
      "dak": "dak-Latn-US",
      "dar": "dar-Cyrl-RU",
      "dav": "dav-Latn-KE",
      "dcc": "dcc-Arab-IN",
      "de": "de-Latn-DE",
      "den": "den-Latn-CA",
      "dgr": "dgr-Latn-CA",
      "dje": "dje-Latn-NE",
      "dnj": "dnj-Latn-CI",
      "doi": "doi-Arab-IN",
      "dsb": "dsb-Latn-DE",
      "dtm": "dtm-Latn-ML",
      "dtp": "dtp-Latn-MY",
      "dty": "dty-Deva-NP",
      "dua": "dua-Latn-CM",
      "dv": "dv-Thaa-MV",
      "dyo": "dyo-Latn-SN",
      "dyu": "dyu-Latn-BF",
      "dz": "dz-Tibt-BT",
      "ebu": "ebu-Latn-KE",
      "ee": "ee-Latn-GH",
      "efi": "efi-Latn-NG",
      "egl": "egl-Latn-IT",
      "egy": "egy-Egyp-EG",
      "eky": "eky-Kali-MM",
      "el": "el-Grek-GR",
      "en": "en-Latn-US",
      "en-Shaw": "en-Shaw-GB",
      "eo": "eo-Latn-001",
      "es": "es-Latn-ES",
      "esu": "esu-Latn-US",
      "et": "et-Latn-EE",
      "ett": "ett-Ital-IT",
      "eu": "eu-Latn-ES",
      "ewo": "ewo-Latn-CM",
      "ext": "ext-Latn-ES",
      "fa": "fa-Arab-IR",
      "fan": "fan-Latn-GQ",
      "ff": "ff-Latn-SN",
      "ff-Adlm": "ff-Adlm-GN",
      "ffm": "ffm-Latn-ML",
      "fi": "fi-Latn-FI",
      "fia": "fia-Arab-SD",
      "fil": "fil-Latn-PH",
      "fit": "fit-Latn-SE",
      "fj": "fj-Latn-FJ",
      "fo": "fo-Latn-FO",
      "fon": "fon-Latn-BJ",
      "fr": "fr-Latn-FR",
      "frc": "frc-Latn-US",
      "frp": "frp-Latn-FR",
      "frr": "frr-Latn-DE",
      "frs": "frs-Latn-DE",
      "fud": "fud-Latn-WF",
      "fuq": "fuq-Latn-NE",
      "fur": "fur-Latn-IT",
      "fuv": "fuv-Latn-NG",
      "fvr": "fvr-Latn-SD",
      "fy": "fy-Latn-NL",
      "ga": "ga-Latn-IE",
      "gaa": "gaa-Latn-GH",
      "gag": "gag-Latn-MD",
      "gan": "gan-Hans-CN",
      "gay": "gay-Latn-ID",
      "gbm": "gbm-Deva-IN",
      "gbz": "gbz-Arab-IR",
      "gcr": "gcr-Latn-GF",
      "gd": "gd-Latn-GB",
      "gez": "gez-Ethi-ET",
      "ggn": "ggn-Deva-NP",
      "gil": "gil-Latn-KI",
      "gjk": "gjk-Arab-PK",
      "gju": "gju-Arab-PK",
      "gl": "gl-Latn-ES",
      "glk": "glk-Arab-IR",
      "gn": "gn-Latn-PY",
      "gom": "gom-Deva-IN",
      "gon": "gon-Telu-IN",
      "gor": "gor-Latn-ID",
      "gos": "gos-Latn-NL",
      "got": "got-Goth-UA",
      "grc": "grc-Cprt-CY",
      "grc-Linb": "grc-Linb-GR",
      "grt": "grt-Beng-IN",
      "gsw": "gsw-Latn-CH",
      "gu": "gu-Gujr-IN",
      "gub": "gub-Latn-BR",
      "guc": "guc-Latn-CO",
      "gur": "gur-Latn-GH",
      "guz": "guz-Latn-KE",
      "gv": "gv-Latn-IM",
      "gvr": "gvr-Deva-NP",
      "gwi": "gwi-Latn-CA",
      "ha": "ha-Latn-NG",
      "ha-CM": "ha-Arab-CM",
      "ha-SD": "ha-Arab-SD",
      "hak": "hak-Hans-CN",
      "haw": "haw-Latn-US",
      "haz": "haz-Arab-AF",
      "he": "he-Hebr-IL",
      "hi": "hi-Deva-IN",
      "hif": "hif-Latn-FJ",
      "hil": "hil-Latn-PH",
      "hlu": "hlu-Hluw-TR",
      "hmd": "hmd-Plrd-CN",
      "hnd": "hnd-Arab-PK",
      "hne": "hne-Deva-IN",
      "hnj": "hnj-Hmng-LA",
      "hnn": "hnn-Latn-PH",
      "hno": "hno-Arab-PK",
      "ho": "ho-Latn-PG",
      "hoc": "hoc-Deva-IN",
      "hoj": "hoj-Deva-IN",
      "hr": "hr-Latn-HR",
      "hsb": "hsb-Latn-DE",
      "hsn": "hsn-Hans-CN",
      "ht": "ht-Latn-HT",
      "hu": "hu-Latn-HU",
      "hy": "hy-Armn-AM",
      "hz": "hz-Latn-NA",
      "ia": "ia-Latn-FR",
      "iba": "iba-Latn-MY",
      "ibb": "ibb-Latn-NG",
      "id": "id-Latn-ID",
      "ig": "ig-Latn-NG",
      "ii": "ii-Yiii-CN",
      "ik": "ik-Latn-US",
      "ikt": "ikt-Latn-CA",
      "ilo": "ilo-Latn-PH",
      "in": "in-Latn-ID",
      "inh": "inh-Cyrl-RU",
      "is": "is-Latn-IS",
      "it": "it-Latn-IT",
      "iu": "iu-Cans-CA",
      "iw": "iw-Hebr-IL",
      "izh": "izh-Latn-RU",
      "ja": "ja-Jpan-JP",
      "jam": "jam-Latn-JM",
      "jgo": "jgo-Latn-CM",
      "ji": "ji-Hebr-UA",
      "jmc": "jmc-Latn-TZ",
      "jml": "jml-Deva-NP",
      "jut": "jut-Latn-DK",
      "jv": "jv-Latn-ID",
      "jw": "jw-Latn-ID",
      "ka": "ka-Geor-GE",
      "kaa": "kaa-Cyrl-UZ",
      "kab": "kab-Latn-DZ",
      "kac": "kac-Latn-MM",
      "kaj": "kaj-Latn-NG",
      "kam": "kam-Latn-KE",
      "kao": "kao-Latn-ML",
      "kbd": "kbd-Cyrl-RU",
      "kcg": "kcg-Latn-NG",
      "kck": "kck-Latn-ZW",
      "kde": "kde-Latn-TZ",
      "kdt": "kdt-Thai-TH",
      "kea": "kea-Latn-CV",
      "ken": "ken-Latn-CM",
      "kfo": "kfo-Latn-CI",
      "kfr": "kfr-Deva-IN",
      "kfy": "kfy-Deva-IN",
      "kg": "kg-Latn-CD",
      "kge": "kge-Latn-ID",
      "kgp": "kgp-Latn-BR",
      "kha": "kha-Latn-IN",
      "khb": "khb-Talu-CN",
      "khn": "khn-Deva-IN",
      "khq": "khq-Latn-ML",
      "kht": "kht-Mymr-IN",
      "khw": "khw-Arab-PK",
      "ki": "ki-Latn-KE",
      "kiu": "kiu-Latn-TR",
      "kj": "kj-Latn-NA",
      "kjg": "kjg-Laoo-LA",
      "kk": "kk-Cyrl-KZ",
      "kk-AF": "kk-Arab-AF",
      "kk-Arab": "kk-Arab-CN",
      "kk-CN": "kk-Arab-CN",
      "kk-IR": "kk-Arab-IR",
      "kk-MN": "kk-Arab-MN",
      "kkj": "kkj-Latn-CM",
      "kl": "kl-Latn-GL",
      "kln": "kln-Latn-KE",
      "km": "km-Khmr-KH",
      "kmb": "kmb-Latn-AO",
      "kn": "kn-Knda-IN",
      "ko": "ko-Kore-KR",
      "koi": "koi-Cyrl-RU",
      "kok": "kok-Deva-IN",
      "kos": "kos-Latn-FM",
      "kpe": "kpe-Latn-LR",
      "krc": "krc-Cyrl-RU",
      "kri": "kri-Latn-SL",
      "krj": "krj-Latn-PH",
      "krl": "krl-Latn-RU",
      "kru": "kru-Deva-IN",
      "ks": "ks-Arab-IN",
      "ksb": "ksb-Latn-TZ",
      "ksf": "ksf-Latn-CM",
      "ksh": "ksh-Latn-DE",
      "ku": "ku-Latn-TR",
      "ku-Arab": "ku-Arab-IQ",
      "ku-LB": "ku-Arab-LB",
      "kum": "kum-Cyrl-RU",
      "kv": "kv-Cyrl-RU",
      "kvr": "kvr-Latn-ID",
      "kvx": "kvx-Arab-PK",
      "kw": "kw-Latn-GB",
      "kxm": "kxm-Thai-TH",
      "kxp": "kxp-Arab-PK",
      "ky": "ky-Cyrl-KG",
      "ky-Arab": "ky-Arab-CN",
      "ky-CN": "ky-Arab-CN",
      "ky-Latn": "ky-Latn-TR",
      "ky-TR": "ky-Latn-TR",
      "la": "la-Latn-VA",
      "lab": "lab-Lina-GR",
      "lad": "lad-Hebr-IL",
      "lag": "lag-Latn-TZ",
      "lah": "lah-Arab-PK",
      "laj": "laj-Latn-UG",
      "lb": "lb-Latn-LU",
      "lbe": "lbe-Cyrl-RU",
      "lbw": "lbw-Latn-ID",
      "lcp": "lcp-Thai-CN",
      "lep": "lep-Lepc-IN",
      "lez": "lez-Cyrl-RU",
      "lg": "lg-Latn-UG",
      "li": "li-Latn-NL",
      "lif": "lif-Deva-NP",
      "lif-Limb": "lif-Limb-IN",
      "lij": "lij-Latn-IT",
      "lis": "lis-Lisu-CN",
      "ljp": "ljp-Latn-ID",
      "lki": "lki-Arab-IR",
      "lkt": "lkt-Latn-US",
      "lmn": "lmn-Telu-IN",
      "lmo": "lmo-Latn-IT",
      "ln": "ln-Latn-CD",
      "lo": "lo-Laoo-LA",
      "lol": "lol-Latn-CD",
      "loz": "loz-Latn-ZM",
      "lrc": "lrc-Arab-IR",
      "lt": "lt-Latn-LT",
      "ltg": "ltg-Latn-LV",
      "lu": "lu-Latn-CD",
      "lua": "lua-Latn-CD",
      "luo": "luo-Latn-KE",
      "luy": "luy-Latn-KE",
      "luz": "luz-Arab-IR",
      "lv": "lv-Latn-LV",
      "lwl": "lwl-Thai-TH",
      "lzh": "lzh-Hans-CN",
      "lzz": "lzz-Latn-TR",
      "mad": "mad-Latn-ID",
      "maf": "maf-Latn-CM",
      "mag": "mag-Deva-IN",
      "mai": "mai-Deva-IN",
      "mak": "mak-Latn-ID",
      "man": "man-Latn-GM",
      "man-GN": "man-Nkoo-GN",
      "man-Nkoo": "man-Nkoo-GN",
      "mas": "mas-Latn-KE",
      "maz": "maz-Latn-MX",
      "mdf": "mdf-Cyrl-RU",
      "mdh": "mdh-Latn-PH",
      "mdr": "mdr-Latn-ID",
      "men": "men-Latn-SL",
      "mer": "mer-Latn-KE",
      "mfa": "mfa-Arab-TH",
      "mfe": "mfe-Latn-MU",
      "mg": "mg-Latn-MG",
      "mgh": "mgh-Latn-MZ",
      "mgo": "mgo-Latn-CM",
      "mgp": "mgp-Deva-NP",
      "mgy": "mgy-Latn-TZ",
      "mh": "mh-Latn-MH",
      "mi": "mi-Latn-NZ",
      "min": "min-Latn-ID",
      "mis": "mis-Hatr-IQ",
      "mk": "mk-Cyrl-MK",
      "ml": "ml-Mlym-IN",
      "mls": "mls-Latn-SD",
      "mn": "mn-Cyrl-MN",
      "mn-CN": "mn-Mong-CN",
      "mn-Mong": "mn-Mong-CN",
      "mni": "mni-Beng-IN",
      "mnw": "mnw-Mymr-MM",
      "moe": "moe-Latn-CA",
      "moh": "moh-Latn-CA",
      "mos": "mos-Latn-BF",
      "mr": "mr-Deva-IN",
      "mrd": "mrd-Deva-NP",
      "mrj": "mrj-Cyrl-RU",
      "mro": "mro-Mroo-BD",
      "ms": "ms-Latn-MY",
      "ms-CC": "ms-Arab-CC",
      "ms-ID": "ms-Arab-ID",
      "mt": "mt-Latn-MT",
      "mtr": "mtr-Deva-IN",
      "mua": "mua-Latn-CM",
      "mus": "mus-Latn-US",
      "mvy": "mvy-Arab-PK",
      "mwk": "mwk-Latn-ML",
      "mwr": "mwr-Deva-IN",
      "mwv": "mwv-Latn-ID",
      "mxc": "mxc-Latn-ZW",
      "my": "my-Mymr-MM",
      "myv": "myv-Cyrl-RU",
      "myx": "myx-Latn-UG",
      "myz": "myz-Mand-IR",
      "mzn": "mzn-Arab-IR",
      "na": "na-Latn-NR",
      "nan": "nan-Hans-CN",
      "nap": "nap-Latn-IT",
      "naq": "naq-Latn-NA",
      "nb": "nb-Latn-NO",
      "nch": "nch-Latn-MX",
      "nd": "nd-Latn-ZW",
      "ndc": "ndc-Latn-MZ",
      "nds": "nds-Latn-DE",
      "ne": "ne-Deva-NP",
      "new": "new-Deva-NP",
      "ng": "ng-Latn-NA",
      "ngl": "ngl-Latn-MZ",
      "nhe": "nhe-Latn-MX",
      "nhw": "nhw-Latn-MX",
      "nij": "nij-Latn-ID",
      "niu": "niu-Latn-NU",
      "njo": "njo-Latn-IN",
      "nl": "nl-Latn-NL",
      "nmg": "nmg-Latn-CM",
      "nn": "nn-Latn-NO",
      "nnh": "nnh-Latn-CM",
      "no": "no-Latn-NO",
      "nod": "nod-Lana-TH",
      "noe": "noe-Deva-IN",
      "non": "non-Runr-SE",
      "nqo": "nqo-Nkoo-GN",
      "nr": "nr-Latn-ZA",
      "nsk": "nsk-Cans-CA",
      "nso": "nso-Latn-ZA",
      "nus": "nus-Latn-SS",
      "nv": "nv-Latn-US",
      "nxq": "nxq-Latn-CN",
      "ny": "ny-Latn-MW",
      "nym": "nym-Latn-TZ",
      "nyn": "nyn-Latn-UG",
      "nzi": "nzi-Latn-GH",
      "oc": "oc-Latn-FR",
      "om": "om-Latn-ET",
      "or": "or-Orya-IN",
      "os": "os-Cyrl-GE",
      "osa": "osa-Osge-US",
      "otk": "otk-Orkh-MN",
      "pa": "pa-Guru-IN",
      "pa-Arab": "pa-Arab-PK",
      "pa-PK": "pa-Arab-PK",
      "pag": "pag-Latn-PH",
      "pal": "pal-Phli-IR",
      "pal-Phlp": "pal-Phlp-CN",
      "pam": "pam-Latn-PH",
      "pap": "pap-Latn-AW",
      "pau": "pau-Latn-PW",
      "pcd": "pcd-Latn-FR",
      "pcm": "pcm-Latn-NG",
      "pdc": "pdc-Latn-US",
      "pdt": "pdt-Latn-CA",
      "peo": "peo-Xpeo-IR",
      "pfl": "pfl-Latn-DE",
      "phn": "phn-Phnx-LB",
      "pka": "pka-Brah-IN",
      "pko": "pko-Latn-KE",
      "pl": "pl-Latn-PL",
      "pms": "pms-Latn-IT",
      "pnt": "pnt-Grek-GR",
      "pon": "pon-Latn-FM",
      "pra": "pra-Khar-PK",
      "prd": "prd-Arab-IR",
      "prg": "prg-Latn-001",
      "ps": "ps-Arab-AF",
      "pt": "pt-Latn-BR",
      "puu": "puu-Latn-GA",
      "qu": "qu-Latn-PE",
      "quc": "quc-Latn-GT",
      "qug": "qug-Latn-EC",
      "raj": "raj-Deva-IN",
      "rcf": "rcf-Latn-RE",
      "rej": "rej-Latn-ID",
      "rgn": "rgn-Latn-IT",
      "ria": "ria-Latn-IN",
      "rif": "rif-Tfng-MA",
      "rif-NL": "rif-Latn-NL",
      "rjs": "rjs-Deva-NP",
      "rkt": "rkt-Beng-BD",
      "rm": "rm-Latn-CH",
      "rmf": "rmf-Latn-FI",
      "rmo": "rmo-Latn-CH",
      "rmt": "rmt-Arab-IR",
      "rmu": "rmu-Latn-SE",
      "rn": "rn-Latn-BI",
      "rng": "rng-Latn-MZ",
      "ro": "ro-Latn-RO",
      "rob": "rob-Latn-ID",
      "rof": "rof-Latn-TZ",
      "rtm": "rtm-Latn-FJ",
      "ru": "ru-Cyrl-RU",
      "rue": "rue-Cyrl-UA",
      "rug": "rug-Latn-SB",
      "rw": "rw-Latn-RW",
      "rwk": "rwk-Latn-TZ",
      "ryu": "ryu-Kana-JP",
      "sa": "sa-Deva-IN",
      "saf": "saf-Latn-GH",
      "sah": "sah-Cyrl-RU",
      "saq": "saq-Latn-KE",
      "sas": "sas-Latn-ID",
      "sat": "sat-Latn-IN",
      "saz": "saz-Saur-IN",
      "sbp": "sbp-Latn-TZ",
      "sc": "sc-Latn-IT",
      "sck": "sck-Deva-IN",
      "scn": "scn-Latn-IT",
      "sco": "sco-Latn-GB",
      "scs": "scs-Latn-CA",
      "sd": "sd-Arab-PK",
      "sd-Deva": "sd-Deva-IN",
      "sd-Khoj": "sd-Khoj-IN",
      "sd-Sind": "sd-Sind-IN",
      "sdc": "sdc-Latn-IT",
      "sdh": "sdh-Arab-IR",
      "se": "se-Latn-NO",
      "sef": "sef-Latn-CI",
      "seh": "seh-Latn-MZ",
      "sei": "sei-Latn-MX",
      "ses": "ses-Latn-ML",
      "sg": "sg-Latn-CF",
      "sga": "sga-Ogam-IE",
      "sgs": "sgs-Latn-LT",
      "shi": "shi-Tfng-MA",
      "shn": "shn-Mymr-MM",
      "si": "si-Sinh-LK",
      "sid": "sid-Latn-ET",
      "sk": "sk-Latn-SK",
      "skr": "skr-Arab-PK",
      "sl": "sl-Latn-SI",
      "sli": "sli-Latn-PL",
      "sly": "sly-Latn-ID",
      "sm": "sm-Latn-WS",
      "sma": "sma-Latn-SE",
      "smj": "smj-Latn-SE",
      "smn": "smn-Latn-FI",
      "smp": "smp-Samr-IL",
      "sms": "sms-Latn-FI",
      "sn": "sn-Latn-ZW",
      "snk": "snk-Latn-ML",
      "so": "so-Latn-SO",
      "sou": "sou-Thai-TH",
      "sq": "sq-Latn-AL",
      "sr": "sr-Cyrl-RS",
      "sr-ME": "sr-Latn-ME",
      "sr-RO": "sr-Latn-RO",
      "sr-RU": "sr-Latn-RU",
      "sr-TR": "sr-Latn-TR",
      "srb": "srb-Sora-IN",
      "srn": "srn-Latn-SR",
      "srr": "srr-Latn-SN",
      "srx": "srx-Deva-IN",
      "ss": "ss-Latn-ZA",
      "ssy": "ssy-Latn-ER",
      "st": "st-Latn-ZA",
      "stq": "stq-Latn-DE",
      "su": "su-Latn-ID",
      "suk": "suk-Latn-TZ",
      "sus": "sus-Latn-GN",
      "sv": "sv-Latn-SE",
      "sw": "sw-Latn-TZ",
      "swb": "swb-Arab-YT",
      "swc": "swc-Latn-CD",
      "swg": "swg-Latn-DE",
      "swv": "swv-Deva-IN",
      "sxn": "sxn-Latn-ID",
      "syl": "syl-Beng-BD",
      "syr": "syr-Syrc-IQ",
      "szl": "szl-Latn-PL",
      "ta": "ta-Taml-IN",
      "taj": "taj-Deva-NP",
      "tbw": "tbw-Latn-PH",
      "tcy": "tcy-Knda-IN",
      "tdd": "tdd-Tale-CN",
      "tdg": "tdg-Deva-NP",
      "tdh": "tdh-Deva-NP",
      "te": "te-Telu-IN",
      "tem": "tem-Latn-SL",
      "teo": "teo-Latn-UG",
      "tet": "tet-Latn-TL",
      "tg": "tg-Cyrl-TJ",
      "tg-Arab": "tg-Arab-PK",
      "tg-PK": "tg-Arab-PK",
      "th": "th-Thai-TH",
      "thl": "thl-Deva-NP",
      "thq": "thq-Deva-NP",
      "thr": "thr-Deva-NP",
      "ti": "ti-Ethi-ET",
      "tig": "tig-Ethi-ER",
      "tiv": "tiv-Latn-NG",
      "tk": "tk-Latn-TM",
      "tkl": "tkl-Latn-TK",
      "tkr": "tkr-Latn-AZ",
      "tkt": "tkt-Deva-NP",
      "tl": "tl-Latn-PH",
      "tly": "tly-Latn-AZ",
      "tmh": "tmh-Latn-NE",
      "tn": "tn-Latn-ZA",
      "to": "to-Latn-TO",
      "tog": "tog-Latn-MW",
      "tpi": "tpi-Latn-PG",
      "tr": "tr-Latn-TR",
      "tru": "tru-Latn-TR",
      "trv": "trv-Latn-TW",
      "ts": "ts-Latn-ZA",
      "tsd": "tsd-Grek-GR",
      "tsf": "tsf-Deva-NP",
      "tsg": "tsg-Latn-PH",
      "tsj": "tsj-Tibt-BT",
      "tt": "tt-Cyrl-RU",
      "ttj": "ttj-Latn-UG",
      "tts": "tts-Thai-TH",
      "ttt": "ttt-Latn-AZ",
      "tum": "tum-Latn-MW",
      "tvl": "tvl-Latn-TV",
      "twq": "twq-Latn-NE",
      "txg": "txg-Tang-CN",
      "ty": "ty-Latn-PF",
      "tyv": "tyv-Cyrl-RU",
      "tzm": "tzm-Latn-MA",
      "udm": "udm-Cyrl-RU",
      "ug": "ug-Arab-CN",
      "ug-Cyrl": "ug-Cyrl-KZ",
      "ug-KZ": "ug-Cyrl-KZ",
      "ug-MN": "ug-Cyrl-MN",
      "uga": "uga-Ugar-SY",
      "uk": "uk-Cyrl-UA",
      "uli": "uli-Latn-FM",
      "umb": "umb-Latn-AO",
      "und": "en-Latn-US",
      "und-002": "en-Latn-NG",
      "und-003": "en-Latn-US",
      "und-005": "pt-Latn-BR",
      "und-009": "en-Latn-AU",
      "und-011": "en-Latn-NG",
      "und-013": "es-Latn-MX",
      "und-014": "sw-Latn-TZ",
      "und-015": "ar-Arab-EG",
      "und-017": "sw-Latn-CD",
      "und-018": "en-Latn-ZA",
      "und-019": "en-Latn-US",
      "und-021": "en-Latn-US",
      "und-029": "es-Latn-CU",
      "und-030": "zh-Hans-CN",
      "und-034": "hi-Deva-IN",
      "und-035": "id-Latn-ID",
      "und-039": "it-Latn-IT",
      "und-053": "en-Latn-AU",
      "und-054": "en-Latn-PG",
      "und-057": "en-Latn-GU",
      "und-061": "sm-Latn-WS",
      "und-142": "zh-Hans-CN",
      "und-143": "uz-Latn-UZ",
      "und-145": "ar-Arab-SA",
      "und-150": "ru-Cyrl-RU",
      "und-151": "ru-Cyrl-RU",
      "und-154": "en-Latn-GB",
      "und-155": "de-Latn-DE",
      "und-419": "es-Latn-419",
      "und-AD": "ca-Latn-AD",
      "und-Adlm": "ff-Adlm-GN",
      "und-AE": "ar-Arab-AE",
      "und-AF": "fa-Arab-AF",
      "und-Aghb": "lez-Aghb-RU",
      "und-Ahom": "aho-Ahom-IN",
      "und-AL": "sq-Latn-AL",
      "und-AM": "hy-Armn-AM",
      "und-AO": "pt-Latn-AO",
      "und-AQ": "und-Latn-AQ",
      "und-AR": "es-Latn-AR",
      "und-Arab": "ar-Arab-EG",
      "und-Arab-CC": "ms-Arab-CC",
      "und-Arab-CN": "ug-Arab-CN",
      "und-Arab-GB": "ks-Arab-GB",
      "und-Arab-ID": "ms-Arab-ID",
      "und-Arab-IN": "ur-Arab-IN",
      "und-Arab-KH": "cja-Arab-KH",
      "und-Arab-MN": "kk-Arab-MN",
      "und-Arab-MU": "ur-Arab-MU",
      "und-Arab-NG": "ha-Arab-NG",
      "und-Arab-PK": "ur-Arab-PK",
      "und-Arab-TH": "mfa-Arab-TH",
      "und-Arab-TJ": "fa-Arab-TJ",
      "und-Arab-TR": "az-Arab-TR",
      "und-Arab-YT": "swb-Arab-YT",
      "und-Armi": "arc-Armi-IR",
      "und-Armn": "hy-Armn-AM",
      "und-AS": "sm-Latn-AS",
      "und-AT": "de-Latn-AT",
      "und-Avst": "ae-Avst-IR",
      "und-AW": "nl-Latn-AW",
      "und-AX": "sv-Latn-AX",
      "und-AZ": "az-Latn-AZ",
      "und-BA": "bs-Latn-BA",
      "und-Bali": "ban-Bali-ID",
      "und-Bamu": "bax-Bamu-CM",
      "und-Bass": "bsq-Bass-LR",
      "und-Batk": "bbc-Batk-ID",
      "und-BD": "bn-Beng-BD",
      "und-BE": "nl-Latn-BE",
      "und-Beng": "bn-Beng-BD",
      "und-BF": "fr-Latn-BF",
      "und-BG": "bg-Cyrl-BG",
      "und-BH": "ar-Arab-BH",
      "und-Bhks": "sa-Bhks-IN",
      "und-BI": "rn-Latn-BI",
      "und-BJ": "fr-Latn-BJ",
      "und-BL": "fr-Latn-BL",
      "und-BN": "ms-Latn-BN",
      "und-BO": "es-Latn-BO",
      "und-Bopo": "zh-Bopo-TW",
      "und-BQ": "pap-Latn-BQ",
      "und-BR": "pt-Latn-BR",
      "und-Brah": "pka-Brah-IN",
      "und-Brai": "fr-Brai-FR",
      "und-BT": "dz-Tibt-BT",
      "und-Bugi": "bug-Bugi-ID",
      "und-Buhd": "bku-Buhd-PH",
      "und-BV": "und-Latn-BV",
      "und-BY": "be-Cyrl-BY",
      "und-Cakm": "ccp-Cakm-BD",
      "und-Cans": "cr-Cans-CA",
      "und-Cari": "xcr-Cari-TR",
      "und-CD": "sw-Latn-CD",
      "und-CF": "fr-Latn-CF",
      "und-CG": "fr-Latn-CG",
      "und-CH": "de-Latn-CH",
      "und-Cham": "cjm-Cham-VN",
      "und-Cher": "chr-Cher-US",
      "und-CI": "fr-Latn-CI",
      "und-CL": "es-Latn-CL",
      "und-CM": "fr-Latn-CM",
      "und-CN": "zh-Hans-CN",
      "und-CO": "es-Latn-CO",
      "und-Copt": "cop-Copt-EG",
      "und-CP": "und-Latn-CP",
      "und-Cprt": "grc-Cprt-CY",
      "und-CR": "es-Latn-CR",
      "und-CU": "es-Latn-CU",
      "und-CV": "pt-Latn-CV",
      "und-CW": "pap-Latn-CW",
      "und-CY": "el-Grek-CY",
      "und-Cyrl": "ru-Cyrl-RU",
      "und-Cyrl-AL": "mk-Cyrl-AL",
      "und-Cyrl-BA": "sr-Cyrl-BA",
      "und-Cyrl-GE": "ab-Cyrl-GE",
      "und-Cyrl-GR": "mk-Cyrl-GR",
      "und-Cyrl-MD": "uk-Cyrl-MD",
      "und-Cyrl-PL": "be-Cyrl-PL",
      "und-Cyrl-RO": "bg-Cyrl-RO",
      "und-Cyrl-SK": "uk-Cyrl-SK",
      "und-Cyrl-TR": "kbd-Cyrl-TR",
      "und-Cyrl-XK": "sr-Cyrl-XK",
      "und-CZ": "cs-Latn-CZ",
      "und-DE": "de-Latn-DE",
      "und-Deva": "hi-Deva-IN",
      "und-Deva-BT": "ne-Deva-BT",
      "und-Deva-FJ": "hif-Deva-FJ",
      "und-Deva-MU": "bho-Deva-MU",
      "und-Deva-PK": "btv-Deva-PK",
      "und-DJ": "aa-Latn-DJ",
      "und-DK": "da-Latn-DK",
      "und-DO": "es-Latn-DO",
      "und-Dupl": "fr-Dupl-FR",
      "und-DZ": "ar-Arab-DZ",
      "und-EA": "es-Latn-EA",
      "und-EC": "es-Latn-EC",
      "und-EE": "et-Latn-EE",
      "und-EG": "ar-Arab-EG",
      "und-Egyp": "egy-Egyp-EG",
      "und-EH": "ar-Arab-EH",
      "und-Elba": "sq-Elba-AL",
      "und-ER": "ti-Ethi-ER",
      "und-ES": "es-Latn-ES",
      "und-ET": "am-Ethi-ET",
      "und-Ethi": "am-Ethi-ET",
      "und-EU": "en-Latn-GB",
      "und-FI": "fi-Latn-FI",
      "und-FO": "fo-Latn-FO",
      "und-FR": "fr-Latn-FR",
      "und-GA": "fr-Latn-GA",
      "und-GE": "ka-Geor-GE",
      "und-Geor": "ka-Geor-GE",
      "und-GF": "fr-Latn-GF",
      "und-GH": "ak-Latn-GH",
      "und-GL": "kl-Latn-GL",
      "und-Glag": "cu-Glag-BG",
      "und-GN": "fr-Latn-GN",
      "und-Goth": "got-Goth-UA",
      "und-GP": "fr-Latn-GP",
      "und-GQ": "es-Latn-GQ",
      "und-GR": "el-Grek-GR",
      "und-Gran": "sa-Gran-IN",
      "und-Grek": "el-Grek-GR",
      "und-Grek-TR": "bgx-Grek-TR",
      "und-GS": "und-Latn-GS",
      "und-GT": "es-Latn-GT",
      "und-Gujr": "gu-Gujr-IN",
      "und-Guru": "pa-Guru-IN",
      "und-GW": "pt-Latn-GW",
      "und-Hanb": "zh-Hanb-TW",
      "und-Hang": "ko-Hang-KR",
      "und-Hani": "zh-Hani-CN",
      "und-Hano": "hnn-Hano-PH",
      "und-Hans": "zh-Hans-CN",
      "und-Hant": "zh-Hant-TW",
      "und-Hant-CN": "yue-Hant-CN",
      "und-Hatr": "mis-Hatr-IQ",
      "und-Hebr": "he-Hebr-IL",
      "und-Hebr-CA": "yi-Hebr-CA",
      "und-Hebr-GB": "yi-Hebr-GB",
      "und-Hebr-SE": "yi-Hebr-SE",
      "und-Hebr-UA": "yi-Hebr-UA",
      "und-Hebr-US": "yi-Hebr-US",
      "und-Hira": "ja-Hira-JP",
      "und-HK": "zh-Hant-HK",
      "und-Hluw": "hlu-Hluw-TR",
      "und-HM": "und-Latn-HM",
      "und-Hmng": "hnj-Hmng-LA",
      "und-HN": "es-Latn-HN",
      "und-HR": "hr-Latn-HR",
      "und-HT": "ht-Latn-HT",
      "und-HU": "hu-Latn-HU",
      "und-Hung": "hu-Hung-HU",
      "und-IC": "es-Latn-IC",
      "und-ID": "id-Latn-ID",
      "und-IL": "he-Hebr-IL",
      "und-IN": "hi-Deva-IN",
      "und-IQ": "ar-Arab-IQ",
      "und-IR": "fa-Arab-IR",
      "und-IS": "is-Latn-IS",
      "und-IT": "it-Latn-IT",
      "und-Ital": "ett-Ital-IT",
      "und-Jamo": "ko-Jamo-KR",
      "und-Java": "jv-Java-ID",
      "und-JO": "ar-Arab-JO",
      "und-JP": "ja-Jpan-JP",
      "und-Jpan": "ja-Jpan-JP",
      "und-Kali": "eky-Kali-MM",
      "und-Kana": "ja-Kana-JP",
      "und-KE": "sw-Latn-KE",
      "und-KG": "ky-Cyrl-KG",
      "und-KH": "km-Khmr-KH",
      "und-Khar": "pra-Khar-PK",
      "und-Khmr": "km-Khmr-KH",
      "und-Khoj": "sd-Khoj-IN",
      "und-KM": "ar-Arab-KM",
      "und-Knda": "kn-Knda-IN",
      "und-Kore": "ko-Kore-KR",
      "und-KP": "ko-Kore-KP",
      "und-KR": "ko-Kore-KR",
      "und-Kthi": "bho-Kthi-IN",
      "und-KW": "ar-Arab-KW",
      "und-KZ": "ru-Cyrl-KZ",
      "und-LA": "lo-Laoo-LA",
      "und-Lana": "nod-Lana-TH",
      "und-Laoo": "lo-Laoo-LA",
      "und-Latn-AF": "tk-Latn-AF",
      "und-Latn-AM": "ku-Latn-AM",
      "und-Latn-CN": "za-Latn-CN",
      "und-Latn-CY": "tr-Latn-CY",
      "und-Latn-DZ": "fr-Latn-DZ",
      "und-Latn-ET": "en-Latn-ET",
      "und-Latn-GE": "ku-Latn-GE",
      "und-Latn-IR": "tk-Latn-IR",
      "und-Latn-KM": "fr-Latn-KM",
      "und-Latn-MA": "fr-Latn-MA",
      "und-Latn-MK": "sq-Latn-MK",
      "und-Latn-MM": "kac-Latn-MM",
      "und-Latn-MO": "pt-Latn-MO",
      "und-Latn-MR": "fr-Latn-MR",
      "und-Latn-RU": "krl-Latn-RU",
      "und-Latn-SY": "fr-Latn-SY",
      "und-Latn-TN": "fr-Latn-TN",
      "und-Latn-TW": "trv-Latn-TW",
      "und-Latn-UA": "pl-Latn-UA",
      "und-LB": "ar-Arab-LB",
      "und-Lepc": "lep-Lepc-IN",
      "und-LI": "de-Latn-LI",
      "und-Limb": "lif-Limb-IN",
      "und-Lina": "lab-Lina-GR",
      "und-Linb": "grc-Linb-GR",
      "und-Lisu": "lis-Lisu-CN",
      "und-LK": "si-Sinh-LK",
      "und-LS": "st-Latn-LS",
      "und-LT": "lt-Latn-LT",
      "und-LU": "fr-Latn-LU",
      "und-LV": "lv-Latn-LV",
      "und-LY": "ar-Arab-LY",
      "und-Lyci": "xlc-Lyci-TR",
      "und-Lydi": "xld-Lydi-TR",
      "und-MA": "ar-Arab-MA",
      "und-Mahj": "hi-Mahj-IN",
      "und-Mand": "myz-Mand-IR",
      "und-Mani": "xmn-Mani-CN",
      "und-Marc": "bo-Marc-CN",
      "und-MC": "fr-Latn-MC",
      "und-MD": "ro-Latn-MD",
      "und-ME": "sr-Latn-ME",
      "und-Mend": "men-Mend-SL",
      "und-Merc": "xmr-Merc-SD",
      "und-Mero": "xmr-Mero-SD",
      "und-MF": "fr-Latn-MF",
      "und-MG": "mg-Latn-MG",
      "und-MK": "mk-Cyrl-MK",
      "und-ML": "bm-Latn-ML",
      "und-Mlym": "ml-Mlym-IN",
      "und-MM": "my-Mymr-MM",
      "und-MN": "mn-Cyrl-MN",
      "und-MO": "zh-Hant-MO",
      "und-Modi": "mr-Modi-IN",
      "und-Mong": "mn-Mong-CN",
      "und-MQ": "fr-Latn-MQ",
      "und-MR": "ar-Arab-MR",
      "und-Mroo": "mro-Mroo-BD",
      "und-MT": "mt-Latn-MT",
      "und-Mtei": "mni-Mtei-IN",
      "und-MU": "mfe-Latn-MU",
      "und-Mult": "skr-Mult-PK",
      "und-MV": "dv-Thaa-MV",
      "und-MX": "es-Latn-MX",
      "und-MY": "ms-Latn-MY",
      "und-Mymr": "my-Mymr-MM",
      "und-Mymr-IN": "kht-Mymr-IN",
      "und-Mymr-TH": "mnw-Mymr-TH",
      "und-MZ": "pt-Latn-MZ",
      "und-NA": "af-Latn-NA",
      "und-Narb": "xna-Narb-SA",
      "und-Nbat": "arc-Nbat-JO",
      "und-NC": "fr-Latn-NC",
      "und-NE": "ha-Latn-NE",
      "und-Newa": "new-Newa-NP",
      "und-NI": "es-Latn-NI",
      "und-Nkoo": "man-Nkoo-GN",
      "und-NL": "nl-Latn-NL",
      "und-NO": "nb-Latn-NO",
      "und-NP": "ne-Deva-NP",
      "und-Ogam": "sga-Ogam-IE",
      "und-Olck": "sat-Olck-IN",
      "und-OM": "ar-Arab-OM",
      "und-Orkh": "otk-Orkh-MN",
      "und-Orya": "or-Orya-IN",
      "und-Osge": "osa-Osge-US",
      "und-Osma": "so-Osma-SO",
      "und-PA": "es-Latn-PA",
      "und-Palm": "arc-Palm-SY",
      "und-Pauc": "ctd-Pauc-MM",
      "und-PE": "es-Latn-PE",
      "und-Perm": "kv-Perm-RU",
      "und-PF": "fr-Latn-PF",
      "und-PG": "tpi-Latn-PG",
      "und-PH": "fil-Latn-PH",
      "und-Phag": "lzh-Phag-CN",
      "und-Phli": "pal-Phli-IR",
      "und-Phlp": "pal-Phlp-CN",
      "und-Phnx": "phn-Phnx-LB",
      "und-PK": "ur-Arab-PK",
      "und-PL": "pl-Latn-PL",
      "und-Plrd": "hmd-Plrd-CN",
      "und-PM": "fr-Latn-PM",
      "und-PR": "es-Latn-PR",
      "und-Prti": "xpr-Prti-IR",
      "und-PS": "ar-Arab-PS",
      "und-PT": "pt-Latn-PT",
      "und-PW": "pau-Latn-PW",
      "und-PY": "gn-Latn-PY",
      "und-QA": "ar-Arab-QA",
      "und-QO": "en-Latn-IO",
      "und-RE": "fr-Latn-RE",
      "und-Rjng": "rej-Rjng-ID",
      "und-RO": "ro-Latn-RO",
      "und-RS": "sr-Cyrl-RS",
      "und-RU": "ru-Cyrl-RU",
      "und-Runr": "non-Runr-SE",
      "und-RW": "rw-Latn-RW",
      "und-SA": "ar-Arab-SA",
      "und-Samr": "smp-Samr-IL",
      "und-Sarb": "xsa-Sarb-YE",
      "und-Saur": "saz-Saur-IN",
      "und-SC": "fr-Latn-SC",
      "und-SD": "ar-Arab-SD",
      "und-SE": "sv-Latn-SE",
      "und-Sgnw": "ase-Sgnw-US",
      "und-Shaw": "en-Shaw-GB",
      "und-Shrd": "sa-Shrd-IN",
      "und-SI": "sl-Latn-SI",
      "und-Sidd": "sa-Sidd-IN",
      "und-Sind": "sd-Sind-IN",
      "und-Sinh": "si-Sinh-LK",
      "und-SJ": "nb-Latn-SJ",
      "und-SK": "sk-Latn-SK",
      "und-SM": "it-Latn-SM",
      "und-SN": "fr-Latn-SN",
      "und-SO": "so-Latn-SO",
      "und-Sora": "srb-Sora-IN",
      "und-SR": "nl-Latn-SR",
      "und-ST": "pt-Latn-ST",
      "und-Sund": "su-Sund-ID",
      "und-SV": "es-Latn-SV",
      "und-SY": "ar-Arab-SY",
      "und-Sylo": "syl-Sylo-BD",
      "und-Syrc": "syr-Syrc-IQ",
      "und-Tagb": "tbw-Tagb-PH",
      "und-Takr": "doi-Takr-IN",
      "und-Tale": "tdd-Tale-CN",
      "und-Talu": "khb-Talu-CN",
      "und-Taml": "ta-Taml-IN",
      "und-Tang": "txg-Tang-CN",
      "und-Tavt": "blt-Tavt-VN",
      "und-TD": "fr-Latn-TD",
      "und-Telu": "te-Telu-IN",
      "und-TF": "fr-Latn-TF",
      "und-Tfng": "zgh-Tfng-MA",
      "und-TG": "fr-Latn-TG",
      "und-Tglg": "fil-Tglg-PH",
      "und-TH": "th-Thai-TH",
      "und-Thaa": "dv-Thaa-MV",
      "und-Thai": "th-Thai-TH",
      "und-Thai-CN": "lcp-Thai-CN",
      "und-Thai-KH": "kdt-Thai-KH",
      "und-Thai-LA": "kdt-Thai-LA",
      "und-Tibt": "bo-Tibt-CN",
      "und-Tirh": "mai-Tirh-IN",
      "und-TJ": "tg-Cyrl-TJ",
      "und-TK": "tkl-Latn-TK",
      "und-TL": "pt-Latn-TL",
      "und-TM": "tk-Latn-TM",
      "und-TN": "ar-Arab-TN",
      "und-TO": "to-Latn-TO",
      "und-TR": "tr-Latn-TR",
      "und-TV": "tvl-Latn-TV",
      "und-TW": "zh-Hant-TW",
      "und-TZ": "sw-Latn-TZ",
      "und-UA": "uk-Cyrl-UA",
      "und-UG": "sw-Latn-UG",
      "und-Ugar": "uga-Ugar-SY",
      "und-UY": "es-Latn-UY",
      "und-UZ": "uz-Latn-UZ",
      "und-VA": "it-Latn-VA",
      "und-Vaii": "vai-Vaii-LR",
      "und-VE": "es-Latn-VE",
      "und-VN": "vi-Latn-VN",
      "und-VU": "bi-Latn-VU",
      "und-Wara": "hoc-Wara-IN",
      "und-WF": "fr-Latn-WF",
      "und-WS": "sm-Latn-WS",
      "und-XK": "sq-Latn-XK",
      "und-Xpeo": "peo-Xpeo-IR",
      "und-Xsux": "akk-Xsux-IQ",
      "und-YE": "ar-Arab-YE",
      "und-Yiii": "ii-Yiii-CN",
      "und-YT": "fr-Latn-YT",
      "und-ZW": "sn-Latn-ZW",
      "unr": "unr-Beng-IN",
      "unr-Deva": "unr-Deva-NP",
      "unr-NP": "unr-Deva-NP",
      "unx": "unx-Beng-IN",
      "ur": "ur-Arab-PK",
      "uz": "uz-Latn-UZ",
      "uz-AF": "uz-Arab-AF",
      "uz-Arab": "uz-Arab-AF",
      "uz-CN": "uz-Cyrl-CN",
      "vai": "vai-Vaii-LR",
      "ve": "ve-Latn-ZA",
      "vec": "vec-Latn-IT",
      "vep": "vep-Latn-RU",
      "vi": "vi-Latn-VN",
      "vic": "vic-Latn-SX",
      "vls": "vls-Latn-BE",
      "vmf": "vmf-Latn-DE",
      "vmw": "vmw-Latn-MZ",
      "vo": "vo-Latn-001",
      "vot": "vot-Latn-RU",
      "vro": "vro-Latn-EE",
      "vun": "vun-Latn-TZ",
      "wa": "wa-Latn-BE",
      "wae": "wae-Latn-CH",
      "wal": "wal-Ethi-ET",
      "war": "war-Latn-PH",
      "wbp": "wbp-Latn-AU",
      "wbq": "wbq-Telu-IN",
      "wbr": "wbr-Deva-IN",
      "wls": "wls-Latn-WF",
      "wni": "wni-Arab-KM",
      "wo": "wo-Latn-SN",
      "wtm": "wtm-Deva-IN",
      "wuu": "wuu-Hans-CN",
      "xav": "xav-Latn-BR",
      "xcr": "xcr-Cari-TR",
      "xh": "xh-Latn-ZA",
      "xlc": "xlc-Lyci-TR",
      "xld": "xld-Lydi-TR",
      "xmf": "xmf-Geor-GE",
      "xmn": "xmn-Mani-CN",
      "xmr": "xmr-Merc-SD",
      "xna": "xna-Narb-SA",
      "xnr": "xnr-Deva-IN",
      "xog": "xog-Latn-UG",
      "xpr": "xpr-Prti-IR",
      "xsa": "xsa-Sarb-YE",
      "xsr": "xsr-Deva-NP",
      "yao": "yao-Latn-MZ",
      "yap": "yap-Latn-FM",
      "yav": "yav-Latn-CM",
      "ybb": "ybb-Latn-CM",
      "yi": "yi-Hebr-001",
      "yo": "yo-Latn-NG",
      "yrl": "yrl-Latn-BR",
      "yua": "yua-Latn-MX",
      "yue": "yue-Hant-HK",
      "yue-CN": "yue-Hans-CN",
      "yue-Hans": "yue-Hans-CN",
      "za": "za-Latn-CN",
      "zag": "zag-Latn-SD",
      "zdj": "zdj-Arab-KM",
      "zea": "zea-Latn-NL",
      "zgh": "zgh-Tfng-MA",
      "zh": "zh-Hans-CN",
      "zh-AU": "zh-Hant-AU",
      "zh-BN": "zh-Hant-BN",
      "zh-Bopo": "zh-Bopo-TW",
      "zh-GB": "zh-Hant-GB",
      "zh-GF": "zh-Hant-GF",
      "zh-Hanb": "zh-Hanb-TW",
      "zh-Hant": "zh-Hant-TW",
      "zh-HK": "zh-Hant-HK",
      "zh-ID": "zh-Hant-ID",
      "zh-MO": "zh-Hant-MO",
      "zh-MY": "zh-Hant-MY",
      "zh-PA": "zh-Hant-PA",
      "zh-PF": "zh-Hant-PF",
      "zh-PH": "zh-Hant-PH",
      "zh-SR": "zh-Hant-SR",
      "zh-TH": "zh-Hant-TH",
      "zh-TW": "zh-Hant-TW",
      "zh-US": "zh-Hant-US",
      "zh-VN": "zh-Hant-VN",
      "zmi": "zmi-Latn-MY",
      "zu": "zu-Latn-ZA",
      "zza": "zza-Latn-TR"
    }
  }
}

},{}],5:[function(_dereq_,module,exports){
module.exports={
  "supplemental": {
    "version": {
      "_number": "$Revision: 12447 $",
      "_unicodeVersion": "8.0.0",
      "_cldrVersion": "29"
    },
    "weekData": {
      "minDays": {
        "001": "1",
        "AD": "4",
        "AN": "4",
        "AT": "4",
        "AX": "4",
        "BE": "4",
        "BG": "4",
        "CH": "4",
        "CZ": "4",
        "DE": "4",
        "DK": "4",
        "EE": "4",
        "ES": "4",
        "FI": "4",
        "FJ": "4",
        "FO": "4",
        "FR": "4",
        "GB": "4",
        "GF": "4",
        "GG": "4",
        "GI": "4",
        "GP": "4",
        "GR": "4",
        "GU": "1",
        "HU": "4",
        "IE": "4",
        "IM": "4",
        "IS": "4",
        "IT": "4",
        "JE": "4",
        "LI": "4",
        "LT": "4",
        "LU": "4",
        "MC": "4",
        "MQ": "4",
        "NL": "4",
        "NO": "4",
        "PL": "4",
        "PT": "4",
        "RE": "4",
        "SE": "4",
        "SJ": "4",
        "SK": "4",
        "SM": "4",
        "UM": "1",
        "US": "1",
        "VA": "4",
        "VI": "1"
      },
      "firstDay": {
        "001": "mon",
        "AD": "mon",
        "AE": "sat",
        "AF": "sat",
        "AG": "sun",
        "AI": "mon",
        "AL": "mon",
        "AM": "mon",
        "AN": "mon",
        "AR": "sun",
        "AS": "sun",
        "AT": "mon",
        "AU": "sun",
        "AX": "mon",
        "AZ": "mon",
        "BA": "mon",
        "BD": "fri",
        "BE": "mon",
        "BG": "mon",
        "BH": "sat",
        "BM": "mon",
        "BN": "mon",
        "BR": "sun",
        "BS": "sun",
        "BT": "sun",
        "BW": "sun",
        "BY": "mon",
        "BZ": "sun",
        "CA": "sun",
        "CH": "mon",
        "CL": "mon",
        "CM": "mon",
        "CN": "sun",
        "CO": "sun",
        "CR": "mon",
        "CY": "mon",
        "CZ": "mon",
        "DE": "mon",
        "DJ": "sat",
        "DK": "mon",
        "DM": "sun",
        "DO": "sun",
        "DZ": "sat",
        "EC": "mon",
        "EE": "mon",
        "EG": "sat",
        "ES": "mon",
        "ET": "sun",
        "FI": "mon",
        "FJ": "mon",
        "FO": "mon",
        "FR": "mon",
        "GB": "mon",
        "GB-alt-variant": "sun",
        "GE": "mon",
        "GF": "mon",
        "GP": "mon",
        "GR": "mon",
        "GT": "sun",
        "GU": "sun",
        "HK": "sun",
        "HN": "sun",
        "HR": "mon",
        "HU": "mon",
        "ID": "sun",
        "IE": "sun",
        "IL": "sun",
        "IN": "sun",
        "IQ": "sat",
        "IR": "sat",
        "IS": "mon",
        "IT": "mon",
        "JM": "sun",
        "JO": "sat",
        "JP": "sun",
        "KE": "sun",
        "KG": "mon",
        "KH": "sun",
        "KR": "sun",
        "KW": "sat",
        "KZ": "mon",
        "LA": "sun",
        "LB": "mon",
        "LI": "mon",
        "LK": "mon",
        "LT": "mon",
        "LU": "mon",
        "LV": "mon",
        "LY": "sat",
        "MA": "sat",
        "MC": "mon",
        "MD": "mon",
        "ME": "mon",
        "MH": "sun",
        "MK": "mon",
        "MM": "sun",
        "MN": "mon",
        "MO": "sun",
        "MQ": "mon",
        "MT": "sun",
        "MV": "fri",
        "MX": "sun",
        "MY": "mon",
        "MZ": "sun",
        "NI": "sun",
        "NL": "mon",
        "NO": "mon",
        "NP": "sun",
        "NZ": "sun",
        "OM": "sat",
        "PA": "sun",
        "PE": "sun",
        "PH": "sun",
        "PK": "sun",
        "PL": "mon",
        "PR": "sun",
        "PT": "mon",
        "PY": "sun",
        "QA": "sat",
        "RE": "mon",
        "RO": "mon",
        "RS": "mon",
        "RU": "mon",
        "SA": "sun",
        "SD": "sat",
        "SE": "mon",
        "SG": "sun",
        "SI": "mon",
        "SK": "mon",
        "SM": "mon",
        "SV": "sun",
        "SY": "sat",
        "TH": "sun",
        "TJ": "mon",
        "TM": "mon",
        "TN": "sun",
        "TR": "mon",
        "TT": "sun",
        "TW": "sun",
        "UA": "mon",
        "UM": "sun",
        "US": "sun",
        "UY": "mon",
        "UZ": "mon",
        "VA": "mon",
        "VE": "sun",
        "VI": "sun",
        "VN": "mon",
        "WS": "sun",
        "XK": "mon",
        "YE": "sun",
        "ZA": "sun",
        "ZW": "sun"
      },
      "weekendStart": {
        "001": "sat",
        "AE": "fri",
        "AF": "thu",
        "BH": "fri",
        "DZ": "fri",
        "EG": "fri",
        "IL": "fri",
        "IN": "sun",
        "IQ": "fri",
        "IR": "fri",
        "JO": "fri",
        "KW": "fri",
        "LY": "fri",
        "MA": "fri",
        "OM": "fri",
        "QA": "fri",
        "SA": "fri",
        "SD": "fri",
        "SY": "fri",
        "TN": "fri",
        "YE": "fri"
      },
      "weekendEnd": {
        "001": "sun",
        "AE": "sat",
        "AF": "fri",
        "BH": "sat",
        "DZ": "sat",
        "EG": "sat",
        "IL": "sat",
        "IQ": "sat",
        "IR": "fri",
        "JO": "sat",
        "KW": "sat",
        "LY": "sat",
        "MA": "sat",
        "OM": "sat",
        "QA": "sat",
        "SA": "sat",
        "SD": "sat",
        "SY": "sat",
        "TN": "sat",
        "YE": "sat"
      }
    }
  }
}

},{}],6:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-array-like-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-array-like-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-array-like-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-array-like-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-array-like-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-array-like-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-array-like-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-array-like-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6 isArrayLike module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.13
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-array-like-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:4, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  var isNil = _dereq_('is-nil-x');
  var isFunction = _dereq_('is-function-x');
  var isLength = _dereq_('lodash.islength');

  /**
   * Checks if value is array-like. A value is considered array-like if it's
   * not a function and has a `length` that's an integer greater than or
   * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @param {*} value The object to be tested.
   * @return {boolean} Returns `true` if subject is array-like, else `false`.
   * @example
   * var isArrayLike = require('is-array-like-x');
   *
   * isArrayLike([1, 2, 3]); // true
   * isArrayLike(document.body.children); // true
   * isArrayLike('abc'); // true
   * isArrayLike(_.noop); // false
   */
  module.exports = function isArrayLike(value) {
    return !isNil(value) && !isFunction(value) && isLength(value.length);
  };
}());

},{"is-function-x":7,"is-nil-x":14,"lodash.islength":12}],7:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-function-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/is-function-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-function-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-function-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/is-function-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-function-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-function-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-function-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * isFunction module. Determine whether a given value is a function object.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.6
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-function-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:8, maxcomplexity:4 */

/*global module */

;(function () {
  'use strict';

  var fToString = Function.prototype.toString;
  var toStringTag = _dereq_('to-string-tag-x');
  var hasToStringTag = _dereq_('has-to-string-tag-x');
  var isPrimitive = _dereq_('is-primitive');
  var funcTag = '[object Function]';
  var genTag = '[object GeneratorFunction]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @private
   * @param {*} value The value to check.
   * @return {boolean} Returns `true` if `value` is correctly classified,
   * else `false`.
   */
  function tryFunctionObject(value) {
    try {
      fToString.call(value);
      return true;
    } catch (ignore) {}
    return false;
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @param {*} value The value to check.
   * @return {boolean} Returns `true` if `value` is correctly classified,
   * else `false`.
   * @example
   * var isFunction = require('is-function-x');
   *
   * isFunction(); // false
   * isFunction(Number.MIN_VALUE); // false
   * isFunction('abc'); // false
   * isFunction(true); // false
   * isFunction({ name: 'abc' }); // false
   * isFunction(function () {}); // true
   * isFunction(new Function ()); // true
   * isFunction(function* test1() {}); // true
   * isFunction(function test2(a, b) {}); // true
   * isFunction(class Test {}); // true
   * isFunction((x, y) => {return this;}); // true
   */
  module.exports = function isFunction(value) {
    if (isPrimitive(value)) {
      return false;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    var strTag = toStringTag(value);
    return strTag === funcTag || strTag === genTag;
  };
}());

},{"has-to-string-tag-x":8,"is-primitive":10,"to-string-tag-x":11}],8:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/has-to-string-tag-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/has-to-string-tag-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/has-to-string-tag-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/has-to-string-tag-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/has-to-string-tag-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/has-to-string-tag-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/has-to-string-tag-x" title="npm version">
 * <img src="https://badge.fury.io/js/has-to-string-tag-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * hasToStringTag tests if @@toStringTag is supported. `true` if supported.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.10
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-to-string-tag-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:1, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  /**
   * Indicates if `Symbol.toStringTag`exists and is the correct type.
   * `true`, if it exists and is the correct type, otherwise `false`.
   *
   * @type boolean
   */
  module.exports = _dereq_('has-symbol-support-x') &&
    typeof Symbol.toStringTag === 'symbol';
}());

},{"has-symbol-support-x":9}],9:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/has-symbol-support-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/has-symbol-support-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/has-symbol-support-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/has-symbol-support-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/has-symbol-support-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/has-symbol-support-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/has-symbol-support-x" title="npm version">
 * <img src="https://badge.fury.io/js/has-symbol-support-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * hasSymbolSupport module. Tests if `Symbol` exists and creates the correct
 * type.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.11
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:1, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  /**
   * Indicates if `Symbol`exists and creates the correct type.
   * `true`, if it exists and creates the correct type, otherwise `false`.
   *
   * @type boolean
   */
  module.exports = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
}());

},{}],10:[function(_dereq_,module,exports){
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],11:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-string-tag-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/to-string-tag-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-tag-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-tag-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-tag-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-tag-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-string-tag-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-string-tag-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Get an object's @@toStringTag. Includes fixes to correct ES3 differences
 * for the following.
 * - undefined => '[object Undefined]'
 * - null => '[object Null]'
 *
 * No other fixes are included, so legacy `arguments` will
 * give `[object Object]`, and many older native objects
 * give `[object Object]`. There are also other environmental bugs
 * for example `RegExp` gives `[object Function]` and `Uint8Array`
 * gives `[object Object]` on certain engines. While these and more could
 * be fixed, it was decided that this should be a very raw version and it
 * is left to the coder to use other `is` implimentations for detection.
 * It is also worth noting that as of ES6 `Symbol.toStringTag` can be set on
 * an object and therefore can report any string that it wishes.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.11
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:6, maxcomplexity:3 */

/*global module */

;(function () {
  'use strict';

  var pToString = Object.prototype.toString;
  var isNull = _dereq_('lodash.isnull');
  var isUndefined = _dereq_('validate.io-undefined');
  var nullTag = '[object Null]';
  var undefTag = '[object Undefined]';

  /**
   * The `toStringTag` method returns "[object type]", where type is the
   * object type.
   *
   * @param {*} value The object of which to get the object type string.
   * @return {string} The object type string.
   * @example
   * var o = new Object();
   *
   * toStringTag(o); // returns '[object Object]'
   */
  module.exports = function toStringTag(value) {
    if (isNull(value)) {
      return nullTag;
    }
    if (isUndefined(value)) {
      return undefTag;
    }
    return pToString.call(value);
  };
}());

},{"lodash.isnull":25,"validate.io-undefined":29}],12:[function(_dereq_,module,exports){
/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],13:[function(_dereq_,module,exports){
'use strict';

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{}],14:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-nil-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-nil-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-nil-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-nil-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-nil-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-nil-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-nil-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-nil-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * isNil module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.10
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nil-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:3, maxcomplexity:2 */

/*global module */

;(function () {
  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var isNull = _dereq_('lodash.isnull');

  /**
   * Checks if `value` is `null` or `undefined`.
   *
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
   * @example
   *
   * _.isNil(null);
   * // => true
   *
   * _.isNil(void 0);
   * // => true
   *
   * _.isNil(NaN);
   * // => false
   */
  module.exports = function isNil(value) {
    return isNull(value) || isUndefined(value);
  };
}());

},{"lodash.isnull":15,"validate.io-undefined":29}],15:[function(_dereq_,module,exports){
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;

},{}],16:[function(_dereq_,module,exports){
'use strict';

var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};

},{}],17:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-object-like-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-object-like-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-object-like-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-object-like-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-object-like-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-object-like-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-object-like-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-object-like-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6 isObjectLike module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.11
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-object-like-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:3, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  var isFunction = _dereq_('is-function-x');
  var isPrimitive = _dereq_('is-primitive');

  /**
   * Checks if `value` is object-like. A value is object-like if it's not a
   * primitive and not a function.
   *
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   * var isObjectLike = require('is-object-like-x');
   *
   * isObjectLike({});
   * // => true
   *
   * isObjectLike([1, 2, 3]);
   * // => true
   *
   * isObjectLike(_.noop);
   * // => false
   *
   * isObjectLike(null);
   * // => false
   */
  module.exports = function isObjectLike(value) {
    return !isPrimitive(value) && !isFunction(value);
  };
}());

},{"is-function-x":18,"is-primitive":23}],18:[function(_dereq_,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7,"has-to-string-tag-x":19,"is-primitive":23,"to-string-tag-x":21}],19:[function(_dereq_,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8,"has-symbol-support-x":20}],20:[function(_dereq_,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],21:[function(_dereq_,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11,"lodash.isnull":22,"validate.io-undefined":29}],22:[function(_dereq_,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],23:[function(_dereq_,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],24:[function(_dereq_,module,exports){
'use strict';

var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{}],25:[function(_dereq_,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],26:[function(_dereq_,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;

},{}],27:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/regexp-escape-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/regexp-escape-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/regexp-escape-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/regexp-escape-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/regexp-escape-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/regexp-escape-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/regexp-escape-x" title="npm version">
 * <img src="https://badge.fury.io/js/regexp-escape-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * regexpEscape module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.5
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module regexp-escape-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:4, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  var $toString = _dereq_('to-string-x');
  var pReplace = String.prototype.replace;
  var syntaxChars = /[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g;

  /**
   * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
   *
   * @param {string} string The string to be escaped.
   * @return {string} The escaped string.
   * @example
   * var regexpEscape = require('regexp-escape-x');
   * var str = 'hello. how are you?';
   * var regex = new RegExp(regexpEscape(str), 'g');
   * String(regex); // '/hello\. how are you\?/g'
   */
  module.exports = function regexpEscape(string) {
    return pReplace.call($toString(string), syntaxChars, '\\$&');
  };
}());

},{"to-string-x":28}],28:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-string-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/to-string-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-string-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-string-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ToString module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.5
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:3, maxcomplexity:2 */

/*global module */

;(function () {
  'use strict';

  var $String = String;

  /**
   * The abstract operation ToString converts argument to a value of type
   * String.
   *
   * @param {*} value The value to convert to a string.
   * @throws {TypeError} If `value` is a Symbol.
   * @return {string} The converted value.
   * @example
   * var $toString = require('to-string-x');
   *
   * $toString(); // 'undefined'
   * $toString(null); // 'null'
   * $toString('abc'); // 'abc'
   * $toString(true); // 'true'
   * $toString(Symbol('foo')); // TypeError
   * $toString(Symbol.iterator); // TypeError
   * $toString(Object(Symbol.iterator)); // TypeError
   */
  module.exports = function ToString(value) {
    if (typeof value === 'symbol') {
      throw new TypeError('Cannot convert a Symbol value to a string');
    }
    return $String(value);
  };
}());

},{}],29:[function(_dereq_,module,exports){
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;

},{}],30:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isObjectLike = _dereq_('is-object-like-x');
  var BigNum = _dereq_('bignumber.js').another({
    DECIMAL_PLACES: 9,
    ROUNDING_MODE: 0,
    EXPONENTIAL_AT: [-7, 20],
    RANGE: [-1000000000, 1000000000],
    ERRORS: true
  });

  /**
   * The BigNum library namespace.
   * @ignore
   * @see {@link http://mikemcl.github.io/bignumber.js/}
   */
  Object.defineProperties(BigNum.prototype, {
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    trunc: {
      value: function() {
        return this.round(0, 1);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {boolean}
     */
    inRange: {
      value: function(min, max) {
        return this.gte(min) && this.lte(max);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    modf: {
      value: function() {
        return this.isFinite() ? this.mod(this.trunc()) : new BigNum(NaN);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {BigNum}
     */
    difference: {
      value: function(value) {
        return this.gt(value) ? this.minus(value) : this.neg().plus(value);
      }
    },
    /**
     * @memberOf external:BigNum.prototype
     * @function
     * @this BigNum
     * @return {string}
     */
    padLeadingZero: {
      value: function(size) {
        return this.toString().padStart(size, '0');
      }
    },

    isNegativeZero: {
      value: function() {
        return this.isZero() && this.isNegative();
      }
    }
  });

  Object.defineProperties(BigNum, {
    /**
     * @memberOf external:BigNum
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    isBigNum: {
      value: function(inputArg) {
        // need to fix instanceof
        return isObjectLike(inputArg) && inputArg instanceof BigNum;
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} inputArg
     * @return {BigNum}
     */
    trunc: {
      value: function(number) {
        return new BigNum(number).trunc();
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} inputArg
     * @return {BigNum}
     */
    modf: {
      value: function(number) {
        return new BigNum(number).modf();
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @param {(number|string)} number1
     * @param {(number|string)} number2
     * @return {BigNum}
     *
     */
    difference: {
      value: function(number1, number2) {
        return new BigNum(number1).difference(number2);
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @return {BigNum}
     */
    zero: {
      value: function() {
        return new BigNum(0);
      }
    },
    /**
     * @memberOf external:BigNum
     * @function
     * @return {BigNum}
     */
    one: {
      value: function() {
        return new BigNum(1);
      }
    },
    isNegativeZero: {
      value: function(value) {
        var bn = new BigNum(value);
        return bn.isZero() && bn.isNegative();
      }
    }
  });

  module.exports = BigNum;
}());

},{"bignumber.js":2,"is-object-like-x":17}],31:[function(_dereq_,module,exports){
/*global require, module */
(function() {
  'use strict';

  /**
   * http://www.unicode.org/reports/tr35/#Likely_Subtags
   * 1. Canonicalize.
   * 1.1 Make sure the input locale is in canonical form: uses the right
   * separator, and has the right casing.
   *
   * 1.2 Replace any deprecated subtags with their canonical values using the
   * <alias> data in supplemental metadata. Use the first value in the
   * replacement list, if it exists. Language tag replacements may have multiple
   * parts, such as 'sh' => 'sr_Latn' or mo' => 'ro_MD'. In such a case, the
   * original script and/or region are retained if there is one. Thus
   * 'sh_Arab_AQ' => 'sr_Arab_AQ', not 'sr_Latn_AQ'.
   *
   * 1.3 If the tag is grandfathered (see <variable id='$grandfathered'
   * type='choice'> in the supplemental data), then return it.
   * TODO grandfathered?
   *
   * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
   * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
   * and regions), plus any variants and extensions.
   */

  var utils = _dereq_('./utils.js');
  var aliases = _dereq_('../node_modules/cldr-core/supplemental/aliases.json').supplemental.metadata.alias;
  var canonicalizeULangIRx = /^(root)$|^([a-z]{2,3}|[a-z]{5,8})(?:[\-_]([a-z]{4}))?(?:[\-_]([a-z]{2}|\d{3}))?((?:[\-_]([0-9a-z]{5,8}|\d[0-9a-z]{3}))*)$/i;
  var sepRx = /[\-_]/;

  /**
   * 1.1 Make sure the input locale is in canonical form: uses the right
   * separator, and has the right casing.
   * @private
   * @param {string} languageId
   * @return {Array}
   */
  function getSubTags(languageId) {
    var subTags = [null, null, null, null];
    var match = utils.first(languageId.split(/[\-_][tu][\-_]/i)).match(canonicalizeULangIRx);
    if (!match) {
      return subTags;
    }
    // language
    subTags[0] = (match[1] || match[2]).toLowerCase();
    // script
    if (match[3]) {
      subTags[1] = match[3].charAt(0).toUpperCase() + match[3].slice(1).toLowerCase();
    }
    // region
    if (match[4]) {
      subTags[2] = match[4].toUpperCase();
    }
    // variant
    if (match[5]) {
      match[5].slice(1).split(sepRx).forEach(function(v, index) {
        subTags[3 + index] = v.toUpperCase();
      });
    }
    return subTags;
  }

  /**
   * 1.2 Replace any deprecated subtags with their canonical values using the
   * <alias> data in supplemental metadata. Use the first value in the
   * replacement list, if it exists. Language tag replacements may have multiple
   * parts, such as 'sh' => 'sr_Latn' or mo' => 'ro_MD'. In such a case, the
   * original script and/or region are retained if there is one. Thus
   * 'sh_Arab_AQ' =>'sr_Arab_AQ', not 'sr_Latn_AQ'.
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  function replaceAliases(subTags) {
    // language
    Object.keys(aliases.languageAlias).some(function(alias) {
      if (alias === subTags[0]) {
        subTags[0] = aliases.languageAlias[alias]._replacement.split(sepRx)[0];
        return true;
      }
    });
    // script
    if (subTags[1]) {
      Object.keys(aliases.scriptAlias).some(function(script) {
        if (script === subTags[1]) {
          subTags[1] = aliases.scriptAlias[script]._replacement;
          return true;
        }
      });
    }
    // region
    // variant
    if (subTags[3]) {
      Object.keys(aliases.variantAlias).forEach(function(variant) {
        subTags.slice(3).forEach(function(item, idx) {
          if (variant === item) {
            subTags[3 + idx] = aliases.variantAlias[variant]._replacement;
          }
        });
      });
    }
    return subTags;
  }

  /**
   * 1.3 If the tag is grandfathered (see <variable id='$grandfathered'
   * type='choice'> in the supplemental data), then return it.
   * TODO grandfathered?
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  /*
  function replaceGrandfather(subTags) {
    // language
    // script
    // region
    // variant
    return subTags;
  }
  */

  /**
   * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
   * @private
   * @param {Array} subTags
   * @return {Array}
   */
  function cleanUnknowns(subTags) {
    // language
    // script
    if (subTags[1] === 'Zzzz') {
      subTags[1] = null;
    }
    // region
    if (subTags[2] === 'ZZ') {
      subTags[2] = null;
    }
    // variant
    return subTags;
  }

  /**
   * Canonalizes a Unicode Language Identifier string as an array.
   * @private
   * @constructor
   * @param {string} languageId
   * @param {string} [sep]
   * @return {Array}
   */
  function Canonicalize(languageId) {
    Object.defineProperties(this, {
      subTags: {
        value: getSubTags(String(languageId).trim()),
      }
    });
    replaceAliases(this.subTags);
    //replaceGrandfather(this.subTags);
    cleanUnknowns(this.subTags);
  }

  Object.defineProperties(Canonicalize, {
    defaultSeperator: {
      value: '_',
    },
    bcp47Seperator: {
      value: '-',
    }
  });

  Object.defineProperties(Canonicalize.prototype, {
    valueOf: {
      value: function() {
        return this.subTags;
      }
    },
    toString: {
      value: function() {
        return this.subTags.filter(Boolean).join(Canonicalize.defaultSeperator);
      }
    },
    toBCP47String: {
      value: function() {
        return this.subTags.filter(Boolean).join(Canonicalize.bcp47Seperator);
      }
    },
    isValid: {
      value: function() {
        return this.toString() !== '';
      }
    }
  });

  module.exports = Canonicalize;
}());

},{"../node_modules/cldr-core/supplemental/aliases.json":3,"./utils.js":55}],32:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

	/**
	 * Return the maximized language id as defined in
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. Canonicalize.
	 * 2. Lookup. Lookup each of the following in order, and stop on the first
	 * match:
	 * 2.1 languages_scripts_regions
	 * 2.2 languages_regions
	 * 2.3 languages_scripts
	 * 2.4 languages
	 * 2.5 und_scripts
	 * 3. Return
	 * 3.1 If there is no match, either return an error value, or the match for
	 * "und" (in APIs where a valid language tag is required).
	 * 3.2 Otherwise there is a match = languagem_scriptm_regionm
	 * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
	 * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
	 * variants + extensions.).
	 */

  var Canonicalize = _dereq_('./Canonicalize.js');
  var likelySubtags = _dereq_('../node_modules/cldr-core/supplemental/likelySubtags.json').supplemental.likelySubtags;
  var sepRx = new RegExp(Canonicalize.bcp47Seperator, 'g');

  function searchLikelySubtags(subTags) {
    return likelySubtags[subTags.filter(Boolean).join(Canonicalize.bcp47Seperator)];
  }

  function getResult(result, subTags) {
    var resultTags = subTags.slice();
    result.split(sepRx).forEach(function (tag, index) {
      if (!resultTags[index] || index === 0 && resultTags[index] === 'und') {
        resultTags[index] = tag;
      }
    });
    return resultTags.filter(Boolean).join(Canonicalize.defaultSeperator);
  }

  /**
   * Perform a languageId lookup from the CLDR likeySubtags.
   * @private
   * @function
   * @param {string} languageId
   * @return {string}
   */
  module.exports = function addLikelySubtags(languageId) {
    var subTags = new Canonicalize(languageId).valueOf();
    // languages_scripts_regions
    var result = searchLikelySubtags(subTags.slice(0, 3));
    if (result) {
      return getResult(result, subTags);
    }
    // languages_regions
    result = searchLikelySubtags([subTags[0], subTags[2]]);
    if (result) {
      return getResult(result, subTags);
    }
    // languages_scripts
    result = searchLikelySubtags(subTags.slice(0, 2));
    if (result) {
      return getResult(result, subTags);
    }
    // languages
    result = searchLikelySubtags([subTags[0]]);
    if (result) {
      return getResult(result, subTags);
    }
    // und_scripts
    result = searchLikelySubtags(['und', subTags[1]]);
    if (result) {
      return getResult(result, subTags);
    }
    return searchLikelySubtags(['und']).replace(sepRx, Canonicalize.defaultSeperator);
  };
}());

},{"../node_modules/cldr-core/supplemental/likelySubtags.json":4,"./Canonicalize.js":31}],33:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/astrodate"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/astrodate.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/astrodate"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/astrodate.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/astrodate#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/astrodate/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/astrodate" title="npm version">
 * <img src="https://badge.fury.io/js/astrodate.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Javascript Date object with Astronomy in mind. .
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 0.8.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @see https://nodejs.org/api/AstroDate.html
 * @module AstroDate
 */
/*global require, module */
;(function() {
  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var isNull = _dereq_('lodash.isnull');
  var isPlainObject = _dereq_('lodash.isplainobject');
  var isObjectLike = _dereq_('is-object-like-x');
  var isString = _dereq_('is-string');
  var isNumber = _dereq_('is-number-object');
  var isDate = _dereq_('is-date-object');
  var LanguageCan = _dereq_('./languageCan.js');
  var leapYear = _dereq_('./leapYear.js');
  var daysIn = _dereq_('./daysIn.js');
  var isIn = _dereq_('./isIn.js');
  var isValid = _dereq_('./isValid.js');
  var normalise = _dereq_('./normalise.js');
  var commonData = _dereq_('./commonData.js');
  var data = _dereq_('./data.js');
  var convert = _dereq_('./convert.js');
  var utils = _dereq_('./utils.js');
  var format = _dereq_('./format.js');
  var isoParse = _dereq_('./isoParse.js');
  var toISOString = _dereq_('./toISOString.js');
  var getCorrectStruct = _dereq_('./getCorrectStruct.js');
  var easter = _dereq_('./easter.js');
  var BigNum = _dereq_('./BigNum.js');
  var invalidDate = 'Invalid Date';
  //var replaceTokenRX = /([^']+)|('[^']+')/g;
  //var unmatchedTokenRx = /[^a-z]/gi;

  /**
   * For holding CLDR language specific data.
   * @private
   * @type {object}
   */
  var languages = _dereq_('./language.json');
  //var timeData = require('../node_modules/cldr-core/supplemental/timeData.json').supplemental.timeData;
  /**
   * The default language.
   * @private
   * @type {string}
   */
  var en = 'en';
  /**
   * The current default language of the AstroDate constructor.
   * @private
   * @type {object}
   */
  var defaultLanguage = new LanguageCan(en);
  //var calendarTypes;

  /*
  function tokenReplacer($0, $1, $2) {
    return $0 && $1 && !$2 ? $1 : '';
  }
  */
  /**
   * Remove all non-token from a given pattern and returns a string with any tokens that remain.
   * @private
   * @function
   * @param {string} pattern
   * @return {string}
   */
  /*
  function remainingTokens(pattern) {
    return pattern.replace(replaceTokenRX, tokenReplacer).replace(unmatchedTokenRx, '');
  }
  */

  /**
   * Returns true if there are any remaining tokens in the given pattern.
   * @private
   * @function
   * @param {string} pattern
   * @return {boolean}
   */
  /*
  function hasRemainingTokens(pattern) {
    return remainingTokens(pattern).trim().length !== 0;
  }
  */

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
  */

  /**
   * Finds a loaded language from the given languageId string.
   * @private
   * @param {object} langCan
   * @return {object}
   */
  function getLanguageObj(langCan) {
    return languages[langCan.toBCP47String()];
  }

  /**
   * Finds a loaded language from the given languageId string.
   * @private
   * @param {object} langCan
   * @return {object}
   */
  function languageLoaded(langCan) {
    return getLanguageObj(langCan) ? langCan : new LanguageCan();
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
   * Integer or string value representing the year. The year must always be provided in full
   * (e.g. 98 is treated as 98, not 1998).</li>
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
   * null or object Must be used when only year is specified. Allows date to be specified in
   * Julian Calender (more/changes coming). </li>
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
   * new AstroDate(55, {julian: true, offset: -3600});
   * // year 55 of the Julian Calendar, offset is same as '+01:00:00'
   * new AstroDate(1995, 12, 17, 3, 24, 0, 0, -3600); // offset is same as '+01:00:00'
   * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '-5400'); // offset is same as '+01:30:00'
   * new AstroDate('1995', '12', '17', '3', '24', '0', '0', '+01:30:00'); // offset is same as -5400
   * new AstroDate('-10', '5', '7', {julian: true}); // year -10 of the Julian Calendar
   */
  function AstroDate() {
    var args = Array.from(arguments);
    var input = arguments;
    var argsLength = args.length;
    var isJulian = false;
    var isUT = false;
    var isTT = false;
    var isLocal = false;
    var error = null;
    var delta = 0;
    /**
     * The current language of the AstroDate instance.
     * @private
     * @type {string}
     */
    var currentLanguage = defaultLanguage;
    var struct;
    var arg;
    var length;
    var opts;

    Object.defineProperties(this, {
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
        value: function(key) {
          var got;
          if (isUndefined(key)) {
            got = Object.assign({}, struct);
          } else if (isString(key)) {
            switch (key) {
              case 'struct':
                got = Object.assign({}, struct);
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
        value: function(key, value) {
          var unit = normalise.unit(key);
          var valid = false;
          var bn;
          if (unit) {
            bn = new BigNum(value);
            switch (unit) {
              case 'year':
                valid = isIn.yearRange(bn);
                break;
              case 'month':
                valid = isIn.monthRange(bn);
                break;
              case 'day':
                valid = isIn.dayRange(bn, struct, isJulian);
                break;
              case 'hour':
                valid = isIn.hourRange(bn);
                break;
              case 'minute':
                valid = isIn.minuteRange(bn, struct);
                break;
              case 'second':
                valid = isIn.secondRange(bn, struct);
                break;
              case 'millisecond':
                valid = isIn.millisecondRange(bn, struct);
                break;
              case 'offset':
                valid = isIn.offsetRange(bn);
                break;
              default:
                throw new Error(unit);
            }
            if (valid) {
              struct[unit] = bn;
            } else {
              struct = {};
            }
          } else if (Array.isArray(key)) {
            struct = convert.array.toStruct(key, false);
          } else if (AstroDate.isAstroDate(key)) {
            struct = key.getter();
            isJulian = key.isJulian();
          } else if (isDate(key)) {
            struct = convert.date.toStruct(key);
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
                  struct = Object.assign({}, value);
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
                delta = Math.sign(value) || 0;
                break;
              case 'isLocal':
                isLocal = Boolean(value);
                break;
              case 'lang':
                if (value && typeof value.isValid === 'function' && value.isValid()) {
                  currentLanguage = value;
                } else {
                  currentLanguage = defaultLanguage;
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
    if (length === 0) {
      struct = convert.date.toStruct(new Date());
    } else if (length === 1) {
      arg = utils.first(args);
      if (AstroDate.isAstroDate(arg)) {
        isJulian = arg.getter('isJulian');
        struct = Object.assign({}, arg.getter());
      } else if (isDate(arg)) {
        struct = convert.date.toStruct(arg);
      } else if (isNumber(arg)) {
        struct = convert.date.toStruct(new Date(arg));
      } else if (isString(arg)) {
        struct = isoParse(arg);
      } else {
        throw new TypeError(arg);
      }
    } else {
      arg = utils.last(args);
      opts = normalise.options(arg);
      if (isNull(arg) || isPlainObject(arg)) {
        if (opts.Julian) {
          isJulian = true;
        }
        struct = convert.array.toStruct(args.slice(0, -1), isJulian);
        if (isJulian) {
          struct = convert.struct.julianToGregorian(struct);
        }
      } else {
        struct = convert.array.toStruct(args, isJulian);
      }
      if (isUndefined(args[8]) && !isUndefined(opts.offset)) {
        struct.offset = convert.bnOffset(opts.offset);
      }
    }
    if (!isValid(struct)) {
      struct = {};
    }
  }

  Object.defineProperties(AstroDate.prototype, {
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    julian: {
      value: function() {
        return this.setter('isJulian', true);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    gregorian: {
      value: function() {
        return this.setter('isJulian', false);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    local: {
      value: function() {
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
      value: function() {
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
      value: function() {
        return this.setter('isTT', true);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    UT2TT: {
      value: function() {
        return this.setter('DT', -1);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    TT2UT: {
      value: function() {
        return this.setter('DT', 1);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    civil: {
      value: function() {
        return this.setter('isTT', false);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {AstroDate}
     * @this AstroDate
     */
    raw: {
      value: function() {
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
      value: function() {
        return this.getter('isJulian');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isGregorian: {
      value: function() {
        return !this.getter('isJulian');
      }
    },
    /** memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isUT: {
      value: function() {
        return this.getter('isUT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isTT: {
      value: function() {
        return this.getter('isTT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isUT2TT: {
      value: function() {
        return this.getter('DT') === -1;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isTT2UT: {
      value: function() {
        return this.getter('DT') === 1;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isDT: {
      value: function() {
        return this.getter('DT') !== 0;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isCivil: {
      value: function() {
        return !this.getter('isTT');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isLocal: {
      value: function() {
        return this.getter('isLocal');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isRaw: {
      value: function() {
        return !this.getter('isUT') && !this.getter('isTT') && this.getter('isLocal');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    currentLang: {
      value: function() {
        return this.getter('lang');
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isWeekDay: {
      value: function() {
        if (this.isValid()) {
          return convert.struct.weekDayNumber(getCorrectStruct(this)).inRange(1, 5);
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isWeekend: {
      value: function() {
        if (this.isValid()) {
          return convert.struct.weekDayNumber(getCorrectStruct(this)).inRange(6, 7);
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    zone: {
      value: function() {
        if (this.isValid()) {
          return getCorrectStruct(this).offset.toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {boolean}
     * @this AstroDate
     */
    isValid: {
      value: function() {
        return isValid(this.getter());
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} isoString
     * @this AstroDate
     */
    parse: {
      value: function(isoString) {
        if (isString(isoString)) {
          return this.setter('struct', isoParse(isoString));
        }
        throw new TypeError(isoString);
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
     * One to three letters for the abbreviated form,
     * four letters for the long form, five for the narrow form.</td>
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
     * Year. Normally the length specifies the padding,
     * but for two letters it also specifies the maximum length.
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
     * Use one through three letters for the abbreviated name,
     * four for the full name, or five for the narrow name
     * (currently the data only provides abbreviated names,
     * which will be used for all requested name widths).
     * If the calendar does not provide cyclic year name data,
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
     * This is based on the ICU definition of week of month, and correlates to the ISO8601 week of year
     * definition. A day in the week before the week with the first Thursday will be week 0.</td>
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
     * local starting day of the week, using one or two letters. For this example,
     * Monday is the first day of the week.</td>
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
     * <td>Hour [1-12]. When used in skeleton data or in a skeleton passed in an API
     * for flexible data pattern generation,
     * it should match the 12-hour-cycle format preferred by the locale (h or K);
     * it should not match a 24-hour-cycle format (H or k). Use hh for zero padding.</td>
     * </tr>
     * <tr>
     * <td style="text-align: center">H</td>
     * <td style="text-align: center">1..2</td>
     * <td>13</td>
     * <td>Hour [0-23]. When used in skeleton data or in a skeleton passed in an API
     * for flexible data pattern generation,
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
     * not including the zone fields. As such, it also reflects discontinuities
     * of those fields on DST transition days.
     * On a day of DST onset, it will jump forward. On a day of DST cessation, it will jump backward.
     * This reflects the fact that is must be combined with the offset field
     * to obtain a unique local time value.</td>
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
     * The ISO8601 UTC indicator "Z" is used when local time offset is 0.
     * This is equivalent to the "XXXXX" specifier.</td>
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
     * <i>generic location format</i> ("VVVV"),
     * then the <i>short localized GMT format</i> as the final fallback.</td>
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
     * <td><b>NOT SUPPORTED!</b> The short time zone ID. Where that is unavailable,
     * the special short time zone ID <i>unk</i> (Unknown Zone) is used.<br>
     * <i><b>Note</b>: This specifier was originally used for a variant of the short specific
     * non-location format,
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
     * <p>A pattern containing any invalid pattern letter will result in a
     * thrown exception during formatting.</p>
     **/
    format: {
      value: function(pattern) {
        var string;
        if (this.isValid()) {
          var langCan = this.currentLang();
          if (!langCan.isValid() || !isPlainObject(getLanguageObj(langCan))) {
            if (!defaultLanguage.isValid() || !isPlainObject(getLanguageObj(defaultLanguage))) {
              throw new Error('Language not loaded!');
            }
            langCan = defaultLanguage;
          }
          var isJulian = this.isJulian();
          var struct = getCorrectStruct(this, isJulian);
          if (!utils.isStringWithContent(pattern)) {
            pattern = utils.first(commonData.formatTypes);
          }
          if (commonData.formatTypes.includes(pattern)) {
            var gregorian = getLanguageObj(langCan).dates.calendars.gregorian;
            var dateTimeFormats = gregorian.dateTimeFormats;
            pattern = dateTimeFormats[pattern]
              .replace('{1}', gregorian.dateFormats[pattern])
              .replace('{0}', gregorian.timeFormats[pattern]);
          }
          string = format(struct, pattern, getLanguageObj(langCan), isJulian);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toDateString: {
      value: function() {
        var string;
        if (this.isValid) {
          var langCan = this.currentLang();
          string = this.lang(en).format('EEE MMM dd y');
          this.setter('lang', langCan);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toTimeString: {
      value: function() {
        var string;
        if (this.isValid) {
          var langCan = this.currentLang();
          string = this.lang(en).format('HH:mm:ss \'GMT\'xx');
          this.setter('lang', langCan);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toString: {
      value: function() {
        return this.isValid ? this.toDateString() + ' ' + this.toTimeString() : invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    toISOString: {
      value: function(padding) {
        var string;
        if (this.isValid()) {
          // should be gregorian?!
          // add weekDate = convert.struct.calendarToWeekDate(struct)
          string = toISOString(getCorrectStruct(this), padding);
        }
        return string || invalidDate;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @return {string}
     * @this AstroDate
     */
    valueOf: {
      value: function() {
        return this.isJulian() ? this.jd() : this.convert.struct.getTime();
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    unix: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.getTime(convert.struct.toUT(struct)).div(1000).trunc().toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {object} [dateObject]
     * @this AstroDate
     */
    object: {
      value: function(dateObject) {
        var val;
        if (isUndefined(dateObject)) {
          if (this.isValid()) {
            var struct = getCorrectStruct(this);
            val = convert.struct.toObject(this.isJulian() ? convert.struct.gregorianToJulian(struct) : struct);
          }
        } else if (isPlainObject(dateObject)) {
          val = this.setter('struct', convert.object.toStruct(dateObject, this.isJulian()));
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
      value: function() {
        return new AstroDate(this);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {array} [dateArray]
     * @this AstroDate
     */
    array: {
      value: function(dateArray) {
        var val;
        if (isUndefined(dateArray)) {
          if (this.isValid()) {
            var struct = getCorrectStruct(this);
            val = convert.struct.toArrayOfString(this.isJulian() ? convert.struct.gregorianToJulian(struct) : struct);
          }
        } else if (Array.isArray(dateArray)) {
          val = this.setter('struct', convert.array.toStruct(dateArray, this.isJulian()));
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
      value: function(date) {
        var val;
        if (isUndefined(date)) {
          val = new Date(this.isValid() ? Number(this.convert.struct.getTime()) : NaN);
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
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.getTime(convert.struct.toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    deltaTime: {
      value: function() {
        if (this.isValid()) {
          return convert.struct.deltaTime(getCorrectStruct(this)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} unit
     * @this AstroDate
     */
    timeTo: {
      value: function(unit) {
        if (this.isValid()) {
          return convert.struct.timeTo(getCorrectStruct(this), unit).toString();
        }
      }
    },
    /**
     * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus the
     * fraction of the day since that instant.
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
      value: function(jd) {
        var val;
        if (isUndefined(jd)) {
          if (this.isValid()) {
            var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
            val = convert.struct.gregorianToJd(convert.struct.toUT(struct)).toFixed(BigNum.config().DECIMAL_PLACES);
          }
        } else if (isNumber(jd) || utils.isStringWithContent(jd) && jd.trim().length !== 0) {
          val = this.setter('struct', convert.jdToGregorian(jd));
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
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.gregorianToJdn(convert.struct.toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    mjd: {
      value: function() {
        if (this.isValid()) {
          var struct = this.isTT() ? convert.struct.toTT(this.getter()) : this.getter();
          return convert.struct.gregorianToMJD(convert.struct.toUT(struct)).toString();
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    easter: {
      value: function() {
        var val;
        if (this.isValid()) {
          val = new AstroDate(easter(getCorrectStruct(this)));
        }
        return val;
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    isLeapYear: {
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = leapYear.isJulian(convert.struct.gregorianToJulian(struct));
          } else {
            val = leapYear.isGregorian(struct);
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
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = daysIn.julian.year(convert.struct.gregorianToJulian(struct)).toNumber();
          } else {
            val = daysIn.gregorian.year(struct).toNumber();
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
      value: function() {
        var val;
        if (this.isValid()) {
          var struct = getCorrectStruct(this);
          if (this.isJulian()) {
            val = daysIn.julian.month(convert.struct.gregorianToJulian(struct)).toNumber();
          } else {
            val = daysIn.gregorian.month(struct).toNumber();
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
      value: function(jsonString) {
        var val;
        if (utils.isStringWithContent(jsonString)) {
          var struct = convert.object.toStruct(JSON.parse(jsonString), this.isJulian());
          if (!isValid(struct)) {
            throw new SyntaxError(struct);
          }
          val = this.setter('struct', struct);
        } else {
          val = JSON.stringify(this.object());
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
      value: function(padding, type) {
        return this.toISOString(padding, type);
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @this AstroDate
     */
    calendarToWeekDate: {
      value: function() {
        if (this.isValid()) {
          return convert.struct.toWeekObject(convert.struct.calendarToWeekDate(getCorrectStruct(this)));
        }
      }
    },
    /** @memberOf AstroDate.prototype
     * @function
     * @param {string} [id]
     * @return {string}
     * @this AstroDate
     */
    lang: {
      value: function(id) {
        var val;
        var langCan = new LanguageCan(id);
        if (langCan.isValid()) {
          langCan = languageLoaded(langCan);
          if (langCan.isValid() && isPlainObject(getLanguageObj(langCan))) {
            this.setter('lang', langCan);
          }
          val = this;
        } else {
          val = this.getter('lang').toString();
        }
        return val;
      }
    }
  });

  Object.defineProperties(AstroDate, {
    /** @memberOf AstroDate
     * @function
     * @param {string} [id]
     * @param {object} [object]
     * @return {string}
     */
    lang: {
      value: function(id, object) {
        var langCan = new LanguageCan(id);
        if (langCan.isValid()) {
          langCan = languageLoaded(langCan);
          if (langCan.isValid() && isPlainObject(object)) {
            languages[langCan.toMinBCP47String()] = object;
          }
          if (isPlainObject(getLanguageObj(langCan))) {
            defaultLanguage = langCan;
          }
        }
        return defaultLanguage.min.toString();
      }
    },
    /** @memberOf AstroDate
     * @function
     * @return {array.<String>}
     */
    langs: {
      value: function() {
        return Object.keys(languages);
      }
    },
    /** @memberOf AstroDate
     * @function
     * @param {object} object
     * @return {object}
     */
    leapSeconds: {
      value: function(object) {
        if (isPlainObject(object)) {
          data.leapSeconds = object;
        }
        return data.leapSeconds;
      }
    },
    /** @memberOf AstroDate
     * @function
     * @param {object} object
     * @return {object}
     */
    /*
    supplemental: {
      value: function(object) {
        if (isPlainObject(object)) {
          supplemental = object;
        }
        return supplemental;
      }
    },
    */
    /** @memberOf AstroDate
     * @function
     * @param {string} unitString
     */
    normaliseUnits: {
      value: function(unitString) {
        return normalise.unit(unitString);
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
      value: function(inputArg) {
        // need to fix instanceof
        return isObjectLike(inputArg) && inputArg instanceof AstroDate;
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
      value: function() {
        return new AstroDate().convert.struct.getTime();
      }
    },
    /**
     * The Julian Date (JD) of any instant is the Julian day number for the preceding noon plus
     * the fraction of the day since that instant.
     * Julian Dates are expressed as a Julian day number with a decimal fraction added.
     * For example, the Julian Date for 00:30:00.0 UT 1 January 2013 is 2456293.520833334
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    jd: {
      value: function() {
        return new AstroDate().jd();
      }
    },
    /**
     * The Julian Day Number (JDN) is the integer assigned to a whole solar day in the Julian day count
     * starting from noon Greenwich Mean Time,
     * with Julian day number 0 assigned to the day starting at noon on 1 January 4713 BC proleptic
     * Julian calendar (24 November 4714 BC, in the proleptic Gregorian calendar).
     * For example, the Julian day number for 1 January 2000 was 2,451,545.0
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    jdn: {
      value: function() {
        return new AstroDate().jdn();
      }
    },
    /**
     * The Modified Julian Date (MJD) was introduced by the Smithsonian Astrophysical Observatory
     * in 1957 to record the orbit of
     * Sputnik via an IBM 704 (36-bit machine) and using only 18 bits until August 7, 2576.
     * MJD is the epoch of OpenVMS, using 63-bit date/time postponing the next Y2K campaign to
     * July 31, 31086 02:48:05.47.
     * MJD is defined relative to midnight, rather than noon.
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    mjd: {
      value: function() {
        return new AstroDate().mjd();
      }
    },
    /**
     * The time now represented in Unix time.
     * Unix time, or POSIX time, is a system for describing instants in time,
     * defined as the number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC),
     * Thursday, 1 January 1970, not counting leap seconds.
     * It is used widely in Unix-like and many other operating systems and file formats.
     * Due to its handling of leap seconds, it is neither a linear representation of time nor
     * a true representation of UTC.
     * Unix time may be checked on most Unix systems by typing date +%s on the command line.
     * @memberOf AstroDate
     * @function
     * @return {string}
     */
    unix: {
      value: function() {
        return new AstroDate().unix();
      }
    }
  });

  module.exports = AstroDate;
}());

},{"./BigNum.js":30,"./commonData.js":34,"./convert.js":35,"./data.js":36,"./daysIn.js":38,"./easter.js":39,"./format.js":40,"./getCorrectStruct.js":41,"./isIn.js":42,"./isValid.js":43,"./isoParse.js":44,"./language.json":45,"./languageCan.js":46,"./leapYear.js":48,"./normalise.js":49,"./toISOString.js":52,"./utils.js":55,"is-date-object":13,"is-number-object":16,"is-object-like-x":17,"is-string":24,"lodash.isnull":25,"lodash.isplainobject":26,"validate.io-undefined":29}],34:[function(_dereq_,module,exports){
/*global module */
(function () {
  'use strict';

  /**
   * For normalising options.
   * @private
   * @readonly
   * @type {array.<object>}
   */
  var fullOptions = [{
    full: 'julian',
    alias: 'j'
  }, {
    full: 'offset',
    alias: 'o'
  }];
  /**
   * For normalising user input and looking up Date object methods.
   * @private
   * @readonly
   * @type {array.<object>}
   */
  var fullKeys = [{
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
  /**
   * For looking up CLDR width translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var widthTypes = ['wide', 'abbreviated', 'narrow'];
  /**
   * For looking up CLDR date and time patterns.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var formatTypes = ['full', 'long', 'medium', 'short'];
  /**
   * For looking up CLDR day translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  /**
   * For looking up CLDR month translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var monthKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  /**
   * For looking up CLDR format translations.
   * @private
   * @readonly
   * @type {array.<string>}
   */
  var nameTypes = ['format', 'stand-alone'];

  var j2000 = {
    jdtt: '2451545.0',
    tt: '2000-01-01T12:00:00.000Z',
    tai: '2000-01-01T11:59:27.816Z',
    utc: '2000-01-01T11:58:55.816Z'
  };

  module.exports = {
    fullKeys: fullKeys,
    fullOptions: fullOptions,
    widthTypes: widthTypes,
    formatTypes: formatTypes,
    dayKeys: dayKeys,
    monthKeys: monthKeys,
    nameTypes: nameTypes,
    j2000: j2000
  };
}());

},{}],35:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var isString = _dereq_('is-string');
  var isNumber = _dereq_('is-number-object');
  var isDate = _dereq_('is-date-object');
  var isPlainObject = _dereq_('lodash.isplainobject');
  var utils = _dereq_('./utils.js');
  var isIn = _dereq_('./isIn.js');
  var daysIn = _dereq_('./daysIn.js');
  var isValid = _dereq_('./isValid.js');
  var leapYear = _dereq_('./leapYear.js');
  var dayOf = _dereq_('./dayOf.js');
  var commonData = _dereq_('./commonData.js');
  var normalise = _dereq_('./normalise.js');
  var BigNum = _dereq_('./BigNum.js');
  var weekToObjectKeys = ['year', 'week', 'weekDay'];
  var bnOffsetRx = /^([\-+]?\d{1,2}):(\d{2})(?::(\d{2}))?$/;

  function timeTo(struct, unit) {
    var value;
    switch (normalise.unit(unit)) {
      case 'day':
        value = struct.hour.div(24).plus(struct.minute.div(1440))
          .plus(struct.second.div(86400))
          .plus(struct.millisecond.div(86400000));
        break;
      case 'hour':
        value = struct.hour.plus(struct.minute.div(60))
          .plus(struct.second.div(3600)).plus(struct.millisecond.div(3600000));
        break;
      case 'minute':
        value = struct.hour.times(60).plus(struct.minute)
          .plus(struct.second.div(60)).plus(struct.millisecond.div(60000));
        break;
      case 'second':
        value = struct.hour.times(3600).plus(struct.minute.times(60))
          .plus(struct.second).plus(struct.millisecond.div(1000));
        break;
      case 'millisecond':
        value = struct.hour.times(3600000).plus(struct.minute.times(60000))
          .plus(struct.second.times(1000)).plus(struct.millisecond);
        break;
      default:
        throw new Error(unit);
    }
    return value;
  }

  function bnGetTimezoneOffset() {
    return new BigNum(new Date().getTimezoneOffset() * 60);
  }

  /**
   * Converts offset hours, minutes and seconds to seconds.
   * @private
   * @function
   * @param {number|string} hour
   * @param {number|string} [minute]
   * @param {number|string} [second]
   * @return {BigNum}
   */
  function offsetToSeconds(hour, minute, second) {
    return timeTo({
      hour: new BigNum(hour),
      minute: new BigNum(minute || 0),
      second: new BigNum(second || 0),
      millisecond: BigNum.zero()
    }, 'second');
  }

  function bnOffset(value) {
    var val = '';
    var bn;
    if (isNumber(value) || isString(value)) {
      val = Number(value);
      if (!Number.isFinite(val)) {
        val = value.toString().toUpperCase();
      }
    }
    if (isNumber(val)) {
      bn = new BigNum(val);
    } else if (val === 'Z' || val === 'UTC' || val === 'GMT') {
      bn = BigNum.zero();
    } else {
      if (bnOffsetRx.test(val)) {
        var off = val.match(bnOffsetRx);
        bn = offsetToSeconds(off[2], off[3], off[4]).neg();
      } else {
        bn = bnGetTimezoneOffset();
      }
    }
    return bn;
  }

  function arrayToStruct(arr, isJulian) {
    var struct = {};
    if (Array.isArray(arr)) {
      commonData.fullKeys.some(function(element, index) {
        var value = arr[index];
        var bn;
        if (isNumber(value) || utils.isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.monthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.dayRange(bn, struct, isJulian)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.hourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.minuteRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.secondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.millisecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!isIn.offsetRange(bn)) {
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
    return isValid(struct) ? commonData.fullKeys.map(function(element) {
      return struct[element.full];
    }) : [];
  }

  function structToArrayOfString(struct) {
    return structToArray(struct).map(String);
  }

  function objectToStruct(object, isJulian) {
    var struct = {};
    if (isPlainObject(object)) {
      commonData.fullKeys.some(function(element) {
        var value = object[element.alias] || object[element.full] || object[element.full + 's'];
        var bn;
        if (isNumber(value) || utils.isStringWithContent(value)) {
          bn = new BigNum(value);
        } else if (BigNum.isBigNum(value)) {
          bn = value;
        } else {
          bn = new BigNum(NaN);
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'month':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.monthRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'day':
            if (isUndefined(value)) {
              bn = BigNum.one();
            }
            if (!isIn.dayRange(bn, struct, isJulian)) {
              struct = {};
              return true;
            }
            break;
          case 'hour':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.hourRange(bn)) {
              struct = {};
              return true;
            }
            break;
          case 'minute':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.minuteRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'second':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.secondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'millisecond':
            if (isUndefined(value)) {
              bn = BigNum.zero();
            }
            if (!isIn.millisecondRange(bn, struct)) {
              struct = {};
              return true;
            }
            break;
          case 'offset':
            bn = bnOffset(value);
            if (!isIn.offsetRange(bn)) {
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
      commonData.fullKeys.forEach(function(key) {
        newObject[key.full] = struct[key.full].toString();
      });
    }
    return newObject;
  }

  function weekToObject(struct) {
    var newObject = {};
    if (isPlainObject(struct)) {
      weekToObjectKeys.forEach(function(key) {
        newObject[key] = struct[key].toString();
      });
    }
    return newObject;
  }

  function dateToStruct(date) {
    var struct = {};
    if (isDate(date) && Number.isFinite(date.getTime())) {
      commonData.fullKeys.forEach(function(element) {
        var value = new BigNum(date[element.local]());
        if (element.full === 'month') {
          value = value.plus(1);
        } else if (element.full === 'offset') {
          value = value.times(60);
        }
        struct[element.full] = value;
      });
    }
    return struct;
  }

  function fractionToTime(fraction, fractionIn, struct, isJulian) {
    var time = {};
    var totalMs;
    var days;
    fraction = new BigNum(fraction);
    switch (fractionIn) {
      case 'year':
        days = isJulian ? daysIn.julian.year(struct) : daysIn.gregorian.year(struct);
        totalMs = fraction.times(days.times(86400000));
        break;
      case 'month':
        days = isJulian ? daysIn.julian.month(struct) : daysIn.gregorian.month(struct);
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
    time.second = totalMs.minus(time.hour.times(3600000))
      .minus(time.minute.times(60000)).div(1000).floor();
    time.millisecond = totalMs.minus(time.hour.times(3600000))
      .minus(time.minute.times(60000)).minus(time.second.times(1000)).floor();
    return time;
  }

  function gregorianToJd(struct) {
    var b = struct.year.minus(1);
    var c = b.times(365);
    var d = b.div(4).floor();
    var e = b.div(100).floor().neg();
    var f = b.div(400).floor();
    var g = struct.month.times(367).minus(362).div(12).floor();
    var h = 0;
    if (struct.month.gt(2)) {
      h = leapYear.isGregorian(struct) ? -1 : -2;
    }
    return new BigNum(1721424.5).plus(c).plus(d).plus(e).plus(f)
      .plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, 'day'));
  }

  function gregorianToJdn(struct) {
    return gregorianToJd(struct).round(1, 1);
  }

  function dayOfWeekNumber(struct) {
    var day = gregorianToJd(struct).plus(1.5).mod(7).floor();
    return day.lt(0) ? day.plus(7) : day;
  }

  function weekDayNumber(struct) {
    var bnWeekDay = dayOfWeekNumber(struct);
    return bnWeekDay.isZero() ? bnWeekDay.plus(7) : bnWeekDay;
  }

  function cldrDayKey(struct) {
    return commonData.dayKeys[dayOfWeekNumber(struct).toNumber()];
  }

  function getTime(struct) {
    return gregorianToJd(struct).minus(2440587.5).times(86400000).floor();
  }

 // DeltaT
  //http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
  function deltaTime(struct, canonCorrection) {
    var y = struct.year.plus(struct.month.minus(0.5).div(12));
    var u;
    var t;
    var r;
    if (struct.year.inRange(-500, 2150)) {
      if (struct.year.lt(500)) {
        u = y.div(100);
        r = new BigNum(10583.6).minus(u.times(1014.41)).plus(u.pow(2)
          .times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4)
          .times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6)
          .times(0.0090316521));
      } else if (struct.year.lt(1600)) {
        u = y.minus(1000).div(100);
        r = new BigNum(1574.2).minus(u.times(556.01)).plus(u.pow(2)
          .times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4)
          .times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6)
          .times(0.0083572073));
      } else if (struct.year.lt(1700)) {
        t = y.minus(1600);
        r = new BigNum(120).minus(t.times(0.9808)).minus(t.pow(2)
          .times(0.01532)).plus(t.pow(3).div(7129));
      } else if (struct.year.lt(1800)) {
        t = y.minus(1700);
        r = new BigNum(8.83).plus(t.times(0.1603)).minus(t.pow(2)
            .times(0.0059285)).plus(t.pow(3).times(0.00013336))
          .minus(t.pow(4).div(1174000));
      } else if (struct.year.lt(1860)) {
        t = y.minus(1800);
        r = new BigNum(13.72).minus(t.times(0.332447)).plus(t.pow(2)
          .times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4)
          .times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6)
          .times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
      } else if (struct.year.lt(1900)) {
        t = y.minus(1860);
        r = new BigNum(7.62).plus(t.times(0.5737)).minus(t.pow(2)
          .times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4)
          .times(0.0004473624)).plus(t.pow(5).div(233174));
      } else if (struct.year.lt(1920)) {
        t = y.minus(1900);
        r = new BigNum(-2.79).plus(t.times(1.494119)).minus(t.pow(2)
            .times(0.0598939)).plus(t.pow(3).times(0.0061966))
          .minus(t.pow(4).times(0.000197));
      } else if (struct.year.lt(1941)) {
        t = y.minus(1920);
        r = new BigNum(21.20).plus(t.times(0.84493)).minus(t.pow(2)
          .times(0.076100)).plus(t.pow(3).times(0.0020936));
      } else if (struct.year.lt(1961)) {
        t = y.minus(1950);
        r = new BigNum(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233))
          .plus(t.pow(3).div(2547));
      } else if (struct.year.lt(1986)) {
        t = y.minus(1975);
        r = new BigNum(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260))
          .minus(t.pow(3).div(718));
      } else if (struct.year.lt(2005)) {
        t = y.minus(2000);
        r = new BigNum(63.86).plus(t.times(0.3345))
          .minus(t.pow(2).times(0.060374)).plus(t.pow(3).times(0.0017275))
          .plus(t.pow(4).times(0.000651814))
          .plus(t.pow(5).times(0.00002373599));
      } else if (struct.year.lt(2050)) {
        t = y.minus(2000);
        r = new BigNum(62.92).plus(t.times(0.32217))
          .plus(t.pow(2).times(0.005589));
      } else {
        r = new BigNum(-20).plus(y.minus(1820).div(100).pow(2).times(32))
          .minus(y.neg().plus(2150).times(0.5628));
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

  function julianToJd(struct) {
    var year = struct.year;
    var month = struct.month;
    if (month.lte(2)) {
      year = year.minus(1);
      month = month.plus(12);
    }
    var a = year.plus(4716).times(365.25).floor();
    var b = month.plus(1).times(30.6001).floor();
    return a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, 'day'));
  }

  function julianToJdn(struct) {
    return julianToJd(struct).round(1, 1);
  }

  function jdToGregorian(julianDate) {
    var struct = {};
    var jd;
    if (isNumber(julianDate) || utils.isStringWithContent(julianDate)) {
      jd = new BigNum(julianDate);
    } else if (BigNum.isBigNum(julianDate)) {
      jd = julianDate;
    }
    if (jd && jd.isFinite()) {
      jd = jd.plus(0.5);
      var a = jd.plus(68569).floor();
      var b = a.times(4).div(146097).floor();
      a = a.minus(b.times(146097).plus(3).div(4).floor());
      struct.year = a.plus(1).times(4000).div(1461001).floor();
      a = a.minus(struct.year.times(1461).div(4).floor()).plus(31);
      struct.month = a.times(80).div(2447).floor();
      struct.day = a.minus(struct.month.times(2447).div(80).floor());
      a = struct.month.div(11).floor();
      struct.month = struct.month.plus(2).minus(a.times(12));
      struct.year = b.minus(49).times(100).plus(struct.year).plus(a).floor();
      struct.offset = BigNum.zero();
      Object.assign(struct, fractionToTime(jd.modf().abs(), 'day'));
    }
    return struct;
  }

  function jdToJulian(julianDate) {
    var struct = {};
    var jd;
    if (isNumber(julianDate) || utils.isStringWithContent(julianDate)) {
      jd = new BigNum(julianDate);
    } else if (BigNum.isBigNum(julianDate)) {
      jd = julianDate;
    }
    if (jd && jd.isFinite()) {
      jd = jd.plus(0.5);
      var a = jd.floor();
      var b = a.plus(1524);
      var c = b.minus(122.1).div(365.25).floor();
      var d = c.times(365.25).floor();
      var g = b.minus(d);
      var e = g.div(30.6001).floor();
      struct.day = g.minus(e.times(30.6001).floor());
      struct.month = e.lt(14) ? e.minus(1) : e.minus(13);
      struct.year = struct.month.gt(2) ? c.minus(4716) : c.minus(4715);
      struct.offset = BigNum.zero();
      Object.assign(struct, fractionToTime(jd.modf().abs(), 'day'));
    }
    return struct;
  }

  function gregorianToMJD(struct) {
    return gregorianToJd(struct).minus(2400000.5);
  }

  function julianToMJD(struct) {
    return julianToJd(struct).minus(2400000.5);
  }

  function jdToMJD(jd) {
    return jd.minus(2400000.5);
  }

  function gregorianToJulian(struct) {
    return isValid(struct) ? jdToJulian(gregorianToJd(struct)) : {};
  }

  function julianToGregorian(struct) {
    return isValid(struct) ? jdToGregorian(julianToJd(struct)) : {};
  }

  function toUT(struct) {
    return jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).div(86400000));
  }

  function toTT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function addDT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function subDT(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).plus(deltaTime(struct)).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function toLocal(struct) {
    var timezoneOffset = bnGetTimezoneOffset();
    var structLocal = jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(1000)).minus(timezoneOffset.times(1000)).div(86400000));
    structLocal.offset = timezoneOffset;
    return structLocal;
  }

  function toTAI(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(32184).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function toGPS(struct) {
    var offset = struct.offset;
    var structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(51184).div(86400000));
    structTT.offset = offset;
    return structTT;
  }

  function dayOfGregorianYear(struct) {
    var k = leapYear.isGregorian(struct) ? 1 : 2;
    return struct.month.times(275).div(9).floor()
      .minus(struct.month.plus(9).div(12).floor().times(k))
      .plus(struct.day).minus(30);
  }

  function dayOfJulianYear(struct) {
    var dayOfYear = struct.month.times(28).plus(struct.day);
    if (struct.month.gte(2) && leapYear.isJulian(struct)) {
      dayOfYear = dayOfYear.plus(1);
    }
    return dayOfYear;
  }

  /**
   * Convert the ISO ordinal date to a date struct.
   * @private
   * @function
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} dayOfYear
   * @return {object}
   */
  function ordinalToCalendar(year, dayOfYear) {
    var struct = {
      year: new BigNum(year),
      month: BigNum.one(),
      day: BigNum.one(),
      hour: BigNum.zero(),
      minute: BigNum.zero(),
      second: BigNum.zero(),
      millisecond: BigNum.zero()
    };
    var result;
    dayOfYear = new BigNum(dayOfYear);
    if (dayOfYear.inRange(1, daysIn.gregorian.year(struct))) {
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
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} week
   * @param {(number|string|BigNum)} weekDay
   * @return {object}
   */
  function weekDateToCalendar(year, week, weekDay) {
    var struct = {
      year: new BigNum(year),
      month: BigNum.one(),
      day: new BigNum(4),
      hour: BigNum.zero(),
      minute: BigNum.zero(),
      second: BigNum.zero(),
      millisecond: BigNum.zero()
    };
    var dayOfYear = new BigNum(7).times(week).plus(weekDay).minus(weekDayNumber(struct).plus(3));
    if (dayOfYear.lt(1)) {
      struct.year = struct.year.minus(1);
      dayOfYear = daysIn.gregorian.year(struct).plus(dayOfYear);
    } else if (dayOfYear.gt(daysIn.gregorian.year(struct))) {
      struct.year = struct.year.plus(1);
      dayOfYear = dayOfYear.minus(daysIn.gregorian.year(struct));
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
    var weekDay = weekDayNumber(struct);
    var year = struct.year;
    var month = struct.month;
    var nearestThursday = struct.day.plus(4).minus(weekDay);
    var val;
    if (struct.month.equals(12) && nearestThursday.gt(31)) {
      val = {
        year: year.plus(1),
        week: BigNum.one(),
        weekDay: weekDay
      };
    } else {
      if (struct.month.equals(1) && nearestThursday.lt(1)) {
        year = struct.year.minus(1);
        month = new BigNum(12);
        nearestThursday = nearestThursday.plus(31);
      }
      val = {
        year: year,
        week: dayOf.gregorianYear({
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
   * @return {BigNum}
   */
  function calendarToWeekOfMonth(struct) {
    return struct.day.plus(4).minus(weekDayNumber(struct)).plus(6).div(7).floor();
  }

  /**
   * Returns the ISO weekDay number.
   * @private
   * @function
   * @param {object} struct
   * @return {BigNum}
   */
  function weekDayOfMonth(struct) {
    return struct.day.minus(1).div(7).plus(1).floor();
  }

  /**
   * Covert the fractional part of hours to a time object.
   * @private
   * @function
   * @param {(number|string)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string)} hour
   * @return {object.BigNum}
   */
  function hourFractionToTime(number, offset, hour) {
    var frac = fractionToTime('0.' + number, 'hour');
    frac.hour = new BigNum(hour);
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert the fractional part of minutes to a time object.
   * @private
   * @function
   * @param {(number|string)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} [minute]
   * @param {(number|string|BigNum)} [second]
   * @return {object.BigNum}
   */
  function minuteFractionToTime(number, offset, hour, minute, second) {
    var frac = fractionToTime('0.' + number, 'minute');
    frac.hour = new BigNum(hour);
    if (!isUndefined(minute)) {
      frac.minute = new BigNum(minute);
    }
    if (!isUndefined(second)) {
      frac.second = new BigNum(second);
    }
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert the fractional part of seconds to a time object.
   * @private
   * @function
   * @param {(number|string|BigNum)} number
   * @param {(number|string|BigNum)} offset
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} minute
   * @param {(number|string|BigNum)} second
   * @return {object.BigNum}
   */
  function secondFractionToTime(number, offset, hour, minute, second) {
    var frac = fractionToTime('0.' + number.toString(), 'second');
    frac.hour = new BigNum(hour);
    frac.minute = new BigNum(minute);
    frac.second = new BigNum(second);
    frac.offset = new BigNum(offset);
    return frac;
  }

  /**
   * Covert arguents year, month and date to an object.
   * @private
   * @function
   * @param {(number|string|BigNum)} year
   * @param {(number|string|BigNum)} month
   * @param {(number|string|BigNum)} day
   * @return {object.BigNum}
   */
  function dateToObject(year, month, day) {
    return {
      year: new BigNum(year),
      month: new BigNum(month),
      day: new BigNum(day)
    };
  }

  module.exports = {
    struct: {
      timeTo: timeTo,
      toArray: structToArray,
      toArrayOfString: structToArrayOfString,
      toObject: structToObject,
      dayOfWeekNumber: dayOfWeekNumber,
      gregorianToJd: gregorianToJd,
      gregorianToJdn: gregorianToJdn,
      toWeekObject: weekToObject,
      fractionToTime: fractionToTime,
      weekDayNumber: weekDayNumber,
      cldrDayKey: cldrDayKey,
      getTime: getTime,
      deltaTime: deltaTime,
      julianToJd: julianToJd,
      julianToJdn: julianToJdn,
      gregorianToMJD: gregorianToMJD,
      julianToMJD: julianToMJD,
      jdToMJD: jdToMJD,
      gregorianToJulian: gregorianToJulian,
      julianToGregorian: julianToGregorian,
      dayOfGregorianYear: dayOfGregorianYear,
      dayOfJulianYear: dayOfJulianYear,
      toUT: toUT,
      toTT: toTT,
      addDT: addDT,
      subDT: subDT,
      toLocal: toLocal,
      toTAI: toTAI,
      toGPS: toGPS,
      calendarToWeekDate: calendarToWeekDate,
      weekDayOfMonth: weekDayOfMonth,
      calendarToWeekOfMonth: calendarToWeekOfMonth
    },
    array: {
      toStruct: arrayToStruct,
    },
    object: {
      toStruct: objectToStruct
    },
    date: {
      toStruct: dateToStruct,
      getTimezoneOffset: bnGetTimezoneOffset
    },
    offsetToSeconds: offsetToSeconds,
    bnOffset: bnOffset,
    ordinalToCalendar: ordinalToCalendar,
    weekDateToCalendar: weekDateToCalendar,
    hourFractionToTime: hourFractionToTime,
    minuteFractionToTime: minuteFractionToTime,
    secondFractionToTime: secondFractionToTime,
    dateToObject: dateToObject,
    jdToGregorian: jdToGregorian,
    jdToJulian: jdToJulian
  };
}());

},{"./BigNum.js":30,"./commonData.js":34,"./dayOf.js":37,"./daysIn.js":38,"./isIn.js":42,"./isValid.js":43,"./leapYear.js":48,"./normalise.js":49,"./utils.js":55,"is-date-object":13,"is-number-object":16,"is-string":24,"lodash.isplainobject":26,"validate.io-undefined":29}],36:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  module.exports = {
    leapSeconds: _dereq_('./leapSeconds.json')
  };
}());

},{"./leapSeconds.json":47}],37:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var leapYear = _dereq_('./leapYear.js');

  function dayOfGregorianYear(struct) {
    var k = leapYear.isGregorian(struct) ? 1 : 2;
    return struct.month.times(275).div(9).floor()
      .minus(struct.month.plus(9).div(12).floor().times(k))
      .plus(struct.day).minus(30);
  }

  function dayOfJulianYear(struct) {
    var dayOfYear = struct.month.times(28).plus(struct.day);
    if (struct.month.gte(2) && leapYear.isJulian(struct)) {
      dayOfYear = dayOfYear.plus(1);
    }
    return dayOfYear;
  }

  module.exports = {
    gregorianYear: dayOfGregorianYear,
    julianYear: dayOfJulianYear
  };
}());

},{"./leapYear.js":48}],38:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var leapYear = _dereq_('./leapYear.js');
  var BigNum = _dereq_('./BigNum.js');

  function daysInGregorianMonth(struct) {
    return struct.month.eq(2) ?
      new BigNum(leapYear.isGregorian(struct) ? 29 : 28) :
      struct.month.minus(1).mod(7).mod(2).neg().plus(31);
  }

  function daysInJulianMonth(struct) {
    return new BigNum(struct.month.eq(2) && leapYear.isJulian(struct) ? 29 : 28);
  }

  function daysInGregorianYear(struct) {
    return new BigNum(leapYear.isGregorian(struct) ? 366 : 365);
  }

  function daysInJulianYear(struct) {
    return new BigNum(leapYear.isJulian(struct) ? 366 : 365);
  }

  module.exports = {
    gregorian: {
      month: daysInGregorianMonth,
      year: daysInGregorianYear
    },
    julian: {
      month: daysInJulianMonth,
      year: daysInJulianYear
    }
  };
}());

},{"./BigNum.js":30,"./leapYear.js":48}],39:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var getCorrectStruct = _dereq_('./getCorrectStruct.js');
  var BigNum = _dereq_('./BigNum.js');

  module.exports = function easter(thisAstroDate) {
    var val;
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var k;
    var l;
    var m;
    var n;
    var struct = getCorrectStruct(thisAstroDate, thisAstroDate.getter());
    if (thisAstroDate.isJulian()) {
      a = struct.year.mod(4);
      b = struct.year.mod(7);
      c = struct.year.mod(19);
      d = c.times(19).plus(15).mod(30);
      e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7);
      f = d.plus(e).plus(114);
      val = [struct.year, f.div(31).floor().minus(1), f.mod(31).plus(1)];
    } else {
      a = struct.year.mod(19);
      b = struct.year.div(100).floor();
      c = struct.year.mod(100).floor();
      d = b.div(4);
      e = b.mod(4);
      f = b.plus(8).div(25).floor();
      g = b.minus(f).plus(1).div(3).floor();
      h = new BigNum(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30);
      i = c.div(4).floor();
      k = c.mod(4);
      l = new BigNum(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7);
      m = a.plus(h.times(11)).plus(l.times(22)).div(451).floor();
      n = h.plus(l).minus(m.times(7)).plus(114);
      val = [struct.year, n.div(31).floor(), n.mod(31).plus(1)];
    }
    return val;
  };
}());

},{"./BigNum.js":30,"./getCorrectStruct.js":41}],40:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var replaceTokens = _dereq_('./replaceTokens.js');
  var commonData = _dereq_('./commonData.js');
  var utils = _dereq_('./utils.js');
  var convert = _dereq_('./convert.js');
  var standAlone = utils.first(commonData.nameTypes);
  var shortStr = utils.last(commonData.formatTypes);
  var weekData = _dereq_('../node_modules/cldr-core/supplemental/weekData.json').supplemental.weekData;

  function tokenReducer(a, p) {
    return a + (p.type === 'symbols' ? p.value.replace(/'/g, '') : p.value);
  }

  function tokensToString(tokens) {
    return tokens.reduce(tokenReducer, '');
  }

  /**
   * Takes a date pattern of tokens and replaces those tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
   * @function
   * @param {object} struct
   * @param {string} pattern
   * @param {boolean} julian
   * @param {object} languageObject
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatDate(struct, pattern, languageObject, isJulian) {
    var gregorian = languageObject.dates.calendars.gregorian;
    //var dateFormats = gregorian.dateFormats;
    var eras = gregorian.eras;
    var months = gregorian.months;
    var monthsFormat = months.format;
    var monthsStandAlone = months[standAlone];
    var days = gregorian.days;
    var daysFormat = days.format;
    var daysStandAlone = days[standAlone];
    // should use alternative CLDR
    var weekDate = convert.struct.calendarToWeekDate(struct);
    var dayKey = convert.struct.cldrDayKey(struct);
    /*
    if (formatTypes.includes(pattern)) {
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
      pattern = dateFormats[pattern];
    }
    calendarType = julian ? 'julian' : 'gregorian';
    pattern = replaceTokens(pattern, 'CCCCC', calendarTypes[calendarType].narrow);
    pattern = replaceTokens(pattern, 'CCCC', calendarTypes[calendarType].wide);
    pattern = replaceTokens(pattern, 'C{1,3}', calendarTypes[calendarType].abbreviated);
    */
    var eraNum = struct.year.lt(1) ? 0 : 1;
    var eraNumStr = eraNum.toString();
    pattern = replaceTokens(pattern, 'GGGGG', eras.eraNarrow[eraNumStr]);
    pattern = replaceTokens(pattern, 'GGGG', eras.eraNames[eraNumStr]);
    pattern = replaceTokens(pattern, 'G{1,3}', eras.eraAbbr[eraNumStr]);
    var year = struct.year.plus(eraNum - 1);
    var yearSign = year.lt(0) ? '-' : '';
    pattern = replaceTokens(pattern, 'y{3,}', year);
    pattern = replaceTokens(pattern, 'yy', yearSign + year.toString().slice(-2));
    pattern = replaceTokens(pattern, 'y', year);
    pattern = replaceTokens(pattern, 'U{1,}', year);
    pattern = replaceTokens(pattern, 'u{1,}', struct.year);
    pattern = replaceTokens(pattern, 'Y{1,}', weekDate.year);
    var week = weekDate.week.toString();
    pattern = replaceTokens(pattern, 'w{1,2}', week);
    pattern = replaceTokens(pattern, 'W', convert.struct.calendarToWeekOfMonth(struct));
    /*
    pattern = replaceTokens(pattern, 'Q{1,2}', value);
    pattern = replaceTokens(pattern, 'QQQ', value);
    pattern = replaceTokens(pattern, 'QQQQ', value);
    pattern = replaceTokens(pattern, 'q{1,2}', value);
    pattern = replaceTokens(pattern, 'qqq', value);
    pattern = replaceTokens(pattern, 'qqqq', value);
    */
    var month = struct.month.toString();
    pattern = replaceTokens(pattern, 'MMMMM', monthsFormat.narrow[month]);
    pattern = replaceTokens(pattern, 'MMMM', monthsFormat.wide[month]);
    pattern = replaceTokens(pattern, 'MMM', monthsFormat.abbreviated[month]);
    pattern = replaceTokens(pattern, 'M{1,2}', month);
    pattern = replaceTokens(pattern, 'LLLLL', monthsStandAlone.narrow[month]);
    pattern = replaceTokens(pattern, 'LLLL', monthsStandAlone.wide[month]);
    pattern = replaceTokens(pattern, 'LLL', monthsStandAlone.abbreviated[month]);
    pattern = replaceTokens(pattern, 'L{1,2}', month);
    pattern = replaceTokens(pattern, 'd{1,2}', struct.day);
    var dayOfYear = isJulian ?
      convert.struct.dayOfJulianYear(convert.struct.gregorianToJulian(struct)) :
      convert.struct.dayOfGregorianYear(struct);
    pattern = replaceTokens(pattern, 'D{1,3}', dayOfYear);
    pattern = replaceTokens(pattern, 'F', convert.struct.weekDayOfMonth(struct));
    var mjd = isJulian ?
      convert.struct.julianToMJD(convert.struct.toUT(struct)) :
      convert.struct.gregorianToMJD(convert.struct.toUT(struct));
    pattern = replaceTokens(pattern, 'g{1,}', mjd);
    var dayStr = daysFormat[shortStr][dayKey];
    pattern = replaceTokens(pattern, 'EEEEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeeeee', dayStr);
    dayStr = daysFormat.narrow[dayKey];
    pattern = replaceTokens(pattern, 'EEEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeeee', dayStr);
    dayStr = daysFormat.wide[dayKey];
    pattern = replaceTokens(pattern, 'EEEE', dayStr);
    pattern = replaceTokens(pattern, 'eeee', dayStr);
    dayStr = daysFormat.abbreviated[dayKey];
    pattern = replaceTokens(pattern, 'EEE', dayStr);
    pattern = replaceTokens(pattern, 'eee', dayStr);
    pattern = replaceTokens(pattern, 'E{1,2}', weekDate.weekDay);
    var dayOfWeekLocaleNumber = (1 + (7 - commonData.dayKeys.indexOf(weekData.firstDay[languageObject[2]]) + commonData.dayKeys.indexOf(dayKey))) % 7;
    pattern = replaceTokens(pattern, 'e{1,2}', dayOfWeekLocaleNumber);
    pattern = replaceTokens(pattern, 'cccccc', daysStandAlone[shortStr][dayKey]);
    pattern = replaceTokens(pattern, 'ccccc', daysStandAlone.narrow[dayKey]);
    pattern = replaceTokens(pattern, 'cccc', daysStandAlone.wide[dayKey]);
    pattern = replaceTokens(pattern, 'ccc', daysStandAlone.abbreviated[dayKey]);
    pattern = replaceTokens(pattern, 'c{1,2}', dayOfWeekLocaleNumber);
    return pattern;
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZone(struct, languageObject, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = languageObject.dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats.slice);
      }
      offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      if (format === 'basic') {
        if (optional && offset.minute.isZero()) {
          offsetFormat = utils.first(offsetFormat.split(':'));
        } else {
          offsetFormat = offsetFormat.replace(':', '');
        }
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
    }
    return tokensToString(pattern);
  }

  /**
   * Formats ISO timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} withZ
   * @param {string} format
   * @param {boolean} optional
   * @return {string}
   */
  // ISO 8601 time zone formats.
  function formatIsoTimeZoneSeconds(struct, languageObject, withZ, format, optional) {
    var pattern;
    if (withZ && struct.offset.isZero()) {
      pattern = 'Z';
    } else {
      var timeZoneNames = languageObject.dates.timeZoneNames;
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats);
      }
      var offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:') + ':ss';
      if (format === 'basic') {
        if (optional && offset.second.isZero()) {
          offsetFormat = offsetFormat.split(':');
          offsetFormat.pop();
          offsetFormat = offsetFormat.join('');
        } else {
          offsetFormat = offsetFormat.replace(':', '');
        }
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = replaceTokens(pattern, 's{1,2}', offset.second);
    }
    return tokensToString(pattern);
  }

  /**
   * Formats localized GMT timezone tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Using_Time_Zone_Names}
   * @function
   * @param {object} struct
   * @param {object} languageObject
   * @param {boolean} requestedShort
   * @return {string}
   */
  // The localized GMT format.
  function formatLocalisedGMT(struct, languageObject, requestedShort) {
    var timeZoneNames = languageObject.dates.timeZoneNames;
    var pattern;
    if (struct.offset.isZero()) {
      pattern = timeZoneNames.gmtZeroFormat;
    } else {
      var offsetFormats = timeZoneNames.hourFormat.split(';');
      var offset = convert.struct.fractionToTime(struct.offset.abs(), 'second');
      var offsetFormat;
      if (struct.offset.lte(0)) {
        offsetFormat = utils.first(offsetFormats);
      } else {
        offsetFormat = utils.last(offsetFormats);
      }
      if (requestedShort) {
        offsetFormat = offsetFormat.replace('HH', 'H');
      } else {
        offsetFormat = offsetFormat.replace(/([\-+])H:/i, '$1HH:');
      }
      if (requestedShort && offset.minute.isZero()) {
        offsetFormat = utils.first(offsetFormat.split(':'));
      }
      pattern = replaceTokens(offsetFormat, 'H{1,2}', offset.hour);
      pattern = replaceTokens(pattern, 'm{1,2}', offset.minute);
      pattern = timeZoneNames.gmtFormat.replace('{0}', tokensToString(pattern));
    }
    return pattern;
  }

  /**
   * Takes a time pattern of tokens and replaces those tokens with the appropriate CLDR translations.
   * @private
   * @see {@link http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table}
   * @function
   * @param {object} struct
   * @param {string} pattern
   * @param {object} languageObject
   * @return {string}
   */
  // struct should not be UTC but UT
  function formatTime(struct, pattern, languageObject) {
    var gregorian = languageObject.dates.calendars.gregorian;
    var dayPeriod = struct.hour.inRange(12, 23) ? 'pm' : 'am';
    var hour = struct.hour.plus(11).mod(12).plus(1);
    /*
    if (formatTypes.includes(pattern)) {
      pattern = gregorian.timeFormats[pattern];
    }
    */
    pattern = replaceTokens(pattern, 'a', gregorian.dayPeriods.format.abbreviated[dayPeriod]);
    pattern = replaceTokens(pattern, 'h{1,2}', hour);
    pattern = replaceTokens(pattern, 'H{1,2}', struct.hour);
    pattern = replaceTokens(pattern, 'K{1,2}', hour.minus(1));
    // if hour is 24, needs to be handled in date too
    //temp = new AstroDate().jd(new AstroDate().jd());
    //pattern = replaceTokens(pattern, 'k{1,2}', struct.hour.plus(1));
    //pattern = replaceTokens(pattern, 'j{1,2}', struct.hour);
    pattern = replaceTokens(pattern, 'm{1,2}', struct.minute);
    pattern = replaceTokens(pattern, 's{1,2}', struct.second);
    // needs fixing
    pattern = replaceTokens(pattern, 'S{1,}', struct.millisecond);
    //pattern = replaceTokens(pattern, 'A{1,}', value);
    // The short localized GMT format.
    var shortLocalisedGMT = formatLocalisedGMT(struct, languageObject, true);
    pattern = replaceTokens(pattern, 'O', shortLocalisedGMT);
    pattern = replaceTokens(pattern, 'z{1,3}', shortLocalisedGMT);
    // The long localized GMT format.
    var longLocalisedGMT = formatLocalisedGMT(struct, languageObject, false);
    pattern = replaceTokens(pattern, 'OOOO', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'zzzz', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'ZZZZ', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'vvvv', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'v', longLocalisedGMT);
    pattern = replaceTokens(pattern, 'VVVV', longLocalisedGMT);
    // The ISO8601 basic format short
    pattern = replaceTokens(pattern, 'X', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format short no Z
    pattern = replaceTokens(pattern, 'x', formatIsoTimeZone(struct, languageObject, false, 'basic', true));
    // The ISO8601 basic format
    var isoBasic = formatIsoTimeZone(struct, languageObject, true, 'basic', false);
    pattern = replaceTokens(pattern, 'Z{1,3}', isoBasic);
    pattern = replaceTokens(pattern, 'XX', isoBasic);
    // The ISO8601 basic format no Z
    pattern = replaceTokens(pattern, 'xx', formatIsoTimeZone(struct, languageObject, false, 'basic', false));
    //The ISO8601 extended format
    pattern = replaceTokens(pattern, 'XXX', formatIsoTimeZone(struct, languageObject, true, 'extended', false));
    //The ISO8601 extended format no Z
    pattern = replaceTokens(pattern, 'xxx', formatIsoTimeZone(struct, languageObject, false, 'extended', false));
    // The ISO8601 basic format optional seconds
    pattern = replaceTokens(pattern, 'XXXX', formatIsoTimeZone(struct, languageObject, true, 'basic', true));
    // The ISO8601 basic format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'basic', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'XXXXX', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    //The ISO8601 extended format no Z optional seconds
    pattern = replaceTokens(pattern, 'xxxxx', formatIsoTimeZoneSeconds(struct, languageObject, false, 'extended', true));
    //The ISO8601 extended format optional seconds
    pattern = replaceTokens(pattern, 'ZZZZZ', formatIsoTimeZoneSeconds(struct, languageObject, true, 'extended', true));
    return pattern;
  }

  module.exports = function format(struct, pattern, languageObject, isJulian) {
    var tokens = formatDate(struct, pattern, languageObject, isJulian);
    return tokensToString(formatTime(struct, tokens, languageObject));
  };
}());

},{"../node_modules/cldr-core/supplemental/weekData.json":5,"./commonData.js":34,"./convert.js":35,"./replaceTokens.js":51,"./utils.js":55}],41:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var convert = _dereq_('./convert.js');

  /**
   * Converts the given Gregorian structure to an appropriate structure depending
   * on the AstroDate instance settings.
   * @private
   * @function
   * @param {AstroDate} thisAstroDate
   * @param {Boolean} isJulian
   * @return {object}
   */
  module.exports = function getCorrectStruct(thisAstroDate, isJulian) {
    var struct = isJulian ? convert.jdToJulian(thisAstroDate.jd()) : thisAstroDate.getter();
    if (thisAstroDate.isDT()) {
      struct = thisAstroDate.isUT2TT() ? convert.struct.subDT(struct) : convert.struct.addDT(struct);
    }
    /*
    if (thisAstroDate.isTT()) {
      struct = convert.struct.toTT(struct);
    }
    */
    if (thisAstroDate.isUT()) {
      struct = convert.struct.toUT(struct);
    } else if (thisAstroDate.isLocal()) {
      struct = convert.struct.toLocal(struct);
    }
    return struct;
  };
}());

},{"./convert.js":35}],42:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isPlainObject = _dereq_('lodash.isplainobject');
  var daysIn = _dereq_('./daysIn.js');
  var data = _dereq_('./data.js');

  function inYearRange(year) {
    return year.isFinite();
  }

  function inMonthRange(month) {
    return month.inRange(1, 12);
  }

  function inDayRange(day, struct, isJulian) {
    return day.inRange(1, isJulian ? daysIn.julian.month(struct) : daysIn.gregorian.month(struct));
  }

  function inHourRange(hour) {
    return hour.inRange(0, 24);
  }

  function inMinuteRange(minute, struct) {
    return (struct.hour.equals(24) && minute.isZero()) ||
      (!struct.hour.equals(24) && minute.gte(0) && minute.lt(60));
  }

  function inSecondRange(second, struct) {
    var maxSecond = 60;
    if (struct.year.gte(1961) && struct.hour.equals(23) && struct.minute.equals(59)) {
      if (!isPlainObject(data.leapSeconds)) {
        throw new Error('No leap second table!');
      }
      var leapSecond = data.leapSeconds[struct.year.toString()];
      if (isPlainObject(leapSecond)) {
        leapSecond = leapSecond[struct.month.toString()];
        if (isPlainObject(leapSecond)) {
          leapSecond = Number(leapSecond[struct.day.toString()]);
          if (Number.isFinite(leapSecond)) {
            maxSecond += leapSecond;
          }
        }
      }
    }
    return (struct.hour.equals(24) && second.isZero()) ||
      (!struct.hour.equals(24) && second.gte(0) && second.lt(maxSecond));
  }

  function inMillisecondRange(millisecond, struct) {
    return (struct.hour.equals(24) && millisecond.isZero()) ||
      (!struct.hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
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

  module.exports = {
    yearRange: inYearRange,
    monthRange: inMonthRange,
    dayRange: inDayRange,
    hourRange: inHourRange,
    minuteRange: inMinuteRange,
    secondRange: inSecondRange,
    millisecondRange: inMillisecondRange,
    offsetRange: inOffsetRange
  };
}());

},{"./data.js":36,"./daysIn.js":38,"lodash.isplainobject":26}],43:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isPlainObject = _dereq_('lodash.isplainobject');
  var isIn = _dereq_('./isIn.js');
  var commonData = _dereq_('./commonData.js');
  var BigNum = _dereq_('./BigNum.js');

  module.exports = function isValid(struct, isJulian) {
    var valid = false;
    if (isPlainObject(struct)) {
      valid = !commonData.fullKeys.some(function(element) {
        var bn = struct[element.full];
        if (!BigNum.isBigNum(bn)) {
          return true;
        }
        switch (element.full) {
          case 'year':
            if (!isIn.yearRange(bn)) {
              return true;
            }
            break;
          case 'month':
            if (!isIn.monthRange(bn)) {
              return true;
            }
            break;
          case 'day':
            if (!isIn.dayRange(bn, struct, isJulian)) {
              return true;
            }
            break;
          case 'hour':
            if (!isIn.hourRange(bn)) {
              return true;
            }
            break;
          case 'minute':
            if (!isIn.minuteRange(bn, struct)) {
              return true;
            }
            break;
          case 'second':
            if (!isIn.secondRange(bn, struct)) {
              return true;
            }
            break;
          case 'millisecond':
            if (!isIn.millisecondRange(bn, struct)) {
              return true;
            }
            break;
          case 'offset':
            if (!isIn.offsetRange(bn)) {
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
  };
}());

},{"./BigNum.js":30,"./commonData.js":34,"./isIn.js":42,"lodash.isplainobject":26}],44:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var isNull = _dereq_('lodash.isnull');
  var utils = _dereq_('./utils.js');
  var convert = _dereq_('./convert.js');
  var BigNum = _dereq_('./BigNum.js');
  var invalidISOCharsRx = /[^\d\-+WT Z:,\.]/;

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
    };
    var firstSplit = string.trim().split(/[T ]/);
    var splitLength = firstSplit.length;
    var element;
    if (utils.inRange(splitLength, 1, 2)) {
      if (splitLength === 1) {
        element = utils.first(firstSplit);
        // we make a best guess
        if (element.slice(-4) === '-' ||
          element.startsWith('+') ||
          element.startsWith('-') ||
          element.length === 2 ||
          utils.countCharacter(element, '-') >= 2 ||
          element.includes('W')) {
          // only ordinal dates have a "-" at -4
          // only dates begin with "+" or "-"
          // dates and times can be only 2 digits but will default to
          // date unless preceeded with " " or "T"
          // only dates have 2 or more "-"
          // only dates have a week number "W"
          dtObject.date = element;
          dtObject.time = '00';
        } else if (element.endsWith('Z') ||
          element.includes(':') ||
          element.includes('.') ||
          element.includes(',') ||
          element.includes('+') ||
          element.slice(-3) === '-') {
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
        dtObject.date = utils.first(firstSplit) || '00';
        dtObject.time = utils.last(firstSplit);
      }
    }
    return dtObject;
  }

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 date patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  var datePatterns = {

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
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1] + '00', 1, 1);
      }
    }, {
      /**
       * yyyy
       * @private
       */
      regex: /^(\d{4})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], 1, 1);
      }
    }, {
      /**
       * yyyyMMdd
       * @private
       */
      regex: /^(\d{4})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * yyyyddd
       * @private
       */
      regex: /^(\d{4})(\d{3})$/,
      func: function(rxResult) {
        return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyyWww
       * @private
       */
      regex: /^(\d{4})W(\d{2})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyyWwwD
       * @private
       */
      regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
      }
    }],

    /**
     * The extended date patterns.
     * @private
     * @type {array.object}
     */
    extended: [{
      /**
       * -+[..y]yyyyy-MM
       * @private
       */
      regex: /^([\-+]\d{5,})-(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.dateToObject(rxResult[1], rxResult[2], 1);
        }
      }
    }, {
      /**
       * yyyy-MM
       * @private
       */
      regex: /^(\d{4})-(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-MM-dd
       * @private
       */
      regex: /^(\d{4})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyyy-MM-dd
       * @private
       */
      regex: /^([\-+]\d{5,})-(\d{2})-(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.dateToObject(rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * yyyy-DDD
       * @private
       */
      regex: /^(\d{4})-(\d{3})$/,
      func: function(rxResult) {
        return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * yyyy-Www
       * @private
       */
      regex: /^(\d{4})-W(\d{2})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
      }
    }, {
      /**
       * yyyy-Www-D
       * @private
       */
      regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * -+[..y]yyyy-DDD
       * @private
       */
      regex: /^([\-+]\d{5,})-(\d{3})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.ordinalToCalendar(rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www
       * @private
       */
      regex: /^([\-+]\d{5,})-W(\d{2})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.weekDateToCalendar(rxResult[1], rxResult[2], 1);
        }
      }
    }, {
      /**
       * -+[..y]yyyyy-Www-D
       * @private
       */
      regex: /^([\-+])(\d{5,})-W(\d{2})-([1-7]{1})$/,
      func: function(rxResult) {
        if (rxResult[1] !== '-0') {
          return convert.weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }]
  };

  /**
   * Covert arguents hour, minute, second, offset, sign to an object.
   * @private
   * @function
   * @param {(number|string|BigNum)} hour
   * @param {(number|string|BigNum)} minute
   * @param {(number|string|BigNum)} second
   * @param {(number|string|BigNum)} offset
   * @return {object.BigNum}
   */
  function createTimeObject(hour, minute, second, offset) {
    offset = new BigNum(offset);
    if (offset.isZero()) {
      offset = offset.abs();
    } else {
      offset = offset.neg();
    }
    return {
      hour: new BigNum(hour),
      minute: new BigNum(minute),
      second: new BigNum(second),
      millisecond: BigNum.zero(),
      offset: offset
    };
  }

  /**
   * Holds the a list of RegExps and functions for testing basic and extended ISO 8601 time patterns.
   * @private
   * @readonly
   * @type {object.array.object}
   * @see {@link http://en.wikipedia.org/wiki/ISO_8601}
   */
  var timePatterns = {

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
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHMM
       * @private
       */
      regex: /^(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHMMSS
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHZ
       * @private
       */
      regex: /^(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, 0);
      }
    }, {
      /**
       * HHMMZ
       * @private
       */
      regex: /^(\d{2})(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, 0);
      }
    }, {
      /**
       * HHMMSSZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
      }
    }, {
      /**
       * HH-+ZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HHMM-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH-+ZZZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2], rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HHMM-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HHMMSS-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], convert.date.getTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]f
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HHMM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HHMMSS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HHMM.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HHMMSS.,[..f]f-+ZZZZ
       * @private
       */
      regex: /^(\d{2})(\d{2})(\d{2})[\.,](\d+)([\-+]\d{2})(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5], rxResult[6]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
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
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HH:MM
       * @private
       */
      regex: /^(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HH:MM:SS
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], convert.date.getTimezoneOffset().neg());
      }
    }, {
      /**
       * HHZ
       * @private
       */
      regex: /^(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], 0, 0, 0);
      }
    }, {
      /**
       * HH:MMZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], 0, 0);
      }
    }, {
      /**
       * HH:MM:SSZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})Z$/,
      func: function(rxResult) {
        return createTimeObject(rxResult[1], rxResult[2], rxResult[3], 0);
      }
    }, {
      /**
       * HH-+ZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[2], rxResult[3]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], 0, 0, offset);
        }
      }
    }, {
      /**
       * HH:MM-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], 0, offset);
        }
      }
    }, {
      /**
       * HH:MM:SS-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return createTimeObject(rxResult[1], rxResult[2], rxResult[3], offset);
        }
      }
    }, {
      /**
       * HH.,[..f]f
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], convert.date.getTimezoneOffset(), rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], convert.date.getTimezoneOffset(), rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]fZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.hourFractionToTime(rxResult[2], 0, rxResult[1]);
      }
    }, {
      /**
       * HH:MM.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.minuteFractionToTime(rxResult[3], 0, rxResult[1], rxResult[1]);
      }
    }, {
      /**
       * HH:MM:SS.,[..f]fZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)Z$/,
      func: function(rxResult) {
        return convert.secondFractionToTime(rxResult[4], 0, rxResult[1], rxResult[2], rxResult[3]);
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }, {
      /**
       * HH.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[3], rxResult[4]);
        if (!offset.isNegativeZero()) {
          return convert.hourFractionToTime(rxResult[2], offset.isZero() ? offset : offset.neg(), rxResult[1]);
        }
      }
    }, {
      /**
       * HH:MM.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {
        var offset = convert.offsetToSeconds(rxResult[4], rxResult[5]);
        if (!offset.isNegativeZero()) {
          return convert.minuteFractionToTime(rxResult[3], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2]);
        }
      }
    }, {
      /**
       * HH:MM:SS.,[..f]f-+ZZ:ZZ
       * @private
       */
      regex: /^(\d{2}):(\d{2}):(\d{2})[\.,](\d+)([\-+]\d{2}):(\d{2})$/,
      func: function(rxResult) {

        var offset = convert.offsetToSeconds(rxResult[5], rxResult[6]);
        if (!offset.isNegativeZero()) {
          return convert.secondFractionToTime(rxResult[4], offset.isZero() ? offset : offset.neg(), rxResult[1], rxResult[2], rxResult[3]);
        }
      }
    }]
  };

  /**
   * Returns true if the ISO timeDate stamp has the correct character counts/looks like an ISO timeDate stamp.
   * @private
   * @function
   * @param {string} string
   * @return {boolean}
   */
  function isWellFormedIso(string) {
    return utils.isStringWithContent(string) &&
      !invalidISOCharsRx.test(string) &&
      utils.inRange(utils.countCharacter(string, ' ') + utils.countCharacter(string, 'T'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, 'W'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, 'Z'), 0, 1) &&
      utils.inRange(utils.countCharacter(string, '.') + utils.countCharacter(string, ','), 0, 1) &&
      utils.inRange(utils.countCharacter(string, '+'), 0, 2) &&
      utils.inRange(utils.countCharacter(string, '-'), 0, 4) &&
      utils.inRange(utils.countCharacter(string, ':'), 0, 4) &&
      string.replace(/\D/g, '').length > 1;
  }

  /**
   * @private
   * @function
   * @param {string} patter
   * @return {boolean}
   */
  var searchPatterns = function(pattern) {
    var rxResult = pattern.regex.exec(this.searchString);
    if (!isNull(rxResult)) {
      var result = pattern.func(rxResult);
      if (!isUndefined(result)) {
        Object.assign(this.dtObject, result);
      }
      return true;
    }
    return false;
  };

  /**
   * Takes a give string an parses it as a given ISO timestamp returning the date and time matches as an object.
   * Uses datePatterns and timePatterns for precision matching.
   * @private
   * @function
   * @param {string} isoString
   * @return {object}
   */
  module.exports = function isoParse(isoString) {
    var searchObject = {
      dtObject: {
        input: isoString
      },
      searchString: ''
    };
    if (isWellFormedIso(isoString)) {
      Object.assign(searchObject.dtObject, isoSplitDateTime(isoString));
      searchObject.searchString = searchObject.dtObject.date;
      if (!datePatterns.basic.some(searchPatterns, searchObject)) {
        if (datePatterns.extended.some(searchPatterns, searchObject)) {
          searchObject.searchString = searchObject.dtObject.time;
          timePatterns.extended.some(searchPatterns, searchObject);
        }
      } else {
        searchObject.searchString = searchObject.dtObject.time;
        timePatterns.basic.some(searchPatterns, searchObject);
      }
    }
    return searchObject.dtObject;
  };
}());

},{"./BigNum.js":30,"./convert.js":35,"./utils.js":55,"lodash.isnull":25,"validate.io-undefined":29}],45:[function(_dereq_,module,exports){
module.exports={
    "en": {
        "dates": {
            "calendars": {
                "gregorian": {
                    "months": {
                        "format": {
                            "abbreviated": {
                                "1": "Jan",
                                "2": "Feb",
                                "3": "Mar",
                                "4": "Apr",
                                "5": "May",
                                "6": "Jun",
                                "7": "Jul",
                                "8": "Aug",
                                "9": "Sep",
                                "10": "Oct",
                                "11": "Nov",
                                "12": "Dec"
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "January",
                                "2": "February",
                                "3": "March",
                                "4": "April",
                                "5": "May",
                                "6": "June",
                                "7": "July",
                                "8": "August",
                                "9": "September",
                                "10": "October",
                                "11": "November",
                                "12": "December"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Jan",
                                "2": "Feb",
                                "3": "Mar",
                                "4": "Apr",
                                "5": "May",
                                "6": "Jun",
                                "7": "Jul",
                                "8": "Aug",
                                "9": "Sep",
                                "10": "Oct",
                                "11": "Nov",
                                "12": "Dec"
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "January",
                                "2": "February",
                                "3": "March",
                                "4": "April",
                                "5": "May",
                                "6": "June",
                                "7": "July",
                                "8": "August",
                                "9": "September",
                                "10": "October",
                                "11": "November",
                                "12": "December"
                            }
                        }
                    },
                    "days": {
                        "format": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "quarters": {
                        "format": {
                            "abbreviated": {
                                "1": "Q1",
                                "2": "Q2",
                                "3": "Q3",
                                "4": "Q4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1st quarter",
                                "2": "2nd quarter",
                                "3": "3rd quarter",
                                "4": "4th quarter"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Q1",
                                "2": "Q2",
                                "3": "Q3",
                                "4": "Q4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1st quarter",
                                "2": "2nd quarter",
                                "3": "3rd quarter",
                                "4": "4th quarter"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "abbreviated": {
                                "midnight": "midnight",
                                "am": "AM",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "PM",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "narrow": {
                                "midnight": "mi",
                                "am": "a",
                                "am-alt-variant": "am",
                                "noon": "n",
                                "pm": "p",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "wide": {
                                "midnight": "midnight",
                                "am": "AM",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "PM",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "midnight": "midnight",
                                "am": "AM",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "PM",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "narrow": {
                                "midnight": "midnight",
                                "am": "AM",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "PM",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "wide": {
                                "midnight": "midnight",
                                "am": "AM",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "PM",
                                "pm-alt-variant": "pm",
                                "morning1": "morning",
                                "afternoon1": "afternoon",
                                "evening1": "evening",
                                "night1": "night"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "Before Christ",
                            "1": "Anno Domini",
                            "0-alt-variant": "Before Common Era",
                            "1-alt-variant": "Common Era"
                        },
                        "eraAbbr": {
                            "0": "BC",
                            "1": "AD",
                            "0-alt-variant": "BCE",
                            "1-alt-variant": "CE"
                        },
                        "eraNarrow": {
                            "0": "B",
                            "1": "A",
                            "0-alt-variant": "BCE",
                            "1-alt-variant": "CE"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE, MMMM d, y",
                        "long": "MMMM d, y",
                        "medium": "MMM d, y",
                        "short": "M/d/yy"
                    },
                    "timeFormats": {
                        "full": "h:mm:ss a zzzz",
                        "long": "h:mm:ss a z",
                        "medium": "h:mm:ss a",
                        "short": "h:mm a"
                    },
                    "dateTimeFormats": {
                        "full": "{1} 'at' {0}",
                        "long": "{1} 'at' {0}",
                        "medium": "{1}, {0}",
                        "short": "{1}, {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "d E",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "MMM d, y G",
                            "GyMMMEd": "E, MMM d, y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "hmsv": "h:mm:ss a v",
                            "Hmsv": "HH:mm:ss v",
                            "hmv": "h:mm a v",
                            "Hmv": "HH:mm v",
                            "M": "L",
                            "Md": "M/d",
                            "MEd": "E, M/d",
                            "MMM": "LLL",
                            "MMMd": "MMM d",
                            "MMMEd": "E, MMM d",
                            "MMMMd": "MMMM d",
                            "ms": "mm:ss",
                            "y": "y",
                            "yM": "M/y",
                            "yMd": "M/d/y",
                            "yMEd": "E, M/d/y",
                            "yMMM": "MMM y",
                            "yMMMd": "MMM d, y",
                            "yMMMEd": "E, MMM d, y",
                            "yMMMM": "MMMM y",
                            "yQQQ": "QQQ y",
                            "yQQQQ": "QQQQ y"
                        },
                        "appendItems": {
                            "Day": "{0} ({2}: {1})",
                            "Day-Of-Week": "{0} {1}",
                            "Era": "{0} {1}",
                            "Hour": "{0} ({2}: {1})",
                            "Minute": "{0} ({2}: {1})",
                            "Month": "{0} ({2}: {1})",
                            "Quarter": "{0} ({2}: {1})",
                            "Second": "{0} ({2}: {1})",
                            "Timezone": "{0} {1}",
                            "Week": "{0} ({2}: {1})",
                            "Year": "{0} {1}"
                        },
                        "intervalFormats": {
                            "intervalFormatFallback": "{0} – {1}",
                            "d": {
                                "d": "d – d"
                            },
                            "h": {
                                "a": "h a – h a",
                                "h": "h – h a"
                            },
                            "H": {
                                "H": "HH – HH"
                            },
                            "hm": {
                                "a": "h:mm a – h:mm a",
                                "h": "h:mm – h:mm a",
                                "m": "h:mm – h:mm a"
                            },
                            "Hm": {
                                "H": "HH:mm – HH:mm",
                                "m": "HH:mm – HH:mm"
                            },
                            "hmv": {
                                "a": "h:mm a – h:mm a v",
                                "h": "h:mm – h:mm a v",
                                "m": "h:mm – h:mm a v"
                            },
                            "Hmv": {
                                "H": "HH:mm – HH:mm v",
                                "m": "HH:mm – HH:mm v"
                            },
                            "hv": {
                                "a": "h a – h a v",
                                "h": "h – h a v"
                            },
                            "Hv": {
                                "H": "HH – HH v"
                            },
                            "M": {
                                "M": "M – M"
                            },
                            "Md": {
                                "d": "M/d – M/d",
                                "M": "M/d – M/d"
                            },
                            "MEd": {
                                "d": "E, M/d – E, M/d",
                                "M": "E, M/d – E, M/d"
                            },
                            "MMM": {
                                "M": "MMM – MMM"
                            },
                            "MMMd": {
                                "d": "MMM d – d",
                                "M": "MMM d – MMM d"
                            },
                            "MMMEd": {
                                "d": "E, MMM d – E, MMM d",
                                "M": "E, MMM d – E, MMM d"
                            },
                            "y": {
                                "y": "y – y"
                            },
                            "yM": {
                                "M": "M/y – M/y",
                                "y": "M/y – M/y"
                            },
                            "yMd": {
                                "d": "M/d/y – M/d/y",
                                "M": "M/d/y – M/d/y",
                                "y": "M/d/y – M/d/y"
                            },
                            "yMEd": {
                                "d": "E, M/d/y – E, M/d/y",
                                "M": "E, M/d/y – E, M/d/y",
                                "y": "E, M/d/y – E, M/d/y"
                            },
                            "yMMM": {
                                "M": "MMM – MMM y",
                                "y": "MMM y – MMM y"
                            },
                            "yMMMd": {
                                "d": "MMM d – d, y",
                                "M": "MMM d – MMM d, y",
                                "y": "MMM d, y – MMM d, y"
                            },
                            "yMMMEd": {
                                "d": "E, MMM d – E, MMM d, y",
                                "M": "E, MMM d – E, MMM d, y",
                                "y": "E, MMM d, y – E, MMM d, y"
                            },
                            "yMMMM": {
                                "M": "MMMM – MMMM y",
                                "y": "MMMM y – MMMM y"
                            }
                        }
                    }
                }
            },
            "timeZoneNames": {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
                "regionFormat": "{0} Time",
                "regionFormat-type-daylight": "{0} Daylight Time",
                "regionFormat-type-standard": "{0} Standard Time",
                "fallbackFormat": "{1} ({0})"
            }
        }
    },
    "en-GB": {
        "dates": {
            "calendars": {
                "gregorian": {
                    "months": {
                        "format": {
                            "abbreviated": {
                                "1": "Jan",
                                "2": "Feb",
                                "3": "Mar",
                                "4": "Apr",
                                "5": "May",
                                "6": "Jun",
                                "7": "Jul",
                                "8": "Aug",
                                "9": "Sep",
                                "10": "Oct",
                                "11": "Nov",
                                "12": "Dec"
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "January",
                                "2": "February",
                                "3": "March",
                                "4": "April",
                                "5": "May",
                                "6": "June",
                                "7": "July",
                                "8": "August",
                                "9": "September",
                                "10": "October",
                                "11": "November",
                                "12": "December"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Jan",
                                "2": "Feb",
                                "3": "Mar",
                                "4": "Apr",
                                "5": "May",
                                "6": "Jun",
                                "7": "Jul",
                                "8": "Aug",
                                "9": "Sep",
                                "10": "Oct",
                                "11": "Nov",
                                "12": "Dec"
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "January",
                                "2": "February",
                                "3": "March",
                                "4": "April",
                                "5": "May",
                                "6": "June",
                                "7": "July",
                                "8": "August",
                                "9": "September",
                                "10": "October",
                                "11": "November",
                                "12": "December"
                            }
                        }
                    },
                    "days": {
                        "format": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "quarters": {
                        "format": {
                            "abbreviated": {
                                "1": "Q1",
                                "2": "Q2",
                                "3": "Q3",
                                "4": "Q4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1st quarter",
                                "2": "2nd quarter",
                                "3": "3rd quarter",
                                "4": "4th quarter"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "Q1",
                                "2": "Q2",
                                "3": "Q3",
                                "4": "Q4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1st quarter",
                                "2": "2nd quarter",
                                "3": "3rd quarter",
                                "4": "4th quarter"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "abbreviated": {
                                "midnight": "midnight",
                                "am": "am",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "pm",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "narrow": {
                                "midnight": "mi",
                                "am": "a",
                                "am-alt-variant": "am",
                                "noon": "n",
                                "pm": "p",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "wide": {
                                "midnight": "midnight",
                                "am": "am",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "pm",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "midnight": "midnight",
                                "am": "am",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "pm",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "narrow": {
                                "midnight": "midnight",
                                "am": "a",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "p",
                                "pm-alt-variant": "pm",
                                "morning1": "in the morning",
                                "afternoon1": "in the afternoon",
                                "evening1": "in the evening",
                                "night1": "at night"
                            },
                            "wide": {
                                "midnight": "midnight",
                                "am": "am",
                                "am-alt-variant": "am",
                                "noon": "noon",
                                "pm": "pm",
                                "pm-alt-variant": "pm",
                                "morning1": "morning",
                                "afternoon1": "afternoon",
                                "evening1": "evening",
                                "night1": "night"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "Before Christ",
                            "1": "Anno Domini",
                            "0-alt-variant": "Before Common Era",
                            "1-alt-variant": "Common Era"
                        },
                        "eraAbbr": {
                            "0": "BC",
                            "1": "AD",
                            "0-alt-variant": "BCE",
                            "1-alt-variant": "CE"
                        },
                        "eraNarrow": {
                            "0": "B",
                            "1": "A",
                            "0-alt-variant": "BCE",
                            "1-alt-variant": "CE"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE, d MMMM y",
                        "long": "d MMMM y",
                        "medium": "d MMM y",
                        "short": "dd/MM/y"
                    },
                    "timeFormats": {
                        "full": "HH:mm:ss zzzz",
                        "long": "HH:mm:ss z",
                        "medium": "HH:mm:ss",
                        "short": "HH:mm"
                    },
                    "dateTimeFormats": {
                        "full": "{1} 'at' {0}",
                        "long": "{1} 'at' {0}",
                        "medium": "{1}, {0}",
                        "short": "{1}, {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "E d",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "d MMM y G",
                            "GyMMMEd": "E, d MMM y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "hmsv": "h:mm:ss a v",
                            "Hmsv": "HH:mm:ss v",
                            "hmv": "h:mm a v",
                            "Hmv": "HH:mm v",
                            "M": "L",
                            "Md": "dd/MM",
                            "MEd": "E, dd/MM",
                            "MMdd": "dd/MM",
                            "MMM": "LLL",
                            "MMMd": "d MMM",
                            "MMMEd": "E, d MMM",
                            "MMMMd": "d MMMM",
                            "ms": "mm:ss",
                            "y": "y",
                            "yM": "MM/y",
                            "yMd": "dd/MM/y",
                            "yMEd": "E, dd/MM/y",
                            "yMMM": "MMM y",
                            "yMMMd": "d MMM y",
                            "yMMMEd": "E, d MMM y",
                            "yMMMM": "MMMM y",
                            "yQQQ": "QQQ y",
                            "yQQQQ": "QQQQ y"
                        },
                        "appendItems": {
                            "Day": "{0} ({2}: {1})",
                            "Day-Of-Week": "{0} {1}",
                            "Era": "{0} {1}",
                            "Hour": "{0} ({2}: {1})",
                            "Minute": "{0} ({2}: {1})",
                            "Month": "{0} ({2}: {1})",
                            "Quarter": "{0} ({2}: {1})",
                            "Second": "{0} ({2}: {1})",
                            "Timezone": "{0} {1}",
                            "Week": "{0} ({2}: {1})",
                            "Year": "{0} {1}"
                        },
                        "intervalFormats": {
                            "intervalFormatFallback": "{0} – {1}",
                            "d": {
                                "d": "d – d"
                            },
                            "h": {
                                "a": "h a – h a",
                                "h": "h – h a"
                            },
                            "H": {
                                "H": "HH – HH"
                            },
                            "hm": {
                                "a": "h:mm a – h:mm a",
                                "h": "h:mm – h:mm a",
                                "m": "h:mm – h:mm a"
                            },
                            "Hm": {
                                "H": "HH:mm – HH:mm",
                                "m": "HH:mm – HH:mm"
                            },
                            "hmv": {
                                "a": "h:mm a – h:mm a v",
                                "h": "h:mm – h:mm a v",
                                "m": "h:mm – h:mm a v"
                            },
                            "Hmv": {
                                "H": "HH:mm – HH:mm v",
                                "m": "HH:mm – HH:mm v"
                            },
                            "hv": {
                                "a": "h a – h a v",
                                "h": "h – h a v"
                            },
                            "Hv": {
                                "H": "HH – HH v"
                            },
                            "M": {
                                "M": "M – M"
                            },
                            "Md": {
                                "d": "dd/MM – dd/MM",
                                "M": "dd/MM – dd/MM"
                            },
                            "MEd": {
                                "d": "E dd/MM – E dd/MM",
                                "M": "E dd/MM – E dd/MM"
                            },
                            "MMM": {
                                "M": "MMM – MMM"
                            },
                            "MMMd": {
                                "d": "d – d MMM",
                                "M": "d MMM – d MMM"
                            },
                            "MMMEd": {
                                "d": "E d – E d MMM",
                                "M": "E d MMM – E d MMM"
                            },
                            "y": {
                                "y": "y – y"
                            },
                            "yM": {
                                "M": "MM/y – MM/y",
                                "y": "MM/y – MM/y"
                            },
                            "yMd": {
                                "d": "dd/MM/y – dd/MM/y",
                                "M": "dd/MM/y – dd/MM/y",
                                "y": "dd/MM/y – dd/MM/y"
                            },
                            "yMEd": {
                                "d": "E, dd/MM/y – E, dd/MM/y",
                                "M": "E, dd/MM/y – E, dd/MM/y",
                                "y": "E, dd/MM/y – E, dd/MM/y"
                            },
                            "yMMM": {
                                "M": "MMM – MMM y",
                                "y": "MMM y – MMM y"
                            },
                            "yMMMd": {
                                "d": "d – d MMM y",
                                "M": "d MMM – d MMM y",
                                "y": "d MMM y – d MMM y"
                            },
                            "yMMMEd": {
                                "d": "E, d – E, d MMM y",
                                "M": "E, d MMM – E, d MMM y",
                                "y": "E, d MMM y – E, d MMM y"
                            },
                            "yMMMM": {
                                "M": "MMMM – MMMM y",
                                "y": "MMMM y – MMMM y"
                            }
                        }
                    }
                }
            },
            "timeZoneNames": {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
                "regionFormat": "{0} Time",
                "regionFormat-type-daylight": "{0} Daylight Time",
                "regionFormat-type-standard": "{0} Standard Time",
                "fallbackFormat": "{1} ({0})"
            }
        }
    },
    "sv": {
        "dates": {
            "calendars": {
                "gregorian": {
                    "months": {
                        "format": {
                            "abbreviated": {
                                "1": "jan.",
                                "2": "feb.",
                                "3": "mars",
                                "4": "apr.",
                                "5": "maj",
                                "6": "juni",
                                "7": "juli",
                                "8": "aug.",
                                "9": "sep.",
                                "10": "okt.",
                                "11": "nov.",
                                "12": "dec."
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "januari",
                                "2": "februari",
                                "3": "mars",
                                "4": "april",
                                "5": "maj",
                                "6": "juni",
                                "7": "juli",
                                "8": "augusti",
                                "9": "september",
                                "10": "oktober",
                                "11": "november",
                                "12": "december"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "jan.",
                                "2": "feb.",
                                "3": "mars",
                                "4": "apr.",
                                "5": "maj",
                                "6": "juni",
                                "7": "juli",
                                "8": "aug.",
                                "9": "sep.",
                                "10": "okt.",
                                "11": "nov.",
                                "12": "dec."
                            },
                            "narrow": {
                                "1": "J",
                                "2": "F",
                                "3": "M",
                                "4": "A",
                                "5": "M",
                                "6": "J",
                                "7": "J",
                                "8": "A",
                                "9": "S",
                                "10": "O",
                                "11": "N",
                                "12": "D"
                            },
                            "wide": {
                                "1": "januari",
                                "2": "februari",
                                "3": "mars",
                                "4": "april",
                                "5": "maj",
                                "6": "juni",
                                "7": "juli",
                                "8": "augusti",
                                "9": "september",
                                "10": "oktober",
                                "11": "november",
                                "12": "december"
                            }
                        }
                    },
                    "days": {
                        "format": {
                            "abbreviated": {
                                "sun": "sön",
                                "mon": "mån",
                                "tue": "tis",
                                "wed": "ons",
                                "thu": "tors",
                                "fri": "fre",
                                "sat": "lör"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "O",
                                "thu": "T",
                                "fri": "F",
                                "sat": "L"
                            },
                            "short": {
                                "sun": "sö",
                                "mon": "må",
                                "tue": "ti",
                                "wed": "on",
                                "thu": "to",
                                "fri": "fr",
                                "sat": "lö"
                            },
                            "wide": {
                                "sun": "söndag",
                                "mon": "måndag",
                                "tue": "tisdag",
                                "wed": "onsdag",
                                "thu": "torsdag",
                                "fri": "fredag",
                                "sat": "lördag"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "sön",
                                "mon": "mån",
                                "tue": "tis",
                                "wed": "ons",
                                "thu": "tors",
                                "fri": "fre",
                                "sat": "lör"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "O",
                                "thu": "T",
                                "fri": "F",
                                "sat": "L"
                            },
                            "short": {
                                "sun": "sö",
                                "mon": "må",
                                "tue": "ti",
                                "wed": "on",
                                "thu": "to",
                                "fri": "fr",
                                "sat": "lö"
                            },
                            "wide": {
                                "sun": "söndag",
                                "mon": "måndag",
                                "tue": "tisdag",
                                "wed": "onsdag",
                                "thu": "torsdag",
                                "fri": "fredag",
                                "sat": "lördag"
                            }
                        }
                    },
                    "quarters": {
                        "format": {
                            "abbreviated": {
                                "1": "K1",
                                "2": "K2",
                                "3": "K3",
                                "4": "K4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1:a kvartalet",
                                "2": "2:a kvartalet",
                                "3": "3:e kvartalet",
                                "4": "4:e kvartalet"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "1": "K1",
                                "2": "K2",
                                "3": "K3",
                                "4": "K4"
                            },
                            "narrow": {
                                "1": "1",
                                "2": "2",
                                "3": "3",
                                "4": "4"
                            },
                            "wide": {
                                "1": "1:a kvartalet",
                                "2": "2:a kvartalet",
                                "3": "3:e kvartalet",
                                "4": "4:e kvartalet"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "abbreviated": {
                                "midnight": "midnatt",
                                "am": "fm",
                                "pm": "em",
                                "morning1": "på morg.",
                                "morning2": "på förm.",
                                "afternoon1": "på efterm.",
                                "evening1": "på kvällen",
                                "night1": "på natten"
                            },
                            "narrow": {
                                "midnight": "midn.",
                                "am": "fm",
                                "pm": "em",
                                "morning1": "på morg.",
                                "morning2": "på förm.",
                                "afternoon1": "på efterm.",
                                "evening1": "på kvällen",
                                "night1": "på natten"
                            },
                            "wide": {
                                "midnight": "midnatt",
                                "am": "fm",
                                "pm": "em",
                                "morning1": "på morgonen",
                                "morning2": "på förmiddagen",
                                "afternoon1": "på eftermiddagen",
                                "evening1": "på kvällen",
                                "night1": "på natten"
                            }
                        },
                        "stand-alone": {
                            "abbreviated": {
                                "midnight": "midnatt",
                                "am": "f.m.",
                                "pm": "e.m.",
                                "morning1": "morgon",
                                "morning2": "förm.",
                                "afternoon1": "efterm.",
                                "evening1": "kväll",
                                "night1": "natt"
                            },
                            "narrow": {
                                "midnight": "midn.",
                                "am": "fm",
                                "pm": "em",
                                "morning1": "morg.",
                                "morning2": "förm.",
                                "afternoon1": "efterm.",
                                "evening1": "kväll",
                                "night1": "natt"
                            },
                            "wide": {
                                "midnight": "midnatt",
                                "am": "förmiddag",
                                "pm": "eftermiddag",
                                "morning1": "morgon",
                                "morning2": "förmiddag",
                                "afternoon1": "eftermiddag",
                                "evening1": "kväll",
                                "night1": "natt"
                            }
                        }
                    },
                    "eras": {
                        "eraNames": {
                            "0": "före Kristus",
                            "1": "efter Kristus",
                            "0-alt-variant": "före västerländsk tideräkning",
                            "1-alt-variant": "västerländsk tideräkning"
                        },
                        "eraAbbr": {
                            "0": "f.Kr.",
                            "1": "e.Kr.",
                            "0-alt-variant": "f.v.t.",
                            "1-alt-variant": "v.t."
                        },
                        "eraNarrow": {
                            "0": "f.Kr.",
                            "1": "e.Kr.",
                            "0-alt-variant": "fvt",
                            "1-alt-variant": "vt"
                        }
                    },
                    "dateFormats": {
                        "full": "EEEE d MMMM y",
                        "long": "d MMMM y",
                        "medium": "d MMM y",
                        "short": "y-MM-dd"
                    },
                    "timeFormats": {
                        "full": "'kl'. HH:mm:ss zzzz",
                        "full-alt-variant": "'kl'. HH.mm.ss zzzz",
                        "long": "HH:mm:ss z",
                        "long-alt-variant": "HH.mm.ss z",
                        "medium": "HH:mm:ss",
                        "medium-alt-variant": "HH.mm.ss",
                        "short": "HH:mm",
                        "short-alt-variant": "HH.mm"
                    },
                    "dateTimeFormats": {
                        "full": "{1} {0}",
                        "long": "{1} {0}",
                        "medium": "{1} {0}",
                        "short": "{1} {0}",
                        "availableFormats": {
                            "d": "d",
                            "E": "ccc",
                            "Ed": "E d",
                            "Ehm": "E h:mm a",
                            "EHm": "E HH:mm",
                            "Ehms": "E h:mm:ss a",
                            "EHms": "E HH:mm:ss",
                            "Gy": "y G",
                            "GyMMM": "MMM y G",
                            "GyMMMd": "d MMM y G",
                            "GyMMMEd": "E d MMM y G",
                            "h": "h a",
                            "H": "HH",
                            "hm": "h:mm a",
                            "Hm": "HH:mm",
                            "hms": "h:mm:ss a",
                            "Hms": "HH:mm:ss",
                            "hmsv": "h:mm:ss a v",
                            "Hmsv": "HH:mm:ss v",
                            "hmv": "h:mm a v",
                            "Hmv": "HH:mm v",
                            "M": "L",
                            "Md": "d/M",
                            "MEd": "E d/M",
                            "MMd": "d/M",
                            "MMdd": "dd/MM",
                            "MMM": "LLL",
                            "MMMd": "d MMM",
                            "MMMEd": "E d MMM",
                            "MMMMd": "d MMMM",
                            "MMMMEd": "E d MMMM",
                            "ms": "mm:ss",
                            "y": "y",
                            "yM": "y-MM",
                            "yMd": "y-MM-dd",
                            "yMEd": "E, y-MM-dd",
                            "yMM": "y-MM",
                            "yMMM": "MMM y",
                            "yMMMd": "d MMM y",
                            "yMMMEd": "E d MMM y",
                            "yMMMM": "MMMM y",
                            "yQQQ": "QQQ y",
                            "yQQQQ": "QQQQ y"
                        },
                        "appendItems": {
                            "Day": "{0} ({2}: {1})",
                            "Day-Of-Week": "{0} {1}",
                            "Era": "{1} {0}",
                            "Hour": "{0} ({2}: {1})",
                            "Minute": "{0} ({2}: {1})",
                            "Month": "{0} ({2}: {1})",
                            "Quarter": "{0} ({2}: {1})",
                            "Second": "{0} ({2}: {1})",
                            "Timezone": "{0} {1}",
                            "Week": "{0} ({2}: {1})",
                            "Year": "{1} {0}"
                        },
                        "intervalFormats": {
                            "intervalFormatFallback": "{0} – {1}",
                            "d": {
                                "d": "d–d"
                            },
                            "h": {
                                "a": "h a – h a",
                                "h": "h–h a"
                            },
                            "H": {
                                "H": "HH–HH"
                            },
                            "hm": {
                                "a": "h:mm a – h:mm a",
                                "h": "h:mm–h:mm a",
                                "m": "h:mm–h:mm a"
                            },
                            "Hm": {
                                "H": "HH:mm–HH:mm",
                                "m": "HH:mm–HH:mm"
                            },
                            "hmv": {
                                "a": "h:mm a – h:mm a v",
                                "h": "h:mm–h:mm a v",
                                "m": "h:mm–h:mm a v"
                            },
                            "Hmv": {
                                "H": "HH:mm–HH:mm v",
                                "m": "HH:mm–HH:mm v"
                            },
                            "hv": {
                                "a": "h a – h a v",
                                "h": "h–h a v"
                            },
                            "Hv": {
                                "H": "HH–HH v"
                            },
                            "M": {
                                "M": "M–M"
                            },
                            "Md": {
                                "d": "d–d/M",
                                "M": "d/M–d/M"
                            },
                            "MEd": {
                                "d": "E d/M – E d/M",
                                "M": "E d/M – E d/M"
                            },
                            "MMM": {
                                "M": "MMM–MMM"
                            },
                            "MMMd": {
                                "d": "d–d MMM",
                                "M": "d MMM – d MMM"
                            },
                            "MMMEd": {
                                "d": "E d – E d MMM",
                                "M": "E d MMM – E d MMM"
                            },
                            "y": {
                                "y": "y–y"
                            },
                            "yM": {
                                "M": "y-MM – MM",
                                "y": "y-MM – y-MM"
                            },
                            "yMd": {
                                "d": "y-MM-dd – dd",
                                "M": "y-MM-dd – MM-dd",
                                "y": "y-MM-dd – y-MM-dd"
                            },
                            "yMEd": {
                                "d": "E, y-MM-dd – E, y-MM-dd",
                                "M": "E, y-MM-dd – E, y-MM-dd",
                                "y": "E, y-MM-dd – E, y-MM-dd"
                            },
                            "yMMM": {
                                "M": "MMM–MMM y",
                                "y": "MMM y – MMM y"
                            },
                            "yMMMd": {
                                "d": "d–d MMM y",
                                "M": "d MMM–d MMM y",
                                "y": "d MMM y–d MMM y"
                            },
                            "yMMMEd": {
                                "d": "E dd MMM–E dd MMM y",
                                "M": "E dd MMM–E dd MMM y",
                                "y": "E dd MMM y–E dd MMM y"
                            },
                            "yMMMM": {
                                "M": "MMMM–MMMM y",
                                "y": "MMMM y – MMMM y"
                            }
                        }
                    }
                }
            },
            "timeZoneNames": {
                "hourFormat": "+HH:mm;−HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
                "regionFormat": "{0}tid",
                "regionFormat-type-daylight": "{0} (sommartid)",
                "regionFormat-type-standard": "{0} (normaltid)",
                "fallbackFormat": "{1} ({0})"
            }
        }
    }
}
},{}],46:[function(_dereq_,module,exports){
(function () {
  'use strict';

  var Canonicalize = _dereq_('./Canonicalize.js');
  var addLikelySubtags = _dereq_('./addLikelySubtags.js');
  var removeLikelySubtags = _dereq_('./removeLikelySubtags.js');

  function LanguageCan(languageId) {
    var raw = new Canonicalize(languageId);
    var min = new Canonicalize(removeLikelySubtags(languageId));
    var max = new Canonicalize(addLikelySubtags(languageId));
    Object.defineProperties(this, {
      raw: {
        value: function () {
          return raw;
        }
      },
      min: {
        value: function () {
          return min;
        }
      },
      max: {
        value: function () {
          return max;
        }
      }
    });
  }

  Object.defineProperties(LanguageCan, {
    defaultSeperator: {
      value: Canonicalize.defaultSeperator,
    },
    bcp47Seperator: {
      value: Canonicalize.bcp47Seperator,
    }
  });

  Object.defineProperties(LanguageCan.prototype, {
    valueOf: {
      value: function() {
        return this.min().valueOf();
      }
    },
    maxValueOf: {
      value: function() {
        return this.max().valueOf();
      }
    },
    toString: {
      value: function() {
        return this.min().toString();
      }
    },
    toBCP47String: {
      value: function() {
        return this.min().toBCP47String();
      }
    },
    toMaxString: {
      value: function() {
        return this.max().toString();
      }
    },
    toMaxBCP47String: {
      value: function() {
        return this.max().toBCP47String();
      }
    },
    isValid: {
      value: function() {
        return this.raw().isValid();
      }
    }
  });

  module.exports = LanguageCan;
}());

},{"./Canonicalize.js":31,"./addLikelySubtags.js":32,"./removeLikelySubtags.js":50}],47:[function(_dereq_,module,exports){
module.exports={
    "1972": {
        "6": {
            "30": "1"
        },
        "12": {
            "31": "1"
        }
    },
    "1973": {
        "12": {
            "31": "1"
        }
    },
    "1974": {
        "12": {
            "31": "1"
        }
    },
    "1975": {
        "12": {
            "31": "1"
        }
    },
    "1976": {
        "12": {
            "31": "1"
        }
    },
    "1977": {
        "12": {
            "31": "1"
        }
    },
    "1978": {
        "12": {
            "31": "1"
        }
    },
    "1979": {
        "12": {
            "31": "1"
        }
    },
    "1981": {
        "6": {
            "30": "1"
        }
    },
    "1982": {
        "6": {
            "30": "1"
        }
    },
    "1983": {
        "6": {
            "30": "1"
        }
    },
    "1985": {
        "6": {
            "30": "1"
        }
    },
    "1987": {
        "12": {
            "31": "1"
        }
    },
    "1989": {
        "12": {
            "31": "1"
        }
    },
    "1990": {
        "12": {
            "31": "1"
        }
    },
    "1992": {
        "6": {
            "30": "1"
        }
    },
    "1993": {
        "6": {
            "30": "1"
        }
    },
    "1994": {
        "6": {
            "30": "1"
        }
    },
    "1995": {
        "12": {
            "31": "1"
        }
    },
    "1997": {
        "6": {
            "30": "1"
        }
    },
    "1998": {
        "12": {
            "31": "1"
        }
    },
    "2005": {
        "12": {
            "31": "1"
        }
    },
    "2008": {
        "12": {
            "31": "1"
        }
    },
    "2012": {
        "6": {
            "30": "1"
        }
    },
    "2015": {
        "6": {
            "30": "1"
        }
    }
}
},{}],48:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  function isGregorianLeapYear(struct) {
    return struct.year.mod(400).isZero() ||
      (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
  }

  function isJulianLeapYear(struct) {
    return struct.year.mod(4).equals(0);
  }

  module.exports = {
    isGregorian: isGregorianLeapYear,
    isJulian:  isJulianLeapYear
  };
}());

},{}],49:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isString = _dereq_('is-string');
  var isPlainObject = _dereq_('lodash.isplainobject');
  var commonData = _dereq_('./commonData.js');

  function normaliseUnit(unitString) {
    var unit;
    if (isString(unitString)) {
      unitString = unitString.trim().toLowerCase();
      if (unitString.length > 2 && unitString.endsWith('s')) {
        unitString = unitString.slice(0, -1);
      }
      unit = commonData.fullKeys.find(function(element) {
        return unitString === element.alias || unitString === element.full;
      });
    }
    return unit && unit.full;
  }

  function normaliseOptions(options) {
    var normalised = {};
    if (isPlainObject(options)) {
      Object.keys(options).forEach(function(key) {
        key = key.toLowerCase();
        commonData.fullOptions.forEach(function(opt) {
          if (key === opt.alias || key === opt.full) {
            normalised[key] = opt.full;
          }
        });
      });
    }
    return normalised;
  }

  module.exports = {
    unit: normaliseUnit,
    options: normaliseOptions
  };
}());

},{"./commonData.js":34,"is-string":24,"lodash.isplainobject":26}],50:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

	/**
	 * Given a locale, remove any fields that Add Likely Subtags would add.
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
	 * return it.
	 * 2. Remove the variants from max.
	 * 3. Then for trial in {language, language _ region, language _ script}. If
	 * AddLikelySubtags(trial) = max, then return trial + variants.
	 * 4. If you do not get a match, return max + variants.).
	 */

  var defaultSeperator = _dereq_('./Canonicalize.js').defaultSeperator;
  var addLikelySubtags = _dereq_('./addLikelySubtags.js');

  module.exports = function removeLikelySubtags(languageId) {
    // 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled, return it.
    var subTags = addLikelySubtags(languageId).split(defaultSeperator);
    // 2. Remove the variants from max.
    var max = subTags.slice(0, 3);
    var maxId = max.join(defaultSeperator);
    var variants = subTags.slice(3);
    //3. Then for trial in {language, language _ region, language _ script}. If
	  // AddLikelySubtags(trial) = max, then return trial + variants.
    var trials = [max[0], max[0] + defaultSeperator + max[2], max[0] + defaultSeperator + max[1]];
    // 4. If you do not get a match, return max + variants.).
    var trialId = maxId;
    trials.some(function (trial) {
      if (addLikelySubtags(trial) === maxId) {
        trialId = trial;
        return true;
      }
    });
    return trialId + (variants.length ? defaultSeperator + variants.join(defaultSeperator) : '');
  };
}());

},{"./Canonicalize.js":31,"./addLikelySubtags.js":32}],51:[function(_dereq_,module,exports){
/*global require, module */
(function() {
  'use strict';

  var tokenizePattern = _dereq_('./tokenizePattern.js');
  var tokenReplace = _dereq_('./tokenReplace.js');

  /**
   * Replaces the given token pattern in the given pattern with the supplied string value.
   * @private
   * @param {string} pattern
   * @param {string} token
   * @param {string} value
   * @return {Array}
   */
  module.exports = function replaceTokens(pattern, token, value) {
    var patterns = Array.isArray(pattern) ? pattern : tokenizePattern(pattern);
    return patterns.map(function (p) {
      if (p.type === 'symbols') {
        p.value = tokenReplace(p.value, token, value);
      }
      return p;
    });
  };
}());

},{"./tokenReplace.js":53,"./tokenizePattern.js":54}],52:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isUndefined = _dereq_('validate.io-undefined');
  var commonData = _dereq_('./commonData.js');
  var utils = _dereq_('./utils.js');
  var convert = _dereq_('./convert.js');

  /**
   * Converts a date struct to an ISO extended dateTime stamp.
   * This routine needs changing so that the type of ISO dateTime stamp can be choosen.
   * @private
   * @function
   * @param {object} struct
   * @param {number} userPadding
   * @return {string}
   */
  module.exports = function toISOString(struct, userPadding) {
    var string = '';
    var index = 0;
    var padding;
    var value;
    var key;
    var number = Number(userPadding);
    if (number < 5 || !Number.isFinite(number)) {
      number = 6;
    }
    for (var count = 0; count < 3; count += 1) {
      if (isUndefined(struct[commonData.fullKeys[count].full])) {
        index = 3;
        break;
      }
    }
    for (var last = commonData.fullKeys.length - 1; index < last; index += 1) {
      key = commonData.fullKeys[index].full;
      value = struct[key];
      if (key === 'year') {
        if (value.lt(0)) {
          string += '-';
          padding = number;
        } else if (value.gte(10000)) {
          string += '+';
          padding = number;
        } else {
          padding = 4;
        }
      } else if (key === 'hour') {
        string += 'T';
        padding = 2;
      } else if (key === 'millisecond') {
        padding = 3;
      } else {
        padding = 2;
      }
      string += value.abs().padLeadingZero(padding);
      if (index < 2) {
        string += '-';
      } else if (utils.inRange(index, 3, 4)) {
        string += ':';
      } else if (key === 'second') {
        string += '.';
      }
    }
    value = struct.offset;
    if (value.isZero()) {
      string += 'Z';
    } else {
      string += value.lte(0) ? '+' : '-';
      value = convert.struct.fractionToTime(value.abs(), 'second');
      string += value.hour.padLeadingZero(2) + ':' + value.minute.padLeadingZero(2);
    }
    return string;
  };
}());

},{"./commonData.js":34,"./convert.js":35,"./utils.js":55,"validate.io-undefined":29}],53:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var regexpEscape = _dereq_('regexp-escape-x');
  var utils = _dereq_('./utils.js');
  var tokenReplaceRx = /([^']+)|('[^']+')/g;
  var numberTestRx = /^-?\d+$/;
  var tokenTest1Rx = /^\{\d\}$/;
  var tokenTest2Rx = /^\S\{\d+,\d*\}$/;
  //var sqReplaceRx = /'/g;
  var sq = '\'';

  /**
   * Left pads a number with '0's so that it is of the require length as given by size.
   * @private
   * @param {number|string} num
   * @param {number} size
   * @return {string}
   */
  function cldrPadLeadingZero(num, size) {
    var strNum = num.toString();
    var length = strNum.length;
    if (length > 0 && length < size && numberTestRx.test(strNum)) {
      var val = '';
      var starts = strNum.charAt(0);
      if (starts === '-') {
        val = starts;
        strNum = strNum.slice(1);
        size -= 1;
      }
      return val + (size > 0 ? strNum.padStart(size, '0') : strNum);
    }
    return strNum;
  }

  /**
   * Replaces the given token pattern in the given pattern with the supplied string value.
   * @private
   * @param {string} pattern
   * @param {string} token
   * @param {string} value
   * @return {string}
   */
  module.exports = function tokenReplace(pattern, token, value) {
    var copyMatch;
    var noWrap;
    if (tokenTest1Rx.test(token)) {
      token = regexpEscape(token);
      copyMatch = token;
      noWrap = true;
    } else {
      var firstCharacter = token.charAt(0);
      if (!tokenTest2Rx.test(token)) {
        if (utils.countCharacter(token, firstCharacter) !== token.length) {
          throw new Error('invalid token');
        }
      }
      copyMatch = '(?:^|[^' + firstCharacter + '])(' + token + ')(?:[^' + firstCharacter + ']|$)';
    }

    var trpwRx = new RegExp(token, 'g');
    /**
     * Replaces tokens, handles padding choice and wraps replacements (if required) in sinqle quotes so
     * they are ignored in future.
     * @private
     * @param {string} $0
     * @param {string} $1
     * @return {string}
     */
    function tokenReplacerPadWrap($0, $1) {
      var val = $1 ? cldrPadLeadingZero(value, $1.length) : value;
      return $0.replace(trpwRx, noWrap ? val : sq + val + sq);
    }

    var trRx = new RegExp(copyMatch, 'g');
    /**
     * Returns strings of non-tokens untouched or calls the replacer on strings with tokens.
     * @private
     * @param {string} $0
     * @param {string} $1
     * @param {string} $2
     * @return {string}
     */
    function tokenReplacer($0, $1, $2) {
      if ($0) {
        return $1 ? $1.replace(trRx, tokenReplacerPadWrap) : $2;
      }
    }

    return pattern.replace(tokenReplaceRx, tokenReplacer);
  };
}());

},{"./utils.js":55,"regexp-escape-x":27}],54:[function(_dereq_,module,exports){
(function() {
  'use strict';

  /*
   * All characters other than A-Za-z currently represent themselves in a pattern,
   * except for the single quote. It is used to 'escape' letters. Two single
   * quotes in a row, whether inside or outside a quoted 'real' single quote.
   */

  var sq = '\'';
  var empty = '';

  module.exports = function tokenizePattern(str) {
    var tokens = [];
    var lastToken;
    var open;
    var closed;
    var index = 0;
    var length = str.length;
    while (index < length) {
      var character = str.at(index);
      var nextIndex = index + character.length;
      var nextChar = str.at(nextIndex);
      var cLower = character.toLowerCase();
      var type = !open && cLower >= 'a' && cLower <= 'z' ? 'symbols' : 'real';
      var token = lastToken && type === lastToken.type ? lastToken : {
        type: type,
        value: empty
      };
      if (lastToken !== token) {
        tokens.push(token);
      }
      var currentIsSq = character === sq;
      var isDSQ = currentIsSq && nextChar === sq;
      if (currentIsSq && !isDSQ) {
        if (open) {
          open = false;
          closed = currentIsSq;
        } else {
          open = currentIsSq;
          closed = false;
        }
      } else {
        token.value += character;
      }
      lastToken = token;
      index = nextIndex + isDSQ;
    }
    if (open && !closed) {
      throw new SyntaxError('Unterminated single quote');
    }
    return tokens;
  };
}());

},{}],55:[function(_dereq_,module,exports){
/*global require, module */
(function () {
  'use strict';

  var isArrayLike = _dereq_('is-array-like-x');
  var isString = _dereq_('is-string');

  /**
   * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
   * @function
   * @private
   * @param {NumberLike} value
   * @param {NumberLike} min
   * @param {NumberLike} max
   * @returns {boolean}
   */
  function inRange(value, min, max) {
    value = Number(value);
    return value >= Math.min(min, max) && value <= Math.max(min, max);
  }

  function isStringWithContent(value) {
    return isString(value) && value.trim().length > 0;
  }

  /**
   * Counts the occurences of the argument character in the supplied string.
   * @param {string} str
   * @param {string} character
   * @returns {number}
   */
  function countCharacter(str, character) {
    var first = String(character).at(0);
    return first === '' ? Infinity : Math.min(Math.max(String(str).split(first).length - 1, 0), Infinity);
  }

  function first(arr) {
    return isArrayLike(arr) ? (isString(arr) ? arr.charAt(0) : arr[0]) : void 0;
  }

  function last(arr) {
    return isArrayLike(arr) ? (isString(arr) ? arr.charAt(arr.length - 1) : arr[arr.length - 1]) : void 0;
  }

  module.exports = {
    inRange: inRange,
    isStringWithContent: isStringWithContent,
    countCharacter: countCharacter,
    first: first,
    last: last
  };
}());

},{"is-array-like-x":6,"is-string":24}]},{},[1])(1)
});