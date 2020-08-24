const getAllRules = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'
    const rules = rulesRoot.stylesheet.rules
    if (!rulesRoot.getAllRules && isObject) {
        rulesRoot.getAllRules = (callback) => {
            rules.forEach((rule, indexRule) => {
                return callback(rule, indexRule)
            })
        }
    }
}

module.exports = getAllRules