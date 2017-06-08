// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
        'jsx': true
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow unary operators for loops
    'no-plusplus': ['warn', { "allowForLoopAfterthoughts": true }],
    // increase max line length
    'max-len': ['error', {
      'code': 120,
      'ignoreTrailingComments': true,
      'ignoreUrls': true
    }],
    // allow surround by quotes on object properties
    'quote-props': 'off',
    // allow mixed binary operators
    'no-mixed-operators': 'off',
    // arrow functions style
    'arrow-body-style': ['warn', 'as-needed'],
    // quotes config
    'quotes': ['warn', 'single', {
      'avoidEscape': true, 'allowTemplateLiterals': true
    }],
    // trailing spaces as warning instead of error
    'no-trailing-spaces': 'warn',
    // allow different arrow body styles
    'arrow-body-style': 'off',
    // allow argument not used, warn about variables not used
    'no-unused-vars': ['warn', {'args': 'none'}],

    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',

    'linebreak-style': 'off',

  }
}
