const assert = require('assert')
const css = require('css')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarations = require('../src/core/findDeclarations')

describe('findDeclarations()', () => {

  // --------------------------

  it('Should return iterations in a list of declarations', () => {

    const ast = css.parse(`
      @import module.css;
      .a {
        width: 11px;
        height: 50%;
      }
      /* comment */
      .b {
        color: #fff;
      }
    `)

    getAllRulesByType(ast)
    findDeclarations(ast)

    const result = []

    ast.getAllRulesByType('rule', (rule) => {
      rule.findDeclarations((declaration, declarationIndex) => {
        result.push([declarationIndex, declaration.property, declaration.value])
      })
    })

    const expect = [[0, 'width', '11px'], [1, 'height', '50%'], [0, 'color', '#fff']].toString()

    assert.equal(result, expect)

  })

})