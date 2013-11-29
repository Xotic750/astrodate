/**
 * @file {@link https://github.com/Xotic750/astrodate AstroDate Language ro}.
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
        AstroDate.lang('ro', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'mai',
                                    '6': 'iun.',
                                    '7': 'iul.',
                                    '8': 'aug.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'I',
                                    '7': 'I',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie',
                                    '5': 'mai',
                                    '6': 'iunie',
                                    '7': 'iulie',
                                    '8': 'august',
                                    '9': 'septembrie',
                                    '10': 'octombrie',
                                    '11': 'noiembrie',
                                    '12': 'decembrie'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'mai',
                                    '6': 'iun.',
                                    '7': 'iul.',
                                    '8': 'aug.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'I',
                                    '7': 'I',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie',
                                    '5': 'mai',
                                    '6': 'iunie',
                                    '7': 'iulie',
                                    '8': 'august',
                                    '9': 'septembrie',
                                    '10': 'octombrie',
                                    '11': 'noiembrie',
                                    '12': 'decembrie'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Dum',
                                    'mon': 'Lun',
                                    'tue': 'Mar',
                                    'wed': 'Mie',
                                    'thu': 'Joi',
                                    'fri': 'Vin',
                                    'sat': 'Sâm'
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
                                    'sun': 'Du',
                                    'mon': 'Lu',
                                    'tue': 'Ma',
                                    'wed': 'Mi',
                                    'thu': 'Jo',
                                    'fri': 'Vi',
                                    'sat': 'Sâ'
                                },
                                'wide': {
                                    'sun': 'duminică',
                                    'mon': 'luni',
                                    'tue': 'marți',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 'sâmbătă'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Dum',
                                    'mon': 'Lun',
                                    'tue': 'Mar',
                                    'wed': 'Mie',
                                    'thu': 'Joi',
                                    'fri': 'Vin',
                                    'sat': 'Sâm'
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
                                    'sun': 'Du',
                                    'mon': 'Lu',
                                    'tue': 'Ma',
                                    'wed': 'Mi',
                                    'thu': 'Jo',
                                    'fri': 'Vi',
                                    'sat': 'Sâ'
                                },
                                'wide': {
                                    'sun': 'duminică',
                                    'mon': 'luni',
                                    'tue': 'marți',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 'sâmbătă'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'trim. I',
                                    '2': 'trim. II',
                                    '3': 'trim. III',
                                    '4': 'trim. IV'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'trimestrul I',
                                    '2': 'trimestrul al II-lea',
                                    '3': 'trimestrul al III-lea',
                                    '4': 'trimestrul al IV-lea'
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
                                    '1': 'trimestrul I',
                                    '2': 'trimestrul al II-lea',
                                    '3': 'trimestrul al III-lea',
                                    '4': 'trimestrul al IV-lea'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'înainte de Hristos',
                                '1': 'după Hristos',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraAbbr': {
                                '0': 'î.Hr.',
                                '1': 'd.Hr.',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraNarrow': {
                                '0': 'î.Hr.',
                                '1': 'd.Hr.',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.y'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'E, dd.MM.y',
                                'yMM': 'MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'MMMM y',
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
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM - E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y - dd.MM.y',
                                    'M': 'dd.MM.y - dd.MM.y',
                                    'y': 'dd.MM.y - dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM y',
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
                    'regionFormat': 'Ora din {0}',
                    'regionFormat-type-daylight': 'Ora de vară din {0}',
                    'regionFormat-type-standard': 'Ora standard din {0}',
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
