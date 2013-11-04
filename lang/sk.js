/* AstroDate Language: sk
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
        AstroDate.lang('sk', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. štvrťrok',
                                '2': '2. štvrťrok',
                                '3': '3. štvrťrok',
                                '4': '4. štvrťrok'
                            },
                            'abbreviated': {
                                '1': 'Q1',
                                '2': 'Q2',
                                '3': 'Q3',
                                '4': 'Q4'
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
                                '1': '1. štvrťrok',
                                '2': '2. štvrťrok',
                                '3': '3. štvrťrok',
                                '4': '4. štvrťrok'
                            },
                            'abbreviated': {
                                '1': '1Q',
                                '2': '2Q',
                                '3': '3Q',
                                '4': '4Q'
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
                                '1': 'januára',
                                '10': 'októbra',
                                '2': 'februára',
                                '11': 'novembra',
                                '3': 'marca',
                                '12': 'decembra',
                                '4': 'apríla',
                                '5': 'mája',
                                '6': 'júna',
                                '7': 'júla',
                                '8': 'augusta',
                                '9': 'septembra'
                            },
                            'abbreviated': {
                                '1': 'jan',
                                '10': 'okt',
                                '2': 'feb',
                                '11': 'nov',
                                '3': 'mar',
                                '12': 'dec',
                                '4': 'apr',
                                '5': 'máj',
                                '6': 'jún',
                                '7': 'júl',
                                '8': 'aug',
                                '9': 'sep'
                            },
                            'narrow': {
                                '1': 'j',
                                '10': 'o',
                                '2': 'f',
                                '11': 'n',
                                '3': 'm',
                                '12': 'd',
                                '4': 'a',
                                '5': 'm',
                                '6': 'j',
                                '7': 'j',
                                '8': 'a',
                                '9': 's'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'január',
                                '10': 'október',
                                '2': 'február',
                                '11': 'november',
                                '3': 'marec',
                                '12': 'december',
                                '4': 'apríl',
                                '5': 'máj',
                                '6': 'jún',
                                '7': 'júl',
                                '8': 'august',
                                '9': 'september'
                            },
                            'abbreviated': {
                                '1': 'jan',
                                '10': 'okt',
                                '2': 'feb',
                                '11': 'nov',
                                '3': 'mar',
                                '12': 'dec',
                                '4': 'apr',
                                '5': 'máj',
                                '6': 'jún',
                                '7': 'júl',
                                '8': 'aug',
                                '9': 'sep'
                            },
                            'narrow': {
                                '1': 'j',
                                '10': 'o',
                                '2': 'f',
                                '11': 'n',
                                '3': 'm',
                                '12': 'd',
                                '4': 'a',
                                '5': 'm',
                                '6': 'j',
                                '7': 'j',
                                '8': 'a',
                                '9': 's'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'utorok',
                                'fri': 'piatok',
                                'sun': 'nedeľa',
                                'sat': 'sobota',
                                'wed': 'streda',
                                'mon': 'pondelok',
                                'thu': 'štvrtok'
                            },
                            'abbreviated': {
                                'tue': 'ut',
                                'fri': 'pi',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'št'
                            },
                            'narrow': {
                                'tue': 'U',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'S',
                                'mon': 'P',
                                'thu': 'Š'
                            },
                            'short': {
                                'tue': 'Ut',
                                'fri': 'Pi',
                                'sun': 'Ne',
                                'sat': 'So',
                                'wed': 'St',
                                'mon': 'Po',
                                'thu': 'Št'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'utorok',
                                'fri': 'piatok',
                                'sun': 'nedeľa',
                                'sat': 'sobota',
                                'wed': 'streda',
                                'mon': 'pondelok',
                                'thu': 'štvrtok'
                            },
                            'abbreviated': {
                                'tue': 'ut',
                                'fri': 'pi',
                                'sun': 'ne',
                                'sat': 'so',
                                'wed': 'st',
                                'mon': 'po',
                                'thu': 'št'
                            },
                            'narrow': {
                                'tue': 'U',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'S',
                                'mon': 'P',
                                'thu': 'Š'
                            },
                            'short': {
                                'tue': 'Ut',
                                'fri': 'Pi',
                                'sun': 'Ne',
                                'sat': 'So',
                                'wed': 'St',
                                'mon': 'Po',
                                'thu': 'Št'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'abbreviated': {
                                'pm': 'PM',
                                'am': 'AM'
                            },
                            'narrow': {
                                'pm': 'PM',
                                'am': 'AM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'pred n.l.',
                            '1': 'n.l.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'pred n.l.',
                            '1': 'n.l.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'pred n.l.',
                            '1': 'n.l.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d. MMMM y',
                        'long': 'd. MMMM y',
                        'medium': 'd.M.y',
                        'short': 'd.M.y'
                    },
                    'timeFormats': {
                        'full': 'H:mm:ss zzzz',
                        'long': 'H:mm:ss z',
                        'medium': 'H:mm:ss',
                        'short': 'H:mm'
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
                            'GyMMMMd': 'd. MMMM y G',
                            'EHm': 'E HH:mm',
                            'mmss': 'mm:ss',
                            'M': 'L.',
                            'MMMMEd': 'E, d. MMMM',
                            'd': 'd.',
                            'Ehms': 'E h:mm:ss',
                            'Ehm': 'E h:mm',
                            'Md': 'd.M.',
                            'Ed': 'E d.',
                            'Gy': 'y G',
                            'yMd': 'd.M.y',
                            'MMMd': 'd. MMM.',
                            'MEd': 'E, d.M.',
                            'GyMMMd': 'd.M.y G',
                            'EHms': 'E HH:mm:ss',
                            'yMMMMd': 'd. MMMM y',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d. MMM y G',
                            'h': 'h a',
                            'GyMMM': 'LLL y G',
                            'Hm': 'H:mm',
                            'H': 'H',
                            'yMEd': 'E d. M. y',
                            'MMMEd': 'E, d. MMM.',
                            'hm': 'h:mm a',
                            'Hms': 'H:mm:ss',
                            'yM': 'M.y',
                            'MMMMd': 'd. MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd.M.y',
                            'yMMMEd': 'E, d. MMM y',
                            'yMMMM': 'LLLL y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH – HH v'
                            },
                            'Hmv': {
                                'H': 'H:mm – H:mm v',
                                'm': 'H:mm – H:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h – h a'
                            },
                            'M': {
                                'M': 'M. – M.'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd.M. - d.M.',
                                'M': 'd.M. - d.M.'
                            },
                            'd': {
                                'd': 'd. – d.'
                            },
                            'MMMEd': {
                                'd': 'E, d. - E, d. MMM',
                                'M': 'E, d. MMM - E, d. MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm - h:mm a',
                                'h': 'h:mm - h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, d.M.y - E, d.M.y',
                                'M': 'E, d.M.y - E, d.M.y',
                                'y': 'E, d.M.y - E, d.M.y'
                            },
                            'hmv': {
                                'a': 'h:mm a - h:mm a v',
                                'm': 'h:mm - h:mm a v',
                                'h': 'h:mm - h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL - LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'H': {
                                'H': 'HH – HH'
                            },
                            'Hm': {
                                'H': 'H:mm – H:mm',
                                'm': 'H:mm – H:mm'
                            },
                            'MMM': {
                                'M': 'LLL – LLL'
                            },
                            'yM': {
                                'M': 'M.y - M.y',
                                'y': 'M.y - M.y'
                            },
                            'yMMMd': {
                                'd': 'd. - d. MMM y',
                                'M': 'd. MMM - d. MMM y',
                                'y': 'd. MMM y - d. MMM y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h – h a v'
                            },
                            'MMMM': {
                                'M': 'LLLL-LLLL'
                            },
                            'yMd': {
                                'd': 'd.M.y - d.M.y',
                                'M': 'd.M.y - d.M.y',
                                'y': 'd.M.y - d.M.y'
                            },
                            'MMMd': {
                                'd': 'd. - d. MMM',
                                'M': 'd. MMM - d. MMM'
                            },
                            'MEd': {
                                'd': 'E, d.M. - E, d.M.',
                                'M': 'E, d.M. - E, d.M.'
                            },
                            'y': {
                                'y': 'y - y'
                            },
                            'yMMMEd': {
                                'd': 'E, d. - E, d. MMM y',
                                'M': 'E, d. MMM - E, d. MMM y',
                                'y': 'E, d. MMM y - E, d. MMM y'
                            },
                            'yMMMM': {
                                'M': 'LLLL - LLLL y',
                                'y': 'LLLL y - LLLL y'
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
