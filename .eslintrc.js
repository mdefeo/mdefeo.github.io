module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },

  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['import', 'react'],
  rules: {
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
      },
    ],
    'no-unused-vars': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    eqeqeq: 'error',
    'no-case-declarations': 'off',
    indent: 'off',
    semi: 'error',
    curly: 'error',
    'brace-style': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-array-constructor': 'off',
      },
    },
  ],
};
