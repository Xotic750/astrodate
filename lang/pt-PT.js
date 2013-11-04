/* AstroDate Language: pt-PT
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
            definition(require('../astrodate'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            define([astrodateString], definition);
        } else {
            definition(thisContext[astrodateFunc]);
        }

        /*global */
    }((function (AstroDate) {
        AstroDate.lang('pt-PT', {
            'calendars': {
                'gregorian': {
                    'quarters': {
                        'format': {
                            'wide': {
                                '1': '1.º trimestre',
                                '2': '2.º trimestre',
                                '3': '3.º trimestre',
                                '4': '4.º trimestre'
                            },
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
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': '1.º trimestre',
                                '2': '2.º trimestre',
                                '3': '3.º trimestre',
                                '4': '4.º trimestre'
                            },
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
                            }
                        }
                    },
                    'months': {
                        'format': {
                            'wide': {
                                '1': 'Janeiro',
                                '10': 'Outubro',
                                '2': 'Fevereiro',
                                '11': 'Novembro',
                                '3': 'Março',
                                '12': 'Dezembro',
                                '4': 'Abril',
                                '5': 'Maio',
                                '6': 'Junho',
                                '7': 'Julho',
                                '8': 'Agosto',
                                '9': 'Setembro'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Out',
                                '2': 'Fev',
                                '11': 'Nov',
                                '3': 'Mar',
                                '12': 'Dez',
                                '4': 'Abr',
                                '5': 'Mai',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Ago',
                                '9': 'Set'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                '1': 'Janeiro',
                                '10': 'Outubro',
                                '2': 'Fevereiro',
                                '11': 'Novembro',
                                '3': 'Março',
                                '12': 'Dezembro',
                                '4': 'Abril',
                                '5': 'Maio',
                                '6': 'Junho',
                                '7': 'Julho',
                                '8': 'Agosto',
                                '9': 'Setembro'
                            },
                            'abbreviated': {
                                '1': 'Jan',
                                '10': 'Out',
                                '2': 'Fev',
                                '11': 'Nov',
                                '3': 'Mar',
                                '12': 'Dez',
                                '4': 'Abr',
                                '5': 'Mai',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Ago',
                                '9': 'Set'
                            },
                            'narrow': {
                                '1': 'J',
                                '10': 'O',
                                '2': 'F',
                                '11': 'N',
                                '3': 'M',
                                '12': 'D',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'wide': {
                                'tue': 'terça-feira',
                                'fri': 'sexta-feira',
                                'sun': 'domingo',
                                'sat': 'sábado',
                                'wed': 'quarta-feira',
                                'mon': 'segunda-feira',
                                'thu': 'quinta-feira'
                            },
                            'abbreviated': {
                                'tue': 'ter',
                                'fri': 'sex',
                                'sun': 'dom',
                                'sat': 'sáb',
                                'wed': 'qua',
                                'mon': 'seg',
                                'thu': 'qui'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'S',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'Q',
                                'mon': 'S',
                                'thu': 'Q'
                            },
                            'short': {
                                'tue': 'te',
                                'fri': 'sx',
                                'sun': 'do',
                                'sat': 'sb',
                                'wed': 'qu',
                                'mon': 'sg',
                                'thu': 'qi'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'tue': 'terça-feira',
                                'fri': 'sexta-feira',
                                'sun': 'domingo',
                                'sat': 'sábado',
                                'wed': 'quarta-feira',
                                'mon': 'segunda-feira',
                                'thu': 'quinta-feira'
                            },
                            'abbreviated': {
                                'tue': 'ter',
                                'fri': 'sex',
                                'sun': 'dom',
                                'sat': 'sáb',
                                'wed': 'qua',
                                'mon': 'seg',
                                'thu': 'qui'
                            },
                            'narrow': {
                                'tue': 'T',
                                'fri': 'S',
                                'sun': 'D',
                                'sat': 'S',
                                'wed': 'Q',
                                'mon': 'S',
                                'thu': 'Q'
                            },
                            'short': {
                                'tue': 'te',
                                'fri': 'sx',
                                'sun': 'do',
                                'sat': 'sb',
                                'wed': 'qu',
                                'mon': 'sg',
                                'thu': 'qi'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'wide': {
                                'morning': 'manhã',
                                'noon': 'meio-dia',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'da manhã',
                                'pm': 'da tarde'
                            },
                            'abbreviated': {
                                'morning': 'manhã',
                                'noon': 'meio-dia',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'morning': 'manhã',
                                'noon': 'meio-dia',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        },
                        'stand-alone': {
                            'wide': {
                                'morning': 'manhã',
                                'noon': 'meio-dia',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'abbreviated': {
                                'morning': 'manhã',
                                'noon': 'meia-noite',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            },
                            'narrow': {
                                'morning': 'manhã',
                                'noon': 'meio-dia',
                                'afternoon': 'tarde',
                                'night': 'noite',
                                'am': 'a.m.',
                                'pm': 'p.m.'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '1-alt-variant': 'E.C.',
                            '0-alt-variant': 'a.E.C.',
                            '0': 'Antes de Cristo',
                            '1': 'Ano do Senhor'
                        },
                        'eraAbbr': {
                            '1-alt-variant': 'E.C.',
                            '0-alt-variant': 'a.E.C.',
                            '0': 'a.C.',
                            '1': 'd.C.'
                        },
                        'eraNarrow': {
                            '1-alt-variant': 'E.C.',
                            '0-alt-variant': 'a.E.C.',
                            '0': 'a.C.',
                            '1': 'd.C.'
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
                        'full': '{1} \'às\' {0}',
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
                        'long': '{1} \'às\' {0}',
                        'availableFormats': {
                            'EHm': 'E, HH:mm',
                            'M': 'L',
                            'MMMMEd': 'E, d \'de\' MMMM',
                            'd': 'd',
                            'Ehms': 'E, h:mm:ss a',
                            'Ehm': 'E, h:mm a',
                            'Md': 'd/M',
                            'Ed': 'E, d',
                            'Gy': 'y G',
                            'MMdd': 'dd/MM',
                            'MEd': 'E, dd/MM',
                            'GyMMMd': 'd \'de\' MMM \'de\' y G',
                            'EHms': 'E, HH:mm:ss',
                            'HHmm': 'HH:mm',
                            'yMMMMd': 'd \'de\' MMMM \'de\' y',
                            'hms': 'h:mm:ss a',
                            'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                            'h': 'h a',
                            'GyMMM': 'MMM \'de\' y G',
                            'Hm': 'HH:mm',
                            'H': 'HH',
                            'yMEd': 'E, dd/MM/y',
                            'MMMEd': 'E, d/MM',
                            'hm': 'h:mm a',
                            'yMMMMEd': 'E, d \'de\' MMMM \'de\' y',
                            'Hms': 'HH:mm:ss',
                            'HHmmss': 'HH:mm:ss',
                            'yM': 'MM/y',
                            'MMMMd': 'd \'de\' MMMM',
                            'MMM': 'LLL',
                            'yMd': 'dd/MM/y',
                            'MMMd': 'd/MM',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yMM': 'MM/y',
                            'yMMM': 'MM/y',
                            'yMMMd': 'd/MM/y',
                            'yMMMEd': 'E, d/MM/y',
                            'yMMMEEEEd': 'EEEE, d/MM/y',
                            'yMMMM': 'MMMM \'de\' y',
                            'yQQQ': 'QQQQ \'de\' y',
                            'yQQQQ': 'QQQQ \'de\' y'
                        },
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'intervalFormats': {
                            'Hv': {
                                'H': 'HH - HH v'
                            },
                            'Hmv': {
                                'H': 'HH:mm - HH:mm v',
                                'm': 'HH:mm - HH:mm v'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'M': {
                                'M': 'M-M'
                            },
                            'intervalFormatFallback': '{0} - {1}',
                            'Md': {
                                'd': 'dd/MM - dd/MM',
                                'M': 'dd/MM - dd/MM'
                            },
                            'yMMMEd': {
                                'd': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                            },
                            'd': {
                                'd': 'd–d'
                            },
                            'MMMEd': {
                                'd': 'E, d \'de\' MMM - E, d \'de\' MMM',
                                'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                            },
                            'hm': {
                                'a': 'h:mm a - h:mm a',
                                'm': 'h:mm - h:mm a',
                                'h': 'h:mm - h:mm a'
                            },
                            'yMEd': {
                                'd': 'E, dd/MM/y - E, dd/MM/y',
                                'M': 'E, dd/MM/y - E, dd/MM/y',
                                'y': 'E, dd/MM/y - E, dd/MM/y'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'm': 'h:mm - h:mm a v',
                                'h': 'h:mm - h:mm a v'
                            },
                            'yMMM': {
                                'M': 'MMM-MMM \'de\' y',
                                'y': 'MMM \'de\' y - MMM \'de\' y'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'Hm': {
                                'H': 'HH:mm - HH:mm',
                                'm': 'HH:mm - HH:mm'
                            },
                            'MMM': {
                                'M': 'MMM-MMM'
                            },
                            'yM': {
                                'M': 'MM/y - MM/y',
                                'y': 'MM/y - MM/y'
                            },
                            'yMMMd': {
                                'd': 'd-d \'de\' MMM \'de\' y',
                                'M': 'd \'de\' MMM - d \'de\' MMM \'de\' y',
                                'y': 'd \'de\' MMM \'de\' y - d \'de\' MMM \'de\' y'
                            },
                            'hv': {
                                'a': 'h a - h a v',
                                'h': 'h - h a v'
                            },
                            'yMd': {
                                'd': 'dd/MM/y - dd/MM/y',
                                'M': 'dd/MM/y - dd/MM/y',
                                'y': 'dd/MM/y - dd/MM/y'
                            },
                            'MMMd': {
                                'd': 'd-d \'de\' MMM',
                                'M': 'd \'de\' MMM - d \'de\' MMM'
                            },
                            'MEd': {
                                'd': 'E, dd/MM - E, dd/MM',
                                'M': 'E, dd/MM - E, dd/MM'
                            },
                            'y': {
                                'y': 'y-y'
                            },
                            'yMMMM': {
                                'M': 'MMMM - MMMM \'de\' y',
                                'y': 'MMMM \'de\' y - MMMM \'de\' y'
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
