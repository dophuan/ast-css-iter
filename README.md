# :vietnam: Abstract Syntax Tree extractor

![Build status](https://github.com/dophuan/ast-css-iter/workflows/Abstract%20Syntax%20Tree%20for%20CSS%20CI/badge.svg)

## Methods

  ### Stylesheet level

    - getAllRules
    - backwardRulesTracer
    - addRule
    - addDeclaration
    - removeRule
    - getImports
    - getAllDeclarations
    - getAllDeclarationsBySelector
    - getAllDeclarationsByProperty
    - getAllDeclarationsByValue

  ### Rule level

    - findDeclarations
    - findDeclarationsBySelector
    - findDeclarationsByProperty
    - findDeclarationsByValue
    - getAllRulesBySelector
    - getAllRulesByType

  ### Declaration level

    - addDeclaration
    - removeDeclaration
    - getParam
    - getAllParams

## How to install 

```sh 
$ npm i @ando105/ast-css-iter --save-dev
```

## Example :cherry_blossom: :fire:

```js
const css = require('css')
const astIter = require('@ando105/ast-css-iter')
```

## Development

### Code Style

```
To be updated
```

*Validate the code style with [ESLint](http://eslint.org/):*
```sh
$ npm i eslint --save-dev
$ npm run eslint
```

### Tests

*Run the unit tests with [mocha](https://mochajs.org/):*
```sh
$ npm run test
```

## Release

See [Releases](https://github.com/dophuan/ast-css-iter/releases) to see my detailed changelog. 
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
