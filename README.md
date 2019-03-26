# git-changelog-parser

Parse Git `ChangeLog.md / History.md` to JSON

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NPM download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/git-changelog-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/git-changelog-parser
[travis-image]: https://img.shields.io/travis/atian25/git-changelog-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/atian25/git-changelog-parser
[codecov-image]: https://codecov.io/gh/atian25/git-changelog-parser/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/atian25/git-changelog-parser
[david-image]: https://img.shields.io/david/atian25/git-changelog-parser.svg?style=flat-square
[david-url]: https://david-dm.org/atian25/git-changelog-parser
[snyk-image]: https://snyk.io/test/npm/git-changelog-parser/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/git-changelog-parser
[download-image]: https://img.shields.io/npm/dm/git-changelog-parser.svg?style=flat-square
[download-url]: https://npmjs.org/package/git-changelog-parser

## Install

```bash
npm i git-changelog-parser --save
```

## Usage

```js
const parse = require('git-changelog-parser');
const result = parse(content);
console.log(result);

// [ { version, date, author, content, title, type, start, end }, ...]
```
