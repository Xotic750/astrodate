/*global require, module */
(function () {
  'use strict';

  var isObjectLike = require('is-object-like-x');
  var BigNum = require('bignumber.js').another({
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
