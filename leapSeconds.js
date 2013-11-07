/* AstroDate
 * leapSeconds.js: 1
 * date: 2013-11-07
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

(function (thisContext) {
    'use strict';

    (function (definition) {
        /*global module, require, define */
        var astrodateFunc = 'AstroDate',
            astrodateString = astrodateFunc.toLowerCase();

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }(function (AstroDate) {
        AstroDate.leapSeconds({
            '1972': {
                'jun': 1,
                'dec': 1
            },
            '1973': {
                'dec': 1
            },
            '1974': {
                'dec': 1
            },
            '1975': {
                'dec': 1
            },
            '1976': {
                'dec': 1
            },
            '1977': {
                'dec': 1
            },
            '1978': {
                'dec': 1
            },
            '1979': {
                'dec': 1
            },
            '1981': {
                'jun': 1
            },
            '1982': {
                'jun': 1
            },
            '1983': {
                'jun': 1
            },
            '1985': {
                'jun': 1
            },
            '1987': {
                'dec': 1
            },
            '1989': {
                'dec': 1
            },
            '1990': {
                'dec': 1
            },
            '1992': {
                'jun': 1
            },
            '1993': {
                'jun': 1
            },
            '1994': {
                'jun': 1
            },
            '1995': {
                'dec': 1
            },
            '1997': {
                'jun': 1
            },
            '1998': {
                'dec': 1
            },
            '2005': {
                'dec': 1
            },
            '2008': {
                'dec': 1
            },
            '2012': {
                'jun': 1
            },
            'total': {
                'jun': 10,
                'dec': 15,
                'sum': 35
            }
        });
    }));
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
}(this))));
