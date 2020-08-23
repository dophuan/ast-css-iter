const removeRule = (rulesRoot) => {
    if (typeof rulesRoot === 'object') {
        rulesRoot.removeRule = function (index) {
            const rules = rulesRoot.stylesheet.rules
            rules.splice(index, 1)
        }
    }

}

module.exports = removeRule