const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');

describe('findDeclarationsByProperty()', () => {
    it('Return iterations in a list of declarations ' +
        '(filtered by property)', () => {

            const ast = css.parse(`
      @import module.css;
      .a {
        width: 10px;
        height: 50%;
      }
      /* comment */
      .b {
        color: #000;
      }
    `);
            findAllRulesByType(ast);
            findDeclarationsByProperty(ast);
            const result = [];

            ast.findAllRulesByType('rule', (rule) => {
                rule.findDeclarationsByProperty('height', (declaration, declarationIndex) => {
                    result.push([declarationIndex, declaration.property, declaration.value]);
                });

            });

            const expect = [1, 'height', '50%'].toString();

            assert.equal(result, expect);
        });
});