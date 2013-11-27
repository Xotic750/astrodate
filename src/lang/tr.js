/**
 * @file {@link https://github.com/Xotic750/astrodate tr}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * units:
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

    function defineLanguage(AstroDate) {
        AstroDate.lang('tr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Standart Saati',
                    'regionFormat-type-daylight': '{0} Yaz Saati',
                    'regionFormat': '{0} Saati',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'A\u011Fu',
                                    '7': 'Tem',
                                    '6': 'Haz',
                                    '5': 'May',
                                    '12': 'Ara',
                                    '11': 'Kas',
                                    '10': 'Eki',
                                    '9': 'Eyl',
                                    '1': 'Oca',
                                    '2': '\u015Eub',
                                    '3': 'Mar',
                                    '4': 'Nis'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'T',
                                    '6': 'H',
                                    '5': 'M',
                                    '12': 'A',
                                    '11': 'K',
                                    '10': 'E',
                                    '9': 'E',
                                    '1': 'O',
                                    '2': '\u015E',
                                    '3': 'M',
                                    '4': 'N'
                                },
                                'wide': {
                                    '8': 'A\u011Fustos',
                                    '7': 'Temmuz',
                                    '6': 'Haziran',
                                    '5': 'May\u0131s',
                                    '12': 'Aral\u0131k',
                                    '11': 'Kas\u0131m',
                                    '10': 'Ekim',
                                    '9': 'Eyl\u00FCl',
                                    '1': 'Ocak',
                                    '2': '\u015Eubat',
                                    '3': 'Mart',
                                    '4': 'Nisan'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'A\u011Fu',
                                    '7': 'Tem',
                                    '6': 'Haz',
                                    '5': 'May',
                                    '12': 'Ara',
                                    '11': 'Kas',
                                    '10': 'Eki',
                                    '9': 'Eyl',
                                    '1': 'Oca',
                                    '2': '\u015Eub',
                                    '3': 'Mar',
                                    '4': 'Nis'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'T',
                                    '6': 'H',
                                    '5': 'M',
                                    '12': 'A',
                                    '11': 'K',
                                    '10': 'E',
                                    '9': 'E',
                                    '1': 'O',
                                    '2': '\u015E',
                                    '3': 'M',
                                    '4': 'N'
                                },
                                'wide': {
                                    '8': 'A\u011Fustos',
                                    '7': 'Temmuz',
                                    '6': 'Haziran',
                                    '5': 'May\u0131s',
                                    '12': 'Aral\u0131k',
                                    '11': 'Kas\u0131m',
                                    '10': 'Ekim',
                                    '9': 'Eyl\u00FCl',
                                    '1': 'Ocak',
                                    '2': '\u015Eubat',
                                    '3': 'Mart',
                                    '4': 'Nisan'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': '\u00C7ar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': '\u00C7',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': '\u00C7a',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Sal\u0131',
                                    'wed': '\u00C7ar\u015Famba',
                                    'thu': 'Per\u015Fembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': '\u00C7ar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': '\u00C7',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': '\u00C7a',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Sal\u0131',
                                    'wed': '\u00C7ar\u015Famba',
                                    'thu': 'Per\u015Fembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u00C71',
                                    '2': '\u00C72',
                                    '3': '\u00C73',
                                    '4': '\u00C74'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. \u00E7eyrek',
                                    '2': '2. \u00E7eyrek',
                                    '3': '3. \u00E7eyrek',
                                    '4': '4. \u00E7eyrek'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u00C71',
                                    '2': '\u00C72',
                                    '3': '\u00C73',
                                    '4': '\u00C74'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. \u00E7eyrek',
                                    '2': '2. \u00E7eyrek',
                                    '3': '3. \u00E7eyrek',
                                    '4': '4. \u00E7eyrek'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'narrow': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'wide': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'narrow': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'wide': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Milattan \u00D6nce',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'Milattan Sonra',
                                '1-alt-variant': '\u0130S'
                            },
                            'eraAbbr': {
                                '0': 'M\u00D6',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'MS',
                                '1-alt-variant': '\u0130S'
                            },
                            'eraNarrow': {
                                '0': 'M\u00D6',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'MS',
                                '1-alt-variant': '\u0130S'
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
                                'yMMM': 'MMM y',
                                'yMM': 'MM.y',
                                'yMEd': 'dd.MM.y E',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM/y',
                                'Ehm': 'E a h:mm',
                                'Ed': 'd E',
                                'd': 'd',
                                'GyMMMd': 'G dd MMM y',
                                'GyMMMEd': 'G d MMM y E',
                                'h': 'a h',
                                'H': 'HH',
                                'hm': 'a h:mm',
                                'yQQQQ': 'y/QQQQ',
                                'yQQQ': 'y/QQQ',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'd MMM y E',
                                'yMMMd': 'dd MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'a h:mm:ss',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G MMM y',
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
                                    'd': 'd MMM E \u2013 d MMM E',
                                    'M': 'd MMM E \u2013 d MMM E'
                                },
                                'MMMd': {
                                    'd': 'd \u2013 d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'dd/MM E \u2013 dd/MM E',
                                    'M': 'dd/MM E \u2013 dd/MM E'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM \u2013 dd/MM'
                                },
                                'M': {
                                    'M': 'MM\u2013MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'a h \u2013 a h v',
                                    'h': 'a h\u2013h v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'MM/y \u2013 MM/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'dd.MM.y E \u2013 dd.MM.y E',
                                    'M': 'dd.MM.y E \u2013 dd.MM.y E',
                                    'y': 'dd.MM.y E \u2013 dd.MM.y E'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'd MMM y E \u2013 d MMM y E',
                                    'M': 'd MMM y E \u2013 d MMM y E',
                                    'y': 'd MMM y E \u2013 d MMM y E'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm \u2013 a h:mm v',
                                    'h': 'a h:mm\u2013h:mm v',
                                    'm': 'a h:mm\u2013h:mm v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm \u2013 a h:mm',
                                    'h': 'a h:mm\u2013h:mm',
                                    'm': 'a h:mm\u2013h:mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'a h \u2013 a h',
                                    'h': 'a h\u2013h'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
                            }
                        }
                    }
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
