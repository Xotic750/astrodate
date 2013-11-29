/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language tr}.
 * @version 0.6.1
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('tr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Oca',
                                    '2': 'Şub',
                                    '3': 'Mar',
                                    '4': 'Nis',
                                    '5': 'May',
                                    '6': 'Haz',
                                    '7': 'Tem',
                                    '8': 'Ağu',
                                    '9': 'Eyl',
                                    '10': 'Eki',
                                    '11': 'Kas',
                                    '12': 'Ara'
                                },
                                'narrow': {
                                    '1': 'O',
                                    '2': 'Ş',
                                    '3': 'M',
                                    '4': 'N',
                                    '5': 'M',
                                    '6': 'H',
                                    '7': 'T',
                                    '8': 'A',
                                    '9': 'E',
                                    '10': 'E',
                                    '11': 'K',
                                    '12': 'A'
                                },
                                'wide': {
                                    '1': 'Ocak',
                                    '2': 'Şubat',
                                    '3': 'Mart',
                                    '4': 'Nisan',
                                    '5': 'Mayıs',
                                    '6': 'Haziran',
                                    '7': 'Temmuz',
                                    '8': 'Ağustos',
                                    '9': 'Eylül',
                                    '10': 'Ekim',
                                    '11': 'Kasım',
                                    '12': 'Aralık'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Oca',
                                    '2': 'Şub',
                                    '3': 'Mar',
                                    '4': 'Nis',
                                    '5': 'May',
                                    '6': 'Haz',
                                    '7': 'Tem',
                                    '8': 'Ağu',
                                    '9': 'Eyl',
                                    '10': 'Eki',
                                    '11': 'Kas',
                                    '12': 'Ara'
                                },
                                'narrow': {
                                    '1': 'O',
                                    '2': 'Ş',
                                    '3': 'M',
                                    '4': 'N',
                                    '5': 'M',
                                    '6': 'H',
                                    '7': 'T',
                                    '8': 'A',
                                    '9': 'E',
                                    '10': 'E',
                                    '11': 'K',
                                    '12': 'A'
                                },
                                'wide': {
                                    '1': 'Ocak',
                                    '2': 'Şubat',
                                    '3': 'Mart',
                                    '4': 'Nisan',
                                    '5': 'Mayıs',
                                    '6': 'Haziran',
                                    '7': 'Temmuz',
                                    '8': 'Ağustos',
                                    '9': 'Eylül',
                                    '10': 'Ekim',
                                    '11': 'Kasım',
                                    '12': 'Aralık'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': 'Çar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': 'Ç',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': 'Ça',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Salı',
                                    'wed': 'Çarşamba',
                                    'thu': 'Perşembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': 'Çar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': 'Ç',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': 'Ça',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Salı',
                                    'wed': 'Çarşamba',
                                    'thu': 'Perşembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
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
                                },
                                'wide': {
                                    '1': '1. çeyrek',
                                    '2': '2. çeyrek',
                                    '3': '3. çeyrek',
                                    '4': '4. çeyrek'
                                }
                            },
                            'stand-alone': {
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
                                },
                                'wide': {
                                    '1': '1. çeyrek',
                                    '2': '2. çeyrek',
                                    '3': '3. çeyrek',
                                    '4': '4. çeyrek'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'narrow': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'wide': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'narrow': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'wide': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Milattan Önce',
                                '1': 'Milattan Sonra',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
                            },
                            'eraAbbr': {
                                '0': 'MÖ',
                                '1': 'MS',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
                            },
                            'eraNarrow': {
                                '0': 'MÖ',
                                '1': 'MS',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
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
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'd E',
                                'Ehm': 'E a h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G MMM y',
                                'GyMMMd': 'G dd MMM y',
                                'GyMMMEd': 'G d MMM y E',
                                'h': 'a h',
                                'H': 'HH',
                                'hm': 'a h:mm',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd/MM',
                                'MEd': 'dd/MM E',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'd MMMM E',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'dd MMMM E',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'dd.MM.y E',
                                'yMM': 'MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'dd MMM y',
                                'yMMMEd': 'd MMM y E',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'y/QQQ',
                                'yQQQQ': 'y/QQQQ'
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
                                    'a': 'a h – a h',
                                    'h': 'a h–h'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'a h:mm – a h:mm',
                                    'h': 'a h:mm–h:mm',
                                    'm': 'a h:mm–h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm – a h:mm v',
                                    'h': 'a h:mm–h:mm v',
                                    'm': 'a h:mm–h:mm v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'a h – a h v',
                                    'h': 'a h–h v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'MM–MM'
                                },
                                'Md': {
                                    'd': 'dd/MM – dd/MM',
                                    'M': 'dd/MM – dd/MM'
                                },
                                'MEd': {
                                    'd': 'dd/MM E – dd/MM E',
                                    'M': 'dd/MM E – dd/MM E'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd – d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'd MMM E – d MMM E',
                                    'M': 'd MMM E – d MMM E'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM/y – MM/y',
                                    'y': 'MM/y – MM/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'dd.MM.y E – dd.MM.y E',
                                    'M': 'dd.MM.y E – dd.MM.y E',
                                    'y': 'dd.MM.y E – dd.MM.y E'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'd MMM y E – d MMM y E',
                                    'M': 'd MMM y E – d MMM y E',
                                    'y': 'd MMM y E – d MMM y E'
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
                    'regionFormat': '{0} Saati',
                    'regionFormat-type-daylight': '{0} Yaz Saati',
                    'regionFormat-type-standard': '{0} Standart Saati',
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
