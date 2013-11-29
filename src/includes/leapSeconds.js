/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate.leapSeconds}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * leapSeconds: 46
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

(function (thisContext) {
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLeapSeconds(AstroDate) {
        AstroDate.leapSeconds({
            '1972': {
                'Jun': {
                    '30': '1'
                },
                'Dec': {
                    '31': '1'
                }
            },
            '1973': {
                'Dec': {
                    '31': '1'
                }
            },
            '1974': {
                'Dec': {
                    '31': '1'
                }
            },
            '1975': {
                'Dec': {
                    '31': '1'
                }
            },
            '1976': {
                'Dec': {
                    '31': '1'
                }
            },
            '1977': {
                'Dec': {
                    '31': '1'
                }
            },
            '1978': {
                'Dec': {
                    '31': '1'
                }
            },
            '1979': {
                'Dec': {
                    '31': '1'
                }
            },
            '1981': {
                'Jun': {
                    '30': '1'
                }
            },
            '1982': {
                'Jun': {
                    '30': '1'
                }
            },
            '1983': {
                'Jun': {
                    '30': '1'
                }
            },
            '1985': {
                'Jun': {
                    '30': '1'
                }
            },
            '1987': {
                'Dec': {
                    '31': '1'
                }
            },
            '1989': {
                'Dec': {
                    '31': '1'
                }
            },
            '1990': {
                'Dec': {
                    '31': '1'
                }
            },
            '1992': {
                'Jun': {
                    '30': '1'
                }
            },
            '1993': {
                'Jun': {
                    '30': '1'
                }
            },
            '1994': {
                'Jun': {
                    '30': '1'
                }
            },
            '1995': {
                'Dec': {
                    '31': '1'
                }
            },
            '1997': {
                'Jun': {
                    '30': '1'
                }
            },
            '1998': {
                'Dec': {
                    '31': '1'
                }
            },
            '2005': {
                'Dec': {
                    '31': '1'
                }
            },
            '2008': {
                'Dec': {
                    '31': '1'
                }
            },
            '2012': {
                'Jun': {
                    '30': '1'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLeapSeconds(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLeapSeconds);
    } else {
        defineLeapSeconds(thisContext.AstroDate);
    }
}(this));
