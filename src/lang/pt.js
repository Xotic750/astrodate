/**
 * @file {@link https://github.com/Xotic750/astrodate pt}. Language file for AstroDate.
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
        AstroDate.lang('pt', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': 'Hor\u00E1rio {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'ago',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'mai',
                                    '12': 'dez',
                                    '11': 'nov',
                                    '10': 'out',
                                    '9': 'set',
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'agosto',
                                    '7': 'julho',
                                    '6': 'junho',
                                    '5': 'maio',
                                    '12': 'dezembro',
                                    '11': 'novembro',
                                    '10': 'outubro',
                                    '9': 'setembro',
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'mar\u00E7o',
                                    '4': 'abril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'ago',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'mai',
                                    '12': 'dez',
                                    '11': 'nov',
                                    '10': 'out',
                                    '9': 'set',
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'agosto',
                                    '7': 'julho',
                                    '6': 'junho',
                                    '5': 'maio',
                                    '12': 'dezembro',
                                    '11': 'novembro',
                                    '10': 'outubro',
                                    '9': 'setembro',
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'mar\u00E7o',
                                    '4': 'abril'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 's\u00E1b'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 's\u00E1b'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'ter\u00E7a-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 's\u00E1bado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 's\u00E1b'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 's\u00E1b'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'ter\u00E7a-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 's\u00E1bado'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u00BA trimestre',
                                    '2': '2\u00BA trimestre',
                                    '3': '3\u00BA trimestre',
                                    '4': '4\u00BA trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u00BA trimestre',
                                    '2': '2\u00BA trimestre',
                                    '3': '3\u00BA trimestre',
                                    '4': '4\u00BA trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meia-noite',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Antes de Cristo',
                                '0-alt-variant': 'BCE',
                                '1': 'Ano do Senhor',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'a.C.',
                                '0-alt-variant': 'BCE',
                                '1': 'd.C.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'a.C.',
                                '0-alt-variant': 'BCE',
                                '1': 'd.C.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \'de\' MMMM \'de\' y',
                            'long': 'd \'de\' MMMM \'de\' y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
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
                                'yMMM': 'MMM \'de\' y',
                                'yMM': 'MM/y',
                                'yMEd': 'E, dd/MM/y',
                                'yMd': 'dd/MM/y',
                                'EHm': 'E, HH:mm',
                                'Ehm': 'E, h:mm a',
                                'Ed': 'E, d',
                                'd': 'd',
                                'GyMMMd': 'd \'de\' MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                                'h': 'h a',
                                'H': 'HH',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'yMMMEd': 'E, d \'de\' MMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'HHmmss': 'HH:mm:ss',
                                'HHmm': 'HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, dd/MM',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd \'de\' MMM',
                                'MMMEd': 'E, d \'de\' MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y'
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
                                    'd': 'E, d - E, d \'de\' MMM',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d \'de\' MMM',
                                    'M': 'd \'de\' MMM - d \'de\' MMM'
                                },
                                'MMM': {
                                    'M': 'MMM - MMM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH - HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h - h a v'
                                },
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM \'de\' y',
                                    'y': 'MMM \'de\' y - MMM \'de\' y'
                                },
                                'yMMMd': {
                                    'd': 'd-d \'de\' MMM \'de\' y',
                                    'M': 'd \'de\' MMM - d \'de\' MMM \'de\' y',
                                    'y': 'd \'de\' MMM \'de\' y - d \'de\' MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d \'de\' MMM \'de\' y',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y - MMMM \'de\' y'
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
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'd': {
                                    'd': 'd-d'
                                },
                                'intervalFormatFallback': '{0} - {1}'
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
