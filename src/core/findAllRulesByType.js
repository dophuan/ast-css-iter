const findAllRulesByType = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object';
    if (!rulesRoot.findAllRulesByType && isObject) {
        rulesRoot.findAllRulesByType = function (type, callback) {
            const rules = this.stylesheet.rules;
            rules.forEach((rule, indexRule) => {
                if (rule.type === type) {
                    callback(rule, indexRule);
                }
            })
        }
    }
}

module.exports = findAllRulesByType