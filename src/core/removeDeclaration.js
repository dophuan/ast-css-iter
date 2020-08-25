const removeDeclaration = (astRoot) => {
    if (typeof astRoot === 'object') {
        const rules = astRoot.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.declarations.forEach(() => {
                    rule.removeDeclaration = function (index) {
                        rule.declarations.splice(index, 1)
                    }
                })
            }
        })
    }
}

module.exports = removeDeclaration