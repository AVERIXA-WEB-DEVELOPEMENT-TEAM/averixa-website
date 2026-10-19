import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Destructuring a prop out to keep it off the DOM is intentional
      'no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
      'react-refresh/only-export-components': ['error', { allowConstantExport: true, allowExportNames: ['getContactErrors'] }],
    },
  },
  {
    // Vercel serverless functions run on Node
    files: ['api/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
