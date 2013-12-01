/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language pt}.
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
        AstroDate.lang('pt', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr',
                                    '5': 'mai',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'out',
                                    '11': 'nov',
                                    '12': 'dez'
                                },
                                'narrow': {
                                    '1': 'J',
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
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'março',
                                    '4': 'abril',
                                    '5': 'maio',
                                    '6': 'junho',
                                    '7': 'julho',
                                    '8': 'agosto',
                                    '9': 'setembro',
                                    '10': 'outubro',
                                    '11': 'novembro',
                                    '12': 'dezembro'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr',
                                    '5': 'mai',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'out',
                                    '11': 'nov',
                                    '12': 'dez'
                                },
                                'narrow': {
                                    '1': 'J',
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
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'março',
                                    '4': 'abril',
                                    '5': 'maio',
                                    '6': 'junho',
                                    '7': 'julho',
                                    '8': 'agosto',
                                    '9': 'setembro',
                                    '10': 'outubro',
                                    '11': 'novembro',
                                    '12': 'dezembro'
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
                                    'sat': 'sáb'
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
                                    'sat': 'sáb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
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
                                    'sat': 'sáb'
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
                                    'sat': 'sáb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
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
                                    '1': '1º trimestre',
                                    '2': '2º trimestre',
                                    '3': '3º trimestre',
                                    '4': '4º trimestre'
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
                                    '1': '1º trimestre',
                                    '2': '2º trimestre',
                                    '3': '3º trimestre',
                                    '4': '4º trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meia-noite',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Antes de Cristo',
                                '1': 'Ano do Senhor',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'BCE',
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
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'GyMMMd': 'd \'de\' MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
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
                                'yM': 'MM/y',
                                'yMd': 'dd/MM/y',
                                'yMEd': 'E, dd/MM/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'yMMMEd': 'E, d \'de\' MMM \'de\' y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
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
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
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
                                    'a': 'h a - h a v',
                                    'h': 'h - h a v'
                                },
                                'Hv': {
                                    'H': 'HH - HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM - MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d \'de\' MMM',
                                    'M': 'd \'de\' MMM - d \'de\' MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d - E, d \'de\' MMM',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
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
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Horário {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
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
