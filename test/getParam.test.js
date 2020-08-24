const assert = require('assert')
const css = require('css')
const getAllRulesByType = require('../src/core/getAllRulesByType')
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty')
const getParam = require('../src/core/getParam')

describe('getParam()', () => {

    const ast = css.parse(`
        .a {
        margin: 10px 5px;
        }
        .b {
        color: #000;
        }
    `)

    getAllRulesByType(ast)
    findDeclarationsByProperty(ast)
    getParam(ast)

    it('Should return a specific value', () => {
        let result
        ast.getAllRulesByType('rule', (rule) => {
            rule.findDeclarationsByProperty('margin', (declaration) => {
                result = declaration.getParam(1)
            })
        })
        const expect = '5px';
        assert.equal(result, expect)
    })

    it('If a specific value does not exist, return the' +
        ' first value', () => {

            let result

            ast.getAllRulesByType('rule', (rule) => {
                rule.findDeclarationsByProperty('margin', (declaration) => {
                    result = declaration.getParam(3)
                })
            })

            const expect = '10px'
            assert.equal(result, expect)
        })
})