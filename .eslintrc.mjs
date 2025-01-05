export default {
root: true,
env: {
    browser: true,
    es2021: true,
    node: true,
},
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'prettier'
],
parser: '@typescript-eslint/parser',
parserOptions: {
    ecmaFeatures: {
    jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
},
plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
],
settings: {
    react: {
    version: 'detect',
    },
},
rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
},
};

