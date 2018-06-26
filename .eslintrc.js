const path = require('path')

module.exports = {
  globals: {
    module: true,
    it: true,
    expect: true,
    beforeAll: true,
    afterAll: true,
    beforeEach: true,
    afterEach: true
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    "prettier/flowtype"

  ],
  plugins: ['react', 'prettier', 'import', 'flowtype'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')]
      }
    }
  },
  rules: {
    'no-console': 1,
    'no-dupe-keys': 1,
    'object-shorthand': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'no-use-before-define': 2,
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    'import/newline-after-import': 1,
    'import/no-anonymous-default-export': 1,
    'react/no-unused-state': 1,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 1,
    'react/boolean-prop-naming': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/style-prop-object': 1,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        semi: false
      }
    ]
  }
}
