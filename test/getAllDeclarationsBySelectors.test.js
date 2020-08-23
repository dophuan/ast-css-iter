const assert = require('assert')
const css = require('css')
const getAllDeclarationsBySelectors = require('../src/core/getAllDeclarationsBySelectors')

describe('getAllDeclarationsBySelectors', () => {
    it('Shall return iterations in a list of declarations filtered by a selector', () => {
        const ast = css.parse(`
            .div {
                width: 100%;
                height: 50%;
                display: flex;
            }
            .p {
                color: #fff;
                display: inline-block;
            }
        `)
        
        getAllDeclarationsBySelectors(ast)

        const result = []

        ast.getAllDeclarationsBySelectors('.div', (declaration) => {
            result.push([declaration.property, declaration.value])
        })

        const expect = [['width', '100%'], ['height', '50%'], ['display', 'flex']].toString()

        assert.equal(result, expect)
    })
})