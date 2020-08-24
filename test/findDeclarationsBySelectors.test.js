const assert = require('assert')
const css = require('css')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarationsBySelector = require('../src/core/findDeclarationsBySelector')

describe('findDeclarationsBySelector()', () => {
  it('Should return iterations in a list of declarations ' +
    '(filtered by selectors)', () => {

      const ast = css.parse(`
      .truncated-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      /* comment */
      .b {
        color: #000;
      }
    `)
      getAllRulesByType(ast)
      findDeclarationsBySelector(ast)

      const result = []

      ast.getAllRulesByType('rule', (rule) => {
        rule.findDeclarationsBySelector('.truncated-text', (declaration, declarationIndex) => {
          result.push([declarationIndex, declaration.property, declaration.value])
        })
      })
      const expect = [[0, 'white-space', 'nowrap'], [1, 'overflow', 'hidden'], [2, 'text-overflow', 'ellipsis']].toString()
      assert.equal(result, expect)
    })
})