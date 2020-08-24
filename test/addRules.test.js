const assert = require('assert')
const css = require('css')
const addRule = require('../src/core/addRules')

describe('addRule()', () => {
  const ast = css.parse(`
      .foo {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `)
  addRule(ast)

  it('Return a CSS with a new rule added at the end', () => {


    const newRule = css.parse(`
      .bar {
        height: 40px;
      }
    `)

    ast.addRule(newRule, 0)

    const result = css.stringify(ast)
    const expect = '.bar {\n  height: 40px;\n}\n\n.foo {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}'
    assert.equal(result, expect)

  })

  it('Should return a CSS with one rule added on the first position', () => {

    const newRule = css.parse(`
      .test {
        background-color: #fff;
      }
    `)

    ast.addRule(newRule, 1)

    const result = css.stringify(ast)
    const expect = '.bar {\n  height: 40px;\n}\n\n.test {\n  background-color: #fff;\n}\n\n.foo {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}'
    assert.equal(result, expect)

  })
})