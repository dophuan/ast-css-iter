const backwardRulesTracer = (rulesRoot) => {
    const isObject = typeof rulesRoot === 'object';

    if (!rulesRoot.backwardRulesTracer && isObject) {
        rulesRoot.backwardRulesTracer = function (callback) {
            const rules = this.stylesheet.rules;

            for (let i = rules.length - 1; i >=0; i--) {
                callback(rules[i], i);
            }
        };
    }
};

module.exports = backwardRulesTracer;