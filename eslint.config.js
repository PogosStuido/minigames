import js from '@eslint/js';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default defineConfig([
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    linterOptions: {
      noInlineConfig: true,
    },
  },

  {
    files: ['**/*.{js,ts}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      'unicorn/recommended'],

    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },]);