import { defineConfig } from "oxlint";
import pluginQuery from "@tanstack/eslint-plugin-query";
import e18e from "@e18e/eslint-plugin";
import youMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

type Rules = Record<string, unknown>;
type ShareableConfig = { rules?: Rules } | { rules?: Rules }[];

/** ESLint shareable configs are either one config object or an array of them. */
const preset = (config: ShareableConfig | undefined): Rules =>
  Object.assign({}, ...[config ?? []].flat().map((c) => c.rules ?? {}));

// TODO: oxlint is adding opt-in `recommended` presets (exported config objects
// importable from "oxlint"). Once shipped, most of the hand-listed rules below
// can be replaced by extending those presets.
// Watch https://github.com/oxc-project/oxc/issues/20758
//
// TODO: oxlint only lints JS/TS today. Once JSON and YAML files are supported,
// they can be linted here too instead of needing a separate tool.
// Watch https://github.com/oxc-project/oxc/issues/18656
export default defineConfig({
  plugins: ["typescript", "react", "import", "vitest", "oxc"],
  jsPlugins: [
    "@tanstack/eslint-plugin-query",
    "@e18e/eslint-plugin",
    "eslint-plugin-react-you-might-not-need-an-effect",
  ],
  // Enables oxlint's whole `correctness` category; the rules below are the ones
  // ESLint's recommended presets enabled that oxlint files under other categories.
  categories: { correctness: "error" },
  env: { builtin: true, browser: true, es2020: true },
  ignorePatterns: ["dist"],
  rules: {
    // pedantic
    "no-array-constructor": "error",
    "no-case-declarations": "error",
    "no-fallthrough": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "typescript/ban-ts-comment": "error",
    "typescript/no-unsafe-function-type": "error",
    "react/rules-of-hooks": "error",

    // restriction
    "no-empty": "error",
    "no-regex-spaces": "error",
    "typescript/no-empty-object-type": "error",
    "typescript/no-explicit-any": "error",
    "typescript/no-namespace": "error",
    "typescript/no-require-imports": "error",
    "react/only-export-components": ["error", { allowConstantExport: true }],
    "react/unsupported-syntax": "warn",
    "import/no-relative-parent-imports": "error",
    "oxc/no-barrel-file": "error",

    // suspicious
    "no-unexpected-multiline": "error",
    "preserve-caught-error": "error",
    "typescript/no-unnecessary-type-constraint": "error",

    // correctness rules kept at warn rather than error
    "react/exhaustive-deps": "warn",
    "react/incompatible-library": "warn",

    // plugin presets, read straight from each plugin
    ...preset(e18e.configs.recommended),
    ...preset(pluginQuery.configs["flat/recommended"]),
    ...preset(youMightNotNeedAnEffect.configs.recommended),
  },
  overrides: [
    {
      files: ["**/*.{spec,test}.{ts,tsx}"],
      // vitest `recommended` minus the rules oxlint already covers via `correctness`
      rules: {
        "vitest/no-commented-out-tests": "error",
        "vitest/no-disabled-tests": "warn",
        "vitest/no-identical-title": "error",
        "vitest/no-import-node-test": "error",
        "vitest/no-interpolation-in-snapshots": "error",
        "vitest/no-mocks-import": "error",
        "vitest/no-unneeded-async-expect-function": "error",
        "vitest/prefer-called-exactly-once-with": "error",
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "max-lines-per-function": [
          "warn",
          { max: 150, skipBlankLines: true, skipComments: true, IIFEs: true },
        ],
      },
    },
  ],
});
