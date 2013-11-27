/**
 * @file {@link https://github.com/Xotic750/astrodate ar}. Language file for AstroDate.
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
        AstroDate.lang('ar', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u062A\u0648\u0642\u064A\u062A {0} \u0627\u0644\u0631\u0633\u0645\u064A',
                    'regionFormat-type-daylight': '\u062A\u0648\u0642\u064A\u062A {0} \u0627\u0644\u0635\u064A\u0641\u064A',
                    'regionFormat': '\u062A\u0648\u0642\u064A\u062A {0}',
                    'gmtZeroFormat': '\u062C\u0631\u064A\u0646\u062A\u0634',
                    'gmtFormat': '\u062C\u0631\u064A\u0646\u062A\u0634{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0623\u063A\u0633\u0637\u0633',
                                    '7': '\u064A\u0648\u0644\u064A\u0648',
                                    '6': '\u064A\u0648\u0646\u064A\u0648',
                                    '5': '\u0645\u0627\u064A\u0648',
                                    '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                    '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                    '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                    '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                    '1': '\u064A\u0646\u0627\u064A\u0631',
                                    '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                    '3': '\u0645\u0627\u0631\u0633',
                                    '4': '\u0623\u0628\u0631\u064A\u0644'
                                },
                                'narrow': {
                                    '8': '\u063A',
                                    '7': '\u0644',
                                    '6': '\u0646',
                                    '5': '\u0648',
                                    '12': '\u062F',
                                    '11': '\u0628',
                                    '10': '\u0643',
                                    '9': '\u0633',
                                    '1': '\u064A',
                                    '2': '\u0641',
                                    '3': '\u0645',
                                    '4': '\u0623'
                                },
                                'wide': {
                                    '8': '\u0623\u063A\u0633\u0637\u0633',
                                    '7': '\u064A\u0648\u0644\u064A\u0648',
                                    '6': '\u064A\u0648\u0646\u064A\u0648',
                                    '5': '\u0645\u0627\u064A\u0648',
                                    '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                    '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                    '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                    '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                    '1': '\u064A\u0646\u0627\u064A\u0631',
                                    '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                    '3': '\u0645\u0627\u0631\u0633',
                                    '4': '\u0623\u0628\u0631\u064A\u0644'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0623\u063A\u0633\u0637\u0633',
                                    '7': '\u064A\u0648\u0644\u064A\u0648',
                                    '6': '\u064A\u0648\u0646\u064A\u0648',
                                    '5': '\u0645\u0627\u064A\u0648',
                                    '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                    '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                    '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                    '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                    '1': '\u064A\u0646\u0627\u064A\u0631',
                                    '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                    '3': '\u0645\u0627\u0631\u0633',
                                    '4': '\u0623\u0628\u0631\u064A\u0644'
                                },
                                'narrow': {
                                    '8': '\u063A',
                                    '7': '\u0644',
                                    '6': '\u0646',
                                    '5': '\u0648',
                                    '12': '\u062F',
                                    '11': '\u0628',
                                    '10': '\u0643',
                                    '9': '\u0633',
                                    '1': '\u064A',
                                    '2': '\u0641',
                                    '3': '\u0645',
                                    '4': '\u0623'
                                },
                                'wide': {
                                    '8': '\u0623\u063A\u0633\u0637\u0633',
                                    '7': '\u064A\u0648\u0644\u064A\u0648',
                                    '6': '\u064A\u0648\u0646\u064A\u0648',
                                    '5': '\u0645\u0627\u064A\u0648',
                                    '12': '\u062F\u064A\u0633\u0645\u0628\u0631',
                                    '11': '\u0646\u0648\u0641\u0645\u0628\u0631',
                                    '10': '\u0623\u0643\u062A\u0648\u0628\u0631',
                                    '9': '\u0633\u0628\u062A\u0645\u0628\u0631',
                                    '1': '\u064A\u0646\u0627\u064A\u0631',
                                    '2': '\u0641\u0628\u0631\u0627\u064A\u0631',
                                    '3': '\u0645\u0627\u0631\u0633',
                                    '4': '\u0623\u0628\u0631\u064A\u0644'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                },
                                'narrow': {
                                    'sun': '\u062D',
                                    'mon': '\u0646',
                                    'tue': '\u062B',
                                    'wed': '\u0631',
                                    'thu': '\u062E',
                                    'fri': '\u062C',
                                    'sat': '\u0633'
                                },
                                'short': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                },
                                'wide': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                },
                                'narrow': {
                                    'sun': '\u062D',
                                    'mon': '\u0646',
                                    'tue': '\u062B',
                                    'wed': '\u0631',
                                    'thu': '\u062E',
                                    'fri': '\u062C',
                                    'sat': '\u0633'
                                },
                                'short': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                },
                                'wide': {
                                    'sun': '\u0627\u0644\u0623\u062D\u062F',
                                    'mon': '\u0627\u0644\u0627\u062B\u0646\u064A\u0646',
                                    'tue': '\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621',
                                    'wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
                                    'thu': '\u0627\u0644\u062E\u0645\u064A\u0633',
                                    'fri': '\u0627\u0644\u062C\u0645\u0639\u0629',
                                    'sat': '\u0627\u0644\u0633\u0628\u062A'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                    '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                    '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                    '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                                },
                                'narrow': {
                                    '1': '\u0661',
                                    '2': '\u0662',
                                    '3': '\u0663',
                                    '4': '\u0664'
                                },
                                'wide': {
                                    '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                    '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                    '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                    '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                    '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                    '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                    '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                                },
                                'narrow': {
                                    '1': '\u0661',
                                    '2': '\u0662',
                                    '3': '\u0663',
                                    '4': '\u0664'
                                },
                                'wide': {
                                    '1': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644',
                                    '2': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A',
                                    '3': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B',
                                    '4': '\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                },
                                'narrow': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                },
                                'wide': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                },
                                'narrow': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                },
                                'wide': {
                                    'am': '\u0635',
                                    'pm': '\u0645'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F',
                                '0-alt-variant': 'BCE',
                                '1': '\u0645\u064A\u0644\u0627\u062F\u064A',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u0642.\u0645',
                                '0-alt-variant': 'BCE',
                                '1': '\u0645',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u0642.\u0645',
                                '0-alt-variant': 'BCE',
                                '1': '\u0645',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE\u060C d MMMM\u060C y',
                            'long': 'd MMMM\u060C y',
                            'medium': 'dd\u200F/MM\u200F/y',
                            'short': 'd\u200F/M\u200F/y'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMM': 'MMM y',
                                'yMM': 'MM\u200F/y',
                                'yMEd': 'E\u060C d/\u200FM/\u200Fy',
                                'yMd': 'd\u200F/M\u200F/y',
                                'yM': 'M\u200F/y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E\u060C d',
                                'd': 'd',
                                'GyMMMd': 'd MMM\u060C y G',
                                'GyMMMEd': 'E\u060C d MMM\u060C y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E\u060C d MMM\u060C y',
                                'yMMMd': 'd MMM\u060C y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/\u200FM',
                                'MEd': 'E\u060C d/M',
                                'MMdd': 'dd\u200F/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E\u060C d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E\u060C d MMMM',
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
                                    'd': 'E\u060C d \u2013 E\u060C d MMM',
                                    'M': 'E\u060C d MMM \u2013 E\u060C d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E\u060C d/\u200FM \u2013\u200F E\u060C d/\u200FM',
                                    'M': 'E\u060C d/\u200FM \u2013 E\u060C d/\u200FM'
                                },
                                'Md': {
                                    'd': 'M/d \u2013 M/d',
                                    'M': 'M/d \u2013 M/d'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}',
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M\u200F/y \u2013 M\u200F/y',
                                    'y': 'M\u200F/y \u2013 M\u200F/y'
                                },
                                'yMd': {
                                    'd': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y',
                                    'M': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y',
                                    'y': 'd\u200F/M\u200F/y \u2013 d\u200F/M\u200F/y'
                                },
                                'yMEd': {
                                    'd': 'E\u060C dd\u200F/MM\u200F/y \u2013 E\u060C dd\u200F/MM\u200F/y',
                                    'M': 'E\u060C d\u200F/M\u200F/y \u2013 E\u060C d\u200F/M\u200F/y',
                                    'y': 'E\u060C d\u200F/M\u200F/y \u2013 E\u060C d\u200F/M\u200F/y'
                                },
                                'yMMM': {
                                    'M': 'MMM \u2013 MMM\u060C y',
                                    'y': 'MMM\u060C y \u2013 MMM\u060C y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM\u060C y',
                                    'M': 'd MMM \u2013 d MMM\u060C y',
                                    'y': 'd MMM\u060C y \u2013 d MMM\u060C y'
                                },
                                'yMMMEd': {
                                    'd': 'E\u060C d \u2013 E\u060C d MMM\u060C y',
                                    'M': 'E\u060C d MMM \u2013 E\u060C d MMM\u060C y',
                                    'y': 'E\u060C d MMM\u060C y \u2013 E\u060C d MMM\u060C y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM\u060C y',
                                    'y': 'MMMM\u060C y \u2013 MMMM\u060C y'
                                },
                                'MMMM': {
                                    'M': 'LLLL\u2013LLLL'
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
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                }
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
