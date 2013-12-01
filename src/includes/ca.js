/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ca}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
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
        AstroDate.lang('ca', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'març',
                                    '4': 'abr.',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'jul.',
                                    '8': 'ag.',
                                    '9': 'set.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'des.'
                                },
                                'narrow': {
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'MÇ',
                                    '4': 'AB',
                                    '5': 'MG',
                                    '6': 'JN',
                                    '7': 'JL',
                                    '8': 'AG',
                                    '9': 'ST',
                                    '10': 'OC',
                                    '11': 'NV',
                                    '12': 'DS'
                                },
                                'wide': {
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'març',
                                    '4': 'abril',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'juliol',
                                    '8': 'agost',
                                    '9': 'setembre',
                                    '10': 'octubre',
                                    '11': 'novembre',
                                    '12': 'desembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'març',
                                    '4': 'abr.',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'jul.',
                                    '8': 'ag.',
                                    '9': 'set.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'des.'
                                },
                                'narrow': {
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'MÇ',
                                    '4': 'AB',
                                    '5': 'MG',
                                    '6': 'JN',
                                    '7': 'JL',
                                    '8': 'AG',
                                    '9': 'ST',
                                    '10': 'OC',
                                    '11': 'NV',
                                    '12': 'DS'
                                },
                                'wide': {
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'març',
                                    '4': 'abril',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'juliol',
                                    '8': 'agost',
                                    '9': 'setembre',
                                    '10': 'octubre',
                                    '11': 'novembre',
                                    '12': 'desembre'
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
                                '1': 'després de Crist',
                                '0-alt-variant': 'a. de la n. e.',
                                '1-alt-variant': 'de la n. e.'
                            },
                            'eraAbbr': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'a. de la n. e.',
                                '1-alt-variant': 'de la n.e.'
                            },
                            'eraNarrow': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'a. de la n. e.',
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
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM, y G',
                                'GyMMMM': 'LLLL \'de\' y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
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
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM, y',
                                'yMMMM': 'LLLL \'de\' y',
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
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'h.mm a -h.mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'H-H v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
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
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Hora de: {0}',
                    'regionFormat-type-daylight': 'Horari d\'estiu, {0}',
                    'regionFormat-type-standard': 'Hora estàndard, {0}',
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
