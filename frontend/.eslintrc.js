module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/state-in-constructor': [0, "never"],
    'react/static-property-placement': [0, "never"],
    'react/jsx-props-no-spreading': [0, "never"],
    'react/jsx-filename-extension':[
      'warn',
      {
        extensions:['.jsx','.js']
      }
    ],
    'consistent-return':'off',
    'import/prefer-default-export':'off',
    'no-param-reassign':'off',
    'no-console': ["error", { allow:["tron"] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  // settings: {
  //   "import/resolver": {
  //     "babel-plugin-root-import": {
  //       rootPathSuffix: 'src'
  //     },
  //   }
  // }
};
