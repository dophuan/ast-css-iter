const getAllRulesByType = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object';
    if (!rulesRoot.getAllRulesByType && isObject) {
        rulesRoot.getAllRulesByType = function (type, callback) {
            const rules = this.stylesheet.rules;
            rules.forEach((rule, indexRule) => {
                if (rule.type === type) {
                    callback(rule, indexRule);
                }
            })
        }
    }
}

module.exports = getAllRulesByType