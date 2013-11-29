/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language es}.
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
        AstroDate.lang('es', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ene.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'abr.',
                                    '5': 'may.',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'ago.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dic.'
                                },
                                'narrow': {
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'enero',
                                    '2': 'febrero',
                                    '3': 'marzo',
                                    '4': 'abril',
                                    '5': 'mayo',
                                    '6': 'junio',
                                    '7': 'julio',
                                    '8': 'agosto',
                                    '9': 'septiembre',
                                    '10': 'octubre',
                                    '11': 'noviembre',
                                    '12': 'diciembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Ene.',
                                    '2': 'Feb.',
                                    '3': 'Mar.',
                                    '4': 'Abr.',
                                    '5': 'May.',
                                    '6': 'Jun.',
                                    '7': 'Jul.',
                                    '8': 'Ago.',
                                    '9': 'Sept.',
                                    '10': 'Oct.',
                                    '11': 'Nov.',
                                    '12': 'Dic.'
                                },
                                'narrow': {
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Enero',
                                    '2': 'Febrero',
                                    '3': 'Marzo',
                                    '4': 'Abril',
                                    '5': 'Mayo',
                                    '6': 'Junio',
                                    '7': 'Julio',
                                    '8': 'Agosto',
                                    '9': 'Septiembre',
                                    '10': 'Octubre',
                                    '11': 'Noviembre',
                                    '12': 'Diciembre'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mié.',
                                    'thu': 'jue.',
                                    'fri': 'vie.',
                                    'sat': 'sáb.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'X',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'DO',
                                    'mon': 'LU',
                                    'tue': 'MA',
                                    'wed': 'MI',
                                    'thu': 'JU',
                                    'fri': 'VI',
                                    'sat': 'SA'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'lunes',
                                    'tue': 'martes',
                                    'wed': 'miércoles',
                                    'thu': 'jueves',
                                    'fri': 'viernes',
                                    'sat': 'sábado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Dom.',
                                    'mon': 'Lun.',
                                    'tue': 'Mar.',
                                    'wed': 'Mié.',
                                    'thu': 'Jue.',
                                    'fri': 'Vie.',
                                    'sat': 'Sáb.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'DO',
                                    'mon': 'LU',
                                    'tue': 'MA',
                                    'wed': 'MI',
                                    'thu': 'JU',
                                    'fri': 'VI',
                                    'sat': 'SA'
                                },
                                'wide': {
                                    'sun': 'Domingo',
                                    'mon': 'Lunes',
                                    'tue': 'Martes',
                                    'wed': 'Miércoles',
                                    'thu': 'Jueves',
                                    'fri': 'Viernes',
                                    'sat': 'Sábado'
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
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'wide': {
                                    '1': '1.er trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.º trimestre'
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
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'wide': {
                                    '1': '1.er trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.º trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'antes de Cristo',
                                '1': 'anno Dómini',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraAbbr': {
                                '0': 'a. C.',
                                '1': 'd. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraNarrow': {
                                '0': 'a. C.',
                                '1': 'd. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \'de\' MMMM \'de\' y',
                            'long': 'd \'de\' MMMM \'de\' y',
                            'medium': 'd/M/y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss (zzzz)',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, H:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'GyMMMd': 'd MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMMM \'de\' y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMd': 'd/M',
                                'MMdd': 'd/M',
                                'MMM': 'LLL',
                                'MMMd': 'd \'de\' MMM',
                                'MMMdd': 'dd-MMM',
                                'MMMEd': 'E d \'de\' MMM',
                                'MMMMd': 'd \'de\' MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'EEE, d/M/y',
                                'yMM': 'M/y',
                                'yMMM': 'MMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'yMMMEd': 'EEE, d \'de\' MMMM \'de\' y',
                                'yMMMM': 'MMMM \'de\' y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ \'de\' y'
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
                                'intervalFormatFallback': '{0}–{1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a–h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a–h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'h a–h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd/M–d/M',
                                    'M': 'd/M–d/M'
                                },
                                'MEd': {
                                    'd': 'E, d/M–E, d/M',
                                    'M': 'E, d/M–E, d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM–d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM–E, d MMM',
                                    'M': 'E, d MMM–E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y–M/y',
                                    'y': 'M/y–M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y–d/M/y',
                                    'M': 'd/M/y–d/M/y',
                                    'y': 'd/M/y–d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y–E, d/M/y',
                                    'M': 'E, d/M/y–E, d/M/y',
                                    'y': 'E, d/M/y–E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y–MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM–d MMM \'de\' y',
                                    'y': 'd MMM \'de\' y–d MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM–E, d MMM \'de\' y',
                                    'M': 'E, d MMM–E, d MMM \'de\' y',
                                    'y': 'E, d MMM \'de\' y–E, d MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y–MMMM \'de\' y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Hora de {0}',
                    'regionFormat-type-daylight': 'horario de verano de {0}',
                    'regionFormat-type-standard': 'horario estándar de {0}',
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
