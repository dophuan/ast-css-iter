const assert = require('assert')
const css = require('css')
const getAllDeclarationsByValue = require('../src/core/getAllDeclarationsByValue')

describe('getAllDeclarationsByValue', () => {
    it('Shall return iterations in a list of declarations filtered by a value', () => {
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
        
        getAllDeclarationsByValue(ast)

        const result = []

        ast.getAllDeclarationsByValue('#fff', (declaration) => {
            result.push([declaration.property, declaration.value])
        })

        const expect = [['color', '#fff']].toString()

        assert.equal(result, expect)
    })
})