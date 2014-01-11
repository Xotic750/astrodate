Master

[![Build Status](https://travis-ci.org/Xotic750/astrodate.png?branch=master)](https://travis-ci.org/Xotic750/astrodate  "Build Status on Travis CI")

[![Dependency Status](https://david-dm.org/Xotic750/astrodate.png)](https://david-dm.org/Xotic750/astrodate#info=dependencies&view=table "Dependency Status on David")

[![Dev Dependency Status](https://david-dm.org/Xotic750/astrodate/dev-status.png)](https://david-dm.org/Xotic750/astrodate#info=devDependencies&view=table "Dev Dependency Status on David")

[![Coverage Status](https://coveralls.io/repos/Xotic750/astrodate/badge.png?branch=master)](https://coveralls.io/r/Xotic750/astrodate?branch=master "Coverage status on Coveralls")

[![NPM version](https://badge.fury.io/js/astrodate.png)](http://badge.fury.io/js/astrodate "Current NPM release")

[![browser support](https://ci.testling.com/Xotic750/astrodate.png)](https://ci.testling.com/Xotic750/astrodate 'Browser support on Testling CI')

#[AstroDate 0.7.5](http://xotic750.github.io/astrodate/)
###### Graham Fairweather <xotic750@gmail.com>

Still very much work in progress, so there are [bugs](https://github.com/Xotic750/astrodate/issues "Issues") and the API has not been fully defined (or documented) and is subject to major changes.

The idea behind the project is to not rely on Javascript's rather flaky [```Date```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  "Date Object reference") object, give better accuracy, flexibility and be cross-browser.

Besides the standard [Gregorian calendar](http://en.wikipedia.org/wiki/Gregorian_calendar "Wikipedia"), the [Julian calendar](http://en.wikipedia.org/wiki/Julian_calendar "Wikipedia") is also available. This allows for AstroDate to be used in astronomical calculations.
A set of routines will be made available for changing between systems and methods for obtaining [Julian Day Numbers, Julian Dates](http://en.wikipedia.org/wiki/Julian_day "Wikipedia"), [Modified Julian Dates](http://en.wikipedia.org/wiki/Julian_day#Variants  "Wikipedia"),
[Delta Time](http://en.wikipedia.org/wiki/%CE%94T "Wikipedia") and [Terestrial Time](http://en.wikipedia.org/wiki/Terrestrial_Time "Wikipedia") etc.

For dates beyond the normal ```Date``` range and Javascript's limited number arithmetic, it is necessary to do the Math using arbitrary-precision arithmetic,
[BigNumber.js](https://github.com/MikeMcl/bignumber.js "BigNumber homepage. (A JavaScript library for arbitrary-precision decimal and non-decimal arithmetic.)") is the library chosen for this.

Both calendars can be extrapolated to dates prior to their first adoption and hence are a [Proleptic Gregorian calendar](http://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar "Wikipedia") and [Proleptic Julian Calendar](http://en.wikipedia.org/wiki/Proleptic_Julian_calendar "Wikipedia").

AstroDate includes an [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601 "Wikipedia") parser as one means of setting the date and time, other methods will be available, ie. using an Array and Object of discrete values.

As with ISO 8601 and the Proleptic calendars, [Astronomical year numbering](http://en.wikipedia.org/wiki/Astronomical_year_numbering "Wikipedia") will be used for input and so have a [year zero](http://en.wikipedia.org/wiki/0_%28year%29 "Wikipedia").
Outputs may be formated to use either Astronomical year numbering or [Calendar Era](http://en.wikipedia.org/wiki/Calendar_era "Wikipedia") numbering, ie. BC/AD.

It is not intended for AstroDate to be a generic date parser and handle formats like ```13/10/12```. Though in future it will be possible to develop addons to do this.

Times beginning 1961 will be assumed to be [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time "Wikipedia") before this it is assumed to be [Universal Time](http://en.wikipedia.org/wiki/Universal_Time "Wikipedia"), specifically [UT1](http://en.wikipedia.org/wiki/UT1#Versions "Wikipedia").

You can see AstroDate in use ([jsFiddle](http://jsfiddle.net/Xotic750/RBnMb/ "jsFiddle page with some workings as examples.")) to get an idea of how things are currently functioning until the API and [documentation](http://xotic750.github.io/astrodate/ "AstroDate API documentation") are standardised.

## [CLDR](http://cldr.unicode.org/ "Unicode CLDR Project") Languages available.

* ar
* ca
* cs
* da
* de
* el
* en
* en_AU
* en_CA
* en_GB
* en_HK
* en_IN
* es
* fi
* fr
* he
* hi
* hr
* hu
* it
* ja
* ko
* nb
* nl
* pl
* pt
* pt_PT
* ro
* root
* ru
* sk
* sl
* sr
* sv
* th
* tr
* uk
* vi
* zh
* zh_Hant

The defaut language is 'en'.

Once loaded use ```AstroDate.lang('en');``` to set the default application language, or change a particular instance ```new AstroDate().lang('en-GB');```

## CLDR [locale](http://www.unicode.org/reports/tr35/#Locale "What is a locale?") modifiers

Loaded languages may be modified for locale, use ```AstroDate.locale('sr_ME');``` to set the default application locale, or change a particular instance ```new AstroDate().locale('sr_RO');```

## ```toString``` methods

By default ```.toString()```, ```.toDateString()``` and ```.toTimeString()``` use ```'full'``` locale format, options are ```'full'```, ```'long'```, ```'medium'``` and ```'short'```.

```.toISOString()``` has no modifiers and will produce a standard ISO 8601 time-stamp string, ie. ```1972-07-01T00:00:00.000Z ```

## Pattern formatting

```.format("YYYY'-W'ww'-'E")``` // 2013-W46-3

Date and time formats are specified by <em>date and time pattern</em> strings. Within date and time pattern strings, all unquoted ASCII letters [A-Za-z] are reserved as pattern letters representing calendar fields.
```astrodate``` supports the date and time formatting algorithm and pattern letters defined by [UTS#35 Unicode Locale Data Markup Language (LDML)](http://www.unicode.org/reports/tr35/ "Unicode Technical Standard #35")

Any characters in the pattern that are not in the ranges of ['a'..'z'] and ['A'..'Z'] will be treated as quoted text.
For instance, characters like ':', '.', ' ', '#' and '@' will appear in the resulting time text even they are not embraced within single quotes.

A pattern containing any invalid pattern letter will result in a thrown exception during formatting.
