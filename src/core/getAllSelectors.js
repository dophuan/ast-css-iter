const getAllSelectors = (rulesRoot) => {

    const rules = rulesRoot.stylesheet.rules

    if (!rulesRoot.getAllSelectors && typeof rulesRoot === 'object') {
        rulesRoot.getAllSelectors = function (callback) {
            rules.forEach((rule, indexSelectors) => {
                if (rule.type === 'rule') {
                    callback(rule.selectors, indexSelectors)
                }
            })
        }
    }
}

module.exports = getAllSelectors