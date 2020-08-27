const assert = require('assert')
const css = require('css')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty')
const getAllParams = require('../src/core/getAllParams')

describe('getAllParams()', () => {

    const ast = css.parse(`
        .test {
        margin: 10px 5px;
        }
        .b {
        color: #000;
        }
    `)

    getAllRulesByType(ast)
    findDeclarationsByProperty(ast)
    getAllParams(ast)

    it('Should return a list of values', () => {
        const result = []
        ast.getAllRulesByType('rule', (rule) => {
            rule.findDeclarationsByProperty('margin', (declaration) => {
                result.push(declaration.getAllParams())
            })
        })
        const expect = ['10px', '5px'].toString();
        assert.equal(result, expect)
    })
})