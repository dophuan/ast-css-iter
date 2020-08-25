const assert = require('assert')
const css = require('css')
const getImports = require('../src/core/getImports')

describe('getImports()', () => {
    it('Should return a iterations in a list of import', () => {
        const ast = css.parse(`
        @import module.css;
        .a {
            width: 10px;
        }
        /* comment */
        .b {
            color: #000;
        }
        `)
       
        getImports(ast)

        const result = []

        ast.getImports((url) => {
            result.push([url])
        })
        const expect = ['module.css'].toString()
        assert.equal(result, expect)
    })
})