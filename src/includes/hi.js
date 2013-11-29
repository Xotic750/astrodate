/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language hi}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9296
 * timeZoneNames: 24r9296
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
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('hi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'जन',
                                    '2': 'फ़र',
                                    '3': 'मार्च',
                                    '4': 'अप्रै',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुला',
                                    '8': 'अग',
                                    '9': 'सितं',
                                    '10': 'अक्टू',
                                    '11': 'नवं',
                                    '12': 'दिसं'
                                },
                                'narrow': {
                                    '1': 'ज',
                                    '2': 'फ़',
                                    '3': 'मा',
                                    '4': 'अ',
                                    '5': 'म',
                                    '6': 'जू',
                                    '7': 'जु',
                                    '8': 'अ',
                                    '9': 'सि',
                                    '10': 'अ',
                                    '11': 'न',
                                    '12': 'दि'
                                },
                                'wide': {
                                    '1': 'जनवरी',
                                    '2': 'फ़रवरी',
                                    '3': 'मार्च',
                                    '4': 'अप्रैल',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुलाई',
                                    '8': 'अगस्त',
                                    '9': 'सितंबर',
                                    '10': 'अक्टूबर',
                                    '11': 'नवंबर',
                                    '12': 'दिसंबर'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'जन',
                                    '2': 'फ़र',
                                    '3': 'मार्च',
                                    '4': 'अप्रै',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुला',
                                    '8': 'अग',
                                    '9': 'सितं',
                                    '10': 'अक्टू',
                                    '11': 'नवं',
                                    '12': 'दिसं'
                                },
                                'narrow': {
                                    '1': 'ज',
                                    '2': 'फ़',
                                    '3': 'मा',
                                    '4': 'अ',
                                    '5': 'म',
                                    '6': 'जू',
                                    '7': 'जु',
                                    '8': 'अ',
                                    '9': 'सि',
                                    '10': 'अ',
                                    '11': 'न',
                                    '12': 'दि'
                                },
                                'wide': {
                                    '1': 'जनवरी',
                                    '2': 'फ़रवरी',
                                    '3': 'मार्च',
                                    '4': 'अप्रैल',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुलाई',
                                    '8': 'अगस्त',
                                    '9': 'सितंबर',
                                    '10': 'अक्टूबर',
                                    '11': 'नवंबर',
                                    '12': 'दिसंबर'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'रवि',
                                    'mon': 'सोम',
                                    'tue': 'मंगल',
                                    'wed': 'बुध',
                                    'thu': 'गुरु',
                                    'fri': 'शुक्र',
                                    'sat': 'शनि'
                                },
                                'narrow': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'short': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'wide': {
                                    'sun': 'रविवार',
                                    'mon': 'सोमवार',
                                    'tue': 'मंगलवार',
                                    'wed': 'बुधवार',
                                    'thu': 'गुरुवार',
                                    'fri': 'शुक्रवार',
                                    'sat': 'शनिवार'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'रवि',
                                    'mon': 'सोम',
                                    'tue': 'मंगल',
                                    'wed': 'बुध',
                                    'thu': 'गुरु',
                                    'fri': 'शुक्र',
                                    'sat': 'शनि'
                                },
                                'narrow': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'short': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'wide': {
                                    'sun': 'रविवार',
                                    'mon': 'सोमवार',
                                    'tue': 'मंगलवार',
                                    'wed': 'बुधवार',
                                    'thu': 'गुरुवार',
                                    'fri': 'शुक्रवार',
                                    'sat': 'शनिवार'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': 'पहली तिमाही',
                                    '2': 'दूसरी तिमाही',
                                    '3': 'तीसरी तिमाही',
                                    '4': 'चौथी तिमाही'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': 'पहली तिमाही',
                                    '2': 'दूसरी तिमाही',
                                    '3': 'तीसरी तिमाही',
                                    '4': 'चौथी तिमाही'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'पूर्व',
                                    'pm': 'अपर'
                                },
                                'narrow': {
                                    'am': 'पू',
                                    'pm': 'अ'
                                },
                                'wide': {
                                    'am': 'पूर्वाह्न',
                                    'pm': 'अपराह्न'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'पूर्व',
                                    'pm': 'अपर'
                                },
                                'narrow': {
                                    'am': 'पू',
                                    'pm': 'अ'
                                },
                                'wide': {
                                    'am': 'पूर्वाह्न',
                                    'pm': 'अपराह्न'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
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
                            'long': '{1} को {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM G y',
                                'GyMMMd': 'd MMM, G y',
                                'GyMMMEd': 'E, d MMM, G y',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMdd': 'dd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM-y',
                                'yMMdd': 'dd-MM-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM, y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd/M – d/M',
                                    'M': 'd/M – d/M'
                                },
                                'MEd': {
                                    'd': 'E, d/M – E, d/M',
                                    'M': 'E, d/M – E, d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd MMM–d',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM – E, d MMM',
                                    'M': 'E, d MMM – E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y – d/M/y',
                                    'M': 'd/M/y – d/M/y',
                                    'y': 'd/M/y – d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y – E, d/M/y',
                                    'M': 'E, d/M/y – E, d/M/y',
                                    'y': 'E, d/M/y – E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd MMM–d, y',
                                    'M': 'd MMM – d MMM, y',
                                    'y': 'd MMM, y – d MMM, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM – E, d MMM, y',
                                    'M': 'E, d MMM – E, d MMM, y',
                                    'y': 'E, d MMM, y – E, d MMM, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} समय',
                    'regionFormat-type-daylight': '{0} डेलाइट समय',
                    'regionFormat-type-standard': '{0} मानक समय',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));
