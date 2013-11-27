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
