const assert = require('assert');
const css = require('css');
const findAllRules = require('../src/core/findAllRules');

describe('findAllRules()', () => {

  it('Should return a iterations in a list of rules', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `);

    findAllRules(ast)

    const result = []

    ast.findAllRules((rule, index) => {
      result.push([index, rule.type])
    });

    const expect = [[0, 'rule'], [1, 'rule']].toString()

    assert.equal(result, expect)

  })

})