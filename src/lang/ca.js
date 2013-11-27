/**
 * @file {@link https://github.com/Xotic750/astrodate ca}. Language file for AstroDate.
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
        AstroDate.lang('ca', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Hora est\u00E0ndard, {0}',
                    'regionFormat-type-daylight': 'Horari d\'estiu, {0}',
                    'regionFormat': 'Hora de: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'ag.',
                                    '7': 'jul.',
                                    '6': 'juny',
                                    '5': 'maig',
                                    '12': 'des.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'set.',
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'mar\u00E7',
                                    '4': 'abr.'
                                },
                                'narrow': {
                                    '8': 'AG',
                                    '7': 'JL',
                                    '6': 'JN',
                                    '5': 'MG',
                                    '12': 'DS',
                                    '11': 'NV',
                                    '10': 'OC',
                                    '9': 'ST',
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'M\u00C7',
                                    '4': 'AB'
                                },
                                'wide': {
                                    '8': 'agost',
                                    '7': 'juliol',
                                    '6': 'juny',
                                    '5': 'maig',
                                    '12': 'desembre',
                                    '11': 'novembre',
                                    '10': 'octubre',
                                    '9': 'setembre',
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'mar\u00E7',
                                    '4': 'abril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'ag.',
                                    '7': 'jul.',
                                    '6': 'juny',
                                    '5': 'maig',
                                    '12': 'des.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'set.',
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'mar\u00E7',
                                    '4': 'abr.'
                                },
                                'narrow': {
                                    '8': 'AG',
                                    '7': 'JL',
                                    '6': 'JN',
                                    '5': 'MG',
                                    '12': 'DS',
                                    '11': 'NV',
                                    '10': 'OC',
                                    '9': 'ST',
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'M\u00C7',
                                    '4': 'AB'
                                },
                                'wide': {
                                    '8': 'agost',
                                    '7': 'juliol',
                                    '6': 'juny',
                                    '5': 'maig',
                                    '12': 'desembre',
                                    '11': 'novembre',
                                    '10': 'octubre',
                                    '9': 'setembre',
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'mar\u00E7',
                                    '4': 'abril'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'narrow': {
                                    'sun': 'dg',
                                    'mon': 'dl',
                                    'tue': 'dt',
                                    'wed': 'dc',
                                    'thu': 'dj',
                                    'fri': 'dv',
                                    'sat': 'ds'
                                },
                                'short': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'wide': {
                                    'sun': 'diumenge',
                                    'mon': 'dilluns',
                                    'tue': 'dimarts',
                                    'wed': 'dimecres',
                                    'thu': 'dijous',
                                    'fri': 'divendres',
                                    'sat': 'dissabte'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'narrow': {
                                    'sun': 'dg',
                                    'mon': 'dl',
                                    'tue': 'dt',
                                    'wed': 'dc',
                                    'thu': 'dj',
                                    'fri': 'dv',
                                    'sat': 'ds'
                                },
                                'short': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dm.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'wide': {
                                    'sun': 'diumenge',
                                    'mon': 'dilluns',
                                    'tue': 'dimarts',
                                    'wed': 'dimecres',
                                    'thu': 'dijous',
                                    'fri': 'divendres',
                                    'sat': 'dissabte'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1r trimestre',
                                    '2': '2n trimestre',
                                    '3': '3r trimestre',
                                    '4': '4t trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1r trimestre',
                                    '2': '2n trimestre',
                                    '3': '3r trimestre',
                                    '4': '4t trimestre'
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
                                '0': 'abans de Crist',
                                '0-alt-variant': 'a. de la n. e.',
                                '1': 'despr\u00E9s de Crist',
                                '1-alt-variant': 'de la n. e.'
                            },
                            'eraAbbr': {
                                '0': 'aC',
                                '0-alt-variant': 'a. de la n. e.',
                                '1': 'dC',
                                '1-alt-variant': 'de la n.e.'
                            },
                            'eraNarrow': {
                                '0': 'aC',
                                '0-alt-variant': 'a. de la n. e.',
                                '1': 'dC',
                                '1-alt-variant': 'de la n.e.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM \'de\' y',
                            'long': 'd MMMM \'de\' y',
                            'medium': 'dd/MM/y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H.mm.ss zzzz',
                            'long': 'H.mm.ss z',
                            'medium': 'H.mm.ss',
                            'short': 'H.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'd MMM y',
                                'yMMM': 'LLL y',
                                'yMEd': 'E, d/M/y',
                                'yMd': 'd/M/y',
                                'EHm': 'E H:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM, y G',
                                'GyMMMM': 'LLLL \'de\' y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'LLLL \'de\' y',
                                'yMMMEd': 'E, d MMM, y',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'H',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y'
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
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'H-H v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'y': {
                                    'y': 'y-y'
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
                                    'd': 'E dd/MM/y - E dd/MM/y',
                                    'M': 'E dd/MM/y - E dd/MM/y',
                                    'y': 'E dd/MM/y - E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL \'de\' y',
                                    'y': 'LLL \'de\' y - LLL \'de\' y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM \'de\' y',
                                    'M': 'd MMM - d MMM \'de\' y',
                                    'y': 'd MMM \'de\' y - d MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM \'de\' y',
                                    'M': 'E d MMM - E d MMM \'de\' y',
                                    'y': 'E d MMM \'de\' y - E d MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL \'de\' y',
                                    'y': 'LLLL \'de\' y - LLLL \'de\' y'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a -h.mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
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
