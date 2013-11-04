/* AstroDate Language: <%= id %>
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
    "use strict";

    (function (definition) {
        /*global module, require, define */
        var astrodateFunc = "AstroDate",
            astrodateString = astrodateFunc.toLowerCase();

        if ("object" === typeof module && null !== module && "object" === typeof module.exports && null !== module.exports) {
            module.exports = definition(require("../astrodate"));
        } else if ("function" === typeof define && "object" === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }((function (AstroDate) {
        AstroDate.lang("<%= id %>", <%= data %>);
    }())));
}((function (thisContext) {
    "use strict";
    /*global window, global, self */

    // detect the global context of the environment
    if ("object" === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ("object" === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ("object" === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ("object" !== typeof thisContext || null === thisContext) {
        throw new TypeError("Invalid global context");
    }

    /*global */
    return thisContext;
}(this))));
