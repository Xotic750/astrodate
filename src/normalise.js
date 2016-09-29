/*global require, module */
(function () {
  'use strict';

  var isString = require('is-string');
  var isPlainObject = require('lodash.isplainobject');
  var commonData = require('./commonData.js');

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
