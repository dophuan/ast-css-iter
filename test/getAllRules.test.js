const assert = require('assert');
const css = require('css');
const getAllRules = require('../src/core/getAllRules');

describe('getAllRules()', () => {

  it('Should return a iterations in a list of rules', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `);

    getAllRules(ast)

    const result = []

    ast.getAllRules((rule, index) => {
      result.push([index, rule.type])
    });

    const expect = [[0, 'rule'], [1, 'rule']].toString()

    assert.equal(result, expect)

  })

})