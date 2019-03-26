'use strict';

const REGEX_NORMAL = /^(\d+\.\d+\.\d+)\s+\/\s+(\d{4}-\d{1,2}-\d{1,2})/;
const REGEX_RELEASE = /^##\s+(\d{4}-\d{1,2}-\d{1,2}).*?(\d+\.\d+\.\d+).*?(@\S+)/;

class Parser {
  /**
   * @typedef ChangeLogInfo
   * @type {Object}
   * @property {String} type - `normal` / `release`
   * @property {Number} start - item body start line
   * @property {Number} end - item body end line
   * @property {String} title - item title
   * @property {String} version - version name
   * @property {String} date - publish date
   * @property {String} content - changelog body
   */

  /**
   * parse md to json
   * @param {String} md - changelog md
   * @return {ChangeLogInfo[]} changelog list
   */
  parse(md) {
    const result = [];
    const lines = md.split(/\n/);

    let item;

    for (const [ index, line ] of lines.entries()) {
      if (REGEX_NORMAL.test(line)) {
        const { $1, $2 } = RegExp;
        if (item) item.end = index - 1;
        item = {
          type: 'normal',
          start: index + 2,
          end: lines.length,
          version: $1,
          date: $2,
          title: line,
        };
        result.push(item);
      } else if (REGEX_RELEASE.test(line)) {
        const { $1, $2, $3 } = RegExp;
        if (item) item.end = index;
        item = {
          type: 'release',
          start: index + 1,
          end: lines.length - 1,
          version: $2,
          date: $1,
          author: $3,
          title: line,
        };
        result.push(item);
      }
    }

    result.forEach(item => {
      item.content = lines.slice(item.start, item.end).join('\n');
    });

    return result;
  }
}

module.exports = md => new Parser().parse(md);
module.exports.Parser = Parser;

