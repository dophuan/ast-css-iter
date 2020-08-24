
const assert = require('assert');
const css = require('css');
const getAllRulesByType = require('../src/core/getAllRulesByType');
const findDeclarationsByValue = require('../src/core/findDeclarationsByValue');

describe('findDeclarationsByValue()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations' +
    ' in "Rule level" (filtered by value)', () => {

    const ast = css.parse(`
      @import module.css;
      .a {
        width: 10px;
        height: 100%;
      }
      /* comment */
      .b {
        color: #000;
        height: 10px;
      }
    `);

    getAllRulesByType(ast);
    findDeclarationsByValue(ast);

    const result = [];

    ast.getAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByValue('10px', (declaration, declarationIndex) => {
        result.push([declarationIndex, declaration.property, declaration.value]);
      });

    });

    const expect = [[0, 'width', '10px'],[1, 'height', '10px']].toString();

    assert.equal(result, expect);

  });

});