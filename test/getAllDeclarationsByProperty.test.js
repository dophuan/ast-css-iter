const assert = require('assert')
const css = require('css')
const getAllDeclarationsByProperty = require('../src/core/getAllDeclarationsByProperty')

describe('getAllDeclarationsByProperty', () => {
    it('Shall return iterations in a list of declarations filtered by property', () => {
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
        
        getAllDeclarationsByProperty(ast)

        const result = []

        ast.getAllDeclarationsByProperty('display', (declaration) => {
            result.push([declaration.property, declaration.value])
        })

        const expect = [['display', 'flex'], ['display', 'inline-block']].toString()

        assert.equal(result, expect)
    })
})