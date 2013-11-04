/* AstroDate Language: pl
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
            module.exports = definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }((function (AstroDate) {
        AstroDate.lang('pl', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'I kwartał',
                                '2': 'II kwartał',
                                '3': 'III kwartał',
                                '4': 'IV kwartał'
                            },
                            'abbreviated': {
                                '1': 'K1',
                                '2': 'K2',
                                '3': 'K3',
                                '4': 'K4'
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
                                '1': 'I kwartał',
                                '2': 'II kwartał',
                                '3': 'III kwartał',
                                '4': 'IV kwartał'
                            },
                            'abbreviated': {
                                '1': '1 kw.',
                                '2': '2 kw.',
                                '3': '3 kw.',
                                '4': '4 kw.'
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
                                '1': 'stycznia',
                                '10': 'października',
                                '2': 'lutego',
                                '11': 'listopada',
                                '3': 'marca',
                                '12': 'grudnia',
                                '4': 'kwietnia',
                                '5': 'maja',
                                '6': 'czerwca',
                                '7': 'lipca',
                                '8': 'sierpnia',
                                '9': 'września'
                            },
                            'abbreviated': {
                                '1': 'sty',
                                '10': 'paź',
                                '2': 'lut',
                                '11': 'lis',
                                '3': 'mar',
                                '12': 'gru',
                                '4': 'kwi',
                                '5': 'maj',
                                '6': 'cze',
                                '7': 'lip',
                                '8': 'sie',
                                '9': 'wrz'
                            },
                            'narrow': {
                                '1': 's',
                                '10': 'p',
                                '2': 'l',
                                '11': 'l',
                                '3': 'm',
                                '12': 'g',
                                '4': 'k',
                                '5': 'm',
                                '6': 'c',
                                '7': 'l',
                                '8': 's',
                                '9': 'w'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'styczeń',
                                '10': 'październik',
                                '2': 'luty',
                                '11': 'listopad',
                                '3': 'marzec',
                                '12': 'grudzień',
                                '4': 'kwiecień',
                                '5': 'maj',
                                '6': 'czerwiec',
                                '7': 'lipiec',
                                '8': 'sierpień',
                                '9': 'wrzesień'
                            },
                            'abbreviated': {
                                '1': 'sty',
                                '10': 'paź',
                                '2': 'lut',
                                '11': 'lis',
                                '3': 'mar',
                                '12': 'gru',
                                '4': 'kwi',
                                '5': 'maj',
                                '6': 'cze',
                                '7': 'lip',
                                '8': 'sie',
                                '9': 'wrz'
                            },
                            'narrow': {
                                '1': 's',
                                '10': 'p',
                                '2': 'l',
                                '11': 'l',
                                '3': 'm',
                                '12': 'g',
                                '4': 'k',
                                '5': 'm',
                                '6': 'c',
                                '7': 'l',
                                '8': 's',
                                '9': 'w'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'wtorek',
                                'fri': 'piątek',
                                'sun': 'niedziela',
                                'sat': 'sobota',
                                'wed': 'środa',
                                'mon': 'poniedziałek',
                                'thu': 'czwartek'
                            },
                            'abbreviated': {
                                'tue': 'wt.',
                                'fri': 'pt.',
                                'sun': 'niedz.',
                                'sat': 'sob.',
                                'wed': 'śr.',
                                'mon': 'pon.',
                                'thu': 'czw.'
                            },
                            'narrow': {
                                'tue': 'W',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'Ś',
                                'mon': 'P',
                                'thu': 'C'
                            },
                            'short': {
                                'tue': 'wt.',
                                'fri': 'pt.',
                                'sun': 'niedz.',
                                'sat': 'sob.',
                                'wed': 'śr.',
                                'mon': 'pon.',
                                'thu': 'czw.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'wtorek',
                                'fri': 'piątek',
                                'sun': 'niedziela',
                                'sat': 'sobota',
                                'wed': 'środa',
                                'mon': 'poniedziałek',
                                'thu': 'czwartek'
                            },
                            'abbreviated': {
                                'tue': 'wt.',
                                'fri': 'pt.',
                                'sun': 'niedz.',
                                'sat': 'sob.',
                                'wed': 'śr.',
                                'mon': 'pon.',
                                'thu': 'czw.'
                            },
                            'narrow': {
                                'tue': 'W',
                                'fri': 'P',
                                'sun': 'N',
                                'sat': 'S',
                                'wed': 'Ś',
                                'mon': 'P',
                                'thu': 'C'
                            },
                            'short': {
                                'tue': 'wt.',
                                'fri': 'pt.',
                                'sun': 'niedz.',
                                'sat': 'sob.',
                                'wed': 'śr.',
                                'mon': 'pon.',
                                'thu': 'czw.'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'abbreviated': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'abbreviated': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            },
                            'narrow': {
                                'lateMorning': 'przed południem',
                                'noon': 'w południe',
                                'morning': 'rano',
                                'earlyMorning': 'nad ranem',
                                'afternoon': 'po południu',
                                'evening': 'wieczorem',
                                'night': 'w nocy',
                                'am': 'AM',
                                'pm': 'PM'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'p.n.e.',
                            '1': 'n.e.'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'p.n.e.',
                            '1': 'n.e.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'p.n.e.',
                            '1': 'n.e.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'dd.MM.y'
                    },
                    'timeFormats': {
                        'full': 'HH:mm:ss zzzz',
                        'long': 'HH:mm:ss z',
                        'medium': 'HH:mm:ss',
                        'short': 'HH:mm'
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
                            'EHm': 'E, HH:mm',
                            'M': 'L',
                            'd': 'd',
                            'Ehms': 'E, h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'Md': 'd.MM',
                            'Ed': 'E, d',
                            'Gy': 'y G',
                            'yMd': 'd.MM.y',
                            'MMMd': 'd MMM',
                            'MMdd': 'd.MM',
                            'MEd': 'E, d.MM',
                            'GyMMMd': 'd MMM y G',
                            'EHms': 'E, HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM y G',
                            'h': 'h a',
                            'GyMMM': 'MMM y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d.MM.y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'MM.y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM.y',
                            'yMMM': 'LLL y',
                            'yMMMd': 'd MMM y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'LLLL y',
                            'yQQQ': 'QQQ y',
                            'yQQQQ': 'QQQQ y'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'M': {
                                'M': 'MM-MM'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'dd.MM–dd.MM',
                                'M': 'dd.MM–dd.MM'
                            },
                            'yMMMEd': {
                                'd': 'E, d - E, d MMM y',
                                'M': 'E, d MMM - E, d MMM y',
                                'y': 'E, d MMM y - E, d MMM y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d MMM – E, d MMM',
                                'M': 'E, d MMM - E, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd.MM.y - E, dd.MM.y',
                                'M': 'E, dd.MM.y - E, dd.MM.y',
                                'y': 'E, dd.MM.y - E, dd.MM.y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm-h:mm a v',
                                'h': 'h:mm–h:mm a v'
                            },
                            'yMMM': {
                                'M': 'LLL-LLL y',
                                'y': 'LLL y - LLL y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'LLL–LLL'
                            },
                            'yM': {
                                'M': 'MM.y - MM.y',
                                'y': 'MM.y - MM.y'
                            },
                            'yMMMd': {
                                'd': 'd-d MMM y',
                                'M': 'd MMM - d MMM y',
                                'y': 'd MMM y - d MMM y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'dd-dd.MM.y',
                                'M': 'dd.MM-dd.MM.y',
                                'y': 'dd.MM.y-dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd-d MMM',
                                'M': 'd MMM - d MMM'
                            },
                            'MEd': {
                                'd': 'E, dd.MM – E, dd.MM',
                                'M': 'E, dd.MM – E, dd.MM'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'LLLL-LLLL y',
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
