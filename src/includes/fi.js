/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language fi}.
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
        AstroDate.lang('fi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta',
                                    '5': 'toukokuuta',
                                    '6': 'kesäkuuta',
                                    '7': 'heinäkuuta',
                                    '8': 'elokuuta',
                                    '9': 'syyskuuta',
                                    '10': 'lokakuuta',
                                    '11': 'marraskuuta',
                                    '12': 'joulukuuta'
                                },
                                'narrow': {
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H',
                                    '5': 'T',
                                    '6': 'K',
                                    '7': 'H',
                                    '8': 'E',
                                    '9': 'S',
                                    '10': 'L',
                                    '11': 'M',
                                    '12': 'J'
                                },
                                'wide': {
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta',
                                    '5': 'toukokuuta',
                                    '6': 'kesäkuuta',
                                    '7': 'heinäkuuta',
                                    '8': 'elokuuta',
                                    '9': 'syyskuuta',
                                    '10': 'lokakuuta',
                                    '11': 'marraskuuta',
                                    '12': 'joulukuuta'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'tammi',
                                    '2': 'helmi',
                                    '3': 'maalis',
                                    '4': 'huhti',
                                    '5': 'touko',
                                    '6': 'kesä',
                                    '7': 'heinä',
                                    '8': 'elo',
                                    '9': 'syys',
                                    '10': 'loka',
                                    '11': 'marras',
                                    '12': 'joulu'
                                },
                                'narrow': {
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H',
                                    '5': 'T',
                                    '6': 'K',
                                    '7': 'H',
                                    '8': 'E',
                                    '9': 'S',
                                    '10': 'L',
                                    '11': 'M',
                                    '12': 'J'
                                },
                                'wide': {
                                    '1': 'tammikuu',
                                    '2': 'helmikuu',
                                    '3': 'maaliskuu',
                                    '4': 'huhtikuu',
                                    '5': 'toukokuu',
                                    '6': 'kesäkuu',
                                    '7': 'heinäkuu',
                                    '8': 'elokuu',
                                    '9': 'syyskuu',
                                    '10': 'lokakuu',
                                    '11': 'marraskuu',
                                    '12': 'joulukuu'
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
                                    '1': '1. neljännes',
                                    '2': '2. neljännes',
                                    '3': '3. neljännes',
                                    '4': '4. neljännes'
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
                                    '1': '1. neljännes',
                                    '2': '2. neljännes',
                                    '3': '3. neljännes',
                                    '4': '4. neljännes'
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
                                '0': 'ennen Kristuksen syntymää',
                                '1': 'jälkeen Kristuksen syntymän',
                                '0-alt-variant': 'ennen ajanlaskun alkua',
                                '1-alt-variant': 'jälkeen ajanlaskun alun'
                            },
                            'eraAbbr': {
                                '0': 'eKr.',
                                '1': 'jKr.',
                                '0-alt-variant': 'eaa.',
                                '1-alt-variant': 'jaa.'
                            },
                            'eraNarrow': {
                                '0': 'eK',
                                '1': 'jK',
                                '0-alt-variant': 'eaa',
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
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E H.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E H.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h.mm a',
                                'Hm': 'H.mm',
                                'hms': 'h.mm.ss a',
                                'Hms': 'H.mm.ss',
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
                                'yMMM': 'LLL y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E d. MMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMMccccd': 'cccc d. MMMM y',
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
                                'intervalFormatFallback': '{0}–{1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h.mm a – h.mm a',
                                    'h': 'h.mm–h.mm a',
                                    'm': 'h.mm–h.mm a'
                                },
                                'Hm': {
                                    'H': 'H.mm–H.mm',
                                    'm': 'H.mm–H.mm'
                                },
                                'hmv': {
                                    'a': 'h.mm a – h.mm a v',
                                    'h': 'h.mm–h.mm a v',
                                    'm': 'h.mm–h.mm a v'
                                },
                                'Hmv': {
                                    'H': 'H.mm–H.mm v',
                                    'm': 'H.mm–H.mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'L.–L.'
                                },
                                'Md': {
                                    'd': 'd.–d.M.',
                                    'M': 'd.M.–d.M.'
                                },
                                'MEd': {
                                    'd': 'E d. – E d.M.',
                                    'M': 'E d.M. – E d.M.'
                                },
                                'MMM': {
                                    'M': 'LLL–LLLL'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMMM',
                                    'M': 'd. MMMM – d. MMMM'
                                },
                                'MMMEd': {
                                    'd': 'E d. – E d. MMMM',
                                    'M': 'E d. MMMM – E d. MMMM'
                                },
                                'MMMM': {
                                    'M': 'LLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                },
                                'yMd': {
                                    'd': 'd.–d.M.y',
                                    'M': 'd.M.–d.M.y',
                                    'y': 'd.M.y–d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E d.M.y – E d.M.y',
                                    'M': 'E d.M.y – E d.M.y',
                                    'y': 'E d.M.y – E d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMMM y',
                                    'M': 'd. MMMM – d. MMMM y',
                                    'y': 'd. MMMM y – d. MMMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. – E d. MMMM y',
                                    'M': 'E d. MMMM – E d. MMMM y',
                                    'y': 'E d. MMMM y – E d. MMMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+H.mm;-H.mm',
                    'gmtFormat': 'UTC{0}',
                    'gmtZeroFormat': 'UTC',
                    'regionFormat': 'aikavyöhyke: {0}',
                    'regionFormat-type-daylight': '{0} (kesäaika)',
                    'regionFormat-type-standard': '{0} (normaaliaika)',
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
