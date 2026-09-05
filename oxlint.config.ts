import base from "@andriyor/oxlint-config";
import react from "@andriyor/oxlint-config/react";
import vitest from "@andriyor/oxlint-config/vitest";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [base, react, vitest],
  // inherit exactly the fragments' plugins instead of adding oxlint's defaults
  plugins: [],
  // neither `env` nor `ignorePatterns` is inherited through `extends`
  env: { builtin: true, browser: true, es2020: true },
  ignorePatterns: ["dist"],
});
