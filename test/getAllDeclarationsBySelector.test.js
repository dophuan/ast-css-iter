const assert = require('assert')
const css = require('css')
const getAllDeclarationsBySelector = require('../src/core/getAllDeclarationsBySelector')

describe('getAllDeclarationsBySelector', () => {
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
        
        getAllDeclarationsBySelector(ast)

        const result = []

        ast.getAllDeclarationsBySelector('.div', (declaration) => {
            result.push([declaration.property, declaration.value])
        })

        const expect = [['width', '100%'], ['height', '50%'], ['display', 'flex']].toString()

        assert.equal(result, expect)
    })
})