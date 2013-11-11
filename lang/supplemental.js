/* AstroDate
 *
 * supplemental
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
        AstroDate.supplemental({
            'weekData': {
                'minDays': {
                    'LT': '4',
                    'LI': '4',
                    'JE': '4',
                    'IT': '4',
                    'IS': '4',
                    'IM': '4',
                    'IE': '4',
                    'HU': '4',
                    'GU': '1',
                    'GR': '4',
                    'GP': '4',
                    'GI': '4',
                    'GG': '4',
                    'GF': '4',
                    'GB': '4',
                    'FR': '4',
                    'LU': '4',
                    'MC': '4',
                    'MQ': '4',
                    'NL': '4',
                    'NO': '4',
                    'PL': '4',
                    'PT': '4',
                    'RE': '4',
                    'VI': '1',
                    'VA': '4',
                    'US': '1',
                    'UM': '1',
                    'SM': '4',
                    'SK': '4',
                    'SJ': '4',
                    'SE': '4',
                    'FO': '4',
                    'FJ': '4',
                    'FI': '4',
                    'ES': '4',
                    'EE': '4',
                    'DK': '4',
                    'DE': '4',
                    'CZ': '4',
                    '001': '1',
                    'AD': '4',
                    'AN': '4',
                    'AT': '4',
                    'AX': '4',
                    'BE': '4',
                    'BG': '4',
                    'CH': '4'
                },
                'firstDay': {
                    'SK': 'mon',
                    'SI': 'mon',
                    'SG': 'sun',
                    'SE': 'mon',
                    'SD': 'sat',
                    'SA': 'sun',
                    'RU': 'mon',
                    'RS': 'mon',
                    'RO': 'mon',
                    'RE': 'mon',
                    'QA': 'sat',
                    'PY': 'sun',
                    'PT': 'mon',
                    'PR': 'sun',
                    'PL': 'mon',
                    'PK': 'sun',
                    'PH': 'sun',
                    'PE': 'sun',
                    'PA': 'sun',
                    'OM': 'sat',
                    'NZ': 'sun',
                    'NP': 'sun',
                    'NO': 'mon',
                    'NL': 'mon',
                    'AN': 'mon',
                    'AR': 'sun',
                    'AS': 'sun',
                    'AT': 'mon',
                    'AU': 'sun',
                    'AX': 'mon',
                    'AZ': 'mon',
                    'BA': 'mon',
                    'CN': 'sun',
                    'CO': 'sun',
                    'CR': 'mon',
                    'CY': 'mon',
                    'CZ': 'mon',
                    'DE': 'mon',
                    'DJ': 'sat',
                    'DK': 'mon',
                    'DM': 'sun',
                    'DO': 'sun',
                    'DZ': 'sat',
                    'EC': 'mon',
                    'EE': 'mon',
                    'EG': 'sat',
                    'ES': 'mon',
                    'ET': 'sun',
                    'FI': 'mon',
                    'FJ': 'mon',
                    'FO': 'mon',
                    'FR': 'mon',
                    'GB': 'mon',
                    'GE': 'mon',
                    'GF': 'mon',
                    'GP': 'mon',
                    'TT': 'sun',
                    'TW': 'sun',
                    'UA': 'mon',
                    'UM': 'sun',
                    'US': 'sun',
                    'UY': 'mon',
                    'UZ': 'mon',
                    'VA': 'mon',
                    'ZW': 'sun',
                    'ZA': 'sun',
                    'YE': 'sun',
                    'XK': 'mon',
                    'WS': 'sun',
                    'VN': 'mon',
                    'VI': 'sun',
                    'VE': 'sun',
                    'TR': 'mon',
                    'TN': 'sun',
                    'TM': 'mon',
                    'TJ': 'mon',
                    'TH': 'sun',
                    'SY': 'sat',
                    'SV': 'sun',
                    'SM': 'mon',
                    'ID': 'sun',
                    'HU': 'mon',
                    'HR': 'mon',
                    'HN': 'sun',
                    'HK': 'sun',
                    'GU': 'sun',
                    'GT': 'sun',
                    'GR': 'mon',
                    '001': 'mon',
                    'AD': 'mon',
                    'AE': 'sat',
                    'AF': 'sat',
                    'AG': 'sun',
                    'AI': 'mon',
                    'AL': 'mon',
                    'AM': 'mon',
                    'BD': 'fri',
                    'BE': 'mon',
                    'BG': 'mon',
                    'BH': 'sat',
                    'BM': 'mon',
                    'BN': 'mon',
                    'BR': 'sun',
                    'BS': 'sun',
                    'BT': 'sun',
                    'BW': 'sun',
                    'BY': 'sun',
                    'BZ': 'sun',
                    'CA': 'sun',
                    'CH': 'mon',
                    'CL': 'mon',
                    'CM': 'mon',
                    'IE': 'sun',
                    'IL': 'sun',
                    'IN': 'sun',
                    'IQ': 'sat',
                    'IR': 'sat',
                    'IS': 'mon',
                    'IT': 'mon',
                    'JM': 'sun',
                    'JO': 'sat',
                    'JP': 'sun',
                    'KE': 'sun',
                    'KG': 'mon',
                    'KH': 'sun',
                    'KR': 'sun',
                    'KW': 'sat',
                    'KZ': 'mon',
                    'LA': 'sun',
                    'LB': 'mon',
                    'LI': 'mon',
                    'LK': 'mon',
                    'LT': 'mon',
                    'LU': 'mon',
                    'LV': 'mon',
                    'LY': 'sat',
                    'MA': 'sat',
                    'MC': 'mon',
                    'MD': 'mon',
                    'ME': 'mon',
                    'MH': 'sun',
                    'MK': 'mon',
                    'MM': 'sun',
                    'MN': 'mon',
                    'MO': 'sun',
                    'MQ': 'mon',
                    'MT': 'sun',
                    'MV': 'fri',
                    'MX': 'sun',
                    'MY': 'mon',
                    'MZ': 'sun',
                    'NI': 'sun'
                },
                'firstDay-alt-variant': {
                    'GB': 'sun'
                },
                'weekendStart': {
                    'QA': 'fri',
                    'OM': 'thu',
                    'MA': 'fri',
                    'LY': 'fri',
                    'KW': 'fri',
                    'EG': 'fri',
                    'IL': 'fri',
                    'IN': 'sun',
                    'SA': 'fri',
                    'SD': 'fri',
                    'SY': 'fri',
                    'TN': 'fri',
                    'YE': 'fri',
                    'DZ': 'thu',
                    'BH': 'fri',
                    'AF': 'thu',
                    'AE': 'fri',
                    '001': 'sat',
                    'IQ': 'fri',
                    'IR': 'thu',
                    'JO': 'fri'
                },
                'weekendEnd': {
                    'SA': 'sat',
                    'QA': 'sat',
                    'OM': 'fri',
                    'MA': 'sat',
                    'DZ': 'fri',
                    'EG': 'sat',
                    'IL': 'sat',
                    'IQ': 'sat',
                    'SD': 'sat',
                    'SY': 'sat',
                    'TN': 'sat',
                    'YE': 'sat',
                    'BH': 'sat',
                    'AF': 'fri',
                    'AE': 'sat',
                    '001': 'sun',
                    'IR': 'fri',
                    'JO': 'sat',
                    'KW': 'sat',
                    'LY': 'sat'
                }
            },
            'parentLocales': {
                'parentLocale': {
                    'en_GI': 'en_GB',
                    'en_GM': 'en_001',
                    'en_GY': 'en_001',
                    'en_HK': 'en_GB',
                    'en_IE': 'en_GB',
                    'en_SD': 'en_001',
                    'en_SG': 'en_GB',
                    'en_SH': 'en_GB',
                    'en_SL': 'en_001',
                    'en_SS': 'en_001',
                    'en_SX': 'en_001',
                    'en_SZ': 'en_001',
                    'en_TC': 'en_001',
                    'en_TK': 'en_001',
                    'en_TO': 'en_001',
                    'en_TT': 'en_001',
                    'en_TV': 'en_001',
                    'en_TZ': 'en_001',
                    'en_UG': 'en_001',
                    'en_VC': 'en_001',
                    'en_VG': 'en_GB',
                    'en_VU': 'en_001',
                    'en_WS': 'en_001',
                    'en_ZA': 'en_001',
                    'en_ZM': 'en_001',
                    'en_ZW': 'en_001',
                    'es_AR': 'es_419',
                    'es_BO': 'es_419',
                    'es_CL': 'es_419',
                    'es_CO': 'es_419',
                    'es_CR': 'es_419',
                    'es_CU': 'es_419',
                    'ms_Arab': 'root',
                    'pa_Arab': 'root',
                    'pt_AO': 'pt_PT',
                    'pt_CV': 'pt_PT',
                    'pt_GW': 'pt_PT',
                    'pt_MO': 'pt_PT',
                    'pt_MZ': 'pt_PT',
                    'pt_ST': 'pt_PT',
                    'zh_Hant_MO': 'zh_Hant_HK',
                    'zh_Hant': 'root',
                    'vai_Latn': 'root',
                    'uz_Cyrl': 'root',
                    'uz_Arab': 'root',
                    'sr_Latn': 'root',
                    'shi_Latn': 'root',
                    'pt_TL': 'pt_PT',
                    'mn_Mong': 'root',
                    'ha_Arab': 'root',
                    'es_VE': 'es_419',
                    'es_UY': 'es_419',
                    'es_US': 'es_419',
                    'es_SV': 'es_419',
                    'es_PY': 'es_419',
                    'es_PR': 'es_419',
                    'es_PE': 'es_419',
                    'es_PA': 'es_419',
                    'es_NI': 'es_419',
                    'en_IM': 'en_GB',
                    'en_IN': 'en_GB',
                    'en_IO': 'en_GB',
                    'en_JE': 'en_GB',
                    'en_JM': 'en_001',
                    'en_KE': 'en_001',
                    'en_KI': 'en_001',
                    'en_KN': 'en_001',
                    'en_KY': 'en_001',
                    'en_LC': 'en_001',
                    'en_LR': 'en_001',
                    'en_LS': 'en_001',
                    'en_MG': 'en_001',
                    'en_MO': 'en_GB',
                    'en_MS': 'en_001',
                    'en_MT': 'en_GB',
                    'en_PG': 'en_001',
                    'en_PH': 'en_001',
                    'en_PK': 'en_GB',
                    'en_PN': 'en_001',
                    'en_PW': 'en_001',
                    'en_RW': 'en_001',
                    'en_SB': 'en_001',
                    'en_SC': 'en_001',
                    'en_NZ': 'en_GB',
                    'en_NU': 'en_001',
                    'en_NR': 'en_001',
                    'en_NG': 'en_001',
                    'en_NF': 'en_001',
                    'en_NA': 'en_001',
                    'en_MW': 'en_001',
                    'en_MU': 'en_001',
                    'en_CX': 'en_001',
                    'en_CM': 'en_001',
                    'en_CK': 'en_001',
                    'en_CC': 'en_001',
                    'en_BZ': 'en_001',
                    'en_BW': 'en_001',
                    'en_BS': 'en_001',
                    'en_BM': 'en_001',
                    'az_Cyrl': 'root',
                    'bs_Cyrl': 'root',
                    'en_150': 'en_GB',
                    'en_AG': 'en_001',
                    'en_AI': 'en_001',
                    'en_AU': 'en_GB',
                    'en_BB': 'en_001',
                    'en_BE': 'en_GB',
                    'en_DG': 'en_GB',
                    'en_DM': 'en_001',
                    'en_Dsrt': 'root',
                    'en_ER': 'en_001',
                    'en_FJ': 'en_001',
                    'en_FK': 'en_GB',
                    'en_FM': 'en_001',
                    'en_GB': 'en_001',
                    'en_GD': 'en_001',
                    'en_GG': 'en_GB',
                    'en_GH': 'en_001',
                    'es_DO': 'es_419',
                    'es_EC': 'es_419',
                    'es_GT': 'es_419',
                    'es_HN': 'es_419',
                    'es_MX': 'es_419'
                }
            },
            'timeData': {
                'PS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'PR': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'PM': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'PK': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'PG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'OM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'NZ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'NL': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'NG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'NE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'NC': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'NA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MZ': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'MY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MR': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MQ': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'MP': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MO': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ML': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'MH': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ZA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ZM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ZW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'VI': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'VG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'VC': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'US': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'UM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TT': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TR': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'GL': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GH': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GF': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'GD': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GA': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'FR': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'FM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'FJ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'FI': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'ET': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ER': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'EH': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'EG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'EE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'DZ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'DM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'DK': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'DJ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'DE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'CZ': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'CY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'RU': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SB': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SD': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SI': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SJ': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'ST': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SR': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SO': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SM': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'SL': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SK': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'RO': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'RE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'QA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'PW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'PT': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'AE': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'AD': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                '001': {
                    '_preferred': 'H',
                    '_allowed': 'H h'
                },
                'AT': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'AU': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'AW': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'AX': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'BB': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BD': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BE': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'BF': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'YT': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'YE': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'WS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'WF': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'VU': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TN': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TG': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'TD': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'TC': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'SZ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'IN': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'IL': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'HR': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'HK': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GW': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'GU': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GR': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'GP': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'GN': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'GM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'AG': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'AL': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'AM': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'AO': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'AS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BH': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BJ': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'BL': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'BM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BN': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BR': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'BS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BT': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'BW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'CA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'CD': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'CI': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'CN': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'CO': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'CP': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'CV': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'IQ': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'IS': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'IT': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'JM': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'JO': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'JP': {
                    '_preferred': 'H',
                    '_allowed': 'H K h'
                },
                'KH': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KI': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KN': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KP': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KR': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KW': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'KY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'LB': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'LC': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'LR': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'LS': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'LY': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MA': {
                    '_preferred': 'h',
                    '_allowed': 'H h'
                },
                'MC': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'MD': {
                    '_preferred': 'H',
                    '_allowed': 'H'
                },
                'MF': {
                    '_preferred': 'H',
                    '_allowed': 'H'
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
