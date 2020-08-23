const findDeclarationsByValue = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'
    if (!rulesRoot.findDeclarationsByValue && isObject) {
        const rules = rulesRoot.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.findDeclarationsByValue = function (value, callback) {
                    rule.declarations.forEach((declaration, declarationIndex) => {
                        if (declaration.value === value) {
                            callback(declaration, declarationIndex)
                        }
                    })
                }
            }
        })
    }
}
module.exports = findDeclarationsByValue