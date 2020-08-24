const findDeclarationsBySelector = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'

    if (!rulesRoot.findDeclarationsBySelector && isObject) {
        const rules = rulesRoot.stylesheet.rules

        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.findDeclarationsBySelector = function (selectors, callback) {
                    if ('' + rule.selectors === selectors) {
                        rule.declarations.forEach((declaration, index) => {
                            callback(declaration, index)
                        })
                    }
                }
                // rule.findDeclarationsBySelector = selectors => {
                //     return new Promise((resolve) => {
                //         if ('' + rule.selectors === selectors) {
                //             rule.declarations.forEach((declaration, declarationIndex) => {
                //                 resolve(declaration, declarationIndex)
                //             })
                //         }
                //     })
                // }
            }
        })
    }
}

module.exports = findDeclarationsBySelector