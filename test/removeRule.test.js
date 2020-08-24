const assert = require('assert')
const css = require('css')
const getAllRulesBySelector = require('../src/core/getAllRulesBySelector')
const removeRule = require('../src/core/removeRule')

describe('removeRule()', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
      .truncated-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `)
    getAllRulesBySelector(ast)
    removeRule(ast)

    it('Should return a CSS with one rule removed.', () => {

        ast.getAllRulesBySelector('.truncated-text', (rule, index) => {
            ast.removeRule(index)
        })

        const result = css.stringify(ast)
        const expect = '.a {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}'
        assert.equal(result, expect)

    });

    // --------------------------

    it('Should return a CSS with one rule removed on position 3.', () => {

        ast.getAllRulesBySelector('.b', (rule, index) => {
            ast.removeRule(index)
        });

        const result = css.stringify(ast)
        const expect = '.a {\n  width: 10px;\n}'
        assert.equal(result, expect)

    })

})