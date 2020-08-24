const getAllDeclarationsBySelectors = (root) => {
    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules
    
    if (!root.getAllDeclarationsBySelectors && isObject) {
        root.getAllDeclarationsBySelectors = function (selectors, callback) {
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

module.exports = getAllDeclarationsBySelectors