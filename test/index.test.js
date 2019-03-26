'use strict';

const assert = require('assert');
const path = require('path');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

const parse = require('..');

describe('test/index.test.js', () => {

  it('should work', async () => {
    const md = await readFile(path.join(__dirname, 'fixture/History.md'), 'utf-8');
    const list = parse(md);
    console.log(list);
    assert(list.length === 6);
    assert(list[0].version === '2.14.1');
    assert(list[0].date === '2018-11-24');
    assert(list[0].title === '## 2018-11-24, Version 2.14.1 @atian25');
    assert(list[0].author === '@atian25');
    assert(list[0].content.includes('remove timeout log msg'));

    assert(list[1].version === '2.14.0');
    assert(list[1].date === '2018-11-17');

    assert(list[4].version === '3.20.1');
    assert(list[4].date === '2018-09-17');
    assert(list[4].content.includes('others'));

    assert(list[5].version === '0.0.6');
    assert(list[5].date === '2016-10-24');
    assert(list[5].title === '0.0.6 / 2016-10-24');
    assert(list[5].content.includes('docs:update readme (#9)'));
  });
});
