const findDeclarationsByProperty = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'

    if (!rulesRoot.findDeclarationsByProperty && isObject) {
        const rules = rulesRoot.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.findDeclarationsByProperty = function (property, callback) {
                    rule.declarations.forEach((declaration, index) => {
                        if (declaration.property === property) {
                            callback(declaration, index);
                        }
                    })
                }
            }
        })
    }
}

module.exports = findDeclarationsByProperty