const assert = require('assert')
const css = require('css')
const getAllRulesBySelector = require('../src/core/getAllRulesBySelector')

describe('getAllRulesBySelector()', () => {
    const ast = css.parse(`
        #div {
            width: 100px;
            height: 50px;
        }
        .p {
            color: #fff;
        }
        `)

    getAllRulesBySelector(ast)
    
    it('Shall return all iterations given in a list of rules', () => {
        const result = []

        ast.getAllRulesBySelector('#div', (rule, index) => {
            result.push([index, rule.selectors])
        })

        const expect = [0, '#div'].toString();

        assert.equal(result, expect)
    })
})