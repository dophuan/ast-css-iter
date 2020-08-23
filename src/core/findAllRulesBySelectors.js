const findAllRulesBySelectors = (rulesRoot) => {

    const isObject = typeof rulesRoot === 'object'
    const rules = rulesRoot.stylesheet.rules

    if (!rulesRoot.findAllRulesBySelectors && isObject) {
        rulesRoot.findAllRulesBySelectors = function (selectors, callback) {
            rules.forEach((rule, rulesIndex) => {
                if ('' + rule.selectors === selectors) {
                    callback(rule, rulesIndex)
                }
            })
        }
    }
}

module.exports = findAllRulesBySelectors