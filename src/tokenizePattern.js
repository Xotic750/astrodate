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
