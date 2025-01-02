import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
{
    ignores: ['node_modules/**', 'dist/**', 'build/**']
},
eslint.configs.recommended,
prettierConfig,
{
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
    '@typescript-eslint': tseslint,
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
    'import': importPlugin
    },
    languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: tsparser,
    parserOptions: {
        ecmaFeatures: {
        jsx: true
        }
    },
    globals: {
    ...Object.fromEntries(
        Object.entries({
        ...globals.browser,
        ...globals.es2020
        }).map(([key, value]) => [key.trim(), value])
    )
    }
    },
    settings: {
    react: {
        version: 'detect'
    },
    'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
    }
    },
    rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'import/no-unresolved': 'error',
    'jsx-a11y/anchor-is-valid': 'warn',
    ...tseslint.configs.recommended.rules,
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...jsxA11yPlugin.configs.recommended.rules,
    ...importPlugin.configs.recommended.rules
    }
}
];
