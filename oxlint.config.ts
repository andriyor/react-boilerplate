import base from "@andriyor/oxlint-config";
import react from "@andriyor/oxlint-config/react";
import vitest from "@andriyor/oxlint-config/vitest";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base, react, vitest],
  // Everything below is here only because `extends` does not carry it over.
  //
  // Not a TODO: omitting `plugins` adds oxlint's default plugins on top of the
  // fragments' own, so `[]` is how you inherit exactly what was extended.
  plugins: [],
  // TODO: neither `env` nor `ignorePatterns` is inherited through `extends`.
  // Once they are, both lines can go and `base` supplies them.
  // Watch https://github.com/oxc-project/oxc/issues/20087 (env)
  // and https://github.com/oxc-project/oxc/issues/16079 (ignorePatterns)
  env: { builtin: true, browser: true, es2020: true },
  ignorePatterns: ["dist"],
});
