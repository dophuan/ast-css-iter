const getAllDeclarationsByValue = (root) => {
    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules
    if (!root.getAllDeclarationsByValue && isObject) {
        root.getAllDeclarationsByValue = function (value, callback) {
            rules.forEach((rule) => {
                if (rule.type === 'rule') {
                    rule.declarations.forEach((declaration) => {
                        if (declaration.value === value) {
                            callback(declaration)
                        }
                    })
                }
            })
        }
    }
}

module.exports = getAllDeclarationsByValue