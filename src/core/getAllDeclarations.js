const getAllDeclarations = (root) => {
    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules
    if (!root.getAllDeclarations && isObject) {
        root.getAllDeclarations = function (callback) {
            rules.forEach((rule) => {
                if (rule.type === 'rule') {
                    rule.declarations.forEach((declaration, declarationIndex) => {
                        callback(declaration, declarationIndex)
                    })
                }
            })
        }
    }
}

module.exports = getAllDeclarations