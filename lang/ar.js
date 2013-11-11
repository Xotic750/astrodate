/* AstroDate
 * Language: ar
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * localeDisplayNames: 24r9287
 * units: 24r9287
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
        AstroDate.lang('ar', {
            'durationUnit-type-ms': {
                'durationUnitPattern': 'm:ss'
            },
            'durationUnit-type-hms': {
                'durationUnitPattern': 'h:mm:ss'
            },
            'durationUnit-type-hm': {
                'durationUnitPattern': 'h:mm'
            },
            'narrow': {
                'mass-ounce': {
                    'unitPattern-count-zero': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-one': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-two': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-few': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-many': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-other': '{0} \u0623\u0648\u0646\u0633'
                },
                'mass-kilogram': {
                    'unitPattern-count-zero': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-one': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-two': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-few': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-many': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-other': '{0} \u0643\u063A\u0645'
                },
                'mass-gram': {
                    'unitPattern-count-zero': '{0} \u063A',
                    'unitPattern-count-one': '{0} \u063A\u0631\u0627\u0645',
                    'unitPattern-count-two': '\u063A\u0631\u0627\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u063A\u0631\u0627\u0645\u0627\u062A',
                    'unitPattern-count-many': '{0} \u063A\u0631\u0627\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0}\u063A'
                },
                'length-yard': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-one': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-two': '\u064A\u0627\u0631\u062F\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-many': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A'
                },
                'length-picometer': {
                    'unitPattern-count-zero': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631'
                },
                'length-millimeter': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631'
                },
                'length-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644',
                    'unitPattern-count-two': '\u0645\u064A\u0644\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644'
                },
                'length-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u062A\u0631',
                    'unitPattern-count-two': '\u0645\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631'
                },
                'length-light-year': {
                    'unitPattern-count-zero': '{0}\u0633 \u0636',
                    'unitPattern-count-one': '{0} \u0633 \u0636',
                    'unitPattern-count-two': '{0} \u0633 \u0636',
                    'unitPattern-count-few': '{0} \u0633 \u0636',
                    'unitPattern-count-many': '{0} \u0633 \u0636',
                    'unitPattern-count-other': '{0} \u0633 \u0636'
                },
                'length-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645',
                    'unitPattern-count-one': '{0} \u0643\u0645',
                    'unitPattern-count-two': '{0} \u0643\u0645',
                    'unitPattern-count-few': '{0} \u0643\u0645',
                    'unitPattern-count-many': '{0} \u0643\u0645',
                    'unitPattern-count-other': '{0} \u0643\u0645'
                },
                'length-inch': {
                    'unitPattern-count-zero': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-one': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-two': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-few': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-many': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-other': '{0} \u0628\u0648\u0635\u0629'
                },
                'length-foot': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-one': '{0} \u0642\u062F\u0645',
                    'unitPattern-count-two': '\u0642\u062F\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-many': '{0} \u0642\u062F\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645'
                },
                'length-centimeter': {
                    'unitPattern-count-zero': '{0} \u0633\u0645',
                    'unitPattern-count-one': '{0} \u0633\u0645',
                    'unitPattern-count-two': '{0} \u0633\u0645',
                    'unitPattern-count-few': '{0} \u0633\u0645',
                    'unitPattern-count-many': '{0} \u0633\u0645',
                    'unitPattern-count-other': '{0} \u0633\u0645'
                },
                'duration-year': {
                    'unitPattern-count-zero': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-one': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-two': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-few': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-many': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-other': '{0} \u0633\u0646\u0629'
                },
                'duration-week': {
                    'unitPattern-count-zero': '{0} \u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-one': '{0} \u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-two': '{0} \u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-few': '{0} \u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-many': '{0} \u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-other': '{0} \u0623\u0633\u0628\u0648\u0639'
                },
                'duration-month': {
                    'unitPattern-count-zero': '{0} \u0634\u0647\u0631',
                    'unitPattern-count-one': '{0} \u0634\u0647\u0631',
                    'unitPattern-count-two': '{0} \u0634\u0647\u0631',
                    'unitPattern-count-few': '{0} \u0634\u0647\u0631',
                    'unitPattern-count-many': '{0} \u0634\u0647\u0631',
                    'unitPattern-count-other': '{0} \u0634\u0647\u0631'
                },
                'mass-pound': {
                    'unitPattern-count-zero': '{0}#',
                    'unitPattern-count-one': '{0}#',
                    'unitPattern-count-two': '{0}#',
                    'unitPattern-count-few': '{0}#',
                    'unitPattern-count-many': '{0}#',
                    'unitPattern-count-other': '{0}#'
                },
                'power-horsepower': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646'
                },
                'power-kilowatt': {
                    'unitPattern-count-zero': '{0} \u0643\u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0643\u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0643\u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0643\u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0643\u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0643\u0648\u0627\u0637'
                },
                'power-watt': {
                    'unitPattern-count-zero': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0648\u0627\u0637'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-zero': '{0} \u0647\u0643\u0628',
                    'unitPattern-count-one': '{0} \u0647\u0643\u0628',
                    'unitPattern-count-two': '{0} \u0647\u0643\u0628',
                    'unitPattern-count-few': '{0} \u0647\u0643\u0628',
                    'unitPattern-count-many': '{0} \u0647\u0643\u0628',
                    'unitPattern-count-other': '{0} \u0647\u0643\u0628'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-zero': '{0} \u0628 \u0632',
                    'unitPattern-count-one': '{0} \u0628 \u0632',
                    'unitPattern-count-two': '{0} \u0628 \u0632',
                    'unitPattern-count-few': '{0} \u0628 \u0632',
                    'unitPattern-count-many': '{0} \u0628 \u0632',
                    'unitPattern-count-other': '{0} \u0628 \u0632'
                },
                'pressure-millibar': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631'
                },
                'volume-liter': {
                    'unitPattern-count-zero': '{0} \u0644',
                    'unitPattern-count-one': '{0} \u0644\u062A\u0631',
                    'unitPattern-count-two': '\u0644\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0644\u062A\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0644\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0644'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-one': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-two': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-few': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-many': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-other': '{0} \u0643\u0645\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-zero': '{0} \u062F \u0641',
                    'unitPattern-count-one': '{0} \u062F \u0641',
                    'unitPattern-count-two': '{0} \u062F \u0641',
                    'unitPattern-count-few': '{0} \u062F \u0641',
                    'unitPattern-count-many': '{0} \u062F \u0641',
                    'unitPattern-count-other': '{0} \u062F \u0641'
                },
                'temperature-celsius': {
                    'unitPattern-count-zero': '{0}\u062F \u0645',
                    'unitPattern-count-one': '{0}\u062F \u0645',
                    'unitPattern-count-two': '{0}\u062F \u0645',
                    'unitPattern-count-few': '{0}\u062F \u0645',
                    'unitPattern-count-many': '{0}\u062F \u0645',
                    'unitPattern-count-other': '{0}\u062F \u0645'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644/\u0633'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-zero': '{0} \u0645/\u062B',
                    'unitPattern-count-one': '{0} \u0645/\u062B',
                    'unitPattern-count-two': '{0} \u0645/\u062B',
                    'unitPattern-count-few': '{0} \u0645/\u062B',
                    'unitPattern-count-many': '{0} \u0645/\u062B',
                    'unitPattern-count-other': '{0} \u0645/\u062B'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-zero': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-one': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-two': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-few': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-many': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-other': '{0} \u0643\u0645/\u0633'
                },
                'duration-minute': {
                    'unitPattern-count-zero': '{0} \u062F',
                    'unitPattern-count-one': '{0} \u062F',
                    'unitPattern-count-two': '{0} \u062F',
                    'unitPattern-count-few': '{0} \u062F',
                    'unitPattern-count-many': '{0} \u062F',
                    'unitPattern-count-other': '{0} \u062F'
                },
                'duration-millisecond': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u062B.'
                },
                'duration-hour': {
                    'unitPattern-count-zero': '{0} \u0633',
                    'unitPattern-count-one': '{0} \u0633',
                    'unitPattern-count-two': '{0} \u0633',
                    'unitPattern-count-few': '{0} \u0633',
                    'unitPattern-count-many': '{0} \u0633',
                    'unitPattern-count-other': '{0} \u0633'
                },
                'duration-day': {
                    'unitPattern-count-zero': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-one': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-two': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-few': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-many': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-other': '{0} \u064A\u0648\u0645'
                },
                'area-square-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639'
                },
                'area-square-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u00B2',
                    'unitPattern-count-one': '{0} \u0645\u00B2',
                    'unitPattern-count-two': '{0} \u0645\u00B2',
                    'unitPattern-count-few': '{0} \u0645\u00B2',
                    'unitPattern-count-many': '{0} \u0645\u00B2',
                    'unitPattern-count-other': '{0} \u0645\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-one': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-two': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-few': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-many': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-other': '{0} \u0643\u0645\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639'
                },
                'angle-arc-minute': {
                    'unitPattern-count-zero': '{0}\u2032',
                    'unitPattern-count-one': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-two': '{0}\u2032',
                    'unitPattern-count-few': '{0} \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-many': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-other': '{0}\u2032'
                },
                'angle-arc-second': {
                    'unitPattern-count-zero': '{0}\u2033',
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-two': '{0}\u2033',
                    'unitPattern-count-few': '{0}\u2033',
                    'unitPattern-count-many': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'angle-degree': {
                    'unitPattern-count-zero': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-two': '\u062F\u0631\u062C\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0627\u062A',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-other': '{0} \u062F\u0631\u062C\u0629'
                },
                'area-acre': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-one': '{0} \u0641\u062F\u0627\u0646',
                    'unitPattern-count-two': '\u0641\u062F\u0627\u0646\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-many': '{0} \u0641\u062F\u0627\u0646\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646'
                },
                'area-hectare': {
                    'unitPattern-count-zero': '{0} \u0647\u0643\u062A',
                    'unitPattern-count-one': '{0} \u0647\u0643\u062A\u0627\u0631',
                    'unitPattern-count-two': '{0} \u0647\u0643\u062A',
                    'unitPattern-count-few': '{0} \u0647\u0643\u062A\u0627\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0647\u0643\u062A\u0627\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0647\u0643\u062A'
                },
                'area-square-foot': {
                    'unitPattern-count-zero': '{0}ft\u00B2',
                    'unitPattern-count-one': '{0}ft\u00B2',
                    'unitPattern-count-two': '{0}ft\u00B2',
                    'unitPattern-count-few': '{0}ft\u00B2',
                    'unitPattern-count-many': '{0}ft\u00B2',
                    'unitPattern-count-other': '{0}ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-zero': '{0} \u062B',
                    'unitPattern-count-one': '{0} \u062B',
                    'unitPattern-count-two': '{0} \u062B',
                    'unitPattern-count-few': '{0} \u062B',
                    'unitPattern-count-many': '{0} \u062B',
                    'unitPattern-count-other': '{0} \u062B'
                }
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '\u0623\u063A\u0633\u0637\u0633',
                                '7': '\u064A\u0648\u0644\u064A\u0648',
                                '6': '\u064A\u0648\u0646\u064A\u0648',
                                '5': '\u0645\u0627\u064A\u0648',
                                '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                '1': '\u064A\u0646\u0627\u064A\u0631',
                                '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                '3': '\u0645\u0627\u0631\u0633',
                                '4': '\u0623\u0628\u0631\u064A\u0644'
                            },
                            'narrow': {
                                '8': '\u063A',
                                '7': '\u0644',
                                '6': '\u0646',
                                '5': '\u0648',
                                '12': '\u062F',
                                '11': '\u0628',
                                '10': '\u0643',
                                '9': '\u0633',
                                '1': '\u064A',
                                '2': '\u0641',
                                '3': '\u0645',
                                '4': '\u0623'
                            },
                            'wide': {
                                '8': '\u0623\u063A\u0633\u0637\u0633',
                                '7': '\u064A\u0648\u0644\u064A\u0648',
                                '6': '\u064A\u0648\u0646\u064A\u0648',
                                '5': '\u0645\u0627\u064A\u0648',
                                '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                '1': '\u064A\u0646\u0627\u064A\u0631',
                                '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                '3': '\u0645\u0627\u0631\u0633',
                                '4': '\u0623\u0628\u0631\u064A\u0644'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '\u0623\u063A\u0633\u0637\u0633',
                                '7': '\u064A\u0648\u0644\u064A\u0648',
                                '6': '\u064A\u0648\u0646\u064A\u0648',
                                '5': '\u0645\u0627\u064A\u0648',
                                '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                '1': '\u064A\u0646\u0627\u064A\u0631',
                                '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                '3': '\u0645\u0627\u0631\u0633',
                                '4': '\u0623\u0628\u0631\u064A\u0644'
                            },
                            'narrow': {
                                '8': '\u063A',
                                '7': '\u0644',
                                '6': '\u0646',
                                '5': '\u0648',
                                '12': '\u062F',
                                '11': '\u0628',
                                '10': '\u0643',
                                '9': '\u0633',
                                '1': '\u064A',
                                '2': '\u0641',
                                '3': '\u0645',
                                '4': '\u0623'
                            },
                            'wide': {
                                '8': '\u0623\u063A\u0633\u0637\u0633',
                                '7': '\u064A\u0648\u0644\u064A\u0648',
                                '6': '\u064A\u0648\u0646\u064A\u0648',
                                '5': '\u0645\u0627\u064A\u0648',
                                '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                '1': '\u064A\u0646\u0627\u064A\u0631',
                                '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                '3': '\u0645\u0627\u0631\u0633',
                                '4': '\u0623\u0628\u0631\u064A\u0644'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            },
                            'narrow': {
                                'sun': '\u062D',
                                'mon': '\u0646',
                                'tue': '\u062B',
                                'wed': '\u0631',
                                'thu': '\u062E',
                                'fri': '\u062C',
                                'sat': '\u0633'
                            },
                            'short': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            },
                            'wide': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            },
                            'narrow': {
                                'sun': '\u062D',
                                'mon': '\u0646',
                                'tue': '\u062B',
                                'wed': '\u0631',
                                'thu': '\u062E',
                                'fri': '\u062C',
                                'sat': '\u0633'
                            },
                            'short': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            },
                            'wide': {
                                'sun': '\u0627\u0644\u0623\u062D\u062F',
                                'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                'sat': '\u0627\u0644\u0633\u0628\u062A'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                            },
                            'narrow': {
                                '1': '\u0661',
                                '2': '\u0662',
                                '3': '\u0663',
                                '4': '\u0664'
                            },
                            'wide': {
                                '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                            },
                            'narrow': {
                                '1': '\u0661',
                                '2': '\u0662',
                                '3': '\u0663',
                                '4': '\u0664'
                            },
                            'wide': {
                                '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            },
                            'narrow': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            },
                            'wide': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            },
                            'narrow': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            },
                            'wide': {
                                'am': '\u0635',
                                'pm': '\u0645'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F',
                            '0-alt-variant': 'BCE',
                            '1': '\u0645\u064A\u0644\u0627\u062F\u064A',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '\u0642.\u0645',
                            '0-alt-variant': 'BCE',
                            '1': '\u0645',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': '\u0642.\u0645',
                            '0-alt-variant': 'BCE',
                            '1': '\u0645',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE\u060C d MMMM\u060C y',
                        'long': 'd MMMM\u060C y',
                        'medium': 'dd\u200F/MM\u200F/y',
                        'short': 'd\u200F/M\u200F/y'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'long': '{1} {0}',
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'availableFormats': {
                            'yMMM': 'MMM y',
                            'yMM': 'MM\u200F/y',
                            'yMEd': 'E\u060C d/\u200FM/\u200Fy',
                            'yMd': 'd\u200F/M\u200F/y',
                            'yM': 'M\u200F/y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E\u060C d',
                            'd': 'd',
                            'GyMMMd': 'd MMM\u060C y G',
                            'GyMMMEd': 'E\u060C d MMM\u060C y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E\u060C d MMM\u060C y',
                            'yMMMd': 'd MMM\u060C y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/\u200FM',
                            'MEd': 'E\u060C d/M',
                            'MMdd': 'dd\u200F/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E\u060C d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E\u060C d MMMM',
                            'ms': 'mm:ss',
                            'y': 'y'
                        },
                        'appendItems': {
                            'Second': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Month': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}',
                            'Day': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Era': '{1} {0}',
                            'Hour': '{0} ({2}: {1})',
                            'Minute': '{0} ({2}: {1})'
                        },
                        'intervalFormats': {
                            'MMMEd': {
                                'd': 'E\u060C d \u2013 E\u060C d MMM',
                                'M': 'E\u060C d MMM \u2013 E\u060C d MMM'
                            },
                            'MMMd': {
                                'd': 'd\u2013d MMM',
                                'M': 'd MMM \u2013 d MMM'
                            },
                            'MMM': {
                                'M': 'MMM\u2013MMM'
                            },
                            'MEd': {
                                'd': 'E\u060C d/\u200FM \u2013\u200F E\u060C d/\u200FM',
                                'M': 'E\u060C d/\u200FM \u2013 E\u060C d/\u200FM'
                            },
                            'Md': {
                                'd': 'M/d \u2013 M/d',
                                'M': 'M/d \u2013 M/d'
                            },
                            'M': {
                                'M': 'M\u2013M'
                            },
                            'Hv': {
                                'H': 'HH\u2013HH v'
                            },
                            'hv': {
                                'a': 'h a \u2013 h a v',
                                'h': 'h\u2013h a v'
                            },
                            'intervalFormatFallback': '{0} \u2013 {1}',
                            'y': {
                                'y': 'y\u2013y'
                            },
                            'yM': {
                                'M': 'M\u200F/y \u2013 M\u200F/y',
                                'y': 'M\u200F/y \u2013 M\u200F/y'
                            },
                            'yMd': {
                                'd': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y',
                                'M': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y',
                                'y': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y'
                            },
                            'yMEd': {
                                'd': 'E\u060C dd\u200F/MM\u200F/y \u2013 E\u060C dd\u200F/MM\u200F/y',
                                'M': 'E\u060C d\u200F/M\u200F/y \u2013 E\u060C d\u200F/M\u200F/y',
                                'y': 'E\u060C d\u200F/M\u200F/y \u2013 E\u060C d\u200F/M\u200F/y'
                            },
                            'yMMM': {
                                'M': 'MMM \u2013 MMM\u060C y',
                                'y': 'MMM\u060C y \u2013 MMM\u060C y'
                            },
                            'yMMMd': {
                                'd': 'd\u2013d MMM\u060C y',
                                'M': 'd MMM \u2013 d MMM\u060C y',
                                'y': 'd MMM\u060C y \u2013 d MMM\u060C y'
                            },
                            'yMMMEd': {
                                'd': 'E\u060C d \u2013 E\u060C d MMM\u060C y',
                                'M': 'E\u060C d MMM \u2013 E\u060C d MMM\u060C y',
                                'y': 'E\u060C d MMM\u060C y \u2013 E\u060C d MMM\u060C y'
                            },
                            'yMMMM': {
                                'M': 'MMMM \u2013 MMMM\u060C y',
                                'y': 'MMMM\u060C y \u2013 MMMM\u060C y'
                            },
                            'MMMM': {
                                'M': 'LLLL\u2013LLLL'
                            },
                            'Hmv': {
                                'H': 'HH:mm\u2013HH:mm v',
                                'm': 'HH:mm\u2013HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a \u2013 h:mm a v',
                                'h': 'h:mm\u2013h:mm a v',
                                'm': 'h:mm\u2013h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm\u2013HH:mm',
                                'm': 'HH:mm\u2013HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a \u2013 h:mm a',
                                'h': 'h:mm\u2013h:mm a',
                                'm': 'h:mm\u2013h:mm a'
                            },
                            'H': {
                                'H': 'HH\u2013HH'
                            },
                            'h': {
                                'a': 'h a \u2013 h a',
                                'h': 'h\u2013h a'
                            },
                            'd': {
                                'd': 'd\u2013d'
                            }
                        }
                    }
                }
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': '\u0633\u0627\u064A\u0628\u0627\u0646'
                        },
                        'Rarotonga': {
                            'exemplarCity': '\u0631\u0627\u0631\u0648\u062A\u0648\u0646\u063A\u0627'
                        },
                        'Port_Moresby': {
                            'exemplarCity': '\u0628\u0648\u0631 \u0645\u0648\u0631\u0633\u0628\u064A'
                        },
                        'Ponape': {
                            'exemplarCity': '\u0628\u0627\u0646\u0627\u0628'
                        },
                        'Pitcairn': {
                            'exemplarCity': '\u0628\u064A\u062A\u0643\u064A\u0631\u0646'
                        },
                        'Palau': {
                            'exemplarCity': '\u0628\u0627\u0644\u0627\u0648'
                        },
                        'Auckland': {
                            'exemplarCity': '\u0623\u0648\u0643\u0644\u0627\u0646\u062F'
                        },
                        'Apia': {
                            'exemplarCity': '\u0623\u0628\u064A\u0627'
                        },
                        'Funafuti': {
                            'exemplarCity': '\u0641\u0648\u0646\u0627\u0641\u0648\u062A\u064A'
                        },
                        'Galapagos': {
                            'exemplarCity': '\u062C\u0644\u0627\u0628\u0627\u062C\u0648\u0633'
                        },
                        'Gambier': {
                            'exemplarCity': '\u062C\u0627\u0645\u0628\u064A\u0631'
                        },
                        'Guadalcanal': {
                            'exemplarCity': '\u063A\u0648\u0627\u062F\u0627\u0644\u0643\u0627\u0646\u0627\u0644'
                        },
                        'Guam': {
                            'exemplarCity': '\u063A\u0648\u0627\u0645'
                        },
                        'Honolulu': {
                            'exemplarCity': '\u0647\u0648\u0646\u0648\u0644\u0648\u0644\u0648'
                        },
                        'Wallis': {
                            'exemplarCity': '\u0648\u0627\u0644\u064A\u0633'
                        },
                        'Wake': {
                            'exemplarCity': '\u0648\u0627\u0643'
                        },
                        'Truk': {
                            'exemplarCity': '\u062A\u0631\u0643'
                        },
                        'Tongatapu': {
                            'exemplarCity': '\u062A\u0648\u0646\u063A\u0627\u062A\u0627\u0628\u0648'
                        },
                        'Tarawa': {
                            'exemplarCity': '\u062A\u0627\u0631\u0627\u0648\u0627'
                        },
                        'Tahiti': {
                            'exemplarCity': '\u062A\u0627\u0647\u064A\u062A\u064A'
                        },
                        'Kiritimati': {
                            'exemplarCity': '\u0643\u064A\u0631\u064A\u062A\u064A \u0645\u0627\u062A\u064A'
                        },
                        'Johnston': {
                            'exemplarCity': '\u062C\u0648\u0646\u0633\u062A\u0648\u0646'
                        },
                        'Chatham': {
                            'exemplarCity': '\u062A\u0634\u0627\u062B\u0627\u0645'
                        },
                        'Easter': {
                            'exemplarCity': '\u0627\u0633\u062A\u0631'
                        },
                        'Efate': {
                            'exemplarCity': '\u0625\u064A\u0641\u0627\u062A'
                        },
                        'Enderbury': {
                            'exemplarCity': '\u0627\u0646\u062F\u0631\u0628\u064A\u0631\u062C'
                        },
                        'Fakaofo': {
                            'exemplarCity': '\u0641\u0627\u0643\u0627\u0648\u0641\u0648'
                        },
                        'Fiji': {
                            'exemplarCity': '\u0641\u064A\u062C\u064A'
                        },
                        'Kosrae': {
                            'exemplarCity': '\u0643\u0648\u0633\u0631\u0627'
                        },
                        'Kwajalein': {
                            'exemplarCity': '\u0643\u0648\u0627\u062C\u0627\u0644\u064A\u0646'
                        },
                        'Majuro': {
                            'exemplarCity': '\u0645\u0627\u062C\u0648\u0631\u0648'
                        },
                        'Marquesas': {
                            'exemplarCity': '\u0645\u0627\u0631\u0643\u064A\u0633\u0627\u0633'
                        },
                        'Midway': {
                            'exemplarCity': '\u0645\u064A\u062F\u0648\u0627\u064A'
                        },
                        'Nauru': {
                            'exemplarCity': '\u0646\u0627\u0648\u0631\u0648'
                        },
                        'Niue': {
                            'exemplarCity': '\u0646\u064A\u0648\u064A'
                        },
                        'Norfolk': {
                            'exemplarCity': '\u0646\u0648\u0631\u0641\u0648\u0644\u0643'
                        },
                        'Noumea': {
                            'exemplarCity': '\u0646\u0648\u0645\u064A\u0627'
                        },
                        'Pago_Pago': {
                            'exemplarCity': '\u0628\u0627\u063A\u0648 \u0628\u0627\u063A\u0648'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': '\u0644\u064A\u0646\u062F\u0645\u0627\u0646'
                        },
                        'Hobart': {
                            'exemplarCity': '\u0647\u0648\u0628\u0627\u0631\u062A'
                        },
                        'Eucla': {
                            'exemplarCity': '\u0623\u0648\u0643\u0644\u0627'
                        },
                        'Darwin': {
                            'exemplarCity': '\u062F\u0627\u0631\u0648\u0646'
                        },
                        'Sydney': {
                            'exemplarCity': '\u0633\u064A\u062F\u0646\u064A'
                        },
                        'Perth': {
                            'exemplarCity': '\u0628\u0631\u062B\u0627'
                        },
                        'Melbourne': {
                            'exemplarCity': '\u0645\u064A\u0644\u0628\u0648\u0631\u0646'
                        },
                        'Lord_Howe': {
                            'exemplarCity': '\u0644\u0648\u0631\u062F \u0647\u0627\u0648'
                        },
                        'Adelaide': {
                            'exemplarCity': '\u0627\u0633\u062A\u0631\u0627\u0644\u064A\u0627(\u062A\u0648\u0642\u064A\u062A \u0623\u062F\u0644\u064A\u0627\u062F\u0627)'
                        },
                        'Brisbane': {
                            'exemplarCity': '\u0628\u0631\u0633\u064A\u0628\u0627\u0646'
                        },
                        'Broken_Hill': {
                            'exemplarCity': '\u0628\u0631\u0648\u0643\u0646 \u0647\u064A\u0644'
                        },
                        'Currie': {
                            'exemplarCity': '\u0643\u0648\u0631\u064A'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': '\u0627\u0644\u0645\u0627\u0644\u062F\u064A\u0641'
                        },
                        'Mahe': {
                            'exemplarCity': '\u0645\u0627\u0647\u064A'
                        },
                        'Kerguelen': {
                            'exemplarCity': '\u0643\u064A\u0631\u063A\u0648\u064A\u0644\u064A\u0646'
                        },
                        'Reunion': {
                            'exemplarCity': '\u0631\u064A\u0648\u0646\u064A\u0648\u0646'
                        },
                        'Mayotte': {
                            'exemplarCity': '\u0645\u0627\u064A\u0648\u062A'
                        },
                        'Mauritius': {
                            'exemplarCity': '\u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633'
                        },
                        'Antananarivo': {
                            'exemplarCity': '\u0623\u0646\u062A\u0627\u0646\u0627\u0646\u0627\u0631\u064A\u0641\u0648'
                        },
                        'Chagos': {
                            'exemplarCity': '\u062A\u0634\u0627\u063A\u0648\u0633'
                        },
                        'Christmas': {
                            'exemplarCity': '\u0643\u0631\u064A\u0633\u0645\u0627\u0633'
                        },
                        'Cocos': {
                            'exemplarCity': '\u0643\u0648\u0643\u0648\u0633'
                        },
                        'Comoro': {
                            'exemplarCity': '\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631'
                        }
                    },
                    'Etc': {
                        'GMT-11': {
                            'exemplarCity': 'GMT-11'
                        },
                        'GMT-10': {
                            'exemplarCity': 'GMT-10'
                        },
                        'GMT-1': {
                            'exemplarCity': 'GMT-1'
                        },
                        'GMT9': {
                            'exemplarCity': 'GMT+9'
                        },
                        'GMT8': {
                            'exemplarCity': 'GMT+8'
                        },
                        'GMT7': {
                            'exemplarCity': 'GMT+7'
                        },
                        'GMT6': {
                            'exemplarCity': 'GMT+6'
                        },
                        'GMT5': {
                            'exemplarCity': 'GMT+5'
                        },
                        'GMT': {
                            'exemplarCity': 'GMT'
                        },
                        'GMT1': {
                            'exemplarCity': 'GMT+1'
                        },
                        'GMT10': {
                            'exemplarCity': 'GMT+10'
                        },
                        'GMT11': {
                            'exemplarCity': 'GMT+11'
                        },
                        'GMT-3': {
                            'exemplarCity': 'GMT-3'
                        },
                        'GMT-4': {
                            'exemplarCity': 'GMT-4'
                        },
                        'GMT-5': {
                            'exemplarCity': 'GMT-5'
                        },
                        'GMT-6': {
                            'exemplarCity': 'GMT-6'
                        },
                        'GMT-7': {
                            'exemplarCity': 'GMT-7'
                        },
                        'GMT-8': {
                            'exemplarCity': 'GMT-8'
                        },
                        'GMT-9': {
                            'exemplarCity': 'GMT-9'
                        },
                        'Unknown': {
                            'exemplarCity': '\u0645\u062F\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u0629'
                        },
                        'GMT-2': {
                            'exemplarCity': 'GMT-2'
                        },
                        'GMT-14': {
                            'exemplarCity': 'GMT-14'
                        },
                        'GMT-13': {
                            'exemplarCity': 'GMT-13'
                        },
                        'GMT-12': {
                            'exemplarCity': 'GMT-12'
                        },
                        'GMT4': {
                            'exemplarCity': 'GMT+4'
                        },
                        'GMT3': {
                            'exemplarCity': 'GMT+3'
                        },
                        'GMT2': {
                            'exemplarCity': 'GMT+2'
                        },
                        'GMT12': {
                            'exemplarCity': 'GMT+12'
                        }
                    },
                    'Antarctica': {
                        'Rothera': {
                            'exemplarCity': '\u0631\u0648\u062B\u064A\u0631\u0627'
                        },
                        'Palmer': {
                            'exemplarCity': '\u0628\u0627\u0644\u0645\u064A\u0631'
                        },
                        'McMurdo': {
                            'exemplarCity': '\u0645\u0627\u0643 \u0645\u0648\u0631\u062F\u0648'
                        },
                        'Vostok': {
                            'exemplarCity': '\u0641\u0648\u0633\u062A\u0648\u0643'
                        },
                        'Syowa': {
                            'exemplarCity': '\u0633\u0627\u064A\u0648\u0648\u0627'
                        },
                        'South_Pole': {
                            'exemplarCity': '\u0627\u0644\u0642\u0637\u0628 \u0627\u0644\u062C\u0646\u0648\u0628\u064A'
                        },
                        'Casey': {
                            'exemplarCity': '\u0643\u0627\u0633\u0627\u064A'
                        },
                        'Davis': {
                            'exemplarCity': '\u062F\u0627\u0641\u064A\u0632'
                        },
                        'DumontDUrville': {
                            'exemplarCity': '\u062F\u064A \u0645\u0648\u0646\u062A \u062F\u0648 \u0631\u0648\u0641\u064A\u0644'
                        },
                        'Macquarie': {
                            'exemplarCity': '\u0645\u0627\u0643\u0648\u0627\u0631\u064A'
                        },
                        'Mawson': {
                            'exemplarCity': '\u0645\u0627\u0648\u0633\u0648\u0646'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': '\u0644\u0648\u0646\u062C\u064A\u0631\u0628\u064A\u0646'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': '\u062A\u0648\u0631\u0648\u0646\u062A\u0648'
                        },
                        'Tijuana': {
                            'exemplarCity': '\u062A\u064A\u062E\u0648\u0627\u0646\u0627'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': '\u062B\u0646\u062F\u0631 \u0628\u0627\u064A'
                        },
                        'Thule': {
                            'exemplarCity': '\u062B\u064A\u0644'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': '\u062A\u064A\u063A\u0648\u0633\u064A\u063A\u0627\u0644\u0628\u0627'
                        },
                        'Swift_Current': {
                            'exemplarCity': '\u0633\u0648\u0641\u062A \u0643\u0627\u0631\u0646\u062A'
                        },
                        'Chicago': {
                            'exemplarCity': '\u0634\u064A\u0643\u0627\u063A\u0648'
                        },
                        'Cayman': {
                            'exemplarCity': '\u0643\u064A\u0645\u0627\u0646'
                        },
                        'Cayenne': {
                            'exemplarCity': '\u0643\u0627\u064A\u064A\u0646'
                        },
                        'Catamarca': {
                            'exemplarCity': '\u0643\u0627\u062A\u0627\u0645\u0627\u0631\u0643\u0627'
                        },
                        'Caracas': {
                            'exemplarCity': '\u0643\u0627\u0631\u0627\u0643\u0627\u0633'
                        },
                        'Cancun': {
                            'exemplarCity': '\u0643\u0627\u0646\u0643\u0646'
                        },
                        'Campo_Grande': {
                            'exemplarCity': '\u0643\u0648\u0645\u0628\u0648 \u062C\u0631\u0627\u0646\u062F'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': '\u0643\u0627\u0645\u0628\u0631\u062F\u064A\u062C \u0628\u0627\u064A'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': '\u0628\u0648\u064A\u0646\u0648\u0633 \u0623\u064A\u0631\u0633'
                        },
                        'Boise': {
                            'exemplarCity': '\u0628\u0648\u064A\u0633'
                        },
                        'Asuncion': {
                            'exemplarCity': '\u0623\u0633\u0648\u0646\u0633\u064A\u0648\u0646'
                        },
                        'Aruba': {
                            'exemplarCity': '\u0623\u0631\u0648\u0628\u0627'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': '\u0631\u064A\u0648 \u062C\u0627\u0644\u064A\u064A\u0648\u0633'
                            },
                            'San_Juan': {
                                'exemplarCity': '\u0633\u0627\u0646 \u062E\u0648\u0627\u0646'
                            },
                            'Ushuaia': {
                                'exemplarCity': '\u0623\u0634\u0648\u0627'
                            },
                            'La_Rioja': {
                                'exemplarCity': '\u0644\u0627 \u0631\u064A\u0648\u062C\u0627'
                            },
                            'San_Luis': {
                                'exemplarCity': '\u0633\u0627\u0646 \u0644\u0648\u064A\u0633'
                            },
                            'Salta': {
                                'exemplarCity': '\u0633\u0627\u0644\u0637\u0627'
                            },
                            'Tucuman': {
                                'exemplarCity': '\u062A\u0627\u0643\u0645\u0627\u0646'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': '\u0623\u0631\u0648\u062C\u0648\u0627\u0646\u064A\u0627'
                        },
                        'Antigua': {
                            'exemplarCity': '\u0623\u0646\u062A\u064A\u063A\u0648\u0627'
                        },
                        'Anguilla': {
                            'exemplarCity': '\u0623\u0646\u063A\u064A\u0644\u0627'
                        },
                        'Anchorage': {
                            'exemplarCity': '\u0623\u0646\u0634\u0648\u0631\u0627\u062C'
                        },
                        'Adak': {
                            'exemplarCity': '\u0623\u062F\u0627\u0643'
                        },
                        'Bahia': {
                            'exemplarCity': '\u0628\u0627\u0647\u064A\u0627'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': '\u0628\u0627\u0647\u064A\u0627 \u0628\u0627\u0646\u062F\u064A\u0631\u0627\u0633'
                        },
                        'Barbados': {
                            'exemplarCity': '\u0628\u0631\u0628\u0627\u062F\u0648\u0633'
                        },
                        'Belem': {
                            'exemplarCity': '\u0628\u0644\u0645'
                        },
                        'Belize': {
                            'exemplarCity': '\u0628\u0644\u064A\u0632'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': '\u0628\u0644\u0627\u0646\u0643-\u0633\u0627\u0628\u0644\u0648\u0646'
                        },
                        'Boa_Vista': {
                            'exemplarCity': '\u0628\u0627\u0648 \u0641\u064A\u0633\u062A\u0627'
                        },
                        'Bogota': {
                            'exemplarCity': '\u0628\u0648\u063A\u0648\u062A\u0627'
                        },
                        'Curacao': {
                            'exemplarCity': '\u0643\u0648\u0631\u0627\u0643\u0627\u0648'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': '\u062F\u0627\u0646\u0645\u0631\u0643 \u0634\u0627\u0641\u0646'
                        },
                        'Dawson': {
                            'exemplarCity': '\u062F\u0627\u0648\u0633\u0627\u0646'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': '\u062F\u0627\u0648\u0633\u0646 \u0643\u0631\u064A\u0643'
                        },
                        'Denver': {
                            'exemplarCity': '\u062F\u0646\u0641\u0631'
                        },
                        'Detroit': {
                            'exemplarCity': '\u062F\u064A\u062A\u0631\u0648\u064A\u062A'
                        },
                        'Hermosillo': {
                            'exemplarCity': '\u0647\u064A\u0631\u0645\u0648\u0633\u064A\u0644\u0648'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': '\u0641\u064A\u0646\u0633\u064A\u0646\u0633'
                            },
                            'Petersburg': {
                                'exemplarCity': '\u0628\u064A\u062A\u0631\u0633\u0628\u0631\u063A'
                            },
                            'Tell_City': {
                                'exemplarCity': '\u0645\u062F\u064A\u0646\u0629 \u062A\u0644\u060C \u0625\u0646\u062F\u064A\u0627\u0646\u0627'
                            },
                            'Knox': {
                                'exemplarCity': '\u0643\u0648\u0646\u0643\u0633'
                            },
                            'Winamac': {
                                'exemplarCity': '\u0648\u064A\u0646\u0627\u0645\u0627\u0643'
                            },
                            'Marengo': {
                                'exemplarCity': '\u0645\u0627\u0631\u0646\u062C\u0648'
                            },
                            'Vevay': {
                                'exemplarCity': '\u0641\u064A\u0641\u0627\u064A'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': '\u0625\u0646\u062F\u064A\u0627\u0646\u0627\u0628\u0648\u0644\u064A\u0633'
                        },
                        'Inuvik': {
                            'exemplarCity': '\u0627\u064A\u0646\u0648\u0641\u064A\u0643'
                        },
                        'Iqaluit': {
                            'exemplarCity': '\u0627\u0643\u0648\u064A\u0644\u062A'
                        },
                        'Jamaica': {
                            'exemplarCity': '\u062C\u0627\u0645\u0627\u064A\u0643\u0627'
                        },
                        'Jujuy': {
                            'exemplarCity': '\u062C\u0648\u062C\u0648'
                        },
                        'Juneau': {
                            'exemplarCity': '\u062C\u0648\u0646\u064A'
                        },
                        'Yellowknife': {
                            'exemplarCity': '\u064A\u0644\u0648\u0646\u064A\u0641'
                        },
                        'Yakutat': {
                            'exemplarCity': '\u064A\u0627\u0643\u0648\u062A\u0627\u062A'
                        },
                        'Winnipeg': {
                            'exemplarCity': '\u0648\u064A\u0646\u064A\u0628\u064A\u062C'
                        },
                        'Whitehorse': {
                            'exemplarCity': '\u0648\u0627\u064A\u062A \u0647\u0648\u0631\u0633'
                        },
                        'Vancouver': {
                            'exemplarCity': '\u0641\u0627\u0646\u0643\u0648\u0641\u0631'
                        },
                        'Tortola': {
                            'exemplarCity': '\u062A\u0648\u0631\u062A\u0648\u0644\u0627'
                        },
                        'Kralendijk': {
                            'exemplarCity': '\u0643\u0631\u0627\u0644\u0646\u062F\u064A\u0643'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': '\u0645\u0648\u0646\u062A\u064A\u0633\u064A\u0644\u0648'
                            }
                        },
                        'Havana': {
                            'exemplarCity': '\u0647\u0627\u0641\u0627\u0646\u0627'
                        },
                        'Halifax': {
                            'exemplarCity': '\u0647\u0627\u0644\u064A\u0641\u0627\u0643\u0633'
                        },
                        'Guyana': {
                            'exemplarCity': '\u063A\u064A\u0627\u0646\u0627'
                        },
                        'Guayaquil': {
                            'exemplarCity': '\u063A\u0648\u0627\u064A\u0627\u0643\u0648\u064A\u0644'
                        },
                        'Guatemala': {
                            'exemplarCity': '\u063A\u0648\u0627\u062A\u064A\u0645\u0627\u0644\u0627'
                        },
                        'Guadeloupe': {
                            'exemplarCity': '\u063A\u0648\u0627\u062F\u0644\u0648\u0628'
                        },
                        'Grenada': {
                            'exemplarCity': '\u063A\u0631\u064A\u0646\u0627\u062F\u0627'
                        },
                        'Grand_Turk': {
                            'exemplarCity': '\u063A\u0631\u0627\u0646\u062F \u062A\u0631\u0643'
                        },
                        'Goose_Bay': {
                            'exemplarCity': '\u062C\u0648\u0633 \u0628\u0627\u064A'
                        },
                        'Godthab': {
                            'exemplarCity': '\u063A\u0648\u062F\u062B\u0627\u0628'
                        },
                        'Glace_Bay': {
                            'exemplarCity': '\u062C\u0644\u0627\u0633 \u0628\u0627\u064A'
                        },
                        'Fortaleza': {
                            'exemplarCity': '\u0641\u0648\u0631\u062A\u0627\u0644\u064A\u0632\u0627'
                        },
                        'El_Salvador': {
                            'exemplarCity': '\u0627\u0644\u0633\u0644\u0641\u0627\u062F\u0648\u0631'
                        },
                        'Eirunepe': {
                            'exemplarCity': '\u0627\u064A\u0631\u0648\u0646\u0628\u064A'
                        },
                        'Edmonton': {
                            'exemplarCity': '\u0627\u064A\u062F\u0645\u0648\u0646\u062A\u0648\u0646'
                        },
                        'Dominica': {
                            'exemplarCity': '\u062F\u0648\u0645\u064A\u0646\u064A\u0643\u0627'
                        },
                        'Chihuahua': {
                            'exemplarCity': '\u062A\u0634\u064A\u0648\u0627\u0648\u0627'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': '\u0643\u0648\u0631\u0627\u0644 \u0647\u0627\u0631\u0628\u0631'
                        },
                        'Cordoba': {
                            'exemplarCity': '\u0643\u0648\u0631\u062F\u0648\u0628\u0627'
                        },
                        'Costa_Rica': {
                            'exemplarCity': '\u0643\u0648\u0633\u062A\u0627\u0631\u064A\u0643\u0627'
                        },
                        'Creston': {
                            'exemplarCity': '\u0643\u0631\u064A\u0633\u062A\u0648\u0646'
                        },
                        'Cuiaba': {
                            'exemplarCity': '\u0643\u064A\u0627\u0628\u0627'
                        },
                        'La_Paz': {
                            'exemplarCity': '\u0644\u0627 \u0628\u0627\u0632'
                        },
                        'Lima': {
                            'exemplarCity': '\u0644\u064A\u0645\u0627'
                        },
                        'Los_Angeles': {
                            'exemplarCity': '\u0644\u0648\u0633 \u0627\u0646\u062C\u0644\u0648\u0633'
                        },
                        'Louisville': {
                            'exemplarCity': '\u0644\u0648\u064A\u0633 \u0641\u064A\u0644'
                        },
                        'Lower_Princes': {
                            'exemplarCity': '\u062D\u064A \u0627\u0644\u0623\u0645\u064A\u0631 \u0627\u0644\u0633\u0641\u0644\u064A'
                        },
                        'Maceio': {
                            'exemplarCity': '\u0645\u0627\u0634\u064A\u0648'
                        },
                        'Managua': {
                            'exemplarCity': '\u0645\u0627\u0646\u0627\u063A\u0648\u0627'
                        },
                        'Manaus': {
                            'exemplarCity': '\u0645\u0627\u0646\u0627\u0648\u0633'
                        },
                        'Marigot': {
                            'exemplarCity': '\u0645\u0627\u0631\u064A\u063A\u0648\u062A'
                        },
                        'Martinique': {
                            'exemplarCity': '\u0627\u0644\u0645\u0627\u0631\u062A\u064A\u0646\u064A\u0643'
                        },
                        'Matamoros': {
                            'exemplarCity': '\u0645\u0627\u062A\u0627\u0645\u0648\u0631\u0648\u0633'
                        },
                        'Mazatlan': {
                            'exemplarCity': '\u0645\u0627\u0632\u0627\u062A\u0644\u0627\u0646'
                        },
                        'Mendoza': {
                            'exemplarCity': '\u0645\u064A\u0646\u062F\u0648\u0632\u0627'
                        },
                        'Menominee': {
                            'exemplarCity': '\u0645\u064A\u0646\u0648\u0645\u064A\u0646\u064A'
                        },
                        'Merida': {
                            'exemplarCity': '\u0645\u064A\u0631\u064A\u062F\u0627'
                        },
                        'Metlakatla': {
                            'exemplarCity': '\u0645\u064A\u062A\u0644\u0627\u0643\u0627\u062A\u0644\u0627'
                        },
                        'Mexico_City': {
                            'exemplarCity': '\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0645\u0643\u0633\u064A\u0643'
                        },
                        'Miquelon': {
                            'exemplarCity': '\u0645\u064A\u0643\u0648\u0644\u0646'
                        },
                        'Moncton': {
                            'exemplarCity': '\u0648\u064A\u0646\u0643\u062A\u0648\u0646'
                        },
                        'Monterrey': {
                            'exemplarCity': '\u0645\u0648\u0646\u062A\u064A\u0631\u064A'
                        },
                        'Montevideo': {
                            'exemplarCity': '\u0645\u0648\u0646\u062A\u0641\u064A\u062F\u064A\u0648'
                        },
                        'Montreal': {
                            'exemplarCity': '\u0645\u0648\u0646\u062A\u0631\u064A\u0627\u0644'
                        },
                        'Montserrat': {
                            'exemplarCity': '\u0645\u0648\u0646\u062A\u0633\u064A\u0631\u0627\u062A'
                        },
                        'Nassau': {
                            'exemplarCity': '\u0646\u0627\u0633\u0648'
                        },
                        'New_York': {
                            'exemplarCity': '\u0646\u064A\u0648\u064A\u0648\u0631\u0643'
                        },
                        'Nipigon': {
                            'exemplarCity': '\u0646\u064A\u0628\u064A\u062C\u0648\u0646'
                        },
                        'Nome': {
                            'exemplarCity': '\u0646\u0648\u0645'
                        },
                        'Noronha': {
                            'exemplarCity': '\u0646\u0648\u0631\u0648\u0646\u0627\u0647'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': '\u0628\u064A\u0648\u0644\u0627\u060C \u062F\u0627\u0643\u0648\u062A\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629'
                            },
                            'New_Salem': {
                                'exemplarCity': '\u0646\u064A\u0648 \u0633\u0627\u0644\u064A\u0645'
                            },
                            'Center': {
                                'exemplarCity': '\u0633\u0646\u062A\u0631'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': '\u0623\u0648\u062C\u064A\u0646\u0627\u062C\u0627'
                        },
                        'Panama': {
                            'exemplarCity': '\u0628\u0646\u0645\u0627'
                        },
                        'Pangnirtung': {
                            'exemplarCity': '\u0628\u0627\u0646\u062C\u064A\u0646\u062A\u064A\u0646\u062C'
                        },
                        'Paramaribo': {
                            'exemplarCity': '\u0628\u0627\u0631\u0627\u0645\u0627\u0631\u064A\u0628\u0648'
                        },
                        'Phoenix': {
                            'exemplarCity': '\u0641\u064A\u0646\u0643\u0633'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': '\u0628\u0648\u0631\u062A \u0623\u0648 \u0628\u0631\u0646\u0633'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': '\u0628\u0648\u0631\u062A \u0623\u0648\u0641 \u0633\u0628\u064A\u0646'
                        },
                        'Porto_Velho': {
                            'exemplarCity': '\u0628\u0648\u0631\u062A\u0648 \u0641\u064A\u0644\u0648'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': '\u0628\u0648\u0631\u062A\u0648\u0631\u064A\u0643\u0648'
                        },
                        'Rainy_River': {
                            'exemplarCity': '\u0631\u0627\u0646\u064A \u0631\u064A\u0641\u0631'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': '\u0631\u0627\u0646\u0643\u0646 \u0627\u0646\u0644\u062A'
                        },
                        'Recife': {
                            'exemplarCity': '\u0631\u064A\u0633\u064A\u0641'
                        },
                        'Regina': {
                            'exemplarCity': '\u0631\u064A\u062C\u064A\u0646\u0627'
                        },
                        'Resolute': {
                            'exemplarCity': '\u0631\u064A\u0632\u0648\u0644\u0648\u062A'
                        },
                        'Rio_Branco': {
                            'exemplarCity': '\u0631\u064A\u0648\u0628\u0631\u0627\u0646\u0643\u0648'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A\u0627 \u0625\u064A\u0632\u0627\u0628\u064A\u0644'
                        },
                        'Santarem': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A\u0627\u0631\u064A\u0645'
                        },
                        'Santiago': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A\u064A\u0627\u063A\u0648'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A\u0648 \u062F\u0648\u0645\u064A\u0646\u063A\u0648'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': '\u0633\u0627\u0648 \u0628\u0627\u0648\u0644\u0648'
                        },
                        'Scoresbysund': {
                            'exemplarCity': '\u0633\u0643\u0648\u0631\u0633\u0628\u064A\u0633\u0646\u062F'
                        },
                        'Shiprock': {
                            'exemplarCity': '\u0634\u064A\u0628\u0631\u0648\u0643'
                        },
                        'Sitka': {
                            'exemplarCity': '\u0633\u064A\u062A\u0643\u0627'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u0628\u0627\u0631\u062B\u064A\u0644\u0645\u064A'
                        },
                        'St_Johns': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u062C\u0648\u0646\u0633'
                        },
                        'St_Kitts': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u0643\u064A\u062A\u0633'
                        },
                        'St_Lucia': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u0644\u0648\u0634\u064A\u0627'
                        },
                        'St_Thomas': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u062A\u0648\u0645\u0627\u0633'
                        },
                        'St_Vincent': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u0641\u0646\u0633\u0646\u062A'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': '\u062C\u0646\u0648\u0628 \u062C\u0648\u0631\u062C\u064A\u0627'
                        },
                        'Reykjavik': {
                            'exemplarCity': '\u0631\u064A\u0643\u064A\u0627\u0641\u064A\u0643'
                        },
                        'Stanley': {
                            'exemplarCity': '\u0627\u0633\u062A\u0627\u0646\u0644\u064A'
                        },
                        'St_Helena': {
                            'exemplarCity': '\u0633\u0627\u0646\u062A \u0647\u064A\u0644\u064A\u0646\u0627'
                        },
                        'Azores': {
                            'exemplarCity': '\u0623\u0632\u0648\u0631\u0633'
                        },
                        'Bermuda': {
                            'exemplarCity': '\u0628\u0631\u0645\u0648\u062F\u0627'
                        },
                        'Canary': {
                            'exemplarCity': '\u0643\u0646\u0627\u0631\u064A'
                        },
                        'Cape_Verde': {
                            'exemplarCity': '\u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062E\u0636\u0631'
                        },
                        'Faeroe': {
                            'exemplarCity': '\u0641\u0627\u0631\u0648'
                        },
                        'Madeira': {
                            'exemplarCity': '\u0645\u0627\u062F\u064A\u0631\u0627'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': '\u0623\u0648\u0633\u0644\u0648'
                        },
                        'Moscow': {
                            'exemplarCity': '\u0645\u0648\u0633\u0643\u0648'
                        },
                        'Monaco': {
                            'exemplarCity': '\u0645\u0648\u0646\u0627\u0643\u0648'
                        },
                        'Minsk': {
                            'exemplarCity': '\u0645\u064A\u0646\u0633\u0643'
                        },
                        'Mariehamn': {
                            'exemplarCity': '\u0645\u0627\u0631\u064A\u0647\u0627\u0645\u0646'
                        },
                        'Malta': {
                            'exemplarCity': '\u0645\u0627\u0644\u0637\u0629'
                        },
                        'Madrid': {
                            'exemplarCity': '\u0645\u062F\u0631\u064A\u062F'
                        },
                        'Luxembourg': {
                            'exemplarCity': '\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063A'
                        },
                        'London': {
                            'long': {
                                'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u0631\u064A\u0637\u0627\u0646\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                            },
                            'exemplarCity': '\u0644\u0646\u062F\u0646'
                        },
                        'Ljubljana': {
                            'exemplarCity': '\u0644\u064A\u0648\u0628\u0644\u064A\u0627\u0646\u0627'
                        },
                        'Lisbon': {
                            'exemplarCity': '\u0644\u0634\u0628\u0648\u0646\u0629'
                        },
                        'Kiev': {
                            'exemplarCity': '\u0643\u064A\u064A\u0641'
                        },
                        'Kaliningrad': {
                            'exemplarCity': '\u0643\u0627\u0644\u064A\u0646\u062C\u0631\u0627\u062F'
                        },
                        'Jersey': {
                            'exemplarCity': '\u062C\u064A\u0631\u0633\u064A'
                        },
                        'Istanbul': {
                            'exemplarCity': '\u0625\u0633\u0637\u0646\u0628\u0648\u0644'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': '\u062C\u0632\u064A\u0631\u0629 \u0645\u0627\u0646'
                        },
                        'Bucharest': {
                            'exemplarCity': '\u0628\u0648\u062E\u0627\u0631\u0633\u062A'
                        },
                        'Brussels': {
                            'exemplarCity': '\u0628\u0631\u0648\u0643\u0633\u0644'
                        },
                        'Bratislava': {
                            'exemplarCity': '\u0628\u0631\u0627\u062A\u064A\u0633\u0644\u0627\u0641\u0627'
                        },
                        'Berlin': {
                            'exemplarCity': '\u0628\u0631\u0644\u064A\u0646'
                        },
                        'Belgrade': {
                            'exemplarCity': '\u0628\u0644\u063A\u0631\u0627\u062F'
                        },
                        'Athens': {
                            'exemplarCity': '\u0623\u062B\u064A\u0646\u0627'
                        },
                        'Andorra': {
                            'exemplarCity': '\u0623\u0646\u062F\u0648\u0631\u0627'
                        },
                        'Amsterdam': {
                            'exemplarCity': '\u0623\u0645\u0633\u062A\u0631\u062F\u0627\u0645'
                        },
                        'Simferopol': {
                            'exemplarCity': '\u0633\u064A\u0645\u0641\u0631\u0648\u0628\u0648\u0644'
                        },
                        'Skopje': {
                            'exemplarCity': '\u0633\u0643\u0648\u0628\u064A'
                        },
                        'Sofia': {
                            'exemplarCity': '\u0635\u0648\u0641\u064A\u0627'
                        },
                        'Stockholm': {
                            'exemplarCity': '\u0633\u062A\u0648\u0643\u0647\u0648\u0644\u0645'
                        },
                        'Tallinn': {
                            'exemplarCity': '\u062A\u0627\u0644\u064A\u0646'
                        },
                        'Tirane': {
                            'exemplarCity': '\u062A\u064A\u0631\u0627\u0646\u0627'
                        },
                        'Uzhgorod': {
                            'exemplarCity': '\u0623\u0648\u0632\u062C\u0631\u0648\u062F'
                        },
                        'Vaduz': {
                            'exemplarCity': '\u0641\u0627\u062F\u0648\u0632'
                        },
                        'Zurich': {
                            'exemplarCity': '\u0632\u064A\u0648\u0631\u062E'
                        },
                        'Zaporozhye': {
                            'exemplarCity': '\u0632\u0627\u0628\u0648\u0631\u0648\u0632\u064A'
                        },
                        'Zagreb': {
                            'exemplarCity': '\u0632\u063A\u0631\u0628'
                        },
                        'Warsaw': {
                            'exemplarCity': '\u0648\u0627\u0631\u0633\u0648'
                        },
                        'Volgograd': {
                            'exemplarCity': '\u0641\u0648\u0644\u0648\u062C\u0631\u0627\u062F'
                        },
                        'Vilnius': {
                            'exemplarCity': '\u0641\u064A\u0644\u0646\u064A\u0648\u0633'
                        },
                        'Vienna': {
                            'exemplarCity': '\u0641\u064A\u064A\u0646\u0627'
                        },
                        'Vatican': {
                            'exemplarCity': '\u0627\u0644\u0641\u0627\u062A\u064A\u0643\u0627\u0646'
                        },
                        'Sarajevo': {
                            'exemplarCity': '\u0633\u0631\u0627\u064A\u064A\u0641\u0648'
                        },
                        'San_Marino': {
                            'exemplarCity': '\u0633\u0627\u0646 \u0645\u0627\u0631\u064A\u0646\u0648'
                        },
                        'Samara': {
                            'exemplarCity': '\u0633\u0645\u0631\u0627\u0621'
                        },
                        'Rome': {
                            'exemplarCity': '\u0631\u0648\u0645\u0627'
                        },
                        'Riga': {
                            'exemplarCity': '\u0631\u064A\u063A\u0627'
                        },
                        'Prague': {
                            'exemplarCity': '\u0628\u0631\u0627\u063A'
                        },
                        'Podgorica': {
                            'exemplarCity': '\u0628\u0648\u062F\u063A\u0648\u0631\u064A\u0643\u0627'
                        },
                        'Paris': {
                            'exemplarCity': '\u0628\u0627\u0631\u064A\u0633'
                        },
                        'Helsinki': {
                            'exemplarCity': '\u0647\u0644\u0633\u0646\u0643\u064A'
                        },
                        'Guernsey': {
                            'exemplarCity': '\u063A\u064A\u0631\u0646\u0633\u064A'
                        },
                        'Gibraltar': {
                            'exemplarCity': '\u062C\u0628\u0644 \u0637\u0627\u0631\u0642'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u064A\u0631\u0644\u0646\u062F\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                            },
                            'exemplarCity': '\u062F\u0628\u0644\u0646'
                        },
                        'Copenhagen': {
                            'exemplarCity': '\u0643\u0648\u0628\u0646\u0647\u0627\u063A\u0646'
                        },
                        'Chisinau': {
                            'exemplarCity': '\u062A\u0634\u064A\u0633\u064A\u0646\u0627\u0648'
                        },
                        'Busingen': {
                            'exemplarCity': '\u0628\u0648\u0633\u0646\u063A\u0646'
                        },
                        'Budapest': {
                            'exemplarCity': '\u0628\u0648\u062F\u0627\u0628\u0633\u062A'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': '\u0644\u064A\u0628\u0631\u0641\u064A\u0644'
                        },
                        'Lagos': {
                            'exemplarCity': '\u0644\u0627\u063A\u0648\u0633'
                        },
                        'Kinshasa': {
                            'exemplarCity': '\u0643\u064A\u0646\u0634\u0627\u0633\u0627'
                        },
                        'Kigali': {
                            'exemplarCity': '\u0643\u064A\u063A\u0627\u0644\u064A'
                        },
                        'Khartoum': {
                            'exemplarCity': '\u0627\u0644\u062E\u0631\u0637\u0648\u0645'
                        },
                        'Kampala': {
                            'exemplarCity': '\u0643\u0627\u0645\u0628\u0627\u0644\u0627'
                        },
                        'Juba': {
                            'exemplarCity': '\u062C\u0648\u0628\u0627'
                        },
                        'Johannesburg': {
                            'exemplarCity': '\u062C\u0648\u0647\u0627\u0646\u0633\u0628\u0631\u063A'
                        },
                        'Harare': {
                            'exemplarCity': '\u0647\u0631\u0627\u0631\u064A'
                        },
                        'Gaborone': {
                            'exemplarCity': '\u063A\u0627\u0628\u0648\u0631\u0648\u0646'
                        },
                        'Freetown': {
                            'exemplarCity': '\u0641\u0631\u064A \u062A\u0627\u0648\u0646'
                        },
                        'El_Aaiun': {
                            'exemplarCity': '\u0627\u0644\u0639\u064A\u0648\u0646'
                        },
                        'Douala': {
                            'exemplarCity': '\u062F\u0648\u0627\u0644\u0627'
                        },
                        'Djibouti': {
                            'exemplarCity': '\u062C\u064A\u0628\u0648\u062A\u064A'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': '\u062F\u0627\u0631 \u0627\u0644\u0633\u0644\u0627\u0645'
                        },
                        'Dakar': {
                            'exemplarCity': '\u062F\u0627\u0643\u0627\u0631'
                        },
                        'Banjul': {
                            'exemplarCity': '\u0628\u0627\u0646\u062C\u0648\u0644'
                        },
                        'Bangui': {
                            'exemplarCity': '\u0628\u0627\u0646\u063A\u0648\u064A'
                        },
                        'Bamako': {
                            'exemplarCity': '\u0628\u0627\u0645\u0627\u0643\u0648'
                        },
                        'Asmera': {
                            'exemplarCity': '\u0623\u0633\u0645\u0631\u0629'
                        },
                        'Malabo': {
                            'exemplarCity': '\u0645\u0627\u0644\u0627\u0628\u0648'
                        },
                        'Maputo': {
                            'exemplarCity': '\u0645\u0627\u0628\u0648\u062A\u0648'
                        },
                        'Maseru': {
                            'exemplarCity': '\u0645\u0627\u0633\u064A\u0631\u0648'
                        },
                        'Mbabane': {
                            'exemplarCity': '\u0645\u0628\u0627\u0628\u0627\u0646\u064A'
                        },
                        'Mogadishu': {
                            'exemplarCity': '\u0645\u0642\u062F\u064A\u0634\u064A\u0648'
                        },
                        'Monrovia': {
                            'exemplarCity': '\u0645\u0648\u0646\u0631\u0648\u0641\u064A\u0627'
                        },
                        'Nairobi': {
                            'exemplarCity': '\u0646\u064A\u0631\u0648\u0628\u064A'
                        },
                        'Ndjamena': {
                            'exemplarCity': '\u0646\u062C\u0627\u0645\u064A\u0646\u0627'
                        },
                        'Windhoek': {
                            'exemplarCity': '\u0648\u064A\u0646\u062F\u0647\u0648\u0643'
                        },
                        'Tunis': {
                            'exemplarCity': '\u062A\u0648\u0646\u0633'
                        },
                        'Tripoli': {
                            'exemplarCity': '\u0637\u0631\u0627\u0628\u0644\u0633'
                        },
                        'Sao_Tome': {
                            'exemplarCity': '\u0633\u0627\u0648 \u062A\u0648\u0645\u064A'
                        },
                        'Porto-Novo': {
                            'exemplarCity': '\u0628\u0648\u0631\u062A\u0648 \u0646\u0648\u0641\u0648'
                        },
                        'Ouagadougou': {
                            'exemplarCity': '\u0648\u0627\u063A\u0627\u062F\u0648\u063A\u0648'
                        },
                        'Nouakchott': {
                            'exemplarCity': '\u0646\u0648\u0627\u0643\u0634\u0648\u0637'
                        },
                        'Niamey': {
                            'exemplarCity': '\u0646\u064A\u0627\u0645\u064A'
                        },
                        'Lusaka': {
                            'exemplarCity': '\u0644\u0648\u0633\u0627\u0643\u0627'
                        },
                        'Lubumbashi': {
                            'exemplarCity': '\u0644\u0648\u0645\u0628\u0628\u0627\u0634\u0627'
                        },
                        'Luanda': {
                            'exemplarCity': '\u0644\u0648\u0627\u0646\u062F\u0627'
                        },
                        'Lome': {
                            'exemplarCity': '\u0644\u0648\u0645\u064A'
                        },
                        'Conakry': {
                            'exemplarCity': '\u0643\u0648\u0646\u0627\u0643\u0631\u064A'
                        },
                        'Ceuta': {
                            'exemplarCity': '\u0633\u064A\u062A\u0627'
                        },
                        'Casablanca': {
                            'exemplarCity': '\u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621'
                        },
                        'Cairo': {
                            'exemplarCity': '\u0627\u0644\u0642\u0627\u0647\u0631\u0629'
                        },
                        'Bujumbura': {
                            'exemplarCity': '\u0628\u0648\u062C\u0648\u0645\u0628\u0648\u0631\u0627'
                        },
                        'Brazzaville': {
                            'exemplarCity': '\u0628\u0631\u0627\u0632\u0627\u0641\u064A\u0644'
                        },
                        'Blantyre': {
                            'exemplarCity': '\u0628\u0644\u0627\u0646\u062A\u0627\u064A\u0631'
                        },
                        'Bissau': {
                            'exemplarCity': '\u0628\u064A\u0633\u0627\u0648'
                        },
                        'Abidjan': {
                            'exemplarCity': '\u0623\u0628\u064A\u062F\u062C\u0627\u0646'
                        },
                        'Accra': {
                            'exemplarCity': '\u0623\u0643\u0631\u0627'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': '\u0623\u062F\u064A\u0633 \u0623\u0628\u0627\u0628\u0627'
                        },
                        'Algiers': {
                            'exemplarCity': '\u0627\u0644\u062C\u0632\u0627\u0626\u0631'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '\u0634\u0646\u063A\u0647\u0627\u064A'
                        },
                        'Seoul': {
                            'exemplarCity': '\u0633\u0648\u0644'
                        },
                        'Samarkand': {
                            'exemplarCity': '\u0633\u0645\u0631\u0642\u0646\u062F'
                        },
                        'Sakhalin': {
                            'exemplarCity': '\u0633\u0643\u0627\u0644\u064A\u0646'
                        },
                        'Saigon': {
                            'exemplarCity': '\u0645\u062F\u064A\u0646\u0629 \u0647\u0648 \u062A\u0634\u064A \u0645\u0646\u0629'
                        },
                        'Riyadh': {
                            'exemplarCity': '\u0627\u0644\u0631\u064A\u0627\u0636'
                        },
                        'Rangoon': {
                            'exemplarCity': '\u0631\u0627\u0646\u063A\u0648\u0646'
                        },
                        'Qyzylorda': {
                            'exemplarCity': '\u0643\u064A\u0632\u064A\u0644\u0648\u0631\u062F\u0627'
                        },
                        'Qatar': {
                            'exemplarCity': '\u0642\u0637\u0631'
                        },
                        'Pyongyang': {
                            'exemplarCity': '\u0628\u064A\u0648\u0646\u063A \u064A\u0627\u0646\u063A'
                        },
                        'Pontianak': {
                            'exemplarCity': '\u0628\u0648\u0646\u062A\u064A\u0627\u0646\u0643'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': '\u0628\u0646\u0648\u0645 \u0628\u0646\u0647'
                        },
                        'Oral': {
                            'exemplarCity': '\u0623\u0648\u0631\u0627\u0644'
                        },
                        'Omsk': {
                            'exemplarCity': '\u0623\u0648\u0645\u0633\u0643'
                        },
                        'Novosibirsk': {
                            'exemplarCity': '\u0646\u0648\u0641\u0648\u0633\u0628\u064A\u0631\u0633\u0643'
                        },
                        'Baghdad': {
                            'exemplarCity': '\u0628\u063A\u062F\u0627\u062F'
                        },
                        'Chongqing': {
                            'exemplarCity': '\u062A\u0634\u0648\u0646\u062C\u0643\u064A\u0646\u062C'
                        },
                        'Colombo': {
                            'exemplarCity': '\u0643\u0648\u0644\u0648\u0645\u0628\u0648'
                        },
                        'Damascus': {
                            'exemplarCity': '\u062F\u0645\u0634\u0642'
                        },
                        'Dhaka': {
                            'exemplarCity': '\u062F\u0643\u0627'
                        },
                        'Dili': {
                            'exemplarCity': '\u062F\u064A\u0644\u064A'
                        },
                        'Dubai': {
                            'exemplarCity': '\u062F\u0628\u064A'
                        },
                        'Dushanbe': {
                            'exemplarCity': '\u062F\u0648\u0634\u0627\u0646\u0628\u064A'
                        },
                        'Gaza': {
                            'exemplarCity': '\u063A\u0632\u0629'
                        },
                        'Harbin': {
                            'exemplarCity': '\u0647\u0627\u0631\u0628\u064A\u0646'
                        },
                        'Hebron': {
                            'exemplarCity': '\u0647\u064A\u0628\u0631\u0648\u0646 (\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062E\u0644\u064A\u0644)'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '\u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A'
                        },
                        'Hovd': {
                            'exemplarCity': '\u0647\u0648\u0641\u062F'
                        },
                        'Irkutsk': {
                            'exemplarCity': '\u0627\u064A\u0631\u0643\u064A\u062A\u0633\u0643'
                        },
                        'Jakarta': {
                            'exemplarCity': '\u062C\u0627\u0643\u0631\u062A\u0627'
                        },
                        'Jayapura': {
                            'exemplarCity': '\u062C\u0627\u064A\u0627\u0628\u064A\u0648\u0631\u0627'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': '\u0622\u0644\u0627\u0646\u0628\u0627\u062A\u0627\u0631'
                        },
                        'Urumqi': {
                            'exemplarCity': '\u0623\u0631\u0648\u0645\u0643\u064A'
                        },
                        'Ust-Nera': {
                            'exemplarCity': '\u0623\u0648\u0633\u062A \u0646\u064A\u0631\u0627'
                        },
                        'Vientiane': {
                            'exemplarCity': '\u0641\u064A\u0627\u0646\u062A\u064A\u0627\u0646'
                        },
                        'Vladivostok': {
                            'exemplarCity': '\u0641\u0644\u0627\u062F\u064A\u0641\u0648\u0633\u062A\u0643'
                        },
                        'Yakutsk': {
                            'exemplarCity': '\u064A\u0627\u0643\u062A\u0633\u0643'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': '\u064A\u0643\u0627\u062A\u0631\u0646\u0628\u064A\u0631\u062C'
                        },
                        'Yerevan': {
                            'exemplarCity': '\u064A\u0631\u064A\u0641\u0627\u0646'
                        },
                        'Tokyo': {
                            'exemplarCity': '\u0637\u0648\u0643\u064A\u0648'
                        },
                        'Thimphu': {
                            'exemplarCity': '\u062A\u064A\u0645\u0641\u0648'
                        },
                        'Tehran': {
                            'exemplarCity': '\u0637\u0647\u0631\u0627\u0646'
                        },
                        'Tbilisi': {
                            'exemplarCity': '\u062A\u0628\u0644\u064A\u0633\u064A'
                        },
                        'Tashkent': {
                            'exemplarCity': '\u0637\u0634\u0642\u0646\u062F'
                        },
                        'Taipei': {
                            'exemplarCity': '\u062A\u0627\u064A\u0628\u064A\u0647'
                        },
                        'Singapore': {
                            'exemplarCity': '\u0633\u0646\u063A\u0627\u0641\u0648\u0631\u0629'
                        },
                        'Jerusalem': {
                            'exemplarCity': '\u0627\u0644\u0642\u062F\u0633'
                        },
                        'Ashgabat': {
                            'exemplarCity': '\u0639\u0634\u0642 \u0622\u0628\u0627\u062F'
                        },
                        'Aqtobe': {
                            'exemplarCity': '\u0623\u0643\u062A\u0648\u0628'
                        },
                        'Aqtau': {
                            'exemplarCity': '\u0623\u0643\u062A\u0627\u0648'
                        },
                        'Anadyr': {
                            'exemplarCity': '\u0623\u0646\u062F\u064A\u0631'
                        },
                        'Amman': {
                            'exemplarCity': '\u0639\u0645\u0627\u0646'
                        },
                        'Almaty': {
                            'exemplarCity': '\u0623\u0644\u0645\u0627\u062A\u064A'
                        },
                        'Aden': {
                            'exemplarCity': '\u0639\u062F\u0646'
                        },
                        'Bahrain': {
                            'exemplarCity': '\u0627\u0644\u0628\u062D\u0631\u064A\u0646'
                        },
                        'Baku': {
                            'exemplarCity': '\u0628\u0627\u0643\u0648'
                        },
                        'Bangkok': {
                            'exemplarCity': '\u0628\u0627\u0646\u0643\u0648\u0643'
                        },
                        'Beirut': {
                            'exemplarCity': '\u0628\u064A\u0631\u0648\u062A'
                        },
                        'Bishkek': {
                            'exemplarCity': '\u0628\u0634\u0643\u064A\u0643'
                        },
                        'Brunei': {
                            'exemplarCity': '\u0628\u0631\u0648\u0646\u0627\u064A'
                        },
                        'Calcutta': {
                            'exemplarCity': '\u0643\u0627\u0644\u0643\u062A\u0627'
                        },
                        'Choibalsan': {
                            'exemplarCity': '\u062A\u0634\u0648\u0628\u0627\u0644\u0633\u0627\u0646'
                        },
                        'Kabul': {
                            'exemplarCity': '\u0643\u0627\u0628\u0648\u0644'
                        },
                        'Kamchatka': {
                            'exemplarCity': '\u0643\u0627\u0645\u062A\u0634\u0627\u062A\u0643\u0627'
                        },
                        'Karachi': {
                            'exemplarCity': '\u0643\u0631\u0627\u062A\u0634\u064A'
                        },
                        'Kashgar': {
                            'exemplarCity': '\u0643\u0627\u0634\u062C\u0627\u0631'
                        },
                        'Katmandu': {
                            'exemplarCity': '\u0643\u0627\u062A\u0645\u0627\u0646\u062F\u0648'
                        },
                        'Khandyga': {
                            'exemplarCity': '\u062E\u0627\u0646\u062F\u064A\u062C\u0627'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': '\u0643\u0631\u0627\u0633\u0646\u0648\u064A\u0627\u0631\u0633\u0643'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': '\u0643\u0648\u0627\u0644\u0627 \u0644\u0627\u0645\u0628\u0648\u0631'
                        },
                        'Kuching': {
                            'exemplarCity': '\u0643\u064A\u0634\u064A\u0646\u062C'
                        },
                        'Kuwait': {
                            'exemplarCity': '\u0627\u0644\u0643\u0648\u064A\u062A'
                        },
                        'Macau': {
                            'exemplarCity': '\u0645\u0627\u0643\u0627\u0648'
                        },
                        'Magadan': {
                            'exemplarCity': '\u0645\u062C\u0627\u062F\u0646'
                        },
                        'Makassar': {
                            'exemplarCity': '\u0645\u0627\u0643\u0633\u0627\u0631'
                        },
                        'Manila': {
                            'exemplarCity': '\u0645\u0627\u0646\u064A\u0644\u0627'
                        },
                        'Muscat': {
                            'exemplarCity': '\u0645\u0633\u0642\u0637'
                        },
                        'Nicosia': {
                            'exemplarCity': '\u0646\u064A\u0642\u0648\u0633\u064A\u0627'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': '\u0646\u0648\u0641\u0648\u0643\u0648\u0632\u0646\u062A\u0633\u0643'
                        }
                    }
                },
                'metazone': {
                    'Taipei': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062A\u0627\u064A\u0628\u064A\u0647',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0627\u064A\u0628\u064A\u0647 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062A\u0627\u064A\u0628\u064A\u0647 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0627\u0647\u064A\u062A\u064A'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u064A\u0648\u0648\u0627'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0648\u0631\u064A\u0646\u0627\u0645'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0646\u0648\u0628 \u062C\u0648\u0631\u062C\u064A\u0627'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0633\u0644\u064A\u0645\u0627\u0646'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0646\u063A\u0627\u0641\u0648\u0631\u0629'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u064A\u0634\u0644'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0645\u0648\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0645\u0627\u0631\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0645\u0627\u0631\u0627',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0633\u0645\u0627\u0631\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u062E\u0627\u0644\u064A\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u062E\u0627\u0644\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u062E\u0627\u0644\u064A\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0631\u0648\u062B\u064A\u0631\u0627'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0631\u064A\u0648\u0646\u064A\u0648\u0646'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0646\u0627\u0628'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u062A\u0643\u064A\u0631\u0646'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0646\u062A \u0628\u064A\u064A\u0631 \u0648\u0645\u064A\u0643\u0648\u0644\u0648\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0646\u062A \u0628\u064A\u064A\u0631 \u0648\u0645\u064A\u0643\u0648\u0644\u0648\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0633\u0627\u0646\u062A \u0628\u064A\u064A\u0631 \u0648\u0645\u064A\u0643\u0648\u0644\u0648\u0646 \u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0641\u064A\u0646\u0643\u0633'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0645\u0627\u0632\u0648\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0645\u0627\u0632\u0648\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0645\u0627\u0632\u0648\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0644\u0627\u0633\u0643\u0627',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0644\u0623\u0644\u0627\u0633\u0643\u0627',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0644\u0627\u0633\u0643\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0646\u0648\u0628 \u0623\u0641\u0631\u064A\u0642\u064A\u0627'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0623\u0641\u0631\u064A\u0642\u064A\u0627'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0648\u0633\u0637 \u0623\u0641\u0631\u064A\u0642\u064A\u0627'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0634\u0631\u0642\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u0634\u0631\u0642\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u0634\u0631\u0642\u064A'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062C\u0628\u0644\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062C\u0628\u0644\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062C\u0628\u0644\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0627\u062F\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0627\u062F\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0627\u062F\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0646\u0627\u062F\u064A\u0631',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0646\u0627\u062F\u064A\u0631 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0644\u0623\u0646\u0627\u062F\u064A\u0631'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0639\u0631\u0628\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u0627\u0644\u063A\u0631\u0628\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u0627\u0644\u063A\u0631\u0628\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u0627\u0644\u063A\u0631\u0628\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0631\u0645\u064A\u0646\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0631\u0645\u064A\u0646\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0631\u0645\u064A\u0646\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0634\u0648\u064A\u0628\u0627\u0644\u0633\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0648\u064A\u0628\u0627\u0644\u0633\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0644\u0634\u0648\u064A\u0628\u0627\u0644\u0633\u0627\u0646'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0627\u0644\u0643\u0631\u064A\u0633\u0645\u0627\u0633'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0643\u0648\u0643\u0648\u0633'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0644\u0648\u0645\u0628\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0643\u0648\u0648\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0643\u0648\u0648\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0643\u0648\u0648\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0628\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0628\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0628\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062F\u0627\u0641\u064A\u0632'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062F\u064A \u0645\u0648\u0646\u062A \u062F\u0648 \u0631\u0648\u0641\u064A\u0644'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u064A\u0645\u0648\u0631 \u0627\u0644\u0634\u0631\u0642\u064A\u0629'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0627\u0633\u062A\u0631',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0627\u0633\u062A\u0631 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0627\u0633\u062A\u0631 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0625\u0643\u0648\u0627\u062F\u0648\u0631'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0648\u0633\u0637 \u0623\u0648\u0631\u0648\u0628\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0648\u0633\u0637 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0648\u0633\u0637 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0623\u0648\u0631\u0648\u0628\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0648\u0631\u0648\u0628\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0648\u0631\u0648\u0628\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0641\u0648\u0643\u0644\u0627\u0646\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0641\u064A\u062C\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u064A\u062C\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0641\u064A\u062C\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0648\u0643\u064A\u0644\u0627\u0648'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062A\u0648\u0646\u063A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0648\u0646\u063A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062A\u0648\u0646\u063A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0634\u0627\u0643'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062A\u0631\u0643\u0645\u0627\u0646\u0633\u062A\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0631\u0643\u0645\u0627\u0646\u0633\u062A\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062A\u0631\u0643\u0645\u0627\u0646\u0633\u062A\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0648\u0641\u0627\u0644\u0648'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0631\u063A\u0648\u0627\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0631\u063A\u0648\u0627\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0631\u063A\u0648\u0627\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0632\u0628\u0643\u0633\u062A\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0632\u0628\u0643\u0633\u062A\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0632\u0628\u0643\u0633\u062A\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0641\u0627\u0646\u0648\u0627\u062A\u0648',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0627\u0646\u0648\u0627\u062A\u0648 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0641\u0627\u0646\u0648\u0627\u062A\u0648 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u064A\u0643\u0627\u062A\u0631\u064A\u0646\u0628\u0648\u0631\u063A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u064A\u0643\u0627\u062A\u0631\u064A\u0646\u0628\u0648\u0631\u063A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u064A\u0643\u0627\u062A\u0631\u064A\u0646\u0628\u0648\u0631\u063A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u064A\u0627\u0643\u0648\u062A\u0633\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u064A\u0627\u0643\u0648\u062A\u0633\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u064A\u0627\u0643\u0648\u062A\u0633\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0648\u0627\u0644\u064A\u0633 \u0648 \u0641\u0648\u062A\u0648\u0646\u0627'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0648\u0627\u0643'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0648\u0633\u062A\u0648\u0643'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0641\u0648\u0644\u063A\u0648\u063A\u0631\u0627\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0648\u0644\u063A\u0648\u063A\u0631\u0627\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0641\u0648\u0644\u063A\u0648\u063A\u0631\u0627\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0641\u0644\u0627\u062F\u064A\u0641\u0648\u0633\u062A\u0648\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0644\u0627\u062F\u064A\u0641\u0648\u0633\u062A\u0648\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0641\u0644\u0627\u062F\u064A\u0641\u0648\u0633\u062A\u0648\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0646\u0632\u0648\u064A\u0644\u0627'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0637\u0627\u062C\u0643\u0633\u062A\u0627\u0646'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0641\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0641\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0641\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0647\u0648\u0646\u063A \u0643\u0648\u0646\u063A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0647\u0627\u0648\u0627\u064A \u0623\u0644\u064A\u0648\u062A\u064A\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0647\u0627\u0648\u0627\u064A \u0623\u0644\u064A\u0648\u062A\u064A\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0647\u0627\u0648\u0627\u064A \u0623\u0644\u064A\u0648\u062A\u064A\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u064A\u0627\u0646\u0627'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062E\u0644\u064A\u062C'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0648\u0627\u0645'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u063A\u0631\u064A\u0646\u0644\u0627\u0646\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u064A\u0646\u062A\u0634'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u062C\u064A\u0644\u0628\u0631\u062A'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062C\u0648\u0631\u062C\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0648\u0631\u062C\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062C\u0648\u0631\u062C\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0627\u0645\u0628\u064A\u0631'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0644\u0627\u0628\u0627\u063A\u0648\u0633'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u0642\u0627\u0637\u0639\u0627\u062A \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629 \u0627\u0644\u062C\u0646\u0648\u0628\u064A\u0629 \u0648\u0627\u0644\u0623\u0646\u062A\u0627\u0631\u062A\u064A\u0643\u064A\u0629'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0648\u064A\u0627\u0646\u0627 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u0631\u0643\u0632\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0623\u0637\u0644\u0633\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u0623\u0637\u0644\u0633\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u0623\u0637\u0644\u0633\u064A'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0627\u0644\u0623\u0633\u062A\u0631\u0627\u0644\u064A',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0628\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0628\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u063A\u0631\u0628\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0628\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u063A\u0631\u0628\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0628\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u063A\u0631\u0628\u064A \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0628\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u0634\u0631\u0642\u064A \u0644\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u0634\u0631\u0642\u064A \u0644\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'standard': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0633\u0645\u064A \u0627\u0644\u063A\u0631\u0628\u064A \u0644\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0627\u0644\u063A\u0631\u0628\u064A \u0644\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0630\u0631\u0628\u064A\u062C\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0630\u0631\u0628\u064A\u062C\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0630\u0631\u0628\u064A\u062C\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0632\u0648\u0631\u0633',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0632\u0648\u0631\u0633 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0632\u0648\u0631\u0633 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0628\u0646\u062C\u0644\u0627\u062F\u064A\u0634',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0646\u062C\u0644\u0627\u062F\u064A\u0634 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u0646\u062C\u0644\u0627\u062F\u064A\u0634 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0648\u062A\u0627\u0646'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0648\u0644\u064A\u0641\u064A\u0627'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0628\u0631\u0627\u0632\u064A\u0644\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0631\u0627\u0632\u064A\u0644\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u0631\u0627\u0632\u064A\u0644\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0631\u0648\u0646\u0627\u064A'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062E\u0636\u0631',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062E\u0636\u0631 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062E\u0636\u0631 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0634\u0627\u0645\u0648\u0631\u0648'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u062A\u0634\u0627\u062A\u0627\u0645',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062A\u0634\u0627\u062A\u0627\u0645 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u062A\u0634\u0627\u062A\u0627\u0645 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0634\u064A\u0644\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u064A\u0644\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0634\u064A\u0644\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0647\u0646\u062F'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0645\u062D\u064A\u0637 \u0627\u0644\u0647\u0646\u062F\u064A'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0647\u0646\u062F \u0627\u0644\u0635\u064A\u0646\u064A\u0629'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0648\u0633\u0637 \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0625\u064A\u0631\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0625\u064A\u0631\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0625\u064A\u0631\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0625\u0631\u0643\u0648\u062A\u0633\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0625\u0631\u0643\u0648\u062A\u0633\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0625\u0631\u0643\u0648\u062A\u0633\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0625\u0633\u0631\u0627\u0626\u064A\u0644',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0625\u0633\u0631\u0627\u0626\u064A\u0644 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0625\u0633\u0631\u0627\u0626\u064A\u0644 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u064A\u0627\u0628\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u064A\u0627\u0628\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u064A\u0627\u0628\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0627\u0645\u0634\u0627\u062A\u0643\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u062A\u0631\u0648\u0628\u0627\u0641\u0644\u0648\u0641\u0633\u0643-\u0643\u0627\u0645\u062A\u0634\u0627\u062A\u0633\u0643\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u062A\u0631\u0648\u0628\u0627\u0641\u0644\u0648\u0641\u0633\u0643-\u0643\u0627\u0645\u062A\u0634\u0627\u062A\u0633\u0643\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0634\u0631\u0642 \u0643\u0627\u0632\u0627\u062E\u0633\u062A\u0627\u0646'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u063A\u0631\u0628 \u0643\u0627\u0632\u0627\u062E\u0633\u062A\u0627\u0646'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0631\u064A\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0631\u064A\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0648\u0633\u0631\u0627'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0631\u0627\u0633\u0646\u0648\u064A\u0627\u0631\u0633\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0631\u0627\u0633\u0646\u0648\u064A\u0627\u0631\u0633\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0644\u0643\u0631\u0627\u0633\u0646\u0648\u064A\u0627\u0631\u0633\u0643'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0642\u0631\u063A\u064A\u0632\u0633\u062A\u0627\u0646'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0644\u0627\u064A\u0646'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0644\u0648\u0631\u062F \u0647\u0627\u0648',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0644\u0648\u0631\u062F \u0647\u0627\u0648 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u0627\u0644\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0635\u064A\u0641\u064A \u0644\u0644\u0648\u0631\u062F \u0647\u0627\u0648'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u0643\u0648\u0627\u0631\u064A'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u063A\u0627\u062F\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u063A\u0627\u062F\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u063A\u0627\u062F\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u0644\u064A\u0632\u064A\u0627'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0640\u0645\u0627\u0644\u062F\u064A\u0641'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u0631\u0643\u064A\u0633\u0627\u0633'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0645\u0627\u0631\u0634\u0627\u0644'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0631\u064A\u0634\u064A\u0648\u0633 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0627\u0648\u0633\u0648\u0646'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0644\u0627\u0646 \u0628\u0627\u062A\u0648\u0631',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0644\u0627\u0646 \u0628\u0627\u062A\u0648\u0631 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0644\u0627\u0646 \u0628\u0627\u062A\u0648\u0631 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0633\u0643\u0648',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0633\u0643\u0648 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0645\u0648\u0633\u0643\u0648 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0645\u064A\u0627\u0646\u0645\u0627\u0631'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u0627\u0648\u0631\u0648'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0628\u0627\u0644'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0643\u0627\u0644\u064A\u062F\u0648\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0643\u0627\u0644\u064A\u062F\u0648\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0643\u0627\u0644\u064A\u062F\u0648\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0632\u064A\u0644\u0627\u0646\u062F\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0632\u064A\u0644\u0627\u0646\u062F\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0632\u064A\u0644\u0627\u0646\u062F\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0641\u0627\u0648\u0646\u062F\u0644\u0627\u0646\u062F',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0641\u0627\u0648\u0646\u062F\u0644\u0627\u0646\u062F \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u0641\u0627\u0648\u0646\u062F\u0644\u0627\u0646\u062F \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u064A\u0648\u064A'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u0648\u0631\u0641\u0648\u0643'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0641\u064A\u0631\u0646\u0627\u0646\u062F\u0648 \u062F\u064A \u0646\u0648\u0631\u0648\u0646\u0647\u0627',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0641\u0631\u0646\u0627\u0646\u062F\u0648 \u062F\u064A \u0646\u0648\u0631\u0648\u0646\u0647\u0627 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0641\u0631\u0646\u0627\u0646\u062F\u0648 \u062F\u064A \u0646\u0648\u0631\u0648\u0646\u0647\u0627 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u062C\u0632\u0631 \u0645\u0627\u0631\u064A\u0627\u0646\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0646\u0648\u0641\u0648\u0633\u064A\u0628\u064A\u0631\u0633\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0646\u0648\u0641\u0648\u0633\u064A\u0628\u064A\u0631\u0633\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0646\u0648\u0641\u0648\u0633\u064A\u0628\u064A\u0631\u0633\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0645\u0633\u0643',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0645\u0633\u0643 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0623\u0648\u0645\u0633\u0643 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0643\u0633\u062A\u0627\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0643\u0633\u062A\u0627\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0643\u0633\u062A\u0627\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0644\u0627\u0648'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0628\u0648\u0627 \u063A\u064A\u0646\u064A\u0627 \u0627\u0644\u062C\u062F\u064A\u062F\u0629'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u0627\u0631\u0627\u063A\u0648\u0627\u064A \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u0631\u0648',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u0631\u0648 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0628\u064A\u0631\u0648 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0641\u064A\u0644\u0628\u064A\u0646',
                            'standard': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0641\u064A\u0644\u0628\u064A\u0646 \u0627\u0644\u0631\u0633\u0645\u064A',
                            'daylight': '\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u0641\u064A\u0644\u0628\u064A\u0646 \u0627\u0644\u0635\u064A\u0641\u064A'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': '\u062C\u0631\u064A\u0646\u062A\u0634{0}',
                'gmtZeroFormat': '\u062C\u0631\u064A\u0646\u062A\u0634',
                'regionFormat': '\u062A\u0648\u0642\u064A\u062A {0}',
                'regionFormat-type-daylight': '\u062A\u0648\u0642\u064A\u062A {0} \u0627\u0644\u0635\u064A\u0641\u064A',
                'regionFormat-type-standard': '\u062A\u0648\u0642\u064A\u062A {0} \u0627\u0644\u0631\u0633\u0645\u064A',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}\u060C {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0648\u062D\u062F',
                'collation': '\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0641\u0631\u0632',
                'colHiraganaQuaternary': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u0627\u0644\u0643\u0627\u0646\u0627',
                'colCaseLevel': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u062D\u0633\u0627\u0633\u064A\u0629 \u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062D\u0631\u0641',
                'colCaseFirst': '\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0628\u062D\u0633\u0628 \u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0643\u0628\u064A\u0631\u0629/\u0627\u0644\u0635\u063A\u064A\u0631\u0629',
                'colBackwards': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u0627\u0644\u0644\u0643\u0646\u0629 \u0627\u0644\u0645\u0639\u0643\u0648\u0633\u0629',
                'colAlternate': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0631\u0645\u0648\u0632',
                'calendar': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645',
                'x': '\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062E\u0627\u0635',
                'variableTop': '\u062A\u0635\u0646\u064A\u0641 \u0643\u0631\u0645\u0648\u0632',
                'va': '\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0644\u063A\u0629',
                'timezone': '\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629',
                'numbers': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645',
                'currency': '\u0627\u0644\u0639\u0645\u0644\u0629',
                'colStrength': '\u0642\u0648\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641',
                'colNumeric': '\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0631\u0642\u0645\u064A'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0643\u0627\u0646\u0627 \u0628\u0634\u0643\u0644 \u0645\u0646\u0641\u0635\u0644',
                    'yes': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0643\u0627\u0646\u0627 \u0628\u0634\u0643\u0644 \u0645\u062E\u062A\u0644\u0641'
                },
                'colCaseLevel': {
                    'no': '\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u0627\u0644\u0623\u062D\u0631\u0641 \u063A\u064A\u0631 \u0627\u0644\u062D\u0633\u0627\u0633\u0629 \u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062D\u0631\u0641',
                    'yes': '\u062A\u0635\u0646\u064A\u0641 \u0628\u062D\u0633\u0628 \u062D\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u0623\u062D\u0631\u0641'
                },
                'colCaseFirst': {
                    'lower': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0623\u0648\u0644\u0627\u064B',
                    'no': '\u062A\u0631\u062A\u064A\u0628 \u062A\u0635\u0646\u064A\u0641 \u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629',
                    'upper': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0623\u0648\u0644\u0627\u064B'
                },
                'colStrength': {
                    'identical': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0643\u0644',
                    'primary': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u0642\u0637',
                    'quaternary': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0644\u0643\u0646\u0627\u062A/\u0627\u0644\u062D\u0627\u0644\u0629/\u0627\u0644\u0639\u0631\u0636/\u0627\u0644\u0643\u0627\u0646\u0627',
                    'secondary': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0644\u0643\u0646\u0627\u062A',
                    'tertiary': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0644\u0643\u0646\u0627\u062A/\u0627\u0644\u062D\u0627\u0644\u0629/\u0627\u0644\u0639\u0631\u0636'
                },
                'colNumeric': {
                    'no': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0639\u0644\u0649 \u062D\u062F\u0629',
                    'yes': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0628\u0627\u0644\u0639\u062F\u062F'
                },
                'colNormalization': {
                    'no': '\u0627\u0644\u062A\u0635\u0641\u064A\u0629 \u0628\u062F\u0648\u0646 \u062A\u0633\u0648\u064A\u0629',
                    'yes': '\u062A\u0635\u0646\u064A\u0641 Unicode \u0637\u0628\u064A\u0639\u064A'
                },
                'calendar': {
                    'japanese': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u064A\u0627\u0628\u0627\u0646\u064A',
                    'iso8601': 'iso8601',
                    'coptic': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0642\u0628\u0637\u064A',
                    'dangi': 'dangi',
                    'ethiopic': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0625\u062B\u064A\u0648\u0628\u064A',
                    'ethiopic-amete-alem': '\u062A\u0642\u0648\u064A\u0645 \u0623\u0645\u064A\u062A\u064A \u0623\u0644\u064A\u0645 \u0627\u0644\u0625\u062B\u064A\u0648\u0628\u064A',
                    'gregorian': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0645\u064A\u0644\u0627\u062F\u064A',
                    'hebrew': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0639\u0628\u0631\u064A',
                    'persian': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0641\u0627\u0631\u0633\u064A',
                    'roc': '\u062A\u0642\u0648\u064A\u0645 \u0645\u064A\u0646\u062C\u0648',
                    'chinese': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0635\u064A\u0646\u064A',
                    'buddhist': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0628\u0648\u0630\u064A',
                    'indian': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0642\u0648\u0645\u064A \u0627\u0644\u0647\u0646\u062F\u064A',
                    'islamic': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0647\u062C\u0631\u064A',
                    'islamic-civil': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A \u0627\u0644\u0645\u062F\u0646\u064A',
                    'islamic-rgsa': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A (\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629)',
                    'islamic-tbla': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A (\u0645\u062C\u062F\u0648\u0644\u060C \u0627\u0644\u0639\u0635\u0631 \u0627\u0644\u0641\u0644\u0643\u064A)',
                    'islamic-umalqura': '\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A (\u0623\u0645 \u0627\u0644\u0642\u0631\u0649)'
                },
                'collation': {
                    'phonebook': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 \u062F\u0644\u064A\u0644 \u0627\u0644\u0647\u0627\u062A\u0641',
                    'gb2312han': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u0645\u0628\u0633\u0637\u0629 (GB2312)',
                    'eor': 'eor',
                    'ducet': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 Unicode \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A',
                    'dictionary': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 \u0627\u0644\u0642\u0627\u0645\u0648\u0633',
                    'big5han': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629 (Big5)',
                    'traditional': '\u062A\u0631\u062A\u064A\u0628 \u062A\u0642\u0644\u064A\u062F\u064A',
                    'standard': '\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0641\u0631\u0632 \u0627\u0644\u0642\u064A\u0627\u0633\u064A',
                    'zhuyin': 'zhuyin',
                    'unihan': '\u062A\u0631\u062A\u064A\u0628 \u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u062C\u0630\u0631 \u0648\u0627\u0644\u0636\u063A\u0637\u0627\u062A',
                    'stroke': '\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u064A\u0646\u064A \u0628\u0646\u064A\u064A\u0646 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A',
                    'searchjl': '\u0628\u062D\u062B \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062D\u0631\u0641 \u0627\u0644\u0647\u0627\u0646\u063A\u0648\u0644 \u0627\u0644\u0633\u0627\u0643\u0646 \u0627\u0644\u0623\u0648\u0644',
                    'search': '\u0628\u062D\u062B \u0644\u0623\u063A\u0631\u0627\u0636 \u0639\u0627\u0645\u0629',
                    'reformed': '\u062A\u0631\u062A\u064A\u0628 \u0641\u0631\u0632 \u0645\u062D\u0633\u064E\u0651\u0646',
                    'pinyin': '\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u064A\u0646\u064A \u0628\u0646\u064A\u064A\u0646 \u0627\u0644\u0645\u0628\u0633\u0637',
                    'phonetic': '\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0641\u0631\u0632 \u0627\u0644\u0635\u0648\u062A\u064A'
                },
                'numbers': {
                    'knda': '\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0643\u0627\u0646\u0627\u062F\u0627',
                    'khmr': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062E\u064A\u0645\u0631\u064A\u0629',
                    'kali': 'kali',
                    'jpanfin': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u064A\u0627\u0628\u0627\u0646\u064A\u0629',
                    'jpan': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u064A\u0627\u0628\u0627\u0646\u064A\u0629',
                    'java': 'java',
                    'hebr': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0628\u0631\u064A\u0629',
                    'hantfin': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629',
                    'hant': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629',
                    'hansfin': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u0645\u0628\u0633\u0637\u0629',
                    'hans': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0635\u064A\u0646\u064A\u0629 \u0627\u0644\u0645\u0628\u0633\u0637\u0629',
                    'hanidec': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0634\u0631\u064A\u0629 \u0627\u0644\u0635\u064A\u0646\u064A\u0629',
                    'guru': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u063A\u0648\u0631\u0645\u0648\u062E\u064A\u0629',
                    'gujr': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u063A\u0648\u062C\u0627\u0631\u0627\u062A\u064A\u0629',
                    'greklow': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u064A\u0648\u0646\u0627\u0646\u064A\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629',
                    'grek': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u064A\u0648\u0646\u0627\u0646\u064A\u0629',
                    'bali': 'bali',
                    'armnlow': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0631\u0645\u064A\u0646\u064A\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629',
                    'armn': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0631\u0645\u064A\u0646\u064A\u0629',
                    'arabext': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0647\u0646\u062F\u064A\u0629 \u0627\u0644\u0645\u0645\u062A\u062F\u0629',
                    'arab': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0647\u0646\u062F\u064A\u0629',
                    'finance': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629',
                    'traditional': '\u0623\u0631\u0642\u0627\u0645 \u062A\u0642\u0644\u064A\u062F\u064A\u0629',
                    'native': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0635\u0644\u064A\u0629',
                    'beng': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0628\u0646\u063A\u0627\u0644\u064A\u0629',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062F\u064A\u0641\u0627\u0646\u063A\u0627\u0631\u064A\u0629',
                    'orya': '\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0648\u0631\u064A\u0627',
                    'osma': 'osma',
                    'roman': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629',
                    'romanlow': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629 \u0627\u0644\u0635\u063A\u064A\u0631\u0629',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': '\u0623\u0631\u0642\u0627\u0645 \u0641\u0627\u064A',
                    'tibt': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0628\u062A\u064A\u0629',
                    'thai': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0627\u064A\u0644\u0627\u0646\u062F\u064A\u0629',
                    'telu': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u064A\u0644\u0648\u063A\u0648\u064A\u0629',
                    'tamldec': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0627\u0645\u064A\u0644\u064A\u0629',
                    'taml': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0627\u0645\u064A\u0644\u064A\u0629 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': '\u0623\u0631\u0642\u0627\u0645 \u0645\u064A\u0627\u0646\u0645\u0627\u0631',
                    'mtei': 'mtei',
                    'mong': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u063A\u0648\u0644\u064A\u0629',
                    'mlym': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0644\u0627\u064A\u0644\u0627\u0645\u064A\u0629',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u063A\u0631\u0628\u064A\u0629',
                    'laoo': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0644\u0627\u0648\u064A\u0629',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062C\u0648\u0631\u062C\u064A\u0629',
                    'fullwide': '\u0623\u0631\u0642\u0627\u0645 \u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u0639\u0631\u0636',
                    'ethi': '\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0625\u062B\u064A\u0648\u0628\u064A\u0629'
                },
                'colAlternate': {
                    'non-ignorable': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0631\u0645\u0648\u0632',
                    'shifted': '\u062A\u0635\u0646\u064A\u0641 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0631\u0645\u0648\u0632'
                },
                'colBackwards': {
                    'no': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0644\u0643\u0646\u0627\u062A \u0628\u0634\u0643\u0644 \u0639\u0627\u062F\u064A',
                    'yes': '\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0644\u0643\u0646\u0627\u062A \u0645\u0639\u0643\u0648\u0633\u0629'
                }
            },
            'codePatterns': {
                'language': '\u0627\u0644\u0644\u063A\u0629: {0}',
                'script': '\u0646\u0638\u0627\u0645 \u0627\u0644\u0643\u062A\u0627\u0628\u0629: {0}',
                'territory': '\u0627\u0644\u0645\u0646\u0637\u0642\u0629: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-zero': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-one': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-two': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-few': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-many': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-other': '{0} \u0623\u0648\u0646\u0633'
                },
                'mass-kilogram': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u063A\u0631\u0627\u0645'
                },
                'mass-gram': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A',
                    'unitPattern-count-one': '{0} \u063A\u0631\u0627\u0645',
                    'unitPattern-count-two': '\u063A\u0631\u0627\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u063A\u0631\u0627\u0645\u0627\u062A',
                    'unitPattern-count-many': '{0} \u063A\u0631\u0627\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A'
                },
                'length-yard': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-one': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-two': '\u064A\u0627\u0631\u062F\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-many': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A'
                },
                'length-picometer': {
                    'unitPattern-count-zero': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631'
                },
                'length-millimeter': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631'
                },
                'length-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644',
                    'unitPattern-count-two': '\u0645\u064A\u0644\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644'
                },
                'length-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u062A\u0631',
                    'unitPattern-count-two': '\u0645\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631'
                },
                'length-light-year': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0633\u0646\u0629 \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-two': '\u0633\u0646\u062A\u0627\u0646 \u0636\u0648\u0626\u064A\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0633\u0646\u0648\u0627\u062A \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0633\u0646\u0629 \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0636\u0648\u0626\u064A\u0629'
                },
                'length-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631'
                },
                'length-inch': {
                    'unitPattern-count-zero': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-one': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-two': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-few': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-many': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-other': '{0} \u0628\u0648\u0635\u0629'
                },
                'length-foot': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-one': '{0} \u0642\u062F\u0645',
                    'unitPattern-count-two': '\u0642\u062F\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-many': '{0} \u0642\u062F\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645'
                },
                'length-centimeter': {
                    'unitPattern-count-zero': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0633\u0646\u062A\u064A\u0645\u062A\u0631'
                },
                'duration-year': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0633\u0646\u0648\u0627\u062A',
                    'unitPattern-count-one': '\u0633\u0646\u0629',
                    'unitPattern-count-two': '\u0633\u0646\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0633\u0646\u0648\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-other': '{0} \u0633\u0646\u0629'
                },
                'duration-week': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0623\u0633\u0627\u0628\u064A\u0639',
                    'unitPattern-count-one': '\u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-two': '\u0623\u0633\u0628\u0648\u0639\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u0633\u0627\u0628\u064A\u0639',
                    'unitPattern-count-many': '{0} \u0623\u0633\u0628\u0648\u0639\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0623\u0633\u0628\u0648\u0639'
                },
                'duration-month': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0623\u0634\u0647\u0631',
                    'unitPattern-count-one': '\u0634\u0647\u0631',
                    'unitPattern-count-two': '\u0634\u0647\u0631\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u0634\u0647\u0631',
                    'unitPattern-count-many': '{0} \u0634\u0647\u0631\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0634\u0647\u0631'
                },
                'mass-pound': {
                    'unitPattern-count-zero': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-one': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-two': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-few': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-many': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-other': '{0} \u0631\u0637\u0644'
                },
                'power-horsepower': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646'
                },
                'power-kilowatt': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637'
                },
                'power-watt': {
                    'unitPattern-count-zero': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0648\u0627\u0637'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-zero': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-one': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-two': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-few': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-many': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-other': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-zero': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-two': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-few': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629'
                },
                'pressure-millibar': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631'
                },
                'volume-liter': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0644\u062A\u0631\u0627\u062A',
                    'unitPattern-count-one': '{0} \u0644\u062A\u0631',
                    'unitPattern-count-two': '\u0644\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0644\u062A\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0644\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0644\u062A\u0631\u0627\u062A'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0643\u0639\u0628'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-zero': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-two': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-other': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A'
                },
                'temperature-celsius': {
                    'unitPattern-count-zero': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-two': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-other': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-zero': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-few': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629'
                },
                'duration-minute': {
                    'unitPattern-count-zero': '\u0644\u0627 \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-one': '\u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-two': '\u062F\u0642\u064A\u0642\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-many': '{0} \u062F\u0642\u064A\u0642\u0629\u064B',
                    'unitPattern-count-other': '{0} \u062F\u0642\u064A\u0642\u0629'
                },
                'duration-millisecond': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629'
                },
                'duration-hour': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0633\u0627\u0639\u0627\u062A',
                    'unitPattern-count-one': '\u0633\u0627\u0639\u0629',
                    'unitPattern-count-two': '\u0633\u0627\u0639\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0633\u0627\u0639\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0633\u0627\u0639\u0629\u064B',
                    'unitPattern-count-other': '{0} \u0633\u0627\u0639\u0629'
                },
                'duration-day': {
                    'unitPattern-count-zero': '{0} \u064A\u0648\u0645',
                    'unitPattern-count-one': '\u064A\u0648\u0645',
                    'unitPattern-count-two': '\u064A\u0648\u0645\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u064A\u0627\u0645',
                    'unitPattern-count-many': '{0} \u064A\u0648\u0645\u0627\u064B',
                    'unitPattern-count-other': '{0} \u064A\u0648\u0645'
                },
                'area-square-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639'
                },
                'area-square-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-one': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-two': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-few': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-many': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-other': '{0} \u0645\u062A\u0631 \u0645\u0631\u0628\u0639'
                },
                'area-square-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0645\u0631\u0628\u0639'
                },
                'per': {
                    'compoundUnitPattern': '{0} \u0643\u0644 {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639'
                },
                'angle-arc-minute': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-one': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-two': '\u062F\u0642\u064A\u0642\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-many': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062F\u0642\u0627\u0626\u0642'
                },
                'angle-arc-second': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062B\u0648\u0627\u0646\u064A',
                    'unitPattern-count-one': '{0} \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '\u062B\u0627\u0646\u064A\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062B\u0648\u0627\u0646\u064D',
                    'unitPattern-count-many': '{0} \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062B\u0648\u0627\u0646\u064A'
                },
                'angle-degree': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0627\u062A',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-two': '\u062F\u0631\u062C\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0627\u062A',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0627\u062A'
                },
                'area-acre': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-one': '{0} \u0641\u062F\u0627\u0646',
                    'unitPattern-count-two': '\u0641\u062F\u0627\u0646\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-many': '{0} \u0641\u062F\u0627\u0646\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646'
                },
                'area-hectare': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0647\u0643\u062A\u0627\u0631\u0627\u062A',
                    'unitPattern-count-one': '{0} \u0647\u0643\u062A\u0627\u0631',
                    'unitPattern-count-two': '\u0647\u0643\u062A\u0627\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0647\u0643\u062A\u0627\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0647\u0643\u062A\u0627\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0647\u0643\u062A\u0627\u0631\u0627\u062A'
                },
                'area-square-foot': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645 \u0627\u0644\u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-one': '{0} \u0642\u062F\u0645 \u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-two': '\u0642\u062F\u0645\u0627\u0646 \u0645\u0631\u0628\u0639\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0642\u062F\u0627\u0645 \u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-many': '{0} \u0642\u062F\u0645\u064B\u0627 \u0645\u0631\u0628\u0639\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645 \u0627\u0644\u0645\u0631\u0628\u0639\u0629'
                },
                'duration-second': {
                    'unitPattern-count-zero': '\u0644\u0627 \u062B\u0648\u0627\u0646',
                    'unitPattern-count-one': '\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '\u062B\u0627\u0646\u064A\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u062B\u0648\u0627\u0646',
                    'unitPattern-count-many': '{0} \u062B\u0627\u0646\u064A\u0629\u064B',
                    'unitPattern-count-other': '{0} \u062B\u0627\u0646\u064A\u0629'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-zero': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-one': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-two': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-few': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-many': '{0} \u0623\u0648\u0646\u0633',
                    'unitPattern-count-other': '{0} \u0623\u0648\u0646\u0633'
                },
                'mass-kilogram': {
                    'unitPattern-count-zero': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-one': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-two': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-few': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-many': '{0} \u0643\u063A\u0645',
                    'unitPattern-count-other': '{0} \u0643\u063A\u0645'
                },
                'mass-gram': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A',
                    'unitPattern-count-one': '{0} \u063A\u0631\u0627\u0645',
                    'unitPattern-count-two': '\u063A\u0631\u0627\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u063A\u0631\u0627\u0645\u0627\u062A',
                    'unitPattern-count-many': '{0} \u063A\u0631\u0627\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u063A\u0631\u0627\u0645\u0627\u062A'
                },
                'length-yard': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-one': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-two': '\u064A\u0627\u0631\u062F\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u064A\u0627\u0631\u062F\u0627\u062A',
                    'unitPattern-count-many': '{0} \u064A\u0627\u0631\u062F\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u064A\u0627\u0631\u062F\u0627\u062A'
                },
                'length-picometer': {
                    'unitPattern-count-zero': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0628\u064A\u0643\u0648\u0645\u062A\u0631'
                },
                'length-millimeter': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A\u0645\u062A\u0631'
                },
                'length-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644',
                    'unitPattern-count-two': '\u0645\u064A\u0644\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u064A\u0627\u0644',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u064A\u0627\u0644'
                },
                'length-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u062A\u0631',
                    'unitPattern-count-two': '\u0645\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0645\u062A\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0645\u062A\u0627\u0631'
                },
                'length-light-year': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0633\u0646\u0629 \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-two': '\u0633\u0646\u062A\u0627\u0646 \u0636\u0648\u0626\u064A\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0633\u0646\u0648\u0627\u062A \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0633\u0646\u0629 \u0636\u0648\u0626\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0633\u0646\u0648\u0627\u062A \u0627\u0644\u0636\u0648\u0626\u064A\u0629'
                },
                'length-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645',
                    'unitPattern-count-one': '{0} \u0643\u0645',
                    'unitPattern-count-two': '{0} \u0643\u0645',
                    'unitPattern-count-few': '{0} \u0643\u0645',
                    'unitPattern-count-many': '{0} \u0643\u0645',
                    'unitPattern-count-other': '{0} \u0643\u0645'
                },
                'length-inch': {
                    'unitPattern-count-zero': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-one': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-two': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-few': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-many': '{0} \u0628\u0648\u0635\u0629',
                    'unitPattern-count-other': '{0} \u0628\u0648\u0635\u0629'
                },
                'length-foot': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-one': '{0} \u0642\u062F\u0645',
                    'unitPattern-count-two': '\u0642\u062F\u0645\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0642\u062F\u0627\u0645',
                    'unitPattern-count-many': '{0} \u0642\u062F\u0645\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645'
                },
                'length-centimeter': {
                    'unitPattern-count-zero': '{0} \u0633\u0645',
                    'unitPattern-count-one': '{0} \u0633\u0645',
                    'unitPattern-count-two': '{0} \u0633\u0645',
                    'unitPattern-count-few': '{0} \u0633\u0645',
                    'unitPattern-count-many': '{0} \u0633\u0645',
                    'unitPattern-count-other': '{0} \u0633\u0645'
                },
                'duration-year': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0633\u0646\u0648\u0627\u062A',
                    'unitPattern-count-one': '\u0633\u0646\u0629',
                    'unitPattern-count-two': '\u0633\u0646\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0633\u0646\u0648\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0633\u0646\u0629',
                    'unitPattern-count-other': '{0} \u0633\u0646\u0629'
                },
                'duration-week': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0623\u0633\u0627\u0628\u064A\u0639',
                    'unitPattern-count-one': '\u0623\u0633\u0628\u0648\u0639',
                    'unitPattern-count-two': '\u0623\u0633\u0628\u0648\u0639\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u0633\u0627\u0628\u064A\u0639',
                    'unitPattern-count-many': '{0} \u0623\u0633\u0628\u0648\u0639\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0623\u0633\u0628\u0648\u0639'
                },
                'duration-month': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0623\u0634\u0647\u0631',
                    'unitPattern-count-one': '\u0634\u0647\u0631',
                    'unitPattern-count-two': '\u0634\u0647\u0631\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u0634\u0647\u0631',
                    'unitPattern-count-many': '{0} \u0634\u0647\u0631\u0627\u064B',
                    'unitPattern-count-other': '{0} \u0634\u0647\u0631'
                },
                'mass-pound': {
                    'unitPattern-count-zero': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-one': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-two': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-few': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-many': '{0} \u0631\u0637\u0644',
                    'unitPattern-count-other': '{0} \u0631\u0637\u0644'
                },
                'power-horsepower': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062D\u0635\u0627\u0646'
                },
                'power-kilowatt': {
                    'unitPattern-count-zero': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0643\u064A\u0644\u0648\u0648\u0627\u0637'
                },
                'power-watt': {
                    'unitPattern-count-zero': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-one': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-two': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-few': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-many': '{0} \u0648\u0627\u0637',
                    'unitPattern-count-other': '{0} \u0648\u0627\u0637'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-zero': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-one': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-two': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-few': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-many': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644',
                    'unitPattern-count-other': '{0} \u0647\u0643\u062A\u0648\u0628\u0627\u0633\u0643\u0627\u0644'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-zero': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-one': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-two': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-few': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-many': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0628\u0648\u0635\u0629 \u0632\u0626\u0628\u0642\u064A\u0629'
                },
                'pressure-millibar': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u0628\u0627\u0631'
                },
                'volume-liter': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0644\u062A\u0631\u0627\u062A',
                    'unitPattern-count-one': '{0} \u0644\u062A\u0631',
                    'unitPattern-count-two': '\u0644\u062A\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0644\u062A\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0644\u062A\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0644\u062A\u0631\u0627\u062A'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0643\u0639\u0628'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-one': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-two': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-few': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-many': '{0} \u0643\u0645\u00B3',
                    'unitPattern-count-other': '{0} \u0643\u0645\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-zero': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-two': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A',
                    'unitPattern-count-other': '{0} \u062F\u0631\u062C\u0629 \u0641\u0647\u0631\u0646\u0647\u0627\u064A\u062A'
                },
                'temperature-celsius': {
                    'unitPattern-count-zero': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-two': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633',
                    'unitPattern-count-other': '{0} \u062F\u0631\u062C\u0629 \u0633\u0644\u0632\u064A\u0648\u0633'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644/\u0633',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644/\u0633'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-zero': '{0} \u0645/\u062B',
                    'unitPattern-count-one': '{0} \u0645/\u062B',
                    'unitPattern-count-two': '{0} \u0645/\u062B',
                    'unitPattern-count-few': '{0} \u0645/\u062B',
                    'unitPattern-count-many': '{0} \u0645/\u062B',
                    'unitPattern-count-other': '{0} \u0645/\u062B'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-zero': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-one': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-two': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-few': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-many': '{0} \u0643\u0645/\u0633',
                    'unitPattern-count-other': '{0} \u0643\u0645/\u0633'
                },
                'duration-minute': {
                    'unitPattern-count-zero': '\u0644\u0627 \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-one': '\u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-two': '\u062F\u0642\u064A\u0642\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u062F',
                    'unitPattern-count-many': '{0} \u062F',
                    'unitPattern-count-other': '{0} \u062F'
                },
                'duration-millisecond': {
                    'unitPattern-count-zero': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-one': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-two': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-few': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-many': '{0} \u0645\u0644\u0644\u064A \u062B.',
                    'unitPattern-count-other': '{0} \u0645\u0644\u0644\u064A \u062B.'
                },
                'duration-hour': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0633\u0627\u0639\u0627\u062A',
                    'unitPattern-count-one': '\u0633\u0627\u0639\u0629',
                    'unitPattern-count-two': '\u0633\u0627\u0639\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0633',
                    'unitPattern-count-many': '{0} \u0633',
                    'unitPattern-count-other': '{0} \u0633'
                },
                'duration-day': {
                    'unitPattern-count-zero': '\u0644\u0627 \u0623\u064A\u0627\u0645',
                    'unitPattern-count-one': '\u064A\u0648\u0645',
                    'unitPattern-count-two': '\u064A\u0648\u0645\u0627\u0646',
                    'unitPattern-count-few': '{0} \u0623\u064A\u0627\u0645',
                    'unitPattern-count-many': '{0} \u064A\u0648\u0645\u0627\u064B',
                    'unitPattern-count-other': '{0} \u064A\u0648\u0645'
                },
                'area-square-mile': {
                    'unitPattern-count-zero': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-one': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-two': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-few': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-many': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639',
                    'unitPattern-count-other': '{0} \u0645\u064A\u0644 \u0645\u0631\u0628\u0639'
                },
                'area-square-meter': {
                    'unitPattern-count-zero': '{0} \u0645\u00B2',
                    'unitPattern-count-one': '{0} \u0645\u00B2',
                    'unitPattern-count-two': '{0} \u0645\u00B2',
                    'unitPattern-count-few': '{0} \u0645\u00B2',
                    'unitPattern-count-many': '{0} \u0645\u00B2',
                    'unitPattern-count-other': '{0} \u0645\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-zero': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-one': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-two': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-few': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-many': '{0} \u0643\u0645\u00B2',
                    'unitPattern-count-other': '{0} \u0643\u0645\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-zero': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-one': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-two': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-few': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-many': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639',
                    'unitPattern-count-other': '{0} \u0642\u0648\u0629 \u062A\u0633\u0627\u0631\u0639'
                },
                'angle-arc-minute': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-one': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-two': '\u062F\u0642\u064A\u0642\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062F\u0642\u0627\u0626\u0642',
                    'unitPattern-count-many': '{0} \u062F\u0642\u064A\u0642\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062F\u0642\u0627\u0626\u0642'
                },
                'angle-arc-second': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062B\u0648\u0627\u0646\u064A',
                    'unitPattern-count-one': '{0} \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '\u062B\u0627\u0646\u064A\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062B\u0648\u0627\u0646\u064D',
                    'unitPattern-count-many': '{0} \u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062B\u0648\u0627\u0646\u064A'
                },
                'angle-degree': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0627\u062A',
                    'unitPattern-count-one': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-two': '\u062F\u0631\u062C\u062A\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u062F\u0631\u062C\u0627\u062A',
                    'unitPattern-count-many': '{0} \u062F\u0631\u062C\u0629',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u062F\u0631\u062C\u0627\u062A'
                },
                'area-acre': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-one': '{0} \u0641\u062F\u0627\u0646',
                    'unitPattern-count-two': '\u0641\u062F\u0627\u0646\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0641\u062F\u0627\u062F\u064A\u0646',
                    'unitPattern-count-many': '{0} \u0641\u062F\u0627\u0646\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0641\u062F\u0627\u062F\u064A\u0646'
                },
                'area-hectare': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0647\u0643\u062A\u0627\u0631\u0627\u062A',
                    'unitPattern-count-one': '{0} \u0647\u0643\u062A\u0627\u0631',
                    'unitPattern-count-two': '\u0647\u0643\u062A\u0627\u0631\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0647\u0643\u062A\u0627\u0631\u0627\u062A',
                    'unitPattern-count-many': '{0} \u0647\u0643\u062A\u0627\u0631\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0647\u0643\u062A\u0627\u0631\u0627\u062A'
                },
                'area-square-foot': {
                    'unitPattern-count-zero': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645 \u0627\u0644\u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-one': '{0} \u0642\u062F\u0645 \u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-two': '\u0642\u062F\u0645\u0627\u0646 \u0645\u0631\u0628\u0639\u0627\u0646 ({0})',
                    'unitPattern-count-few': '{0} \u0623\u0642\u062F\u0627\u0645 \u0645\u0631\u0628\u0639\u0629',
                    'unitPattern-count-many': '{0} \u0642\u062F\u0645\u064B\u0627 \u0645\u0631\u0628\u0639\u064B\u0627',
                    'unitPattern-count-other': '{0} \u0645\u0646 \u0627\u0644\u0623\u0642\u062F\u0627\u0645 \u0627\u0644\u0645\u0631\u0628\u0639\u0629'
                },
                'duration-second': {
                    'unitPattern-count-zero': '\u0644\u0627 \u062B\u0648\u0627\u0646',
                    'unitPattern-count-one': '\u062B\u0627\u0646\u064A\u0629',
                    'unitPattern-count-two': '\u062B\u0627\u0646\u064A\u062A\u0627\u0646',
                    'unitPattern-count-few': '{0} \u062B',
                    'unitPattern-count-many': '{0} \u062B',
                    'unitPattern-count-other': '{0} \u062B'
                }
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
