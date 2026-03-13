import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import depend from "eslint-plugin-depend";
import vitest from "@vitest/eslint-plugin";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      depend,
      vitest,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      "depend/flat/recommended",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  ...pluginQuery.configs["flat/recommended"],
  reactYouMightNotNeedAnEffect.configs.recommended,
]);
