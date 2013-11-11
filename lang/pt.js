/* AstroDate
 * Language: pt
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * localeDisplayNames: 24r9287
 * units: 24r9287
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
    }(function (AstroDate) {
        AstroDate.lang('pt', {
            'durationUnit-type-ms': {
                'durationUnitPattern': 'm:ss'
            },
            'durationUnit-type-hms': {
                'durationUnitPattern': 'h:mm:ss'
            },
            'durationUnit-type-hm': {
                'durationUnitPattern': 'h:mm'
            },
            'narrow': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} milha',
                    'unitPattern-count-other': '{0} milhas'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ano-luz',
                    'unitPattern-count-other': '{0} anos-luz'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0}\u2033',
                    'unitPattern-count-other': '{0}\u2033'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} p\u00E9',
                    'unitPattern-count-other': '{0} p\u00E9s'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} ano',
                    'unitPattern-count-other': '{0} anos'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} sem.',
                    'unitPattern-count-other': '{0} sem.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00EAs',
                    'unitPattern-count-other': '{0} meses'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} cv',
                    'unitPattern-count-other': '{0} cv'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0}" Hg',
                    'unitPattern-count-other': '{0}" Hg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} \u00B0F',
                    'unitPattern-count-other': '{0} \u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} \u00B0',
                    'unitPattern-count-other': '{0} \u00B0'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} dia',
                    'unitPattern-count-other': '{0} dias'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0}\'',
                    'unitPattern-count-other': '{0}\''
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0}"',
                    'unitPattern-count-other': '{0}"'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acre',
                    'unitPattern-count-other': '{0} acres'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-other': '{0} s'
                }
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
            },
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'Saipan'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'Rarotonga'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'Port Moresby'
                        },
                        'Ponape': {
                            'exemplarCity': 'Pohnpei'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'Pitcairn'
                        },
                        'Palau': {
                            'exemplarCity': 'Palau'
                        },
                        'Auckland': {
                            'exemplarCity': 'Auckland'
                        },
                        'Apia': {
                            'exemplarCity': '\u00C1pia'
                        },
                        'Funafuti': {
                            'exemplarCity': 'Funafuti'
                        },
                        'Galapagos': {
                            'exemplarCity': 'Gal\u00E1pagos'
                        },
                        'Gambier': {
                            'exemplarCity': 'Gambier'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'Guadalcanal'
                        },
                        'Guam': {
                            'exemplarCity': 'Guam'
                        },
                        'Honolulu': {
                            'exemplarCity': 'Honolulu'
                        },
                        'Wallis': {
                            'exemplarCity': 'Wallis'
                        },
                        'Wake': {
                            'exemplarCity': 'Wake'
                        },
                        'Truk': {
                            'exemplarCity': 'Chuuk'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'Tongatapu'
                        },
                        'Tarawa': {
                            'exemplarCity': 'Taraua'
                        },
                        'Tahiti': {
                            'exemplarCity': 'Taiti'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'Kiritimati'
                        },
                        'Johnston': {
                            'exemplarCity': 'Johnston'
                        },
                        'Chatham': {
                            'exemplarCity': 'Chatham'
                        },
                        'Easter': {
                            'exemplarCity': 'Ilha de P\u00E1scoa'
                        },
                        'Efate': {
                            'exemplarCity': '\u00C9fat\u00E9'
                        },
                        'Enderbury': {
                            'exemplarCity': 'Enderbury'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'Fakaofo'
                        },
                        'Fiji': {
                            'exemplarCity': 'Fiji'
                        },
                        'Kosrae': {
                            'exemplarCity': 'Kosrae'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'Kwajalein'
                        },
                        'Majuro': {
                            'exemplarCity': 'Majuro'
                        },
                        'Marquesas': {
                            'exemplarCity': 'Marquesas'
                        },
                        'Midway': {
                            'exemplarCity': 'Midway'
                        },
                        'Nauru': {
                            'exemplarCity': 'Nauru'
                        },
                        'Niue': {
                            'exemplarCity': 'Niue'
                        },
                        'Norfolk': {
                            'exemplarCity': 'Norfolk'
                        },
                        'Noumea': {
                            'exemplarCity': 'Noum\u00E9a'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'Pago Pago'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'Lindeman'
                        },
                        'Hobart': {
                            'exemplarCity': 'Hobart'
                        },
                        'Eucla': {
                            'exemplarCity': 'Eucla'
                        },
                        'Darwin': {
                            'exemplarCity': 'Darwin'
                        },
                        'Sydney': {
                            'exemplarCity': 'Sydney'
                        },
                        'Perth': {
                            'exemplarCity': 'Perth'
                        },
                        'Melbourne': {
                            'exemplarCity': 'Melbourne'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'Lord Howe'
                        },
                        'Adelaide': {
                            'exemplarCity': 'Adelaide'
                        },
                        'Brisbane': {
                            'exemplarCity': 'Brisbane'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'Broken Hill'
                        },
                        'Currie': {
                            'exemplarCity': 'Currie'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'Maldivas'
                        },
                        'Mahe': {
                            'exemplarCity': 'Mah\u00E9'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'Kerguelen'
                        },
                        'Reunion': {
                            'exemplarCity': 'Reuni\u00E3o'
                        },
                        'Mayotte': {
                            'exemplarCity': 'Mayotte'
                        },
                        'Mauritius': {
                            'exemplarCity': 'Maur\u00EDcio'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'Antananarivo'
                        },
                        'Chagos': {
                            'exemplarCity': 'Chagos'
                        },
                        'Christmas': {
                            'exemplarCity': 'Christmas'
                        },
                        'Cocos': {
                            'exemplarCity': 'Cocos'
                        },
                        'Comoro': {
                            'exemplarCity': 'Comores'
                        }
                    },
                    'Etc': {
                        'GMT-11': {
                            'exemplarCity': 'GMT-11'
                        },
                        'GMT-10': {
                            'exemplarCity': 'GMT-10'
                        },
                        'GMT-1': {
                            'exemplarCity': 'GMT-1'
                        },
                        'GMT9': {
                            'exemplarCity': 'GMT+9'
                        },
                        'GMT8': {
                            'exemplarCity': 'GMT+8'
                        },
                        'GMT7': {
                            'exemplarCity': 'GMT+7'
                        },
                        'GMT6': {
                            'exemplarCity': 'GMT+6'
                        },
                        'GMT5': {
                            'exemplarCity': 'GMT+5'
                        },
                        'GMT': {
                            'exemplarCity': 'GMT'
                        },
                        'GMT1': {
                            'exemplarCity': 'GMT+1'
                        },
                        'GMT10': {
                            'exemplarCity': 'GMT+10'
                        },
                        'GMT11': {
                            'exemplarCity': 'GMT+11'
                        },
                        'GMT-3': {
                            'exemplarCity': 'GMT-3'
                        },
                        'GMT-4': {
                            'exemplarCity': 'GMT-4'
                        },
                        'GMT-5': {
                            'exemplarCity': 'GMT-5'
                        },
                        'GMT-6': {
                            'exemplarCity': 'GMT-6'
                        },
                        'GMT-7': {
                            'exemplarCity': 'GMT-7'
                        },
                        'GMT-8': {
                            'exemplarCity': 'GMT-8'
                        },
                        'GMT-9': {
                            'exemplarCity': 'GMT-9'
                        },
                        'Unknown': {
                            'exemplarCity': 'Cidade desconhecida'
                        },
                        'GMT-2': {
                            'exemplarCity': 'GMT-2'
                        },
                        'GMT-14': {
                            'exemplarCity': 'GMT-14'
                        },
                        'GMT-13': {
                            'exemplarCity': 'GMT-13'
                        },
                        'GMT-12': {
                            'exemplarCity': 'GMT-12'
                        },
                        'GMT4': {
                            'exemplarCity': 'GMT+4'
                        },
                        'GMT3': {
                            'exemplarCity': 'GMT+3'
                        },
                        'GMT2': {
                            'exemplarCity': 'GMT+2'
                        },
                        'GMT12': {
                            'exemplarCity': 'GMT+12'
                        }
                    },
                    'Antarctica': {
                        'Rothera': {
                            'exemplarCity': 'Rothera'
                        },
                        'Palmer': {
                            'exemplarCity': 'Palmer'
                        },
                        'McMurdo': {
                            'exemplarCity': 'McMurdo'
                        },
                        'Vostok': {
                            'exemplarCity': 'Vostok'
                        },
                        'Syowa': {
                            'exemplarCity': 'Showa'
                        },
                        'South_Pole': {
                            'exemplarCity': 'P\u00F3lo Sul'
                        },
                        'Casey': {
                            'exemplarCity': 'Casey'
                        },
                        'Davis': {
                            'exemplarCity': 'Davis'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'Dumont d\u2019Urville'
                        },
                        'Macquarie': {
                            'exemplarCity': 'Macquarie'
                        },
                        'Mawson': {
                            'exemplarCity': 'Mawson'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'Longyearbyen'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'Toronto'
                        },
                        'Tijuana': {
                            'exemplarCity': 'Tijuana'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'Thunder Bay'
                        },
                        'Thule': {
                            'exemplarCity': 'Thule'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'Tegucigalpa'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'Swift Current'
                        },
                        'Chicago': {
                            'exemplarCity': 'Chicago'
                        },
                        'Cayman': {
                            'exemplarCity': 'Caim\u00E3'
                        },
                        'Cayenne': {
                            'exemplarCity': 'Caiena'
                        },
                        'Catamarca': {
                            'exemplarCity': 'Catamarca'
                        },
                        'Caracas': {
                            'exemplarCity': 'Caracas'
                        },
                        'Cancun': {
                            'exemplarCity': 'Canc\u00FAn'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'Campo Grande'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'Cambridge Bay'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'Buenos Aires'
                        },
                        'Boise': {
                            'exemplarCity': 'Boise'
                        },
                        'Asuncion': {
                            'exemplarCity': 'Assun\u00E7\u00E3o'
                        },
                        'Aruba': {
                            'exemplarCity': 'Aruba'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'Rio Gallegos'
                            },
                            'San_Juan': {
                                'exemplarCity': 'San Juan'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'Ushuaia'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'La Rioja'
                            },
                            'San_Luis': {
                                'exemplarCity': 'San Luis'
                            },
                            'Salta': {
                                'exemplarCity': 'Salta'
                            },
                            'Tucuman': {
                                'exemplarCity': 'Tucum\u00E3'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'Aragua\u00EDna'
                        },
                        'Antigua': {
                            'exemplarCity': 'Ant\u00EDgua'
                        },
                        'Anguilla': {
                            'exemplarCity': 'Anguilla'
                        },
                        'Anchorage': {
                            'exemplarCity': 'Anchorage'
                        },
                        'Adak': {
                            'exemplarCity': 'Adak'
                        },
                        'Bahia': {
                            'exemplarCity': 'Bahia'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'Bahia Banderas'
                        },
                        'Barbados': {
                            'exemplarCity': 'Barbados'
                        },
                        'Belem': {
                            'exemplarCity': 'Bel\u00E9m'
                        },
                        'Belize': {
                            'exemplarCity': 'Belize'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'Blanc-Sablon'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'Boa Vista'
                        },
                        'Bogota': {
                            'exemplarCity': 'Bogot\u00E1'
                        },
                        'Curacao': {
                            'exemplarCity': 'Cura\u00E7ao'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'Danmarkshavn'
                        },
                        'Dawson': {
                            'exemplarCity': 'Dawson'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'Dawson Creek'
                        },
                        'Denver': {
                            'exemplarCity': 'Denver'
                        },
                        'Detroit': {
                            'exemplarCity': 'Detroit'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'Hermosillo'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'Vincennes, Indiana'
                            },
                            'Petersburg': {
                                'exemplarCity': 'Petersburg, Indiana'
                            },
                            'Tell_City': {
                                'exemplarCity': 'Tell City, Indiana'
                            },
                            'Knox': {
                                'exemplarCity': 'Knox, Indiana'
                            },
                            'Winamac': {
                                'exemplarCity': 'Winamac, Indiana'
                            },
                            'Marengo': {
                                'exemplarCity': 'Marengo, Indiana'
                            },
                            'Vevay': {
                                'exemplarCity': 'Vevay, Indiana'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'Indian\u00E1polis'
                        },
                        'Inuvik': {
                            'exemplarCity': 'Inuvik'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'Iqaluit'
                        },
                        'Jamaica': {
                            'exemplarCity': 'Jamaica'
                        },
                        'Jujuy': {
                            'exemplarCity': 'Jujuy'
                        },
                        'Juneau': {
                            'exemplarCity': 'Juneau'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'Yellowknife'
                        },
                        'Yakutat': {
                            'exemplarCity': 'Yakutat'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'Winnipeg'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'Whitehorse'
                        },
                        'Vancouver': {
                            'exemplarCity': 'Vancouver'
                        },
                        'Tortola': {
                            'exemplarCity': 'Tortola'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'Kralendijk'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'Monticello, Kentucky'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'Havana'
                        },
                        'Halifax': {
                            'exemplarCity': 'Halifax'
                        },
                        'Guyana': {
                            'exemplarCity': 'Guiana'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'Guaiaquil'
                        },
                        'Guatemala': {
                            'exemplarCity': 'Guatemala'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'Guadalupe'
                        },
                        'Grenada': {
                            'exemplarCity': 'Granada'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'Grand Turk'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'Goose Bay'
                        },
                        'Godthab': {
                            'exemplarCity': 'Nuuk'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'Glace Bay'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'Fortaleza'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'El Salvador'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'Eirunep\u00E9'
                        },
                        'Edmonton': {
                            'exemplarCity': 'Edmonton'
                        },
                        'Dominica': {
                            'exemplarCity': 'Dominica'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'Chihuahua'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'Atikokan'
                        },
                        'Cordoba': {
                            'exemplarCity': 'C\u00F3rdoba'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'Costa Rica'
                        },
                        'Creston': {
                            'exemplarCity': 'Creston'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'Cuiab\u00E1'
                        },
                        'La_Paz': {
                            'exemplarCity': 'La Paz'
                        },
                        'Lima': {
                            'exemplarCity': 'Lima'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'Los Angeles'
                        },
                        'Louisville': {
                            'exemplarCity': 'Louisville'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'Lower Prince\'s Quarter'
                        },
                        'Maceio': {
                            'exemplarCity': 'Macei\u00F3'
                        },
                        'Managua': {
                            'exemplarCity': 'Man\u00E1gua'
                        },
                        'Manaus': {
                            'exemplarCity': 'Manaus'
                        },
                        'Marigot': {
                            'exemplarCity': 'Marigot'
                        },
                        'Martinique': {
                            'exemplarCity': 'Martinica'
                        },
                        'Matamoros': {
                            'exemplarCity': 'Matamoros'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'Mazatlan'
                        },
                        'Mendoza': {
                            'exemplarCity': 'Mendoza'
                        },
                        'Menominee': {
                            'exemplarCity': 'Menominee'
                        },
                        'Merida': {
                            'exemplarCity': 'M\u00E9rida'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'Metlakatla'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'Cidade do M\u00E9xico'
                        },
                        'Miquelon': {
                            'exemplarCity': 'Miquelon'
                        },
                        'Moncton': {
                            'exemplarCity': 'Moncton'
                        },
                        'Monterrey': {
                            'exemplarCity': 'Monterrei'
                        },
                        'Montevideo': {
                            'exemplarCity': 'Montevid\u00E9u'
                        },
                        'Montreal': {
                            'exemplarCity': 'Montreal'
                        },
                        'Montserrat': {
                            'exemplarCity': 'Montserrat'
                        },
                        'Nassau': {
                            'exemplarCity': 'Nassau'
                        },
                        'New_York': {
                            'exemplarCity': 'Nova York'
                        },
                        'Nipigon': {
                            'exemplarCity': 'Nipigon'
                        },
                        'Nome': {
                            'exemplarCity': 'Nome'
                        },
                        'Noronha': {
                            'exemplarCity': 'Fernando de Noronha'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'Beulah, Dakota do Norte'
                            },
                            'New_Salem': {
                                'exemplarCity': 'New Salen, Dakota do Norte'
                            },
                            'Center': {
                                'exemplarCity': 'Central, Dakota do Norte'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'Ojinaga'
                        },
                        'Panama': {
                            'exemplarCity': 'Panam\u00E1'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'Pangnirtung'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'Paramaribo'
                        },
                        'Phoenix': {
                            'exemplarCity': 'Phoenix'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'Porto Pr\u00EDncipe'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'Porto Espanha'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'Porto Velho'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'Porto Rico'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'Rainy River'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'Rankin Inlet'
                        },
                        'Recife': {
                            'exemplarCity': 'Recife'
                        },
                        'Regina': {
                            'exemplarCity': 'Regina'
                        },
                        'Resolute': {
                            'exemplarCity': 'Resolute'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'Rio Branco'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'Santa Isabel'
                        },
                        'Santarem': {
                            'exemplarCity': 'Santar\u00E9m'
                        },
                        'Santiago': {
                            'exemplarCity': 'Santiago'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'Santo Domingo'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'S\u00E3o Paulo'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'Ittoqqortoormiit'
                        },
                        'Shiprock': {
                            'exemplarCity': 'Shiprock'
                        },
                        'Sitka': {
                            'exemplarCity': 'Sitka'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'S\u00E3o Bartolomeu'
                        },
                        'St_Johns': {
                            'exemplarCity': 'St. John\u2019s'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'S\u00E3o Crist\u00F3v\u00E3o'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'Santa L\u00FAcia'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'St. Thomas'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'S\u00E3o Vicente'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'Ge\u00F3rgia do Sul'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'Reykjavik'
                        },
                        'Stanley': {
                            'exemplarCity': 'Stanley'
                        },
                        'St_Helena': {
                            'exemplarCity': 'Santa Helena'
                        },
                        'Azores': {
                            'exemplarCity': 'A\u00E7ores'
                        },
                        'Bermuda': {
                            'exemplarCity': 'Bermudas'
                        },
                        'Canary': {
                            'exemplarCity': 'Can\u00E1rias'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'Cabo Verde'
                        },
                        'Faeroe': {
                            'exemplarCity': 'Ilhas Faroe'
                        },
                        'Madeira': {
                            'exemplarCity': 'Madeira'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'Oslo'
                        },
                        'Moscow': {
                            'exemplarCity': 'Moscou'
                        },
                        'Monaco': {
                            'exemplarCity': 'M\u00F4naco'
                        },
                        'Minsk': {
                            'exemplarCity': 'Minsk'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'Mariehamn'
                        },
                        'Malta': {
                            'exemplarCity': 'Malta'
                        },
                        'Madrid': {
                            'exemplarCity': 'Madri'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'Luxemburgo'
                        },
                        'London': {
                            'long': {
                                'daylight': 'Hor\u00E1rio de Ver\u00E3o Brit\u00E2nico'
                            },
                            'exemplarCity': 'Londres'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'Liubliana'
                        },
                        'Lisbon': {
                            'exemplarCity': 'Lisboa'
                        },
                        'Kiev': {
                            'exemplarCity': 'Kiev'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'Kaliningrado'
                        },
                        'Jersey': {
                            'exemplarCity': 'Jersey'
                        },
                        'Istanbul': {
                            'exemplarCity': 'Istambul'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'Ilha de Man'
                        },
                        'Bucharest': {
                            'exemplarCity': 'Bucareste'
                        },
                        'Brussels': {
                            'exemplarCity': 'Bruxelas'
                        },
                        'Bratislava': {
                            'exemplarCity': 'Bratislava'
                        },
                        'Berlin': {
                            'exemplarCity': 'Berlim'
                        },
                        'Belgrade': {
                            'exemplarCity': 'Belgrado'
                        },
                        'Athens': {
                            'exemplarCity': 'Atenas'
                        },
                        'Andorra': {
                            'exemplarCity': 'Andorra'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'Amsterd\u00E3'
                        },
                        'Simferopol': {
                            'exemplarCity': 'Simferopol'
                        },
                        'Skopje': {
                            'exemplarCity': 'Skopje'
                        },
                        'Sofia': {
                            'exemplarCity': 'S\u00F3fia'
                        },
                        'Stockholm': {
                            'exemplarCity': 'Estocolmo'
                        },
                        'Tallinn': {
                            'exemplarCity': 'Tallinn'
                        },
                        'Tirane': {
                            'exemplarCity': 'Tirana'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'Uzhgorod'
                        },
                        'Vaduz': {
                            'exemplarCity': 'Vaduz'
                        },
                        'Zurich': {
                            'exemplarCity': 'Zurique'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'Zaporizhia'
                        },
                        'Zagreb': {
                            'exemplarCity': 'Zagreb'
                        },
                        'Warsaw': {
                            'exemplarCity': 'Vars\u00F3via'
                        },
                        'Volgograd': {
                            'exemplarCity': 'Volgogrado'
                        },
                        'Vilnius': {
                            'exemplarCity': 'Vilnius'
                        },
                        'Vienna': {
                            'exemplarCity': 'Viena'
                        },
                        'Vatican': {
                            'exemplarCity': 'Vaticano'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'Sarajevo'
                        },
                        'San_Marino': {
                            'exemplarCity': 'San Marino'
                        },
                        'Samara': {
                            'exemplarCity': 'Samara'
                        },
                        'Rome': {
                            'exemplarCity': 'Roma'
                        },
                        'Riga': {
                            'exemplarCity': 'Riga'
                        },
                        'Prague': {
                            'exemplarCity': 'Praga'
                        },
                        'Podgorica': {
                            'exemplarCity': 'Podg\u00F3ritza'
                        },
                        'Paris': {
                            'exemplarCity': 'Paris'
                        },
                        'Helsinki': {
                            'exemplarCity': 'Helsinque'
                        },
                        'Guernsey': {
                            'exemplarCity': 'Guernsey'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'Gibraltar'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'Hor\u00E1rio de Ver\u00E3o da Irlanda'
                            },
                            'exemplarCity': 'Dublin'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'Copenhague'
                        },
                        'Chisinau': {
                            'exemplarCity': 'Chisinau'
                        },
                        'Busingen': {
                            'exemplarCity': 'B\u00FCsingen'
                        },
                        'Budapest': {
                            'exemplarCity': 'Budapeste'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'Libreville'
                        },
                        'Lagos': {
                            'exemplarCity': 'Lagos'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'Kinshasa'
                        },
                        'Kigali': {
                            'exemplarCity': 'Kigali'
                        },
                        'Khartoum': {
                            'exemplarCity': 'Cartum'
                        },
                        'Kampala': {
                            'exemplarCity': 'Campala'
                        },
                        'Juba': {
                            'exemplarCity': 'Juba'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'Johannesburgo'
                        },
                        'Harare': {
                            'exemplarCity': 'Harare'
                        },
                        'Gaborone': {
                            'exemplarCity': 'Gaborone'
                        },
                        'Freetown': {
                            'exemplarCity': 'Freetown'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'El Aai\u00FAn'
                        },
                        'Douala': {
                            'exemplarCity': 'Douala'
                        },
                        'Djibouti': {
                            'exemplarCity': 'Djibuti'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'Dar es Salaam'
                        },
                        'Dakar': {
                            'exemplarCity': 'Dacar'
                        },
                        'Banjul': {
                            'exemplarCity': 'Banjul'
                        },
                        'Bangui': {
                            'exemplarCity': 'Bangui'
                        },
                        'Bamako': {
                            'exemplarCity': 'Bamaco'
                        },
                        'Asmera': {
                            'exemplarCity': 'Asmara'
                        },
                        'Malabo': {
                            'exemplarCity': 'Malabo'
                        },
                        'Maputo': {
                            'exemplarCity': 'Maputo'
                        },
                        'Maseru': {
                            'exemplarCity': 'Maseru'
                        },
                        'Mbabane': {
                            'exemplarCity': 'Mbabane'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'Mogad\u00EDscio'
                        },
                        'Monrovia': {
                            'exemplarCity': 'Monr\u00F3via'
                        },
                        'Nairobi': {
                            'exemplarCity': 'Nair\u00F3bi'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'Ndjamena'
                        },
                        'Windhoek': {
                            'exemplarCity': 'Windhoek'
                        },
                        'Tunis': {
                            'exemplarCity': 'T\u00FAnis'
                        },
                        'Tripoli': {
                            'exemplarCity': 'Tr\u00EDpoli'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'S\u00E3o Tom\u00E9'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'Porto Novo'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'Ouagadougou'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'Nouakchott'
                        },
                        'Niamey': {
                            'exemplarCity': 'Niamei'
                        },
                        'Lusaka': {
                            'exemplarCity': 'Lusaca'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'Lubumbashi'
                        },
                        'Luanda': {
                            'exemplarCity': 'Luanda'
                        },
                        'Lome': {
                            'exemplarCity': 'Lom\u00E9'
                        },
                        'Conakry': {
                            'exemplarCity': 'Conacri'
                        },
                        'Ceuta': {
                            'exemplarCity': 'Ceuta'
                        },
                        'Casablanca': {
                            'exemplarCity': 'Casablanca'
                        },
                        'Cairo': {
                            'exemplarCity': 'Cairo'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'Bujumbura'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'Brazzaville'
                        },
                        'Blantyre': {
                            'exemplarCity': 'Blantyre'
                        },
                        'Bissau': {
                            'exemplarCity': 'Bissau'
                        },
                        'Abidjan': {
                            'exemplarCity': 'Abidjan'
                        },
                        'Accra': {
                            'exemplarCity': 'Acra'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'Adis-Abeba'
                        },
                        'Algiers': {
                            'exemplarCity': 'Argel'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'Xangai'
                        },
                        'Seoul': {
                            'exemplarCity': 'Seul'
                        },
                        'Samarkand': {
                            'exemplarCity': 'Samarcanda'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'Sacalina'
                        },
                        'Saigon': {
                            'exemplarCity': 'Ho Chi Minh'
                        },
                        'Riyadh': {
                            'exemplarCity': 'Riadi'
                        },
                        'Rangoon': {
                            'exemplarCity': 'Yangon'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'Qyzylorda'
                        },
                        'Qatar': {
                            'exemplarCity': 'Qatar'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'Pyongyang'
                        },
                        'Pontianak': {
                            'exemplarCity': 'Pontianak'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'Phnom Penh'
                        },
                        'Oral': {
                            'exemplarCity': 'Oral'
                        },
                        'Omsk': {
                            'exemplarCity': 'Omsk'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'Novosibirsk'
                        },
                        'Baghdad': {
                            'exemplarCity': 'Bagd\u00E1'
                        },
                        'Chongqing': {
                            'exemplarCity': 'Chongqing'
                        },
                        'Colombo': {
                            'exemplarCity': 'Colombo'
                        },
                        'Damascus': {
                            'exemplarCity': 'Damasco'
                        },
                        'Dhaka': {
                            'exemplarCity': 'Dacca'
                        },
                        'Dili': {
                            'exemplarCity': 'Dili'
                        },
                        'Dubai': {
                            'exemplarCity': 'Dubai'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'Duchambe'
                        },
                        'Gaza': {
                            'exemplarCity': 'Gaza'
                        },
                        'Harbin': {
                            'exemplarCity': 'Harbin'
                        },
                        'Hebron': {
                            'exemplarCity': 'Hebron'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'Hong Kong'
                        },
                        'Hovd': {
                            'exemplarCity': 'Hovd'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'Irkutsk'
                        },
                        'Jakarta': {
                            'exemplarCity': 'Jacarta'
                        },
                        'Jayapura': {
                            'exemplarCity': 'Jayapura'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'Ulan Bator'
                        },
                        'Urumqi': {
                            'exemplarCity': 'Urumqi'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'Ust-Nera'
                        },
                        'Vientiane': {
                            'exemplarCity': 'Vientiane'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'Vladivostok'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'Yakutsk'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'Ecaterimburgo'
                        },
                        'Yerevan': {
                            'exemplarCity': 'Yerevan'
                        },
                        'Tokyo': {
                            'exemplarCity': 'T\u00F3quio'
                        },
                        'Thimphu': {
                            'exemplarCity': 'Timphu'
                        },
                        'Tehran': {
                            'exemplarCity': 'Teer\u00E3'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'Tbilisi'
                        },
                        'Tashkent': {
                            'exemplarCity': 'Tashkent'
                        },
                        'Taipei': {
                            'exemplarCity': 'Taipei'
                        },
                        'Singapore': {
                            'exemplarCity': 'Cingapura'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'Jerusal\u00E9m'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'Asgabate'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'Aqt\u00F6be'
                        },
                        'Aqtau': {
                            'exemplarCity': 'Aqtau'
                        },
                        'Anadyr': {
                            'exemplarCity': 'Anadyr'
                        },
                        'Amman': {
                            'exemplarCity': 'Am\u00E3'
                        },
                        'Almaty': {
                            'exemplarCity': 'Almaty'
                        },
                        'Aden': {
                            'exemplarCity': 'Adem'
                        },
                        'Bahrain': {
                            'exemplarCity': 'Barein'
                        },
                        'Baku': {
                            'exemplarCity': 'Baku'
                        },
                        'Bangkok': {
                            'exemplarCity': 'Bangkok'
                        },
                        'Beirut': {
                            'exemplarCity': 'Beirute'
                        },
                        'Bishkek': {
                            'exemplarCity': 'Bishkek'
                        },
                        'Brunei': {
                            'exemplarCity': 'Brunei'
                        },
                        'Calcutta': {
                            'exemplarCity': 'Kolkata'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'Choibalsan'
                        },
                        'Kabul': {
                            'exemplarCity': 'Kabul'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'Kamchatka'
                        },
                        'Karachi': {
                            'exemplarCity': 'Carachi'
                        },
                        'Kashgar': {
                            'exemplarCity': 'Kashgar'
                        },
                        'Katmandu': {
                            'exemplarCity': 'Catmandu'
                        },
                        'Khandyga': {
                            'exemplarCity': 'Khandyga'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'Krasnoyarsk'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'Kuala Lampur'
                        },
                        'Kuching': {
                            'exemplarCity': 'Kuching'
                        },
                        'Kuwait': {
                            'exemplarCity': 'Kuwait'
                        },
                        'Macau': {
                            'exemplarCity': 'Macau'
                        },
                        'Magadan': {
                            'exemplarCity': 'Magadan'
                        },
                        'Makassar': {
                            'exemplarCity': 'Macassar'
                        },
                        'Manila': {
                            'exemplarCity': 'Manila'
                        },
                        'Muscat': {
                            'exemplarCity': 'Mascate'
                        },
                        'Nicosia': {
                            'exemplarCity': 'Nic\u00F3sia'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'Novokuznetsk'
                        }
                    }
                },
                'metazone': {
                    'Seychelles': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Seychelles'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Samoa',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Samoa',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Samoa'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Samara',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Samara',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Samara'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Sacalina',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Sacalina',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Sacalina'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Rothera'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Reuni\u00E3o'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Qyzylorda',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Qyzylorda',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Qyzylorda'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Ponape'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Pitcairn'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Saint Pierre e Miquelon',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Saint Pierre e Miquelon',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Saint Pierre e Miquelon'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas F\u00EAnix'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'Hor\u00E1rio das Filipinas',
                            'standard': 'Hor\u00E1rio Padr\u00E3o das Filipinas',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o das Filipinas'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Peru',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Peru',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Peru'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Paraguai',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Paraguai',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Paraguai'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Papua Nova Guin\u00E9'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Palau'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Paquist\u00E3o',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Paquist\u00E3o',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Paquist\u00E3o'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Omsk',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Omsk',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Omsk'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Novosibirsk',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Novosibirsk',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Novosibirsk'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Mariana do Norte'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Fernando de Noronha',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Fernando de Noronha',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Fernando de Noronha'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Ilha Norfolk'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Niue'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Terra Nova',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Terra Nova',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Terra Nova'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Amazonas',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Amazonas',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Amazonas'
                        },
                        'short': {
                            'generic': 'AMT',
                            'standard': 'AMT',
                            'daylight': 'AMST'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'Hor\u00E1rio Central',
                            'standard': 'Hor\u00E1rio Padr\u00E3o Central',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o Central'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'Hor\u00E1rio Oriental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o Oriental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o Oriental'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Montanha',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Montanha',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Montanha'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Pac\u00EDfico',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Pac\u00EDfico',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Pac\u00EDfico'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Anadyr',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Anadyr',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Anadyr'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Aqtau',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Aqtau',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Aqtau'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Aqtobe',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Aqtobe',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Aqtobe'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Cabo Verde',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Cabo Verde',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Cabo Verde'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Chamorro'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Chatham',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Chatham',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Chatham'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Chile',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Chile',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Chile'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'Hor\u00E1rio da China',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da China',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da China'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Choibalsan',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Choibalsan',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Choibalsan'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Natal'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Coco'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Col\u00F4mbia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Col\u00F4mbia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Col\u00F4mbia'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'Hor\u00E1rio das Ilhas Cook',
                            'standard': 'Hor\u00E1rio Padr\u00E3o das Ilhas Cook',
                            'daylight': 'Meio Hor\u00E1rio de Ver\u00E3o das Ilhas Cook'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Cuba',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Cuba',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Cuba'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Davis'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Dumont-d\'Urville'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Timor-Leste'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Ilha de P\u00E1scoa',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Ilha de P\u00E1scoa',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Ilha de P\u00E1scoa'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Equador'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Europa Central',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Europa Central',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Europa Central'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Europa Oriental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Europa Oriental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Europa Oriental'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Europa Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Europa Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Europa Ocidental'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'Hor\u00E1rio das Ilhas Falkland',
                            'standard': 'Hor\u00E1rio Padr\u00E3o das Ilhas Falkland',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o das Ilhas Falkland'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Fiji',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Fiji',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Fiji'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Guiana Francesa'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Ant\u00E1rtida e do Sul da Fran\u00E7a'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Gal\u00E1pagos'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Tokelau'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Tonga',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Tonga',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Tonga'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Chuuk'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Turcomenist\u00E3o',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Turcomenist\u00E3o',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Turcomenist\u00E3o'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Tuvalu'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Uruguai',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Uruguai',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Uruguai'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Uzbequist\u00E3o',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Uzbequist\u00E3o',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Uzbequist\u00E3o'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Vanuatu',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Vanuatu',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Vanuatu'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Ecaterimburgo',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Ecaterimburgo',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Ecaterimburgo'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Yakutsk',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Yakutsk',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Yakutsk'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Wallis e Futuna'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Wake'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Vostok'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Volgogrado',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Volgogrado',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Volgogrado'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Vladivostok',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Vladivostok',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Vladivostok'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Venezuela'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Tajiquist\u00E3o'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Taipei',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Taipei',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Taipei'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Taiti'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Syowa'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Suriname'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Ge\u00F3rgia do Sul'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Salom\u00E3o'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Cingapura'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Golfo'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Guam'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Groenl\u00E2ndia Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Groenl\u00E2ndia Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Groenl\u00E2ndia Ocidental'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Groel\u00E2ndia Oriental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Groel\u00E2ndia Oriental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Groel\u00E2ndia Oriental'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Meridiano de Greenwich'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Gilberto'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Ge\u00F3rgia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Ge\u00F3rgia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Ge\u00F3rgia'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Gambier'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Acre',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Acre',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Acre'
                        },
                        'short': {
                            'generic': 'ACT',
                            'standard': 'ACT',
                            'daylight': 'ACST'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Afeganist\u00E3o'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'Hor\u00E1rio da \u00C1frica Central'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'Hor\u00E1rio da \u00C1frica Oriental'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'Hor\u00E1rio da \u00C1frica do Sul'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'Hor\u00E1rio da \u00C1frica Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da \u00C1frica Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da \u00C1frica Ocidental'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Alasca',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Alasca',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Alasca'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Almaty',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Almaty',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Almaty'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Ar\u00E1bia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Ar\u00E1bia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Ar\u00E1bia'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Argentina',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Argentina',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Argentina'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Argentina Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Argentina Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Argentina Ocidental'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Arm\u00EAnia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Arm\u00EAnia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Arm\u00EAnia'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Atl\u00E2ntico',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Atl\u00E2ntico',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Atl\u00E2ntico'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Austr\u00E1lia Central',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Austr\u00E1lia Central',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Austr\u00E1lia Central'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Austr\u00E1lia Centro-Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Austr\u00E1lia Centro-Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Austr\u00E1lia Centro-Ocidental'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Austr\u00E1lia Oriental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Austr\u00E1lia Oriental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Austr\u00E1lia Oriental'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Austr\u00E1lia Ocidental',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Austr\u00E1lia Ocidental',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Austr\u00E1lia Ocidental'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Arzeibaij\u00E3o',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Arzeibaij\u00E3o',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Arzeibaij\u00E3o'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'Hor\u00E1rio dos A\u00E7ores',
                            'standard': 'Hor\u00E1rio Padr\u00E3o dos A\u00E7ores',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o dos A\u00E7ores'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Bangladesh',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Bangladesh',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Bangladesh'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'Hor\u00E1rio do But\u00E3o'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Bol\u00EDvia'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Bras\u00EDlia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Bras\u00EDlia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Bras\u00EDlia'
                        },
                        'short': {
                            'generic': 'BRT',
                            'standard': 'BRT',
                            'daylight': 'BRST'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Brunei Darussalam'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Guiana'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Hava\u00ED e Ilhas Aleutas',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Hava\u00ED e Ilhas Aleutas',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Hava\u00ED e Ilhas Aleutas'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Hong Kong',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Hong Kong',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Hong Kong'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Hovd',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Hovd',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Hovd'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'Hor\u00E1rio Padr\u00E3o da \u00CDndia'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Oceano \u00CDndico'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Indochina'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Indon\u00E9sia Central'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Indon\u00E9sia Oriental'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Indon\u00E9sia Ocidental'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Ir\u00E3',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Ir\u00E3',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Ir\u00E3'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Irkutsk',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Irkutsk',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Irkutsk'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Israel',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Israel',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Israel'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'Hor\u00E1rio do Jap\u00E3o',
                            'standard': 'Hor\u00E1rio Padr\u00E3o do Jap\u00E3o',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o do Jap\u00E3o'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Petropavlovsk-Kamchatski',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Petropavlovsk-Kamchatski',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Petropavlovsk-Kamchatski'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Casaquist\u00E3o Oriental'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Casaquist\u00E3o Ocidental'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Coreia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Coreia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Coreia'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Kosrae'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Krasnoyarsk',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Krasnoyarsk',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Krasnoyarsk'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Quirguist\u00E3o'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Lanka'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Line'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Lord Howe',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Lord Howe',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Lord Howe'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Macau',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Macau',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Macau'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Ilha Macquarie'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Magadan',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Magadan',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Magadan'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'Hor\u00E1rio da Mal\u00E1sia'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Maldivas'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Marquesas'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'Hor\u00E1rio das Ilhas Marshall'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'Hor\u00E1rio das Ilhas Maur\u00EDcio',
                            'standard': 'Hor\u00E1rio Padr\u00E3o das Ilhas Maur\u00EDcio',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o das Ilhas Maur\u00EDcio'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Mawson'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Ulan Bator',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Ulan Bator',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Ulan Bator'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'Hor\u00E1rio de Moscou',
                            'standard': 'Hor\u00E1rio Padr\u00E3o de Moscou',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o de Moscou'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Mianmar'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'Hor\u00E1rio de Nauru'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'Hor\u00E1rio do Nepal'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Nova Caled\u00F4nia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Nova Caled\u00F4nia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Nova Caled\u00F4nia'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'Hor\u00E1rio da Nova Zel\u00E2ndia',
                            'standard': 'Hor\u00E1rio Padr\u00E3o da Nova Zel\u00E2ndia',
                            'daylight': 'Hor\u00E1rio de Ver\u00E3o da Nova Zel\u00E2ndia'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'Hor\u00E1rio {0}',
                'regionFormat-type-daylight': '{0} (+1)',
                'regionFormat-type-standard': '{0} (+0)',
                'fallbackFormat': '{1} ({0})'
            },
            'localeDisplayPattern': {
                'localePattern': '{0} ({1})',
                'localeSeparator': '{0}, {1}',
                'localeKeyTypePattern': '{0}: {1}'
            },
            'keys': {
                'colNormalization': 'Classifica\u00E7\u00E3o normalizada',
                'collation': 'Ordena\u00E7\u00E3o',
                'colHiraganaQuaternary': 'Classifica\u00E7\u00E3o kana',
                'colCaseLevel': 'Ordem com diferencia\u00E7\u00E3o de mai\u00FAsculas e min\u00FAsculas',
                'colCaseFirst': 'Ordem de mai\u00FAsculas/min\u00FAsculas',
                'colBackwards': 'Classifica\u00E7\u00E3o reversa de acentos',
                'colAlternate': 'Ignorar classifica\u00E7\u00E3o de s\u00EDmbolos',
                'calendar': 'Calend\u00E1rio',
                'x': 'Uso privado',
                'variableTop': 'Classificar como s\u00EDmbolos',
                'va': 'Variante de localidade',
                'timezone': 'Fuso hor\u00E1rio',
                'numbers': 'N\u00FAmeros',
                'currency': 'Moeda',
                'colStrength': 'Intensidade da classifica\u00E7\u00E3o',
                'colNumeric': 'Classifica\u00E7\u00E3o num\u00E9rica'
            },
            'types': {
                'colHiraganaQuaternary': {
                    'no': 'Classificar kana separadamente',
                    'yes': 'Classificar kana diferentemente'
                },
                'colCaseLevel': {
                    'no': 'Classifica\u00E7\u00E3o sem diferencia\u00E7\u00E3o de mai\u00FAsculas e min\u00FAsculas',
                    'yes': 'Classifica\u00E7\u00E3o com diferencia\u00E7\u00E3o de mai\u00FAsculas e min\u00FAsculas'
                },
                'colCaseFirst': {
                    'lower': 'Classificar por min\u00FAsculas',
                    'no': 'Classifica\u00E7\u00E3o normal de mai\u00FAsculas e min\u00FAsculas',
                    'upper': 'Classificar por mai\u00FAsculas'
                },
                'colStrength': {
                    'identical': 'Classificar tudo',
                    'primary': 'Classificar somente letras b\u00E1sicas',
                    'quaternary': 'Classificar acentos/mai\u00FAsculas e min\u00FAsculas/largura/kana',
                    'secondary': 'Classificar acentos',
                    'tertiary': 'Classificar acentos/mai\u00FAsculas e min\u00FAsculas/largura'
                },
                'colNumeric': {
                    'no': 'Classificar d\u00EDgitos individualmente',
                    'yes': 'Classificar d\u00EDgitos numericamente'
                },
                'colNormalization': {
                    'no': 'Classificar sem normaliza\u00E7\u00E3o',
                    'yes': 'Classificar Unicode normalizado'
                },
                'calendar': {
                    'japanese': 'Calend\u00E1rio Japon\u00EAs',
                    'iso8601': 'iso8601',
                    'coptic': 'Calend\u00E1rio Coptic',
                    'dangi': 'dangi',
                    'ethiopic': 'Calend\u00E1rio eti\u00F3pico',
                    'ethiopic-amete-alem': 'Calend\u00E1rio Amete Alem da Eti\u00F3pia',
                    'gregorian': 'Calend\u00E1rio Gregoriano',
                    'hebrew': 'Calend\u00E1rio Hebraico',
                    'persian': 'Calend\u00E1rio persa',
                    'roc': 'Calend\u00E1rio da Rep\u00FAblica da China',
                    'chinese': 'Calend\u00E1rio Chin\u00EAs',
                    'buddhist': 'Calend\u00E1rio Budista',
                    'indian': 'Calend\u00E1rio Nacional Indiano',
                    'islamic': 'Calend\u00E1rio Isl\u00E2mico',
                    'islamic-civil': 'Calend\u00E1rio Civil Isl\u00E2mico',
                    'islamic-rgsa': 'islamic-rgsa',
                    'islamic-tbla': 'islamic-tbla',
                    'islamic-umalqura': 'islamic-umalqura'
                },
                'collation': {
                    'phonebook': 'Ordem de Lista Telef\u00F4nica',
                    'gb2312han': 'Ordem do Chin\u00EAs Simplificado - GB2312',
                    'eor': 'eor',
                    'ducet': 'Ordem padr\u00E3o do Unicode',
                    'dictionary': 'Ordem do dicion\u00E1rio',
                    'big5han': 'Ordem do Chin\u00EAs Tradicional - Big5',
                    'traditional': 'Ordem Tradicional',
                    'standard': 'padr\u00E3o',
                    'zhuyin': 'zhuyin',
                    'unihan': 'Ordem por Radical-Tra\u00E7os',
                    'stroke': 'Ordem dos Tra\u00E7os',
                    'searchjl': 'Pesquisar por consonante inicial hangul',
                    'search': 'Pesquisa de uso geral',
                    'reformed': 'Ordem reformulada',
                    'pinyin': 'Ordem Pin-yin',
                    'phonetic': 'Ordem de classifica\u00E7\u00E3o fon\u00E9tica'
                },
                'numbers': {
                    'knda': 'Algarismos Kannada',
                    'khmr': 'Algarismos Khmer',
                    'kali': 'kali',
                    'jpanfin': 'Algarismos financeiros japoneses',
                    'jpan': 'Algarismos japoneses',
                    'java': 'java',
                    'hebr': 'Algarismos hebraicos',
                    'hantfin': 'Algarismos financeiros chineses tradicionais',
                    'hant': 'Algarismos chineses tradicionais',
                    'hansfin': 'Algarismos financeiros chineses simplificados',
                    'hans': 'Algarismos chineses simplificados',
                    'hanidec': 'Algarismos decimais chineses',
                    'guru': 'Algarismos Gurmukhi',
                    'gujr': 'Algarismos Gujarati',
                    'greklow': 'Algarismos gregos min\u00FAsculos',
                    'grek': 'Algarismos gregos',
                    'bali': 'bali',
                    'armnlow': 'Algarismos arm\u00EAnios min\u00FAsculos',
                    'armn': 'Algarismos arm\u00EAnios',
                    'arabext': 'Algarismos indo-ar\u00E1bicos por extenso',
                    'arab': 'Algarismos indo-ar\u00E1bicos',
                    'finance': 'Numerais financeiros',
                    'traditional': 'Numerais tradicionais',
                    'native': 'D\u00EDgitos nativos',
                    'beng': 'Algarismos Bengali',
                    'brah': 'brah',
                    'cakm': 'cakm',
                    'cham': 'cham',
                    'deva': 'Algarismos Devanagari',
                    'orya': 'Algarismos Oriya',
                    'osma': 'osma',
                    'roman': 'Algarismos romanos',
                    'romanlow': 'Algarismos romanos min\u00FAsculos',
                    'saur': 'saur',
                    'shrd': 'shrd',
                    'sora': 'sora',
                    'sund': 'sund',
                    'vaii': 'D\u00EDgitos vai',
                    'tibt': 'Algarismos tibetanos',
                    'thai': 'Algarismos tailandeses',
                    'telu': 'Algarismos Telugu',
                    'tamldec': 'Algarismos T\u00E2mil',
                    'taml': 'Algarismos T\u00E2mil',
                    'talu': 'talu',
                    'takr': 'takr',
                    'olck': 'olck',
                    'nkoo': 'nkoo',
                    'mymrshan': 'mymrshan',
                    'mymr': 'Algarismos Myanmar',
                    'mtei': 'mtei',
                    'mong': 'Algarismos mong\u00F3is',
                    'mlym': 'Algarismos Malayalam',
                    'limb': 'limb',
                    'lepc': 'lepc',
                    'latn': 'Algarismos ocidentais',
                    'laoo': 'Algarismos laosianos',
                    'lanatham': 'lanatham',
                    'lana': 'lana',
                    'geor': 'Algarismos georgianos',
                    'fullwide': 'Algarismos em extens\u00E3o total',
                    'ethi': 'Algarismos eti\u00F3picos'
                },
                'colAlternate': {
                    'non-ignorable': 'Classificar s\u00EDmbolos',
                    'shifted': 'Classificar ignorando s\u00EDmbolos'
                },
                'colBackwards': {
                    'no': 'Classificar acentos normalmente',
                    'yes': 'Classifica\u00E7\u00E3o reversa de acentos'
                }
            },
            'codePatterns': {
                'language': 'Idioma: {0}',
                'script': 'Alfabeto: {0}',
                'territory': 'Regi\u00E3o: {0}'
            },
            'long': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} on\u00E7a',
                    'unitPattern-count-other': '{0} on\u00E7as'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} quilograma',
                    'unitPattern-count-other': '{0} quilogramas'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} grama',
                    'unitPattern-count-other': '{0} gramas'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} jarda',
                    'unitPattern-count-other': '{0} jardas'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pic\u00F4metro',
                    'unitPattern-count-other': '{0} pic\u00F4metros'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mil\u00EDmetro',
                    'unitPattern-count-other': '{0} mil\u00EDmetros'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} milha',
                    'unitPattern-count-other': '{0} milhas'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} metro',
                    'unitPattern-count-other': '{0} metros'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ano-luz',
                    'unitPattern-count-other': '{0} anos-luz'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} quil\u00F4metro',
                    'unitPattern-count-other': '{0} quil\u00F4metros'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} polegada',
                    'unitPattern-count-other': '{0} polegadas'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} p\u00E9',
                    'unitPattern-count-other': '{0} p\u00E9s'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cent\u00EDmetro',
                    'unitPattern-count-other': '{0} cent\u00EDmetros'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} ano',
                    'unitPattern-count-other': '{0} anos'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} semana',
                    'unitPattern-count-other': '{0} semanas'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00EAs',
                    'unitPattern-count-other': '{0} meses'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} libra',
                    'unitPattern-count-other': '{0} libras'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} cavalo-vapor',
                    'unitPattern-count-other': '{0} cavalos-vapor'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} quilowatt',
                    'unitPattern-count-other': '{0} quilowatts'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} watt',
                    'unitPattern-count-other': '{0} watts'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hectopascal',
                    'unitPattern-count-other': '{0} hectopascals'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} polegada de merc\u00FArio',
                    'unitPattern-count-other': '{0} polegadas de merc\u00FArio'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} milibar',
                    'unitPattern-count-other': '{0} milibares'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} litro',
                    'unitPattern-count-other': '{0} litros'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} milha c\u00FAbica',
                    'unitPattern-count-other': '{0} milhas c\u00FAbicas'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} quil\u00F4metro c\u00FAbico',
                    'unitPattern-count-other': '{0} quil\u00F4metros c\u00FAbicos'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0} grau Fahrenheit',
                    'unitPattern-count-other': '{0} graus Fahrenheit'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0} grau Celsius',
                    'unitPattern-count-other': '{0} graus Celsius'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} milha por hora',
                    'unitPattern-count-other': '{0} milhas por hora'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} metro por segundo',
                    'unitPattern-count-other': '{0} metro por segundo'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} quil\u00F4metro por hora',
                    'unitPattern-count-other': '{0} quil\u00F4metros por hora'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} minuto',
                    'unitPattern-count-other': '{0} minutos'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} milessegundo',
                    'unitPattern-count-other': '{0} milessegundos'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} hora',
                    'unitPattern-count-other': '{0} horas'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} dia',
                    'unitPattern-count-other': '{0} dias'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} milha quadrada',
                    'unitPattern-count-other': '{0} milhas quadradas'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} metro quadrado',
                    'unitPattern-count-other': '{0} metros quadrados'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} quil\u00F4metro quadrado',
                    'unitPattern-count-other': '{0} quil\u00F4metros quadrados'
                },
                'per': {
                    'compoundUnitPattern': '{0} por {1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} for\u00E7a G',
                    'unitPattern-count-other': '{0} de for\u00E7a gravitacional'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} minuto',
                    'unitPattern-count-other': '{0} minutos'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} segundo',
                    'unitPattern-count-other': '{0} segundos'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0} grau',
                    'unitPattern-count-other': '{0} graus'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acre',
                    'unitPattern-count-other': '{0} acres'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} hectare',
                    'unitPattern-count-other': '{0} hectares'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} p\u00E9 quadrado',
                    'unitPattern-count-other': '{0} p\u00E9s quadrados'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} segundo',
                    'unitPattern-count-other': '{0} segundos'
                }
            },
            'short': {
                'mass-ounce': {
                    'unitPattern-count-one': '{0} oz',
                    'unitPattern-count-other': '{0} oz'
                },
                'mass-kilogram': {
                    'unitPattern-count-one': '{0} kg',
                    'unitPattern-count-other': '{0} kg'
                },
                'mass-gram': {
                    'unitPattern-count-one': '{0} g',
                    'unitPattern-count-other': '{0} g'
                },
                'length-yard': {
                    'unitPattern-count-one': '{0} yd',
                    'unitPattern-count-other': '{0} yd'
                },
                'length-picometer': {
                    'unitPattern-count-one': '{0} pm',
                    'unitPattern-count-other': '{0} pm'
                },
                'length-millimeter': {
                    'unitPattern-count-one': '{0} mm',
                    'unitPattern-count-other': '{0} mm'
                },
                'length-mile': {
                    'unitPattern-count-one': '{0} milha',
                    'unitPattern-count-other': '{0} milhas'
                },
                'length-meter': {
                    'unitPattern-count-one': '{0} m',
                    'unitPattern-count-other': '{0} m'
                },
                'length-light-year': {
                    'unitPattern-count-one': '{0} ano-luz',
                    'unitPattern-count-other': '{0} anos-luz'
                },
                'length-kilometer': {
                    'unitPattern-count-one': '{0} km',
                    'unitPattern-count-other': '{0} km'
                },
                'length-inch': {
                    'unitPattern-count-one': '{0} pol.',
                    'unitPattern-count-other': '{0} pol.'
                },
                'length-foot': {
                    'unitPattern-count-one': '{0} p\u00E9',
                    'unitPattern-count-other': '{0} p\u00E9s'
                },
                'length-centimeter': {
                    'unitPattern-count-one': '{0} cm',
                    'unitPattern-count-other': '{0} cm'
                },
                'duration-year': {
                    'unitPattern-count-one': '{0} ano',
                    'unitPattern-count-other': '{0} anos'
                },
                'duration-week': {
                    'unitPattern-count-one': '{0} sem.',
                    'unitPattern-count-other': '{0} sem.'
                },
                'duration-month': {
                    'unitPattern-count-one': '{0} m\u00EAs',
                    'unitPattern-count-other': '{0} meses'
                },
                'mass-pound': {
                    'unitPattern-count-one': '{0} lb',
                    'unitPattern-count-other': '{0} lb'
                },
                'power-horsepower': {
                    'unitPattern-count-one': '{0} cv',
                    'unitPattern-count-other': '{0} cv'
                },
                'power-kilowatt': {
                    'unitPattern-count-one': '{0} kW',
                    'unitPattern-count-other': '{0} kW'
                },
                'power-watt': {
                    'unitPattern-count-one': '{0} W',
                    'unitPattern-count-other': '{0} W'
                },
                'pressure-hectopascal': {
                    'unitPattern-count-one': '{0} hPa',
                    'unitPattern-count-other': '{0} hPa'
                },
                'pressure-inch-hg': {
                    'unitPattern-count-one': '{0} inHg',
                    'unitPattern-count-other': '{0} inHg'
                },
                'pressure-millibar': {
                    'unitPattern-count-one': '{0} mb',
                    'unitPattern-count-other': '{0} mb'
                },
                'volume-liter': {
                    'unitPattern-count-one': '{0} l',
                    'unitPattern-count-other': '{0} l'
                },
                'volume-cubic-mile': {
                    'unitPattern-count-one': '{0} mi\u00B3',
                    'unitPattern-count-other': '{0} mi\u00B3'
                },
                'volume-cubic-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B3',
                    'unitPattern-count-other': '{0} km\u00B3'
                },
                'temperature-fahrenheit': {
                    'unitPattern-count-one': '{0}\u00B0F',
                    'unitPattern-count-other': '{0}\u00B0F'
                },
                'temperature-celsius': {
                    'unitPattern-count-one': '{0}\u00B0C',
                    'unitPattern-count-other': '{0}\u00B0C'
                },
                'speed-mile-per-hour': {
                    'unitPattern-count-one': '{0} mi/h',
                    'unitPattern-count-other': '{0} mi/h'
                },
                'speed-meter-per-second': {
                    'unitPattern-count-one': '{0} m/s',
                    'unitPattern-count-other': '{0} m/s'
                },
                'speed-kilometer-per-hour': {
                    'unitPattern-count-one': '{0} km/h',
                    'unitPattern-count-other': '{0} km/h'
                },
                'duration-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'duration-millisecond': {
                    'unitPattern-count-one': '{0} ms',
                    'unitPattern-count-other': '{0} ms'
                },
                'duration-hour': {
                    'unitPattern-count-one': '{0} h',
                    'unitPattern-count-other': '{0} h'
                },
                'duration-day': {
                    'unitPattern-count-one': '{0} dia',
                    'unitPattern-count-other': '{0} dias'
                },
                'area-square-mile': {
                    'unitPattern-count-one': '{0} mi\u00B2',
                    'unitPattern-count-other': '{0} mi\u00B2'
                },
                'area-square-meter': {
                    'unitPattern-count-one': '{0} m\u00B2',
                    'unitPattern-count-other': '{0} m\u00B2'
                },
                'area-square-kilometer': {
                    'unitPattern-count-one': '{0} km\u00B2',
                    'unitPattern-count-other': '{0} km\u00B2'
                },
                'per': {
                    'compoundUnitPattern': '{0}/{1}'
                },
                'acceleration-g-force': {
                    'unitPattern-count-one': '{0} G',
                    'unitPattern-count-other': '{0} G'
                },
                'angle-arc-minute': {
                    'unitPattern-count-one': '{0} min',
                    'unitPattern-count-other': '{0} min'
                },
                'angle-arc-second': {
                    'unitPattern-count-one': '{0} s',
                    'unitPattern-count-other': '{0} s'
                },
                'angle-degree': {
                    'unitPattern-count-one': '{0}\u00B0',
                    'unitPattern-count-other': '{0}\u00B0'
                },
                'area-acre': {
                    'unitPattern-count-one': '{0} acre',
                    'unitPattern-count-other': '{0} acres'
                },
                'area-hectare': {
                    'unitPattern-count-one': '{0} ha',
                    'unitPattern-count-other': '{0} ha'
                },
                'area-square-foot': {
                    'unitPattern-count-one': '{0} ft\u00B2',
                    'unitPattern-count-other': '{0} ft\u00B2'
                },
                'duration-second': {
                    'unitPattern-count-one': '{0} seg',
                    'unitPattern-count-other': '{0} seg'
                }
            }
        });
    }));
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
