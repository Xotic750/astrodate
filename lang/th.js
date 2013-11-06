/* AstroDate Language: th
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

/*jshint -W100 */
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
        AstroDate.lang('th', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'ไซปัน'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'ราโรตองกา'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'พอร์ตมอร์สบี'
                        },
                        'Ponape': {
                            'exemplarCity': 'โปนาเป'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'พิตแคร์น'
                        },
                        'Palau': {
                            'exemplarCity': 'ปาเลา'
                        },
                        'Auckland': {
                            'exemplarCity': 'โอคแลนด์'
                        },
                        'Apia': {
                            'exemplarCity': 'อาปีอา'
                        },
                        'Funafuti': {
                            'exemplarCity': 'ฟูนะฟูตี'
                        },
                        'Galapagos': {
                            'exemplarCity': 'กาลาปาโกส'
                        },
                        'Gambier': {
                            'exemplarCity': 'แกมเบียร์'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'กัวดัลคานัล'
                        },
                        'Guam': {
                            'exemplarCity': 'กวม'
                        },
                        'Honolulu': {
                            'exemplarCity': 'โฮโนลูลู'
                        },
                        'Wallis': {
                            'exemplarCity': 'วาลลิส'
                        },
                        'Wake': {
                            'exemplarCity': 'เวก'
                        },
                        'Truk': {
                            'exemplarCity': 'ทรัก'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'ตองกาตาปู'
                        },
                        'Tarawa': {
                            'exemplarCity': 'ตาระวา'
                        },
                        'Tahiti': {
                            'exemplarCity': 'ทาฮิติ'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'คิริทิมาตี'
                        },
                        'Johnston': {
                            'exemplarCity': 'จอห์นสตัน'
                        },
                        'Chatham': {
                            'exemplarCity': 'แชแทม'
                        },
                        'Easter': {
                            'exemplarCity': 'อีสเตอร์'
                        },
                        'Efate': {
                            'exemplarCity': 'เอฟาเต'
                        },
                        'Enderbury': {
                            'exemplarCity': 'เอนเดอร์เบอร์รี'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'ฟาเคาโฟ'
                        },
                        'Fiji': {
                            'exemplarCity': 'ฟิจิ'
                        },
                        'Kosrae': {
                            'exemplarCity': 'คอสแร'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'ควาจาเลน'
                        },
                        'Majuro': {
                            'exemplarCity': 'มาจูโร'
                        },
                        'Marquesas': {
                            'exemplarCity': 'มาร์เควซัส'
                        },
                        'Midway': {
                            'exemplarCity': 'มิดเวย์'
                        },
                        'Nauru': {
                            'exemplarCity': 'นาอูรู'
                        },
                        'Niue': {
                            'exemplarCity': 'นีอูเอ'
                        },
                        'Norfolk': {
                            'exemplarCity': 'นอร์ฟอล์ก'
                        },
                        'Noumea': {
                            'exemplarCity': 'นูเมอา'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'ปาโก ปาโก'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'ลินดีแมน'
                        },
                        'Hobart': {
                            'exemplarCity': 'โฮบาร์ต'
                        },
                        'Eucla': {
                            'exemplarCity': 'ยูคลา'
                        },
                        'Darwin': {
                            'exemplarCity': 'ดาร์วิน'
                        },
                        'Sydney': {
                            'exemplarCity': 'ซิดนีย์'
                        },
                        'Perth': {
                            'exemplarCity': 'เพิิร์ท'
                        },
                        'Melbourne': {
                            'exemplarCity': 'เมลเบิร์น'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'ลอร์ดโฮวี'
                        },
                        'Adelaide': {
                            'exemplarCity': 'แอดิเลด'
                        },
                        'Brisbane': {
                            'exemplarCity': 'บริสเบน'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'โบรกเคนฮิลล์'
                        },
                        'Currie': {
                            'exemplarCity': 'คูร์รี'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'มัลดีฟส์'
                        },
                        'Mahe': {
                            'exemplarCity': 'มาเอ'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'แกร์เกอลอง'
                        },
                        'Reunion': {
                            'exemplarCity': 'เรอูนียง'
                        },
                        'Mayotte': {
                            'exemplarCity': 'มาโยเต'
                        },
                        'Mauritius': {
                            'exemplarCity': 'มอริเชียส'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'อันตานานาริโว'
                        },
                        'Chagos': {
                            'exemplarCity': 'ชากัส'
                        },
                        'Christmas': {
                            'exemplarCity': 'คริสต์มาส'
                        },
                        'Cocos': {
                            'exemplarCity': 'โคโคส'
                        },
                        'Comoro': {
                            'exemplarCity': 'โคโมโร'
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
                            'exemplarCity': 'เมืองที่ไม่รู้จัก'
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
                            'exemplarCity': 'โรเทรา'
                        },
                        'Palmer': {
                            'exemplarCity': 'พาล์เมอร์'
                        },
                        'McMurdo': {
                            'exemplarCity': 'แมคมัวโด'
                        },
                        'Vostok': {
                            'exemplarCity': 'วอสต็อค'
                        },
                        'Syowa': {
                            'exemplarCity': 'เซียวา'
                        },
                        'South_Pole': {
                            'exemplarCity': 'ขั้วโลกใต้'
                        },
                        'Casey': {
                            'exemplarCity': 'เคซีย์'
                        },
                        'Davis': {
                            'exemplarCity': 'ดาวีส์'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'ดูมองต์ดูร์วิลล์'
                        },
                        'Macquarie': {
                            'exemplarCity': 'แมคควอรี'
                        },
                        'Mawson': {
                            'exemplarCity': 'มาว์ซัน'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'ลองเยียร์เบียน'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'โทรอนโต'
                        },
                        'Tijuana': {
                            'exemplarCity': 'ทิฮัวนา'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'ทันเดอร์เบย์'
                        },
                        'Thule': {
                            'exemplarCity': 'ทูเล'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'เตกูซิกัลปา'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'สวิฟต์เคอร์เรนต์'
                        },
                        'Chicago': {
                            'exemplarCity': 'ชิคาโก'
                        },
                        'Cayman': {
                            'exemplarCity': 'เคย์แมน'
                        },
                        'Cayenne': {
                            'exemplarCity': 'กาแยน'
                        },
                        'Catamarca': {
                            'exemplarCity': 'กาตามาร์กา'
                        },
                        'Caracas': {
                            'exemplarCity': 'คาราคัส'
                        },
                        'Cancun': {
                            'exemplarCity': 'แคนคุน'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'กัมปูกรันดี'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'อ่าวแคมบริดจ์'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'บัวโนสไอเรส'
                        },
                        'Boise': {
                            'exemplarCity': 'บอยซี'
                        },
                        'Asuncion': {
                            'exemplarCity': 'อะซุนซิออง'
                        },
                        'Aruba': {
                            'exemplarCity': 'อารูบา'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'ริโอกาลเลกอส'
                            },
                            'San_Juan': {
                                'exemplarCity': 'ซานฮวน'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'อูชูเอีย'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'ลาริโอจา'
                            },
                            'San_Luis': {
                                'exemplarCity': 'ซันลูอิส'
                            },
                            'Salta': {
                                'exemplarCity': 'ซัลตา'
                            },
                            'Tucuman': {
                                'exemplarCity': 'ทูคูแมน'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'อารากัวนา'
                        },
                        'Antigua': {
                            'exemplarCity': 'แอนติกา'
                        },
                        'Anguilla': {
                            'exemplarCity': 'แองกิลลา'
                        },
                        'Anchorage': {
                            'exemplarCity': 'แองเคอเรจ'
                        },
                        'Adak': {
                            'exemplarCity': 'เอดัก'
                        },
                        'Bahia': {
                            'exemplarCity': 'บาเยีย'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'บาเอียบันเดรัส'
                        },
                        'Barbados': {
                            'exemplarCity': 'บาร์เบโดส'
                        },
                        'Belem': {
                            'exemplarCity': 'เบเลง'
                        },
                        'Belize': {
                            'exemplarCity': 'เบลีซ'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'บลังค์-ซาบลอน'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'บัววีชตา'
                        },
                        'Bogota': {
                            'exemplarCity': 'โบโกตา'
                        },
                        'Curacao': {
                            'exemplarCity': 'คูราเซา'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'ดานมาร์กสฮาวน์'
                        },
                        'Dawson': {
                            'exemplarCity': 'ดอว์สัน'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'ดอว์สัน ครีก'
                        },
                        'Denver': {
                            'exemplarCity': 'เดนเวอร์'
                        },
                        'Detroit': {
                            'exemplarCity': 'ดีทรอยต์'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'เอร์โมซีโย'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'วินเซนเนส, อินดีแอนา'
                            },
                            'Petersburg': {
                                'exemplarCity': 'ปีเตอร์สเบิร์ก, อินดีแอนา'
                            },
                            'Tell_City': {
                                'exemplarCity': 'เทลล์ซิตี, อินดีแอนา'
                            },
                            'Knox': {
                                'exemplarCity': 'นอกซ์, อินดีแอนา'
                            },
                            'Winamac': {
                                'exemplarCity': 'วินาแมค, อินดีแอนา'
                            },
                            'Marengo': {
                                'exemplarCity': 'มาเรงโก, อินดีแอนา'
                            },
                            'Vevay': {
                                'exemplarCity': 'วีเวย์, อินดีแอนา'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'อินเดียแนโพลิส'
                        },
                        'Inuvik': {
                            'exemplarCity': 'อินูวิก'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'อีกวาลิต'
                        },
                        'Jamaica': {
                            'exemplarCity': 'จาเมกา'
                        },
                        'Jujuy': {
                            'exemplarCity': 'จูจิว'
                        },
                        'Juneau': {
                            'exemplarCity': 'จูโน'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'เยลโลว์ไนฟ์'
                        },
                        'Yakutat': {
                            'exemplarCity': 'ยากูทัต'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'วินนิเพก'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'ไวต์ฮอร์ส'
                        },
                        'Vancouver': {
                            'exemplarCity': 'แวนคูเวอร์'
                        },
                        'Tortola': {
                            'exemplarCity': 'ตอร์โตลา'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'คราเลนดิจค์'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'มอนติเซลโล, เคนตักกี'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'ฮาวานา'
                        },
                        'Halifax': {
                            'exemplarCity': 'แฮลิแฟกซ์'
                        },
                        'Guyana': {
                            'exemplarCity': 'กายอานา'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'กัวยากิล'
                        },
                        'Guatemala': {
                            'exemplarCity': 'กัวเตมาลา'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'กวาเดอลูป'
                        },
                        'Grenada': {
                            'exemplarCity': 'เกรนาดา'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'แกรนด์เติร์ก'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'กูสเบย์'
                        },
                        'Godthab': {
                            'exemplarCity': 'กอดแธบ'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'แกลซเบย์'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'ฟอร์ตาเลซา'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'เอลซัลวาดอร์'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'เอรูเนเป'
                        },
                        'Edmonton': {
                            'exemplarCity': 'เอดมันตัน'
                        },
                        'Dominica': {
                            'exemplarCity': 'โดมินิกา'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'ชีวาวา'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'คอรัลฮาร์เบอร์'
                        },
                        'Cordoba': {
                            'exemplarCity': 'คอร์โดบา'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'คอสตาริกา'
                        },
                        'Creston': {
                            'exemplarCity': 'เครสตัน'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'กุยาบา'
                        },
                        'La_Paz': {
                            'exemplarCity': 'ลาปาซ'
                        },
                        'Lima': {
                            'exemplarCity': 'ลิมา'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'ลอสแองเจลิส'
                        },
                        'Louisville': {
                            'exemplarCity': 'ลูส์วิลล์'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'โลเวอร์พรินซ์ ควอเตอร์'
                        },
                        'Maceio': {
                            'exemplarCity': 'มาเซโอ'
                        },
                        'Managua': {
                            'exemplarCity': 'มานากัว'
                        },
                        'Manaus': {
                            'exemplarCity': 'มาเนาส์'
                        },
                        'Marigot': {
                            'exemplarCity': 'มาริโกต์'
                        },
                        'Martinique': {
                            'exemplarCity': 'มาร์ตินีก'
                        },
                        'Matamoros': {
                            'exemplarCity': 'มาตาโมรอส'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'มาซาทลาน'
                        },
                        'Mendoza': {
                            'exemplarCity': 'เมนดูซา'
                        },
                        'Menominee': {
                            'exemplarCity': 'เมโนมินี'
                        },
                        'Merida': {
                            'exemplarCity': 'เมรีดา'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'เมทลากาตละ'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'เม็กซิโกซิตี'
                        },
                        'Miquelon': {
                            'exemplarCity': 'มีเกอลง'
                        },
                        'Moncton': {
                            'exemplarCity': 'มองตัน'
                        },
                        'Monterrey': {
                            'exemplarCity': 'มอนเตร์เรย์'
                        },
                        'Montevideo': {
                            'exemplarCity': 'มอนเตวิเดโอ'
                        },
                        'Montreal': {
                            'exemplarCity': 'มอนทรีอัล'
                        },
                        'Montserrat': {
                            'exemplarCity': 'มอนเซอร์รัต'
                        },
                        'Nassau': {
                            'exemplarCity': 'แนสซอ'
                        },
                        'New_York': {
                            'exemplarCity': 'นิวยอร์ก'
                        },
                        'Nipigon': {
                            'exemplarCity': 'นิปิกอน'
                        },
                        'Nome': {
                            'exemplarCity': 'นอม'
                        },
                        'Noronha': {
                            'exemplarCity': 'โนรอนฮา'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'โบลาห์, นอร์ทดาโคตา'
                            },
                            'New_Salem': {
                                'exemplarCity': 'นิวเซเลม, นอร์ทดาโคตา'
                            },
                            'Center': {
                                'exemplarCity': 'เซนเตอร์, นอร์ทดาโคตา'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'โอจินากา'
                        },
                        'Panama': {
                            'exemplarCity': 'ปานามา'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'พางนีทัง'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'ปารามาริโบ'
                        },
                        'Phoenix': {
                            'exemplarCity': 'ฟินิกซ์'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'ปอร์โตแปรงซ์'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'พอร์ทออฟสเปน'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'ปอร์ตูเวลโย'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'เปอโตริโก'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'เรนนี่ริเวอร์'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'แรงกินอินเล็ต'
                        },
                        'Recife': {
                            'exemplarCity': 'เรซีเฟ'
                        },
                        'Regina': {
                            'exemplarCity': 'ริไจนา'
                        },
                        'Resolute': {
                            'exemplarCity': 'เรโซลูท'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'รีโอบรังโก'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'ซานตาอิซาเบล'
                        },
                        'Santarem': {
                            'exemplarCity': 'ซันตาเรม'
                        },
                        'Santiago': {
                            'exemplarCity': 'ซันติอาโก'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'ซานโต โดมิงโก'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'เซาเปาลู'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'สกอเรสไบซันด์'
                        },
                        'Shiprock': {
                            'exemplarCity': 'ชิปร็อก'
                        },
                        'Sitka': {
                            'exemplarCity': 'ซิตกา'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'เซนต์บาร์เธเลมี'
                        },
                        'St_Johns': {
                            'exemplarCity': 'เซนต์จอนส์'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'เซนต์คิตส์'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'เซนต์ลูเซีย'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'เซนต์โธมัส'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'เซนต์วินเซนต์'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'เซาท์ จอร์เจีย'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'เรคยาวิก'
                        },
                        'Stanley': {
                            'exemplarCity': 'สแตนลีย์'
                        },
                        'St_Helena': {
                            'exemplarCity': 'เซนต์เฮเลนา'
                        },
                        'Azores': {
                            'exemplarCity': 'อาซอเรส'
                        },
                        'Bermuda': {
                            'exemplarCity': 'เบอร์มิวดา'
                        },
                        'Canary': {
                            'exemplarCity': 'คะเนรี'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'เคปเวิร์ด'
                        },
                        'Faeroe': {
                            'exemplarCity': 'แฟโร'
                        },
                        'Madeira': {
                            'exemplarCity': 'มาเดรา'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'ออสโล'
                        },
                        'Moscow': {
                            'exemplarCity': 'มอสโก'
                        },
                        'Monaco': {
                            'exemplarCity': 'โมนาโก'
                        },
                        'Minsk': {
                            'exemplarCity': 'มินสก์'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'มารีฮามน์'
                        },
                        'Malta': {
                            'exemplarCity': 'มอลตา'
                        },
                        'Madrid': {
                            'exemplarCity': 'มาดริด'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'ลักเซมเบิร์ก'
                        },
                        'London': {
                            'long': {
                                'daylight': 'เวลาฤดูร้อนอังกฤษ'
                            },
                            'exemplarCity': 'ลอนดอน'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'ลูบลิยานา'
                        },
                        'Lisbon': {
                            'exemplarCity': 'ลิสบอน'
                        },
                        'Kiev': {
                            'exemplarCity': 'เคียฟ'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'คาลินิงกราด'
                        },
                        'Jersey': {
                            'exemplarCity': 'เจอร์ซีย์'
                        },
                        'Istanbul': {
                            'exemplarCity': 'อิสตันบูล'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'เกาะแมน'
                        },
                        'Bucharest': {
                            'exemplarCity': 'บูคาเรส'
                        },
                        'Brussels': {
                            'exemplarCity': 'บรัสเซลส์'
                        },
                        'Bratislava': {
                            'exemplarCity': 'บราติสลาวา'
                        },
                        'Berlin': {
                            'exemplarCity': 'เบอร์ลิน'
                        },
                        'Belgrade': {
                            'exemplarCity': 'เบลเกรด'
                        },
                        'Athens': {
                            'exemplarCity': 'เอเธนส์'
                        },
                        'Andorra': {
                            'exemplarCity': 'อันดอร์รา'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'อัมสเตอดัม'
                        },
                        'Simferopol': {
                            'exemplarCity': 'ซิมเฟอโรโปล'
                        },
                        'Skopje': {
                            'exemplarCity': 'สโกเปีย'
                        },
                        'Sofia': {
                            'exemplarCity': 'โซเฟีย'
                        },
                        'Stockholm': {
                            'exemplarCity': 'สตอกโฮล์ม'
                        },
                        'Tallinn': {
                            'exemplarCity': 'ทาลลินน์'
                        },
                        'Tirane': {
                            'exemplarCity': 'ติรานา'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'อัซโกร็อด'
                        },
                        'Vaduz': {
                            'exemplarCity': 'วาดุซ'
                        },
                        'Zurich': {
                            'exemplarCity': 'ซูริค'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'ซาโปโรซี'
                        },
                        'Zagreb': {
                            'exemplarCity': 'ซาเกร็บ'
                        },
                        'Warsaw': {
                            'exemplarCity': 'วอร์ซอ'
                        },
                        'Volgograd': {
                            'exemplarCity': 'วอลโกกราด'
                        },
                        'Vilnius': {
                            'exemplarCity': 'วิลนีอุส'
                        },
                        'Vienna': {
                            'exemplarCity': 'เวียนนา'
                        },
                        'Vatican': {
                            'exemplarCity': 'วาติกัน'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'ซาราเยโว'
                        },
                        'San_Marino': {
                            'exemplarCity': 'ซานมารีโน'
                        },
                        'Samara': {
                            'exemplarCity': 'ซามารา'
                        },
                        'Rome': {
                            'exemplarCity': 'โรม'
                        },
                        'Riga': {
                            'exemplarCity': 'ริกา'
                        },
                        'Prague': {
                            'exemplarCity': 'ปราก'
                        },
                        'Podgorica': {
                            'exemplarCity': 'พอดกอรีตซา'
                        },
                        'Paris': {
                            'exemplarCity': 'ปารีส'
                        },
                        'Helsinki': {
                            'exemplarCity': 'เฮลซิงกิ'
                        },
                        'Guernsey': {
                            'exemplarCity': 'เกิร์นซีย์'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'ยิบรอลตาร์'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'เวลาฤดูร้อนไอร์แลนด์'
                            },
                            'exemplarCity': 'ดับบลิน'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'โคเปนเฮเกน'
                        },
                        'Chisinau': {
                            'exemplarCity': 'คีชีเนา'
                        },
                        'Busingen': {
                            'exemplarCity': 'บุสซิงเง็น'
                        },
                        'Budapest': {
                            'exemplarCity': 'บูดาเปส'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'ลีเบรอวิล'
                        },
                        'Lagos': {
                            'exemplarCity': 'ลากอส'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'กินชาซา'
                        },
                        'Kigali': {
                            'exemplarCity': 'คิกาลี'
                        },
                        'Khartoum': {
                            'exemplarCity': 'คาร์ทูม'
                        },
                        'Kampala': {
                            'exemplarCity': 'คัมพาลา'
                        },
                        'Juba': {
                            'exemplarCity': 'จูบา'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'โจฮันเนสเบอร์ก'
                        },
                        'Harare': {
                            'exemplarCity': 'ฮาราเร'
                        },
                        'Gaborone': {
                            'exemplarCity': 'กาโบโรเน'
                        },
                        'Freetown': {
                            'exemplarCity': 'ฟรีทาวน์'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'เอลไอย์อุง'
                        },
                        'Douala': {
                            'exemplarCity': 'ดูอาลา'
                        },
                        'Djibouti': {
                            'exemplarCity': 'จิบูตี'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'ดาร์เอสซาลาม'
                        },
                        'Dakar': {
                            'exemplarCity': 'ดาการ์'
                        },
                        'Banjul': {
                            'exemplarCity': 'บันจูล'
                        },
                        'Bangui': {
                            'exemplarCity': 'บังกี'
                        },
                        'Bamako': {
                            'exemplarCity': 'บามาโก'
                        },
                        'Asmera': {
                            'exemplarCity': 'แอสมารา'
                        },
                        'Malabo': {
                            'exemplarCity': 'มาลาโบ'
                        },
                        'Maputo': {
                            'exemplarCity': 'มาปูโต'
                        },
                        'Maseru': {
                            'exemplarCity': 'มาเซรู'
                        },
                        'Mbabane': {
                            'exemplarCity': 'อัมบาบาเน'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'โมกาดิชู'
                        },
                        'Monrovia': {
                            'exemplarCity': 'มันโรเวีย'
                        },
                        'Nairobi': {
                            'exemplarCity': 'ไนโรเบีย'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'เอ็นจาเมนา'
                        },
                        'Windhoek': {
                            'exemplarCity': 'วินด์ฮุก'
                        },
                        'Tunis': {
                            'exemplarCity': 'ตูนิส'
                        },
                        'Tripoli': {
                            'exemplarCity': 'ตรีโปลี'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'เซาตูเม'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'ปอร์โต-โนโว'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'วากาดูกู'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'นูแอกชอต'
                        },
                        'Niamey': {
                            'exemplarCity': 'นีอาเมย์'
                        },
                        'Lusaka': {
                            'exemplarCity': 'ลูซากา'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'ลูบัมบาชิ'
                        },
                        'Luanda': {
                            'exemplarCity': 'ลูอันดา'
                        },
                        'Lome': {
                            'exemplarCity': 'โลเม'
                        },
                        'Conakry': {
                            'exemplarCity': 'โกนากรี'
                        },
                        'Ceuta': {
                            'exemplarCity': 'เซวตา'
                        },
                        'Casablanca': {
                            'exemplarCity': 'คาสซาบลางก้า'
                        },
                        'Cairo': {
                            'exemplarCity': 'ไคโร'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'บูจุมบูรา'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'บราซซาวิล'
                        },
                        'Blantyre': {
                            'exemplarCity': 'แบลนไทร์'
                        },
                        'Bissau': {
                            'exemplarCity': 'บิสเซา'
                        },
                        'Abidjan': {
                            'exemplarCity': 'อาบีจาน'
                        },
                        'Accra': {
                            'exemplarCity': 'อักกรา'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'แอดดิสอาบาบา'
                        },
                        'Algiers': {
                            'exemplarCity': 'แอลเจียร์'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'เซี่ยงไฮ้'
                        },
                        'Seoul': {
                            'exemplarCity': 'โซล'
                        },
                        'Samarkand': {
                            'exemplarCity': 'ซามาร์กานด์'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'ซาคาลิน'
                        },
                        'Saigon': {
                            'exemplarCity': 'นครโฮจิมินห์'
                        },
                        'Riyadh': {
                            'exemplarCity': 'ริยาร์ด'
                        },
                        'Rangoon': {
                            'exemplarCity': 'ย่างกุ้ง'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'ไคซีลอร์ดา'
                        },
                        'Qatar': {
                            'exemplarCity': 'กาตาร์'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'เปียงยาง'
                        },
                        'Pontianak': {
                            'exemplarCity': 'พอนเทียนัก'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'พนมเปญ'
                        },
                        'Oral': {
                            'exemplarCity': 'ออรัล'
                        },
                        'Omsk': {
                            'exemplarCity': 'โอมสก์'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'โนโวซิบิร์สก์'
                        },
                        'Baghdad': {
                            'exemplarCity': 'แบกแดด'
                        },
                        'Chongqing': {
                            'exemplarCity': 'ฉงชิ่ง'
                        },
                        'Colombo': {
                            'exemplarCity': 'โคลัมโบ'
                        },
                        'Damascus': {
                            'exemplarCity': 'ดามัสกัส'
                        },
                        'Dhaka': {
                            'exemplarCity': 'ดากา'
                        },
                        'Dili': {
                            'exemplarCity': 'ดิลี'
                        },
                        'Dubai': {
                            'exemplarCity': 'ดูไบ'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'ดูชานเบ'
                        },
                        'Gaza': {
                            'exemplarCity': 'กาซา'
                        },
                        'Harbin': {
                            'exemplarCity': 'ฮาร์บิน'
                        },
                        'Hebron': {
                            'exemplarCity': 'เฮบรอน'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'ฮ่องกง'
                        },
                        'Hovd': {
                            'exemplarCity': 'ฮอฟด์'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'อีร์คุตสค์'
                        },
                        'Jakarta': {
                            'exemplarCity': 'จาการ์ตา'
                        },
                        'Jayapura': {
                            'exemplarCity': 'จายาปุระ'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'อูลานบาตอร์'
                        },
                        'Urumqi': {
                            'exemplarCity': 'อุรุมชี'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'อุสต์เนรา'
                        },
                        'Vientiane': {
                            'exemplarCity': 'เวียงจันทน์'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'วลาดิโวสต็อก'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'ยาคุตสค์'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'ยีคาเตอรินเบิร์ก'
                        },
                        'Yerevan': {
                            'exemplarCity': 'เยเรวาน'
                        },
                        'Tokyo': {
                            'exemplarCity': 'โตเกียว'
                        },
                        'Thimphu': {
                            'exemplarCity': 'ทิมพู'
                        },
                        'Tehran': {
                            'exemplarCity': 'เตหะราน'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'ทบิลิซิ'
                        },
                        'Tashkent': {
                            'exemplarCity': 'ทาชเคนต์'
                        },
                        'Taipei': {
                            'exemplarCity': 'ไทเป'
                        },
                        'Singapore': {
                            'exemplarCity': 'สิงคโปร์'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'เยรูซาเลม'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'อาชกาบัต'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'อัคโทบี'
                        },
                        'Aqtau': {
                            'exemplarCity': 'อัคตาอู'
                        },
                        'Anadyr': {
                            'exemplarCity': 'อานาดีร์'
                        },
                        'Amman': {
                            'exemplarCity': 'อัมมาน'
                        },
                        'Almaty': {
                            'exemplarCity': 'อัลมาตี'
                        },
                        'Aden': {
                            'exemplarCity': 'เอเดน'
                        },
                        'Bahrain': {
                            'exemplarCity': 'บาห์เรน'
                        },
                        'Baku': {
                            'exemplarCity': 'บากู'
                        },
                        'Bangkok': {
                            'exemplarCity': 'กรุงเทพ'
                        },
                        'Beirut': {
                            'exemplarCity': 'เบรุต'
                        },
                        'Bishkek': {
                            'exemplarCity': 'บิชเคก'
                        },
                        'Brunei': {
                            'exemplarCity': 'บรูไน'
                        },
                        'Calcutta': {
                            'exemplarCity': 'โกลกาตา'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'ชอยบาลซาน'
                        },
                        'Kabul': {
                            'exemplarCity': 'คาบูล'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'คามชัตกา'
                        },
                        'Karachi': {
                            'exemplarCity': 'การาจี'
                        },
                        'Kashgar': {
                            'exemplarCity': 'กัชการ์'
                        },
                        'Katmandu': {
                            'exemplarCity': 'กาตมันดุ'
                        },
                        'Khandyga': {
                            'exemplarCity': 'ฮันดืยกา'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'ครัสโนยาร์สก์'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'กัวลาลัมเปอร์'
                        },
                        'Kuching': {
                            'exemplarCity': 'กูชิง'
                        },
                        'Kuwait': {
                            'exemplarCity': 'คูเวต'
                        },
                        'Macau': {
                            'exemplarCity': 'มาเก๊า'
                        },
                        'Magadan': {
                            'exemplarCity': 'มากาดาน'
                        },
                        'Makassar': {
                            'exemplarCity': 'มากัสซาร์'
                        },
                        'Manila': {
                            'exemplarCity': 'มะนิลา'
                        },
                        'Muscat': {
                            'exemplarCity': 'มัสกัต'
                        },
                        'Nicosia': {
                            'exemplarCity': 'นิโคเซีย'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'โนโวคุซเนตสค์'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'เวลาซามัว',
                            'standard': 'เวลามาตรฐานซามัว',
                            'daylight': 'เวลาฤดูร้อนซามัว'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'เวลาซามารา',
                            'standard': 'เวลามาตรฐานซามารา',
                            'daylight': 'เวลาฤดูร้อนซามารา'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'เวลาซาคาลิน',
                            'standard': 'เวลามาตรฐานซาคาลิน',
                            'daylight': 'เวลาฤดูร้อนซาคาลิน'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'เวลาโรธีรา'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'เวลาเรอูนียง'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'เวลาคืยซิลออร์ดา',
                            'standard': 'เวลามาตรฐานคืยซิลออร์ดา',
                            'daylight': 'เวลาฤดูร้อนคืยซิลออร์ดา'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'เวลาโปเนป'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'เวลาพิตแคร์น'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'เวลาแซงปีแยร์และมีเกอลง',
                            'standard': 'เวลามาตรฐานแซงปีแยร์และมีเกอลง',
                            'daylight': 'เวลาออมแสงของแซงปีแยร์และมีเกอลง'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะฟินิกซ์'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'เวลาฟิลิปปินส์',
                            'standard': 'เวลามาตรฐานฟิลิปปินส์',
                            'daylight': 'เวลาฤดูร้อนฟิลิปปินส์'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'เวลาเปรู',
                            'standard': 'เวลามาตรฐานเปรู',
                            'daylight': 'เวลาฤดูร้อนเปรู'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'เวลาปารากวัย',
                            'standard': 'เวลามาตรฐานปารากวัย',
                            'daylight': 'เวลาฤดูร้อนปารากวัย'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'เวลาปาปัวนิวกินี'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'เวลาปาเลา'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'เวลาปากีสถาน',
                            'standard': 'เวลามาตรฐานปากีสถาน',
                            'daylight': 'เวลาฤดูร้อนปากีสถาน'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'เวลาออมสค์',
                            'standard': 'เวลามาตรฐานออมสค์',
                            'daylight': 'เวลาฤดูร้อนออมสค์'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'เวลาโนโวซีบีสค์',
                            'standard': 'เวลามาตรฐานโนโวซีบีสค์',
                            'daylight': 'เวลาฤดูร้อนโนโวซีบีสค์'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะมาเรียนาเหนือ'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'เวลาหมู่เกาะเฟอร์นันโด',
                            'standard': 'เวลามาตรฐานหมู่เกาะเฟอร์นันโด',
                            'daylight': 'เวลาฤดูร้อนของหมู่เกาะเฟอร์นันโด'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'เวลาเกาะนอร์ฟอล์ก'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'เวลานีอูเอ'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'เวลานิวฟันด์แลนด์',
                            'standard': 'เวลามาตรฐานนิวฟันด์แลนด์',
                            'daylight': 'เวลาออมแสงนิวฟันด์แลนด์'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'เวลานิวซีแลนด์',
                            'standard': 'เวลามาตรฐานนิวซีแลนด์',
                            'daylight': 'เวลาออมแสงนิวซีแลนด์'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'เวลานิวแคลิโดเนีย',
                            'standard': 'เวลามาตรฐานนิวแคลิโดเนีย',
                            'daylight': 'เวลาฤดูร้อนนิวแคลิโดเนีย'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'เวลาตอนกลาง',
                            'standard': 'เวลามาตรฐานตอนกลาง',
                            'daylight': 'เวลาออมแสงทางตอนกลาง'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'เวลาตะวันออก',
                            'standard': 'เวลามาตรฐานตะวันออก',
                            'daylight': 'เวลาออมแสงทางตะวันออก'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'เวลาแถบภูเขา',
                            'standard': 'เวลามาตรฐานแถบภูเขา',
                            'daylight': 'เวลาออมแสงแถบภูเขา'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'เวลาแปซิฟิก',
                            'standard': 'เวลามาตรฐานแปซิฟิก',
                            'daylight': 'เวลาออมแสงของแปซิฟิก'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'เวลาอะนาดีร์',
                            'standard': 'เวลามาตรฐานอะนาดีร์',
                            'daylight': 'เวลาฤดูร้อนอะนาดีร์'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'เวลาอัคตาอู',
                            'standard': 'เวลามาตรฐานอัคตาอู',
                            'daylight': 'เวลาฤดูร้อนอัคตาอู'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'เวลาอัคโทเบ',
                            'standard': 'เวลามาตรฐานอัคโทเบ',
                            'daylight': 'เวลาฤดูร้อนอัคโทเบ'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'เวลาเคปเวิร์ด',
                            'standard': 'เวลามาตรฐานเคปเวิร์ด',
                            'daylight': 'เวลาฤดูร้อนเคปเวิร์ด'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'เวลาเคซีย์'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'เวลาชามอร์โร'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'เวลาแชทัม',
                            'standard': 'เวลามาตรฐานแชทัม',
                            'daylight': 'เวลาออมแสงแชทัม'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'เวลาชิลี',
                            'standard': 'เวลามาตรฐานชิลี',
                            'daylight': 'เวลาฤดูร้อนชิลี'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'เวลาจีน',
                            'standard': 'เวลามาตรฐานจีน',
                            'daylight': 'เวลาออมแสงจีน'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'เวลาชอยปาลชาน',
                            'standard': 'เวลามาตรฐานชอยปาลชาน',
                            'daylight': 'เวลาฤดูร้อนชอยปาลชาน'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'เวลาเกาะคริสต์มาส'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะโคโคส'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'เวลาโคลอมเบีย',
                            'standard': 'เวลามาตรฐานโคลอมเบีย',
                            'daylight': 'เวลาฤดูร้อนโคลอมเบีย'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'เวลาหมู่เกาะคุก',
                            'standard': 'เวลามาตรฐานหมู่เกาะคุก',
                            'daylight': 'เวลาครึ่งฤดูร้อนหมู่เกาะคุก'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'เวลาคิวบา',
                            'standard': 'เวลามาตรฐานคิวบา',
                            'daylight': 'เวลาออมแสงของคิวบา'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'เวลาเดวิส'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'เวลาดูมองต์ดูร์วิลล์'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'เวลาติมอร์ตะวันออก'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'เวลาเกาะอีสเตอร์',
                            'standard': 'เวลามาตรฐานเกาะอีสเตอร์',
                            'daylight': 'เวลาฤดูร้อนเกาะอีสเตอร์'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'เวลาเอกวาดอร์'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'เวลายุโรปกลาง',
                            'standard': 'เวลามาตรฐานยุโรปกลาง',
                            'daylight': 'เวลาฤดูร้อนยุโรปกลาง'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'เวลายุโรปตะวันออก',
                            'standard': 'เวลามาตรฐานยุโรปตะวันออก',
                            'daylight': 'เวลาฤดูร้อนยุโรปตะวันออก'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'เวลายุโรปตะวันตก',
                            'standard': 'เวลามาตรฐานยุโรปตะวันตก',
                            'daylight': 'เวลาฤดูร้อนยุโรปตะวันตก'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'เวลาหมู่เกาะฟอล์กแลนด์',
                            'standard': 'เวลามาตรฐานหมู่เกาะฟอล์กแลนด์',
                            'daylight': 'เวลาฤดูร้อนหมู่เกาะฟอล์กแลนด์'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'เวลาฟิจิ',
                            'standard': 'เวลามาตรฐานฟิจิ',
                            'daylight': 'เวลาฤดูร้อนฟิจิ'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'เวลาเฟรนช์เกียนา'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'เวลาเฟรนช์เซาเทิร์นและแอนตาร์กติก'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'เวลากาลาปาโกส'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'เวลาโตเกเลา'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'เวลาตองกา',
                            'standard': 'เวลามาตรฐานตองกา',
                            'daylight': 'เวลาฤดูร้อนตองกา'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'เวลาชุก'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'เวลาเติร์กเมนิสถาน',
                            'standard': 'เวลามาตรฐานเติร์กเมนิสถาน',
                            'daylight': 'เวลาฤดูร้อนเติร์กเมนิสถาน'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'เวลาตูวาลู'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'เวลาอุรุกวัย',
                            'standard': 'เวลามาตรฐานอุรุกวัย',
                            'daylight': 'เวลาฤดูร้อนอุรุกวัย'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'เวลาอุซเบกิสถาน',
                            'standard': 'เวลามาตรฐานอุซเบกิสถาน',
                            'daylight': 'เวลาฤดูร้อนอุซเบกิสถาน'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'เวลาวานูอาตู',
                            'standard': 'เวลามาตรฐานวานูอาตู',
                            'daylight': 'เวลาฤดูร้อนวานูอาตู'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'เวลาเยคาเตรินบูร์ก',
                            'standard': 'เวลามาตรฐานเยคาเตรินบูร์ก',
                            'daylight': 'เวลาฤดูร้อนเยคาเตรินบูร์ก'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'เวลายาคุตสค์',
                            'standard': 'เวลามาตรฐานยาคุตสค์',
                            'daylight': 'เวลาฤดูร้อนยาคุตสค์'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'เวลาวาลลิสและฟุตูนา'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'เวลาเกาะเวก'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'เวลาวอสตอค'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'เวลาวอลโกกราด',
                            'standard': 'เวลามาตรฐานวอลโกกราด',
                            'daylight': 'เวลาฤดูร้อนวอลโกกราด'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'เวลาวลาดีวอสตอค',
                            'standard': 'เวลามาตรฐานวลาดีวอสตอค',
                            'daylight': 'เวลาฤดูร้อนวลาดีวอสตอค'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'เวลาเวเนซุเอลา'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'เวลาทาจิกิสถาน'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': 'เวลาไทเป',
                            'standard': 'เวลามาตรฐานไทเป',
                            'daylight': 'เวลาออมแสงไทเป'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'เวลาตาฮีตี'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'เวลาโซวา'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'เวลาซูรินาเม'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'เวลาเซาท์จอร์เจีย'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะโซโลมอน'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'เวลาสิงคโปร์'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'เวลาเซเชลส์'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'เวลากวม'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'เวลากรีนแลนด์ตะวันตก',
                            'standard': 'เวลามาตรฐานกรีนแลนด์ตะวันตก',
                            'daylight': 'เวลาฤดูร้อนกรีนแลนด์ตะวันตก'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'เวลากรีนแลนด์ตะวันออก',
                            'standard': 'เวลามาตรฐานกรีนแลนด์ตะวันออก',
                            'daylight': 'เวลาฤดูร้อนกรีนแลนด์ตะวันออก'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'เวลามาตรฐานกรีนิช'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะกิลเบิร์ต'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'เวลาจอร์เจีย',
                            'standard': 'เวลามาตรฐานจอร์เจีย',
                            'daylight': 'เวลาฤดูร้อนจอร์เจีย'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'เวลาแกมเบียร์'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'เวลาอะเมซอน',
                            'standard': 'เวลามาตรฐานอะเมซอน',
                            'daylight': 'เวลาฤดูร้อนอะเมซอน'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'เวลาอาเกร',
                            'standard': 'เวลามาตรฐานอาเกร',
                            'daylight': 'เวลาฤดูร้อนอาเกร'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'เวลาอัฟกานิสถาน'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'เวลาแอฟริกากลาง'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'เวลาแอฟริกาตะวันออก'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'เวลาแอฟริกาใต้'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'เวลาแอฟริกาตะวันตก',
                            'standard': 'เวลามาตรฐานแอฟริกาตะวันตก',
                            'daylight': 'เวลาฤดูร้อนแอฟริกาตะวันตก'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'เวลาอะแลสกา',
                            'standard': 'เวลามาตรฐานอะแลสกา',
                            'daylight': 'เวลาออมแสงของอะแลสกา'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'เวลาอัลมาตี',
                            'standard': 'เวลามาตรฐานอัลมาตี',
                            'daylight': 'เวลาฤดูร้อนอัลมาตี'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'เวลาอาหรับ',
                            'standard': 'เวลามาตรฐานอาหรับ',
                            'daylight': 'เวลาออมแสงอาหรับ'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'เวลาอาร์เจนตินา',
                            'standard': 'เวลามาตรฐานอาร์เจนตินา',
                            'daylight': 'เวลาฤดูร้อนอาร์เจนตินา'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'เวลาตะวันตกของอาร์เจนตินา',
                            'standard': 'เวลามาตรฐานทางตะวันตกของอาร์เจนตินา',
                            'daylight': 'เวลาฤดูร้อนทางตะวันตกของอาร์เจนตินา'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'เวลาอาร์เมเนีย',
                            'standard': 'เวลามาตรฐานอาร์เมเนีย',
                            'daylight': 'เวลาฤดูร้อนอาร์เมเนีย'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'เวลาแอตแลนติก',
                            'standard': 'เวลามาตรฐานแอตแลนติก',
                            'daylight': 'เวลาออมแสงของแอตแลนติก'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'เวลาออสเตรเลียกลาง',
                            'standard': 'เวลามาตรฐานทางตอนกลางของออสเตรเลีย',
                            'daylight': 'เวลาออมแสงทางตอนกลางของออสเตรเลีย'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'เวลาทางตะวันตกตอนกลางของออสเตรเลีย',
                            'standard': 'เวลามาตรฐานทางตะวันตกตอนกลางของออสเตรเลีย',
                            'daylight': 'เวลาออมแสงทางตะวันตกตอนกลางของออสเตรเลีย'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'เวลาออสเตรเลียตะวันออก',
                            'standard': 'เวลามาตรฐานทางตะวันออกของออสเตรเลีย',
                            'daylight': 'เวลาออมแสงทางตะวันออกของออสเตรเลีย'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'เวลาออสเตรเลียตะวันตก',
                            'standard': 'เวลามาตรฐานทางตะวันตกของออสเตรเลีย',
                            'daylight': 'เวลาออมแสงทางตะวันตกของออสเตรเลีย'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'เวลาอาเซอร์ไบจาน',
                            'standard': 'เวลามาตรฐานอาเซอร์ไบจาน',
                            'daylight': 'เวลาฤดูร้อนอาเซอร์ไบจาน'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'เวลาอะโซร์ส',
                            'standard': 'เวลามาตรฐานอะโซร์ส',
                            'daylight': 'เวลาฤดูร้อนอะโซร์ส'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'เวลาบังกลาเทศ',
                            'standard': 'เวลามาตรฐานบังกลาเทศ',
                            'daylight': 'เวลาฤดูร้อนบังกลาเทศ'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'เวลาภูฏาน'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'เวลาโบลิเวีย'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'เวลาบราซิเลีย',
                            'standard': 'เวลามาตรฐานบราซิเลีย',
                            'daylight': 'เวลาฤดูร้อนบราซิเลีย'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'เวลาบรูไนดารุสซาลาม'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'เวลากัลฟ์'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'เวลากายอานา'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'เวลาฮาวาย-อะลูเชียน',
                            'standard': 'เวลามาตรฐานฮาวาย-อะลูเชียน',
                            'daylight': 'เวลาออมแสงฮาวาย-อะลูเชียน'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'เวลาฮ่องกง',
                            'standard': 'เวลามาตรฐานฮ่องกง',
                            'daylight': 'เวลาฤดูร้อนฮ่องกง'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'เวลาฮอฟด์',
                            'standard': 'เวลามาตรฐานฮอฟด์',
                            'daylight': 'เวลาฤดูร้อนฮอฟด์'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'เวลาอินเดีย'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'เวลามหาสมุทรอินเดีย'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'เวลาอินโดจีน'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'เวลาอินโดนีเซียตอนกลาง'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'เวลาอินโดนีเซียฝั่งตะวันออก'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'เวลาอินโดนีเซียฝั่งตะวันตก'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'เวลาอิหร่าน',
                            'standard': 'เวลามาตรฐานอิหร่าน',
                            'daylight': 'เวลาออมแสงอิหร่าน'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'เวลาอีร์คุตสค์',
                            'standard': 'เวลามาตรฐานอีร์คุตสค์',
                            'daylight': 'เวลาฤดูร้อนอีร์คุตสค์'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'เวลาอิสราเอล',
                            'standard': 'เวลามาตรฐานอิสราเอล',
                            'daylight': 'เวลาออมแสงอิสราเอล'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'เวลาญี่ปุ่น',
                            'standard': 'เวลามาตรฐานญี่ปุ่น',
                            'daylight': 'เวลาออมแสงญี่ปุ่น'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'เวลาคัมชัตคา',
                            'standard': 'เวลาเปโตรปัฟลอฟสค์-คัมชัตสกี',
                            'daylight': 'เวลาฤดูร้อนเปโตรปัฟลอฟสค์-คัมชัตสกี'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'เวลาคาซัคสถานตะวันออก'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'เวลาคาซัคสถานตะวันตก'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'เวลาเกาหลี',
                            'standard': 'เวลามาตรฐานเกาหลี',
                            'daylight': 'เวลาออมแสงเกาหลี'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'เวลาคอสไร'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'เวลาครัสโนยาสค์',
                            'standard': 'เวลามาตรฐานครัสโนยาสค์',
                            'daylight': 'เวลาฤดูร้อนครัสโนยาสค์'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'เวลาคีร์กีซสถาน'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'เวลาลังกา'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะไลน์'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'เวลาลอร์ดโฮว',
                            'standard': 'เวลามาตรฐานลอร์ดโฮว์',
                            'daylight': 'เวลาออมแสงของลอร์ดโฮว์'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'เวลามาเก๊า',
                            'standard': 'เวลามาตรฐานมาเก๊า',
                            'daylight': 'เวลาฤดูร้อนมาเก๊า'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'เวลาเกาะแมกควอรี'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'เวลามากาดาน',
                            'standard': 'เวลามาตรฐานมากาดาน',
                            'daylight': 'เวลาฤดูร้อนมากาดาน'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'เวลามาเลเซีย'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'เวลามัลดีฟส์'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'เวลามาร์เคซัส'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'เวลาหมู่เกาะมาร์แชลล์'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'เวลามอริเชียส',
                            'standard': 'เวลามาตรฐานมอริเชียส',
                            'daylight': 'เวลาฤดูร้อนของมอริเชียส'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'เวลามอว์สัน'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'เวลาอูลานบาตอร์',
                            'standard': 'เวลามาตรฐานอูลานบาตอร์',
                            'daylight': 'เวลาฤดูร้อนอูลานบาตอร์'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'เวลามอสโก',
                            'standard': 'เวลามาตรฐานมอสโก',
                            'daylight': 'เวลาฤดูร้อนมอสโก'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'เวลาพม่า'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'เวลานาอูรู'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'เวลาเนปาล'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': 'เวลา{0}',
                'regionFormat-type-daylight': 'เวลาออมแสง{0}',
                'regionFormat-type-standard': 'เวลามาตรฐาน{0}',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'ส.ค.',
                                '7': 'ก.ค.',
                                '6': 'มิ.ย.',
                                '5': 'พ.ค.',
                                '12': 'ธ.ค.',
                                '11': 'พ.ย.',
                                '10': 'ต.ค.',
                                '9': 'ก.ย.',
                                '1': 'ม.ค.',
                                '2': 'ก.พ.',
                                '3': 'มี.ค.',
                                '4': 'เม.ย.'
                            },
                            'narrow': {
                                '8': 'ส.ค.',
                                '7': 'ก.ค.',
                                '6': 'มิ.ย.',
                                '5': 'พ.ค.',
                                '12': 'ธ.ค.',
                                '11': 'พ.ย.',
                                '10': 'ต.ค.',
                                '9': 'ก.ย.',
                                '1': 'ม.ค.',
                                '2': 'ก.พ.',
                                '3': 'มี.ค.',
                                '4': 'เม.ย.'
                            },
                            'wide': {
                                '8': 'สิงหาคม',
                                '7': 'กรกฎาคม',
                                '6': 'มิถุนายน',
                                '5': 'พฤษภาคม',
                                '12': 'ธันวาคม',
                                '11': 'พฤศจิกายน',
                                '10': 'ตุลาคม',
                                '9': 'กันยายน',
                                '1': 'มกราคม',
                                '2': 'กุมภาพันธ์',
                                '3': 'มีนาคม',
                                '4': 'เมษายน'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'ส.ค.',
                                '7': 'ก.ค.',
                                '6': 'มิ.ย.',
                                '5': 'พ.ค.',
                                '12': 'ธ.ค.',
                                '11': 'พ.ย.',
                                '10': 'ต.ค.',
                                '9': 'ก.ย.',
                                '1': 'ม.ค.',
                                '2': 'ก.พ.',
                                '3': 'มี.ค.',
                                '4': 'เม.ย.'
                            },
                            'narrow': {
                                '8': 'ส.ค.',
                                '7': 'ก.ค.',
                                '6': 'มิ.ย.',
                                '5': 'พ.ค.',
                                '12': 'ธ.ค.',
                                '11': 'พ.ย.',
                                '10': 'ต.ค.',
                                '9': 'ก.ย.',
                                '1': 'ม.ค.',
                                '2': 'ก.พ.',
                                '3': 'มี.ค.',
                                '4': 'เม.ย.'
                            },
                            'wide': {
                                '8': 'สิงหาคม',
                                '7': 'กรกฎาคม',
                                '6': 'มิถุนายน',
                                '5': 'พฤษภาคม',
                                '12': 'ธันวาคม',
                                '11': 'พฤศจิกายน',
                                '10': 'ตุลาคม',
                                '9': 'กันยายน',
                                '1': 'มกราคม',
                                '2': 'กุมภาพันธ์',
                                '3': 'มีนาคม',
                                '4': 'เมษายน'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'อา.',
                                'mon': 'จ.',
                                'tue': 'อ.',
                                'wed': 'พ.',
                                'thu': 'พฤ.',
                                'fri': 'ศ.',
                                'sat': 'ส.'
                            },
                            'narrow': {
                                'sun': 'อา',
                                'mon': 'จ',
                                'tue': 'อ',
                                'wed': 'พ',
                                'thu': 'พฤ',
                                'fri': 'ศ',
                                'sat': 'ส'
                            },
                            'short': {
                                'sun': 'อา.',
                                'mon': 'จ.',
                                'tue': 'อ.',
                                'wed': 'พ.',
                                'thu': 'พฤ.',
                                'fri': 'ศ.',
                                'sat': 'ส.'
                            },
                            'wide': {
                                'sun': 'วันอาทิตย์',
                                'mon': 'วันจันทร์',
                                'tue': 'วันอังคาร',
                                'wed': 'วันพุธ',
                                'thu': 'วันพฤหัสบดี',
                                'fri': 'วันศุกร์',
                                'sat': 'วันเสาร์'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'อา.',
                                'mon': 'จ.',
                                'tue': 'อ.',
                                'wed': 'พ.',
                                'thu': 'พฤ.',
                                'fri': 'ศ.',
                                'sat': 'ส.'
                            },
                            'narrow': {
                                'sun': 'อา',
                                'mon': 'จ',
                                'tue': 'อ',
                                'wed': 'พ',
                                'thu': 'พฤ',
                                'fri': 'ศ',
                                'sat': 'ส'
                            },
                            'short': {
                                'sun': 'อา.',
                                'mon': 'จ.',
                                'tue': 'อ.',
                                'wed': 'พ.',
                                'thu': 'พฤ.',
                                'fri': 'ศ.',
                                'sat': 'ส.'
                            },
                            'wide': {
                                'sun': 'วันอาทิตย์',
                                'mon': 'วันจันทร์',
                                'tue': 'วันอังคาร',
                                'wed': 'วันพุธ',
                                'thu': 'วันพฤหัสบดี',
                                'fri': 'วันศุกร์',
                                'sat': 'วันเสาร์'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            },
                            'narrow': {
                                '1': '1',
                                '2': '2',
                                '3': '3',
                                '4': '4'
                            },
                            'wide': {
                                '1': 'ไตรมาส 1',
                                '2': 'ไตรมาส 2',
                                '3': 'ไตรมาส 3',
                                '4': 'ไตรมาส 4'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            },
                            'narrow': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            },
                            'wide': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            },
                            'narrow': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            },
                            'wide': {
                                'am': 'ก่อนเที่ยง',
                                'pm': 'หลังเที่ยง'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'ปีก่อนคริสต์ศักราช',
                            '0-alt-variant': 'ก่อนสามัญศักราช',
                            '1': 'คริสต์ศักราช',
                            '1-alt-variant': 'สามัญศักราช'
                        },
                        'eraAbbr': {
                            '0': 'ปีก่อน ค.ศ.',
                            '0-alt-variant': 'ก.ส.ศ.',
                            '1': 'ค.ศ.',
                            '1-alt-variant': 'ส.ศ.'
                        },
                        'eraNarrow': {
                            '0': 'ก่อน ค.ศ.',
                            '0-alt-variant': 'ก.ส.ศ.',
                            '1': 'ค.ศ.',
                            '1-alt-variant': 'ส.ศ.'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEEที่ d MMMM G y',
                        'long': 'd MMMM y',
                        'medium': 'd MMM y',
                        'short': 'd/M/yy'
                    },
                    'timeFormats': {
                        'full': 'H นาฬิกา mm นาที ss วินาที zzzz',
                        'long': 'H นาฬิกา mm นาที ss วินาที z',
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
                                'H': 'HH–HH v'
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
                                'M': 'MMM–MMM y',
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
                                'M': 'MMMM–MMMM y',
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
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'h a - h a',
                                'h': 'h-h a'
                            },
                            'd': {
                                'd': 'd-d'
                            },
                            'intervalFormatFallback': '{0} – {1}'
                        }
                    }
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
