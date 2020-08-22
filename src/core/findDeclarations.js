const findDeclarationsByValue = require("./findDeclarationsByValue");

const findDeclarations = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'

    if (!rulesRoot.findDeclarations && isObject) {
        const rules = rulesRoot.stylesheet.rules;

        rules.forEach((rule) => {
            if (rule.type === 'rule') {
              rule.findDeclarations = function (callback) {
                rule.declarations.forEach((declaration, index) => {
                  callback(declaration, index);
                });
              };
            }
        });      
    }
}

module.exports = findDeclarations