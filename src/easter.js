/*global require, module */
(function () {
  'use strict';

  var getCorrectStruct = require('./getCorrectStruct.js');
  var BigNum = require('./BigNum.js');

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
