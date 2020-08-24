const assert = require('assert')
const css = require('css')
const removeDeclaration = require('../src/core/removeDeclarations')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty')

describe('removeDeclaration()', () => {
    it('Should return a css with a property was removed', () => {
        const ast = css.parse(`
            .test {
                width: 100%;
                color: #fff;
            }
        `)

        getAllRulesByType(ast)
        findDeclarationsByProperty(ast)
        removeDeclaration(ast)

        ast.getAllRulesByType('rule', (rule) => {
            rule.findDeclarationsByProperty('width', () => {
                rule.removeDeclaration(0)
            })
        })

        const result = css.stringify(ast)

        const expect = '.test {\n  color: #fff;\n}'

        assert.equal(result, expect)
    })
})