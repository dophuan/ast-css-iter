const assert = require('assert')
const css = require('css')
const findAllRulesByType = require('../src/core/findAllRulesByType')

describe('findAllRulesByType()', () => {

    const ast = css.parse(`
            @import module.css;
            .div {
                color: #fff;
            }
            /* here the comment */
            .p {
                font-size: 1rem;
            }
        `)

    findAllRulesByType(ast)

    it('Shall return list of iterator filtered by comment', () => {

        const result = []

        ast.findAllRulesByType('comment', (rule, index) => {
            result.push([index, rule.type])
        })

        const expect = [2, 'comment'].toString()

        assert.equal(result, expect)
    })

    it('Shall return a list of iterators filtered by import', () => {
        const result = []

        ast.findAllRulesByType('import', (rule, index) => {
            result.push([index, rule.type])
        })

        const expect = [0, 'import'].toString()

        assert.equal(result, expect)
    })

    it('Shall return a list of iterators filtered by rule', () => {
        const result = []

        ast.findAllRulesByType('rule', (rule, index) => {
            result.push([index, rule.type])
        })

        const expect = [[1, 'rule'], [3, 'rule']].toString()

        assert.equal(result, expect)
    })
})