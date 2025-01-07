import eslint from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import compat from "eslint-plugin-compat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettier from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "@vitest/eslint-plugin";

// TODO: add eslint-config-airbnb-base when it will support new flat config for eslint@9.0.0
// https://github.com/airbnb/javascript/issues/2961
export default tseslint.config(
  { ignores: ["dist", "coverage"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      compat.configs["flat/recommended"],
      importPlugin.flatConfigs.recommended,
      eslintPrettier,
    ],
    settings: {
      react: { version: "19.0.0" },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/resolver": {
        typescript: {},
        node: {},
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...jsxA11y.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": 2,
      "@typescript-eslint/no-deprecated": 1,
      "import/extensions": [
        2,
        "always",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import/first": 2,
      "import/newline-after-import": 2,
      "import/default": 2,
      "import/no-deprecated": 1,
      "import/consistent-type-specifier-style": [2, "prefer-top-level"],
      "no-console": 2,
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    extends: [testingLibrary.configs["flat/react"]],
    plugins: { vitest },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
);
