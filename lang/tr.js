/* AstroDate Language: tr
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
        AstroDate.lang('tr', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1. çeyrek',
                                '2': '2. çeyrek',
                                '3': '3. çeyrek',
                                '4': '4. çeyrek'
                            },
                            'abbreviated': {
                                '1': 'Ç1',
                                '2': 'Ç2',
                                '3': 'Ç3',
                                '4': 'Ç4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1. çeyrek',
                                '2': '2. çeyrek',
                                '3': '3. çeyrek',
                                '4': '4. çeyrek'
                            },
                            'abbreviated': {
                                '1': 'Ç1',
                                '2': 'Ç2',
                                '3': 'Ç3',
                                '4': 'Ç4'
                            },
                            'narrow': {
                                '1': '1.',
                                '2': '2.',
                                '3': '3.',
                                '4': '4.'
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'Ocak',
                                '10': 'Ekim',
                                '2': 'Şubat',
                                '11': 'Kasım',
                                '3': 'Mart',
                                '12': 'Aralık',
                                '4': 'Nisan',
                                '5': 'Mayıs',
                                '6': 'Haziran',
                                '7': 'Temmuz',
                                '8': 'Ağustos',
                                '9': 'Eylül'
                            },
                            'abbreviated': {
                                '1': 'Oca',
                                '10': 'Eki',
                                '2': 'Şub',
                                '11': 'Kas',
                                '3': 'Mar',
                                '12': 'Ara',
                                '4': 'Nis',
                                '5': 'May',
                                '6': 'Haz',
                                '7': 'Tem',
                                '8': 'Ağu',
                                '9': 'Eyl'
                            },
                            'narrow': {
                                '1': 'O',
                                '10': 'E',
                                '2': 'Ş',
                                '11': 'K',
                                '3': 'M',
                                '12': 'A',
                                '4': 'N',
                                '5': 'M',
                                '6': 'H',
                                '7': 'T',
                                '8': 'A',
                                '9': 'E'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Ocak',
                                '10': 'Ekim',
                                '2': 'Şubat',
                                '11': 'Kasım',
                                '3': 'Mart',
                                '12': 'Aralık',
                                '4': 'Nisan',
                                '5': 'Mayıs',
                                '6': 'Haziran',
                                '7': 'Temmuz',
                                '8': 'Ağustos',
                                '9': 'Eylül'
                            },
                            'abbreviated': {
                                '1': 'Oca',
                                '10': 'Eki',
                                '2': 'Şub',
                                '11': 'Kas',
                                '3': 'Mar',
                                '12': 'Ara',
                                '4': 'Nis',
                                '5': 'May',
                                '6': 'Haz',
                                '7': 'Tem',
                                '8': 'Ağu',
                                '9': 'Eyl'
                            },
                            'narrow': {
                                '1': 'O',
                                '10': 'E',
                                '2': 'Ş',
                                '11': 'K',
                                '3': 'M',
                                '12': 'A',
                                '4': 'N',
                                '5': 'M',
                                '6': 'H',
                                '7': 'T',
                                '8': 'A',
                                '9': 'E'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'Salı',
                                'fri': 'Cuma',
                                'sun': 'Pazar',
                                'sat': 'Cumartesi',
                                'wed': 'Çarşamba',
                                'mon': 'Pazartesi',
                                'thu': 'Perşembe'
                            },
                            'abbreviated': {
                                'tue': 'Sal',
                                'fri': 'Cum',
                                'sun': 'Paz',
                                'sat': 'Cmt',
                                'wed': 'Çar',
                                'mon': 'Pzt',
                                'thu': 'Per'
                            },
                            'narrow': {
                                'tue': 'S',
                                'fri': 'C',
                                'sun': 'P',
                                'sat': 'C',
                                'wed': 'Ç',
                                'mon': 'P',
                                'thu': 'P'
                            },
                            'short': {
                                'tue': 'Sa',
                                'fri': 'Cu',
                                'sun': 'Pa',
                                'sat': 'Ct',
                                'wed': 'Ça',
                                'mon': 'Pt',
                                'thu': 'Pe'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'Salı',
                                'fri': 'Cuma',
                                'sun': 'Pazar',
                                'sat': 'Cumartesi',
                                'wed': 'Çarşamba',
                                'mon': 'Pazartesi',
                                'thu': 'Perşembe'
                            },
                            'abbreviated': {
                                'tue': 'Sal',
                                'fri': 'Cum',
                                'sun': 'Paz',
                                'sat': 'Cmt',
                                'wed': 'Çar',
                                'mon': 'Pzt',
                                'thu': 'Per'
                            },
                            'narrow': {
                                'tue': 'S',
                                'fri': 'C',
                                'sun': 'P',
                                'sat': 'C',
                                'wed': 'Ç',
                                'mon': 'P',
                                'thu': 'P'
                            },
                            'short': {
                                'tue': 'Sa',
                                'fri': 'Cu',
                                'sun': 'Pa',
                                'sat': 'Ct',
                                'wed': 'Ça',
                                'mon': 'Pt',
                                'thu': 'Pe'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            },
                            'abbreviated': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            },
                            'narrow': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            },
                            'abbreviated': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            },
                            'narrow': {
                                'pm': 'ÖS',
                                'am': 'ÖÖ'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'İS',
                            '0-alt-variant': 'İÖ',
                            '0': 'Milattan Önce',
                            '1': 'Milattan Sonra'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'İS',
                            '0-alt-variant': 'İÖ',
                            '0': 'MÖ',
                            '1': 'MS'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'İS',
                            '0-alt-variant': 'İÖ',
                            '0': 'MÖ',
                            '1': 'MS'
                        }
                    },
                    'dateFormats': {
                        'full': 'd MMMM y EEEE',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd.MM.y'
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
                            'EHm': 'E HH:mm',
                            'mmss': 'mm:ss',
                            'M': 'L',
                            'MMMMEd': 'dd MMMM E',
                            'd': 'd',
                            'Ehms': 'E a h:mm:ss',
                            'Ehm': 'E a h:mm',
                            'Md': 'dd/MM',
                            'Ed': 'd E',
                            'Gy': 'G y',
                            'yMd': 'dd.MM.y',
                            'MMMd': 'd MMM',
                            'MEd': 'dd/MM E',
                            'GyMMMd': 'G dd MMM y',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'a h:mm:ss',
                            'GyMMMEd': 'G d MMM y E',
                            'h': 'a h',
                            'GyMMM': 'G MMM y',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'dd.MM.y E',
                            'MMMEd': 'd MMMM E',
                            'hm': 'a h:mm',
                            'Hms': 'HH:mm:ss',
                            'yM': 'MM/y',
                            'MMMMd': 'dd MMMM',
                            'MMM': 'LLL',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM.y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'dd MMM y',
                            'yMMMEd': 'd MMM y E',
                            'yMMMM': 'MMMM y',
                            'yQQQ': 'y/QQQ',
                            'yQQQQ': 'y/QQQQ'
                        },
                        'medium': '{1} {0}',
                        'short': '{1} {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'h': {
                                'a': 'a h – a h',
                                'h': 'a h–h'
                            },
                            'M': {
                                'M': 'MM–MM'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'dd/MM – dd/MM',
                                'M': 'dd/MM – dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'd MMM y E – d MMM y E',
                                'M': 'd MMM y E – d MMM y E',
                                'y': 'd MMM y E – d MMM y E'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'd MMM E – d MMM E',
                                'M': 'd MMM E – d MMM E'
                            },
                            'hm': {
                                'a': 'a h:mm – a h:mm',
                                'm': 'a h:mm–h:mm',
                                'h': 'a h:mm–h:mm'
                            },
                            'yMEd': {
                                'd': 'dd.MM.y E – dd.MM.y E',
                                'M': 'dd.MM.y E – dd.MM.y E',
                                'y': 'dd.MM.y E – dd.MM.y E'
                            },
                            'hmv': {
                                'a': 'a h:mm – a h:mm v',
                                'm': 'a h:mm–h:mm v',
                                'h': 'a h:mm–h:mm v'
                            },
                            'yMMM': {
                                'M': 'MMM–MMM y',
                                'y': 'MMM y – MMM y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'yM': {
                                'M': 'MM/y – MM/y',
                                'y': 'MM/y – MM/y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM y',
                                'M': 'd MMM – d MMM y',
                                'y': 'd MMM y – d MMM y'
                            },
                            'hv': {
                                'a': 'a h – a h v',
                                'h': 'a h–h v'
                            },
                            'yMd': {
                                'd': 'dd.MM.y – dd.MM.y',
                                'M': 'dd.MM.y – dd.MM.y',
                                'y': 'dd.MM.y – dd.MM.y'
                            },
                            'MMMd': {
                                'd': 'd – d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'dd/MM E – dd/MM E',
                                'M': 'dd/MM E – dd/MM E'
                            },
                            'y': {
                                'y': 'y–y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM y',
                                'y': 'MMMM y – MMMM y'
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
