/* AstroDate Language: hi
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
        AstroDate.lang('hi', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': 'पहली तिमाही',
                                '2': 'दूसरी तिमाही',
                                '3': 'तीसरी तिमाही',
                                '4': 'चौथी तिमाही'
                            },
                            'abbreviated': {
                                '1': 'ति1',
                                '2': 'ति2',
                                '3': 'ति3',
                                '4': 'ति4'
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
                                '1': 'पहली तिमाही',
                                '2': 'दूसरी तिमाही',
                                '3': 'तीसरी तिमाही',
                                '4': 'चौथी तिमाही'
                            },
                            'abbreviated': {
                                '1': 'ति1',
                                '2': 'ति2',
                                '3': 'ति3',
                                '4': 'ति4'
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
                                '1': 'जनवरी',
                                '10': 'अक्टूबर',
                                '2': 'फ़रवरी',
                                '11': 'नवंबर',
                                '3': 'मार्च',
                                '12': 'दिसंबर',
                                '4': 'अप्रैल',
                                '5': 'मई',
                                '6': 'जून',
                                '7': 'जुलाई',
                                '8': 'अगस्त',
                                '9': 'सितंबर'
                            },
                            'abbreviated': {
                                '1': 'जन',
                                '10': 'अक्टू',
                                '2': 'फ़र',
                                '11': 'नवं',
                                '3': 'मार्च',
                                '12': 'दिसं',
                                '4': 'अप्रै',
                                '5': 'मई',
                                '6': 'जून',
                                '7': 'जुला',
                                '8': 'अग',
                                '9': 'सितं'
                            },
                            'narrow': {
                                '1': 'ज',
                                '10': 'अ',
                                '2': 'फ़',
                                '11': 'न',
                                '3': 'मा',
                                '12': 'दि',
                                '4': 'अ',
                                '5': 'म',
                                '6': 'जू',
                                '7': 'जु',
                                '8': 'अ',
                                '9': 'सि'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'जनवरी',
                                '10': 'अक्टूबर',
                                '2': 'फ़रवरी',
                                '11': 'नवंबर',
                                '3': 'मार्च',
                                '12': 'दिसंबर',
                                '4': 'अप्रैल',
                                '5': 'मई',
                                '6': 'जून',
                                '7': 'जुलाई',
                                '8': 'अगस्त',
                                '9': 'सितंबर'
                            },
                            'abbreviated': {
                                '1': 'जन',
                                '10': 'अक्टू',
                                '2': 'फ़र',
                                '11': 'नवं',
                                '3': 'मार्च',
                                '12': 'दिसं',
                                '4': 'अप्रै',
                                '5': 'मई',
                                '6': 'जून',
                                '7': 'जुला',
                                '8': 'अग',
                                '9': 'सितं'
                            },
                            'narrow': {
                                '1': 'ज',
                                '10': 'अ',
                                '2': 'फ़',
                                '11': 'न',
                                '3': 'मा',
                                '12': 'दि',
                                '4': 'अ',
                                '5': 'म',
                                '6': 'जू',
                                '7': 'जु',
                                '8': 'अ',
                                '9': 'सि'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'मंगलवार',
                                'fri': 'शुक्रवार',
                                'sun': 'रविवार',
                                'sat': 'शनिवार',
                                'wed': 'बुधवार',
                                'mon': 'सोमवार',
                                'thu': 'गुरुवार'
                            },
                            'abbreviated': {
                                'tue': 'मंगल',
                                'fri': 'शुक्र',
                                'sun': 'रवि',
                                'sat': 'शनि',
                                'wed': 'बुध',
                                'mon': 'सोम',
                                'thu': 'गुरु'
                            },
                            'narrow': {
                                'tue': 'मं',
                                'fri': 'शु',
                                'sun': 'र',
                                'sat': 'श',
                                'wed': 'बु',
                                'mon': 'सो',
                                'thu': 'गु'
                            },
                            'short': {
                                'tue': 'मं',
                                'fri': 'शु',
                                'sun': 'र',
                                'sat': 'श',
                                'wed': 'बु',
                                'mon': 'सो',
                                'thu': 'गु'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'मंगलवार',
                                'fri': 'शुक्रवार',
                                'sun': 'रविवार',
                                'sat': 'शनिवार',
                                'wed': 'बुधवार',
                                'mon': 'सोमवार',
                                'thu': 'गुरुवार'
                            },
                            'abbreviated': {
                                'tue': 'मंगल',
                                'fri': 'शुक्र',
                                'sun': 'रवि',
                                'sat': 'शनि',
                                'wed': 'बुध',
                                'mon': 'सोम',
                                'thu': 'गुरु'
                            },
                            'narrow': {
                                'tue': 'मं',
                                'fri': 'शु',
                                'sun': 'र',
                                'sat': 'श',
                                'wed': 'बु',
                                'mon': 'सो',
                                'thu': 'गु'
                            },
                            'short': {
                                'tue': 'मं',
                                'fri': 'शु',
                                'sun': 'र',
                                'sat': 'श',
                                'wed': 'बु',
                                'mon': 'सो',
                                'thu': 'गु'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'pm': 'अपराह्न',
                                'am': 'पूर्वाह्न'
                            },
                            'abbreviated': {
                                'pm': 'अपर',
                                'am': 'पूर्व'
                            },
                            'narrow': {
                                'pm': 'अ',
                                'am': 'पू'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'pm': 'अपराह्न',
                                'am': 'पूर्वाह्न'
                            },
                            'abbreviated': {
                                'pm': 'अपर',
                                'am': 'पूर्व'
                            },
                            'narrow': {
                                'pm': 'अ',
                                'am': 'पू'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'ईसा-पूर्व',
                            '1': 'ईस्वी'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'ईसा-पूर्व',
                            '1': 'ईस्वी'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'CE',
                            '0-alt-variant': 'BCE',
                            '0': 'ईसा-पूर्व',
                            '1': 'ईस्वी'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, d MMMM y',
                        'long': 'd MMMM y',
                        'medium': 'dd-MM-y',
                        'short': 'd-M-yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': '{1} को {0}',
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
                        'long': '{1} को {0}',
                        'availableFormats': {
                            'EHm': 'E HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E, d MMMM',
                            'd': 'd',
                            'Ehms': 'E h:mm:ss a',
                            'Ehm': 'E h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E d',
                            'Gy': 'y G',
                            'yMMdd': 'dd-MM-y',
                            'yMd': 'd/M/y',
                            'MMMd': 'd MMM',
                            'MMdd': 'dd-MM',
                            'MEd': 'E, d/M',
                            'GyMMMd': 'd MMM, G y',
                            'EHms': 'E HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d MMM, G y',
                            'h': 'h a',
                            'GyMMM': 'MMM G y',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, d/M/y',
                            'MMMEd': 'E, d MMM',
                            'hm': 'h:mm a',
                            'Hms': 'HH:mm:ss',
                            'yM': 'M/y',
                            'MMMMd': 'd MMMM',
                            'MMM': 'LLL',
                            'yQQQ': 'QQQ y',
                            'MMMdd': 'dd MMM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM-y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'd MMM, y',
                            'yMMMEd': 'E, d MMM y',
                            'yMMMM': 'MMMM y',
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
                                'M': 'M–M'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'Md': {
                                'd': 'd/M – d/M',
                                'M': 'd/M – d/M'
                            },
                            'yMMMEd': {
                                'd': 'E, d MMM – E, d MMM, y',
                                'M': 'E, d MMM – E, d MMM, y',
                                'y': 'E, d MMM, y – E, d MMM, y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d MMM – E, d MMM',
                                'M': 'E, d MMM – E, d MMM'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'm': 'h:mm–h:mm a',
                                'h': 'h:mm–h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, d/M/y – E, d/M/y',
                                'M': 'E, d/M/y – E, d/M/y',
                                'y': 'E, d/M/y – E, d/M/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm–h:mm a v',
                                'h': 'h:mm–h:mm a v'
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
                                'M': 'M/y – M/y',
                                'y': 'M/y – M/y'
                            },
                            'yMMMd': {
                                'd': 'd MMM–d, y',
                                'M': 'd MMM – d MMM, y',
                                'y': 'd MMM, y – d MMM, y'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'yMd': {
                                'd': 'd/M/y – d/M/y',
                                'M': 'd/M/y – d/M/y',
                                'y': 'd/M/y – d/M/y'
                            },
                            'MMMd': {
                                'd': 'd MMM–d',
                                'M': 'd MMM – d MMM'
                            },
                            'MEd': {
                                'd': 'E, d/M – E, d/M',
                                'M': 'E, d/M – E, d/M'
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
