const assert = require('assert')
const css = require('css')
const findAllRulesByType = require('../src/core/findAllRulesByType')
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

        findAllRulesByType(ast)
        findDeclarations(ast)

        const result = []

        ast.findAllRulesByType('rule', (rule) => {
            rule.findDeclarations((declaration, declarationIndex) => {
                result.push([declarationIndex, declaration.property, declaration.value])
            })
        })

        const expect = [[0, 'width', '11px'], [1, 'height', '50%'], [0, 'color', '#fff']].toString()

        assert.equal(result, expect)

    })

})