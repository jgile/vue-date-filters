# Filters for formatting date, datetime, and time.

[![Latest Version on NPM](https://img.shields.io/npm/v/package_name.svg?style=flat-square)](https://npmjs.com/package/vue-date-filters)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

A Vue.js plugin to display dates, datetimes, and times.  Uses moment.js.

The full list of included filters:
|time|12:00 am|
|shortTime|12:00|
|longTime|12:00:00 am|
|date|2018-04-05|
|shortDate|2018-4-5|
|writtenDate|Apr 5th, 2018|
|dateTime|2018-04-05 12:00 am|
|shortDateTime|2018-4-5 12:00 am|
|writtenDateTime|Apr 5th, 2018, 12:00 am|
|utcToLocal|\\"2018-04-05T00:00:00.000Z\\"|
|localToUtc|\\"2018-04-05T05:00:00.000Z\\"|

## Demo

See "docs" directory for example.

## Installation

You can install the package via yarn:

```bash
yarn add vue-date-filters
```
or npm:

```bash
npm install vue-date-filters --save
```


## Usage

```js
import VueDates from "vue-date-filters";
Vue.use(VueDates);
```

In your template:
```js
{{ "2018-14-18" | longDate }}

```

### Testing

```bash
npm test
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

### Security

If you discover any security related issues, please contact John Gile.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.