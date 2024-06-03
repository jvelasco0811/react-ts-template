import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import resolve from "eslint-import-resolver-typescript";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    settings: {
      "import/resolver": {
        typescript: resolve()
      },
    },
  },
  {
    extends: ["plugin:prettier/recommended"],
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReactConfig,
  prettier,
  pluginPrettier,
];
