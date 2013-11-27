/**
 * @file {@link https://github.com/Xotic750/astrodate ro}. Language file for AstroDate.
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
        AstroDate.lang('ro', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Ora standard din {0}',
                    'regionFormat-type-daylight': 'Ora de var\u0103 din {0}',
                    'regionFormat': 'Ora din {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'iul.',
                                    '6': 'iun.',
                                    '5': 'mai',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'I',
                                    '6': 'I',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'august',
                                    '7': 'iulie',
                                    '6': 'iunie',
                                    '5': 'mai',
                                    '12': 'decembrie',
                                    '11': 'noiembrie',
                                    '10': 'octombrie',
                                    '9': 'septembrie',
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'iul.',
                                    '6': 'iun.',
                                    '5': 'mai',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'I',
                                    '6': 'I',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'august',
                                    '7': 'iulie',
                                    '6': 'iunie',
                                    '5': 'mai',
                                    '12': 'decembrie',
                                    '11': 'noiembrie',
                                    '10': 'octombrie',
                                    '9': 'septembrie',
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie'
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
                                    'sat': 'S\u00E2m'
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
                                    'sat': 'S\u00E2'
                                },
                                'wide': {
                                    'sun': 'duminic\u0103',
                                    'mon': 'luni',
                                    'tue': 'mar\u021Bi',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 's\u00E2mb\u0103t\u0103'
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
                                    'sat': 'S\u00E2m'
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
                                    'sat': 'S\u00E2'
                                },
                                'wide': {
                                    'sun': 'duminic\u0103',
                                    'mon': 'luni',
                                    'tue': 'mar\u021Bi',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 's\u00E2mb\u0103t\u0103'
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
                                '0': '\u00EEnainte de Hristos',
                                '0-alt-variant': '\u00EE.e.n',
                                '1': 'dup\u0103 Hristos',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraAbbr': {
                                '0': '\u00EE.Hr.',
                                '0-alt-variant': '\u00EE.e.n',
                                '1': 'd.Hr.',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraNarrow': {
                                '0': '\u00EE.Hr.',
                                '0-alt-variant': '\u00EE.e.n',
                                '1': 'd.Hr.',
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
                                'yMMM': 'MMM y',
                                'yMM': 'MM.y',
                                'yMEd': 'E, dd.MM.y',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM.y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
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
                                    'd': 'E, d MMM - E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
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
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH-HH'
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
