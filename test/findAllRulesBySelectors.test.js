const assert = require('assert')
const css = require('css')
const findAllRulesBySelectors = require('../src/core/findAllRulesBySelectors')

describe('findAllRulesBySelectors()', () => {
    it('Shall return all iterations given in a list of rules', () => {
        const ast = css.parse(`
        .div {
            width: 100px;
            height: 50px;
        }
        .p {
            color: #fff;
        }
        `)

        findAllRulesBySelectors(ast)

        const result = []

        ast.findAllRulesBySelectors('.div', (rule, index) => {
            result.push([index, rule.selectors])
        })

        const expect = [0, '.div'].toString();

        assert.equal(result, expect)
    })
})