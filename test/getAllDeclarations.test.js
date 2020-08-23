const assert = require('assert')
const css = require('css')
const getAllDeclarations = require('../src/core/getAllDeclarations')

describe('getAllDeclarations', () => {
    it('Shall return iterations in a list of declarations', () => {
        const ast = css.parse(`
            .div {
                width: 100%;
                height: 50%;
                display: flex;
            }
            .p {
                color: #fff;
            }
        `)

        getAllDeclarations(ast)

        const result = []

        ast.getAllDeclarations((declaration) => {
            result.push([declaration.property, declaration.value])
        })

        const expect = [['width', '100%'], ['height', '50%'], ['display', 'flex'], ['color', '#fff']].toString()

        assert.equal(result, expect)
    })
})