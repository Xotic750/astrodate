Master [![Build Status](https://travis-ci.org/Xotic750/astrodate.png?branch=master)](https://travis-ci.org/Xotic750/astrodate)

astrodate
=========

<p>Date and time formats are specified by <em>date and time pattern</em> strings. Within date and time pattern strings, all unquoted ASCII letters [A-Za-z] are reserved as pattern letters representing calendar fields. <code>astrodate</code> supports the date and time formatting algorithm and pattern letters defined by <a href="http://www.unicode.org/reports/tr35/">UTS#35 Unicode Locale Data Markup Language (LDML)</a>. The following pattern letters are currently available:</p>

<blockquote>
    <table border="1">
        <thead>
            <tr>
                <th>Field</th>

                <th style="text-align: center">Sym.</th>

                <th style="text-align: center">No.</th>

                <th>Example</th>

                <th>Description</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th rowspan="3">era</th>

                <td style="text-align: center" rowspan="3">G</td>

                <td style="text-align: center">1..3</td>

                <td>AD</td>

                <td rowspan="3">Era - Replaced with the Era string for the current date. One to three letters for the abbreviated form, four letters for the long form, five for the narrow form.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Anno Domini</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>A</td>
            </tr>

            <tr>
                <th rowspan="6">year</th>

                <td style="text-align: center">y</td>

                <td style="text-align: center">1..n</td>

                <td>1996</td>

                <td>
                    Year. Normally the length specifies the padding, but for two letters it also specifies the maximum length. Example:

                    <div align="center">
                        <center>
                            <table border="1" cellpadding="2" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th>Year</th>

                                        <th style="text-align: right">y</th>

                                        <th style="text-align: right">yy</th>

                                        <th style="text-align: right">yyy</th>

                                        <th style="text-align: right">yyyy</th>

                                        <th style="text-align: right">yyyyy</th>
                                    </tr>

                                    <tr>
                                        <td>AD 1</td>

                                        <td style="text-align: right">1</td>

                                        <td style="text-align: right">01</td>

                                        <td style="text-align: right">001</td>

                                        <td style="text-align: right">0001</td>

                                        <td style="text-align: right">00001</td>
                                    </tr>

                                    <tr>
                                        <td>AD 12</td>

                                        <td style="text-align: right">12</td>

                                        <td style="text-align: right">12</td>

                                        <td style="text-align: right">012</td>

                                        <td style="text-align: right">0012</td>

                                        <td style="text-align: right">00012</td>
                                    </tr>

                                    <tr>
                                        <td>AD 123</td>

                                        <td style="text-align: right">123</td>

                                        <td style="text-align: right">23</td>

                                        <td style="text-align: right">123</td>

                                        <td style="text-align: right">0123</td>

                                        <td style="text-align: right">00123</td>
                                    </tr>

                                    <tr>
                                        <td>AD 1234</td>

                                        <td style="text-align: right">1234</td>

                                        <td style="text-align: right">34</td>

                                        <td style="text-align: right">1234</td>

                                        <td style="text-align: right">1234</td>

                                        <td style="text-align: right">01234</td>
                                    </tr>

                                    <tr>
                                        <td>AD 12345</td>

                                        <td style="text-align: right">12345</td>

                                        <td style="text-align: right">45</td>

                                        <td style="text-align: right">12345</td>

                                        <td style="text-align: right">12345</td>

                                        <td style="text-align: right">12345</td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                    </div>
                </td>
            </tr>

            <tr>
                <td style="text-align: center">Y</td>

                <td style="text-align: center">1..n</td>

                <td>1997</td>

                <td>Year (in "Week of Year" based calendars). Normally the length specifies the padding, but for two letters it also specifies the maximum length. This year designation is used in ISO year-week calendar as defined by ISO 8601, but can be used in non-Gregorian based calendar systems where week date processing is desired. May not always be the same value as calendar year.</td>
            </tr>

            <tr>
                <td style="text-align: center">u</td>

                <td style="text-align: center">1..n</td>

                <td>4601</td>

                <td>Extended year. This is a single number designating the year of this calendar system, encompassing all supra-year fields. For example, for the Julian calendar system, year numbers are positive, with an era of BCE or CE. An extended year value for the Julian calendar system assigns positive values to CE years and negative values to BCE years, with 1 BCE being year 0.</td>
            </tr>

            <tr>
                <td style="text-align: center" rowspan="3">U</td>

                <td style="text-align: center">1..3</td>

                <td>\u7532\u5B50</td>

                <td rowspan="3">Cyclic year name. Calendars such as the Chinese lunar calendar (and related calendars) and the Hindu calendars use 60-year cycles of year names. Use one through three letters for the abbreviated name, four for the full name, or five for the narrow name (currently the data only provides abbreviated names, which will be used for all requested name widths). If the calendar does not provide cyclic year name data, or if the year value to be formatted is out of the range of years for which cyclic name data is provided, then numeric formatting is used (behaves like 'y').</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>(currently also \u7532\u5B50)</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>(currently also \u7532\u5B50)</td>
            </tr>

            <tr>
                <th rowspan="6">quarter</th>

                <td rowspan="3" style="text-align: center">Q</td>

                <td style="text-align: center">1..2</td>

                <td>02</td>

                <td rowspan="3">Quarter - Use one or two for the numerical quarter, three for the abbreviation, or four for the full name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Q2</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>2nd quarter</td>
            </tr>

            <tr>
                <td rowspan="3" style="text-align: center">q</td>

                <td style="text-align: center">1..2</td>

                <td>02</td>

                <td rowspan="3"><b>Stand-Alone</b> Quarter - Use one or two for the numerical quarter, three for the abbreviation, or four for the full name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Q2</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>2nd quarter</td>
            </tr>

            <tr>
                <th rowspan="8">month</th>

                <td rowspan="4" style="text-align: center">M</td>

                <td style="text-align: center">1..2</td>

                <td>09</td>

                <td rowspan="4">Month - Use one or two for the numerical month, three for the abbreviation, four for the full name, or five for the narrow name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Sept</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>September</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>S</td>
            </tr>

            <tr>
                <td rowspan="4" style="text-align: center">L</td>

                <td style="text-align: center">1..2</td>

                <td>09</td>

                <td rowspan="4"><b>Stand-Alone</b> Month - Use one or two for the numerical month, three for the abbreviation, or four for the full name, or 5 for the narrow name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Sept</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>September</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>S</td>
            </tr>

            <tr>
                <th rowspan="2">week</th>

                <td style="text-align: center">w</td>

                <td style="text-align: center">1..2</td>

                <td>27</td>

                <td>Week of Year.</td>
            </tr>

            <tr>
                <td style="text-align: center">W</td>

                <td style="text-align: center">1</td>

                <td>3</td>

                <td>Week of Month</td>
            </tr>

            <tr>
                <th rowspan="4">day</th>

                <td style="text-align: center">d</td>

                <td style="text-align: center">1..2</td>

                <td>1</td>

                <td>Date - Day of the month</td>
            </tr>

            <tr>
                <td style="text-align: center">D</td>

                <td style="text-align: center">1..3</td>

                <td>345</td>

                <td>Day of year</td>
            </tr>

            <tr>
                <td style="text-align: center">F</td>

                <td style="text-align: center">1</td>

                <td>2</td>

                <td>Day of Week in Month. The example is for the 2nd Wed in July</td>
            </tr>

            <tr>
                <td style="text-align: center">g</td>

                <td style="text-align: center">1..n</td>

                <td>2451334</td>

                <td>Modified Julian day. This is different from the conventional Julian day number in two regards. First, it demarcates days at local zone midnight, rather than noon GMT. Second, it is a local number; that is, it depends on the local time zone. It can be thought of as a single number that encompasses all the date-related fields.</td>
            </tr>

            <tr>
                <th rowspan="15">week<br>
                day</th>

                <td rowspan="5" style="text-align: center">E</td>

                <td style="text-align: center">1..2</td>

                <td>2</td>

                <td rowspan="5">Day of week - Use one through two for ISO number, or three for the short day, or four for the full name, five for the narrow name, or six for the short name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Tue</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Tuesday</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>T</td>
            </tr>

            <tr>
                <td style="text-align: center">6</td>

                <td>Tu</td>
            </tr>

            <tr>
                <td rowspan="5" style="text-align: center">e</td>

                <td style="text-align: center">1..2</td>

                <td>2</td>

                <td rowspan="5">Local day of week. Same as E except adds a numeric value that will depend on the local starting day of the week, using one or two letters. For this example, Monday is the first day of the week.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Tue</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Tuesday</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>T</td>
            </tr>

            <tr>
                <td style="text-align: center">6</td>

                <td>Tu</td>
            </tr>

            <tr>
                <td rowspan="5" style="text-align: center">c</td>

                <td style="text-align: center">1..2</td>

                <td>2</td>

                <td rowspan="5"><b>Stand-Alone</b> local day of week - Use one or two letters for the local numeric value (same as 'e'), three for the short day, four for the full name, five for the narrow name, or six for the short name.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Tue</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Tuesday</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>T</td>
            </tr>

            <tr>
                <td style="text-align: center">6</td>

                <td>Tu</td>
            </tr>

            <tr>
                <th>period</th>

                <td style="text-align: center">a</td>

                <td style="text-align: center">1</td>

                <td>AM</td>

                <td>AM or PM</td>
            </tr>

            <tr>
                <th rowspan="4">hour</th>

                <td style="text-align: center">h</td>

                <td style="text-align: center">1..2</td>

                <td>11</td>

                <td>Hour [1-12]. When used in skeleton data or in a skeleton passed in an API for flexible data pattern generation, it should match the 12-hour-cycle format preferred by the locale (h or K); it should not match a 24-hour-cycle format (H or k). Use hh for zero padding.</td>
            </tr>

            <tr>
                <td style="text-align: center">H</td>

                <td style="text-align: center">1..2</td>

                <td>13</td>

                <td>Hour [0-23]. When used in skeleton data or in a skeleton passed in an API for flexible data pattern generation, it should match the 24-hour-cycle format preferred by the locale (H or k); it should not match a 12-hour-cycle format (h or K). Use HH for zero padding.</td>
            </tr>

            <tr>
                <td style="text-align: center">K</td>

                <td style="text-align: center">1..2</td>

                <td>0</td>

                <td>Hour [0-11]. When used in a skeleton, only matches K or h, see above. Use KK for zero padding.</td>
            </tr>

            <tr>
                <td style="text-align: center">k</td>

                <td style="text-align: center">1..2</td>

                <td>24</td>

                <td>Hour [1-24]. When used in a skeleton, only matches k or H, see above. Use kk for zero padding.</td>
            </tr>

            <tr>
                <th>minute</th>

                <td style="text-align: center">m</td>

                <td style="text-align: center">1..2</td>

                <td>59</td>

                <td>Minute. Use one or two for zero padding.</td>
            </tr>

            <tr>
                <th rowspan="3">second</th>

                <td style="text-align: center">s</td>

                <td style="text-align: center">1..2</td>

                <td>12</td>

                <td>Second. Use one or two for zero padding.</td>
            </tr>

            <tr>
                <td style="text-align: center">S</td>

                <td style="text-align: center">1..n</td>

                <td>3456</td>

                <td>Fractional Second - truncates (like other time fields) to the count of letters. (example shows display using pattern SSSS for seconds value 12.34567)</td>
            </tr>

            <tr>
                <td style="text-align: center">A</td>

                <td style="text-align: center">1..n</td>

                <td>69540000</td>

                <td>Milliseconds in day. This field behaves <i>exactly</i> like a composite of all time-related fields, not including the zone fields. As such, it also reflects discontinuities of those fields on DST transition days. On a day of DST onset, it will jump forward. On a day of DST cessation, it will jump backward. This reflects the fact that is must be combined with the offset field to obtain a unique local time value.</td>
            </tr>

            <tr>
                <th rowspan="23">zone</th>

                <td rowspan="2" style="text-align: center">z</td>

                <td style="text-align: center">1..3</td>

                <td>PDT</td>

                <td>The <i>short specific non-location format</i>. Where that is unavailable, falls back to the <i>short localized GMT format</i> ("O").</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Pacific Daylight Time</td>

                <td>The <i>long specific non-location format</i>. Where that is unavailable, falls back to the <i>long localized GMT format</i> ("OOOO").</td>
            </tr>

            <tr>
                <td rowspan="3" style="text-align: center">Z</td>

                <td style="text-align: center">1..3</td>

                <td>-0800</td>

                <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields. The format is equivalent to RFC 822 zone format (when optional seconds field is absent). This is equivalent to the "xxxx" specifier.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>GMT-8:00</td>

                <td>The <i>long localized GMT format</i>. This is equivalent to the "OOOO" specifier.</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>-08:00<br>
                -07:52:58</td>

                <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields. The ISO8601 UTC indicator "Z" is used when local time offset is 0. This is equivalent to the "XXXXX" specifier.</td>
            </tr>

            <tr>
                <td rowspan="2" style="text-align: center">O</td>

                <td style="text-align: center">1</td>

                <td>GMT-8</td>

                <td>The <i>short localized GMT format</i>.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>GMT-08:00</td>

                <td>The <i>long localized GMT format</i>.</td>
            </tr>

            <tr>
                <td rowspan="2" style="text-align: center">v</td>

                <td style="text-align: center">1</td>

                <td>PT</td>

                <td>The <i>short generic non-location format</i>. Where that is unavailable, falls back to the <i>generic location format</i> ("VVVV"), then the <i>short localized GMT format</i> as the final fallback.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Pacific Time</td>

                <td>The <i>long generic non-location format</i>. Where that is unavailable, falls back to <i>generic location format</i> ("VVVV").</td>
            </tr>

            <tr>
                <td rowspan="4" style="text-align: center">V</td>

                <td style="text-align: center">1</td>

                <td>uslax</td>

                <td>The short time zone ID. Where that is unavailable, the special short time zone ID <i>unk</i> (Unknown Zone) is used.<br>
                <i><b>Note</b>: This specifier was originally used for a variant of the short specific non-location format, but it was deprecated in the later version of the LDML specification. In CLDR 23/ICU 51, the definition of the specifier was changed to designate a short time zone ID.</i></td>
            </tr>

            <tr>
                <td style="text-align: center">2</td>

                <td>America/Los_Angeles</td>

                <td>The long time zone ID.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>Los Angeles</td>

                <td>The exemplar city (location) for the time zone. Where that is unavailable, the localized exemplar city name for the special zone <i>Etc/Unknown</i> is used as the fallback (for example, "Unknown City").</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>Los Angeles Time</td>

                <td>The <i>generic location format</i>. Where that is unavailable, falls back to the <i>long localized GMT format</i> ("OOOO"; Note: Fallback is only necessary with a GMT-style Time Zone ID, like Etc/GMT-830.)<br>
                This is especially useful when presenting possible timezone choices for user selection, since the naming is more uniform than the "v" format.</td>
            </tr>

            <tr>
                <td rowspan="5" style="text-align: center">X</td>

                <td style="text-align: center">1</td>

                <td>-08<br>
                +0530<br>
                Z</td>

                <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field. The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
            </tr>

            <tr>
                <td style="text-align: center">2</td>

                <td>-0800<br>
                Z</td>

                <td>The <i>ISO8601 basic format</i> with hours and minutes fields. The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>-08:00<br>
                Z</td>

                <td>The <i>ISO8601 extended format</i> with hours and minutes fields. The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>-0800<br>
                -075258<br>
                Z</td>

                <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields. (Note: The seconds field is not supported by the ISO8601 specification.) The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>-08:00<br>
                -07:52:58<br>
                Z</td>

                <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields. (Note: The seconds field is not supported by the ISO8601 specification.) The ISO8601 UTC indicator "Z" is used when local time offset is 0.</td>
            </tr>

            <tr>
                <td rowspan="5" style="text-align: center">x</td>

                <td style="text-align: center">1</td>

                <td>-08<br>
                +0530</td>

                <td>The <i>ISO8601 basic format</i> with hours field and optional minutes field.</td>
            </tr>

            <tr>
                <td style="text-align: center">2</td>

                <td>-0800</td>

                <td>The <i>ISO8601 basic format</i> with hours and minutes fields.</td>
            </tr>

            <tr>
                <td style="text-align: center">3</td>

                <td>-08:00</td>

                <td>The <i>ISO8601 extended format</i> with hours and minutes fields.</td>
            </tr>

            <tr>
                <td style="text-align: center">4</td>

                <td>-0800<br>
                -075258</td>

                <td>The <i>ISO8601 basic format</i> with hours, minutes and optional seconds fields. (Note: The seconds field is not supported by the ISO8601 specification.)</td>
            </tr>

            <tr>
                <td style="text-align: center">5</td>

                <td>-08:00<br>
                -07:52:58</td>

                <td>The <i>ISO8601 extended format</i> with hours, minutes and optional seconds fields. (Note: The seconds field is not supported by the ISO8601 specification.)</td>
            </tr>
        </tbody>
    </table>
</blockquote>

<p>Any characters in the pattern that are not in the ranges of ['a'..'z'] and ['A'..'Z'] will be treated as quoted text. For instance, characters like ':', '.', ' ', '#' and '@' will appear in the resulting time text even they are not embraced within single quotes.</p>

<p>A pattern containing any invalid pattern letter will result in a thrown exception during formatting.</p>
