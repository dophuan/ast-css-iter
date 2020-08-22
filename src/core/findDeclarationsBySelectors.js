const findDeclarationsBySelectors = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'

    if (!rulesRoot.findDeclarationsBySelectors && isObject) {
        const rules = rulesRoot.stylesheet.rules

        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.findDeclarationsBySelectors = function (selectors, callback) {
                    if ('' + rule.selectors === selectors) {
                        rule.declarations.forEach((declaration, index) => {
                            callback(declaration, index)
                        })
                    }
                }
                // rule.findDeclarationsBySelectors = selectors => {
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

module.exports = findDeclarationsBySelectors