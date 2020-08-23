const findAllRules = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'
    const rules = rulesRoot.stylesheet.rules
    if (!rulesRoot.findAllRules && isObject) {
        rulesRoot.findAllRules = (callback) => {
            rules.forEach((rule, indexRule) => {
                return callback(rule, indexRule)
            })
        }
    }
}

module.exports = findAllRules