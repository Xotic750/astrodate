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

/**
 * @file {@link https://github.com/Xotic750/astrodate cs}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9298
 * timeZoneNames: 24r9298
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
        AstroDate.lang('cs', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '\u010Casov\u00E9 p\u00E1smo {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+H:mm;-H:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'srp',
                                    '7': '\u010Dvc',
                                    '6': '\u010Dvn',
                                    '5': 'kv\u011B',
                                    '12': 'pro',
                                    '11': 'lis',
                                    '10': '\u0159\u00EDj',
                                    '9': 'z\u00E1\u0159',
                                    '1': 'led',
                                    '2': '\u00FAno',
                                    '3': 'b\u0159e',
                                    '4': 'dub'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'srpna',
                                    '7': '\u010Dervence',
                                    '6': '\u010Dervna',
                                    '5': 'kv\u011Btna',
                                    '12': 'prosince',
                                    '11': 'listopadu',
                                    '10': '\u0159\u00EDjna',
                                    '9': 'z\u00E1\u0159\u00ED',
                                    '1': 'ledna',
                                    '2': '\u00FAnora',
                                    '3': 'b\u0159ezna',
                                    '4': 'dubna'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'srp',
                                    '7': '\u010Dvc',
                                    '6': '\u010Dvn',
                                    '5': 'kv\u011B',
                                    '12': 'pro',
                                    '11': 'lis',
                                    '10': '\u0159\u00EDj',
                                    '9': 'z\u00E1\u0159',
                                    '1': 'led',
                                    '2': '\u00FAno',
                                    '3': 'b\u0159e',
                                    '4': 'dub'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': '\u010D',
                                    '6': '\u010D',
                                    '5': 'k',
                                    '12': 'p',
                                    '11': 'l',
                                    '10': '\u0159',
                                    '9': 'z',
                                    '1': 'l',
                                    '2': '\u00FA',
                                    '3': 'b',
                                    '4': 'd'
                                },
                                'wide': {
                                    '8': 'srpen',
                                    '7': '\u010Dervenec',
                                    '6': '\u010Derven',
                                    '5': 'kv\u011Bten',
                                    '12': 'prosinec',
                                    '11': 'listopad',
                                    '10': '\u0159\u00EDjen',
                                    '9': 'z\u00E1\u0159\u00ED',
                                    '1': 'leden',
                                    '2': '\u00FAnor',
                                    '3': 'b\u0159ezen',
                                    '4': 'duben'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': '\u00DA',
                                    'wed': 'S',
                                    'thu': '\u010C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'ned\u011Ble',
                                    'mon': 'pond\u011Bl\u00ED',
                                    'tue': '\u00FAter\u00FD',
                                    'wed': 'st\u0159eda',
                                    'thu': '\u010Dtvrtek',
                                    'fri': 'p\u00E1tek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': '\u00DA',
                                    'wed': 'S',
                                    'thu': '\u010C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': '\u00FAt',
                                    'wed': 'st',
                                    'thu': '\u010Dt',
                                    'fri': 'p\u00E1',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'ned\u011Ble',
                                    'mon': 'pond\u011Bl\u00ED',
                                    'tue': '\u00FAter\u00FD',
                                    'wed': 'st\u0159eda',
                                    'thu': '\u010Dtvrtek',
                                    'fri': 'p\u00E1tek',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u010Dtvrtlet\u00ED',
                                    '2': '2. \u010Dtvrtlet\u00ED',
                                    '3': '3. \u010Dtvrtlet\u00ED',
                                    '4': '4. \u010Dtvrtlet\u00ED'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u010Dtvrtlet\u00ED',
                                    '2': '2. \u010Dtvrtlet\u00ED',
                                    '3': '3. \u010Dtvrtlet\u00ED',
                                    '4': '4. \u010Dtvrtlet\u00ED'
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
                                    'am': 'AM',
                                    'pm': 'PM'
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
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'p\u0159. n. l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n. l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p\u0159. n. l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n. l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p\u0159.n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd. M. y',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMM': 'LLLL y',
                                'yMEd': 'E d. M. y',
                                'yMd': 'd. M. y',
                                'yM': 'M/y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E d. MMMM',
                                'd': 'd.',
                                'GyMMMd': 'd. M. y G',
                                'GyMMMEd': 'E d. M. y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'GyMMMMEd': 'E d. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMEd': 'E d. MMMM y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E d. M. y',
                                'yMMMd': 'd. M. y',
                                'Hm': 'H:mm',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E d. M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. M.',
                                'MMMEd': 'E d. M.',
                                'MMMMd': 'd. MMMM'
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
                                    'd': 'E d. M. \u2013 E d. M.',
                                    'M': 'E d. M. \u2013 E d. M.'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. M.',
                                    'M': 'd. M. \u2013 d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E d. M. \u2013 E d. M.',
                                    'M': 'E d. M. \u2013 E d. M.'
                                },
                                'Md': {
                                    'd': 'd. M. \u2013 d. M.',
                                    'M': 'd. M. \u2013 d. M.'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M/y \u2013 M/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y \u2013 E dd.MM.y',
                                    'M': 'E dd.MM.y \u2013 E dd.MM.y',
                                    'y': 'E dd.MM.y \u2013 E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. M. y',
                                    'M': 'd. M. \u2013 d. M. y',
                                    'y': 'd. M. y \u2013 d. M. y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. M. \u2013 E d. M. y',
                                    'M': 'E d. M. \u2013 E d. M. y',
                                    'y': 'E d. M. y \u2013 E d. M. y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
                                },
                                'H': {
                                    'H': 'H\u2013H'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate da}. Language file for AstroDate.
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
        AstroDate.lang('da', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': 'Tidszone for {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH.mm;-HH.mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'maj',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'maj',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 's\u00F8n.',
                                    'mon': 'man.',
                                    'tue': 'tir.',
                                    'wed': 'ons.',
                                    'thu': 'tor.',
                                    'fri': 'fre.',
                                    'sat': 'l\u00F8r.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 's\u00F8',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F8'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 's\u00F8n',
                                    'mon': 'man',
                                    'tue': 'tir',
                                    'wed': 'ons',
                                    'thu': 'tor',
                                    'fri': 'fre',
                                    'sat': 'l\u00F8r'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 's\u00F8',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F8'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'formiddag',
                                    'noon': 'middag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f\u00F8r vesterlandsk tidsregning',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'vesterlandsk tidsregning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'fKr',
                                '0-alt-variant': 'fvt',
                                '1': 'eKr',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE \'den\' d. MMMM y',
                            'long': 'd. MMM y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'kl.\' {0}',
                            'long': '{1} \'kl.\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'd. MMM y',
                                'yMMM': 'MMM y',
                                'yMM': 'MM/y',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E HH.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E \'d\'. d.',
                                'd': 'd.',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMEd': 'E d. MMM y',
                                'Hms': 'HH.mm.ss',
                                'hms': 'h.mm.ss a',
                                'Hm': 'HH.mm',
                                'hm': 'h.mm a',
                                'H': 'HH',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'M',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'MMM',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E d. MMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm.ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y'
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
                                    'd': 'E \'den\' d. \u2013 E \'den\' d. MMM',
                                    'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMM',
                                    'M': 'd. MMM \u2013 d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM \u2013 E dd/MM',
                                    'M': 'E dd/MM \u2013 E dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM \u2013 dd/MM'
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
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'MM/y \u2013 MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y \u2013 dd/MM/y',
                                    'M': 'dd/MM/y \u2013 dd/MM/y',
                                    'y': 'dd/MM/y \u2013 dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'M': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'y': 'E dd/MM/y \u2013 E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMM y',
                                    'M': 'd. MMM \u2013 d. MMM y',
                                    'y': 'd. MMM y \u2013 d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E \'den\' d. \u2013 E \'den\' d. MMM y',
                                    'M': 'E \'den\' d. MMM \u2013 E \'den\' d. MMM y',
                                    'y': 'E \'den\' d. MMM y \u2013 E \'den\' d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH.mm\u2013HH.mm v',
                                    'm': 'HH.mm\u2013HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a \u2013 h.mm a v',
                                    'h': 'h.mm\u2013h.mm a v',
                                    'm': 'h.mm\u2013h.mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm\u2013HH.mm',
                                    'm': 'HH.mm\u2013HH.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a \u2013 h.mm a',
                                    'h': 'h.mm\u2013h.mm a',
                                    'm': 'h.mm\u2013h.mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate de}. Language file for AstroDate.
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
        AstroDate.lang('de', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Normalzeit',
                    'regionFormat-type-daylight': '{0} Sommerzeit',
                    'regionFormat': '{0} Zeit',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'Aug.',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dez.',
                                    '11': 'Nov.',
                                    '10': 'Okt.',
                                    '9': 'Sep.',
                                    '1': 'Jan.',
                                    '2': 'Feb.',
                                    '3': 'M\u00E4rz',
                                    '4': 'Apr.'
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
                                    '8': 'August',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dezember',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'M\u00E4rz',
                                    '4': 'April'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Mai',
                                    '12': 'Dez',
                                    '11': 'Nov',
                                    '10': 'Okt',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'M\u00E4r',
                                    '4': 'Apr'
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
                                    '8': 'August',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Mai',
                                    '12': 'Dezember',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'M\u00E4rz',
                                    '4': 'April'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'So',
                                    'mon': 'Mo',
                                    'tue': 'Di',
                                    'wed': 'Mi',
                                    'thu': 'Do',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'Nachmittag',
                                    'am': 'vorm.',
                                    'earlyMorning': 'Morgen',
                                    'evening': 'Abend',
                                    'morning': 'Vormittag',
                                    'night': 'Nacht',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'vor der gew\u00F6hnlichen Zeitrechnung',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'der gew\u00F6hnlichen Zeitrechnung'
                            },
                            'eraAbbr': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'v. u. Z.',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'u. Z.'
                            },
                            'eraNarrow': {
                                '0': 'v. Chr.',
                                '0-alt-variant': 'vdZ',
                                '1': 'n. Chr.',
                                '1-alt-variant': 'dZ'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'dd.MM.y',
                            'short': 'dd.MM.yy'
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
                                'yMM': 'MM.y',
                                'yMEd': 'E, d.M.y',
                                'yMd': 'd.M.y',
                                'yM': 'M.y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E, d. MMMM',
                                'd': 'd',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH \'Uhr\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMM': 'MMM y',
                                'yMMdd': 'dd.MM.y',
                                'Hms': 'HH:mm:ss',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMd': 'd.MM.',
                                'MMdd': 'dd.MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMdd': 'dd. MMMM'
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
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.-d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'M': {
                                    'M': 'M.-M.'
                                },
                                'Hv': {
                                    'H': 'HH-HH \'Uhr\' v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'intervalFormatFallback': '{0} - {1}',
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
                                    'd': 'd.-d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
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
                                    'H': 'HH-HH \'Uhr\''
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd.-d.'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate el}. Language file for AstroDate.
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
        AstroDate.lang('el', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '[{1} ({0})]',
                    'regionFormat-type-standard': '\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                    'regionFormat-type-daylight': '\u0398\u03B5\u03C1\u03B9\u03BD\u03AE \u03CE\u03C1\u03B1 ({0})',
                    'regionFormat': '\u038F\u03C1\u03B1 ({0})',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0391\u03C5\u03B3',
                                    '7': '\u0399\u03BF\u03C5\u03BB',
                                    '6': '\u0399\u03BF\u03C5\u03BD',
                                    '5': '\u039C\u03B1\u0390',
                                    '12': '\u0394\u03B5\u03BA',
                                    '11': '\u039D\u03BF\u03B5',
                                    '10': '\u039F\u03BA\u03C4',
                                    '9': '\u03A3\u03B5\u03C0',
                                    '1': '\u0399\u03B1\u03BD',
                                    '2': '\u03A6\u03B5\u03B2',
                                    '3': '\u039C\u03B1\u03C1',
                                    '4': '\u0391\u03C0\u03C1'
                                },
                                'narrow': {
                                    '8': '\u0391',
                                    '7': '\u0399',
                                    '6': '\u0399',
                                    '5': '\u039C',
                                    '12': '\u0394',
                                    '11': '\u039D',
                                    '10': '\u039F',
                                    '9': '\u03A3',
                                    '1': '\u0399',
                                    '2': '\u03A6',
                                    '3': '\u039C',
                                    '4': '\u0391'
                                },
                                'wide': {
                                    '8': '\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5',
                                    '7': '\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5',
                                    '6': '\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5',
                                    '5': '\u039C\u03B1\u0390\u03BF\u03C5',
                                    '12': '\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '11': '\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '10': '\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '9': '\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5',
                                    '1': '\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5',
                                    '2': '\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5',
                                    '3': '\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5',
                                    '4': '\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0391\u03CD\u03B3',
                                    '7': '\u0399\u03BF\u03CD\u03BB',
                                    '6': '\u0399\u03BF\u03CD\u03BD',
                                    '5': '\u039C\u03AC\u03B9',
                                    '12': '\u0394\u03B5\u03BA',
                                    '11': '\u039D\u03BF\u03AD',
                                    '10': '\u039F\u03BA\u03C4',
                                    '9': '\u03A3\u03B5\u03C0',
                                    '1': '\u0399\u03B1\u03BD',
                                    '2': '\u03A6\u03B5\u03B2',
                                    '3': '\u039C\u03AC\u03C1',
                                    '4': '\u0391\u03C0\u03C1'
                                },
                                'narrow': {
                                    '8': '\u0391',
                                    '7': '\u0399',
                                    '6': '\u0399',
                                    '5': '\u039C',
                                    '12': '\u0394',
                                    '11': '\u039D',
                                    '10': '\u039F',
                                    '9': '\u03A3',
                                    '1': '\u0399',
                                    '2': '\u03A6',
                                    '3': '\u039C',
                                    '4': '\u0391'
                                },
                                'wide': {
                                    '8': '\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2',
                                    '7': '\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2',
                                    '6': '\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2',
                                    '5': '\u039C\u03AC\u03B9\u03BF\u03C2',
                                    '12': '\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '11': '\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '10': '\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '9': '\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2',
                                    '1': '\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
                                    '2': '\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2',
                                    '3': '\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2',
                                    '4': '\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u039A\u03C5\u03C1',
                                    'mon': '\u0394\u03B5\u03C5',
                                    'tue': '\u03A4\u03C1\u03AF',
                                    'wed': '\u03A4\u03B5\u03C4',
                                    'thu': '\u03A0\u03AD\u03BC',
                                    'fri': '\u03A0\u03B1\u03C1',
                                    'sat': '\u03A3\u03AC\u03B2'
                                },
                                'narrow': {
                                    'sun': '\u039A',
                                    'mon': '\u0394',
                                    'tue': '\u03A4',
                                    'wed': '\u03A4',
                                    'thu': '\u03A0',
                                    'fri': '\u03A0',
                                    'sat': '\u03A3'
                                },
                                'short': {
                                    'sun': '\u039A\u03C5',
                                    'mon': '\u0394\u03B5',
                                    'tue': '\u03A4\u03C1',
                                    'wed': '\u03A4\u03B5',
                                    'thu': '\u03A0\u03AD',
                                    'fri': '\u03A0\u03B1',
                                    'sat': '\u03A3\u03AC'
                                },
                                'wide': {
                                    'sun': '\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE',
                                    'mon': '\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1',
                                    'tue': '\u03A4\u03C1\u03AF\u03C4\u03B7',
                                    'wed': '\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7',
                                    'thu': '\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7',
                                    'fri': '\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE',
                                    'sat': '\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u039A\u03C5\u03C1',
                                    'mon': '\u0394\u03B5\u03C5',
                                    'tue': '\u03A4\u03C1\u03AF',
                                    'wed': '\u03A4\u03B5\u03C4',
                                    'thu': '\u03A0\u03AD\u03BC',
                                    'fri': '\u03A0\u03B1\u03C1',
                                    'sat': '\u03A3\u03AC\u03B2'
                                },
                                'narrow': {
                                    'sun': '\u039A',
                                    'mon': '\u0394',
                                    'tue': '\u03A4',
                                    'wed': '\u03A4',
                                    'thu': '\u03A0',
                                    'fri': '\u03A0',
                                    'sat': '\u03A3'
                                },
                                'short': {
                                    'sun': '\u039A\u03C5',
                                    'mon': '\u0394\u03B5',
                                    'tue': '\u03A4\u03C1',
                                    'wed': '\u03A4\u03B5',
                                    'thu': '\u03A0\u03AD',
                                    'fri': '\u03A0\u03B1',
                                    'sat': '\u03A3\u03AC'
                                },
                                'wide': {
                                    'sun': '\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE',
                                    'mon': '\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1',
                                    'tue': '\u03A4\u03C1\u03AF\u03C4\u03B7',
                                    'wed': '\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7',
                                    'thu': '\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7',
                                    'fri': '\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE',
                                    'sat': '\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u03A41',
                                    '2': '\u03A42',
                                    '3': '\u03A43',
                                    '4': '\u03A44'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '2': '2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '3': '3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '4': '4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u03A41',
                                    '2': '\u03A42',
                                    '3': '\u03A43',
                                    '4': '\u03A44'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '2': '2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '3': '3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF',
                                    '4': '4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'narrow': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'wide': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'narrow': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                },
                                'wide': {
                                    'am': '\u03C0.\u03BC.',
                                    'pm': '\u03BC.\u03BC.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
                            },
                            'eraAbbr': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
                            },
                            'eraNarrow': {
                                '0': '\u03C0.\u03A7.',
                                '0-alt-variant': '\u03C0.\u039A.\u03A7.',
                                '1': '\u03BC.\u03A7.',
                                '1-alt-variant': '\u039A\u03A7'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} - {0}',
                            'long': '{1} - {0}',
                            'medium': '{1} - {0}',
                            'short': '{1} - {0}',
                            'availableFormats': {
                                'yMMM': 'LLL y',
                                'yMEd': 'E, d/M/y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'HHmmss': 'HH:mm:ss',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss'
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
                                    'd': 'E, dd - E, dd MMM',
                                    'M': 'E, dd MMM - E, dd MMM'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
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
                                    'H': 'HH\u2013HH v'
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
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd MMM - E, dd MMM y',
                                    'M': 'E, dd MMM - E, dd MMM y',
                                    'y': 'E, dd MMM y - E, dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate fi}. Language file for AstroDate.
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
        AstroDate.lang('fi', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (normaaliaika)',
                    'regionFormat-type-daylight': '{0} (kes\u00E4aika)',
                    'regionFormat': 'aikavy\u00F6hyke: {0}',
                    'gmtZeroFormat': 'UTC',
                    'gmtFormat': 'UTC{0}',
                    'hourFormat': '+H.mm;-H.mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'elokuuta',
                                    '7': 'hein\u00E4kuuta',
                                    '6': 'kes\u00E4kuuta',
                                    '5': 'toukokuuta',
                                    '12': 'joulukuuta',
                                    '11': 'marraskuuta',
                                    '10': 'lokakuuta',
                                    '9': 'syyskuuta',
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta'
                                },
                                'narrow': {
                                    '8': 'E',
                                    '7': 'H',
                                    '6': 'K',
                                    '5': 'T',
                                    '12': 'J',
                                    '11': 'M',
                                    '10': 'L',
                                    '9': 'S',
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H'
                                },
                                'wide': {
                                    '8': 'elokuuta',
                                    '7': 'hein\u00E4kuuta',
                                    '6': 'kes\u00E4kuuta',
                                    '5': 'toukokuuta',
                                    '12': 'joulukuuta',
                                    '11': 'marraskuuta',
                                    '10': 'lokakuuta',
                                    '9': 'syyskuuta',
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'elo',
                                    '7': 'hein\u00E4',
                                    '6': 'kes\u00E4',
                                    '5': 'touko',
                                    '12': 'joulu',
                                    '11': 'marras',
                                    '10': 'loka',
                                    '9': 'syys',
                                    '1': 'tammi',
                                    '2': 'helmi',
                                    '3': 'maalis',
                                    '4': 'huhti'
                                },
                                'narrow': {
                                    '8': 'E',
                                    '7': 'H',
                                    '6': 'K',
                                    '5': 'T',
                                    '12': 'J',
                                    '11': 'M',
                                    '10': 'L',
                                    '9': 'S',
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H'
                                },
                                'wide': {
                                    '8': 'elokuu',
                                    '7': 'hein\u00E4kuu',
                                    '6': 'kes\u00E4kuu',
                                    '5': 'toukokuu',
                                    '12': 'joulukuu',
                                    '11': 'marraskuu',
                                    '10': 'lokakuu',
                                    '9': 'syyskuu',
                                    '1': 'tammikuu',
                                    '2': 'helmikuu',
                                    '3': 'maaliskuu',
                                    '4': 'huhtikuu'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntaina',
                                    'mon': 'maanantaina',
                                    'tue': 'tiistaina',
                                    'wed': 'keskiviikkona',
                                    'thu': 'torstaina',
                                    'fri': 'perjantaina',
                                    'sat': 'lauantaina'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntai',
                                    'mon': 'maanantai',
                                    'tue': 'tiistai',
                                    'wed': 'keskiviikko',
                                    'thu': 'torstai',
                                    'fri': 'perjantai',
                                    'sat': 'lauantai'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. nelj\u00E4nnes',
                                    '2': '2. nelj\u00E4nnes',
                                    '3': '3. nelj\u00E4nnes',
                                    '4': '4. nelj\u00E4nnes'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. nelj\u00E4nnes',
                                    '2': '2. nelj\u00E4nnes',
                                    '3': '3. nelj\u00E4nnes',
                                    '4': '4. nelj\u00E4nnes'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ennen Kristuksen syntym\u00E4\u00E4',
                                '0-alt-variant': 'ennen ajanlaskun alkua',
                                '1': 'j\u00E4lkeen Kristuksen syntym\u00E4n',
                                '1-alt-variant': 'j\u00E4lkeen ajanlaskun alun'
                            },
                            'eraAbbr': {
                                '0': 'eKr.',
                                '0-alt-variant': 'eaa.',
                                '1': 'jKr.',
                                '1-alt-variant': 'jaa.'
                            },
                            'eraNarrow': {
                                '0': 'eK',
                                '0-alt-variant': 'eaa',
                                '1': 'jK',
                                '1-alt-variant': 'jaa'
                            }
                        },
                        'dateFormats': {
                            'full': 'cccc d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
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
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E d. MMM y',
                                'yMMMd': 'd. MMM y',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E H.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E d.',
                                'd': 'd',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMccccd': 'cccc d. MMMM y',
                                'Hms': 'H.mm.ss',
                                'hms': 'h.mm.ss a',
                                'Hm': 'H.mm',
                                'hm': 'h.mm a',
                                'H': 'H',
                                'EHms': 'E H.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'ccc d. MMM',
                                'ms': 'm.ss',
                                'y': 'y',
                                'yM': 'L.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d.M.y',
                                'yMM': 'M.y',
                                'yMMM': 'LLL y'
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
                                    'd': 'E d. \u2013 E d. MMMM',
                                    'M': 'E d. MMMM \u2013 E d. MMMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMMM',
                                    'M': 'd. MMMM \u2013 d. MMMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLLL'
                                },
                                'MEd': {
                                    'd': 'E d. \u2013 E d.M.',
                                    'M': 'E d.M. \u2013 E d.M.'
                                },
                                'Md': {
                                    'd': 'd.\u2013d.M.',
                                    'M': 'd.M.\u2013d.M.'
                                },
                                'M': {
                                    'M': 'L.\u2013L.'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'intervalFormatFallback': '{0}\u2013{1}',
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'yMd': {
                                    'd': 'd.\u2013d.M.y',
                                    'M': 'd.M.\u2013d.M.y',
                                    'y': 'd.M.y\u2013d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E d.M.y \u2013 E d.M.y',
                                    'M': 'E d.M.y \u2013 E d.M.y',
                                    'y': 'E d.M.y \u2013 E d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMMM y',
                                    'M': 'd. MMMM \u2013 d. MMMM y',
                                    'y': 'd. MMMM y \u2013 d. MMMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. \u2013 E d. MMMM y',
                                    'M': 'E d. MMMM \u2013 E d. MMMM y',
                                    'y': 'E d. MMMM y \u2013 E d. MMMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLL\u2013LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
                                },
                                'MMMM': {
                                    'M': 'LLL\u2013LLLL'
                                },
                                'Hmv': {
                                    'H': 'H.mm\u2013H.mm v',
                                    'm': 'H.mm\u2013H.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a \u2013 h.mm a v',
                                    'h': 'h.mm\u2013h.mm a v',
                                    'm': 'h.mm\u2013h.mm a v'
                                },
                                'Hm': {
                                    'H': 'H.mm\u2013H.mm',
                                    'm': 'H.mm\u2013H.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a \u2013 h.mm a',
                                    'h': 'h.mm\u2013h.mm a',
                                    'm': 'h.mm\u2013h.mm a'
                                },
                                'H': {
                                    'H': 'H\u2013H'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate fr}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
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
        AstroDate.lang('fr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (heure standard)',
                    'regionFormat-type-daylight': '{0} (heure d\u2019\u00E9t\u00E9)',
                    'regionFormat': 'heure : {0}',
                    'gmtZeroFormat': 'UTC',
                    'gmtFormat': 'UTC{0}',
                    'hourFormat': '+HH:mm;\u2212HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'ao\u00FBt',
                                    '7': 'juil.',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9c.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'janv.',
                                    '2': 'f\u00E9vr.',
                                    '3': 'mars',
                                    '4': 'avr.'
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
                                    '8': 'ao\u00FBt',
                                    '7': 'juillet',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9cembre',
                                    '11': 'novembre',
                                    '10': 'octobre',
                                    '9': 'septembre',
                                    '1': 'janvier',
                                    '2': 'f\u00E9vrier',
                                    '3': 'mars',
                                    '4': 'avril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'ao\u00FBt',
                                    '7': 'juil.',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9c.',
                                    '11': 'nov.',
                                    '10': 'oct.',
                                    '9': 'sept.',
                                    '1': 'janv.',
                                    '2': 'f\u00E9vr.',
                                    '3': 'mars',
                                    '4': 'avr.'
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
                                    '8': 'ao\u00FBt',
                                    '7': 'juillet',
                                    '6': 'juin',
                                    '5': 'mai',
                                    '12': 'd\u00E9cembre',
                                    '11': 'novembre',
                                    '10': 'octobre',
                                    '9': 'septembre',
                                    '1': 'janvier',
                                    '2': 'f\u00E9vrier',
                                    '3': 'mars',
                                    '4': 'avril'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
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
                                    'sun': 'di',
                                    'mon': 'lu',
                                    'tue': 'ma',
                                    'wed': 'me',
                                    'thu': 'je',
                                    'fri': 've',
                                    'sat': 'sa'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
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
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
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
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
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
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'apr\u00E8s-midi',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'av.m.',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'ap.m.'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'apr\u00E8s-midi',
                                    'am': 'avant-midi',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'apr\u00E8s-midi'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'avant J\u00E9sus-Christ',
                                '0-alt-variant': 'AEC',
                                '1': 'apr\u00E8s J\u00E9sus-Christ',
                                '1-alt-variant': 'EC'
                            },
                            'eraAbbr': {
                                '0': 'av. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1': 'ap. J.-C.',
                                '1-alt-variant': 'EC'
                            },
                            'eraNarrow': {
                                '0': 'av. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1': 'ap. J.-C.',
                                '1-alt-variant': 'EC'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd/MM/y'
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
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH \'h\'',
                                'h': 'h a',
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
                                    'd': 'E d \u2013 E d MMM',
                                    'M': 'E d MMM \u2013 E d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'HH \u2013 HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h \u2013 h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y \u2013 d/M/y',
                                    'M': 'd/M/y \u2013 d/M/y',
                                    'y': 'dd/MM/y \u2013 dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'M': 'E dd/MM/y \u2013 E dd/MM/y',
                                    'y': 'E dd/MM/y \u2013 E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d \u2013 E d MMM y',
                                    'M': 'E d MMM \u2013 E d MMM y',
                                    'y': 'E d MMM y \u2013 E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm \u2013 HH:mm v',
                                    'm': 'HH:mm \u2013 HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm \u2013 h:mm a v',
                                    'm': 'h:mm \u2013 h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm \u2013 HH:mm',
                                    'm': 'HH:mm \u2013 HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm \u2013 h:mm a',
                                    'm': 'h:mm \u2013 h:mm a'
                                },
                                'H': {
                                    'H': 'HH \u2013 HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h \u2013 h a'
                                },
                                'd': {
                                    'd': 'd-d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate he}. Language file for AstroDate.
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
        AstroDate.lang('he', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u05E9\u05E2\u05D5\u05DF {0} (\u05D7\u05D5\u05E8\u05E3)',
                    'regionFormat-type-daylight': '\u05E9\u05E2\u05D5\u05DF {0} (\u05E7\u05D9\u05E5)',
                    'regionFormat': '\u05E9\u05E2\u05D5\u05DF {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u05D0\u05D5\u05D2',
                                    '7': '\u05D9\u05D5\u05DC',
                                    '6': '\u05D9\u05D5\u05E0',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE',
                                    '11': '\u05E0\u05D5\u05D1',
                                    '10': '\u05D0\u05D5\u05E7',
                                    '9': '\u05E1\u05E4\u05D8',
                                    '1': '\u05D9\u05E0\u05D5',
                                    '2': '\u05E4\u05D1\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                    '7': '\u05D9\u05D5\u05DC\u05D9',
                                    '6': '\u05D9\u05D5\u05E0\u05D9',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                    '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                    '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                    '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                    '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                    '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u05D0\u05D5\u05D2\u05F3',
                                    '7': '\u05D9\u05D5\u05DC\u05F3',
                                    '6': '\u05D9\u05D5\u05E0\u05F3',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05F3',
                                    '11': '\u05E0\u05D5\u05D1\u05F3',
                                    '10': '\u05D0\u05D5\u05E7\u05F3',
                                    '9': '\u05E1\u05E4\u05D8\u05F3',
                                    '1': '\u05D9\u05E0\u05D5\u05F3',
                                    '2': '\u05E4\u05D1\u05E8\u05F3',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05F3'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8',
                                    '7': '\u05D9\u05D5\u05DC\u05D9',
                                    '6': '\u05D9\u05D5\u05E0\u05D9',
                                    '5': '\u05DE\u05D0\u05D9',
                                    '12': '\u05D3\u05E6\u05DE\u05D1\u05E8',
                                    '11': '\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8',
                                    '10': '\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8',
                                    '9': '\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8',
                                    '1': '\u05D9\u05E0\u05D5\u05D0\u05E8',
                                    '2': '\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8',
                                    '3': '\u05DE\u05E8\u05E5',
                                    '4': '\u05D0\u05E4\u05E8\u05D9\u05DC'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                    'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                    'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                    'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                    'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                    'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                    'sat': '\u05E9\u05D1\u05EA'
                                },
                                'narrow': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'short': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'wide': {
                                    'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                    'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                    'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                    'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                    'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                    'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                    'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u05D9\u05D5\u05DD \u05D0\u05F3',
                                    'mon': '\u05D9\u05D5\u05DD \u05D1\u05F3',
                                    'tue': '\u05D9\u05D5\u05DD \u05D2\u05F3',
                                    'wed': '\u05D9\u05D5\u05DD \u05D3\u05F3',
                                    'thu': '\u05D9\u05D5\u05DD \u05D4\u05F3',
                                    'fri': '\u05D9\u05D5\u05DD \u05D5\u05F3',
                                    'sat': '\u05E9\u05D1\u05EA'
                                },
                                'narrow': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'short': {
                                    'sun': '\u05D0\u05F3',
                                    'mon': '\u05D1\u05F3',
                                    'tue': '\u05D2\u05F3',
                                    'wed': '\u05D3\u05F3',
                                    'thu': '\u05D4\u05F3',
                                    'fri': '\u05D5\u05F3',
                                    'sat': '\u05E9\u05F3'
                                },
                                'wide': {
                                    'sun': '\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF',
                                    'mon': '\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9',
                                    'tue': '\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9',
                                    'wed': '\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9',
                                    'thu': '\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9',
                                    'fri': '\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9',
                                    'sat': '\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                },
                                'narrow': {
                                    '1': '\u05E81',
                                    '2': '\u05E82',
                                    '3': '\u05E83',
                                    '4': '\u05E84'
                                },
                                'wide': {
                                    '1': '\u05E8\u05D1\u05E2\u05D5\u05DF 1',
                                    '2': '\u05E8\u05D1\u05E2\u05D5\u05DF 2',
                                    '3': '\u05E8\u05D1\u05E2\u05D5\u05DF 3',
                                    '4': '\u05E8\u05D1\u05E2\u05D5\u05DF 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'narrow': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'wide': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'narrow': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                },
                                'wide': {
                                    'am': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6',
                                    'pm': '\u05D0\u05D7\u05D4\u05F4\u05E6'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1',
                                '0-alt-variant': 'BCE',
                                '1': '\u05DC\u05E1\u05D4\u05F4\u05E0',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \u05D1MMMM y',
                            'long': 'd \u05D1MMMM y',
                            'medium': 'd \u05D1MMM y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                            'long': '{1} \u05D1\u05E9\u05E2\u05D4 {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d \u05D1MMM y',
                                'EHms': 'E H:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E H:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E \u05D4-d',
                                'd': 'd',
                                'GyMMMd': 'd \u05D1MMM y G',
                                'GyMMMEd': 'E, d \u05D1MMM y G',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': '\u200Fh a',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd \u05D1MMM',
                                'MMMEd': 'E, d \u05D1MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd \u05D1MMM y'
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
                                    'd': 'EEEE d MMM \u2013 EEEE d MMM',
                                    'M': 'EEEE d MMM \u2013 EEEE d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM\u2013d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'EEEE d.M\u2013EEEE d.M',
                                    'M': 'EEEE d.M \u2013 EEEE d.M'
                                },
                                'Md': {
                                    'd': 'd.M\u2013d.M',
                                    'M': 'd.M\u2013d.M'
                                },
                                'M': {
                                    'M': 'M\u2013M'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
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
                                    'M': 'M.y\u2013M.y',
                                    'y': 'M.y\u200F-M.y'
                                },
                                'yMd': {
                                    'd': 'dd.M.y \u2013 dd.M.y',
                                    'M': 'd.M.y \u2013 d.M.y',
                                    'y': 'd.M.y \u2013 d.M.y'
                                },
                                'yMEd': {
                                    'd': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                    'M': 'EEEE d.M.y \u2013 EEEE d.M.y',
                                    'y': 'EEEE d.M.y \u2013 EEEE d.M.y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE d MMM \u2013 EEEE d MMM y',
                                    'M': 'EEEE d MMM \u2013 EEEE d MMM y',
                                    'y': 'EEEE d MMM y \u2013 EEEE d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y\u2013MMMM y'
                                },
                                'MMMM': {
                                    'M': 'LLLL\u2013LLLL'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
                                },
                                'H': {
                                    'H': 'H\u2013H'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate hi}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9296
 * timeZoneNames: 24r9296
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
        AstroDate.lang('hi', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} \u092E\u093E\u0928\u0915 \u0938\u092E\u092F',
                    'regionFormat-type-daylight': '{0} \u0921\u0947\u0932\u093E\u0907\u091F \u0938\u092E\u092F',
                    'regionFormat': '{0} \u0938\u092E\u092F',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0905\u0917',
                                    '7': '\u091C\u0941\u0932\u093E',
                                    '6': '\u091C\u0942\u0928',
                                    '5': '\u092E\u0908',
                                    '12': '\u0926\u093F\u0938\u0902',
                                    '11': '\u0928\u0935\u0902',
                                    '10': '\u0905\u0915\u094D\u091F\u0942',
                                    '9': '\u0938\u093F\u0924\u0902',
                                    '1': '\u091C\u0928',
                                    '2': '\u092B\u093C\u0930',
                                    '3': '\u092E\u093E\u0930\u094D\u091A',
                                    '4': '\u0905\u092A\u094D\u0930\u0948'
                                },
                                'narrow': {
                                    '8': '\u0905',
                                    '7': '\u091C\u0941',
                                    '6': '\u091C\u0942',
                                    '5': '\u092E',
                                    '12': '\u0926\u093F',
                                    '11': '\u0928',
                                    '10': '\u0905',
                                    '9': '\u0938\u093F',
                                    '1': '\u091C',
                                    '2': '\u092B\u093C',
                                    '3': '\u092E\u093E',
                                    '4': '\u0905'
                                },
                                'wide': {
                                    '8': '\u0905\u0917\u0938\u094D\u0924',
                                    '7': '\u091C\u0941\u0932\u093E\u0908',
                                    '6': '\u091C\u0942\u0928',
                                    '5': '\u092E\u0908',
                                    '12': '\u0926\u093F\u0938\u0902\u092C\u0930',
                                    '11': '\u0928\u0935\u0902\u092C\u0930',
                                    '10': '\u0905\u0915\u094D\u091F\u0942\u092C\u0930',
                                    '9': '\u0938\u093F\u0924\u0902\u092C\u0930',
                                    '1': '\u091C\u0928\u0935\u0930\u0940',
                                    '2': '\u092B\u093C\u0930\u0935\u0930\u0940',
                                    '3': '\u092E\u093E\u0930\u094D\u091A',
                                    '4': '\u0905\u092A\u094D\u0930\u0948\u0932'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0905\u0917',
                                    '7': '\u091C\u0941\u0932\u093E',
                                    '6': '\u091C\u0942\u0928',
                                    '5': '\u092E\u0908',
                                    '12': '\u0926\u093F\u0938\u0902',
                                    '11': '\u0928\u0935\u0902',
                                    '10': '\u0905\u0915\u094D\u091F\u0942',
                                    '9': '\u0938\u093F\u0924\u0902',
                                    '1': '\u091C\u0928',
                                    '2': '\u092B\u093C\u0930',
                                    '3': '\u092E\u093E\u0930\u094D\u091A',
                                    '4': '\u0905\u092A\u094D\u0930\u0948'
                                },
                                'narrow': {
                                    '8': '\u0905',
                                    '7': '\u091C\u0941',
                                    '6': '\u091C\u0942',
                                    '5': '\u092E',
                                    '12': '\u0926\u093F',
                                    '11': '\u0928',
                                    '10': '\u0905',
                                    '9': '\u0938\u093F',
                                    '1': '\u091C',
                                    '2': '\u092B\u093C',
                                    '3': '\u092E\u093E',
                                    '4': '\u0905'
                                },
                                'wide': {
                                    '8': '\u0905\u0917\u0938\u094D\u0924',
                                    '7': '\u091C\u0941\u0932\u093E\u0908',
                                    '6': '\u091C\u0942\u0928',
                                    '5': '\u092E\u0908',
                                    '12': '\u0926\u093F\u0938\u0902\u092C\u0930',
                                    '11': '\u0928\u0935\u0902\u092C\u0930',
                                    '10': '\u0905\u0915\u094D\u091F\u0942\u092C\u0930',
                                    '9': '\u0938\u093F\u0924\u0902\u092C\u0930',
                                    '1': '\u091C\u0928\u0935\u0930\u0940',
                                    '2': '\u092B\u093C\u0930\u0935\u0930\u0940',
                                    '3': '\u092E\u093E\u0930\u094D\u091A',
                                    '4': '\u0905\u092A\u094D\u0930\u0948\u0932'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u0930\u0935\u093F',
                                    'mon': '\u0938\u094B\u092E',
                                    'tue': '\u092E\u0902\u0917\u0932',
                                    'wed': '\u092C\u0941\u0927',
                                    'thu': '\u0917\u0941\u0930\u0941',
                                    'fri': '\u0936\u0941\u0915\u094D\u0930',
                                    'sat': '\u0936\u0928\u093F'
                                },
                                'narrow': {
                                    'sun': '\u0930',
                                    'mon': '\u0938\u094B',
                                    'tue': '\u092E\u0902',
                                    'wed': '\u092C\u0941',
                                    'thu': '\u0917\u0941',
                                    'fri': '\u0936\u0941',
                                    'sat': '\u0936'
                                },
                                'short': {
                                    'sun': '\u0930',
                                    'mon': '\u0938\u094B',
                                    'tue': '\u092E\u0902',
                                    'wed': '\u092C\u0941',
                                    'thu': '\u0917\u0941',
                                    'fri': '\u0936\u0941',
                                    'sat': '\u0936'
                                },
                                'wide': {
                                    'sun': '\u0930\u0935\u093F\u0935\u093E\u0930',
                                    'mon': '\u0938\u094B\u092E\u0935\u093E\u0930',
                                    'tue': '\u092E\u0902\u0917\u0932\u0935\u093E\u0930',
                                    'wed': '\u092C\u0941\u0927\u0935\u093E\u0930',
                                    'thu': '\u0917\u0941\u0930\u0941\u0935\u093E\u0930',
                                    'fri': '\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930',
                                    'sat': '\u0936\u0928\u093F\u0935\u093E\u0930'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u0930\u0935\u093F',
                                    'mon': '\u0938\u094B\u092E',
                                    'tue': '\u092E\u0902\u0917\u0932',
                                    'wed': '\u092C\u0941\u0927',
                                    'thu': '\u0917\u0941\u0930\u0941',
                                    'fri': '\u0936\u0941\u0915\u094D\u0930',
                                    'sat': '\u0936\u0928\u093F'
                                },
                                'narrow': {
                                    'sun': '\u0930',
                                    'mon': '\u0938\u094B',
                                    'tue': '\u092E\u0902',
                                    'wed': '\u092C\u0941',
                                    'thu': '\u0917\u0941',
                                    'fri': '\u0936\u0941',
                                    'sat': '\u0936'
                                },
                                'short': {
                                    'sun': '\u0930',
                                    'mon': '\u0938\u094B',
                                    'tue': '\u092E\u0902',
                                    'wed': '\u092C\u0941',
                                    'thu': '\u0917\u0941',
                                    'fri': '\u0936\u0941',
                                    'sat': '\u0936'
                                },
                                'wide': {
                                    'sun': '\u0930\u0935\u093F\u0935\u093E\u0930',
                                    'mon': '\u0938\u094B\u092E\u0935\u093E\u0930',
                                    'tue': '\u092E\u0902\u0917\u0932\u0935\u093E\u0930',
                                    'wed': '\u092C\u0941\u0927\u0935\u093E\u0930',
                                    'thu': '\u0917\u0941\u0930\u0941\u0935\u093E\u0930',
                                    'fri': '\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930',
                                    'sat': '\u0936\u0928\u093F\u0935\u093E\u0930'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u0924\u093F1',
                                    '2': '\u0924\u093F2',
                                    '3': '\u0924\u093F3',
                                    '4': '\u0924\u093F4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '2': '\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '3': '\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '4': '\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u0924\u093F1',
                                    '2': '\u0924\u093F2',
                                    '3': '\u0924\u093F3',
                                    '4': '\u0924\u093F4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '2': '\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '3': '\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940',
                                    '4': '\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u092A\u0942\u0930\u094D\u0935',
                                    'pm': '\u0905\u092A\u0930'
                                },
                                'narrow': {
                                    'am': '\u092A\u0942',
                                    'pm': '\u0905'
                                },
                                'wide': {
                                    'am': '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928',
                                    'pm': '\u0905\u092A\u0930\u093E\u0939\u094D\u0928'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u092A\u0942\u0930\u094D\u0935',
                                    'pm': '\u0905\u092A\u0930'
                                },
                                'narrow': {
                                    'am': '\u092A\u0942',
                                    'pm': '\u0905'
                                },
                                'wide': {
                                    'am': '\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928',
                                    'pm': '\u0905\u092A\u0930\u093E\u0939\u094D\u0928'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                                '0-alt-variant': 'BCE',
                                '1': '\u0908\u0938\u094D\u0935\u0940',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                                '0-alt-variant': 'BCE',
                                '1': '\u0908\u0938\u094D\u0935\u0940',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935',
                                '0-alt-variant': 'BCE',
                                '1': '\u0908\u0938\u094D\u0935\u0940',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'dd-MM-y',
                            'short': 'd-M-yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \u0915\u094B {0}',
                            'long': '{1} \u0915\u094B {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMM': 'MM-y',
                                'yMEd': 'E, d/M/y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E, d MMMM',
                                'd': 'd',
                                'GyMMMd': 'd MMM, G y',
                                'GyMMMEd': 'E, d MMM, G y',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM, y',
                                'yMMM': 'MMM y',
                                'yMMdd': 'dd-MM-y',
                                'Hms': 'HH:mm:ss',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM G y',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMdd': 'dd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM'
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
                                    'd': 'E, d MMM \u2013 E, d MMM',
                                    'M': 'E, d MMM \u2013 E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd MMM\u2013d',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E, d/M \u2013 E, d/M',
                                    'M': 'E, d/M \u2013 E, d/M'
                                },
                                'Md': {
                                    'd': 'd/M \u2013 d/M',
                                    'M': 'd/M \u2013 d/M'
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
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M/y \u2013 M/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y \u2013 d/M/y',
                                    'M': 'd/M/y \u2013 d/M/y',
                                    'y': 'd/M/y \u2013 d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y \u2013 E, d/M/y',
                                    'M': 'E, d/M/y \u2013 E, d/M/y',
                                    'y': 'E, d/M/y \u2013 E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd MMM\u2013d, y',
                                    'M': 'd MMM \u2013 d MMM, y',
                                    'y': 'd MMM, y \u2013 d MMM, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM \u2013 E, d MMM, y',
                                    'M': 'E, d MMM \u2013 E, d MMM, y',
                                    'y': 'E, d MMM, y \u2013 E, d MMM, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
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
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate hr}. Language file for AstroDate.
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
        AstroDate.lang('hr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0}, standardno vrijeme',
                    'regionFormat-type-daylight': '{0}, ljetno vrijeme',
                    'regionFormat': '{0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm; -HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'kol',
                                    '7': 'srp',
                                    '6': 'lip',
                                    '5': 'svi',
                                    '12': 'pro',
                                    '11': 'stu',
                                    '10': 'lis',
                                    '9': 'ruj',
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'o\u017Eu',
                                    '4': 'tra'
                                },
                                'narrow': {
                                    '8': '8.',
                                    '7': '7.',
                                    '6': '6.',
                                    '5': '5.',
                                    '12': '12.',
                                    '11': '11.',
                                    '10': '10.',
                                    '9': '9.',
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '8': 'kolovoza',
                                    '7': 'srpnja',
                                    '6': 'lipnja',
                                    '5': 'svibnja',
                                    '12': 'prosinca',
                                    '11': 'studenoga',
                                    '10': 'listopada',
                                    '9': 'rujna',
                                    '1': 'sije\u010Dnja',
                                    '2': 'velja\u010De',
                                    '3': 'o\u017Eujka',
                                    '4': 'travnja'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'kol',
                                    '7': 'srp',
                                    '6': 'lip',
                                    '5': 'svi',
                                    '12': 'pro',
                                    '11': 'stu',
                                    '10': 'lis',
                                    '9': 'ruj',
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'o\u017Eu',
                                    '4': 'tra'
                                },
                                'narrow': {
                                    '8': '8.',
                                    '7': '7.',
                                    '6': '6.',
                                    '5': '5.',
                                    '12': '12.',
                                    '11': '11.',
                                    '10': '10.',
                                    '9': '9.',
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '8': 'kolovoz',
                                    '7': 'srpanj',
                                    '6': 'lipanj',
                                    '5': 'svibanj',
                                    '12': 'prosinac',
                                    '11': 'studeni',
                                    '10': 'listopad',
                                    '9': 'rujan',
                                    '1': 'sije\u010Danj',
                                    '2': 'velja\u010Da',
                                    '3': 'o\u017Eujak',
                                    '4': 'travanj'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': '\u010Det',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': '\u010C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': '\u010Det',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': '\u010Detvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': '\u010Det',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 'u',
                                    'wed': 's',
                                    'thu': '\u010D',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': '\u010Det',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': '\u010Detvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'nave\u010Der',
                                    'morning': 'prijepodne',
                                    'night': 'no\u0107u',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'nave\u010Der',
                                    'morning': 'prijepodne',
                                    'night': 'no\u0107u',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'nave\u010Der',
                                    'morning': 'prijepodne',
                                    'night': 'no\u0107u',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'nave\u010Der',
                                    'morning': 'prijepodne',
                                    'night': 'no\u0107u',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Prije Krista',
                                '0-alt-variant': 'pr. n. e.',
                                '1': 'Poslije Krista',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraAbbr': {
                                '0': 'pr. Kr.',
                                '0-alt-variant': 'pr. n. e.',
                                '1': 'p. Kr.',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraNarrow': {
                                '0': 'pr.n.e.',
                                '0-alt-variant': 'pr. n. e.',
                                '1': 'AD',
                                '1-alt-variant': 'n.e.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y.',
                            'long': 'd. MMMM y.',
                            'medium': 'd. MMM y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'u\' {0}',
                            'long': '{1} \'u\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMM': 'MM. y.',
                                'yMEd': 'E, d. M. y.',
                                'yMd': 'd. M. y.',
                                'yM': 'M. y.',
                                'y': 'y.',
                                'ms': 'mm:ss',
                                'Ed': 'E, d.',
                                'd': 'd.',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'hh:mm a',
                                'Hm': 'HH:mm',
                                'yQQQQ': 'QQQQ y.',
                                'yQQQ': 'QQQ y.',
                                'yMMMM': 'LLLL y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMM': 'LLL y.',
                                'Hms': 'HH:mm:ss',
                                'hms': 'hh:mm:ss a',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'LLL y. G',
                                'M': 'L.',
                                'Md': 'd. M.',
                                'MEd': 'E, d. M.',
                                'MMdd': 'dd. MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMd': 'd. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E, d. MMMM'
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
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'MMMd': {
                                    'd': 'dd. - dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'M': {
                                    'M': 'MM. - MM.'
                                },
                                'Hv': {
                                    'H': 'HH - HH \'h\' v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h - h \'h\' a v'
                                },
                                'y': {
                                    'y': 'y. - y.'
                                },
                                'yM': {
                                    'M': 'MM.y. - MM.y.',
                                    'y': 'MM.y. - MM.y.'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y. - dd.MM.y.',
                                    'M': 'dd.MM.y. - dd.MM.y.',
                                    'y': 'dd.MM.y. - dd.MM.y.'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'M': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'y': 'E, dd.MM.y. - E, dd.MM.y.'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y.',
                                    'y': 'LLL y. - LLL y.'
                                },
                                'yMMMd': {
                                    'd': 'dd. - dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL \u2013 LLLL y.',
                                    'y': 'LLLL y. - LLLL y.'
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
                                    'H': 'HH-HH\'h\''
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h - h\'h\' a'
                                },
                                'd': {
                                    'd': 'dd. - dd.'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate hu}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
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
        AstroDate.lang('hu', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} z\u00F3naid\u0151',
                    'regionFormat-type-daylight': '{0} ny\u00E1ri id\u0151',
                    'regionFormat': '{0} id\u0151',
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
                                    '7': 'j\u00FAl.',
                                    '6': 'j\u00FAn.',
                                    '5': 'm\u00E1j.',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'szept.',
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'm\u00E1rc.',
                                    '4': '\u00E1pr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'Sz',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': '\u00C1'
                                },
                                'wide': {
                                    '8': 'augusztus',
                                    '7': 'j\u00FAlius',
                                    '6': 'j\u00FAnius',
                                    '5': 'm\u00E1jus',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'szeptember',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'm\u00E1rcius',
                                    '4': '\u00E1prilis'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'j\u00FAl.',
                                    '6': 'j\u00FAn.',
                                    '5': 'm\u00E1j.',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'szept.',
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'm\u00E1rc.',
                                    '4': '\u00E1pr.'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'J',
                                    '6': 'J',
                                    '5': 'M',
                                    '12': 'D',
                                    '11': 'N',
                                    '10': 'O',
                                    '9': 'Sz',
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': '\u00C1'
                                },
                                'wide': {
                                    '8': 'augusztus',
                                    '7': 'j\u00FAlius',
                                    '6': 'j\u00FAnius',
                                    '5': 'm\u00E1jus',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'szeptember',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'm\u00E1rcius',
                                    '4': '\u00E1prilis'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vas\u00E1rnap',
                                    'mon': 'h\u00E9tf\u0151',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                    'fri': 'p\u00E9ntek',
                                    'sat': 'szombat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vas\u00E1rnap',
                                    'mon': 'h\u00E9tf\u0151',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'cs\u00FCt\u00F6rt\u00F6k',
                                    'fri': 'p\u00E9ntek',
                                    'sat': 'szombat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'I. negyed\u00E9v',
                                    '2': 'II. negyed\u00E9v',
                                    '3': 'III. negyed\u00E9v',
                                    '4': 'IV. negyed\u00E9v'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. negyed\u00E9v',
                                    '2': '2. negyed\u00E9v',
                                    '3': '3. negyed\u00E9v',
                                    '4': '4. negyed\u00E9v'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk el\u0151tt',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'id\u0151sz\u00E1m\u00EDt\u00E1sunk szerint',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraAbbr': {
                                '0': 'i. e.',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'i. sz.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraNarrow': {
                                '0': 'ie.',
                                '0-alt-variant': 'Kr. e.',
                                '1': 'isz.',
                                '1-alt-variant': 'Kr. u.'
                            }
                        },
                        'dateFormats': {
                            'full': 'y. MMMM d., EEEE',
                            'long': 'y. MMMM d.',
                            'medium': 'y MMM d',
                            'short': 'y. MM. dd.'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMEd': 'y. MMM d., E',
                                'yMMMd': 'y. MMM d.',
                                'yMMM': 'y. MMM',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'd., E',
                                'd': 'd',
                                'GyMMMd': 'G y. MMM d.',
                                'GyMMMEd': 'G y. MMM d., E',
                                'h': 'a h',
                                'yQQQQ': 'y. QQQQ',
                                'yQQQ': 'y. QQQ',
                                'yMMMM': 'y. MMMM',
                                'Hms': 'H:mm:ss',
                                'hms': 'a h:mm:ss',
                                'Hm': 'H:mm',
                                'hm': 'a h:mm',
                                'H': 'H',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y.',
                                'GyMMM': 'G y. MMM',
                                'M': 'L',
                                'Md': 'M. d.',
                                'MEd': 'M. d., E',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d.',
                                'MMMEd': 'MMM d., E',
                                'MMMMd': 'MMMM d.',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'y. M.',
                                'yMd': 'y. MM. dd.',
                                'yMEd': 'y. MM. dd., E'
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
                                    'd': 'MMM d., E \u2013 d., E',
                                    'M': 'MMM d., E \u2013 MMM d., E'
                                },
                                'MMMd': {
                                    'd': 'MMM d\u2013d.',
                                    'M': 'MMM d. \u2013 MMM d.'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'M. dd., E \u2013 M. d., E',
                                    'M': 'M. d., E \u2013 M. d., E'
                                },
                                'Md': {
                                    'd': 'M. d\u2013d.',
                                    'M': 'M. d. \u2013 M. d.'
                                },
                                'M': {
                                    'M': 'M\u2013M.'
                                },
                                'Hv': {
                                    'H': 'H\u2013H v'
                                },
                                'hv': {
                                    'a': 'a h \u2013 a h v',
                                    'h': 'a h\u2013h v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y. MM\u2013MM.',
                                    'y': 'y. MM. \u2013 y. MM.'
                                },
                                'yMd': {
                                    'd': 'y. MM. dd\u2013dd.',
                                    'M': 'y. MM. dd. \u2013 MM. dd.',
                                    'y': 'y. MM. dd. \u2013 y. MM. dd.'
                                },
                                'yMEd': {
                                    'd': 'y. MM. dd., E \u2013 dd., E',
                                    'M': 'y. MM. dd., E \u2013 MM. dd., E',
                                    'y': 'y. MM. dd., E \u2013 y. MM. dd., E'
                                },
                                'yMMM': {
                                    'M': 'y. MMM\u2013MMM',
                                    'y': 'y. MMM \u2013 y. MMM'
                                },
                                'yMMMd': {
                                    'd': 'y. MMM d\u2013d.',
                                    'M': 'y. MMM d. \u2013 MMM d.',
                                    'y': 'y. MMM d. \u2013 y. MMM d.'
                                },
                                'yMMMEd': {
                                    'd': 'y. MMM d., E \u2013 d., E',
                                    'M': 'y. MMM d., E \u2013 MMM d., E',
                                    'y': 'y. MMM d., E \u2013 y. MMM d., E'
                                },
                                'yMMMM': {
                                    'M': 'y. MMMM\u2013MMMM',
                                    'y': 'y. MMMM \u2013 y. MMMM'
                                },
                                'Hmv': {
                                    'H': 'H:mm\u2013H:mm v',
                                    'm': 'H:mm\u2013H:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm \u2013 a h:mm v',
                                    'h': 'a h:mm\u2013h:mm v',
                                    'm': 'a h:mm\u2013h:mm v'
                                },
                                'Hm': {
                                    'H': 'H:mm\u2013H:mm',
                                    'm': 'H:mm\u2013H:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm \u2013 a h:mm',
                                    'h': 'a h:mm\u2013h:mm',
                                    'm': 'a h:mm\u2013h:mm'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'h': {
                                    'a': 'a h \u2013 a h',
                                    'h': 'a h\u2013h'
                                },
                                'd': {
                                    'd': 'd\u2013d.'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate ja}. Language file for AstroDate.
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
        AstroDate.lang('ja', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1}\uFF08{0}\uFF09',
                    'regionFormat-type-standard': '{0}\u6A19\u6E96\u6642',
                    'regionFormat-type-daylight': '{0}\u590F\u6642\u9593',
                    'regionFormat': '{0}\u6642\u9593',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'wide': {
                                    'sun': '\u65E5\u66DC\u65E5',
                                    'mon': '\u6708\u66DC\u65E5',
                                    'tue': '\u706B\u66DC\u65E5',
                                    'wed': '\u6C34\u66DC\u65E5',
                                    'thu': '\u6728\u66DC\u65E5',
                                    'fri': '\u91D1\u66DC\u65E5',
                                    'sat': '\u571F\u66DC\u65E5'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u6708',
                                    'tue': '\u706B',
                                    'wed': '\u6C34',
                                    'thu': '\u6728',
                                    'fri': '\u91D1',
                                    'sat': '\u571F'
                                },
                                'wide': {
                                    'sun': '\u65E5\u66DC\u65E5',
                                    'mon': '\u6708\u66DC\u65E5',
                                    'tue': '\u706B\u66DC\u65E5',
                                    'wed': '\u6C34\u66DC\u65E5',
                                    'thu': '\u6728\u66DC\u65E5',
                                    'fri': '\u91D1\u66DC\u65E5',
                                    'sat': '\u571F\u66DC\u65E5'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C1\u56DB\u534A\u671F',
                                    '2': '\u7B2C2\u56DB\u534A\u671F',
                                    '3': '\u7B2C3\u56DB\u534A\u671F',
                                    '4': '\u7B2C4\u56DB\u534A\u671F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C1\u56DB\u534A\u671F',
                                    '2': '\u7B2C2\u56DB\u534A\u671F',
                                    '3': '\u7B2C3\u56DB\u534A\u671F',
                                    '4': '\u7B2C4\u56DB\u534A\u671F'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'narrow': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'wide': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'narrow': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                },
                                'wide': {
                                    'am': '\u5348\u524D',
                                    'noon': '\u6B63\u5348',
                                    'pm': '\u5348\u5F8C'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u7D00\u5143\u524D',
                                '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                                '1': '\u897F\u66A6',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u7D00\u5143\u524D',
                                '0-alt-variant': '\u897F\u66A6\u7D00\u5143\u524D',
                                '1': '\u897F\u66A6',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BC',
                                '0-alt-variant': 'BCE',
                                '1': 'AD',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\u5E74M\u6708d\u65E5EEEE',
                            'long': 'y\u5E74M\u6708d\u65E5',
                            'medium': 'y/MM/dd',
                            'short': 'y/MM/dd'
                        },
                        'timeFormats': {
                            'full': 'H\u6642mm\u5206ss\u79D2 zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMEEEEd': 'y/M/dEEEE',
                                'yMEd': 'y/M/d(E)',
                                'yMd': 'y/M/d',
                                'yM': 'y/M',
                                'y': 'y\u5E74',
                                'ms': 'mm:ss',
                                'MMMEEEEd': 'M\u6708d\u65E5EEEE',
                                'd': 'd\u65E5',
                                'GyMMM': 'Gy\u5E74M\u6708',
                                'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                                'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5(E)',
                                'GyMMMEEEEd': 'Gy\u5E74M\u6708d\u65E5EEEE',
                                'h': 'aK\u6642',
                                'H': 'H\u6642',
                                'hm': 'aK:mm',
                                'yQQQQ': 'yQQQQ',
                                'yQQQ': 'y/QQQ',
                                'yMMMEEEEd': 'y\u5E74M\u6708d\u65E5EEEE',
                                'yMMMEd': 'y\u5E74M\u6708d\u65E5(E)',
                                'yMMMd': 'y\u5E74M\u6708d\u65E5',
                                'yMMM': 'y\u5E74M\u6708',
                                'yMM': 'y/MM',
                                'Hm': 'H:mm',
                                'Ed': 'd\u65E5(E)',
                                'EEEEd': 'd\u65E5EEEE',
                                'Ehm': 'a K \u6642 mm \u5206 (E)',
                                'EHm': 'HH \u6642 mm \u5206 (E)',
                                'Ehms': 'a K \u6642 mm \u5206 ss \u79D2 (E)',
                                'EHms': 'HH \u6642 mm \u5206 ss \u79D2 (E)',
                                'Gy': 'Gy\u5E74',
                                'hms': 'aK:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'M\u6708',
                                'Md': 'M/d',
                                'MEd': 'M/d(E)',
                                'MEEEEd': 'M/dEEEE',
                                'MMM': 'M\u6708',
                                'MMMd': 'M\u6708d\u65E5',
                                'MMMEd': 'M\u6708d\u65E5(E)'
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
                                    'd': 'M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                    'M': 'M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)'
                                },
                                'MMMd': {
                                    'd': 'M\u6708d\u65E5\uFF5Ed\u65E5',
                                    'M': 'M\u6708d\u65E5\uFF5EM\u6708d\u65E5'
                                },
                                'MMM': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'MEd': {
                                    'd': 'MM/dd(E)\uFF5EMM/dd(E)',
                                    'M': 'MM/dd(E)\uFF5EMM/dd(E)'
                                },
                                'Md': {
                                    'd': 'MM/dd\uFF5EMM/dd',
                                    'M': 'MM/dd\uFF5EMM/dd'
                                },
                                'M': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'Hv': {
                                    'H': 'H\u6642\uFF5EH\u6642(v)'
                                },
                                'hv': {
                                    'a': 'aK\u6642\uFF5EaK\u6642(v)',
                                    'h': 'aK\u6642\uFF5EK\u6642(v)'
                                },
                                'intervalFormatFallback': '{0}\uFF5E{1}',
                                'y': {
                                    'y': 'y\u5E74\uFF5Ey\u5E74'
                                },
                                'yM': {
                                    'M': 'y/MM\uFF5Ey/MM',
                                    'y': 'y/MM\uFF5Ey/MM'
                                },
                                'yMd': {
                                    'd': 'y/MM/dd\uFF5Ey/MM/dd',
                                    'M': 'y/MM/dd\uFF5Ey/MM/dd',
                                    'y': 'y/MM/dd\uFF5Ey/MM/dd'
                                },
                                'yMEd': {
                                    'd': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                    'M': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)',
                                    'y': 'y/MM/dd(E)\uFF5Ey/MM/dd(E)'
                                },
                                'yMMM': {
                                    'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                    'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                                },
                                'yMMMd': {
                                    'd': 'y\u5E74M\u6708d\u65E5\uFF5Ed\u65E5',
                                    'M': 'y\u5E74M\u6708d\u65E5\uFF5EM\u6708d\u65E5',
                                    'y': 'y\u5E74M\u6708d\u65E5\uFF5Ey\u5E74M\u6708d\u65E5'
                                },
                                'yMMMEd': {
                                    'd': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ed\u65E5(E)',
                                    'M': 'y\u5E74M\u6708d\u65E5(E)\uFF5EM\u6708d\u65E5(E)',
                                    'y': 'y\u5E74M\u6708d\u65E5(E)\uFF5Ey\u5E74M\u6708d\u65E5(E)'
                                },
                                'yMMMM': {
                                    'M': 'y\u5E74M\u6708\uFF5EM\u6708',
                                    'y': 'y\u5E74M\u6708\uFF5Ey\u5E74M\u6708'
                                },
                                'MMMM': {
                                    'M': 'M\u6708\uFF5EM\u6708'
                                },
                                'Hmv': {
                                    'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)',
                                    'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206(v)'
                                },
                                'hmv': {
                                    'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206(v)',
                                    'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)',
                                    'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206(v)'
                                },
                                'Hm': {
                                    'H': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206',
                                    'm': 'H\u6642mm\u5206\uFF5EH\u6642mm\u5206'
                                },
                                'hm': {
                                    'a': 'aK\u6642mm\u5206\uFF5EaK\u6642mm\u5206',
                                    'h': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206',
                                    'm': 'aK\u6642mm\u5206\uFF5EK\u6642mm\u5206'
                                },
                                'H': {
                                    'H': 'H\u6642\uFF5EH\u6642'
                                },
                                'h': {
                                    'a': 'aK\u6642\uFF5EaK\u6642',
                                    'h': 'aK\u6642\uFF5EK\u6642'
                                },
                                'd': {
                                    'd': 'd\u65E5\uFF5Ed\u65E5'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate ko}. Language file for AstroDate.
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
        AstroDate.lang('ko', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} \uD45C\uC900\uC2DC',
                    'regionFormat-type-daylight': '{0} \uC77C\uAD11 \uC808\uC57D \uC2DC\uAC04',
                    'regionFormat': '{0} \uC2DC\uAC04',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'narrow': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'wide': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'narrow': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                },
                                'wide': {
                                    '8': '8\uC6D4',
                                    '7': '7\uC6D4',
                                    '6': '6\uC6D4',
                                    '5': '5\uC6D4',
                                    '12': '12\uC6D4',
                                    '11': '11\uC6D4',
                                    '10': '10\uC6D4',
                                    '9': '9\uC6D4',
                                    '1': '1\uC6D4',
                                    '2': '2\uC6D4',
                                    '3': '3\uC6D4',
                                    '4': '4\uC6D4'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'narrow': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'short': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'wide': {
                                    'sun': '\uC77C\uC694\uC77C',
                                    'mon': '\uC6D4\uC694\uC77C',
                                    'tue': '\uD654\uC694\uC77C',
                                    'wed': '\uC218\uC694\uC77C',
                                    'thu': '\uBAA9\uC694\uC77C',
                                    'fri': '\uAE08\uC694\uC77C',
                                    'sat': '\uD1A0\uC694\uC77C'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'narrow': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'short': {
                                    'sun': '\uC77C',
                                    'mon': '\uC6D4',
                                    'tue': '\uD654',
                                    'wed': '\uC218',
                                    'thu': '\uBAA9',
                                    'fri': '\uAE08',
                                    'sat': '\uD1A0'
                                },
                                'wide': {
                                    'sun': '\uC77C\uC694\uC77C',
                                    'mon': '\uC6D4\uC694\uC77C',
                                    'tue': '\uD654\uC694\uC77C',
                                    'wed': '\uC218\uC694\uC77C',
                                    'thu': '\uBAA9\uC694\uC77C',
                                    'fri': '\uAE08\uC694\uC77C',
                                    'sat': '\uD1A0\uC694\uC77C'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1\uBD84\uAE30',
                                    '2': '2\uBD84\uAE30',
                                    '3': '3\uBD84\uAE30',
                                    '4': '4\uBD84\uAE30'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\uC81C 1/4\uBD84\uAE30',
                                    '2': '\uC81C 2/4\uBD84\uAE30',
                                    '3': '\uC81C 3/4\uBD84\uAE30',
                                    '4': '\uC81C 4/4\uBD84\uAE30'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1\uBD84\uAE30',
                                    '2': '2\uBD84\uAE30',
                                    '3': '3\uBD84\uAE30',
                                    '4': '4\uBD84\uAE30'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\uC81C 1/4\uBD84\uAE30',
                                    '2': '\uC81C 2/4\uBD84\uAE30',
                                    '3': '\uC81C 3/4\uBD84\uAE30',
                                    '4': '\uC81C 4/4\uBD84\uAE30'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'narrow': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'wide': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'narrow': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                },
                                'wide': {
                                    'am': '\uC624\uC804',
                                    'pm': '\uC624\uD6C4'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\uC11C\uB825\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uB825\uAE30\uC6D0',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uAE30',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\uAE30\uC6D0\uC804',
                                '0-alt-variant': 'BCE',
                                '1': '\uC11C\uAE30',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\uB144 M\uC6D4 d\uC77C EEEE',
                            'long': 'y\uB144 M\uC6D4 d\uC77C',
                            'medium': 'y. M. d.',
                            'short': 'yy. M. d.'
                        },
                        'timeFormats': {
                            'full': 'a h\uC2DC m\uBD84 s\uCD08 zzzz',
                            'long': 'a h\uC2DC m\uBD84 s\uCD08 z',
                            'medium': 'a h:mm:ss',
                            'short': 'a h:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMd': 'y. M. d.',
                                'yM': 'y. M.',
                                'y': 'y\uB144',
                                'ms': 'mm:ss',
                                'mmss': 'mm:ss',
                                'MMMEEEEd': 'MMM d\uC77C EEEE',
                                'MMMEd': 'MMM d\uC77C (E)',
                                'MMMd': 'MMM d\uC77C',
                                'MMM': 'LLL',
                                'GyMMMd': 'G y\uB144 MMM d\uC77C',
                                'GyMMMEd': 'G y\uB144 MMM d\uC77C (E)',
                                'GyMMMEEEEd': 'G y\uB144 MMM d\uC77C EEEE',
                                'h': 'a h\uC2DC',
                                'H': 'H\uC2DC',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'a h:mm',
                                'yMEd': 'y. M. d. (E)',
                                'yQQQQ': 'y\uB144 QQQQ',
                                'yQQQ': 'y\uB144 QQQ',
                                'yMMMEEEEd': 'y\uB144 MMM d\uC77C EEEE',
                                'yMMMEd': 'y\uB144 MMM d\uC77C (E)',
                                'yMMMd': 'y\uB144 MMM d\uC77C',
                                'yMMM': 'y\uB144 MMM',
                                'yMM': 'y. M.',
                                'yMEEEEd': 'y. M. d. EEEE',
                                'GyMMM': 'G y\uB144 MMM',
                                'd': 'd\uC77C',
                                'Ed': 'd\uC77C (E)',
                                'EEEEd': 'd\uC77C EEEE',
                                'Ehm': '(E) a h:mm',
                                'EHm': '(E) HH:mm',
                                'Ehms': '(E) a h:mm:ss',
                                'EHms': '(E) HH:mm:ss',
                                'Gy': 'G y\uB144',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H\uC2DC m\uBD84 s\uCD08',
                                'M': 'M\uC6D4',
                                'Md': 'M. d.',
                                'MEd': 'M. d. (E)',
                                'MEEEEd': 'M. d. EEEE'
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
                                    'd': 'M\uC6D4 d\uC77C (E) ~ d\uC77C (E)',
                                    'M': 'M\uC6D4 d\uC77C (E) ~ M\uC6D4 d\uC77C (E)'
                                },
                                'MMMd': {
                                    'd': 'M\uC6D4 d\uC77C ~ d\uC77C',
                                    'M': 'M\uC6D4 d\uC77C ~ M\uC6D4 d\uC77C'
                                },
                                'MMM': {
                                    'M': 'MMM ~ MMM'
                                },
                                'MEd': {
                                    'd': 'M. d (E) ~ M. d (E)',
                                    'M': 'M. d (E) ~ M. d (E)'
                                },
                                'Md': {
                                    'd': 'M. d ~ M. d',
                                    'M': 'M. d ~ M. d'
                                },
                                'M': {
                                    'M': 'M\uC6D4 ~ M\uC6D4'
                                },
                                'Hv': {
                                    'H': 'HH ~ HH\uC2DC v'
                                },
                                'hv': {
                                    'a': 'a h\uC2DC ~ a h\uC2DC(v)',
                                    'h': 'a h\uC2DC ~ h\uC2DC(v)'
                                },
                                'intervalFormatFallback': '{0} ~ {1}',
                                'd': {
                                    'd': 'd\uC77C ~ d\uC77C'
                                },
                                'yM': {
                                    'M': 'y. M ~ y. M',
                                    'y': 'y. M ~ y. M'
                                },
                                'yMd': {
                                    'd': 'y. M. d. ~ y. M. d.',
                                    'M': 'y. M. d. ~ y. M. d.',
                                    'y': 'y. M. d. ~ y. M. d.'
                                },
                                'yMEd': {
                                    'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'y': 'y. M. d. (E) ~ y. M. d. (E)'
                                },
                                'yMMM': {
                                    'M': 'y\uB144 M\uC6D4~M\uC6D4',
                                    'y': 'y\uB144 M\uC6D4 ~ y\uB144 M\uC6D4'
                                },
                                'yMMMd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C~d\uC77C',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C ~ M\uC6D4 d\uC77C',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C ~ y\uB144 M\uC6D4 d\uC77C'
                                },
                                'yMMMEd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C (E) ~ d\uC77C (E)',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C (E) ~ M\uC6D4 d\uC77C (E)',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C (E) ~ y\uB144 M\uC6D4 d\uC77C (E)'
                                },
                                'yMMMEEEEd': {
                                    'd': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ d\uC77C EEEE',
                                    'M': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ M\uC6D4 d\uC77C EEEE',
                                    'y': 'y\uB144 M\uC6D4 d\uC77C EEEE ~ y\uB144 M\uC6D4 d\uC77C EEEE'
                                },
                                'yMMMM': {
                                    'M': 'y\uB144 MM\uC6D4 ~ MM\uC6D4',
                                    'y': 'y\uB144 MM\uC6D4 ~ y\uB144 MM\uC6D4'
                                },
                                'y': {
                                    'y': 'y\uB144 ~ y\uB144'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'HH:mm ~ HH:mm v',
                                    'm': 'HH:mm ~ HH:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm ~ a h:mm v',
                                    'h': 'a h:mm~h:mm v',
                                    'm': 'a h:mm~h:mm v'
                                },
                                'Hm': {
                                    'H': 'HH:mm ~ HH:mm',
                                    'm': 'HH:mm ~ HH:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm ~ a h:mm',
                                    'h': 'a h:mm~h:mm',
                                    'm': 'a h:mm~h:mm'
                                },
                                'H': {
                                    'H': 'HH ~ HH\uC2DC'
                                },
                                'h': {
                                    'a': 'a h\uC2DC ~ a h\uC2DC',
                                    'h': 'a h\uC2DC ~ h\uC2DC'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate nb}. Language file for AstroDate.
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
        AstroDate.lang('nb', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'normaltid \u2013 {0}',
                    'regionFormat-type-daylight': 'sommertid \u2013 {0}',
                    'regionFormat': 'tidssone for {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH.mm;-HH.mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'mai',
                                    '12': 'des.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mai',
                                    '12': 'desember',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'mars',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'mai',
                                    '12': 'des',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
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
                                    '8': 'august',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mai',
                                    '12': 'desember',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'mars',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 's\u00F8n.',
                                    'mon': 'man.',
                                    'tue': 'tir.',
                                    'wed': 'ons.',
                                    'thu': 'tor.',
                                    'fri': 'fre.',
                                    'sat': 'l\u00F8r.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 's\u00F8.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'l\u00F8.'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 's\u00F8.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'l\u00F8.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 's\u00F8.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'l\u00F8.'
                                },
                                'wide': {
                                    'sun': 's\u00F8ndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F8rdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
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
                                    'am': 'a',
                                    'pm': 'p'
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
                                    'am': 'a',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f\u00F8r v\u00E5r tidsregning',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'v\u00E5r tidsregning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'fvt.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'vt.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'fvt.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd. MMM y',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} \'kl.\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMMEd': 'E d. MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMM': 'MMM y',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E HH.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E d.',
                                'd': 'd.',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'Hms': 'HH.mm.ss',
                                'hms': 'h.mm.ss a',
                                'Hm': 'HH.mm',
                                'hm': 'h.mm a',
                                'H': 'HH',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E d.M',
                                'MMdd': 'd.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E d. MMM',
                                'ms': 'mm.ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d.MM.y',
                                'yMM': 'MM.y'
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
                                    'd': 'E d.\u2013E d. MMM',
                                    'M': 'E d. MMM\u2013E d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMM',
                                    'M': 'd. MMM\u2013d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E dd.MM.\u2013E dd.MM.',
                                    'M': 'E dd.MM.\u2013E dd.MM.'
                                },
                                'Md': {
                                    'd': 'dd.MM.\u2013dd.MM.',
                                    'M': 'dd.MM.\u2013dd.MM.'
                                },
                                'M': {
                                    'M': 'M.\u2013M.'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'H\u2013H v',
                                    'h': 'H\u2013H v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM.y\u2013MM.y',
                                    'y': 'MM.y\u2013MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y\u2013dd.MM.y',
                                    'M': 'dd.MM.y\u2013dd.MM.y',
                                    'y': 'dd.MM.y\u2013dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y\u2013E dd.MM.y',
                                    'M': 'E dd.MM.y\u2013E dd.MM.y',
                                    'y': 'E dd.MM.y\u2013E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y\u2013MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMM y',
                                    'M': 'd. MMM\u2013d. MMM y',
                                    'y': 'd. MMM y\u2013d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d.\u2013E d. MMM y',
                                    'M': 'E d. MMM\u2013E d. MMM y',
                                    'y': 'E d. MMM y\u2013E d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y\u2013MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH.mm\u2013HH.mm v',
                                    'm': 'HH.mm\u2013HH.mm v'
                                },
                                'hmv': {
                                    'a': 'H.mm\u2013H.mm v',
                                    'h': 'H.mm\u2013H.mm v',
                                    'm': 'H.mm\u2013H.mm v'
                                },
                                'Hm': {
                                    'H': 'HH.mm\u2013HH.mm',
                                    'm': 'HH.mm\u2013HH.mm'
                                },
                                'hm': {
                                    'a': 'H.mm\u2013H.mm',
                                    'h': 'H.mm\u2013H.mm',
                                    'm': 'H.mm\u2013H.mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'H\u2013H',
                                    'h': 'H\u2013H'
                                },
                                'd': {
                                    'd': 'd.\u2013d.'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate nl}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('nl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Standaardtijd {0}',
                    'regionFormat-type-daylight': 'Zomertijd {0}',
                    'regionFormat': '{0}-tijd',
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
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'mei',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mrt.',
                                    '4': 'apr.'
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
                                    '8': 'augustus',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mei',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'mei',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mrt',
                                    '4': 'apr'
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
                                    '8': 'augustus',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'mei',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'voormiddag',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Voor Christus',
                                '0-alt-variant': 'v\u00F3\u00F3r gewone jaartelling',
                                '1': 'na Christus',
                                '1-alt-variant': 'gewone jaartelling'
                            },
                            'eraAbbr': {
                                '0': 'v.Chr.',
                                '0-alt-variant': 'v.g.j.',
                                '1': 'n.Chr.',
                                '1-alt-variant': 'g.j.'
                            },
                            'eraNarrow': {
                                '0': 'v.C.',
                                '0-alt-variant': 'vgj',
                                '1': 'n.C.',
                                '1-alt-variant': 'gj'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd-MM-yy'
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
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E d MMM y',
                                'EHms': 'E HH:mm:ss',
                                'Ehms': 'E h:mm:ss a',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd-M',
                                'MEd': 'E d-M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M-y',
                                'yMd': 'd-M-y',
                                'yMEd': 'E d-M-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y'
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
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E dd-MM - E dd-MM',
                                    'M': 'E dd-MM - E dd-MM'
                                },
                                'Md': {
                                    'd': 'dd-MM - dd-MM',
                                    'M': 'dd-MM - dd-MM'
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
                                'intervalFormatFallback': '{0} - {1}',
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM-y - MM-y',
                                    'y': 'MM-y - MM-y'
                                },
                                'yMd': {
                                    'd': 'dd-MM-y - dd-MM-y',
                                    'M': 'dd-MM-y - dd-MM-y',
                                    'y': 'dd-MM-y - dd-MM-y'
                                },
                                'yMEd': {
                                    'd': 'E dd-MM-y - E dd-MM-y',
                                    'M': 'E dd-MM-y - E dd-MM-y',
                                    'y': 'E dd-MM-y - E dd-MM-y'
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
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                },
                                'MMMM': {
                                    'M': 'MMMM\u2013MMMM'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate pl}. Language file for AstroDate.
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
        AstroDate.lang('pl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (czas standardowy)',
                    'regionFormat-type-daylight': '{0} (czas letni)',
                    'regionFormat': 'Czas: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'sie',
                                    '7': 'lip',
                                    '6': 'cze',
                                    '5': 'maj',
                                    '12': 'gru',
                                    '11': 'lis',
                                    '10': 'pa\u017A',
                                    '9': 'wrz',
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': 'l',
                                    '6': 'c',
                                    '5': 'm',
                                    '12': 'g',
                                    '11': 'l',
                                    '10': 'p',
                                    '9': 'w',
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k'
                                },
                                'wide': {
                                    '8': 'sierpnia',
                                    '7': 'lipca',
                                    '6': 'czerwca',
                                    '5': 'maja',
                                    '12': 'grudnia',
                                    '11': 'listopada',
                                    '10': 'pa\u017Adziernika',
                                    '9': 'wrze\u015Bnia',
                                    '1': 'stycznia',
                                    '2': 'lutego',
                                    '3': 'marca',
                                    '4': 'kwietnia'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'sie',
                                    '7': 'lip',
                                    '6': 'cze',
                                    '5': 'maj',
                                    '12': 'gru',
                                    '11': 'lis',
                                    '10': 'pa\u017A',
                                    '9': 'wrz',
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi'
                                },
                                'narrow': {
                                    '8': 's',
                                    '7': 'l',
                                    '6': 'c',
                                    '5': 'm',
                                    '12': 'g',
                                    '11': 'l',
                                    '10': 'p',
                                    '9': 'w',
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k'
                                },
                                'wide': {
                                    '8': 'sierpie\u0144',
                                    '7': 'lipiec',
                                    '6': 'czerwiec',
                                    '5': 'maj',
                                    '12': 'grudzie\u0144',
                                    '11': 'listopad',
                                    '10': 'pa\u017Adziernik',
                                    '9': 'wrzesie\u0144',
                                    '1': 'stycze\u0144',
                                    '2': 'luty',
                                    '3': 'marzec',
                                    '4': 'kwiecie\u0144'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': '\u015A',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedzia\u0142ek',
                                    'tue': 'wtorek',
                                    'wed': '\u015Broda',
                                    'thu': 'czwartek',
                                    'fri': 'pi\u0105tek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': '\u015A',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': '\u015Br.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedzia\u0142ek',
                                    'tue': 'wtorek',
                                    'wed': '\u015Broda',
                                    'thu': 'czwartek',
                                    'fri': 'pi\u0105tek',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwarta\u0142',
                                    '2': 'II kwarta\u0142',
                                    '3': 'III kwarta\u0142',
                                    '4': 'IV kwarta\u0142'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1 kw.',
                                    '2': '2 kw.',
                                    '3': '3 kw.',
                                    '4': '4 kw.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwarta\u0142',
                                    '2': 'II kwarta\u0142',
                                    '3': 'III kwarta\u0142',
                                    '4': 'IV kwarta\u0142'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'narrow': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'wide': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'narrow': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                },
                                'wide': {
                                    'noon': 'w po\u0142udnie',
                                    'pm': 'PM',
                                    'afternoon': 'po po\u0142udniu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed po\u0142udniem',
                                    'morning': 'rano',
                                    'night': 'w nocy'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p.n.e.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.e.',
                                '1-alt-variant': 'CE'
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
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMMd': 'd MMM y',
                                'yMMM': 'LLL y',
                                'yMM': 'MM.y',
                                'yMEd': 'E, d.MM.y',
                                'EHm': 'E, HH:mm',
                                'Ehm': 'E, h:mm a',
                                'Ed': 'E, d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd.MM',
                                'MEd': 'E, d.MM',
                                'MMdd': 'd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'd.MM.y'
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
                                    'd': 'E, d MMM \u2013 E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM \u2013 E, dd.MM',
                                    'M': 'E, dd.MM \u2013 E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM\u2013dd.MM',
                                    'M': 'dd.MM\u2013dd.MM'
                                },
                                'M': {
                                    'M': 'MM-MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd-dd.MM.y',
                                    'M': 'dd.MM-dd.MM.y',
                                    'y': 'dd.MM.y-dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm-h:mm a v'
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
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate pt-PT}. Language file for AstroDate.
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
        AstroDate.lang('pt-PT', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Hora Padr\u00E3o de {0}',
                    'regionFormat-type-daylight': 'Hora de Ver\u00E3o de {0}',
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
                                    '8': 'Ago',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Mai',
                                    '12': 'Dez',
                                    '11': 'Nov',
                                    '10': 'Out',
                                    '9': 'Set',
                                    '1': 'Jan',
                                    '2': 'Fev',
                                    '3': 'Mar',
                                    '4': 'Abr'
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
                                    '8': 'Agosto',
                                    '7': 'Julho',
                                    '6': 'Junho',
                                    '5': 'Maio',
                                    '12': 'Dezembro',
                                    '11': 'Novembro',
                                    '10': 'Outubro',
                                    '9': 'Setembro',
                                    '1': 'Janeiro',
                                    '2': 'Fevereiro',
                                    '3': 'Mar\u00E7o',
                                    '4': 'Abril'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Ago',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Mai',
                                    '12': 'Dez',
                                    '11': 'Nov',
                                    '10': 'Out',
                                    '9': 'Set',
                                    '1': 'Jan',
                                    '2': 'Fev',
                                    '3': 'Mar',
                                    '4': 'Abr'
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
                                    '8': 'Agosto',
                                    '7': 'Julho',
                                    '6': 'Junho',
                                    '5': 'Maio',
                                    '12': 'Dezembro',
                                    '11': 'Novembro',
                                    '10': 'Outubro',
                                    '9': 'Setembro',
                                    '1': 'Janeiro',
                                    '2': 'Fevereiro',
                                    '3': 'Mar\u00E7o',
                                    '4': 'Abril'
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
                                    'sun': 'do',
                                    'mon': 'sg',
                                    'tue': 'te',
                                    'wed': 'qu',
                                    'thu': 'qi',
                                    'fri': 'sx',
                                    'sat': 'sb'
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
                                    'sun': 'do',
                                    'mon': 'sg',
                                    'tue': 'te',
                                    'wed': 'qu',
                                    'thu': 'qi',
                                    'fri': 'sx',
                                    'sat': 'sb'
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
                                    '1': '1.\u00BA trimestre',
                                    '2': '2.\u00BA trimestre',
                                    '3': '3.\u00BA trimestre',
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
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1.\u00BA trimestre',
                                    '2': '2.\u00BA trimestre',
                                    '3': '3.\u00BA trimestre',
                                    '4': '4.\u00BA trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'da manh\u00E3',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'da tarde'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meia-noite',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manh\u00E3',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Antes de Cristo',
                                '0-alt-variant': 'a.E.C.',
                                '1': 'Ano do Senhor',
                                '1-alt-variant': 'E.C.'
                            },
                            'eraAbbr': {
                                '0': 'a.C.',
                                '0-alt-variant': 'a.E.C.',
                                '1': 'd.C.',
                                '1-alt-variant': 'E.C.'
                            },
                            'eraNarrow': {
                                '0': 'a.C.',
                                '0-alt-variant': 'a.E.C.',
                                '1': 'd.C.',
                                '1-alt-variant': 'E.C.'
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
                            'full': '{1} \'\u00E0s\' {0}',
                            'long': '{1} \'\u00E0s\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMEd': 'E, dd/MM/y',
                                'yMd': 'dd/MM/y',
                                'yM': 'MM/y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMMEd': 'E, d \'de\' MMMM',
                                'MMMMd': 'd \'de\' MMMM',
                                'MMMEd': 'E, d/MM',
                                'MMMd': 'd/MM',
                                'MMM': 'LLL',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'yMM': 'MM/y',
                                'yMMM': 'MM/y',
                                'yQQQQ': 'QQQQ \'de\' y',
                                'yQQQ': 'QQQQ \'de\' y',
                                'yMMMMEd': 'E, d \'de\' MMMM \'de\' y',
                                'yMMMMd': 'd \'de\' MMMM \'de\' y',
                                'yMMMM': 'MMMM \'de\' y',
                                'yMMMEEEEd': 'EEEE, d/MM/y',
                                'yMMMEd': 'E, d/MM/y',
                                'yMMMd': 'd/MM/y',
                                'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                                'GyMMMd': 'd \'de\' MMM \'de\' y G',
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, dd/MM',
                                'MMdd': 'dd/MM'
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
                                    'd': 'E, d \'de\' MMM - E, d \'de\' MMM',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d \'de\' MMM',
                                    'M': 'd \'de\' MMM - d \'de\' MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
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
                                    'd': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y - MMMM \'de\' y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm - HH:mm v',
                                    'm': 'HH:mm - HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm - HH:mm',
                                    'm': 'HH:mm - HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate pt}. Language file for AstroDate.
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
        AstroDate.lang('pt', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': 'Hor\u00E1rio {0}',
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

/**
 * @file {@link https://github.com/Xotic750/astrodate root}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('root', {
            'dates': {
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
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
                                    'am': 'AM',
                                    'pm': 'PM'
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
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y MMMM d, EEEE',
                            'long': 'y MMMM d',
                            'medium': 'y MMM d',
                            'short': 'y-MM-dd'
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
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'GyMMMEd': 'G y MMM d, E',
                                'GyMMMd': 'G y MMM d',
                                'd': 'd',
                                'Ed': 'd, E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G y MMM',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'y-MM-dd, E',
                                'yMMM': 'y MMM',
                                'yMMMd': 'y MMM d',
                                'yMMMEd': 'y MMM d, E',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMEd': 'MMM d, E',
                                'MMMd': 'MMM d',
                                'MMM': 'LLL',
                                'MEd': 'MM-dd, E',
                                'Md': 'MM-dd',
                                'M': 'L'
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
                                    'd': 'MMM d, E \u2013 MMM d, E',
                                    'M': 'MMM d, E \u2013 MMM d, E'
                                },
                                'MMMd': {
                                    'd': 'MMM d\u2013d',
                                    'M': 'MMM d \u2013 MMM d'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'MM-dd, E \u2013 MM-dd, E',
                                    'M': 'MM-dd, E \u2013 MM-dd, E'
                                },
                                'Md': {
                                    'd': 'MM-dd \u2013 MM-dd',
                                    'M': 'MM-dd \u2013 MM-dd'
                                },
                                'M': {
                                    'M': 'MM\u2013MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y-MM \u2013 y-MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd \u2013 y-MM-dd',
                                    'M': 'y-MM-dd \u2013 y-MM-dd',
                                    'y': 'y-MM-dd \u2013 y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'M': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'y': 'y-MM-dd, E \u2013 y-MM-dd, E'
                                },
                                'yMMM': {
                                    'M': 'y MMM\u2013MMM',
                                    'y': 'y MMM \u2013 y MMM'
                                },
                                'yMMMd': {
                                    'd': 'y MMM d\u2013d',
                                    'M': 'y MMM d \u2013 MMM d',
                                    'y': 'y MMM d \u2013 y MMM d'
                                },
                                'yMMMEd': {
                                    'd': 'y MMM d, E \u2013 MMM d, E',
                                    'M': 'y MMM d, E \u2013 MMM d, E',
                                    'y': 'y MMM d, E \u2013 y MMM d, E'
                                },
                                'yMMMM': {
                                    'M': 'y MMMM\u2013MMMM',
                                    'y': 'y MMMM \u2013 y MMMM'
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
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate ru}. Language file for AstroDate.
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
        AstroDate.lang('ru', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '{0} \u0432\u0440\u0435\u043C\u044F',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433.',
                                    '7': '\u0438\u044E\u043B\u044F',
                                    '6': '\u0438\u044E\u043D\u044F',
                                    '5': '\u043C\u0430\u044F',
                                    '12': '\u0434\u0435\u043A.',
                                    '11': '\u043D\u043E\u044F\u0431.',
                                    '10': '\u043E\u043A\u0442.',
                                    '9': '\u0441\u0435\u043D\u0442.',
                                    '1': '\u044F\u043D\u0432.',
                                    '2': '\u0444\u0435\u0432\u0440.',
                                    '3': '\u043C\u0430\u0440\u0442\u0430',
                                    '4': '\u0430\u043F\u0440.'
                                },
                                'narrow': {
                                    '8': '\u0410',
                                    '7': '\u0418',
                                    '6': '\u0418',
                                    '5': '\u041C',
                                    '12': '\u0414',
                                    '11': '\u041D',
                                    '10': '\u041E',
                                    '9': '\u0421',
                                    '1': '\u042F',
                                    '2': '\u0424',
                                    '3': '\u041C',
                                    '4': '\u0410'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442\u0430',
                                    '7': '\u0438\u044E\u043B\u044F',
                                    '6': '\u0438\u044E\u043D\u044F',
                                    '5': '\u043C\u0430\u044F',
                                    '12': '\u0434\u0435\u043A\u0430\u0431\u0440\u044F',
                                    '11': '\u043D\u043E\u044F\u0431\u0440\u044F',
                                    '10': '\u043E\u043A\u0442\u044F\u0431\u0440\u044F',
                                    '9': '\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F',
                                    '1': '\u044F\u043D\u0432\u0430\u0440\u044F',
                                    '2': '\u0444\u0435\u0432\u0440\u0430\u043B\u044F',
                                    '3': '\u043C\u0430\u0440\u0442\u0430',
                                    '4': '\u0430\u043F\u0440\u0435\u043B\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0410\u0432\u0433.',
                                    '7': '\u0418\u044E\u043B\u044C',
                                    '6': '\u0418\u044E\u043D\u044C',
                                    '5': '\u041C\u0430\u0439',
                                    '12': '\u0414\u0435\u043A.',
                                    '11': '\u041D\u043E\u044F\u0431.',
                                    '10': '\u041E\u043A\u0442.',
                                    '9': '\u0421\u0435\u043D\u0442.',
                                    '1': '\u042F\u043D\u0432.',
                                    '2': '\u0424\u0435\u0432\u0440.',
                                    '3': '\u041C\u0430\u0440\u0442',
                                    '4': '\u0410\u043F\u0440.'
                                },
                                'narrow': {
                                    '8': '\u0410',
                                    '7': '\u0418',
                                    '6': '\u0418',
                                    '5': '\u041C',
                                    '12': '\u0414',
                                    '11': '\u041D',
                                    '10': '\u041E',
                                    '9': '\u0421',
                                    '1': '\u042F',
                                    '2': '\u0424',
                                    '3': '\u041C',
                                    '4': '\u0410'
                                },
                                'wide': {
                                    '8': '\u0410\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0418\u044E\u043B\u044C',
                                    '6': '\u0418\u044E\u043D\u044C',
                                    '5': '\u041C\u0430\u0439',
                                    '12': '\u0414\u0435\u043A\u0430\u0431\u0440\u044C',
                                    '11': '\u041D\u043E\u044F\u0431\u0440\u044C',
                                    '10': '\u041E\u043A\u0442\u044F\u0431\u0440\u044C',
                                    '9': '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C',
                                    '1': '\u042F\u043D\u0432\u0430\u0440\u044C',
                                    '2': '\u0424\u0435\u0432\u0440\u0430\u043B\u044C',
                                    '3': '\u041C\u0430\u0440\u0442',
                                    '4': '\u0410\u043F\u0440\u0435\u043B\u044C'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'narrow': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'short': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'wide': {
                                    'sun': '\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                    'tue': '\u0432\u0442\u043E\u0440\u043D\u0438\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0435\u0440\u0433',
                                    'fri': '\u043F\u044F\u0442\u043D\u0438\u0446\u0430',
                                    'sat': '\u0441\u0443\u0431\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u0412\u0441',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u0412',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u0432\u0441',
                                    'mon': '\u043F\u043D',
                                    'tue': '\u0432\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0442',
                                    'fri': '\u043F\u0442',
                                    'sat': '\u0441\u0431'
                                },
                                'wide': {
                                    'sun': '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435',
                                    'mon': '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A',
                                    'tue': '\u0412\u0442\u043E\u0440\u043D\u0438\u043A',
                                    'wed': '\u0421\u0440\u0435\u0434\u0430',
                                    'thu': '\u0427\u0435\u0442\u0432\u0435\u0440\u0433',
                                    'fri': '\u041F\u044F\u0442\u043D\u0438\u0446\u0430',
                                    'sat': '\u0421\u0443\u0431\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1-\u0439 \u043A\u0432.',
                                    '2': '2-\u0439 \u043A\u0432.',
                                    '3': '3-\u0439 \u043A\u0432.',
                                    '4': '4-\u0439 \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1-\u0439 \u043A\u0432.',
                                    '2': '2-\u0439 \u043A\u0432.',
                                    '3': '3-\u0439 \u043A\u0432.',
                                    '4': '4-\u0439 \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                },
                                'narrow': {
                                    'am': '\u0434\u043F',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                },
                                'narrow': {
                                    'am': '\u0434\u043F',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'am': '\u0434\u043E \u043F\u043E\u043B\u0443\u0434\u043D\u044F',
                                    'pm': '\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0434\u043E \u043D.\u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            },
                            'eraAbbr': {
                                '0': '\u0434\u043E \u043D. \u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D. \u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            },
                            'eraNarrow': {
                                '0': '\u0434\u043E \u043D.\u044D.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u044D.',
                                '1-alt-variant': '\u043D.\u044D.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'\u0433\'.',
                            'long': 'd MMMM y \'\u0433\'.',
                            'medium': 'dd MMM y \'\u0433\'.',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'yMMM': 'LLL y',
                                'yMM': 'MM.y',
                                'yMEd': 'ccc, d.MM.y \'\u0433\'.',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM.y',
                                'Ed': 'ccc, d',
                                'E': 'ccc',
                                'd': 'd',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y \'\u0433\'. G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'yQQQQ': 'QQQQ y \'\u0433\'.',
                                'yQQQ': 'QQQ y \'\u0433\'.',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y \'\u0433\'.',
                                'hms': 'h:mm:ss a',
                                'Hm': 'H:mm',
                                'hm': 'h:mm a',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'ccc, d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yLLLL': 'LLLL y'
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
                                    'd': 'ccc, d - E, d MMM',
                                    'M': 'ccc, d MMM - ccc, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-MMM'
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
                                    'H': 'H-H v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'intervalFormatFallback': '{0} - {1}',
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
                                    'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y \'\u0433\'.',
                                    'y': 'LLL y - LLL y \'\u0433\'.'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y \'\u0433\'.',
                                    'M': 'd MMM - d MMM y \'\u0433\'.',
                                    'y': 'd MMM y - d MMM y \'\u0433\'.'
                                },
                                'yMMMEd': {
                                    'd': 'ccc, d - ccc, d MMM y \'\u0433\'.',
                                    'M': 'ccc, d MMM - ccc, d MMM y \'\u0433\'.',
                                    'y': 'ccc, d MMM y - ccc, d MMM y \'\u0433\'.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y \'\u0433\'.',
                                    'y': 'LLLL y - LLLL y \'\u0433\'.'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm-H:mm',
                                    'm': 'H:mm-H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
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

/**
 * @file {@link https://github.com/Xotic750/astrodate sk}. Language file for AstroDate.
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
        AstroDate.lang('sk', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '\u010Casov\u00E9 p\u00E1smo {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'a',
                                    '7': 'j',
                                    '6': 'j',
                                    '5': 'm',
                                    '12': 'd',
                                    '11': 'n',
                                    '10': 'o',
                                    '9': 's',
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a'
                                },
                                'wide': {
                                    '8': 'augusta',
                                    '7': 'j\u00FAla',
                                    '6': 'j\u00FAna',
                                    '5': 'm\u00E1ja',
                                    '12': 'decembra',
                                    '11': 'novembra',
                                    '10': 'okt\u00F3bra',
                                    '9': 'septembra',
                                    '1': 'janu\u00E1ra',
                                    '2': 'febru\u00E1ra',
                                    '3': 'marca',
                                    '4': 'apr\u00EDla'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'a',
                                    '7': 'j',
                                    '6': 'j',
                                    '5': 'm',
                                    '12': 'd',
                                    '11': 'n',
                                    '10': 'o',
                                    '9': 's',
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a'
                                },
                                'wide': {
                                    '8': 'august',
                                    '7': 'j\u00FAl',
                                    '6': 'j\u00FAn',
                                    '5': 'm\u00E1j',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'okt\u00F3ber',
                                    '9': 'september',
                                    '1': 'janu\u00E1r',
                                    '2': 'febru\u00E1r',
                                    '3': 'marec',
                                    '4': 'apr\u00EDl'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': '\u0161t',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': '\u0160',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': '\u0160t',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nede\u013Ea',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': '\u0161tvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': '\u0161t',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': '\u0160',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': '\u0160t',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nede\u013Ea',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': '\u0161tvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u0161tvr\u0165rok',
                                    '2': '2. \u0161tvr\u0165rok',
                                    '3': '3. \u0161tvr\u0165rok',
                                    '4': '4. \u0161tvr\u0165rok'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1Q',
                                    '2': '2Q',
                                    '3': '3Q',
                                    '4': '4Q'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u0161tvr\u0165rok',
                                    '2': '2. \u0161tvr\u0165rok',
                                    '3': '3. \u0161tvr\u0165rok',
                                    '4': '4. \u0161tvr\u0165rok'
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
                                    'am': 'AM',
                                    'pm': 'PM'
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
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'pred n.l.',
                                '0-alt-variant': 'BCE',
                                '1': 'n.l.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMM': 'LLL y',
                                'yMEd': 'E d. M. y',
                                'yMd': 'd.M.y',
                                'yM': 'M.y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'Ed': 'E d.',
                                'd': 'd.',
                                'GyMMMd': 'd.M.y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMd': 'd.M.y',
                                'hms': 'h:mm:ss a',
                                'Hm': 'H:mm',
                                'Ehm': 'E h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'Hms': 'H:mm:ss',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM.',
                                'MMMEd': 'E, d. MMM.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'mmss': 'mm:ss'
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
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd. - d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMM': {
                                    'M': 'LLL \u2013 LLL'
                                },
                                'MEd': {
                                    'd': 'E, d.M. - E, d.M.',
                                    'M': 'E, d.M. - E, d.M.'
                                },
                                'Md': {
                                    'd': 'd.M. - d.M.',
                                    'M': 'd.M. - d.M.'
                                },
                                'M': {
                                    'M': 'M. \u2013 M.'
                                },
                                'Hv': {
                                    'H': 'HH \u2013 HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h \u2013 h a v'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}',
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'M.y - M.y',
                                    'y': 'M.y - M.y'
                                },
                                'yMd': {
                                    'd': 'd.M.y - d.M.y',
                                    'M': 'd.M.y - d.M.y',
                                    'y': 'd.M.y - d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y - E, d.M.y',
                                    'M': 'E, d.M.y - E, d.M.y',
                                    'y': 'E, d.M.y - E, d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL - LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd. - d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL - LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'Hmv': {
                                    'H': 'H:mm \u2013 H:mm v',
                                    'm': 'H:mm \u2013 H:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hm': {
                                    'H': 'H:mm \u2013 H:mm',
                                    'm': 'H:mm \u2013 H:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'H': {
                                    'H': 'HH \u2013 HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h \u2013 h a'
                                },
                                'd': {
                                    'd': 'd. \u2013 d.'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate sl}. Language file for AstroDate.
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
        AstroDate.lang('sl', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '{0} \u010Das',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'avg.',
                                    '7': 'jul.',
                                    '6': 'jun.',
                                    '5': 'maj',
                                    '12': 'dec.',
                                    '11': 'nov.',
                                    '10': 'okt.',
                                    '9': 'sep.',
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.'
                                },
                                'narrow': {
                                    '8': 'a',
                                    '7': 'j',
                                    '6': 'j',
                                    '5': 'm',
                                    '12': 'd',
                                    '11': 'n',
                                    '10': 'o',
                                    '9': 's',
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a'
                                },
                                'wide': {
                                    '8': 'avgust',
                                    '7': 'julij',
                                    '6': 'junij',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'avg',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'maj',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
                                },
                                'narrow': {
                                    '8': 'a',
                                    '7': 'j',
                                    '6': 'j',
                                    '5': 'm',
                                    '12': 'd',
                                    '11': 'n',
                                    '10': 'o',
                                    '9': 's',
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a'
                                },
                                'wide': {
                                    '8': 'avgust',
                                    '7': 'julij',
                                    '6': 'junij',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': '\u010Det.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': '\u010D',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': '\u010Det.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': '\u010Detrtek',
                                    'fri': 'petek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'tor',
                                    'wed': 'sre',
                                    'thu': '\u010Det',
                                    'fri': 'pet',
                                    'sat': 'sob'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': '\u010D',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': '\u010Det.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': '\u010Detrtek',
                                    'fri': 'petek',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u010Detrtletje',
                                    '2': '2. \u010Detrtletje',
                                    '3': '3. \u010Detrtletje',
                                    '4': '4. \u010Detrtletje'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. \u010Detrtletje',
                                    '2': '2. \u010Detrtletje',
                                    '3': '3. \u010Detrtletje',
                                    '4': '4. \u010Detrtletje'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'narrow': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'wide': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'narrow': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'wide': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'pred na\u0161im \u0161tetjem',
                                '0-alt-variant': 'BCE',
                                '1': 'na\u0161e \u0161tetje',
                                '1-alt-variant': 'po n. \u0161t.'
                            },
                            'eraAbbr': {
                                '0': 'pr. n. \u0161t.',
                                '0-alt-variant': 'BCE',
                                '1': 'po Kr.',
                                '1-alt-variant': 'po n. \u0161t.'
                            },
                            'eraNarrow': {
                                '0': 'pr. n. \u0161t.',
                                '0-alt-variant': 'BCE',
                                '1': 'po Kr.',
                                '1-alt-variant': 'po n. \u0161t.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, dd. MMMM y',
                            'long': 'dd. MMMM y',
                            'medium': 'd. MMM y',
                            'short': 'd. MM. yy'
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
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'EHms': 'E HH.mm.ss',
                                'Ehms': 'E h.mm.ss a',
                                'EHm': 'E HH.mm',
                                'Ehm': 'E h.mm a',
                                'Ed': 'E, d.',
                                'd': 'd',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'GyMMMEd': 'E, d. MMM y G',
                                'Gy': 'y G',
                                'GyM': 'M/y G',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E, d. MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd. M. y',
                                'yMEd': 'E, d. M. y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y'
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
                                    'd': 'E, d. \u2013 E, d. MMM',
                                    'M': 'E, d. MMM \u2013 E, d. MMM'
                                },
                                'MMMd': {
                                    'd': 'd.\u2013d. MMM',
                                    'M': 'd. MMM \u2013 d. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E, d. \u2013 E, d. M.',
                                    'M': 'E, d. M. \u2013 E, d. M.'
                                },
                                'Md': {
                                    'd': 'd. \u2013 d. M.',
                                    'M': 'd. M. \u2013 d. M.'
                                },
                                'M': {
                                    'M': 'M.\u2013M.'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'M.\u2013M. y',
                                    'y': 'M. y \u2013 M. y'
                                },
                                'yMd': {
                                    'd': 'd. M. y \u2013 d. M. y',
                                    'M': 'd. M. \u2013 d. M. y',
                                    'y': 'd. M. y \u2013 d. M. y'
                                },
                                'yMEd': {
                                    'd': 'E, d. \u2013 E, d. M. y',
                                    'M': 'E, d. M. \u2013 E, d. M. y',
                                    'y': 'E, d. M. y \u2013 E, d. M. y'
                                },
                                'yMMM': {
                                    'M': 'MMM \u2013 MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.\u2013d. MMM y',
                                    'M': 'd. MMM \u2013 d. MMM y',
                                    'y': 'd. MMM y \u2013 d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. MMM \u2013 E, d. MMM y',
                                    'M': 'E, d. MMM \u2013 E, d. MMM y',
                                    'y': 'E, d. MMM y \u2013 E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH.mm\u2013HH.mm v',
                                    'm': 'HH.mm\u2013HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm\u2013HH.mm',
                                    'm': 'HH.mm\u2013HH.mm'
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
                                    'd': 'd.\u2013d.'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate sr}. Language file for AstroDate.
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
        AstroDate.lang('sr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0434\u043D\u043E \u0432\u0440\u0435\u043C\u0435',
                    'regionFormat-type-daylight': '{0}, \u043B\u0435\u0442\u045A\u0435 \u0432\u0440\u0435\u043C\u0435',
                    'regionFormat': '\u0412\u0440\u0435\u043C\u0435 \u0443 \u0437\u0435\u043C\u0459\u0438: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HHmm;-HHmm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446',
                                    '11': '\u043D\u043E\u0432',
                                    '10': '\u043E\u043A\u0442',
                                    '9': '\u0441\u0435\u043F',
                                    '1': '\u0458\u0430\u043D',
                                    '2': '\u0444\u0435\u0431',
                                    '3': '\u043C\u0430\u0440',
                                    '4': '\u0430\u043F\u0440'
                                },
                                'narrow': {
                                    '8': '\u0430',
                                    '7': '\u0458',
                                    '6': '\u0458',
                                    '5': '\u043C',
                                    '12': '\u0434',
                                    '11': '\u043D',
                                    '10': '\u043E',
                                    '9': '\u0441',
                                    '1': '\u0458',
                                    '2': '\u0444',
                                    '3': '\u043C',
                                    '4': '\u0430'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                    '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                    '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                    '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                    '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                    '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                    '3': '\u043C\u0430\u0440\u0442',
                                    '4': '\u0430\u043F\u0440\u0438\u043B'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0430\u0432\u0433',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446',
                                    '11': '\u043D\u043E\u0432',
                                    '10': '\u043E\u043A\u0442',
                                    '9': '\u0441\u0435\u043F',
                                    '1': '\u0458\u0430\u043D',
                                    '2': '\u0444\u0435\u0431',
                                    '3': '\u043C\u0430\u0440',
                                    '4': '\u0430\u043F\u0440'
                                },
                                'narrow': {
                                    '8': '\u0430',
                                    '7': '\u0458',
                                    '6': '\u0458',
                                    '5': '\u043C',
                                    '12': '\u0434',
                                    '11': '\u043D',
                                    '10': '\u043E',
                                    '9': '\u0441',
                                    '1': '\u0458',
                                    '2': '\u0444',
                                    '3': '\u043C',
                                    '4': '\u0430'
                                },
                                'wide': {
                                    '8': '\u0430\u0432\u0433\u0443\u0441\u0442',
                                    '7': '\u0458\u0443\u043B',
                                    '6': '\u0458\u0443\u043D',
                                    '5': '\u043C\u0430\u0458',
                                    '12': '\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440',
                                    '11': '\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440',
                                    '10': '\u043E\u043A\u0442\u043E\u0431\u0430\u0440',
                                    '9': '\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440',
                                    '1': '\u0458\u0430\u043D\u0443\u0430\u0440',
                                    '2': '\u0444\u0435\u0431\u0440\u0443\u0430\u0440',
                                    '3': '\u043C\u0430\u0440\u0442',
                                    '4': '\u0430\u043F\u0440\u0438\u043B'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'narrow': {
                                    'sun': '\u043D',
                                    'mon': '\u043F',
                                    'tue': '\u0443',
                                    'wed': '\u0441',
                                    'thu': '\u0447',
                                    'fri': '\u043F',
                                    'sat': '\u0441'
                                },
                                'short': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                    'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                    'fri': '\u043F\u0435\u0442\u0430\u043A',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u043D\u0435\u0434',
                                    'mon': '\u043F\u043E\u043D',
                                    'tue': '\u0443\u0442\u043E',
                                    'wed': '\u0441\u0440\u0435',
                                    'thu': '\u0447\u0435\u0442',
                                    'fri': '\u043F\u0435\u0442',
                                    'sat': '\u0441\u0443\u0431'
                                },
                                'narrow': {
                                    'sun': '\u043D',
                                    'mon': '\u043F',
                                    'tue': '\u0443',
                                    'wed': '\u0441',
                                    'thu': '\u0447',
                                    'fri': '\u043F',
                                    'sat': '\u0441'
                                },
                                'short': {
                                    'sun': '\u043D\u0435',
                                    'mon': '\u043F\u043E',
                                    'tue': '\u0443\u0442',
                                    'wed': '\u0441\u0440',
                                    'thu': '\u0447\u0435',
                                    'fri': '\u043F\u0435',
                                    'sat': '\u0441\u0443'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0435\u0459\u0430',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A',
                                    'tue': '\u0443\u0442\u043E\u0440\u0430\u043A',
                                    'wed': '\u0441\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A',
                                    'fri': '\u043F\u0435\u0442\u0430\u043A',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u041A1',
                                    '2': '\u041A2',
                                    '3': '\u041A3',
                                    '4': '\u041A4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u041A1',
                                    '2': '\u041A2',
                                    '3': '\u041A3',
                                    '4': '\u041A4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '\u041F\u0440\u0432\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '2': '\u0414\u0440\u0443\u0433\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '3': '\u0422\u0440\u0435\u045B\u0435 \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435',
                                    '4': '\u0427\u0435\u0442\u0432\u0440\u0442\u043E \u0442\u0440\u043E\u043C\u0435\u0441\u0435\u0447\u0458\u0435'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'narrow': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'wide': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'narrow': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                },
                                'wide': {
                                    'am': '\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435',
                                    'pm': '\u043F\u043E\u043F\u043E\u0434\u043D\u0435'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u041F\u0440\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435',
                                '0-alt-variant': 'BCE',
                                '1': '\u041D\u043E\u0432\u0435 \u0435\u0440\u0435',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u043F. \u043D. \u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D. \u0435.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u043F.\u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, dd. MMMM y.',
                            'long': 'dd. MMMM y.',
                            'medium': 'dd.MM.y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMEd': 'E, d. M. y.',
                                'yMd': 'd. M. y.',
                                'yM': 'y-M',
                                'y': 'y.',
                                'ms': 'mm.ss',
                                'MMMMEd': 'E d. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMd': 'd. MMMM',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'hh a',
                                'H': 'HH',
                                'hm': 'hh.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'hh.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'yQQQQ': 'QQQQ. y',
                                'yQQQ': 'QQQ. y',
                                'yMMMM': 'MMMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMM': 'MMM y.',
                                'yMMdd': 'dd.MM.y',
                                'yMM': 'MM.y',
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'MMM y. G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, M-d',
                                'MMdd': 'MM-dd',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMdd': 'dd.MMM',
                                'MMMEd': 'E d. MMM'
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
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'MMMd': {
                                    'd': 'dd.-dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'E, d.M - E, d.M',
                                    'M': 'E, d.M - E, d.M'
                                },
                                'Md': {
                                    'd': 'd.M - d.M',
                                    'M': 'd.M - d.M'
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
                                    'M': 'y M - M',
                                    'y': 'y M - M'
                                },
                                'yMd': {
                                    'd': 'd.M.y. - d.M.y.',
                                    'M': 'd.M.y. - d.M.y.',
                                    'y': 'd.M.y. - d.M.y.'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y. - E, d.M.y.',
                                    'M': 'E, d.M.y. - E, d.M.y.',
                                    'y': 'E, d.M.y. - E, d.M.y.'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y.',
                                    'y': 'MMM y. - MMM y.'
                                },
                                'yMMMd': {
                                    'd': 'dd.-dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'y-MM \u2013 MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hmv': {
                                    'a': 'h.mm a - h.mm a v',
                                    'h': 'h.mm-h.mm a v',
                                    'm': 'h.mm-h.mm a v'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hm': {
                                    'a': 'h.mm a - h.mm a',
                                    'h': 'h.mm-h.mm a',
                                    'm': 'h.mm-h.mm a'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate sv}. Language file for AstroDate.
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
        AstroDate.lang('sv', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} (normaltid)',
                    'regionFormat-type-daylight': '{0} (sommartid)',
                    'regionFormat': '{0}tid',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;\u2212HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'aug',
                                    '7': 'jul',
                                    '6': 'jun',
                                    '5': 'maj',
                                    '12': 'dec',
                                    '11': 'nov',
                                    '10': 'okt',
                                    '9': 'sep',
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr'
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
                                    '8': 'augusti',
                                    '7': 'juli',
                                    '6': 'juni',
                                    '5': 'maj',
                                    '12': 'december',
                                    '11': 'november',
                                    '10': 'oktober',
                                    '9': 'september',
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'mars',
                                    '4': 'april'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'Maj',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Okt',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
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
                                    '8': 'Augusti',
                                    '7': 'Juli',
                                    '6': 'Juni',
                                    '5': 'Maj',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'Oktober',
                                    '9': 'September',
                                    '1': 'Januari',
                                    '2': 'Februari',
                                    '3': 'Mars',
                                    '4': 'April'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 's\u00F6n',
                                    'mon': 'm\u00E5n',
                                    'tue': 'tis',
                                    'wed': 'ons',
                                    'thu': 'tors',
                                    'fri': 'fre',
                                    'sat': 'l\u00F6r'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 's\u00F6',
                                    'mon': 'm\u00E5',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'l\u00F6'
                                },
                                'wide': {
                                    'sun': 's\u00F6ndag',
                                    'mon': 'm\u00E5ndag',
                                    'tue': 'tisdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'l\u00F6rdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'S\u00F6n',
                                    'mon': 'M\u00E5n',
                                    'tue': 'Tis',
                                    'wed': 'Ons',
                                    'thu': 'Tor',
                                    'fri': 'Fre',
                                    'sat': 'L\u00F6r'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'S\u00F6',
                                    'mon': 'M\u00E5',
                                    'tue': 'Ti',
                                    'wed': 'On',
                                    'thu': 'To',
                                    'fri': 'Fr',
                                    'sat': 'L\u00F6'
                                },
                                'wide': {
                                    'sun': 'S\u00F6ndag',
                                    'mon': 'M\u00E5ndag',
                                    'tue': 'Tisdag',
                                    'wed': 'Onsdag',
                                    'thu': 'Torsdag',
                                    'fri': 'Fredag',
                                    'sat': 'L\u00F6rdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'FM',
                                    'pm': 'EM'
                                },
                                'narrow': {
                                    'am': 'f',
                                    'pm': 'e'
                                },
                                'wide': {
                                    'am': 'fm',
                                    'pm': 'em'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'fm',
                                    'pm': 'em'
                                },
                                'narrow': {
                                    'am': 'f.m.',
                                    'pm': 'e.m.'
                                },
                                'wide': {
                                    'am': 'f\u00F6rmiddag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f\u00F6re Kristus',
                                '0-alt-variant': 'f\u00F6re v\u00E4sterl\u00E4ndsk tider\u00E4kning',
                                '1': 'efter Kristus',
                                '1-alt-variant': 'v\u00E4sterl\u00E4ndsk tider\u00E4kning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '0-alt-variant': 'fvt',
                                '1': 'e.Kr.',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'y-MM-dd'
                        },
                        'timeFormats': {
                            'full': '\'kl\'. HH:mm:ss zzzz',
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
                                'yMM': 'y-MM',
                                'yMEd': 'E, y-MM-dd',
                                'yMd': 'y-MM-dd',
                                'yM': 'y-MM',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'yQQQQ': 'y QQQQ',
                                'yQQQ': 'y QQQ',
                                'yMMMEd': 'E d MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMM': 'MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMd': 'd/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd:\'e\' MMMM',
                                'MMMMEd': 'E d:\'e\' MMMM',
                                'ms': 'mm:ss'
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
                                    'd': 'E d \u2013 E d MMM',
                                    'M': 'E d MMM \u2013 E d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'E d/M \u2013 E d/M',
                                    'M': 'E d/M \u2013 E d/M'
                                },
                                'Md': {
                                    'd': 'd\u2013d/M',
                                    'M': 'd/M \u2013 d/M'
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
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y-MM \u2013 MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd \u2013 dd',
                                    'M': 'y-MM-dd \u2013 MM-dd',
                                    'y': 'y-MM-dd \u2013 y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                    'M': 'E, y-MM-dd \u2013 E, y-MM-dd',
                                    'y': 'E, y-MM-dd \u2013 E, y-MM-dd'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM\u2013d MMM y',
                                    'y': 'd MMM y\u2013d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E dd MMM\u2013E dd MMM y',
                                    'M': 'E dd MMM\u2013E dd MMM y',
                                    'y': 'E dd MMM y\u2013E dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
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
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate th}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9318
 * timeZoneNames: 24r9318
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
        AstroDate.lang('th', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u0E40\u0E27\u0E25\u0E32\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19{0}',
                    'regionFormat-type-daylight': '\u0E40\u0E27\u0E25\u0E32\u0E2D\u0E2D\u0E21\u0E41\u0E2A\u0E07{0}',
                    'regionFormat': '\u0E40\u0E27\u0E25\u0E32{0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0E2A.\u0E04.',
                                    '7': '\u0E01.\u0E04.',
                                    '6': '\u0E21\u0E34.\u0E22.',
                                    '5': '\u0E1E.\u0E04.',
                                    '12': '\u0E18.\u0E04.',
                                    '11': '\u0E1E.\u0E22.',
                                    '10': '\u0E15.\u0E04.',
                                    '9': '\u0E01.\u0E22.',
                                    '1': '\u0E21.\u0E04.',
                                    '2': '\u0E01.\u0E1E.',
                                    '3': '\u0E21\u0E35.\u0E04.',
                                    '4': '\u0E40\u0E21.\u0E22.'
                                },
                                'narrow': {
                                    '8': '\u0E2A.\u0E04.',
                                    '7': '\u0E01.\u0E04.',
                                    '6': '\u0E21\u0E34.\u0E22.',
                                    '5': '\u0E1E.\u0E04.',
                                    '12': '\u0E18.\u0E04.',
                                    '11': '\u0E1E.\u0E22.',
                                    '10': '\u0E15.\u0E04.',
                                    '9': '\u0E01.\u0E22.',
                                    '1': '\u0E21.\u0E04.',
                                    '2': '\u0E01.\u0E1E.',
                                    '3': '\u0E21\u0E35.\u0E04.',
                                    '4': '\u0E40\u0E21.\u0E22.'
                                },
                                'wide': {
                                    '8': '\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21',
                                    '7': '\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21',
                                    '6': '\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
                                    '5': '\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21',
                                    '12': '\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21',
                                    '11': '\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19',
                                    '10': '\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21',
                                    '9': '\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
                                    '1': '\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21',
                                    '2': '\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C',
                                    '3': '\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
                                    '4': '\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0E2A.\u0E04.',
                                    '7': '\u0E01.\u0E04.',
                                    '6': '\u0E21\u0E34.\u0E22.',
                                    '5': '\u0E1E.\u0E04.',
                                    '12': '\u0E18.\u0E04.',
                                    '11': '\u0E1E.\u0E22.',
                                    '10': '\u0E15.\u0E04.',
                                    '9': '\u0E01.\u0E22.',
                                    '1': '\u0E21.\u0E04.',
                                    '2': '\u0E01.\u0E1E.',
                                    '3': '\u0E21\u0E35.\u0E04.',
                                    '4': '\u0E40\u0E21.\u0E22.'
                                },
                                'narrow': {
                                    '8': '\u0E2A.\u0E04.',
                                    '7': '\u0E01.\u0E04.',
                                    '6': '\u0E21\u0E34.\u0E22.',
                                    '5': '\u0E1E.\u0E04.',
                                    '12': '\u0E18.\u0E04.',
                                    '11': '\u0E1E.\u0E22.',
                                    '10': '\u0E15.\u0E04.',
                                    '9': '\u0E01.\u0E22.',
                                    '1': '\u0E21.\u0E04.',
                                    '2': '\u0E01.\u0E1E.',
                                    '3': '\u0E21\u0E35.\u0E04.',
                                    '4': '\u0E40\u0E21.\u0E22.'
                                },
                                'wide': {
                                    '8': '\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21',
                                    '7': '\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21',
                                    '6': '\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19',
                                    '5': '\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21',
                                    '12': '\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21',
                                    '11': '\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19',
                                    '10': '\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21',
                                    '9': '\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19',
                                    '1': '\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21',
                                    '2': '\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C',
                                    '3': '\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21',
                                    '4': '\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u0E2D\u0E32.',
                                    'mon': '\u0E08.',
                                    'tue': '\u0E2D.',
                                    'wed': '\u0E1E.',
                                    'thu': '\u0E1E\u0E24.',
                                    'fri': '\u0E28.',
                                    'sat': '\u0E2A.'
                                },
                                'narrow': {
                                    'sun': '\u0E2D\u0E32',
                                    'mon': '\u0E08',
                                    'tue': '\u0E2D',
                                    'wed': '\u0E1E',
                                    'thu': '\u0E1E\u0E24',
                                    'fri': '\u0E28',
                                    'sat': '\u0E2A'
                                },
                                'short': {
                                    'sun': '\u0E2D\u0E32.',
                                    'mon': '\u0E08.',
                                    'tue': '\u0E2D.',
                                    'wed': '\u0E1E.',
                                    'thu': '\u0E1E\u0E24.',
                                    'fri': '\u0E28.',
                                    'sat': '\u0E2A.'
                                },
                                'wide': {
                                    'sun': '\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C',
                                    'mon': '\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C',
                                    'tue': '\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23',
                                    'wed': '\u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18',
                                    'thu': '\u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35',
                                    'fri': '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C',
                                    'sat': '\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u0E2D\u0E32.',
                                    'mon': '\u0E08.',
                                    'tue': '\u0E2D.',
                                    'wed': '\u0E1E.',
                                    'thu': '\u0E1E\u0E24.',
                                    'fri': '\u0E28.',
                                    'sat': '\u0E2A.'
                                },
                                'narrow': {
                                    'sun': '\u0E2D\u0E32',
                                    'mon': '\u0E08',
                                    'tue': '\u0E2D',
                                    'wed': '\u0E1E',
                                    'thu': '\u0E1E\u0E24',
                                    'fri': '\u0E28',
                                    'sat': '\u0E2A'
                                },
                                'short': {
                                    'sun': '\u0E2D\u0E32.',
                                    'mon': '\u0E08.',
                                    'tue': '\u0E2D.',
                                    'wed': '\u0E1E.',
                                    'thu': '\u0E1E\u0E24.',
                                    'fri': '\u0E28.',
                                    'sat': '\u0E2A.'
                                },
                                'wide': {
                                    'sun': '\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C',
                                    'mon': '\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C',
                                    'tue': '\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23',
                                    'wed': '\u0E27\u0E31\u0E19\u0E1E\u0E38\u0E18',
                                    'thu': '\u0E27\u0E31\u0E19\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35',
                                    'fri': '\u0E27\u0E31\u0E19\u0E28\u0E38\u0E01\u0E23\u0E4C',
                                    'sat': '\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                    '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                    '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                    '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                    '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                    '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                    '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                    '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                    '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                    '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 1',
                                    '2': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 2',
                                    '3': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 3',
                                    '4': '\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                },
                                'narrow': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                },
                                'wide': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                },
                                'narrow': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                },
                                'wide': {
                                    'am': '\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07',
                                    'pm': '\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                                '0-alt-variant': '\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E32\u0E21\u0E31\u0E0D\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                                '1': '\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A',
                                '1-alt-variant': '\u0E2A\u0E32\u0E21\u0E31\u0E0D\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A'
                            },
                            'eraAbbr': {
                                '0': '\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19 \u0E04.\u0E28.',
                                '0-alt-variant': '\u0E01.\u0E2A.\u0E28.',
                                '1': '\u0E04.\u0E28.',
                                '1-alt-variant': '\u0E2A.\u0E28.'
                            },
                            'eraNarrow': {
                                '0': '\u0E01\u0E48\u0E2D\u0E19 \u0E04.\u0E28.',
                                '0-alt-variant': '\u0E01.\u0E2A.\u0E28.',
                                '1': '\u0E04.\u0E28.',
                                '1-alt-variant': '\u0E2A.\u0E28.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE\u0E17\u0E35\u0E48 d MMMM G y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 zzzz',
                            'long': 'H \u0E19\u0E32\u0E2C\u0E34\u0E01\u0E32 mm \u0E19\u0E32\u0E17\u0E35 ss \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35 z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'd MMM y',
                                'yMMM': 'MMM y',
                                'yMEd': 'E d/M/y',
                                'yMd': 'd/M/y',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E d',
                                'd': 'd',
                                'GyMMMd': 'd MMM G y',
                                'GyMMMEd': 'E d MMM G y',
                                'h': 'h a',
                                'H': 'HH',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E d MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'MMM G y',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E d MMMM',
                                'mmss': 'mm:ss',
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
                                    'd': 'd - d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MEd': {
                                    'd': 'E d - E d/M',
                                    'M': 'E d - E d/M'
                                },
                                'Md': {
                                    'd': 'd/M - d/M',
                                    'M': 'd/M - d/M'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'M/y - M/y',
                                    'y': 'M/y - M/y'
                                },
                                'yMd': {
                                    'd': 'd-d/M/y',
                                    'M': 'd/M/y - d/M/y',
                                    'y': 'd/M/y - d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E d - E d/M/y',
                                    'M': 'E d/M/y - E d/M/y',
                                    'y': 'E d/M/y - E d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM\u2013MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
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
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'd': {
                                    'd': 'd-d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate tr}. Language file for AstroDate.
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
        AstroDate.lang('tr', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Standart Saati',
                    'regionFormat-type-daylight': '{0} Yaz Saati',
                    'regionFormat': '{0} Saati',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'A\u011Fu',
                                    '7': 'Tem',
                                    '6': 'Haz',
                                    '5': 'May',
                                    '12': 'Ara',
                                    '11': 'Kas',
                                    '10': 'Eki',
                                    '9': 'Eyl',
                                    '1': 'Oca',
                                    '2': '\u015Eub',
                                    '3': 'Mar',
                                    '4': 'Nis'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'T',
                                    '6': 'H',
                                    '5': 'M',
                                    '12': 'A',
                                    '11': 'K',
                                    '10': 'E',
                                    '9': 'E',
                                    '1': 'O',
                                    '2': '\u015E',
                                    '3': 'M',
                                    '4': 'N'
                                },
                                'wide': {
                                    '8': 'A\u011Fustos',
                                    '7': 'Temmuz',
                                    '6': 'Haziran',
                                    '5': 'May\u0131s',
                                    '12': 'Aral\u0131k',
                                    '11': 'Kas\u0131m',
                                    '10': 'Ekim',
                                    '9': 'Eyl\u00FCl',
                                    '1': 'Ocak',
                                    '2': '\u015Eubat',
                                    '3': 'Mart',
                                    '4': 'Nisan'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'A\u011Fu',
                                    '7': 'Tem',
                                    '6': 'Haz',
                                    '5': 'May',
                                    '12': 'Ara',
                                    '11': 'Kas',
                                    '10': 'Eki',
                                    '9': 'Eyl',
                                    '1': 'Oca',
                                    '2': '\u015Eub',
                                    '3': 'Mar',
                                    '4': 'Nis'
                                },
                                'narrow': {
                                    '8': 'A',
                                    '7': 'T',
                                    '6': 'H',
                                    '5': 'M',
                                    '12': 'A',
                                    '11': 'K',
                                    '10': 'E',
                                    '9': 'E',
                                    '1': 'O',
                                    '2': '\u015E',
                                    '3': 'M',
                                    '4': 'N'
                                },
                                'wide': {
                                    '8': 'A\u011Fustos',
                                    '7': 'Temmuz',
                                    '6': 'Haziran',
                                    '5': 'May\u0131s',
                                    '12': 'Aral\u0131k',
                                    '11': 'Kas\u0131m',
                                    '10': 'Ekim',
                                    '9': 'Eyl\u00FCl',
                                    '1': 'Ocak',
                                    '2': '\u015Eubat',
                                    '3': 'Mart',
                                    '4': 'Nisan'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': '\u00C7ar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': '\u00C7',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': '\u00C7a',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Sal\u0131',
                                    'wed': '\u00C7ar\u015Famba',
                                    'thu': 'Per\u015Fembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': '\u00C7ar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': '\u00C7',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': '\u00C7a',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Sal\u0131',
                                    'wed': '\u00C7ar\u015Famba',
                                    'thu': 'Per\u015Fembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '\u00C71',
                                    '2': '\u00C72',
                                    '3': '\u00C73',
                                    '4': '\u00C74'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. \u00E7eyrek',
                                    '2': '2. \u00E7eyrek',
                                    '3': '3. \u00E7eyrek',
                                    '4': '4. \u00E7eyrek'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '\u00C71',
                                    '2': '\u00C72',
                                    '3': '\u00C73',
                                    '4': '\u00C74'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. \u00E7eyrek',
                                    '2': '2. \u00E7eyrek',
                                    '3': '3. \u00E7eyrek',
                                    '4': '4. \u00E7eyrek'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'narrow': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'wide': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'narrow': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                },
                                'wide': {
                                    'am': '\u00D6\u00D6',
                                    'pm': '\u00D6S'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Milattan \u00D6nce',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'Milattan Sonra',
                                '1-alt-variant': '\u0130S'
                            },
                            'eraAbbr': {
                                '0': 'M\u00D6',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'MS',
                                '1-alt-variant': '\u0130S'
                            },
                            'eraNarrow': {
                                '0': 'M\u00D6',
                                '0-alt-variant': '\u0130\u00D6',
                                '1': 'MS',
                                '1-alt-variant': '\u0130S'
                            }
                        },
                        'dateFormats': {
                            'full': 'd MMMM y EEEE',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd.MM.y'
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
                                'yMMM': 'MMM y',
                                'yMM': 'MM.y',
                                'yMEd': 'dd.MM.y E',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM/y',
                                'Ehm': 'E a h:mm',
                                'Ed': 'd E',
                                'd': 'd',
                                'GyMMMd': 'G dd MMM y',
                                'GyMMMEd': 'G d MMM y E',
                                'h': 'a h',
                                'H': 'HH',
                                'hm': 'a h:mm',
                                'yQQQQ': 'y/QQQQ',
                                'yQQQ': 'y/QQQ',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'd MMM y E',
                                'yMMMd': 'dd MMM y',
                                'Hms': 'HH:mm:ss',
                                'hms': 'a h:mm:ss',
                                'Hm': 'HH:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G MMM y',
                                'M': 'L',
                                'Md': 'dd/MM',
                                'MEd': 'dd/MM E',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'd MMMM E',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'dd MMMM E',
                                'mmss': 'mm:ss',
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
                                    'd': 'd MMM E \u2013 d MMM E',
                                    'M': 'd MMM E \u2013 d MMM E'
                                },
                                'MMMd': {
                                    'd': 'd \u2013 d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'MMM\u2013MMM'
                                },
                                'MEd': {
                                    'd': 'dd/MM E \u2013 dd/MM E',
                                    'M': 'dd/MM E \u2013 dd/MM E'
                                },
                                'Md': {
                                    'd': 'dd/MM \u2013 dd/MM',
                                    'M': 'dd/MM \u2013 dd/MM'
                                },
                                'M': {
                                    'M': 'MM\u2013MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'a h \u2013 a h v',
                                    'h': 'a h\u2013h v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM/y \u2013 MM/y',
                                    'y': 'MM/y \u2013 MM/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'dd.MM.y E \u2013 dd.MM.y E',
                                    'M': 'dd.MM.y E \u2013 dd.MM.y E',
                                    'y': 'dd.MM.y E \u2013 dd.MM.y E'
                                },
                                'yMMM': {
                                    'M': 'MMM\u2013MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'd MMM y E \u2013 d MMM y E',
                                    'M': 'd MMM y E \u2013 d MMM y E',
                                    'y': 'd MMM y E \u2013 d MMM y E'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'a h:mm \u2013 a h:mm v',
                                    'h': 'a h:mm\u2013h:mm v',
                                    'm': 'a h:mm\u2013h:mm v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'a h:mm \u2013 a h:mm',
                                    'h': 'a h:mm\u2013h:mm',
                                    'm': 'a h:mm\u2013h:mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'a h \u2013 a h',
                                    'h': 'a h\u2013h'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate uk}. Language file for AstroDate.
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
        AstroDate.lang('uk', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '\u0427\u0430\u0441: {0}, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0438\u0439',
                    'regionFormat-type-daylight': '\u0427\u0430\u0441: {0}, \u043B\u0456\u0442\u043D\u0456\u0439',
                    'regionFormat': '\u0427\u0430\u0441: {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '\u0441\u0435\u0440\u043F.',
                                    '7': '\u043B\u0438\u043F.',
                                    '6': '\u0447\u0435\u0440\u0432.',
                                    '5': '\u0442\u0440\u0430\u0432.',
                                    '12': '\u0433\u0440\u0443\u0434.',
                                    '11': '\u043B\u0438\u0441\u0442.',
                                    '10': '\u0436\u043E\u0432\u0442.',
                                    '9': '\u0432\u0435\u0440.',
                                    '1': '\u0441\u0456\u0447.',
                                    '2': '\u043B\u044E\u0442.',
                                    '3': '\u0431\u0435\u0440.',
                                    '4': '\u043A\u0432\u0456\u0442.'
                                },
                                'narrow': {
                                    '8': '\u0421',
                                    '7': '\u041B',
                                    '6': '\u0427',
                                    '5': '\u0422',
                                    '12': '\u0413',
                                    '11': '\u041B',
                                    '10': '\u0416',
                                    '9': '\u0412',
                                    '1': '\u0421',
                                    '2': '\u041B',
                                    '3': '\u0411',
                                    '4': '\u041A'
                                },
                                'wide': {
                                    '8': '\u0441\u0435\u0440\u043F\u043D\u044F',
                                    '7': '\u043B\u0438\u043F\u043D\u044F',
                                    '6': '\u0447\u0435\u0440\u0432\u043D\u044F',
                                    '5': '\u0442\u0440\u0430\u0432\u043D\u044F',
                                    '12': '\u0433\u0440\u0443\u0434\u043D\u044F',
                                    '11': '\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430',
                                    '10': '\u0436\u043E\u0432\u0442\u043D\u044F',
                                    '9': '\u0432\u0435\u0440\u0435\u0441\u043D\u044F',
                                    '1': '\u0441\u0456\u0447\u043D\u044F',
                                    '2': '\u043B\u044E\u0442\u043E\u0433\u043E',
                                    '3': '\u0431\u0435\u0440\u0435\u0437\u043D\u044F',
                                    '4': '\u043A\u0432\u0456\u0442\u043D\u044F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '\u0421\u0435\u0440',
                                    '7': '\u041B\u0438\u043F',
                                    '6': '\u0427\u0435\u0440',
                                    '5': '\u0422\u0440\u0430',
                                    '12': '\u0413\u0440\u0443',
                                    '11': '\u041B\u0438\u0441',
                                    '10': '\u0416\u043E\u0432',
                                    '9': '\u0412\u0435\u0440',
                                    '1': '\u0421\u0456\u0447',
                                    '2': '\u041B\u044E\u0442',
                                    '3': '\u0411\u0435\u0440',
                                    '4': '\u041A\u0432\u0456'
                                },
                                'narrow': {
                                    '8': '\u0421',
                                    '7': '\u041B',
                                    '6': '\u0427',
                                    '5': '\u0422',
                                    '12': '\u0413',
                                    '11': '\u041B',
                                    '10': '\u0416',
                                    '9': '\u0412',
                                    '1': '\u0421',
                                    '2': '\u041B',
                                    '3': '\u0411',
                                    '4': '\u041A'
                                },
                                'wide': {
                                    '8': '\u0421\u0435\u0440\u043F\u0435\u043D\u044C',
                                    '7': '\u041B\u0438\u043F\u0435\u043D\u044C',
                                    '6': '\u0427\u0435\u0440\u0432\u0435\u043D\u044C',
                                    '5': '\u0422\u0440\u0430\u0432\u0435\u043D\u044C',
                                    '12': '\u0413\u0440\u0443\u0434\u0435\u043D\u044C',
                                    '11': '\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434',
                                    '10': '\u0416\u043E\u0432\u0442\u0435\u043D\u044C',
                                    '9': '\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C',
                                    '1': '\u0421\u0456\u0447\u0435\u043D\u044C',
                                    '2': '\u041B\u044E\u0442\u0438\u0439',
                                    '3': '\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C',
                                    '4': '\u041A\u0432\u0456\u0442\u0435\u043D\u044C'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u041D',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'wide': {
                                    'sun': '\u043D\u0435\u0434\u0456\u043B\u044F',
                                    'mon': '\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                    'tue': '\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                    'wed': '\u0441\u0435\u0440\u0435\u0434\u0430',
                                    'thu': '\u0447\u0435\u0442\u0432\u0435\u0440',
                                    'fri': '\u043F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                    'sat': '\u0441\u0443\u0431\u043E\u0442\u0430'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'narrow': {
                                    'sun': '\u041D',
                                    'mon': '\u041F',
                                    'tue': '\u0412',
                                    'wed': '\u0421',
                                    'thu': '\u0427',
                                    'fri': '\u041F',
                                    'sat': '\u0421'
                                },
                                'short': {
                                    'sun': '\u041D\u0434',
                                    'mon': '\u041F\u043D',
                                    'tue': '\u0412\u0442',
                                    'wed': '\u0421\u0440',
                                    'thu': '\u0427\u0442',
                                    'fri': '\u041F\u0442',
                                    'sat': '\u0421\u0431'
                                },
                                'wide': {
                                    'sun': '\u041D\u0435\u0434\u0456\u043B\u044F',
                                    'mon': '\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A',
                                    'tue': '\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A',
                                    'wed': '\u0421\u0435\u0440\u0435\u0434\u0430',
                                    'thu': '\u0427\u0435\u0442\u0432\u0435\u0440',
                                    'fri': '\u041F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F',
                                    'sat': '\u0421\u0443\u0431\u043E\u0442\u0430'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'I \u043A\u0432.',
                                    '2': 'II \u043A\u0432.',
                                    '3': 'III \u043A\u0432.',
                                    '4': 'IV \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': 'II \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': 'III \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': 'IV \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1-\u0439 \u043A\u0432.',
                                    '2': '2-\u0439 \u043A\u0432.',
                                    '3': '3-\u0439 \u043A\u0432.',
                                    '4': '4-\u0439 \u043A\u0432.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '2': '2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '3': '3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B',
                                    '4': '4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'narrow': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'narrow': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                },
                                'wide': {
                                    'afternoon': '\u0434\u043D\u044F',
                                    'am': '\u0434\u043F',
                                    'evening': '\u0432\u0435\u0447\u043E\u0440\u0430',
                                    'morning': '\u0440\u0430\u043D\u043A\u0443',
                                    'night': '\u043D\u043E\u0447\u0456',
                                    'pm': '\u043F\u043F'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u0434\u043E \u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u0434\u043E \u043D.\u0435.',
                                '0-alt-variant': 'BCE',
                                '1': '\u043D.\u0435.',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'\u0440\'.',
                            'long': 'd MMMM y \'\u0440\'.',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.yy'
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
                                'yMMM': 'LLL y',
                                'yMEd': 'E, dd.MM.y',
                                'yMd': 'dd.MM.y',
                                'yM': 'MM.y',
                                'y': 'y',
                                'Ehm': 'E h:mm a',
                                'Ed': 'E, d',
                                'd': 'd',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'yQQQQ': 'QQQQ y \'\u0440\'.',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'LLLL y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMd': 'd MMM y',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'HHmmss': 'HH:mm:ss',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss'
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
                                    'd': 'E, d \u2013 E, d MMM',
                                    'M': 'E, d MMM \u2013 E, d MMM'
                                },
                                'MMMd': {
                                    'd': 'd\u2013d MMM',
                                    'M': 'd MMM \u2013 d MMM'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM \u2013 E, dd.MM',
                                    'M': 'E, dd.MM \u2013 E, dd.MM'
                                },
                                'Md': {
                                    'd': 'dd.MM \u2013 dd.MM',
                                    'M': 'dd.MM \u2013 dd.MM'
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
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'MM.y \u2013 MM.y',
                                    'y': 'MM.y \u2013 MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y \u2013 dd.MM.y',
                                    'M': 'dd.MM.y \u2013 dd.MM.y',
                                    'y': 'dd.MM.y \u2013 dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                    'M': 'E, dd.MM.y \u2013 E, dd.MM.y',
                                    'y': 'E, dd.MM.y \u2013 E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL\u2013LLL y',
                                    'y': 'LLL y \u2013 LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd\u2013d MMM y',
                                    'M': 'd MMM \u2013 d MMM y',
                                    'y': 'd MMM y \u2013 d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d \u2013 E, d MMM y',
                                    'M': 'E, d MMM \u2013 E, d MMM y',
                                    'y': 'E, d MMM y \u2013 E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL \u2013 LLLL y',
                                    'y': 'LLLL y \u2013 LLLL y'
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
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate vi}. Language file for AstroDate.
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
        AstroDate.lang('vi', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': 'Gi\u1EDD chu\u1EA9n {0}',
                    'regionFormat-type-daylight': 'Gi\u1EDD ban ng\u00E0y {0}',
                    'regionFormat': 'Gi\u1EDD {0}',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'thg 8',
                                    '7': 'thg 7',
                                    '6': 'thg 6',
                                    '5': 'thg 5',
                                    '12': 'thg 12',
                                    '11': 'thg 11',
                                    '10': 'thg 10',
                                    '9': 'thg 9',
                                    '1': 'thg 1',
                                    '2': 'thg 2',
                                    '3': 'thg 3',
                                    '4': 'thg 4'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'th\u00E1ng 8',
                                    '7': 'th\u00E1ng 7',
                                    '6': 'th\u00E1ng 6',
                                    '5': 'th\u00E1ng 5',
                                    '12': 'th\u00E1ng 12',
                                    '11': 'th\u00E1ng 11',
                                    '10': 'th\u00E1ng 10',
                                    '9': 'th\u00E1ng 9',
                                    '1': 'th\u00E1ng 1',
                                    '2': 'th\u00E1ng 2',
                                    '3': 'th\u00E1ng 3',
                                    '4': 'th\u00E1ng 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Thg 8',
                                    '7': 'Thg 7',
                                    '6': 'Thg 6',
                                    '5': 'Thg 5',
                                    '12': 'Thg 12',
                                    '11': 'Thg 11',
                                    '10': 'Thg 10',
                                    '9': 'Thg 9',
                                    '1': 'Thg 1',
                                    '2': 'Thg 2',
                                    '3': 'Thg 3',
                                    '4': 'Thg 4'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'Th\u00E1ng 8',
                                    '7': 'Th\u00E1ng 7',
                                    '6': 'Th\u00E1ng 6',
                                    '5': 'Th\u00E1ng 5',
                                    '12': 'Th\u00E1ng 12',
                                    '11': 'Th\u00E1ng 11',
                                    '10': 'Th\u00E1ng 10',
                                    '9': 'Th\u00E1ng 9',
                                    '1': 'Th\u00E1ng 1',
                                    '2': 'Th\u00E1ng 2',
                                    '3': 'Th\u00E1ng 3',
                                    '4': 'Th\u00E1ng 4'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Ch\u1EE7 Nh\u1EADt',
                                    'mon': 'Th\u1EE9 Hai',
                                    'tue': 'Th\u1EE9 Ba',
                                    'wed': 'Th\u1EE9 T\u01B0',
                                    'thu': 'Th\u1EE9 N\u0103m',
                                    'fri': 'Th\u1EE9 S\u00E1u',
                                    'sat': 'Th\u1EE9 B\u1EA3y'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Ch\u1EE7 Nh\u1EADt',
                                    'mon': 'Th\u1EE9 Hai',
                                    'tue': 'Th\u1EE9 Ba',
                                    'wed': 'Th\u1EE9 T\u01B0',
                                    'thu': 'Th\u1EE9 N\u0103m',
                                    'fri': 'Th\u1EE9 S\u00E1u',
                                    'sat': 'Th\u1EE9 B\u1EA3y'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Qu\u00FD 1',
                                    '2': 'Qu\u00FD 2',
                                    '3': 'Qu\u00FD 3',
                                    '4': 'Qu\u00FD 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Qu\u00FD 1',
                                    '2': 'Qu\u00FD 2',
                                    '3': 'Qu\u00FD 3',
                                    '4': 'Qu\u00FD 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'tr. CN',
                                '0-alt-variant': 'BCE',
                                '1': 'sau CN',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, \'ng\u00E0y\' dd MMMM \'n\u0103m\' y',
                            'long': '\'Ng\u00E0y\' dd \'th\u00E1ng\' MM \'n\u0103m\' y',
                            'medium': 'dd-MM-y',
                            'short': 'dd/MM/y'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{0} {1}',
                            'long': '{0} {1}',
                            'medium': '{0} {1}',
                            'short': '{0} {1}',
                            'availableFormats': {
                                'yMM': 'MM-y',
                                'yMEd': 'E, dd-M-y',
                                'yMd': 'd/M/y',
                                'yM': 'M/y',
                                'y': '\'N\u0103m\' y',
                                'ms': 'mm:ss',
                                'Ed': 'E, dd',
                                'd': 'd',
                                'GyMMMd': 'dd MMM, y G',
                                'GyMMMEd': 'E, dd MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'yQQQQ': 'QQQQ y',
                                'yQQQ': 'QQQ y',
                                'yMMMM': 'MMMM y',
                                'yMMMEd': 'E, dd MMM y',
                                'yMMMd': 'dd MMM, y',
                                'yMMM': 'MMM y',
                                'Hms': 'H:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': '\'N\u0103m\' y G',
                                'GyMMM': 'MMM y G',
                                'M': 'L',
                                'Md': 'dd-M',
                                'MEd': 'E, dd-M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'dd MMM',
                                'MMMEd': 'E, dd MMM',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'E, dd MMMM',
                                'mmss': 'mm:ss'
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
                                    'd': 'EEEE, \'ng\u00E0y\' dd - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M',
                                    'M': 'EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M - EEEE, \'ng\u00E0y\' dd \'th\u00E1ng\' M'
                                },
                                'MMMd': {
                                    'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M',
                                    'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MEd': {
                                    'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                    'M': 'EEEE, dd/MM - EEEE, dd/MM'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'M': {
                                    'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M'
                                },
                                'Hv': {
                                    'H': 'HH\'h\'-HH\'h\' v'
                                },
                                'hv': {
                                    'a': 'h\'h\' a - h\'h\' a v',
                                    'h': 'h\'h\'-h\'h\' a v'
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
                                    'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': '\'Th\u00E1ng\' M - \'Th\u00E1ng\' M \'n\u0103m\' y',
                                    'y': '\'Th\u00E1ng\' M \'n\u0103m\' y - \'Th\u00E1ng\' M \'n\u0103m\' y'
                                },
                                'yMMMd': {
                                    'd': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                    'M': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y',
                                    'y': '\'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y - \'Ng\u00E0y\' dd \'th\u00E1ng\' M \'n\u0103m\' y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE, \'ng\u00E0y\' dd MMM - EEEE, \'ng\u00E0y\' dd MMM \'n\u0103m\' y',
                                    'M': 'E, dd \'th\u00E1ng\' M - E, dd \'th\u00E1ng\' M, y',
                                    'y': 'E, dd \'th\u00E1ng\' M, y - E, dd \'th\u00E1ng\' M, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'd': {
                                    'd': '\'Ng\u00E0y\' dd-dd'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate zh-Hant}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('zh-Hant', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1}\uFF08{0}\uFF09',
                    'regionFormat-type-standard': '{0} (+0)',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat': '{0}\u6642\u9593',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u9031\u65E5',
                                    'mon': '\u9031\u4E00',
                                    'tue': '\u9031\u4E8C',
                                    'wed': '\u9031\u4E09',
                                    'thu': '\u9031\u56DB',
                                    'fri': '\u9031\u4E94',
                                    'sat': '\u9031\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u9031\u65E5',
                                    'mon': '\u9031\u4E00',
                                    'tue': '\u9031\u4E8C',
                                    'wed': '\u9031\u4E09',
                                    'thu': '\u9031\u56DB',
                                    'fri': '\u9031\u4E94',
                                    'sat': '\u9031\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1\u5B63',
                                    '2': '2\u5B63',
                                    '3': '3\u5B63',
                                    '4': '4\u5B63'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C1\u5B63',
                                    '2': '\u7B2C2\u5B63',
                                    '3': '\u7B2C3\u5B63',
                                    '4': '\u7B2C4\u5B63'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1\u5B63',
                                    '2': '2\u5B63',
                                    '3': '3\u5B63',
                                    '4': '4\u5B63'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C1\u5B63',
                                    '2': '\u7B2C2\u5B63',
                                    '3': '\u7B2C3\u5B63',
                                    '4': '\u7B2C4\u5B63'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u897F\u5143\u524D',
                                '0-alt-variant': '\u516C\u5143\u524D',
                                '1': '\u897F\u5143',
                                '1-alt-variant': '\u516C\u5143'
                            },
                            'eraAbbr': {
                                '0': '\u897F\u5143\u524D',
                                '0-alt-variant': '\u516C\u5143\u524D',
                                '1': '\u897F\u5143',
                                '1-alt-variant': '\u516C\u5143'
                            },
                            'eraNarrow': {
                                '0': '\u897F\u5143\u524D',
                                '0-alt-variant': '\u516C\u5143\u524D',
                                '1': '\u897F\u5143',
                                '1-alt-variant': '\u516C\u5143'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\u5E74M\u6708d\u65E5EEEE',
                            'long': 'y\u5E74M\u6708d\u65E5',
                            'medium': 'y\u5E74M\u6708d\u65E5',
                            'short': 'y/M/d'
                        },
                        'timeFormats': {
                            'full': 'zzzzah\u6642mm\u5206ss\u79D2',
                            'long': 'zah\u6642mm\u5206ss\u79D2',
                            'medium': 'ah:mm:ss',
                            'short': 'ah:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}{0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'y\u5E74M\u6708d\u65E5',
                                'yMMM': 'y\u5E74M\u6708',
                                'yMM': 'y-MM',
                                'yMEd': 'y/M/d\uFF08E\uFF09',
                                'EHm': 'E HH:mm',
                                'Ehm': 'E a h:mm',
                                'Ed': 'd\u65E5\uFF08E\uFF09',
                                'd': 'd\u65E5',
                                'GyMMMd': 'G y \u5E74 M \u6708 d \u65E5',
                                'GyMMMEd': 'G y \u5E74 M \u6708 d \u65E5E',
                                'h': 'ah\u6642',
                                'H': 'H\u6642',
                                'yQQQQ': 'y\u5E74QQQQ',
                                'yQQQ': 'y\u5E74QQQ',
                                'yMMMM': 'y\u5E74M\u6708',
                                'yMMMEd': 'y\u5E74M\u6708d\u65E5E',
                                'Hms': 'HH:mm:ss',
                                'hms': 'ah:mm:ss',
                                'Hm': 'HH:mm',
                                'hm': 'ah:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y \u5E74',
                                'GyMMM': 'G y \u5E74 M \u6708',
                                'M': 'M\u6708',
                                'Md': 'M/d',
                                'MEd': 'M/d\uFF08E\uFF09',
                                'MMdd': 'MM/dd',
                                'MMM': 'LLL',
                                'MMMd': 'M\u6708d\u65E5',
                                'MMMEd': 'M\u6708d\u65E5E',
                                'MMMMdd': 'M\u6708dd\u65E5',
                                'ms': 'mm:ss',
                                'y': 'y\u5E74',
                                'yM': 'y/M',
                                'yMd': 'y/M/d'
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
                                    'd': 'M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'M\u6708d\u65E5E\u81F3M\u6708d\u65E5E'
                                },
                                'MMMd': {
                                    'd': 'M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'M\u6708d\u65E5\u81F3M\u6708d\u65E5'
                                },
                                'MMM': {
                                    'M': 'LLL\u81F3LLL'
                                },
                                'MEd': {
                                    'd': 'M/dE\u81F3M/dE',
                                    'M': 'M/dE\u81F3M/dE'
                                },
                                'Md': {
                                    'd': 'M/d\u81F3M/d',
                                    'M': 'M/d\u81F3M/d'
                                },
                                'M': {
                                    'M': 'M\u6708\u81F3M\u6708'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH [v]'
                                },
                                'hv': {
                                    'a': 'a h \u6642\u81F3a h \u6642 [v]',
                                    'h': 'a h \u6642\u81F3 h \u6642 [v]'
                                },
                                'intervalFormatFallback': '{0}\u81F3{1}',
                                'y': {
                                    'y': 'y\u81F3y'
                                },
                                'yM': {
                                    'M': 'y/M\u81F3y/M',
                                    'y': 'y/M\u81F3y/M'
                                },
                                'yMd': {
                                    'd': 'y/M/d\u81F3y/M/d',
                                    'M': 'y/M/d\u81F3y/M/d',
                                    'y': 'y/M/d\u81F3y/M/d'
                                },
                                'yMEd': {
                                    'd': 'y/M/dE\u81F3y/M/dE',
                                    'M': 'y/M/dE\u81F3y/M/dE',
                                    'y': 'y/M/dE\u81F3y/M/dE'
                                },
                                'yMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'yMMMd': {
                                    'd': 'y\u5E74M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'y\u5E74M\u6708d\u65E5\u81F3M\u6708d\u65E5',
                                    'y': 'y\u5E74M\u6708d\u65E5\u81F3y\u5E74M\u6708d\u65E5'
                                },
                                'yMMMEd': {
                                    'd': 'y\u5E74M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'y\u5E74M\u6708d\u65E5E\u81F3M\u6708d\u65E5E',
                                    'y': 'y\u5E74M\u6708d\u65E5E\u81F3y\u5E74M\u6708d\u65E5E'
                                },
                                'yMMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'MMMM': {
                                    'M': 'LLLL\u81F3 LLLL'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm [v]',
                                    'm': 'HH:mm\u2013HH:mm [v]'
                                },
                                'hmv': {
                                    'a': 'a h:mm \u81F3a h:mm [v]',
                                    'h': 'a h:mm \u81F3 h:mm [v]',
                                    'm': 'a h:mm \u81F3 h:mm [v]'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u81F3HH:mm'
                                },
                                'hm': {
                                    'a': 'ah:mm\u81F3ah:mm',
                                    'h': 'ah:mm\u81F3h:mm',
                                    'm': 'ah:mm\u81F3h:mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'ah\u6642\u81F3ah\u6642',
                                    'h': 'ah\u6642\u81F3h\u6642'
                                },
                                'd': {
                                    'd': 'd\u65E5\u81F3d\u65E5'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate zh}. Language file for AstroDate.
 * @version 0.5.2
 * @author Graham Fairweather a.k.a Xotic750 <xotic750@gmail.com>
 * @copyright Graham Fairweather 2013
 * @license {@link <http://www.gnu.org/licenses/> GPL3}
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
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
        AstroDate.lang('zh', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1}\uFF08{0}\uFF09',
                    'regionFormat-type-standard': '{0}\u6807\u51C6\u65F6\u95F4',
                    'regionFormat-type-daylight': '{0}\u590F\u4EE4\u65F6\u95F4',
                    'regionFormat': '{0}\u65F6\u95F4',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '\u516B\u6708',
                                    '7': '\u4E03\u6708',
                                    '6': '\u516D\u6708',
                                    '5': '\u4E94\u6708',
                                    '12': '\u5341\u4E8C\u6708',
                                    '11': '\u5341\u4E00\u6708',
                                    '10': '\u5341\u6708',
                                    '9': '\u4E5D\u6708',
                                    '1': '\u4E00\u6708',
                                    '2': '\u4E8C\u6708',
                                    '3': '\u4E09\u6708',
                                    '4': '\u56DB\u6708'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': '8\u6708',
                                    '7': '7\u6708',
                                    '6': '6\u6708',
                                    '5': '5\u6708',
                                    '12': '12\u6708',
                                    '11': '11\u6708',
                                    '10': '10\u6708',
                                    '9': '9\u6708',
                                    '1': '1\u6708',
                                    '2': '2\u6708',
                                    '3': '3\u6708',
                                    '4': '4\u6708'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': '\u516B\u6708',
                                    '7': '\u4E03\u6708',
                                    '6': '\u516D\u6708',
                                    '5': '\u4E94\u6708',
                                    '12': '\u5341\u4E8C\u6708',
                                    '11': '\u5341\u4E00\u6708',
                                    '10': '\u5341\u6708',
                                    '9': '\u4E5D\u6708',
                                    '1': '\u4E00\u6708',
                                    '2': '\u4E8C\u6708',
                                    '3': '\u4E09\u6708',
                                    '4': '\u56DB\u6708'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'narrow': {
                                    'sun': '\u65E5',
                                    'mon': '\u4E00',
                                    'tue': '\u4E8C',
                                    'wed': '\u4E09',
                                    'thu': '\u56DB',
                                    'fri': '\u4E94',
                                    'sat': '\u516D'
                                },
                                'short': {
                                    'sun': '\u5468\u65E5',
                                    'mon': '\u5468\u4E00',
                                    'tue': '\u5468\u4E8C',
                                    'wed': '\u5468\u4E09',
                                    'thu': '\u5468\u56DB',
                                    'fri': '\u5468\u4E94',
                                    'sat': '\u5468\u516D'
                                },
                                'wide': {
                                    'sun': '\u661F\u671F\u65E5',
                                    'mon': '\u661F\u671F\u4E00',
                                    'tue': '\u661F\u671F\u4E8C',
                                    'wed': '\u661F\u671F\u4E09',
                                    'thu': '\u661F\u671F\u56DB',
                                    'fri': '\u661F\u671F\u4E94',
                                    'sat': '\u661F\u671F\u516D'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1\u5B63\u5EA6',
                                    '2': '2\u5B63\u5EA6',
                                    '3': '3\u5B63\u5EA6',
                                    '4': '4\u5B63\u5EA6'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                    '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                    '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                    '4': '\u7B2C\u56DB\u5B63\u5EA6'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1\u5B63\u5EA6',
                                    '2': '2\u5B63\u5EA6',
                                    '3': '3\u5B63\u5EA6',
                                    '4': '4\u5B63\u5EA6'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '\u7B2C\u4E00\u5B63\u5EA6',
                                    '2': '\u7B2C\u4E8C\u5B63\u5EA6',
                                    '3': '\u7B2C\u4E09\u5B63\u5EA6',
                                    '4': '\u7B2C\u56DB\u5B63\u5EA6'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'narrow': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                },
                                'wide': {
                                    'pm': '\u4E0B\u5348',
                                    'weeHours': '\u51CC\u6668',
                                    'afternoon': '\u4E0B\u5348',
                                    'am': '\u4E0A\u5348',
                                    'earlyMorning': '\u6E05\u6668',
                                    'midDay': '\u4E2D\u5348',
                                    'morning': '\u4E0A\u5348',
                                    'night': '\u665A\u4E0A',
                                    'noon': '\u4E2D\u5348'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '\u516C\u5143\u524D',
                                '0-alt-variant': 'BCE',
                                '1': '\u516C\u5143',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y\u5E74M\u6708d\u65E5EEEE',
                            'long': 'y\u5E74M\u6708d\u65E5',
                            'medium': 'y\u5E74M\u6708d\u65E5',
                            'short': 'yy/M/d'
                        },
                        'timeFormats': {
                            'full': 'zzzzah:mm:ss',
                            'long': 'zah:mm:ss',
                            'medium': 'ah:mm:ss',
                            'short': 'ah:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'yMMMd': 'y\u5E74M\u6708d\u65E5',
                                'yMMM': 'y\u5E74M\u6708',
                                'yMM': 'y\u5E74M\u6708',
                                'yMEd': 'y/M/dE',
                                'EHm': 'EHH:mm',
                                'Ehm': 'Eah:mm',
                                'Ed': 'd\u65E5E',
                                'd': 'd\u65E5',
                                'GyMMMd': 'Gy\u5E74M\u6708d\u65E5',
                                'GyMMMEd': 'Gy\u5E74M\u6708d\u65E5E',
                                'h': 'ah\u65F6',
                                'H': 'H\u65F6',
                                'yQQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                                'yQQQ': 'y\u5E74\u7B2CQ\u5B63\u5EA6',
                                'yMMMM': 'y\u5E74M\u6708',
                                'yMMMEd': 'y\u5E74M\u6708d\u65E5E',
                                'Hms': 'HH:mm:ss',
                                'hms': 'ah:mm:ss',
                                'Hm': 'HH:mm',
                                'hm': 'ah:mm',
                                'Ehms': 'Eah:mm:ss',
                                'EHms': 'EHH:mm:ss',
                                'Gy': 'Gy\u5E74',
                                'GyMMM': 'Gy\u5E74M\u6708',
                                'M': 'M\u6708',
                                'Md': 'M/d',
                                'MEd': 'M/dE',
                                'MMdd': 'MM/dd',
                                'MMM': 'LLL',
                                'MMMd': 'M\u6708d\u65E5',
                                'MMMEd': 'M\u6708d\u65E5E',
                                'MMMMdd': 'M\u6708dd\u65E5',
                                'ms': 'mm:ss',
                                'y': 'y\u5E74',
                                'yM': 'y/M',
                                'yMd': 'y/M/d'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{1} {0}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{1}{0}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'M\u6708d\u65E5E\u81F3M\u6708d\u65E5E'
                                },
                                'MMMd': {
                                    'd': 'M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'M\u6708d\u65E5\u81F3M\u6708d\u65E5'
                                },
                                'MMM': {
                                    'M': 'LLL\u81F3LLL'
                                },
                                'MEd': {
                                    'd': 'M/dE\u81F3M/dE',
                                    'M': 'M/dE\u81F3M/dE'
                                },
                                'Md': {
                                    'd': 'M/d \u2013 M/d',
                                    'M': 'M/d \u2013 M/d'
                                },
                                'M': {
                                    'M': 'M\u2013M\u6708'
                                },
                                'Hv': {
                                    'H': 'v HH\u2013HH'
                                },
                                'hv': {
                                    'a': 'vah\u65F6\u81F3ah\u65F6',
                                    'h': 'vah\u65F6\u81F3h\u65F6'
                                },
                                'y': {
                                    'y': 'y\u2013y\u5E74'
                                },
                                'yM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'yMd': {
                                    'd': 'y/M/d \u2013 y/M/d',
                                    'M': 'y/M/d \u2013 y/M/d',
                                    'y': 'y/M/d \u2013 y/M/d'
                                },
                                'yMEd': {
                                    'd': 'y/M/dE\u81F3y/M/dE',
                                    'M': 'y/M/dE\u81F3y/M/dE',
                                    'y': 'y/M/dE\u81F3y/M/dE'
                                },
                                'yMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'yMMMd': {
                                    'd': 'y\u5E74M\u6708d\u65E5\u81F3d\u65E5',
                                    'M': 'y\u5E74M\u6708d\u65E5\u81F3M\u6708d\u65E5',
                                    'y': 'y\u5E74M\u6708d\u65E5\u81F3y\u5E74M\u6708d\u65E5'
                                },
                                'yMMMEd': {
                                    'd': 'y\u5E74M\u6708d\u65E5E\u81F3d\u65E5E',
                                    'M': 'y\u5E74M\u6708d\u65E5E\u81F3M\u6708d\u65E5E',
                                    'y': 'y\u5E74M\u6708d\u65E5E\u81F3y\u5E74M\u6708d\u65E5E'
                                },
                                'yMMMM': {
                                    'M': 'y\u5E74M\u6708\u81F3M\u6708',
                                    'y': 'y\u5E74M\u6708\u81F3y\u5E74M\u6708'
                                },
                                'Hmv': {
                                    'H': 'v HH:mm\u2013HH:mm',
                                    'm': 'v HH:mm\u2013HH:mm'
                                },
                                'hmv': {
                                    'a': 'vah:mm\u81F3ah:mm',
                                    'h': 'vah:mm\u81F3h:mm',
                                    'm': 'vah:mm\u81F3h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'ah:mm\u81F3ah:mm',
                                    'h': 'ah:mm\u81F3h:mm',
                                    'm': 'ah:mm\u81F3h:mm'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'ah\u65F6\u81F3ah\u65F6',
                                    'h': 'ah\u65F6\u81F3h\u65F6'
                                },
                                'd': {
                                    'd': 'd\u2013d\u65E5'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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

/**
 * @file {@link https://github.com/Xotic750/astrodate en}. Language file for AstroDate.
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
        AstroDate.lang('en', {
            'dates': {
                'timeZoneNames': {
                    'fallbackFormat': '{1} ({0})',
                    'regionFormat-type-standard': '{0} Standard Time',
                    'regionFormat-type-daylight': '{0} Daylight Time',
                    'regionFormat': '{0} Time',
                    'gmtZeroFormat': 'GMT',
                    'gmtFormat': 'GMT{0}',
                    'hourFormat': '+HH:mm;-HH:mm'
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'May',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Oct',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
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
                                    '8': 'August',
                                    '7': 'July',
                                    '6': 'June',
                                    '5': 'May',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'October',
                                    '9': 'September',
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'Aug',
                                    '7': 'Jul',
                                    '6': 'Jun',
                                    '5': 'May',
                                    '12': 'Dec',
                                    '11': 'Nov',
                                    '10': 'Oct',
                                    '9': 'Sep',
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr'
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
                                    '8': 'August',
                                    '7': 'July',
                                    '6': 'June',
                                    '5': 'May',
                                    '12': 'December',
                                    '11': 'November',
                                    '10': 'October',
                                    '9': 'September',
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Before Christ',
                                '0-alt-variant': 'Before Common Era',
                                '1': 'Anno Domini',
                                '1-alt-variant': 'Common Era'
                            },
                            'eraAbbr': {
                                '0': 'BC',
                                '0-alt-variant': 'BCE',
                                '1': 'AD',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'B',
                                '0-alt-variant': 'BCE',
                                '1': 'A',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, MMMM d, y',
                            'long': 'MMMM d, y',
                            'medium': 'MMM d, y',
                            'short': 'M/d/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'at\' {0}',
                            'long': '{1} \'at\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'GyMMMEd': 'E, MMM d, y G',
                                'GyMMMd': 'MMM d, y G',
                                'd': 'd',
                                'Ed': 'd E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'yM': 'M/y',
                                'yMd': 'M/d/y',
                                'yMEd': 'E, M/d/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'MMM d, y',
                                'yMMMEd': 'E, MMM d, y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMEd': 'E, MMM d',
                                'MMMd': 'MMM d',
                                'MMM': 'LLL',
                                'MEd': 'E, M/d',
                                'Md': 'M/d',
                                'M': 'L'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{0} {1}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'E, MMM d \u2013 E, MMM d',
                                    'M': 'E, MMM d \u2013 E, MMM d'
                                },
                                'MMMd': {
                                    'd': 'MMM d \u2013 d',
                                    'M': 'MMM d \u2013 MMM d'
                                },
                                'MMM': {
                                    'M': 'MMM \u2013 MMM'
                                },
                                'MEd': {
                                    'd': 'E, M/d \u2013 E, M/d',
                                    'M': 'E, M/d \u2013 E, M/d'
                                },
                                'Md': {
                                    'd': 'M/d \u2013 M/d',
                                    'M': 'M/d \u2013 M/d'
                                },
                                'M': {
                                    'M': 'M \u2013 M'
                                },
                                'Hv': {
                                    'H': 'HH \u2013 HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h \u2013 h a v'
                                },
                                'y': {
                                    'y': 'y \u2013 y'
                                },
                                'yM': {
                                    'M': 'M/y \u2013 M/y',
                                    'y': 'M/y \u2013 M/y'
                                },
                                'yMd': {
                                    'd': 'M/d/y \u2013 M/d/y',
                                    'M': 'M/d/y \u2013 M/d/y',
                                    'y': 'M/d/y \u2013 M/d/y'
                                },
                                'yMEd': {
                                    'd': 'E, M/d/y \u2013 E, M/d/y',
                                    'M': 'E, M/d/y \u2013 E, M/d/y',
                                    'y': 'E, M/d/y \u2013 E, M/d/y'
                                },
                                'yMMM': {
                                    'M': 'MMM \u2013 MMM y',
                                    'y': 'MMM y \u2013 MMM y'
                                },
                                'yMMMd': {
                                    'd': 'MMM d \u2013 d, y',
                                    'M': 'MMM d \u2013 MMM d, y',
                                    'y': 'MMM d, y \u2013 MMM d, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, MMM d \u2013 E, MMM d, y',
                                    'M': 'E, MMM d \u2013 E, MMM d, y',
                                    'y': 'E, MMM d, y \u2013 E, MMM d, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM \u2013 MMMM y',
                                    'y': 'MMMM y \u2013 MMMM y'
                                },
                                'Hmv': {
                                    'H': 'HH:mm \u2013 HH:mm v',
                                    'm': 'HH:mm \u2013 HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm \u2013 h:mm a v',
                                    'm': 'h:mm \u2013 h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm \u2013 HH:mm',
                                    'm': 'HH:mm \u2013 HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm \u2013 h:mm a',
                                    'm': 'h:mm \u2013 h:mm a'
                                },
                                'H': {
                                    'H': 'HH \u2013 HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h \u2013 h a'
                                },
                                'd': {
                                    'd': 'd \u2013 d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
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
