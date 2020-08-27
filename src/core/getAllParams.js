const getAllParams = (root) => {
    if (typeof root === 'object') {
        const rules = root.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.declarations.forEach((declaration) => {
                    declaration.getAllParams = function (paramPosition) {
                        const declarationValues = declaration.value.split(' ')  
                        return declarationValues
                    }
                })
            }
        })
    }
}

module.exports = getAllParams