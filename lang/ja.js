/* AstroDate Language: ja
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
        AstroDate.lang('ja', {
            'timeZoneNames': {
                'zone': {
                    'Pacific': {
                        'Saipan': {
                            'exemplarCity': 'サイパン'
                        },
                        'Rarotonga': {
                            'exemplarCity': 'ラロトンガ'
                        },
                        'Port_Moresby': {
                            'exemplarCity': 'ポートモレスビー'
                        },
                        'Ponape': {
                            'exemplarCity': 'ポンペイ島'
                        },
                        'Pitcairn': {
                            'exemplarCity': 'ピトケアン諸島'
                        },
                        'Palau': {
                            'exemplarCity': 'パラオ'
                        },
                        'Auckland': {
                            'exemplarCity': 'オークランド'
                        },
                        'Apia': {
                            'exemplarCity': 'アピア'
                        },
                        'Funafuti': {
                            'exemplarCity': 'フナフティ'
                        },
                        'Galapagos': {
                            'exemplarCity': 'ガラパゴス'
                        },
                        'Gambier': {
                            'exemplarCity': 'ガンビエ諸島'
                        },
                        'Guadalcanal': {
                            'exemplarCity': 'ガダルカナル'
                        },
                        'Guam': {
                            'exemplarCity': 'グアム'
                        },
                        'Honolulu': {
                            'exemplarCity': 'ホノルル'
                        },
                        'Wallis': {
                            'exemplarCity': 'ウォリス諸島'
                        },
                        'Wake': {
                            'exemplarCity': 'ウェーク島'
                        },
                        'Truk': {
                            'exemplarCity': 'チューク'
                        },
                        'Tongatapu': {
                            'exemplarCity': 'トンガタプ'
                        },
                        'Tarawa': {
                            'exemplarCity': 'タラワ'
                        },
                        'Tahiti': {
                            'exemplarCity': 'タヒチ'
                        },
                        'Kiritimati': {
                            'exemplarCity': 'キリスィマスィ島'
                        },
                        'Johnston': {
                            'exemplarCity': 'ジョンストン島'
                        },
                        'Chatham': {
                            'exemplarCity': 'チャタム'
                        },
                        'Easter': {
                            'exemplarCity': 'イースター島'
                        },
                        'Efate': {
                            'exemplarCity': 'エフェテ島'
                        },
                        'Enderbury': {
                            'exemplarCity': 'エンダーベリー島'
                        },
                        'Fakaofo': {
                            'exemplarCity': 'ファカオフォ'
                        },
                        'Fiji': {
                            'exemplarCity': 'フィジー'
                        },
                        'Kosrae': {
                            'exemplarCity': 'コスラエ'
                        },
                        'Kwajalein': {
                            'exemplarCity': 'クェゼリン'
                        },
                        'Majuro': {
                            'exemplarCity': 'マジュロ'
                        },
                        'Marquesas': {
                            'exemplarCity': 'マルキーズ'
                        },
                        'Midway': {
                            'exemplarCity': 'ミッドウェー島'
                        },
                        'Nauru': {
                            'exemplarCity': 'ナウル'
                        },
                        'Niue': {
                            'exemplarCity': 'ニウエ'
                        },
                        'Norfolk': {
                            'exemplarCity': 'ノーフォーク島'
                        },
                        'Noumea': {
                            'exemplarCity': 'ヌメア'
                        },
                        'Pago_Pago': {
                            'exemplarCity': 'パゴパゴ'
                        }
                    },
                    'Australia': {
                        'Lindeman': {
                            'exemplarCity': 'リンデマン'
                        },
                        'Hobart': {
                            'exemplarCity': 'ホバート'
                        },
                        'Eucla': {
                            'exemplarCity': 'ユークラ'
                        },
                        'Darwin': {
                            'exemplarCity': 'ダーウィン'
                        },
                        'Sydney': {
                            'exemplarCity': 'シドニー'
                        },
                        'Perth': {
                            'exemplarCity': 'パース'
                        },
                        'Melbourne': {
                            'exemplarCity': 'メルボルン'
                        },
                        'Lord_Howe': {
                            'exemplarCity': 'ロードハウ'
                        },
                        'Adelaide': {
                            'exemplarCity': 'アデレード'
                        },
                        'Brisbane': {
                            'exemplarCity': 'ブリスベン'
                        },
                        'Broken_Hill': {
                            'exemplarCity': 'ブロークンヒル'
                        },
                        'Currie': {
                            'exemplarCity': 'カリー'
                        }
                    },
                    'Indian': {
                        'Maldives': {
                            'exemplarCity': 'モルディブ'
                        },
                        'Mahe': {
                            'exemplarCity': 'マヘ'
                        },
                        'Kerguelen': {
                            'exemplarCity': 'ケルゲレン諸島'
                        },
                        'Reunion': {
                            'exemplarCity': 'レユニオン'
                        },
                        'Mayotte': {
                            'exemplarCity': 'マヨット'
                        },
                        'Mauritius': {
                            'exemplarCity': 'モーリシャス'
                        },
                        'Antananarivo': {
                            'exemplarCity': 'アンタナナリボ'
                        },
                        'Chagos': {
                            'exemplarCity': 'チャゴス'
                        },
                        'Christmas': {
                            'exemplarCity': 'クリスマス島'
                        },
                        'Cocos': {
                            'exemplarCity': 'ココス諸島'
                        },
                        'Comoro': {
                            'exemplarCity': 'コモロ'
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
                            'exemplarCity': '地域不明'
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
                            'exemplarCity': 'ロゼラ基地'
                        },
                        'Palmer': {
                            'exemplarCity': 'パーマー基地'
                        },
                        'McMurdo': {
                            'exemplarCity': 'マクマード基地'
                        },
                        'Vostok': {
                            'exemplarCity': 'ボストーク基地'
                        },
                        'Syowa': {
                            'exemplarCity': '昭和基地'
                        },
                        'South_Pole': {
                            'exemplarCity': 'サウスポール基地'
                        },
                        'Casey': {
                            'exemplarCity': 'ケーシー基地'
                        },
                        'Davis': {
                            'exemplarCity': 'デービス基地'
                        },
                        'DumontDUrville': {
                            'exemplarCity': 'デュモン・デュルビル基地'
                        },
                        'Macquarie': {
                            'exemplarCity': 'マッコリー'
                        },
                        'Mawson': {
                            'exemplarCity': 'モーソン基地'
                        }
                    },
                    'Arctic': {
                        'Longyearbyen': {
                            'exemplarCity': 'ロングイェールビーン'
                        }
                    },
                    'America': {
                        'Toronto': {
                            'exemplarCity': 'トロント'
                        },
                        'Tijuana': {
                            'exemplarCity': 'ティフアナ'
                        },
                        'Thunder_Bay': {
                            'exemplarCity': 'サンダーベイ'
                        },
                        'Thule': {
                            'exemplarCity': 'チューレ'
                        },
                        'Tegucigalpa': {
                            'exemplarCity': 'テグシガルパ'
                        },
                        'Swift_Current': {
                            'exemplarCity': 'スウィフトカレント'
                        },
                        'Chicago': {
                            'exemplarCity': 'シカゴ'
                        },
                        'Cayman': {
                            'exemplarCity': 'ケイマン'
                        },
                        'Cayenne': {
                            'exemplarCity': 'カイエンヌ'
                        },
                        'Catamarca': {
                            'exemplarCity': 'カタマルカ'
                        },
                        'Caracas': {
                            'exemplarCity': 'カラカス'
                        },
                        'Cancun': {
                            'exemplarCity': 'カンクン'
                        },
                        'Campo_Grande': {
                            'exemplarCity': 'カンポグランデ'
                        },
                        'Cambridge_Bay': {
                            'exemplarCity': 'ケンブリッジベイ'
                        },
                        'Buenos_Aires': {
                            'exemplarCity': 'ブエノスアイレス'
                        },
                        'Boise': {
                            'exemplarCity': 'ボイシ'
                        },
                        'Asuncion': {
                            'exemplarCity': 'アスンシオン'
                        },
                        'Aruba': {
                            'exemplarCity': 'アルバ'
                        },
                        'Argentina': {
                            'Rio_Gallegos': {
                                'exemplarCity': 'リオガジェゴス'
                            },
                            'San_Juan': {
                                'exemplarCity': 'サンファン'
                            },
                            'Ushuaia': {
                                'exemplarCity': 'ウシュアイア'
                            },
                            'La_Rioja': {
                                'exemplarCity': 'ラリオハ'
                            },
                            'San_Luis': {
                                'exemplarCity': 'サンルイス'
                            },
                            'Salta': {
                                'exemplarCity': 'サルタ'
                            },
                            'Tucuman': {
                                'exemplarCity': 'トゥクマン'
                            }
                        },
                        'Araguaina': {
                            'exemplarCity': 'アラグァイナ'
                        },
                        'Antigua': {
                            'exemplarCity': 'アンティグア'
                        },
                        'Anguilla': {
                            'exemplarCity': 'アンギラ'
                        },
                        'Anchorage': {
                            'exemplarCity': 'アンカレッジ'
                        },
                        'Adak': {
                            'exemplarCity': 'アダック'
                        },
                        'Bahia': {
                            'exemplarCity': 'バイーア'
                        },
                        'Bahia_Banderas': {
                            'exemplarCity': 'バイアバンデラ'
                        },
                        'Barbados': {
                            'exemplarCity': 'バルバドス'
                        },
                        'Belem': {
                            'exemplarCity': 'ベレン'
                        },
                        'Belize': {
                            'exemplarCity': 'ベリーズ'
                        },
                        'Blanc-Sablon': {
                            'exemplarCity': 'ブラン・サブロン'
                        },
                        'Boa_Vista': {
                            'exemplarCity': 'ボアビスタ'
                        },
                        'Bogota': {
                            'exemplarCity': 'ボゴタ'
                        },
                        'Curacao': {
                            'exemplarCity': 'キュラソー'
                        },
                        'Danmarkshavn': {
                            'exemplarCity': 'デンマークシャウン'
                        },
                        'Dawson': {
                            'exemplarCity': 'ドーソン'
                        },
                        'Dawson_Creek': {
                            'exemplarCity': 'ドーソンクリーク'
                        },
                        'Denver': {
                            'exemplarCity': 'デンバー'
                        },
                        'Detroit': {
                            'exemplarCity': 'デトロイト'
                        },
                        'Hermosillo': {
                            'exemplarCity': 'エルモシヨ'
                        },
                        'Indiana': {
                            'Vincennes': {
                                'exemplarCity': 'インディアナ州ビンセンス'
                            },
                            'Petersburg': {
                                'exemplarCity': 'インディアナ州ピーターズバーグ'
                            },
                            'Tell_City': {
                                'exemplarCity': 'インディアナ州テルシティ'
                            },
                            'Knox': {
                                'exemplarCity': 'インディアナ州ノックス'
                            },
                            'Winamac': {
                                'exemplarCity': 'インディアナ州ウィナマック'
                            },
                            'Marengo': {
                                'exemplarCity': 'インディアナ州マレンゴ'
                            },
                            'Vevay': {
                                'exemplarCity': 'インディアナ州ビベー'
                            }
                        },
                        'Indianapolis': {
                            'exemplarCity': 'インディアナポリス'
                        },
                        'Inuvik': {
                            'exemplarCity': 'イヌヴィク'
                        },
                        'Iqaluit': {
                            'exemplarCity': 'イカルイット'
                        },
                        'Jamaica': {
                            'exemplarCity': 'ジャマイカ'
                        },
                        'Jujuy': {
                            'exemplarCity': 'フフイ'
                        },
                        'Juneau': {
                            'exemplarCity': 'ジュノー'
                        },
                        'Yellowknife': {
                            'exemplarCity': 'イエローナイフ'
                        },
                        'Yakutat': {
                            'exemplarCity': 'ヤクタット'
                        },
                        'Winnipeg': {
                            'exemplarCity': 'ウィニペグ'
                        },
                        'Whitehorse': {
                            'exemplarCity': 'ホワイトホース'
                        },
                        'Vancouver': {
                            'exemplarCity': 'バンクーバー'
                        },
                        'Tortola': {
                            'exemplarCity': 'トルトーラ'
                        },
                        'Kralendijk': {
                            'exemplarCity': 'クラレンダイク'
                        },
                        'Kentucky': {
                            'Monticello': {
                                'exemplarCity': 'ケンタッキー州モンティチェロ'
                            }
                        },
                        'Havana': {
                            'exemplarCity': 'ハバナ'
                        },
                        'Halifax': {
                            'exemplarCity': 'ハリファクス'
                        },
                        'Guyana': {
                            'exemplarCity': 'ガイアナ'
                        },
                        'Guayaquil': {
                            'exemplarCity': 'グアヤキル'
                        },
                        'Guatemala': {
                            'exemplarCity': 'グアテマラ'
                        },
                        'Guadeloupe': {
                            'exemplarCity': 'グアダループ'
                        },
                        'Grenada': {
                            'exemplarCity': 'グレナダ'
                        },
                        'Grand_Turk': {
                            'exemplarCity': 'グランドターク'
                        },
                        'Goose_Bay': {
                            'exemplarCity': 'グースベイ'
                        },
                        'Godthab': {
                            'exemplarCity': 'ゴッドホープ'
                        },
                        'Glace_Bay': {
                            'exemplarCity': 'グレースベイ'
                        },
                        'Fortaleza': {
                            'exemplarCity': 'フォルタレザ'
                        },
                        'El_Salvador': {
                            'exemplarCity': 'エルサルバドル'
                        },
                        'Eirunepe': {
                            'exemplarCity': 'エイルネペ'
                        },
                        'Edmonton': {
                            'exemplarCity': 'エドモントン'
                        },
                        'Dominica': {
                            'exemplarCity': 'ドミニカ'
                        },
                        'Chihuahua': {
                            'exemplarCity': 'チワワ'
                        },
                        'Coral_Harbour': {
                            'exemplarCity': 'アティコカン'
                        },
                        'Cordoba': {
                            'exemplarCity': 'コルドバ'
                        },
                        'Costa_Rica': {
                            'exemplarCity': 'コスタリカ'
                        },
                        'Creston': {
                            'exemplarCity': 'クレストン'
                        },
                        'Cuiaba': {
                            'exemplarCity': 'クイアバ'
                        },
                        'La_Paz': {
                            'exemplarCity': 'ラパス'
                        },
                        'Lima': {
                            'exemplarCity': 'リマ'
                        },
                        'Los_Angeles': {
                            'exemplarCity': 'ロサンゼルス'
                        },
                        'Louisville': {
                            'exemplarCity': 'ルイビル'
                        },
                        'Lower_Princes': {
                            'exemplarCity': 'ローワー・プリンセズ・クウォーター'
                        },
                        'Maceio': {
                            'exemplarCity': 'マセイオ'
                        },
                        'Managua': {
                            'exemplarCity': 'マナグア'
                        },
                        'Manaus': {
                            'exemplarCity': 'マナウス'
                        },
                        'Marigot': {
                            'exemplarCity': 'マリゴ'
                        },
                        'Martinique': {
                            'exemplarCity': 'マルティニーク'
                        },
                        'Matamoros': {
                            'exemplarCity': 'マタモロス'
                        },
                        'Mazatlan': {
                            'exemplarCity': 'マサトラン'
                        },
                        'Mendoza': {
                            'exemplarCity': 'メンドーサ'
                        },
                        'Menominee': {
                            'exemplarCity': 'メノミニー'
                        },
                        'Merida': {
                            'exemplarCity': 'メリダ'
                        },
                        'Metlakatla': {
                            'exemplarCity': 'メトラカトラ'
                        },
                        'Mexico_City': {
                            'exemplarCity': 'メキシコシティー'
                        },
                        'Miquelon': {
                            'exemplarCity': 'ミクロン島'
                        },
                        'Moncton': {
                            'exemplarCity': 'モンクトン'
                        },
                        'Monterrey': {
                            'exemplarCity': 'モンテレイ'
                        },
                        'Montevideo': {
                            'exemplarCity': 'モンテビデオ'
                        },
                        'Montreal': {
                            'exemplarCity': 'モントリオール'
                        },
                        'Montserrat': {
                            'exemplarCity': 'モントセラト'
                        },
                        'Nassau': {
                            'exemplarCity': 'ナッソー'
                        },
                        'New_York': {
                            'exemplarCity': 'ニューヨーク'
                        },
                        'Nipigon': {
                            'exemplarCity': 'ニピゴン'
                        },
                        'Nome': {
                            'exemplarCity': 'ノーム'
                        },
                        'Noronha': {
                            'exemplarCity': 'ノローニャ'
                        },
                        'North_Dakota': {
                            'Beulah': {
                                'exemplarCity': 'ノースダコタ州ビューラー'
                            },
                            'New_Salem': {
                                'exemplarCity': 'ノースダコタ州ニューセーラム'
                            },
                            'Center': {
                                'exemplarCity': 'ノースダコタ州センター'
                            }
                        },
                        'Ojinaga': {
                            'exemplarCity': 'オヒナガ'
                        },
                        'Panama': {
                            'exemplarCity': 'パナマ'
                        },
                        'Pangnirtung': {
                            'exemplarCity': 'パンナータング'
                        },
                        'Paramaribo': {
                            'exemplarCity': 'パラマリボ'
                        },
                        'Phoenix': {
                            'exemplarCity': 'フェニックス'
                        },
                        'Port-au-Prince': {
                            'exemplarCity': 'ポルトープランス'
                        },
                        'Port_of_Spain': {
                            'exemplarCity': 'ポートオブスペイン'
                        },
                        'Porto_Velho': {
                            'exemplarCity': 'ポルトベーリョ'
                        },
                        'Puerto_Rico': {
                            'exemplarCity': 'プエルトリコ'
                        },
                        'Rainy_River': {
                            'exemplarCity': 'レイニーリバー'
                        },
                        'Rankin_Inlet': {
                            'exemplarCity': 'ランキンインレット'
                        },
                        'Recife': {
                            'exemplarCity': 'レシフェ'
                        },
                        'Regina': {
                            'exemplarCity': 'レジャイナ'
                        },
                        'Resolute': {
                            'exemplarCity': 'レゾリュート'
                        },
                        'Rio_Branco': {
                            'exemplarCity': 'リオブランコ'
                        },
                        'Santa_Isabel': {
                            'exemplarCity': 'サンタイサベル'
                        },
                        'Santarem': {
                            'exemplarCity': 'サンタレム'
                        },
                        'Santiago': {
                            'exemplarCity': 'サンチアゴ'
                        },
                        'Santo_Domingo': {
                            'exemplarCity': 'サントドミンゴ'
                        },
                        'Sao_Paulo': {
                            'exemplarCity': 'サンパウロ'
                        },
                        'Scoresbysund': {
                            'exemplarCity': 'スコルズビスーン'
                        },
                        'Shiprock': {
                            'exemplarCity': 'シップロック'
                        },
                        'Sitka': {
                            'exemplarCity': 'シトカ'
                        },
                        'St_Barthelemy': {
                            'exemplarCity': 'サン・バルテルミー'
                        },
                        'St_Johns': {
                            'exemplarCity': 'セントジョンズ'
                        },
                        'St_Kitts': {
                            'exemplarCity': 'セントキッツ'
                        },
                        'St_Lucia': {
                            'exemplarCity': 'セントルシア'
                        },
                        'St_Thomas': {
                            'exemplarCity': 'セントトーマス'
                        },
                        'St_Vincent': {
                            'exemplarCity': 'セントビンセント'
                        }
                    },
                    'Atlantic': {
                        'South_Georgia': {
                            'exemplarCity': 'サウスジョージア'
                        },
                        'Reykjavik': {
                            'exemplarCity': 'レイキャビク'
                        },
                        'Stanley': {
                            'exemplarCity': 'スタンレー'
                        },
                        'St_Helena': {
                            'exemplarCity': 'セントヘレナ'
                        },
                        'Azores': {
                            'exemplarCity': 'アゾレス'
                        },
                        'Bermuda': {
                            'exemplarCity': 'バミューダ'
                        },
                        'Canary': {
                            'exemplarCity': 'カナリア'
                        },
                        'Cape_Verde': {
                            'exemplarCity': 'カーボベルデ'
                        },
                        'Faeroe': {
                            'exemplarCity': 'フェロー'
                        },
                        'Madeira': {
                            'exemplarCity': 'マデイラ'
                        }
                    },
                    'Europe': {
                        'Oslo': {
                            'exemplarCity': 'オスロ'
                        },
                        'Moscow': {
                            'exemplarCity': 'モスクワ'
                        },
                        'Monaco': {
                            'exemplarCity': 'モナコ'
                        },
                        'Minsk': {
                            'exemplarCity': 'ミンスク'
                        },
                        'Mariehamn': {
                            'exemplarCity': 'マリエハムン'
                        },
                        'Malta': {
                            'exemplarCity': 'マルタ'
                        },
                        'Madrid': {
                            'exemplarCity': 'マドリード'
                        },
                        'Luxembourg': {
                            'exemplarCity': 'ルクセンブルグ'
                        },
                        'London': {
                            'long': {
                                'daylight': '英国夏時間'
                            },
                            'exemplarCity': 'ロンドン'
                        },
                        'Ljubljana': {
                            'exemplarCity': 'リュブリャナ'
                        },
                        'Lisbon': {
                            'exemplarCity': 'リスボン'
                        },
                        'Kiev': {
                            'exemplarCity': 'キエフ'
                        },
                        'Kaliningrad': {
                            'exemplarCity': 'カリーニングラード'
                        },
                        'Jersey': {
                            'exemplarCity': 'ジャージー'
                        },
                        'Istanbul': {
                            'exemplarCity': 'イスタンブール'
                        },
                        'Isle_of_Man': {
                            'exemplarCity': 'マン島'
                        },
                        'Bucharest': {
                            'exemplarCity': 'ブカレスト'
                        },
                        'Brussels': {
                            'exemplarCity': 'ブリュッセル'
                        },
                        'Bratislava': {
                            'exemplarCity': 'ブラチスラバ'
                        },
                        'Berlin': {
                            'exemplarCity': 'ベルリン'
                        },
                        'Belgrade': {
                            'exemplarCity': 'ベオグラード'
                        },
                        'Athens': {
                            'exemplarCity': 'アテネ'
                        },
                        'Andorra': {
                            'exemplarCity': 'アンドラ'
                        },
                        'Amsterdam': {
                            'exemplarCity': 'アムステルダム'
                        },
                        'Simferopol': {
                            'exemplarCity': 'シンフェロポリ'
                        },
                        'Skopje': {
                            'exemplarCity': 'スコピエ'
                        },
                        'Sofia': {
                            'exemplarCity': 'ソフィア'
                        },
                        'Stockholm': {
                            'exemplarCity': 'ストックホルム'
                        },
                        'Tallinn': {
                            'exemplarCity': 'タリン'
                        },
                        'Tirane': {
                            'exemplarCity': 'ティラナ'
                        },
                        'Uzhgorod': {
                            'exemplarCity': 'ウージュホロド'
                        },
                        'Vaduz': {
                            'exemplarCity': 'ファドゥーツ'
                        },
                        'Zurich': {
                            'exemplarCity': 'チューリッヒ'
                        },
                        'Zaporozhye': {
                            'exemplarCity': 'ザポリージャ'
                        },
                        'Zagreb': {
                            'exemplarCity': 'ザグレブ'
                        },
                        'Warsaw': {
                            'exemplarCity': 'ワルシャワ'
                        },
                        'Volgograd': {
                            'exemplarCity': 'ボルゴグラード'
                        },
                        'Vilnius': {
                            'exemplarCity': 'ヴィリニュス'
                        },
                        'Vienna': {
                            'exemplarCity': 'ウィーン'
                        },
                        'Vatican': {
                            'exemplarCity': 'バチカン'
                        },
                        'Sarajevo': {
                            'exemplarCity': 'サラエボ'
                        },
                        'San_Marino': {
                            'exemplarCity': 'サンマリノ'
                        },
                        'Samara': {
                            'exemplarCity': 'サマラ'
                        },
                        'Rome': {
                            'exemplarCity': 'ローマ'
                        },
                        'Riga': {
                            'exemplarCity': 'リガ'
                        },
                        'Prague': {
                            'exemplarCity': 'プラハ'
                        },
                        'Podgorica': {
                            'exemplarCity': 'ポドゴリツァ'
                        },
                        'Paris': {
                            'exemplarCity': 'パリ'
                        },
                        'Helsinki': {
                            'exemplarCity': 'ヘルシンキ'
                        },
                        'Guernsey': {
                            'exemplarCity': 'ガーンジー'
                        },
                        'Gibraltar': {
                            'exemplarCity': 'ジブラルタル'
                        },
                        'Dublin': {
                            'long': {
                                'daylight': 'アイルランド夏時間'
                            },
                            'exemplarCity': 'ダブリン'
                        },
                        'Copenhagen': {
                            'exemplarCity': 'コペンハーゲン'
                        },
                        'Chisinau': {
                            'exemplarCity': 'キシナウ'
                        },
                        'Busingen': {
                            'exemplarCity': 'ビュージンゲン'
                        },
                        'Budapest': {
                            'exemplarCity': 'ブダペスト'
                        }
                    },
                    'Africa': {
                        'Libreville': {
                            'exemplarCity': 'リーブルヴィル'
                        },
                        'Lagos': {
                            'exemplarCity': 'ラゴス'
                        },
                        'Kinshasa': {
                            'exemplarCity': 'キンシャサ'
                        },
                        'Kigali': {
                            'exemplarCity': 'キガリ'
                        },
                        'Khartoum': {
                            'exemplarCity': 'ハルツーム'
                        },
                        'Kampala': {
                            'exemplarCity': 'カンパラ'
                        },
                        'Juba': {
                            'exemplarCity': 'ジュバ'
                        },
                        'Johannesburg': {
                            'exemplarCity': 'ヨハネスブルグ'
                        },
                        'Harare': {
                            'exemplarCity': 'ハラレ'
                        },
                        'Gaborone': {
                            'exemplarCity': 'ハボローネ'
                        },
                        'Freetown': {
                            'exemplarCity': 'フリータウン'
                        },
                        'El_Aaiun': {
                            'exemplarCity': 'アイウン'
                        },
                        'Douala': {
                            'exemplarCity': 'ドゥアラ'
                        },
                        'Djibouti': {
                            'exemplarCity': 'ジブチ'
                        },
                        'Dar_es_Salaam': {
                            'exemplarCity': 'ダルエスサラーム'
                        },
                        'Dakar': {
                            'exemplarCity': 'ダカール'
                        },
                        'Banjul': {
                            'exemplarCity': 'バンジュール'
                        },
                        'Bangui': {
                            'exemplarCity': 'バンギ'
                        },
                        'Bamako': {
                            'exemplarCity': 'バマコ'
                        },
                        'Asmera': {
                            'exemplarCity': 'アスマラ'
                        },
                        'Malabo': {
                            'exemplarCity': 'マラボ'
                        },
                        'Maputo': {
                            'exemplarCity': 'マプト'
                        },
                        'Maseru': {
                            'exemplarCity': 'マセル'
                        },
                        'Mbabane': {
                            'exemplarCity': 'ムババーネ'
                        },
                        'Mogadishu': {
                            'exemplarCity': 'モガディシオ'
                        },
                        'Monrovia': {
                            'exemplarCity': 'モンロビア'
                        },
                        'Nairobi': {
                            'exemplarCity': 'ナイロビ'
                        },
                        'Ndjamena': {
                            'exemplarCity': 'ンジャメナ'
                        },
                        'Windhoek': {
                            'exemplarCity': 'ウィントフック'
                        },
                        'Tunis': {
                            'exemplarCity': 'チュニス'
                        },
                        'Tripoli': {
                            'exemplarCity': 'トリポリ'
                        },
                        'Sao_Tome': {
                            'exemplarCity': 'サントメ'
                        },
                        'Porto-Novo': {
                            'exemplarCity': 'ポルトノボ'
                        },
                        'Ouagadougou': {
                            'exemplarCity': 'ワガドゥグー'
                        },
                        'Nouakchott': {
                            'exemplarCity': 'ヌアクショット'
                        },
                        'Niamey': {
                            'exemplarCity': 'ニアメ'
                        },
                        'Lusaka': {
                            'exemplarCity': 'ルサカ'
                        },
                        'Lubumbashi': {
                            'exemplarCity': 'ルブンバシ'
                        },
                        'Luanda': {
                            'exemplarCity': 'ルアンダ'
                        },
                        'Lome': {
                            'exemplarCity': 'ロメ'
                        },
                        'Conakry': {
                            'exemplarCity': 'コナクリ'
                        },
                        'Ceuta': {
                            'exemplarCity': 'セウタ'
                        },
                        'Casablanca': {
                            'exemplarCity': 'カサブランカ'
                        },
                        'Cairo': {
                            'exemplarCity': 'カイロ'
                        },
                        'Bujumbura': {
                            'exemplarCity': 'ブジュンブラ'
                        },
                        'Brazzaville': {
                            'exemplarCity': 'ブラザビル'
                        },
                        'Blantyre': {
                            'exemplarCity': 'ブランタイヤ'
                        },
                        'Bissau': {
                            'exemplarCity': 'ビサウ'
                        },
                        'Abidjan': {
                            'exemplarCity': 'アビジャン'
                        },
                        'Accra': {
                            'exemplarCity': 'アクラ'
                        },
                        'Addis_Ababa': {
                            'exemplarCity': 'アジスアベバ'
                        },
                        'Algiers': {
                            'exemplarCity': 'アルジェ'
                        }
                    },
                    'Asia': {
                        'Shanghai': {
                            'exemplarCity': '上海'
                        },
                        'Seoul': {
                            'exemplarCity': 'ソウル'
                        },
                        'Samarkand': {
                            'exemplarCity': 'サマルカンド'
                        },
                        'Sakhalin': {
                            'exemplarCity': 'サハリン'
                        },
                        'Saigon': {
                            'exemplarCity': 'ホーチミン'
                        },
                        'Riyadh': {
                            'exemplarCity': 'リヤド'
                        },
                        'Rangoon': {
                            'exemplarCity': 'ラングーン'
                        },
                        'Qyzylorda': {
                            'exemplarCity': 'クズロルダ'
                        },
                        'Qatar': {
                            'exemplarCity': 'カタール'
                        },
                        'Pyongyang': {
                            'exemplarCity': '平壌'
                        },
                        'Pontianak': {
                            'exemplarCity': 'ポンティアナック'
                        },
                        'Phnom_Penh': {
                            'exemplarCity': 'プノンペン'
                        },
                        'Oral': {
                            'exemplarCity': 'オラル'
                        },
                        'Omsk': {
                            'exemplarCity': 'オムスク'
                        },
                        'Novosibirsk': {
                            'exemplarCity': 'ノヴォシビルスク'
                        },
                        'Baghdad': {
                            'exemplarCity': 'バグダッド'
                        },
                        'Chongqing': {
                            'exemplarCity': '重慶'
                        },
                        'Colombo': {
                            'exemplarCity': 'コロンボ'
                        },
                        'Damascus': {
                            'exemplarCity': 'ダマスカス'
                        },
                        'Dhaka': {
                            'exemplarCity': 'ダッカ'
                        },
                        'Dili': {
                            'exemplarCity': 'ディリ'
                        },
                        'Dubai': {
                            'exemplarCity': 'ドバイ'
                        },
                        'Dushanbe': {
                            'exemplarCity': 'ドゥシャンベ'
                        },
                        'Gaza': {
                            'exemplarCity': 'ガザ'
                        },
                        'Harbin': {
                            'exemplarCity': 'ハルビン'
                        },
                        'Hebron': {
                            'exemplarCity': 'ヘブロン'
                        },
                        'Hong_Kong': {
                            'exemplarCity': '香港'
                        },
                        'Hovd': {
                            'exemplarCity': 'ホブド'
                        },
                        'Irkutsk': {
                            'exemplarCity': 'イルクーツク'
                        },
                        'Jakarta': {
                            'exemplarCity': 'ジャカルタ'
                        },
                        'Jayapura': {
                            'exemplarCity': 'ジャヤプラ'
                        },
                        'Ulaanbaatar': {
                            'exemplarCity': 'ウランバートル'
                        },
                        'Urumqi': {
                            'exemplarCity': 'ウルムチ'
                        },
                        'Ust-Nera': {
                            'exemplarCity': 'ウスチネラ'
                        },
                        'Vientiane': {
                            'exemplarCity': 'ビエンチャン'
                        },
                        'Vladivostok': {
                            'exemplarCity': 'ウラジオストク'
                        },
                        'Yakutsk': {
                            'exemplarCity': 'ヤクーツク'
                        },
                        'Yekaterinburg': {
                            'exemplarCity': 'エカテリンブルグ'
                        },
                        'Yerevan': {
                            'exemplarCity': 'エレバン'
                        },
                        'Tokyo': {
                            'exemplarCity': '東京'
                        },
                        'Thimphu': {
                            'exemplarCity': 'ティンプー'
                        },
                        'Tehran': {
                            'exemplarCity': 'テヘラン'
                        },
                        'Tbilisi': {
                            'exemplarCity': 'トビリシ'
                        },
                        'Tashkent': {
                            'exemplarCity': 'タシケント'
                        },
                        'Taipei': {
                            'exemplarCity': '台北'
                        },
                        'Singapore': {
                            'exemplarCity': 'シンガポール'
                        },
                        'Jerusalem': {
                            'exemplarCity': 'エルサレム'
                        },
                        'Ashgabat': {
                            'exemplarCity': 'アシガバード'
                        },
                        'Aqtobe': {
                            'exemplarCity': 'アクトベ'
                        },
                        'Aqtau': {
                            'exemplarCity': 'アクタウ'
                        },
                        'Anadyr': {
                            'exemplarCity': 'アナディリ'
                        },
                        'Amman': {
                            'exemplarCity': 'アンマン'
                        },
                        'Almaty': {
                            'exemplarCity': 'アルマトイ'
                        },
                        'Aden': {
                            'exemplarCity': 'アデン'
                        },
                        'Bahrain': {
                            'exemplarCity': 'バーレーン'
                        },
                        'Baku': {
                            'exemplarCity': 'バクー'
                        },
                        'Bangkok': {
                            'exemplarCity': 'バンコク'
                        },
                        'Beirut': {
                            'exemplarCity': 'ベイルート'
                        },
                        'Bishkek': {
                            'exemplarCity': 'ビシュケク'
                        },
                        'Brunei': {
                            'exemplarCity': 'ブルネイ'
                        },
                        'Calcutta': {
                            'exemplarCity': 'コルカタ'
                        },
                        'Choibalsan': {
                            'exemplarCity': 'チョイバルサン'
                        },
                        'Kabul': {
                            'exemplarCity': 'カブール'
                        },
                        'Kamchatka': {
                            'exemplarCity': 'カムチャッカ'
                        },
                        'Karachi': {
                            'exemplarCity': 'カラチ'
                        },
                        'Kashgar': {
                            'exemplarCity': 'カシュガル'
                        },
                        'Katmandu': {
                            'exemplarCity': 'カトマンズ'
                        },
                        'Khandyga': {
                            'exemplarCity': 'ハンドゥイガ'
                        },
                        'Krasnoyarsk': {
                            'exemplarCity': 'クラスノヤルスク'
                        },
                        'Kuala_Lumpur': {
                            'exemplarCity': 'クアラルンプール'
                        },
                        'Kuching': {
                            'exemplarCity': 'クチン'
                        },
                        'Kuwait': {
                            'exemplarCity': 'クウェート'
                        },
                        'Macau': {
                            'exemplarCity': 'マカオ'
                        },
                        'Magadan': {
                            'exemplarCity': 'マガダン'
                        },
                        'Makassar': {
                            'exemplarCity': 'マカッサル'
                        },
                        'Manila': {
                            'exemplarCity': 'マニラ'
                        },
                        'Muscat': {
                            'exemplarCity': 'マスカット'
                        },
                        'Nicosia': {
                            'exemplarCity': 'ニコシア'
                        },
                        'Novokuznetsk': {
                            'exemplarCity': 'ノヴォクズネツク'
                        }
                    }
                },
                'metazone': {
                    'Samoa': {
                        'long': {
                            'generic': 'サモア時間',
                            'standard': 'サモア標準時',
                            'daylight': 'サモア夏時間'
                        }
                    },
                    'Samara': {
                        'long': {
                            'generic': 'サマラ時間',
                            'standard': 'サマラ標準時',
                            'daylight': 'サマラ夏時間'
                        }
                    },
                    'Sakhalin': {
                        'long': {
                            'generic': 'サハリン時間',
                            'standard': 'サハリン標準時',
                            'daylight': 'サハリン夏時間'
                        }
                    },
                    'Rothera': {
                        'long': {
                            'standard': 'ロゼラ基地時間'
                        }
                    },
                    'Reunion': {
                        'long': {
                            'standard': 'レユニオン時間'
                        }
                    },
                    'Qyzylorda': {
                        'long': {
                            'generic': 'クズロルダ時間',
                            'standard': 'クズロルダ標準時',
                            'daylight': 'クズロルダ夏時間'
                        }
                    },
                    'Ponape': {
                        'long': {
                            'standard': 'ポナペ時間'
                        }
                    },
                    'Pitcairn': {
                        'long': {
                            'standard': 'ピトケアン時間'
                        }
                    },
                    'Pierre_Miquelon': {
                        'long': {
                            'generic': 'サンピエール・ミクロン時間',
                            'standard': 'サンピエール・ミクロン標準時',
                            'daylight': 'サンピエール・ミクロン夏時間'
                        }
                    },
                    'Phoenix_Islands': {
                        'long': {
                            'standard': 'フェニックス諸島時間'
                        }
                    },
                    'Philippines': {
                        'long': {
                            'generic': 'フィリピン時間',
                            'standard': 'フィリピン標準時',
                            'daylight': 'フィリピン夏時間'
                        }
                    },
                    'Peru': {
                        'long': {
                            'generic': 'ペルー時間',
                            'standard': 'ペルー標準時',
                            'daylight': 'ペルー夏時間'
                        }
                    },
                    'Paraguay': {
                        'long': {
                            'generic': 'パラグアイ時間',
                            'standard': 'パラグアイ標準時',
                            'daylight': 'パラグアイ夏時間'
                        }
                    },
                    'Papua_New_Guinea': {
                        'long': {
                            'standard': 'パプアニューギニア時間'
                        }
                    },
                    'Palau': {
                        'long': {
                            'standard': 'パラオ時間'
                        }
                    },
                    'Pakistan': {
                        'long': {
                            'generic': 'パキスタン時間',
                            'standard': 'パキスタン標準時',
                            'daylight': 'パキスタン夏時間'
                        }
                    },
                    'Omsk': {
                        'long': {
                            'generic': 'オムスク時間',
                            'standard': 'オムスク標準時',
                            'daylight': 'オムスク夏時間'
                        }
                    },
                    'Novosibirsk': {
                        'long': {
                            'generic': 'ノヴォシビルスク時間',
                            'standard': 'ノヴォシビルスク標準時',
                            'daylight': 'ノヴォシビルスク夏時間'
                        }
                    },
                    'North_Mariana': {
                        'long': {
                            'standard': '北マリアナ諸島時間'
                        }
                    },
                    'Noronha': {
                        'long': {
                            'generic': 'フェルナンド・デ・ノローニャ時間',
                            'standard': 'フェルナンド・デ・ノローニャ標準時',
                            'daylight': 'フェルナンド・デ・ノローニャ夏時間'
                        }
                    },
                    'Norfolk': {
                        'long': {
                            'standard': 'ノーフォーク島時間'
                        }
                    },
                    'Niue': {
                        'long': {
                            'standard': 'ニウエ時間'
                        }
                    },
                    'Newfoundland': {
                        'long': {
                            'generic': 'ニューファンドランド時間',
                            'standard': 'ニューファンドランド標準時',
                            'daylight': 'ニューファンドランド夏時間'
                        }
                    },
                    'New_Zealand': {
                        'long': {
                            'generic': 'ニュージーランド時間',
                            'standard': 'ニュージーランド標準時',
                            'daylight': 'ニュージーランド夏時間'
                        }
                    },
                    'New_Caledonia': {
                        'long': {
                            'generic': 'ニューカレドニア時間',
                            'standard': 'ニューカレドニア標準時',
                            'daylight': 'ニューカレドニア夏時間'
                        }
                    },
                    'America_Central': {
                        'long': {
                            'generic': 'アメリカ中部時間',
                            'standard': 'アメリカ中部標準時',
                            'daylight': 'アメリカ中部夏時間'
                        }
                    },
                    'America_Eastern': {
                        'long': {
                            'generic': 'アメリカ東部時間',
                            'standard': 'アメリカ東部標準時',
                            'daylight': 'アメリカ東部夏時間'
                        }
                    },
                    'America_Mountain': {
                        'long': {
                            'generic': 'アメリカ山地時間',
                            'standard': 'アメリカ山地標準時',
                            'daylight': 'アメリカ山地夏時間'
                        }
                    },
                    'America_Pacific': {
                        'long': {
                            'generic': 'アメリカ太平洋時間',
                            'standard': 'アメリカ太平洋標準時',
                            'daylight': 'アメリカ太平洋夏時間'
                        }
                    },
                    'Anadyr': {
                        'long': {
                            'generic': 'アナディリ時間',
                            'standard': 'アナディリ標準時',
                            'daylight': 'アナディリ夏時間'
                        }
                    },
                    'Aqtau': {
                        'long': {
                            'generic': 'アクタウ時間',
                            'standard': 'アクタウ標準時',
                            'daylight': 'アクタウ夏時間'
                        }
                    },
                    'Aqtobe': {
                        'long': {
                            'generic': 'アクトベ時間',
                            'standard': 'アクトベ標準時',
                            'daylight': 'アクトベ夏時間'
                        }
                    },
                    'Cape_Verde': {
                        'long': {
                            'generic': 'カーボベルデ時間',
                            'standard': 'カーボベルデ標準時',
                            'daylight': 'カーボベルデ夏時間'
                        }
                    },
                    'Casey': {
                        'long': {
                            'standard': 'ケイシー基地時間'
                        }
                    },
                    'Chamorro': {
                        'long': {
                            'standard': 'チャモロ時間'
                        }
                    },
                    'Chatham': {
                        'long': {
                            'generic': 'チャタム時間',
                            'standard': 'チャタム標準時',
                            'daylight': 'チャタム夏時間'
                        }
                    },
                    'Chile': {
                        'long': {
                            'generic': 'チリ時間',
                            'standard': 'チリ標準時',
                            'daylight': 'チリ夏時間'
                        }
                    },
                    'China': {
                        'long': {
                            'generic': '中国時間',
                            'standard': '中国標準時',
                            'daylight': '中国夏時間'
                        }
                    },
                    'Choibalsan': {
                        'long': {
                            'generic': 'チョイバルサン時間',
                            'standard': 'チョイバルサン標準時',
                            'daylight': 'チョイバルサン夏時間'
                        }
                    },
                    'Christmas': {
                        'long': {
                            'standard': 'クリスマス島時間'
                        }
                    },
                    'Cocos': {
                        'long': {
                            'standard': 'ココス諸島時間'
                        }
                    },
                    'Colombia': {
                        'long': {
                            'generic': 'コロンビア時間',
                            'standard': 'コロンビア標準時',
                            'daylight': 'コロンビア夏時間'
                        }
                    },
                    'Cook': {
                        'long': {
                            'generic': 'クック諸島時間',
                            'standard': 'クック諸島標準時',
                            'daylight': 'クック諸島夏時間'
                        }
                    },
                    'Cuba': {
                        'long': {
                            'generic': 'キューバ時間',
                            'standard': 'キューバ標準時',
                            'daylight': 'キューバ夏時間'
                        }
                    },
                    'Davis': {
                        'long': {
                            'standard': 'デービス基地時間'
                        }
                    },
                    'DumontDUrville': {
                        'long': {
                            'standard': 'デュモン・デュルヴィル基地時間'
                        }
                    },
                    'East_Timor': {
                        'long': {
                            'standard': '東ティモール時間'
                        }
                    },
                    'Easter': {
                        'long': {
                            'generic': 'イースター島時間',
                            'standard': 'イースター島標準時',
                            'daylight': 'イースター島夏時間'
                        }
                    },
                    'Ecuador': {
                        'long': {
                            'standard': 'エクアドル時間'
                        }
                    },
                    'Europe_Central': {
                        'long': {
                            'generic': '中央ヨーロッパ時間',
                            'standard': '中央ヨーロッパ標準時',
                            'daylight': '中央ヨーロッパ夏時間'
                        }
                    },
                    'Europe_Eastern': {
                        'long': {
                            'generic': '東ヨーロッパ時間',
                            'standard': '東ヨーロッパ標準時',
                            'daylight': '東ヨーロッパ夏時間'
                        }
                    },
                    'Europe_Western': {
                        'long': {
                            'generic': '西ヨーロッパ時間',
                            'standard': '西ヨーロッパ標準時',
                            'daylight': '西ヨーロッパ夏時間'
                        }
                    },
                    'Falkland': {
                        'long': {
                            'generic': 'フォークランド諸島時間',
                            'standard': 'フォークランド諸島標準時',
                            'daylight': 'フォークランド諸島夏時間'
                        }
                    },
                    'Fiji': {
                        'long': {
                            'generic': 'フィジー時間',
                            'standard': 'フィジー標準時',
                            'daylight': 'フィジー夏時間'
                        }
                    },
                    'French_Guiana': {
                        'long': {
                            'standard': '仏領ギアナ時間'
                        }
                    },
                    'French_Southern': {
                        'long': {
                            'standard': '仏領南方南極時間'
                        }
                    },
                    'Galapagos': {
                        'long': {
                            'standard': 'ガラパゴス時間'
                        }
                    },
                    'Tokelau': {
                        'long': {
                            'standard': 'トケラウ時間'
                        }
                    },
                    'Tonga': {
                        'long': {
                            'generic': 'トンガ時間',
                            'standard': 'トンガ標準時',
                            'daylight': 'トンガ夏時間'
                        }
                    },
                    'Truk': {
                        'long': {
                            'standard': 'チューク時間'
                        }
                    },
                    'Turkmenistan': {
                        'long': {
                            'generic': 'トルクメニスタン時間',
                            'standard': 'トルクメニスタン標準時',
                            'daylight': 'トルクメニスタン夏時間'
                        }
                    },
                    'Tuvalu': {
                        'long': {
                            'standard': 'ツバル時間'
                        }
                    },
                    'Uruguay': {
                        'long': {
                            'generic': 'ウルグアイ時間',
                            'standard': 'ウルグアイ標準時',
                            'daylight': 'ウルグアイ夏時間'
                        }
                    },
                    'Uzbekistan': {
                        'long': {
                            'generic': 'ウズベキスタン時間',
                            'standard': 'ウズベキスタン標準時',
                            'daylight': 'ウズベキスタン夏時間'
                        }
                    },
                    'Vanuatu': {
                        'long': {
                            'generic': 'バヌアツ時間',
                            'standard': 'バヌアツ標準時',
                            'daylight': 'バヌアツ夏時間'
                        }
                    },
                    'Yekaterinburg': {
                        'long': {
                            'generic': 'エカテリンブルグ時間',
                            'standard': 'エカテリンブルグ標準時',
                            'daylight': 'エカテリンブルグ夏時間'
                        }
                    },
                    'Yakutsk': {
                        'long': {
                            'generic': 'ヤクーツク時間',
                            'standard': 'ヤクーツク標準時',
                            'daylight': 'ヤクーツク夏時間'
                        }
                    },
                    'Wallis': {
                        'long': {
                            'standard': 'ウォリス・フツナ時間'
                        }
                    },
                    'Wake': {
                        'long': {
                            'standard': 'ウェーク島時間'
                        }
                    },
                    'Vostok': {
                        'long': {
                            'standard': 'ボストーク基地時間'
                        }
                    },
                    'Volgograd': {
                        'long': {
                            'generic': 'ボルゴグラード時間',
                            'standard': 'ヴォルゴグラード標準時',
                            'daylight': 'ボルゴグラード夏時間'
                        }
                    },
                    'Vladivostok': {
                        'long': {
                            'generic': 'ウラジオストク時間',
                            'standard': 'ウラジオストク標準時',
                            'daylight': 'ウラジオストク夏時間'
                        }
                    },
                    'Venezuela': {
                        'long': {
                            'standard': 'ベネズエラ時間'
                        }
                    },
                    'Tajikistan': {
                        'long': {
                            'standard': 'タジキスタン時間'
                        }
                    },
                    'Taipei': {
                        'long': {
                            'generic': '台北時間',
                            'standard': '台北標準時',
                            'daylight': '台北夏時間'
                        }
                    },
                    'Tahiti': {
                        'long': {
                            'standard': 'タヒチ時間'
                        }
                    },
                    'Syowa': {
                        'long': {
                            'standard': '昭和基地時間'
                        }
                    },
                    'Suriname': {
                        'long': {
                            'standard': 'スリナム時間'
                        }
                    },
                    'South_Georgia': {
                        'long': {
                            'standard': 'サウスジョージア時間'
                        }
                    },
                    'Solomon': {
                        'long': {
                            'standard': 'ソロモン諸島時間'
                        }
                    },
                    'Singapore': {
                        'long': {
                            'standard': 'シンガポール時間'
                        }
                    },
                    'Seychelles': {
                        'long': {
                            'standard': 'セーシェル時間'
                        }
                    },
                    'Guam': {
                        'long': {
                            'standard': 'グアム時間'
                        }
                    },
                    'Greenland_Western': {
                        'long': {
                            'generic': 'グリーンランド西部時間',
                            'standard': 'グリーンランド西部標準時',
                            'daylight': 'グリーンランド西部夏時間'
                        }
                    },
                    'Greenland_Eastern': {
                        'long': {
                            'generic': 'グリーンランド東部時間',
                            'standard': 'グリーンランド東部標準時',
                            'daylight': 'グリーンランド東部夏時間'
                        }
                    },
                    'GMT': {
                        'long': {
                            'standard': 'グリニッジ標準時'
                        }
                    },
                    'Gilbert_Islands': {
                        'long': {
                            'standard': 'ギルバート諸島時間'
                        }
                    },
                    'Georgia': {
                        'long': {
                            'generic': 'グルジア時間',
                            'standard': 'グルジア標準時',
                            'daylight': 'グルジア夏時間'
                        }
                    },
                    'Gambier': {
                        'long': {
                            'standard': 'ガンビエ諸島時間'
                        }
                    },
                    'Amazon': {
                        'long': {
                            'generic': 'アマゾン時間',
                            'standard': 'アマゾン標準時',
                            'daylight': 'アマゾン夏時間'
                        }
                    },
                    'Acre': {
                        'long': {
                            'generic': 'アクレ時間',
                            'standard': 'アクレ標準時',
                            'daylight': 'アクレ夏時間'
                        }
                    },
                    'Afghanistan': {
                        'long': {
                            'standard': 'アフガニスタン時間'
                        }
                    },
                    'Africa_Central': {
                        'long': {
                            'standard': '中央アフリカ時間'
                        }
                    },
                    'Africa_Eastern': {
                        'long': {
                            'standard': '東アフリカ時間'
                        }
                    },
                    'Africa_Southern': {
                        'long': {
                            'standard': '南アフリカ時間'
                        }
                    },
                    'Africa_Western': {
                        'long': {
                            'generic': '西アフリカ時間',
                            'standard': '西アフリカ標準時',
                            'daylight': '西アフリカ夏時間'
                        }
                    },
                    'Alaska': {
                        'long': {
                            'generic': 'アラスカ時間',
                            'standard': 'アラスカ標準時',
                            'daylight': 'アラスカ夏時間'
                        }
                    },
                    'Almaty': {
                        'long': {
                            'generic': 'アルトマイ時間',
                            'standard': 'アルトマイ標準時',
                            'daylight': 'アルマトイ夏時間'
                        }
                    },
                    'Arabian': {
                        'long': {
                            'generic': 'アラビア時間',
                            'standard': 'アラビア標準時',
                            'daylight': 'アラビア夏時間'
                        }
                    },
                    'Argentina': {
                        'long': {
                            'generic': 'アルゼンチン時間',
                            'standard': 'アルゼンチン標準時',
                            'daylight': 'アルゼンチン夏時間'
                        }
                    },
                    'Argentina_Western': {
                        'long': {
                            'generic': '西部アルゼンチン時間',
                            'standard': '西部アルゼンチン標準時',
                            'daylight': '西部アルゼンチン夏時間'
                        }
                    },
                    'Armenia': {
                        'long': {
                            'generic': 'アルメニア時間',
                            'standard': 'アルメニア標準時',
                            'daylight': 'アルメニア夏時間'
                        }
                    },
                    'Atlantic': {
                        'long': {
                            'generic': '大西洋時間',
                            'standard': '大西洋標準時',
                            'daylight': '大西洋夏時間'
                        }
                    },
                    'Australia_Central': {
                        'long': {
                            'generic': 'オーストラリア中部時間',
                            'standard': 'オーストラリア中部標準時',
                            'daylight': 'オーストラリア中部夏時間'
                        }
                    },
                    'Australia_CentralWestern': {
                        'long': {
                            'generic': 'オーストラリア中西部時間',
                            'standard': 'オーストラリア中西部標準時',
                            'daylight': 'オーストラリア中西部夏時間'
                        }
                    },
                    'Australia_Eastern': {
                        'long': {
                            'generic': 'オーストラリア東部時間',
                            'standard': 'オーストラリア東部標準時',
                            'daylight': 'オーストラリア東部夏時間'
                        }
                    },
                    'Australia_Western': {
                        'long': {
                            'generic': 'オーストラリア西部時間',
                            'standard': 'オーストラリア西部標準時',
                            'daylight': 'オーストラリア西部夏時間'
                        }
                    },
                    'Azerbaijan': {
                        'long': {
                            'generic': 'アゼルバイジャン時間',
                            'standard': 'アゼルバイジャン標準時',
                            'daylight': 'アゼルバイジャン夏時間'
                        }
                    },
                    'Azores': {
                        'long': {
                            'generic': 'アゾレス時間',
                            'standard': 'アゾレス標準時',
                            'daylight': 'アゾレス夏時間'
                        }
                    },
                    'Bangladesh': {
                        'long': {
                            'generic': 'バングラデシュ時間',
                            'standard': 'バングラデシュ標準時',
                            'daylight': 'バングラデシュ夏時間'
                        }
                    },
                    'Bhutan': {
                        'long': {
                            'standard': 'ブータン時間'
                        }
                    },
                    'Bolivia': {
                        'long': {
                            'standard': 'ボリビア時間'
                        }
                    },
                    'Brasilia': {
                        'long': {
                            'generic': 'ブラジリア時間',
                            'standard': 'ブラジリア標準時',
                            'daylight': 'ブラジリア夏時間'
                        }
                    },
                    'Brunei': {
                        'long': {
                            'standard': 'ブルネイ・ダルサラーム時間'
                        }
                    },
                    'Gulf': {
                        'long': {
                            'standard': '湾岸時間'
                        }
                    },
                    'Guyana': {
                        'long': {
                            'standard': 'ガイアナ時間'
                        }
                    },
                    'Hawaii_Aleutian': {
                        'long': {
                            'generic': 'ハワイ・アリューシャン時間',
                            'standard': 'ハワイ・アリューシャン標準時',
                            'daylight': 'ハワイ・アリューシャン夏時間'
                        }
                    },
                    'Hong_Kong': {
                        'long': {
                            'generic': '香港時間',
                            'standard': '香港標準時',
                            'daylight': '香港夏時間'
                        }
                    },
                    'Hovd': {
                        'long': {
                            'generic': 'ホブド時間',
                            'standard': 'ホブド標準時',
                            'daylight': 'ホブド夏時間'
                        }
                    },
                    'India': {
                        'long': {
                            'standard': 'インド時間'
                        }
                    },
                    'Indian_Ocean': {
                        'long': {
                            'standard': 'インド洋時間'
                        }
                    },
                    'Indochina': {
                        'long': {
                            'standard': 'インドシナ時間'
                        }
                    },
                    'Indonesia_Central': {
                        'long': {
                            'standard': 'インドネシア中部時間'
                        }
                    },
                    'Indonesia_Eastern': {
                        'long': {
                            'standard': 'インドネシア東部時間'
                        }
                    },
                    'Indonesia_Western': {
                        'long': {
                            'standard': 'インドネシア西部時間'
                        }
                    },
                    'Iran': {
                        'long': {
                            'generic': 'イラン時間',
                            'standard': 'イラン標準時',
                            'daylight': 'イラン夏時間'
                        }
                    },
                    'Irkutsk': {
                        'long': {
                            'generic': 'イルクーツク時間',
                            'standard': 'イルクーツク標準時',
                            'daylight': 'イルクーツク夏時間'
                        }
                    },
                    'Israel': {
                        'long': {
                            'generic': 'イスラエル時間',
                            'standard': 'イスラエル標準時',
                            'daylight': 'イスラエル夏時間'
                        }
                    },
                    'Japan': {
                        'long': {
                            'generic': '日本時間',
                            'standard': '日本標準時',
                            'daylight': '日本夏時間'
                        },
                        'short': {
                            'standard': 'JST',
                            'daylight': 'JDT'
                        }
                    },
                    'Kamchatka': {
                        'long': {
                            'generic': 'ペトロパブロフスク・カムチャツキー時間',
                            'standard': 'ペトロパブロフスク・カムチャツキー標準時',
                            'daylight': 'ペトロパブロフスク・カムチャツキー夏時間'
                        }
                    },
                    'Kazakhstan_Eastern': {
                        'long': {
                            'standard': '東カザフスタン時間'
                        }
                    },
                    'Kazakhstan_Western': {
                        'long': {
                            'standard': '西カザフスタン時間'
                        }
                    },
                    'Korea': {
                        'long': {
                            'generic': '韓国時間',
                            'standard': '韓国標準時',
                            'daylight': '韓国夏時間'
                        }
                    },
                    'Kosrae': {
                        'long': {
                            'standard': 'コスラエ時間'
                        }
                    },
                    'Krasnoyarsk': {
                        'long': {
                            'generic': 'クラスノヤルスク時間',
                            'standard': 'クラスノヤルスク標準時',
                            'daylight': 'クラスノヤルスク夏時間'
                        }
                    },
                    'Kyrgystan': {
                        'long': {
                            'standard': 'キルギスタン時間'
                        }
                    },
                    'Lanka': {
                        'long': {
                            'standard': 'ランカ時間'
                        }
                    },
                    'Line_Islands': {
                        'long': {
                            'standard': 'ライン諸島時間'
                        }
                    },
                    'Lord_Howe': {
                        'long': {
                            'generic': 'ロードハウ時間',
                            'standard': 'ロードハウ標準時',
                            'daylight': 'ロードハウ夏時間'
                        }
                    },
                    'Macau': {
                        'long': {
                            'generic': 'マカオ時間',
                            'standard': 'マカオ標準時',
                            'daylight': 'マカオ夏時間'
                        }
                    },
                    'Macquarie': {
                        'long': {
                            'standard': 'マッコーリー島時間'
                        }
                    },
                    'Magadan': {
                        'long': {
                            'generic': 'マガダン時間',
                            'standard': 'マガダン標準時',
                            'daylight': 'マガダン夏時間'
                        }
                    },
                    'Malaysia': {
                        'long': {
                            'standard': 'マレーシア時間'
                        }
                    },
                    'Maldives': {
                        'long': {
                            'standard': 'モルディブ時間'
                        }
                    },
                    'Marquesas': {
                        'long': {
                            'standard': 'マルキーズ時間'
                        }
                    },
                    'Marshall_Islands': {
                        'long': {
                            'standard': 'マーシャル諸島時間'
                        }
                    },
                    'Mauritius': {
                        'long': {
                            'generic': 'モーリシャス時間',
                            'standard': 'モーリシャス標準時',
                            'daylight': 'モーリシャス夏時間'
                        }
                    },
                    'Mawson': {
                        'long': {
                            'standard': 'モーソン基地時間'
                        }
                    },
                    'Mongolia': {
                        'long': {
                            'generic': 'ウランバートル時間',
                            'standard': 'ウランバートル標準時',
                            'daylight': 'ウランバートル夏時間'
                        }
                    },
                    'Moscow': {
                        'long': {
                            'generic': 'モスクワ時間',
                            'standard': 'モスクワ標準時',
                            'daylight': 'モスクワ夏時間'
                        }
                    },
                    'Myanmar': {
                        'long': {
                            'standard': 'ミャンマー時間'
                        }
                    },
                    'Nauru': {
                        'long': {
                            'standard': 'ナウル時間'
                        }
                    },
                    'Nepal': {
                        'long': {
                            'standard': 'ネパール時間'
                        }
                    }
                },
                'hourFormat': '+HH:mm;-HH:mm',
                'gmtFormat': 'GMT{0}',
                'gmtZeroFormat': 'GMT',
                'regionFormat': '{0}時間',
                'regionFormat-type-daylight': '{0}夏時間',
                'regionFormat-type-standard': '{0}標準時',
                'fallbackFormat': '{1}（{0}）'
            },
            'calendars': {
                'gregorian': {
                    'months': {
                        'format': {
                            'abbreviated': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
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
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
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
                                '8': '8月',
                                '7': '7月',
                                '6': '6月',
                                '5': '5月',
                                '12': '12月',
                                '11': '11月',
                                '10': '10月',
                                '9': '9月',
                                '1': '1月',
                                '2': '2月',
                                '3': '3月',
                                '4': '4月'
                            }
                        }
                    },
                    'days': {
                        'format': {
                            'abbreviated': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'narrow': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'short': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'wide': {
                                'sun': '日曜日',
                                'mon': '月曜日',
                                'tue': '火曜日',
                                'wed': '水曜日',
                                'thu': '木曜日',
                                'fri': '金曜日',
                                'sat': '土曜日'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'narrow': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'short': {
                                'sun': '日',
                                'mon': '月',
                                'tue': '火',
                                'wed': '水',
                                'thu': '木',
                                'fri': '金',
                                'sat': '土'
                            },
                            'wide': {
                                'sun': '日曜日',
                                'mon': '月曜日',
                                'tue': '火曜日',
                                'wed': '水曜日',
                                'thu': '木曜日',
                                'fri': '金曜日',
                                'sat': '土曜日'
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
                                '1': '第1四半期',
                                '2': '第2四半期',
                                '3': '第3四半期',
                                '4': '第4四半期'
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
                                '1': '第1四半期',
                                '2': '第2四半期',
                                '3': '第3四半期',
                                '4': '第4四半期'
                            }
                        }
                    },
                    'dayPeriods': {
                        'format': {
                            'abbreviated': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            },
                            'narrow': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            },
                            'wide': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            }
                        },
                        'stand-alone': {
                            'abbreviated': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            },
                            'narrow': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            },
                            'wide': {
                                'am': '午前',
                                'noon': '正午',
                                'pm': '午後'
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': '紀元前',
                            '0-alt-variant': '西暦紀元前',
                            '1': '西暦',
                            '1-alt-variant': 'CE'
                        },
                        'eraAbbr': {
                            '0': '紀元前',
                            '0-alt-variant': '西暦紀元前',
                            '1': '西暦',
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
                        'full': 'y年M月d日EEEE',
                        'long': 'y年M月d日',
                        'medium': 'y/MM/dd',
                        'short': 'y/MM/dd'
                    },
                    'timeFormats': {
                        'full': 'H時mm分ss秒 zzzz',
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
                            'y': 'y年',
                            'ms': 'mm:ss',
                            'MMMEEEEd': 'M月d日EEEE',
                            'd': 'd日',
                            'GyMMM': 'Gy年M月',
                            'GyMMMd': 'Gy年M月d日',
                            'GyMMMEd': 'Gy年M月d日(E)',
                            'GyMMMEEEEd': 'Gy年M月d日EEEE',
                            'h': 'aK時',
                            'H': 'H時',
                            'hm': 'aK:mm',
                            'yQQQQ': 'yQQQQ',
                            'yQQQ': 'y/QQQ',
                            'yMMMEEEEd': 'y年M月d日EEEE',
                            'yMMMEd': 'y年M月d日(E)',
                            'yMMMd': 'y年M月d日',
                            'yMMM': 'y年M月',
                            'yMM': 'y/MM',
                            'Hm': 'H:mm',
                            'Ed': 'd日(E)',
                            'EEEEd': 'd日EEEE',
                            'Ehm': 'a K 時 mm 分 (E)',
                            'EHm': 'HH 時 mm 分 (E)',
                            'Ehms': 'a K 時 mm 分 ss 秒 (E)',
                            'EHms': 'HH 時 mm 分 ss 秒 (E)',
                            'Gy': 'Gy年',
                            'hms': 'aK:mm:ss',
                            'Hms': 'H:mm:ss',
                            'M': 'M月',
                            'Md': 'M/d',
                            'MEd': 'M/d(E)',
                            'MEEEEd': 'M/dEEEE',
                            'MMM': 'M月',
                            'MMMd': 'M月d日',
                            'MMMEd': 'M月d日(E)'
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
                                'd': 'M月d日(E)～d日(E)',
                                'M': 'M月d日(E)～M月d日(E)'
                            },
                            'MMMd': {
                                'd': 'M月d日～d日',
                                'M': 'M月d日～M月d日'
                            },
                            'MMM': {
                                'M': 'M月～M月'
                            },
                            'MEd': {
                                'd': 'MM/dd(E)～MM/dd(E)',
                                'M': 'MM/dd(E)～MM/dd(E)'
                            },
                            'Md': {
                                'd': 'MM/dd～MM/dd',
                                'M': 'MM/dd～MM/dd'
                            },
                            'M': {
                                'M': 'M月～M月'
                            },
                            'Hv': {
                                'H': 'H時～H時(v)'
                            },
                            'hv': {
                                'a': 'aK時～aK時(v)',
                                'h': 'aK時～K時(v)'
                            },
                            'intervalFormatFallback': '{0}～{1}',
                            'y': {
                                'y': 'y年～y年'
                            },
                            'yM': {
                                'M': 'y/MM～y/MM',
                                'y': 'y/MM～y/MM'
                            },
                            'yMd': {
                                'd': 'y/MM/dd～y/MM/dd',
                                'M': 'y/MM/dd～y/MM/dd',
                                'y': 'y/MM/dd～y/MM/dd'
                            },
                            'yMEd': {
                                'd': 'y/MM/dd(E)～y/MM/dd(E)',
                                'M': 'y/MM/dd(E)～y/MM/dd(E)',
                                'y': 'y/MM/dd(E)～y/MM/dd(E)'
                            },
                            'yMMM': {
                                'M': 'y年M月～M月',
                                'y': 'y年M月～y年M月'
                            },
                            'yMMMd': {
                                'd': 'y年M月d日～d日',
                                'M': 'y年M月d日～M月d日',
                                'y': 'y年M月d日～y年M月d日'
                            },
                            'yMMMEd': {
                                'd': 'y年M月d日(E)～d日(E)',
                                'M': 'y年M月d日(E)～M月d日(E)',
                                'y': 'y年M月d日(E)～y年M月d日(E)'
                            },
                            'yMMMM': {
                                'M': 'y年M月～M月',
                                'y': 'y年M月～y年M月'
                            },
                            'MMMM': {
                                'M': 'M月～M月'
                            },
                            'Hmv': {
                                'H': 'H時mm分～H時mm分(v)',
                                'm': 'H時mm分～H時mm分(v)'
                            },
                            'hmv': {
                                'a': 'aK時mm分～aK時mm分(v)',
                                'h': 'aK時mm分～K時mm分(v)',
                                'm': 'aK時mm分～K時mm分(v)'
                            },
                            'Hm': {
                                'H': 'H時mm分～H時mm分',
                                'm': 'H時mm分～H時mm分'
                            },
                            'hm': {
                                'a': 'aK時mm分～aK時mm分',
                                'h': 'aK時mm分～K時mm分',
                                'm': 'aK時mm分～K時mm分'
                            },
                            'H': {
                                'H': 'H時～H時'
                            },
                            'h': {
                                'a': 'aK時～aK時',
                                'h': 'aK時～K時'
                            },
                            'd': {
                                'd': 'd日～d日'
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
