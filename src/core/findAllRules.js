const findAllRules = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'
    const rules = rulesRoot.stylesheet.rules

    if (!rulesRoot.findAllRules && isObject) {

        rulesRoot.findAllRules = () => {
            return new Promise((resolve) => {
                rules.forEach(function (rule, index) {
                    return resolve(rule, index)
                })
            })
        }
    }
}

module.exports = findAllRules