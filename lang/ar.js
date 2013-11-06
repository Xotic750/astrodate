/* AstroDate
 * Language: ar
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
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
        AstroDate.lang('ar', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'سايبان'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'راروتونغا'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'بور مورسبي'
                        },
                        'Ponape': {
                            'exemplarCity': 'باناب'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'بيتكيرن'
                        },
                        'Palau': {
                            'exemplarCity': 'بالاو'
                        },
                        'Auckland': {
                            'exemplarCity': 'أوكلاند'
                        },
                        'Apia': {
                            'exemplarCity': 'أبيا'
                        },
                        'Funafuti': {
                            'exemplarCity': 'فونافوتي'
                        },
                        'Galapagos': {
                            'exemplarCity': 'جلاباجوس'
                        },
                        'Gambier': {
                            'exemplarCity': 'جامبير'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'غوادالكانال'
                        },
                        'Guam': {
                            'exemplarCity': 'غوام'
                        },
                        'Honolulu': {
                            'exemplarCity': 'هونولولو'
                        },
                        'Wallis': {
                            'exemplarCity': 'واليس'
                        },
                        'Wake': {
                            'exemplarCity': 'واك'
                        },
                        'Truk': {
                            'exemplarCity': 'ترك'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'تونغاتابو'
                        },
                        'Tarawa': {
                            'exemplarCity': 'تاراوا'
                        },
                        'Tahiti': {
                            'exemplarCity': 'تاهيتي'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'كيريتي ماتي'
                        },
                        'Johnston': {
                            'exemplarCity': 'جونستون'
                        },
                        'Chatham': {
                            'exemplarCity': 'تشاثام'
                        },
                        'Easter': {
                            'exemplarCity': 'استر'
                        },
                        'Efate': {
                            'exemplarCity': 'إيفات'
                        },
                        'Enderbury': {
                            'exemplarCity': 'اندربيرج'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'فاكاوفو'
                        },
                        'Fiji': {
                            'exemplarCity': 'فيجي'
                        },
                        'Kosrae': {
                            'exemplarCity': 'كوسرا'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'كواجالين'
                        },
                        'Majuro': {
                            'exemplarCity': 'ماجورو'
                        },
                        'Marquesas': {
                            'exemplarCity': 'ماركيساس'
                        },
                        'Midway': {
                            'exemplarCity': 'ميدواي'
                        },
                        'Nauru': {
                            'exemplarCity': 'ناورو'
                        },
                        'Niue': {
                            'exemplarCity': 'نيوي'
                        },
                        'Norfolk': {
                            'exemplarCity': 'نورفولك'
                        },
                        'Noumea': {
                            'exemplarCity': 'نوميا'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'باغو باغو'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'ليندمان'
                        },
                        'Hobart': {
                            'exemplarCity': 'هوبارت'
                        },
                        'Eucla': {
                            'exemplarCity': 'أوكلا'
                        },
                        'Darwin': {
                            'exemplarCity': 'دارون'
                        },
                        'Sydney': {
                            'exemplarCity': 'سيدني'
                        },
                        'Perth': {
                            'exemplarCity': 'برثا'
                        },
                        'Melbourne': {
                            'exemplarCity': 'ميلبورن'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'لورد هاو'
                        },
                        'Adelaide': {
                            'exemplarCity': 'استراليا(توقيت أدليادا)'
                        },
                        'Brisbane': {
                            'exemplarCity': 'برسيبان'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'بروكن هيل'
                        },
                        'Currie': {
                            'exemplarCity': 'كوري'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'المالديف'
                        },
                        'Mahe': {
                            'exemplarCity': 'ماهي'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'كيرغويلين'
                        },
                        'Reunion': {
                            'exemplarCity': 'ريونيون'
                        },
                        'Mayotte': {
                            'exemplarCity': 'مايوت'
                        },
                        'Mauritius': {
                            'exemplarCity': 'موريشيوس'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'أنتاناناريفو'
                        },
                        'Chagos': {
                            'exemplarCity': 'تشاغوس'
                        },
                        'Christmas': {
                            'exemplarCity': 'كريسماس'
                        },
                        'Cocos': {
                            'exemplarCity': 'كوكوس'
                        },
                        'Comoro': {
                            'exemplarCity': 'جزر القمر'
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
                            'exemplarCity': 'مدينة غير معروفة'
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
                            'exemplarCity': 'روثيرا'
                        },
                        'Palmer': {
                            'exemplarCity': 'بالمير'
                        },
                        'McMurdo': {
                            'exemplarCity': 'ماك موردو'
                        },
                        'Vostok': {
                            'exemplarCity': 'فوستوك'
                        },
                        'Syowa': {
                            'exemplarCity': 'سايووا'
                        },
                        'South_Pole': {
                            'exemplarCity': 'القطب الجنوبي'
                        },
                        'Casey': {
                            'exemplarCity': 'كاساي'
                        },
                        'Davis': {
                            'exemplarCity': 'دافيز'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'دي مونت دو روفيل'
                        },
                        'Macquarie': {
                            'exemplarCity': 'ماكواري'
                        },
                        'Mawson': {
                            'exemplarCity': 'ماوسون'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'لونجيربين'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'تورونتو'
                        },
                        'Tijuana': {
                            'exemplarCity': 'تيخوانا'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'ثندر باي'
                        },
                        'Thule': {
                            'exemplarCity': 'ثيل'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'تيغوسيغالبا'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'سوفت كارنت'
                        },
                        'Chicago': {
                            'exemplarCity': 'شيكاغو'
                        },
                        'Cayman': {
                            'exemplarCity': 'كيمان'
                        },
                        'Cayenne': {
                            'exemplarCity': 'كايين'
                        },
                        'Catamarca': {
                            'exemplarCity': 'كاتاماركا'
                        },
                        'Caracas': {
                            'exemplarCity': 'كاراكاس'
                        },
                        'Cancun': {
                            'exemplarCity': 'كانكن'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'كومبو جراند'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'كامبرديج باي'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'بوينوس أيرس'
                        },
                        'Boise': {
                            'exemplarCity': 'بويس'
                        },
                        'Asuncion': {
                            'exemplarCity': 'أسونسيون'
                        },
                        'Aruba': {
                            'exemplarCity': 'أروبا'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'ريو جالييوس'
                            },
                            'San_Juan': {
                                'exemplarCity': 'سان خوان'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'أشوا'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'لا ريوجا'
                            },
                            'San_Luis': {
                                'exemplarCity': 'سان لويس'
                            },
                            'Salta': {
                                'exemplarCity': 'سالطا'
                            },
                            'Tucuman': {
                                'exemplarCity': 'تاكمان'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'أروجوانيا'
                        },
                        'Antigua': {
                            'exemplarCity': 'أنتيغوا'
                        },
                        'Anguilla': {
                            'exemplarCity': 'أنغيلا'
                        },
                        'Anchorage': {
                            'exemplarCity': 'أنشوراج'
                        },
                        'Adak': {
                            'exemplarCity': 'أداك'
                        },
                        'Bahia': {
                            'exemplarCity': 'باهيا'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'باهيا بانديراس'
                        },
                        'Barbados': {
                            'exemplarCity': 'بربادوس'
                        },
                        'Belem': {
                            'exemplarCity': 'بلم'
                        },
                        'Belize': {
                            'exemplarCity': 'بليز'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'بلانك-سابلون'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'باو فيستا'
                        },
                        'Bogota': {
                            'exemplarCity': 'بوغوتا'
                        },
                        'Curacao': {
                            'exemplarCity': 'كوراكاو'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'دانمرك شافن'
                        },
                        'Dawson': {
                            'exemplarCity': 'داوسان'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'داوسن كريك'
                        },
                        'Denver': {
                            'exemplarCity': 'دنفر'
                        },
                        'Detroit': {
                            'exemplarCity': 'ديترويت'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'هيرموسيلو'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'فينسينس'
                            },
                            'Petersburg': {
                                'exemplarCity': 'بيترسبرغ'
                            },
                            'Tell_City': {
                                'exemplarCity': 'مدينة تل، إنديانا'
                            },
                            'Knox': {
                                'exemplarCity': 'كونكس'
                            },
                            'Winamac': {
                                'exemplarCity': 'ويناماك'
                            },
                            'Marengo': {
                                'exemplarCity': 'مارنجو'
                            },
                            'Vevay': {
                                'exemplarCity': 'فيفاي'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'إنديانابوليس'
                        },
                        'Inuvik': {
                            'exemplarCity': 'اينوفيك'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'اكويلت'
                        },
                        'Jamaica': {
                            'exemplarCity': 'جامايكا'
                        },
                        'Jujuy': {
                            'exemplarCity': 'جوجو'
                        },
                        'Juneau': {
                            'exemplarCity': 'جوني'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'يلونيف'
                        },
                        'Yakutat': {
                            'exemplarCity': 'ياكوتات'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'وينيبيج'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'وايت هورس'
                        },
                        'Vancouver': {
                            'exemplarCity': 'فانكوفر'
                        },
                        'Tortola': {
                            'exemplarCity': 'تورتولا'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'كرالنديك'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'مونتيسيلو'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'هافانا'
                        },
                        'Halifax': {
                            'exemplarCity': 'هاليفاكس'
                        },
                        'Guyana': {
                            'exemplarCity': 'غيانا'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'غواياكويل'
                        },
                        'Guatemala': {
                            'exemplarCity': 'غواتيمالا'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'غوادلوب'
                        },
                        'Grenada': {
                            'exemplarCity': 'غرينادا'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'غراند ترك'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'جوس باي'
                        },
                        'Godthab': {
                            'exemplarCity': 'غودثاب'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'جلاس باي'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'فورتاليزا'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'السلفادور'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'ايرونبي'
                        },
                        'Edmonton': {
                            'exemplarCity': 'ايدمونتون'
                        },
                        'Dominica': {
                            'exemplarCity': 'دومينيكا'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'تشيواوا'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'كورال هاربر'
                        },
                        'Cordoba': {
                            'exemplarCity': 'كوردوبا'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'كوستاريكا'
                        },
                        'Creston': {
                            'exemplarCity': 'كريستون'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'كيابا'
                        },
                        'La_Paz': {
                            'exemplarCity': 'لا باز'
                        },
                        'Lima': {
                            'exemplarCity': 'ليما'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'لوس انجلوس'
                        },
                        'Louisville': {
                            'exemplarCity': 'لويس فيل'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'حي الأمير السفلي'
                        },
                        'Maceio': {
                            'exemplarCity': 'ماشيو'
                        },
                        'Managua': {
                            'exemplarCity': 'ماناغوا'
                        },
                        'Manaus': {
                            'exemplarCity': 'ماناوس'
                        },
                        'Marigot': {
                            'exemplarCity': 'ماريغوت'
                        },
                        'Martinique': {
                            'exemplarCity': 'المارتينيك'
                        },
                        'Matamoros': {
                            'exemplarCity': 'ماتاموروس'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'مازاتلان'
                        },
                        'Mendoza': {
                            'exemplarCity': 'ميندوزا'
                        },
                        'Menominee': {
                            'exemplarCity': 'مينوميني'
                        },
                        'Merida': {
                            'exemplarCity': 'ميريدا'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'ميتلاكاتلا'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'مدينة المكسيك'
                        },
                        'Miquelon': {
                            'exemplarCity': 'ميكولن'
                        },
                        'Moncton': {
                            'exemplarCity': 'وينكتون'
                        },
                        'Monterrey': {
                            'exemplarCity': 'مونتيري'
                        },
                        'Montevideo': {
                            'exemplarCity': 'مونتفيديو'
                        },
                        'Montreal': {
                            'exemplarCity': 'مونتريال'
                        },
                        'Montserrat': {
                            'exemplarCity': 'مونتسيرات'
                        },
                        'Nassau': {
                            'exemplarCity': 'ناسو'
                        },
                        'New_York': {
                            'exemplarCity': 'نيويورك'
                        },
                        'Nipigon': {
                            'exemplarCity': 'نيبيجون'
                        },
                        'Nome': {
                            'exemplarCity': 'نوم'
                        },
                        'Noronha': {
                            'exemplarCity': 'نوروناه'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'بيولا، داكوتا الشمالية'
                            },
                            'New_Salem': {
                                'exemplarCity': 'نيو ساليم'
                            },
                            'Center': {
                                'exemplarCity': 'سنتر'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'أوجيناجا'
                        },
                        'Panama': {
                            'exemplarCity': 'بنما'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'بانجينتينج'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'باراماريبو'
                        },
                        'Phoenix': {
                            'exemplarCity': 'فينكس'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'بورت أو برنس'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'بورت أوف سبين'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'بورتو فيلو'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'بورتوريكو'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'راني ريفر'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'رانكن انلت'
                        },
                        'Recife': {
                            'exemplarCity': 'ريسيف'
                        },
                        'Regina': {
                            'exemplarCity': 'ريجينا'
                        },
                        'Resolute': {
                            'exemplarCity': 'ريزولوت'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'ريوبرانكو'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'سانتا إيزابيل'
                        },
                        'Santarem': {
                            'exemplarCity': 'سانتاريم'
                        },
                        'Santiago': {
                            'exemplarCity': 'سانتياغو'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'سانتو دومينغو'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'ساو باولو'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'سكورسبيسند'
                        },
                        'Shiprock': {
                            'exemplarCity': 'شيبروك'
                        },
                        'Sitka': {
                            'exemplarCity': 'سيتكا'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'سانت بارثيلمي'
                        },
                        'St_Johns': {
                            'exemplarCity': 'سانت جونس'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'سانت كيتس'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'سانت لوشيا'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'سانت توماس'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'سانت فنسنت'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'جنوب جورجيا'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'ريكيافيك'
                        },
                        'Stanley': {
                            'exemplarCity': 'استانلي'
                        },
                        'St_Helena': {
                            'exemplarCity': 'سانت هيلينا'
                        },
                        'Azores': {
                            'exemplarCity': 'أزورس'
                        },
                        'Bermuda': {
                            'exemplarCity': 'برمودا'
                        },
                        'Canary': {
                            'exemplarCity': 'كناري'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'الرأس الأخضر'
                        },
                        'Faeroe': {
                            'exemplarCity': 'فارو'
                        },
                        'Madeira': {
                            'exemplarCity': 'ماديرا'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'أوسلو'
                        },
                        'Moscow': {
                            'exemplarCity': 'موسكو'
                        },
                        'Monaco': {
                            'exemplarCity': 'موناكو'
                        },
                        'Minsk': {
                            'exemplarCity': 'مينسك'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'ماريهامن'
                        },
                        'Malta': {
                            'exemplarCity': 'مالطة'
                        },
                        'Madrid': {
                            'exemplarCity': 'مدريد'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'لوكسمبورغ'
                        },
                        'London': {
                            'long': {
                                'daylight': 'توقيت بريطانيا الصيفي'
                            },
                            'exemplarCity': 'لندن'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'ليوبليانا'
                        },
                        'Lisbon': {
                            'exemplarCity': 'لشبونة'
                        },
                        'Kiev': {
                            'exemplarCity': 'كييف'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'كالينجراد'
                        },
                        'Jersey': {
                            'exemplarCity': 'جيرسي'
                        },
                        'Istanbul': {
                            'exemplarCity': 'إسطنبول'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'جزيرة مان'
                        },
                        'Bucharest': {
                            'exemplarCity': 'بوخارست'
                        },
                        'Brussels': {
                            'exemplarCity': 'بروكسل'
                        },
                        'Bratislava': {
                            'exemplarCity': 'براتيسلافا'
                        },
                        'Berlin': {
                            'exemplarCity': 'برلين'
                        },
                        'Belgrade': {
                            'exemplarCity': 'بلغراد'
                        },
                        'Athens': {
                            'exemplarCity': 'أثينا'
                        },
                        'Andorra': {
                            'exemplarCity': 'أندورا'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'أمستردام'
                        },
                        'Simferopol': {
                            'exemplarCity': 'سيمفروبول'
                        },
                        'Skopje': {
                            'exemplarCity': 'سكوبي'
                        },
                        'Sofia': {
                            'exemplarCity': 'صوفيا'
                        },
                        'Stockholm': {
                            'exemplarCity': 'ستوكهولم'
                        },
                        'Tallinn': {
                            'exemplarCity': 'تالين'
                        },
                        'Tirane': {
                            'exemplarCity': 'تيرانا'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'أوزجرود'
                        },
                        'Vaduz': {
                            'exemplarCity': 'فادوز'
                        },
                        'Zurich': {
                            'exemplarCity': 'زيورخ'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'زابوروزي'
                        },
                        'Zagreb': {
                            'exemplarCity': 'زغرب'
                        },
                        'Warsaw': {
                            'exemplarCity': 'وارسو'
                        },
                        'Volgograd': {
                            'exemplarCity': 'فولوجراد'
                        },
                        'Vilnius': {
                            'exemplarCity': 'فيلنيوس'
                        },
                        'Vienna': {
                            'exemplarCity': 'فيينا'
                        },
                        'Vatican': {
                            'exemplarCity': 'الفاتيكان'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'سراييفو'
                        },
                        'San_Marino': {
                            'exemplarCity': 'سان مارينو'
                        },
                        'Samara': {
                            'exemplarCity': 'سمراء'
                        },
                        'Rome': {
                            'exemplarCity': 'روما'
                        },
                        'Riga': {
                            'exemplarCity': 'ريغا'
                        },
                        'Prague': {
                            'exemplarCity': 'براغ'
                        },
                        'Podgorica': {
                            'exemplarCity': 'بودغوريكا'
                        },
                        'Paris': {
                            'exemplarCity': 'باريس'
                        },
                        'Helsinki': {
                            'exemplarCity': 'هلسنكي'
                        },
                        'Guernsey': {
                            'exemplarCity': 'غيرنسي'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'جبل طارق'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'توقيت أيرلندا الصيفي'
                            },
                            'exemplarCity': 'دبلن'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'كوبنهاغن'
                        },
                        'Chisinau': {
                            'exemplarCity': 'تشيسيناو'
                        },
                        'Busingen': {
                            'exemplarCity': 'بوسنغن'
                        },
                        'Budapest': {
                            'exemplarCity': 'بودابست'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'ليبرفيل'
                        },
                        'Lagos': {
                            'exemplarCity': 'لاغوس'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'كينشاسا'
                        },
                        'Kigali': {
                            'exemplarCity': 'كيغالي'
                        },
                        'Khartoum': {
                            'exemplarCity': 'الخرطوم'
                        },
                        'Kampala': {
                            'exemplarCity': 'كامبالا'
                        },
                        'Juba': {
                            'exemplarCity': 'جوبا'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'جوهانسبرغ'
                        },
                        'Harare': {
                            'exemplarCity': 'هراري'
                        },
                        'Gaborone': {
                            'exemplarCity': 'غابورون'
                        },
                        'Freetown': {
                            'exemplarCity': 'فري تاون'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'العيون'
                        },
                        'Douala': {
                            'exemplarCity': 'دوالا'
                        },
                        'Djibouti': {
                            'exemplarCity': 'جيبوتي'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'دار السلام'
                        },
                        'Dakar': {
                            'exemplarCity': 'داكار'
                        },
                        'Banjul': {
                            'exemplarCity': 'بانجول'
                        },
                        'Bangui': {
                            'exemplarCity': 'بانغوي'
                        },
                        'Bamako': {
                            'exemplarCity': 'باماكو'
                        },
                        'Asmera': {
                            'exemplarCity': 'أسمرة'
                        },
                        'Malabo': {
                            'exemplarCity': 'مالابو'
                        },
                        'Maputo': {
                            'exemplarCity': 'مابوتو'
                        },
                        'Maseru': {
                            'exemplarCity': 'ماسيرو'
                        },
                        'Mbabane': {
                            'exemplarCity': 'مباباني'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'مقديشيو'
                        },
                        'Monrovia': {
                            'exemplarCity': 'مونروفيا'
                        },
                        'Nairobi': {
                            'exemplarCity': 'نيروبي'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'نجامينا'
                        },
                        'Windhoek': {
                            'exemplarCity': 'ويندهوك'
                        },
                        'Tunis': {
                            'exemplarCity': 'تونس'
                        },
                        'Tripoli': {
                            'exemplarCity': 'طرابلس'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'ساو تومي'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'بورتو نوفو'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'واغادوغو'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'نواكشوط'
                        },
                        'Niamey': {
                            'exemplarCity': 'نيامي'
                        },
                        'Lusaka': {
                            'exemplarCity': 'لوساكا'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'لومبباشا'
                        },
                        'Luanda': {
                            'exemplarCity': 'لواندا'
                        },
                        'Lome': {
                            'exemplarCity': 'لومي'
                        },
                        'Conakry': {
                            'exemplarCity': 'كوناكري'
                        },
                        'Ceuta': {
                            'exemplarCity': 'سيتا'
                        },
                        'Casablanca': {
                            'exemplarCity': 'الدار البيضاء'
                        },
                        'Cairo': {
                            'exemplarCity': 'القاهرة'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'بوجومبورا'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'برازافيل'
                        },
                        'Blantyre': {
                            'exemplarCity': 'بلانتاير'
                        },
                        'Bissau': {
                            'exemplarCity': 'بيساو'
                        },
                        'Abidjan': {
                            'exemplarCity': 'أبيدجان'
                        },
                        'Accra': {
                            'exemplarCity': 'أكرا'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'أديس أبابا'
                        },
                        'Algiers': {
                            'exemplarCity': 'الجزائر'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': 'شنغهاي'
                        },
                        'Seoul': {
                            'exemplarCity': 'سول'
                        },
                        'Samarkand': {
                            'exemplarCity': 'سمرقند'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'سكالين'
                        },
                        'Saigon': {
                            'exemplarCity': 'مدينة هو تشي منة'
                        },
                        'Riyadh': {
                            'exemplarCity': 'الرياض'
                        },
                        'Rangoon': {
                            'exemplarCity': 'رانغون'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'كيزيلوردا'
                        },
                        'Qatar': {
                            'exemplarCity': 'قطر'
                        },
                        'Pyongyang': {
                            'exemplarCity': 'بيونغ يانغ'
                        },
                        'Pontianak': {
                            'exemplarCity': 'بونتيانك'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'بنوم بنه'
                        },
                        'Oral': {
                            'exemplarCity': 'أورال'
                        },
                        'Omsk': {
                            'exemplarCity': 'أومسك'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'نوفوسبيرسك'
                        },
                        'Baghdad': {
                            'exemplarCity': 'بغداد'
                        },
                        'Chongqing': {
                            'exemplarCity': 'تشونجكينج'
                        },
                        'Colombo': {
                            'exemplarCity': 'كولومبو'
                        },
                        'Damascus': {
                            'exemplarCity': 'دمشق'
                        },
                        'Dhaka': {
                            'exemplarCity': 'دكا'
                        },
                        'Dili': {
                            'exemplarCity': 'ديلي'
                        },
                        'Dubai': {
                            'exemplarCity': 'دبي'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'دوشانبي'
                        },
                        'Gaza': {
                            'exemplarCity': 'غزة'
                        },
                        'Harbin': {
                            'exemplarCity': 'هاربين'
                        },
                        'Hebron': {
                            'exemplarCity': 'هيبرون (مدينة الخليل)'
                        },
                        'Hong_Kong': {
                            'exemplarCity': 'هونغ كونغ'
                        },
                        'Hovd': {
                            'exemplarCity': 'هوفد'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'ايركيتسك'
                        },
                        'Jakarta': {
                            'exemplarCity': 'جاكرتا'
                        },
                        'Jayapura': {
                            'exemplarCity': 'جايابيورا'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'آلانباتار'
                        },
                        'Urumqi': {
                            'exemplarCity': 'أرومكي'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'أوست نيرا'
                        },
                        'Vientiane': {
                            'exemplarCity': 'فيانتيان'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'فلاديفوستك'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'ياكتسك'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'يكاترنبيرج'
                        },
                        'Yerevan': {
                            'exemplarCity': 'يريفان'
                        },
                        'Tokyo': {
                            'exemplarCity': 'طوكيو'
                        },
                        'Thimphu': {
                            'exemplarCity': 'تيمفو'
                        },
                        'Tehran': {
                            'exemplarCity': 'طهران'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'تبليسي'
                        },
                        'Tashkent': {
                            'exemplarCity': 'طشقند'
                        },
                        'Taipei': {
                            'exemplarCity': 'تايبيه'
                        },
                        'Singapore': {
                            'exemplarCity': 'سنغافورة'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'القدس'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'عشق آباد'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'أكتوب'
                        },
                        'Aqtau': {
                            'exemplarCity': 'أكتاو'
                        },
                        'Anadyr': {
                            'exemplarCity': 'أندير'
                        },
                        'Amman': {
                            'exemplarCity': 'عمان'
                        },
                        'Almaty': {
                            'exemplarCity': 'ألماتي'
                        },
                        'Aden': {
                            'exemplarCity': 'عدن'
                        },
                        'Bahrain': {
                            'exemplarCity': 'البحرين'
                        },
                        'Baku': {
                            'exemplarCity': 'باكو'
                        },
                        'Bangkok': {
                            'exemplarCity': 'بانكوك'
                        },
                        'Beirut': {
                            'exemplarCity': 'بيروت'
                        },
                        'Bishkek': {
                            'exemplarCity': 'بشكيك'
                        },
                        'Brunei': {
                            'exemplarCity': 'بروناي'
                        },
                        'Calcutta': {
                            'exemplarCity': 'كالكتا'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'تشوبالسان'
                        },
                        'Kabul': {
                            'exemplarCity': 'كابول'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'كامتشاتكا'
                        },
                        'Karachi': {
                            'exemplarCity': 'كراتشي'
                        },
                        'Kashgar': {
                            'exemplarCity': 'كاشجار'
                        },
                        'Katmandu': {
                            'exemplarCity': 'كاتماندو'
                        },
                        'Khandyga': {
                            'exemplarCity': 'خانديجا'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'كراسنويارسك'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'كوالا لامبور'
                        },
                        'Kuching': {
                            'exemplarCity': 'كيشينج'
                        },
                        'Kuwait': {
                            'exemplarCity': 'الكويت'
                        },
                        'Macau': {
                            'exemplarCity': 'ماكاو'
                        },
                        'Magadan': {
                            'exemplarCity': 'مجادن'
                        },
                        'Makassar': {
                            'exemplarCity': 'ماكسار'
                        },
                        'Manila': {
                            'exemplarCity': 'مانيلا'
                        },
                        'Muscat': {
                            'exemplarCity': 'مسقط'
                        },
                        'Nicosia': {
                            'exemplarCity': 'نيقوسيا'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'نوفوكوزنتسك'
                        }
                    }
                },
                'metazone': {
                    'Taipei': {
                        'long': {
                            'generic': 'توقيت تايبيه',
                            'standard': 'توقيت تايبيه الرسمي',
                            'daylight': 'توقيت تايبيه الصيفي'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'توقيت تاهيتي'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': 'توقيت سايووا'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'توقيت سورينام'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'توقيت جنوب جورجيا'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'توقيت جزر سليمان'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'توقيت سنغافورة'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'توقيت سيشل'
                        }
                    },
                    'Samoa': {
                        'long': {
                            'generic': 'توقيت ساموا',
                            'standard': 'توقيت ساموا الرسمي',
                            'daylight': 'توقيت ساموا الصيفي'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'توقيت سامارا',
                            'standard': 'توقيت سمارا',
                            'daylight': 'توقيت سمارا الصيفي'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'توقيت ساخالين',
                            'standard': 'توقيت ساخالين الرسمي',
                            'daylight': 'توقيت ساخالين الصيفي'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'توقيت روثيرا'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'توقيت ريونيون'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'توقيت باناب'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'توقيت بيتكيرن'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'توقيت سانت بيير وميكولون',
                            'standard': 'توقيت سانت بيير وميكولون الرسمي',
                            'daylight': 'توقيت سانت بيير وميكولون لصيفي'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'توقيت جزر فينكس'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'توقيت الأمازون',
                            'standard': 'توقيت الأمازون الرسمي',
                            'daylight': 'توقيت الأمازون الصيفي'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'توقيت ألاسكا',
                            'standard': 'التوقيت الرسمي لألاسكا',
                            'daylight': 'توقيت ألاسكا الصيفي'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': 'توقيت غرب أفريقيا',
                            'standard': 'توقيت غرب أفريقيا الرسمي',
                            'daylight': 'توقيت غرب أفريقيا الصيفي'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': 'توقيت جنوب أفريقيا'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': 'توقيت شرق أفريقيا'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': 'توقيت وسط أفريقيا'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'توقيت أفغانستان'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'التوقيت الشرقي',
                            'standard': 'التوقيت الرسمي الشرقي',
                            'daylight': 'التوقيت الصيفي الشرقي'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'التوقيت الجبلي',
                            'standard': 'التوقيت الجبلي الرسمي',
                            'daylight': 'التوقيت الجبلي الصيفي'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'توقيت المحيط الهادي',
                            'standard': 'توقيت المحيط الهادي الرسمي',
                            'daylight': 'توقيت المحيط الهادي الصيفي'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'توقيت أنادير',
                            'standard': 'توقيت أنادير الرسمي',
                            'daylight': 'التوقيت الصيفي لأنادير'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'التوقيت العربي',
                            'standard': 'التوقيت العربي الرسمي',
                            'daylight': 'التوقيت العربي الصيفي'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'توقيت الأرجنتين',
                            'standard': 'توقيت الأرجنتين الرسمي',
                            'daylight': 'توقيت الأرجنتين الصيفي'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': 'توقيت الأرجنتين الغربي',
                            'standard': 'توقيت الأرجنتين الغربي الرسمي',
                            'daylight': 'توقيت الأرجنتين الغربي الصيفي'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'توقيت أرمينيا',
                            'standard': 'توقيت أرمينيا الرسمي',
                            'daylight': 'توقيت أرمينيا الصيفي'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': 'توقيت الصين',
                            'standard': 'توقيت الصين الرسمي',
                            'daylight': 'توقيت الصين الصيفي'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'توقيت شويبالسان',
                            'standard': 'توقيت شويبالسان الرسمي',
                            'daylight': 'التوقيت الصيفي لشويبالسان'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'توقيت جزر الكريسماس'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'توقيت جزر كوكوس'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'توقيت كولومبيا',
                            'standard': 'توقيت كولومبيا الرسمي',
                            'daylight': 'توقيت كولومبيا الصيفي'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'توقيت جزر كووك',
                            'standard': 'توقيت جزر كووك الرسمي',
                            'daylight': 'توقيت جزر كووك الصيفي'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'توقيت كوبا',
                            'standard': 'توقيت كوبا الرسمي',
                            'daylight': 'توقيت كوبا الصيفي'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'توقيت دافيز'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'توقيت دي مونت دو روفيل'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': 'توقيت تيمور الشرقية'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'توقيت جزر استر',
                            'standard': 'توقيت جزر استر الرسمي',
                            'daylight': 'توقيت جزر استر الصيفي'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'توقيت الإكوادور'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': 'توقيت وسط أوروبا',
                            'standard': 'توقيت وسط أوروبا الرسمي',
                            'daylight': 'توقيت وسط أوروبا الصيفي'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': 'توقيت شرق أوروبا',
                            'standard': 'توقيت شرق أوروبا الرسمي',
                            'daylight': 'توقيت شرق أوروبا الصيفي'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': 'توقيت غرب أوروبا',
                            'standard': 'توقيت غرب أوروبا الرسمي',
                            'daylight': 'توقيت غرب أوروبا الصيفي'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'توقيت جزر فوكلاند',
                            'standard': 'توقيت جزر فوكلاند الرسمي',
                            'daylight': 'توقيت جزر فوكلاند الصيفي'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'توقيت فيجي',
                            'standard': 'توقيت فيجي الرسمي',
                            'daylight': 'توقيت فيجي الصيفي'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'توقيت توكيلاو'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'توقيت تونغا',
                            'standard': 'توقيت تونغا الرسمي',
                            'daylight': 'توقيت تونغا الصيفي'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'توقيت تشاك'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'توقيت تركمانستان',
                            'standard': 'توقيت تركمانستان الرسمي',
                            'daylight': 'توقيت تركمانستان الصيفي'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'توقيت توفالو'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'توقيت أورغواي',
                            'standard': 'توقيت أورغواي الرسمي',
                            'daylight': 'توقيت أورغواي الصيفي'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'توقيت أوزبكستان',
                            'standard': 'توقيت أوزبكستان الرسمي',
                            'daylight': 'توقيت أوزبكستان الصيفي'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'توقيت فانواتو',
                            'standard': 'توقيت فانواتو الرسمي',
                            'daylight': 'توقيت فانواتو الصيفي'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'توقيت يكاترينبورغ',
                            'standard': 'توقيت يكاترينبورغ الرسمي',
                            'daylight': 'توقيت يكاترينبورغ الصيفي'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'توقيت ياكوتسك',
                            'standard': 'توقيت ياكوتسك الرسمي',
                            'daylight': 'توقيت ياكوتسك الصيفي'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'توقيت واليس و فوتونا'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'توقيت واك'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'توقيت فوستوك'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'توقيت فولغوغراد',
                            'standard': 'توقيت فولغوغراد الرسمي',
                            'daylight': 'توقيت فولغوغراد الصيفي'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'توقيت فلاديفوستوك',
                            'standard': 'توقيت فلاديفوستوك الرسمي',
                            'daylight': 'توقيت فلاديفوستوك الصيفي'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'توقيت فنزويلا'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'توقيت طاجكستان'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'توقيت هوفد',
                            'standard': 'توقيت هوفد الرسمي',
                            'daylight': 'توقيت هوفد الصيفي'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': 'توقيت هونغ كونغ',
                            'standard': 'توقيت هونغ كونغ الرسمي',
                            'daylight': 'توقيت هونغ كونغ الصيفي'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'توقيت هاواي أليوتيان',
                            'standard': 'توقيت هاواي أليوتيان الرسمي',
                            'daylight': 'توقيت هاواي أليوتيان الصيفي'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'توقيت غيانا'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': 'توقيت الخليج'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'توقيت غوام'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'توقيت غرب غرينلاند',
                            'standard': 'توقيت غرب غرينلاند الرسمي',
                            'daylight': 'توقيت غرب غرينلاند الصيفي'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'توقيت شرق غرينلاند',
                            'standard': 'توقيت شرق غرينلاند الرسمي',
                            'daylight': 'توقيت شرق غرينلاند الصيفي'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'توقيت غرينتش'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'توقيت جزر جيلبرت'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'توقيت جورجيا',
                            'standard': 'توقيت جورجيا الرسمي',
                            'daylight': 'توقيت جورجيا الصيفي'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'توقيت جامبير'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'توقيت غلاباغوس'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': 'توقيت المقاطعات الفرنسية الجنوبية والأنتارتيكية'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': 'توقيت غويانا الفرنسية'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'التوقيت المركزي',
                            'standard': 'التوقيت الرسمي المركزي',
                            'daylight': 'التوقيت الصيفي المركزي'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': 'توقيت الأطلسي',
                            'standard': 'التوقيت الرسمي الأطلسي',
                            'daylight': 'التوقيت الصيفي الأطلسي'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'التوقيت المركزي الأسترالي',
                            'standard': 'التوقيت الرسمي المركزي بأستراليا',
                            'daylight': 'التوقيت الصيفي المركزي بأستراليا'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'التوقيت الغربي المركزي بأستراليا',
                            'standard': 'التوقيت الرسمي الغربي المركزي بأستراليا',
                            'daylight': 'التوقيت الصيفي الغربي المركزي بأستراليا'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'توقيت شرق أستراليا',
                            'standard': 'التوقيت الرسمي الشرقي لأستراليا',
                            'daylight': 'التوقيت الصيفي الشرقي لأستراليا'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'توقيت غرب أستراليا',
                            'standard': 'التوقيت الرسمي الغربي لأستراليا',
                            'daylight': 'التوقيت الصيفي الغربي لأستراليا'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'توقيت أذربيجان',
                            'standard': 'توقيت أذربيجان الرسمي',
                            'daylight': 'توقيت أذربيجان الصيفي'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'توقيت أزورس',
                            'standard': 'توقيت أزورس الرسمي',
                            'daylight': 'توقيت أزورس الصيفي'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'توقيت بنجلاديش',
                            'standard': 'توقيت بنجلاديش الرسمي',
                            'daylight': 'توقيت بنجلاديش الصيفي'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'توقيت بوتان'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'توقيت بوليفيا'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'توقيت برازيليا',
                            'standard': 'توقيت برازيليا الرسمي',
                            'daylight': 'توقيت برازيليا الصيفي'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'توقيت بروناي'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'توقيت الرأس الأخضر',
                            'standard': 'توقيت الرأس الأخضر الرسمي',
                            'daylight': 'توقيت الرأس الأخضر الصيفي'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'توقيت تشامورو'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'توقيت تشاتام',
                            'standard': 'توقيت تشاتام الرسمي',
                            'daylight': 'توقيت تشاتام الصيفي'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'توقيت شيلي',
                            'standard': 'توقيت شيلي الرسمي',
                            'daylight': 'توقيت شيلي الصيفي'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'توقيت الهند'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'توقيت المحيط الهندي'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'توقيت الهند الصينية'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'توقيت وسط إندونيسيا'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'توقيت شرق إندونيسيا'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'توقيت غرب إندونيسيا'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'توقيت إيران',
                            'standard': 'توقيت إيران الرسمي',
                            'daylight': 'توقيت إيران الصيفي'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'توقيت إركوتسك',
                            'standard': 'توقيت إركوتسك الرسمي',
                            'daylight': 'توقيت إركوتسك الصيفي'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'توقيت إسرائيل',
                            'standard': 'توقيت إسرائيل الرسمي',
                            'daylight': 'توقيت إسرائيل الصيفي'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': 'توقيت اليابان',
                            'standard': 'توقيت اليابان الرسمي',
                            'daylight': 'توقيت اليابان الصيفي'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'توقيت كامشاتكا',
                            'standard': 'توقيت بيتروبافلوفسك-كامتشاتسكي',
                            'daylight': 'توقيت بيتروبافلوفسك-كامتشاتسكي الصيفي'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': 'توقيت شرق كازاخستان'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': 'توقيت غرب كازاخستان'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': 'توقيت كوريا',
                            'standard': 'توقيت كوريا الرسمي',
                            'daylight': 'توقيت كوريا الصيفي'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'توقيت كوسرا'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'توقيت كراسنويارسك',
                            'standard': 'توقيت كراسنويارسك الرسمي',
                            'daylight': 'التوقيت الصيفي لكراسنويارسك'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'توقيت قرغيزستان'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'توقيت جزر لاين'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'توقيت لورد هاو',
                            'standard': 'توقيت لورد هاو الرسمي',
                            'daylight': 'التوقيت الصيفي للورد هاو'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'توقيت ماكواري'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'توقيت ماغادان',
                            'standard': 'توقيت ماغادان الرسمي',
                            'daylight': 'توقيت ماغادان الصيفي'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'توقيت ماليزيا'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'توقيت الـمالديف'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'توقيت ماركيساس'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'توقيت جزر مارشال'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'توقيت موريشيوس',
                            'standard': 'توقيت موريشيوس الرسمي',
                            'daylight': 'توقيت موريشيوس الصيفي'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'توقيت ماوسون'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'توقيت أولان باتور',
                            'standard': 'توقيت أولان باتور الرسمي',
                            'daylight': 'توقيت أولان باتور الصيفي'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'توقيت موسكو',
                            'standard': 'توقيت موسكو الرسمي',
                            'daylight': 'توقيت موسكو الصيفي'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'توقيت ميانمار'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'توقيت ناورو'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'توقيت نيبال'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'توقيت كاليدونيا الجديدة',
                            'standard': 'توقيت كاليدونيا الجديدة الرسمي',
                            'daylight': 'توقيت كاليدونيا الجديدة الصيفي'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'توقيت نيوزيلاندا',
                            'standard': 'توقيت نيوزيلاندا الرسمي',
                            'daylight': 'توقيت نيوزيلاندا الصيفي'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'توقيت نيوفاوندلاند',
                            'standard': 'توقيت نيوفاوندلاند الرسمي',
                            'daylight': 'توقيت نيوفاوندلاند الصيفي'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'توقيت نيوي'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'توقيت نورفوك'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'توقيت فيرناندو دي نورونها',
                            'standard': 'توقيت فرناندو دي نورونها الرسمي',
                            'daylight': 'توقيت فرناندو دي نورونها الصيفي'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': 'توقيت جزر ماريانا الشمالية'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'توقيت نوفوسيبيرسك',
                            'standard': 'توقيت نوفوسيبيرسك الرسمي',
                            'daylight': 'توقيت نوفوسيبيرسك الصيفي'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'توقيت أومسك',
                            'standard': 'توقيت أومسك الرسمي',
                            'daylight': 'توقيت أومسك الصيفي'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'توقيت باكستان',
                            'standard': 'توقيت باكستان الرسمي',
                            'daylight': 'توقيت باكستان الصيفي'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'توقيت بالاو'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'توقيت بابوا غينيا الجديدة'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'توقيت باراغواي',
                            'standard': 'توقيت باراغواي الرسمي',
                            'daylight': 'توقيت باراغواي الصيفي'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'توقيت بيرو',
                            'standard': 'توقيت بيرو الرسمي',
                            'daylight': 'توقيت بيرو الصيفي'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'توقيت الفيلبين',
                            'standard': 'توقيت الفيلبين الرسمي',
                            'daylight': 'توقيت الفيلبين الصيفي'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'جرينتش{0}',
                'gmtZeroFormat': 'جرينتش',
                'regionFormat': 'توقيت {0}',
                'regionFormat-type-daylight': 'توقيت {0} الصيفي',
                'regionFormat-type-standard': 'توقيت {0} الرسمي',
                'fallbackFormat': '{1} ({0})'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': 'أغسطس',
                                '7': 'يوليو',
                                '6': 'يونيو',
                                '5': 'مايو',
                                '12': 'ديسمبر',
                                '11': 'نوفمبر',
                                '10': 'أكتوبر',
                                '9': 'سبتمبر',
                                '1': 'يناير',
                                '2': 'فبراير',
                                '3': 'مارس',
                                '4': 'أبريل'
                            },
                            'narrow': {
                                '8': 'غ',
                                '7': 'ل',
                                '6': 'ن',
                                '5': 'و',
                                '12': 'د',
                                '11': 'ب',
                                '10': 'ك',
                                '9': 'س',
                                '1': 'ي',
                                '2': 'ف',
                                '3': 'م',
                                '4': 'أ'
                            },
                            'wide': {
                                '8': 'أغسطس',
                                '7': 'يوليو',
                                '6': 'يونيو',
                                '5': 'مايو',
                                '12': 'ديسمبر',
                                '11': 'نوفمبر',
                                '10': 'أكتوبر',
                                '9': 'سبتمبر',
                                '1': 'يناير',
                                '2': 'فبراير',
                                '3': 'مارس',
                                '4': 'أبريل'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': 'أغسطس',
                                '7': 'يوليو',
                                '6': 'يونيو',
                                '5': 'مايو',
                                '12': 'ديسمبر',
                                '11': 'نوفمبر',
                                '10': 'أكتوبر',
                                '9': 'سبتمبر',
                                '1': 'يناير',
                                '2': 'فبراير',
                                '3': 'مارس',
                                '4': 'أبريل'
                            },
                            'narrow': {
                                '8': 'غ',
                                '7': 'ل',
                                '6': 'ن',
                                '5': 'و',
                                '12': 'د',
                                '11': 'ب',
                                '10': 'ك',
                                '9': 'س',
                                '1': 'ي',
                                '2': 'ف',
                                '3': 'م',
                                '4': 'أ'
                            },
                            'wide': {
                                '8': 'أغسطس',
                                '7': 'يوليو',
                                '6': 'يونيو',
                                '5': 'مايو',
                                '12': 'ديسمبر',
                                '11': 'نوفمبر',
                                '10': 'أكتوبر',
                                '9': 'سبتمبر',
                                '1': 'يناير',
                                '2': 'فبراير',
                                '3': 'مارس',
                                '4': 'أبريل'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            },
                            'narrow': {
                                'sun': 'ح',
                                'mon': 'ن',
                                'tue': 'ث',
                                'wed': 'ر',
                                'thu': 'خ',
                                'fri': 'ج',
                                'sat': 'س'
                            },
                            'short': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            },
                            'wide': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            },
                            'narrow': {
                                'sun': 'ح',
                                'mon': 'ن',
                                'tue': 'ث',
                                'wed': 'ر',
                                'thu': 'خ',
                                'fri': 'ج',
                                'sat': 'س'
                            },
                            'short': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            },
                            'wide': {
                                'sun': 'الأحد',
                                'mon': 'الاثنين',
                                'tue': 'الثلاثاء',
                                'wed': 'الأربعاء',
                                'thu': 'الخميس',
                                'fri': 'الجمعة',
                                'sat': 'السبت'
                            }
                        }
                    },
                    'quarters': {
                        'format': {
                            'abbreviated': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'narrow': {
                                '1': '١',
                                '2': '٢',
                                '3': '٣',
                                '4': '٤'
                            },
                            'wide': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            },
                            'narrow': {
                                '1': '١',
                                '2': '٢',
                                '3': '٣',
                                '4': '٤'
                            },
                            'wide': {
                                '1': 'الربع الأول',
                                '2': 'الربع الثاني',
                                '3': 'الربع الثالث',
                                '4': 'الربع الرابع'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': 'ص',
                                'pm': 'م'
                            },
                            'narrow': {
                                'am': 'ص',
                                'pm': 'م'
                            },
                            'wide': {
                                'am': 'ص',
                                'pm': 'م'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': 'ص',
                                'pm': 'م'
                            },
                            'narrow': {
                                'am': 'ص',
                                'pm': 'م'
                            },
                            'wide': {
                                'am': 'ص',
                                'pm': 'م'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'قبل الميلاد',
                            '0-alt-variant': 'BCE',
                            '1': 'ميلادي',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': 'ق.م',
                            '0-alt-variant': 'BCE',
                            '1': 'م',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'ق.م',
                            '0-alt-variant': 'BCE',
                            '1': 'م',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE، d MMMM، y',
                        'long': 'd MMMM، y',
                        'medium': 'dd‏/MM‏/y',
                        'short': 'd‏/M‏/y'
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
                            'yMM': 'MM‏/y',
                            'yMEd': 'E، d/‏M/‏y',
                            'yMd': 'd‏/M‏/y',
                            'yM': 'M‏/y',
                            'Ehm': 'E h:mm a',
                            'Ed': 'E، d',
                            'd': 'd',
                            'GyMMMd': 'd MMM، y G',
                            'GyMMMEd': 'E، d MMM، y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'yQQQQ': 'QQQQ y',
                            'yQQQ': 'QQQ y',
                            'yMMMM': 'MMMM y',
                            'yMMMEd': 'E، d MMM، y',
                            'yMMMd': 'd MMM، y',
                            'Hms': 'HH:mm:ss',
                            'hms': 'h:mm:ss a',
                            'Hm': 'HH:mm',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'M': 'L',
                            'Md': 'd/‏M',
                            'MEd': 'E، d/M',
                            'MMdd': 'dd‏/MM',
                            'MMM': 'LLL',
                            'MMMd': 'd MMM',
                            'MMMEd': 'E، d MMM',
                            'MMMMd': 'd MMMM',
                            'MMMMEd': 'E، d MMMM',
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
                                'd': 'E، d – E، d MMM',
                                'M': 'E، d MMM – E، d MMM'
                            },
                            'MMMd': {
                                'd': 'd–d MMM',
                                'M': 'd MMM – d MMM'
                            },
                            'MMM': {
                                'M': 'MMM–MMM'
                            },
                            'MEd': {
                                'd': 'E، d/‏M –‏ E، d/‏M',
                                'M': 'E، d/‏M – E، d/‏M'
                            },
                            'Md': {
                                'd': 'M/d – M/d',
                                'M': 'M/d – M/d'
                            },
                            'M': {
                                'M': 'M–M'
                            },
                            'Hv': {
                                'H': 'HH–HH v'
                            },
                            'hv': {
                                'a': 'h a – h a v',
                                'h': 'h–h a v'
                            },
                            'intervalFormatFallback': '{0} – {1}',
                            'y': {
                                'y': 'y–y'
                            },
                            'yM': {
                                'M': 'M‏/y – M‏/y',
                                'y': 'M‏/y – M‏/y'
                            },
                            'yMd': {
                                'd': 'd‏/M‏/y – d‏/M‏/y',
                                'M': 'd‏/M‏/y – d‏/M‏/y',
                                'y': 'd‏/M‏/y – d‏/M‏/y'
                            },
                            'yMEd': {
                                'd': 'E، dd‏/MM‏/y – E، dd‏/MM‏/y',
                                'M': 'E، d‏/M‏/y – E، d‏/M‏/y',
                                'y': 'E، d‏/M‏/y – E، d‏/M‏/y'
                            },
                            'yMMM': {
                                'M': 'MMM – MMM، y',
                                'y': 'MMM، y – MMM، y'
                            },
                            'yMMMd': {
                                'd': 'd–d MMM، y',
                                'M': 'd MMM – d MMM، y',
                                'y': 'd MMM، y – d MMM، y'
                            },
                            'yMMMEd': {
                                'd': 'E، d – E، d MMM، y',
                                'M': 'E، d MMM – E، d MMM، y',
                                'y': 'E، d MMM، y – E، d MMM، y'
                            },
                            'yMMMM': {
                                'M': 'MMMM – MMMM، y',
                                'y': 'MMMM، y – MMMM، y'
                            },
                            'MMMM': {
                                'M': 'LLLL–LLLL'
                            },
                            'Hmv': {
                                'H': 'HH:mm–HH:mm v',
                                'm': 'HH:mm–HH:mm v'
                            },
                            'hmv': {
                                'a': 'h:mm a – h:mm a v',
                                'h': 'h:mm–h:mm a v',
                                'm': 'h:mm–h:mm a v'
                            },
                            'Hm': {
                                'H': 'HH:mm–HH:mm',
                                'm': 'HH:mm–HH:mm'
                            },
                            'hm': {
                                'a': 'h:mm a – h:mm a',
                                'h': 'h:mm–h:mm a',
                                'm': 'h:mm–h:mm a'
                            },
                            'H': {
                                'H': 'HH–HH'
                            },
                            'h': {
                                'a': 'h a – h a',
                                'h': 'h–h a'
                            },
                            'd': {
                                'd': 'd–d'
                            }
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
