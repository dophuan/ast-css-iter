const getAllDeclarationsByProperty = (root) => {

    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules

    if (!root.getAllDeclarationsByProperty && isObject) {
        root.getAllDeclarationsByProperty = function (property, callback) {
            rules.forEach((rule) => {
                if (rule.type === 'rule') {
                    rule.declarations.forEach((declaration) => {
                        if (declaration.property === property) {
                            callback(declaration)
                        }
                    })
                }
            })
        }
    }
}

module.exports = getAllDeclarationsByProperty