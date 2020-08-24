const assert = require('assert');
const css = require('css');
const getAllRulesByType = require('../src/core/getAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');

describe('findDeclarationsByProperty()', () => {
  it('Return iterations in a list of declarations ' +
    '(filtered by property)', () => {

      const ast = css.parse(`
      #div {
        width: 10px;
        height: 50%;
      }
      /* comment */
      .b {
        color: #000;
      }
    `);
      getAllRulesByType(ast);
      findDeclarationsByProperty(ast);
      const result = [];

      ast.getAllRulesByType('rule', (rule) => {
        rule.findDeclarationsByProperty('height', (declaration, declarationIndex) => {
          result.push([declarationIndex, declaration.property, declaration.value]);
        });

      });

      const expect = [1, 'height', '50%'].toString();

      assert.equal(result, expect);
    });
});