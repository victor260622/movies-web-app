import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

const vueRecommended = vue.configs["vue3-recommended"] ?? { rules: {} };
export default [
  { ignores: ["node_modules", ".nuxt", "dist"] },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: { vue, "@typescript-eslint": ts, import: importPlugin, prettier },
    rules: {
      "prettier/prettier": "warn",
      ...vueRecommended.rules,
      ...ts.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["**/*.{ts,js}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: { "@typescript-eslint": ts, import: importPlugin, prettier },
    rules: {
      "prettier/prettier": "warn",
      ...ts.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "import/no-unresolved": "off",
    },
  },
];
