const assert = require('assert')
const css = require('css')
const findAllRulesByType = require('../src/core/findAllRulesByType')
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty')
const addDeclaration = require('../src/core/addDeclarations')

describe('addDeclaration()', () => {
  it('Should return a CSS with one new property added.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `)

    findAllRulesByType(ast)
    findDeclarationsByProperty(ast)
    addDeclaration(ast)

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('width', () => {

        rule.addDeclaration('background', '#fff', 0)

      })

    })

    const result = css.stringify(ast)
    const expect = '.a {\n  background: #fff;\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}'
    assert.equal(result, expect)
  })
})