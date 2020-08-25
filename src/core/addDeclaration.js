const addDeclaration = (rulesRoot) => {
    if (typeof rulesRoot === 'object') {
        const rules = rulesRoot.stylesheet.rules;
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.declarations.forEach(() => {
                    rule.addDeclaration = function (property, value, index) {
                        rule.declarations.splice(index, 0, {
                            type: 'declaration',
                            property: property,
                            value: value
                        });
                    };
                });
            }
        });
    }
};
module.exports = addDeclaration;