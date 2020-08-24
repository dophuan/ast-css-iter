const assert = require('assert')
const css = require('css')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty')
const addDeclaration = require('../src/core/addDeclarations')

describe('addDeclaration()', () => {
  it('Should return a CSS with one new property added.', () => {

    const ast = css.parse(`
      .test {
        width: 10px;
      }
      #div {
        color: #fff;
      }
    `)

    getAllRulesByType(ast)
    findDeclarationsByProperty(ast)
    addDeclaration(ast)

    ast.getAllRulesByType('rule', (rule) => {
      rule.findDeclarationsByProperty('width', () => {
        rule.addDeclaration('background', '#fff', 0)
      })

    })

    const result = css.stringify(ast)
    const expect = '.test {\n  background: #fff;\n  width: 10px;\n}\n\n#div {\n  color: #fff;\n}'
    assert.equal(result, expect)
  })
})