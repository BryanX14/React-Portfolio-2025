// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore build + deps
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // React recommended (flat)
  react.configs.flat.recommended,

  // Project-wide settings / overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser, // for src
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ new JSX transform
      "react/prop-types": "off",         // optional: remove if you use PropTypes
    },
  },

  // Node environment for config scripts (vite.config.*, etc.)
  {
    files: ["**/*.config.{js,cjs,mjs,ts}", "vite.config.*"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);
