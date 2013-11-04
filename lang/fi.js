/* AstroDate Language: fi
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
    }((function (AstroDate) {
        AstroDate.lang('fi', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. neljännes',
                                '2': '2. neljännes',
                                '3': '3. neljännes',
                                '4': '4. neljännes'
                            },
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1. neljännes',
                                '2': '2. neljännes',
                                '3': '3. neljännes',
                                '4': '4. neljännes'
                            },
                            'abbreviated': {
                                '1': '1. nelj.',
                                '2': '2. nelj.',
                                '3': '3. nelj.',
                                '4': '4. nelj.'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'tammikuuta',
                                '10': 'lokakuuta',
                                '2': 'helmikuuta',
                                '11': 'marraskuuta',
                                '3': 'maaliskuuta',
                                '12': 'joulukuuta',
                                '4': 'huhtikuuta',
                                '5': 'toukokuuta',
                                '6': 'kesäkuuta',
                                '7': 'heinäkuuta',
                                '8': 'elokuuta',
                                '9': 'syyskuuta'
                            },
                            'abbreviated': {
                                '1': 'tammikuuta',
                                '10': 'lokakuuta',
                                '2': 'helmikuuta',
                                '11': 'marraskuuta',
                                '3': 'maaliskuuta',
                                '12': 'joulukuuta',
                                '4': 'huhtikuuta',
                                '5': 'toukokuuta',
                                '6': 'kesäkuuta',
                                '7': 'heinäkuuta',
                                '8': 'elokuuta',
                                '9': 'syyskuuta'
                            },
                            'narrow': {
                                '1': 'T',
                                '10': 'L',
                                '2': 'H',
                                '11': 'M',
                                '3': 'M',
                                '12': 'J',
                                '4': 'H',
                                '5': 'T',
                                '6': 'K',
                                '7': 'H',
                                '8': 'E',
                                '9': 'S'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'tammikuu',
                                '10': 'lokakuu',
                                '2': 'helmikuu',
                                '11': 'marraskuu',
                                '3': 'maaliskuu',
                                '12': 'joulukuu',
                                '4': 'huhtikuu',
                                '5': 'toukokuu',
                                '6': 'kesäkuu',
                                '7': 'heinäkuu',
                                '8': 'elokuu',
                                '9': 'syyskuu'
                            },
                            'abbreviated': {
                                '1': 'tammi',
                                '10': 'loka',
                                '2': 'helmi',
                                '11': 'marras',
                                '3': 'maalis',
                                '12': 'joulu',
                                '4': 'huhti',
                                '5': 'touko',
                                '6': 'kesä',
                                '7': 'heinä',
                                '8': 'elo',
                                '9': 'syys'
                            },
                            'narrow': {
                                '1': 'T',
                                '10': 'L',
                                '2': 'H',
                                '11': 'M',
                                '3': 'M',
                                '12': 'J',
                                '4': 'H',
                                '5': 'T',
                                '6': 'K',
                                '7': 'H',
                                '8': 'E',
                                '9': 'S'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'tiistaina',
                                'fri': 'perjantaina',
                                'sun': 'sunnuntaina',
                                'sat': 'lauantaina',
                                'wed': 'keskiviikkona',
                                'mon': 'maanantaina',
                                'thu': 'torstaina'
                            },
                            'abbreviated': {
                                'tue': 'ti',
                                'fri': 'pe',
                                'sun': 'su',
                                'sat': 'la',
                                'wed': 'ke',
                                'mon': 'ma',
                                'thu': 'to'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'P',
                                'sun': 'S',
                                'sat': 'L',
                                'wed': 'K',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'ti',
                                'fri': 'pe',
                                'sun': 'su',
                                'sat': 'la',
                                'wed': 'ke',
                                'mon': 'ma',
                                'thu': 'to'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'tiistai',
                                'fri': 'perjantai',
                                'sun': 'sunnuntai',
                                'sat': 'lauantai',
                                'wed': 'keskiviikko',
                                'mon': 'maanantai',
                                'thu': 'torstai'
                            },
                            'abbreviated': {
                                'tue': 'ti',
                                'fri': 'pe',
                                'sun': 'su',
                                'sat': 'la',
                                'wed': 'ke',
                                'mon': 'ma',
                                'thu': 'to'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'P',
                                'sun': 'S',
                                'sat': 'L',
                                'wed': 'K',
                                'mon': 'M',
                                'thu': 'T'
                            },
                            'short': {
                                'tue': 'ti',
                                'fri': 'pe',
                                'sun': 'su',
                                'sat': 'la',
                                'wed': 'ke',
                                'mon': 'ma',
                                'thu': 'to'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            },
                            'abbreviated': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            },
                            'narrow': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            },
                            'abbreviated': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            },
                            'narrow': {
                                'pm': 'ip.',
                                'am': 'ap.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'jälkeen ajanlaskun alun',
                            '0-alt-variant': 'ennen ajanlaskun alkua',
                            '0': 'ennen Kristuksen syntymää',
                            '1': 'jälkeen Kristuksen syntymän'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'jaa.',
                            '0-alt-variant': 'eaa.',
                            '0': 'eKr.',
                            '1': 'jKr.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'jaa',
                            '0-alt-variant': 'eaa',
                            '0': 'eK',
                            '1': 'jK'
                        }
                    },
                    'dateFormats': {
                        'full': 'cccc d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
                    },
                    'timeFormats': {
                        'full': 'H.mm.ss zzzz',
                        'long': 'H.mm.ss z',
                        'medium': 'H.mm.ss',
                        'short': 'H.mm'
                    },
                    'dateTimeFormats': {
                        'full': '{1} {0}',
                        'appendItems': {
                            'Minute': '{0} ({2}: {1})',
                            'Day': '{0} ({2}: {1})',
                            'Era': '{1} {0}',
                            'Week': '{0} ({2}: {1})',
                            'Day-Of-Week': '{0} {1}',
                            'Hour': '{0} ({2}: {1})',
                            'Year': '{1} {0}',
                            'Month': '{0} ({2}: {1})',
                            'Quarter': '{0} ({2}: {1})',
                            'Second': '{0} ({2}: {1})',
                            'Timezone': '{0} {1}'
                        },
                        'long': '{1} {0}',
                        'availableFormats': {
                            'EHm': 'E H.mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E h.mm.ss a',
                            'Ehm': 'E h.mm a',
                            'Md': 'd.M.',
                            'Ed': 'E d.',
                            'Gy': 'y G',
                            'yMd': 'd.M.y',
                            'MMMd': 'd. MMM',
                            'MEd': 'E d.M.',
                            'GyMMMd': 'd. MMM y G',
                            'EHms': 'E H.mm.ss',
                            'hms': 'h.mm.ss a',
                            'GyMMMEd': 'E d. MMM y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'Hm': 'H.mm',
                            'H': 'H',
                            'yMEd': 'E d.M.y',
                            'MMMEd': 'ccc d. MMM',
                            'hm': 'h.mm a',
                            'Hms': 'H.mm.ss',
                            'yM': 'L.y',
                            'MMM': 'LLL',
                            'ms': 'm.ss',
                            'y': 'y',
                            'yMM': 'M.y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd. MMM y',
                            'yMMMEd': 'E d. MMM y',
                            'yMMMM': 'LLLL y',
                            'yMMMMccccd': 'cccc d. MMMM y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'H–H v'
                            },
                            'Hmv': {
                                'H': 'H.mm–H.mm v',
                                'm': 'H.mm–H.mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'L.–L.'
                            },
                            'intervalFormatFallback': '{0}–{1}',
                            'Md': {
                                'd': 'd.–d.M.',
                                'M': 'd.M.–d.M.'
                            },
                            'd': {
                                'd': 'd.–d.'
                            },
                            'MMMEd': {
                                'd': 'E d. – E d. MMMM',
                                'M': 'E d. MMMM – E d. MMMM'
                            },
                            'hm': {
                                'a': 'h.mm a – h.mm a',
                                'm': 'h.mm–h.mm a',
                                'h': 'h.mm–h.mm a'
                            },
                            'yMEd': {
                                'd': 'E d.M.y – E d.M.y',
                                'M': 'E d.M.y – E d.M.y',
                                'y': 'E d.M.y – E d.M.y'
                            },
                            'hmv': {
                                'a': 'h.mm a – h.mm a v',
                                'm': 'h.mm–h.mm a v',
                                'h': 'h.mm–h.mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'H': {
                                'H': 'H–H'
                            },
                            'Hm': {
                                'H': 'H.mm–H.mm',
                                'm': 'H.mm–H.mm'
                            },
                            'MMM': {
                                'M': 'LLL–LLLL'
                            },
                            'yM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            },
                            'yMMMd': {
                                'd': 'd.–d. MMMM y',
                                'M': 'd. MMMM – d. MMMM y',
                                'y': 'd. MMMM y – d. MMMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'MMMM': {
                                'M': 'LLL–LLLL'
                            },
                            'yMd': {
                                'd': 'd.–d.M.y',
                                'M': 'd.M.–d.M.y',
                                'y': 'd.M.y–d.M.y'
                            },
                            'MMMd': {
                                'd': 'd.–d. MMMM',
                                'M': 'd. MMMM – d. MMMM'
                            },
                            'MEd': {
                                'd': 'E d. – E d.M.',
                                'M': 'E d.M. – E d.M.'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMEd': {
                                'd': 'E d. – E d. MMMM y',
                                'M': 'E d. MMMM – E d. MMMM y',
                                'y': 'E d. MMMM y – E d. MMMM y'
                            },
                            'yMMMM': {
                                'M': 'LLL–LLLL y',
                                'y': 'LLLL y – LLLL y'
                            }
                        }
                    }
                }
            }
        });
    }())));
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
