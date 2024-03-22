module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'no-console': [
      'warn',
      {
        allow: ['warn'],
      },
    ],
    'react/no-array-index-key': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: ['src'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      jsconfig: {
        config: 'jsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-camel-case'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react-camel-case/react-camel-case': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/prop-types': 'off',
        'no-tabs': [
          'error',
          {
            allowIndentationTabs: true,
          },
        ],
        camelcase: [
          'error',
          {
            ignoreDestructuring: false,
          },
        ],
        'react/require-default-props': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
