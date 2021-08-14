/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "import/extensions": "off",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: "./tsconfig.json",
      },
    },
  },
};
