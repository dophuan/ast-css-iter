const getImports = (root) => {

    const isObject = typeof root === 'object'
    const rules = root.stylesheet.rules

    if (!root.getImports && isObject) {

        root.getImports = function (callback) {
            rules.forEach((rule) => {
                if (rule.type === 'import') {
                    callback(rule.import)
                }
            })
        }
    }
}

module.exports = getImports