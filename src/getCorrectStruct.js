/*global require, module */
(function () {
  'use strict';

  var convert = require('./convert.js');

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
