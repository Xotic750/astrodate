/**
 * @file {@link https://github.com/Xotic750/astrodate es}. Language file for AstroDate.
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
        AstroDate.lang('es', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'horario est\u00E1ndar de {0}',
                    'regionFormat-type-daylight': 'horario de verano de {0}',
                    'regionFormat': 'Hora de {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'ago.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'may.',
                                    '12': 'dic.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'ene.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'abr.'
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
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'agosto',
                                    '7': 'julio',
                                    '6': 'junio',
                                    '5': 'mayo',
                                    '12': 'diciembre',
                                    '11': 'noviembre',
                                    '10': 'octubre',
                                    '9': 'septiembre',
                                    '1': 'enero',
                                    '2': 'febrero',
                                    '3': 'marzo',
                                    '4': 'abril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Ago.',
                                    '7': 'Jul.',
                                    '6': 'Jun.',
                                    '5': 'May.',
                                    '12': 'Dic.',
                                    '11': 'Nov.',
                                    '10': 'Oct.',
                                    '9': 'Sept.',
                                    '1': 'Ene.',
                                    '2': 'Feb.',
                                    '3': 'Mar.',
                                    '4': 'Abr.'
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
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'Agosto',
                                    '7': 'Julio',
                                    '6': 'Junio',
                                    '5': 'Mayo',
                                    '12': 'Diciembre',
                                    '11': 'Noviembre',
                                    '10': 'Octubre',
                                    '9': 'Septiembre',
                                    '1': 'Enero',
                                    '2': 'Febrero',
                                    '3': 'Marzo',
                                    '4': 'Abril'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mi\u00E9.',
                                    'thu': 'jue.',
                                    'fri': 'vie.',
                                    'sat': 's\u00E1b.'
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
                                    'wed': 'mi\u00E9rcoles',
                                    'thu': 'jueves',
                                    'fri': 'viernes',
                                    'sat': 's\u00E1bado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Dom.',
                                    'mon': 'Lun.',
                                    'tue': 'Mar.',
                                    'wed': 'Mi\u00E9.',
                                    'thu': 'Jue.',
                                    'fri': 'Vie.',
                                    'sat': 'S\u00E1b.'
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
                                    'wed': 'Mi\u00E9rcoles',
                                    'thu': 'Jueves',
                                    'fri': 'Viernes',
                                    'sat': 'S\u00E1bado'
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
                                    '2': '2.\u00BA trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.\u00BA trimestre'
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
                                    '2': '2.\u00BA trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.\u00BA trimestre'
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
                                '0-alt-variant': 'a. e. c.',
                                '1': 'anno D\u00F3mini',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraAbbr': {
                                '0': 'a. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1': 'd. C.',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraNarrow': {
                                '0': 'a. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1': 'd. C.',
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
                                'yMM': 'M/y',
                                'yMEd': 'EEE, d/M/y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMMM \'de\' y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'yQQQQ': 'QQQQ \'de\' y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM \'de\' y',
                                'yMMMEd': 'EEE, d \'de\' MMMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'yMMM': 'MMM \'de\' y',
                                'Hms': 'H:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, H:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMd': 'd/M',
                                'MMdd': 'd/M',
                                'MMM': 'LLL',
                                'MMMd': 'd \'de\' MMM',
                                'MMMdd': 'dd-MMM',
                                'MMMEd': 'E d \'de\' MMM',
                                'MMMMd': 'd \'de\' MMMM'
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
                                    'd': 'E, d MMM\u2013E, d MMM',
                                    'M': 'E, d MMM\u2013E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM\u2013d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E, d/M\u2013E, d/M',
                                    'M': 'E, d/M\u2013E, d/M'
                                },
                                'Md': {
                                    'd': 'd/M\u2013d/M',
                                    'M': 'd/M\u2013d/M'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'h a\u2013h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M/y\u2013M/y',
                                    'y': 'M/y\u2013M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y\u2013d/M/y',
                                    'M': 'd/M/y\u2013d/M/y',
                                    'y': 'd/M/y\u2013d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y\u2013E, d/M/y',
                                    'M': 'E, d/M/y\u2013E, d/M/y',
                                    'y': 'E, d/M/y\u2013E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y\u2013MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM\u2013d MMM \'de\' y',
                                    'y': 'd MMM \'de\' y\u2013d MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM\u2013E, d MMM \'de\' y',
                                    'M': 'E, d MMM\u2013E, d MMM \'de\' y',
                                    'y': 'E, d MMM \'de\' y\u2013E, d MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y\u2013MMMM \'de\' y'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a\u2013h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm \u2013 h:mm a',
                                    'm': 'h:mm \u2013 h:mm a'
                                },
                                'H': {
                                    'H': 'H\u2013H'
                                },
                                'h': {
                                    'a': 'h a\u2013h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0}\u2013{1}'
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
