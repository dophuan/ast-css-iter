const assert = require('assert')
const css = require('css')
const addRule = require('../src/core/addRules')

describe('addRule()', () => {
  it('Return a CSS with a new rule added at the end', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `)

    addRule(ast)

    const newRule = css.parse(`
      .foo {
        height: 40px;
      }
    `)

    ast.addRule(newRule, 0)

    const result = css.stringify(ast)
    const expect = '.foo {\n  height: 40px;\n}\n\n.a {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}'
    assert.equal(result, expect)

  })

  // --------------------------

  it('Should return a CSS with one rule added on the first position', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `)

    addRule(ast)

    const newRule = css.parse(`
      .foo {
        height: 40px;
      }
    `)

    ast.addRule(newRule, 1)

    const result = css.stringify(ast)
    const expect = '.a {\n  width: 10px;\n}\n\n.foo {\n  height: 40px;\n}\n\n.b {\n  color: #000;\n}'
    assert.equal(result, expect)

  })

})