// const findDeclarationsByValue = (rulesRoot) => {
//     const isObject = typeof rulesRoot === 'object'

//     if (!rulesRoot.findDeclarationsByValue && isObject) {
//         const rules = rulesRoot.stylesheet.rules

//         rules.forEach((rule) => {
//             if (rule.type === 'rule') {
//                 const getDeclarationFn = value => {
//                     return new Promise((resolve) => {
//                         rule.declarations.forEach((declaration, index) => {
//                             if (declaration.value === value) {
//                                 resolve(declaration, index)
//                             }
//                         })
//                     })
//                 }
//                 rule.findDeclarationsByValue = getDeclarationFn().then()
//             }
//         })
//     }
// }

// module.exports = findDeclarationsByValue

const findDeclarationsByValue = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'
    
    if (!rulesRoot.findDeclarationsByValue && isObject) {
        const rules = rulesRoot.stylesheet.rules
        rules.forEach((rule) => {
            if (rule.type === 'rule') {
                rule.findDeclarationsByValue = function (value, callback) {
                    rule.declarations.forEach((declaration, declarationIndex) => {
                        if (declaration.value === value) {
                            callback(declaration, declarationIndex)
                        }
                    })
                }
            }
        })
    }
}
module.exports = findDeclarationsByValue