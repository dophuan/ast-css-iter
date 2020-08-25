const getAllDeclarationsBySelector = (root) => {
    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules
    
    if (!root.getAllDeclarationsBySelector && isObject) {
        root.getAllDeclarationsBySelector = function (selectors, callback) {
            rules.forEach((rule) => {
                if (rule.type === 'rule' & '' + rule.selectors === selectors) {
                    rule.declarations.forEach((declaration) => {
                        callback(declaration)
                    })
                }
            })
        }
    }
}

module.exports = getAllDeclarationsBySelector