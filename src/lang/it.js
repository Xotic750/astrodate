/**
 * @file {@link https://github.com/Xotic750/astrodate it}. Language file for AstroDate.
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
        AstroDate.lang('it', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Ora standard: {0}',
                    'regionFormat-type-daylight': 'Ora legale: {0}',
                    'regionFormat': 'Ora {0}',
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
                                    '7': 'lug',
                                    '6': 'giu',
                                    '5': 'mag',
                                    '12': 'dic',
                                    '11': 'nov',
                                    '10': 'ott',
                                    '9': 'set',
                                    '1': 'gen',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'L',
                                    '6': 'G',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'G',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'agosto',
                                    '7': 'luglio',
                                    '6': 'giugno',
                                    '5': 'maggio',
                                    '12': 'dicembre',
                                    '11': 'novembre',
                                    '10': 'ottobre',
                                    '9': 'settembre',
                                    '1': 'gennaio',
                                    '2': 'febbraio',
                                    '3': 'marzo',
                                    '4': 'aprile'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'ago',
                                    '7': 'lug',
                                    '6': 'giu',
                                    '5': 'mag',
                                    '12': 'dic',
                                    '11': 'nov',
                                    '10': 'ott',
                                    '9': 'set',
                                    '1': 'gen',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'L',
                                    '6': 'G',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'S',
                                    '1': 'G',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A'
                                },
                                'wide': {
                                    '8': 'Agosto',
                                    '7': 'Luglio',
                                    '6': 'Giugno',
                                    '5': 'Maggio',
                                    '12': 'Dicembre',
                                    '11': 'Novembre',
                                    '10': 'Ottobre',
                                    '9': 'Settembre',
                                    '1': 'Gennaio',
                                    '2': 'Febbraio',
                                    '3': 'Marzo',
                                    '4': 'Aprile'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'G',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'wide': {
                                    'sun': 'domenica',
                                    'mon': 'luned\u00EC',
                                    'tue': 'marted\u00EC',
                                    'wed': 'mercoled\u00EC',
                                    'thu': 'gioved\u00EC',
                                    'fri': 'venerd\u00EC',
                                    'sat': 'sabato'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'G',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'wide': {
                                    'sun': 'Domenica',
                                    'mon': 'Luned\u00EC',
                                    'tue': 'Marted\u00EC',
                                    'wed': 'Mercoled\u00EC',
                                    'thu': 'Gioved\u00EC',
                                    'fri': 'Venerd\u00EC',
                                    'sat': 'Sabato'
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
                                    '1': 'Primo trimestre',
                                    '2': 'Secondo trimestre',
                                    '3': 'Terzo trimestre',
                                    '4': 'Quarto trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'm.',
                                    'pm': 'p.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'm.',
                                    'pm': 'p.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'a.C.',
                                '0-alt-variant': 'BCE',
                                '1': 'd.C.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'aC',
                                '0-alt-variant': 'BCE',
                                '1': 'dC',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'aC',
                                '0-alt-variant': 'BCE',
                                '1': 'dC',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'dd MMMM y',
                            'medium': 'dd/MMM/y',
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
                                'yQQQ': 'QQQ y',
                                'Gy': 'y G',
                                'EHms': 'E HH:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'hh:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'hh:mm a',
                                'H': 'HH',
                                'h': 'hh a',
                                'GyMMMEd': 'E d MMM y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y'
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
                                    'd': 'E dd - E dd MMM',
                                    'M': 'E dd MMM - E dd MMM'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
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
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
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
