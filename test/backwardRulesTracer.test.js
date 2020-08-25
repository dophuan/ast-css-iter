const assert = require('assert')
const css = require('css')
const backwardRulesTracer = require('../src/core/backwardRulesTracer')

describe('backwardRulesTracer()', () => {

    it('Should return a backward iteration in a list of rules', () => {

        const ast = css.parse(`
        .first {
            width: 10px;
        }
        .second {
            color: #000;
        }
        `)


        backwardRulesTracer(ast)

        const result = []

        ast.backwardRulesTracer((rule, indexRule) => {
            result.push([indexRule, rule.type])
        })

        const expect = [[1, 'rule'], [0, 'rule']].toString()

        assert.equal(result, expect)

    })

})