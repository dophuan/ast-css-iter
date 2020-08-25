const getAllRules = require('./core/getAllRules')
const backwardRulesTracer = require('./core/backwardRulesTracer')
const getAllRulesByType = require('./core/getAllRulesByType')
const getAllRulesBySelector = require('./core/getAllRulesBySelector')
const addRule = require('./core/addRule')
const removeRule = require('./core/removeRule')
const getAllSelectors = require('./core/getAllSelectors')
const getImports = require('./core/getImports')
const getAllDeclarations = require('./core/getAllDeclarations')
const getAllDeclarationsBySelector = require('./core/getAllDeclarationsBySelector')
const getAllDeclarationsByProperty = require('./core/getAllDeclarationsByProperty')
const getAllDeclarationsByValue = require('./core/getAllDeclarationsByValue')


const findDeclarations = require('./core/findDeclarations')
const findDeclarationsBySelector = require('./core/findDeclarationsBySelector')
const findDeclarationsByProperty = require('./core/findDeclarationsByProperty')
const findDeclarationsByValue = require('./core/findDeclarationsByValue')


const addDeclarations = require('./core/addDeclaration')
const removeDeclarations = require('./core/removeDeclaration')
const getParam = require('./core/getParam')

const addIterations = (root) => {

  
  getAllRules(root)
  backwardRulesTracer(root)
  getAllRulesByType(root)
  getAllRulesBySelector(root)
  addRule(root)
  removeRule(root)
  getAllSelectors(root)
  getImports(root)
  getAllDeclarations(root)
  getAllDeclarationsBySelector(root)
  getAllDeclarationsByProperty(root)
  getAllDeclarationsByValue(root)

  
  findDeclarations(root)
  findDeclarationsBySelector(root)
  findDeclarationsByProperty(root)
  findDeclarationsByValue(root)

  
  addDeclarations(root)
  removeDeclarations(root)
  getParam(root)

}

module.exports = addIterations