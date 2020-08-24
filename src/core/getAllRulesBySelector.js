const getAllRulesBySelector = (rulesRoot) => {

    const isObject = typeof rulesRoot === 'object'
    const rules = rulesRoot.stylesheet.rules

    if (!rulesRoot.getAllRulesBySelector && isObject) {
        rulesRoot.getAllRulesBySelector = function (selectors, callback) {
            rules.forEach((rule, rulesIndex) => {
                if ('' + rule.selectors === selectors) {
                    callback(rule, rulesIndex)
                }
            })
        }
    }
}

module.exports = getAllRulesBySelector