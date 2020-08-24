const getParam = (root) => {
    if (typeof root === 'object') {
        const rules = root.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.declarations.forEach((declaration) => {
                    declaration.getParam = function (paramPosition) {
                        const declarationValues = declaration.value.split(' ')  
                        return declarationValues[paramPosition] ? declarationValues[paramPosition] : declarationValues[0]
                    }
                })
            }
        })
    }
}

module.exports = getParam