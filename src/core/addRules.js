const addRule = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object'

    if (isObject) {
        rulesRoot.addRule = function (newRule, index) {
            const rules = rulesRoot.stylesheet.rules;
            rules.splice(index, 0, newRule);
        };
    }
};

module.exports = addRule;