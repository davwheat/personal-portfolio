/* MIT License

Copyright (c) 2017 Chienyi Cheri Hung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */
module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: false }],
    'no-unused-expressions': 'off',
    strict: 'off',
    'new-cap': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-statements': ['error', 50],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 5],
    indent: ['error', 2, { SwitchCase: 1 }],
    'brace-style': ['error', '1tbs'],
    'spaced-line-comment': 'off',

    // possible errors
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'error',
    'init-declarations': 'off',
    'space-infix-ops': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 0,
    'no-console': ['error', { allow: ['error', 'warn', 'trace'] }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-empty-function': 'off',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-process-env': 'off',
    'no-regex-spaces': 'error',
    'no-reserved-keys': 'off',
    'no-self-assign': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'require-yield': 'error',
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-jsdoc': ['off'],
    'valid-typeof': 'error',

    // best practices
    'accessor-pairs': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    complexity: ['off'],
    'consistent-return': 'off',
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-labels': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'off',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-sync': 'off',
    'no-throw-literal': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-void': 'error',
    'no-warning-comments': ['error', { terms: ['fixme'], location: 'anywhere' }],
    'no-whitespace-before-property': 'error',
    'no-with': 'off',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',
    'no-await-in-loop': 'error',

    // variables
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-unused-vars': ['error', { args: 'after-used' }],

    // stylistic
    'array-bracket-spacing': ['error', 'never'],
    camelcase: ['error', { properties: 'always' }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': ['off', 'declaration'],
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-around-comment': 'off',
    'max-lines': ['error', { max: 500, skipBlankLines: false, skipComments: false }],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-ternary': 'off',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'object-property-newline': 'off',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-jsdoc': 'off',
    'rest-spread-spacing': ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'sort-vars': 'off',
    'sort-imports': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-'],
        },
        block: {
          balanced: true,
          markers: ['!'],
          exceptions: ['*'],
        },
      },
    ],
    'template-curly-spacing': ['error', 'never'],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', { before: false, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-this-before-super': 'error',
    'object-shorthand': ['error', 'properties'],
    'max-params': ['error', 5],
    'no-bitwise': 'error',
    'no-plusplus': 'off',

    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'prefer-reflect': 'off',
    'array-bracket-newline': 'off',
    'array-element-newline': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'for-direction': 'off',
    'func-call-spacing': 'off',
    'func-name-matching': 'off',
    'getter-return': 'off',
    'jsx-quotes': 'off',
    'line-comment-position': 'off',
    'no-buffer-constructor': 'off',
    'no-compare-neg-zero': 'off',
    'no-global-assign': 'off',
    'no-multi-assign': 'off',
    'no-restricted-properties': 'off',
    'no-return-await': 'off',
    'no-tabs': 'off',
    'no-template-curly-in-string': 'off',
    'no-unsafe-negation': 'off',
    'no-useless-return': 'off',
    'nonblock-statement-body-position': 'off',
    'padding-line-between-statements': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',
    'semi-style': 'off',
    'sort-keys': 'off',
    'switch-colon-spacing': 'off',
    'symbol-description': 'off',
  },
}
