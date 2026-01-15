// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = defineConfig([
    expoConfig,
    {
        ignores: ["dist/*"],
        plugins: {
            "jsx-a11y": jsxA11y,
        },
        rules: {
            "no-console": "error",
            "no-debugger": "error",
            "no-var": "error",
            "prefer-const": "error",
            "eqeqeq": ["error", "always"],
            "no-empty-function": "error",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/anchor-is-valid": "error",
            "import/order": ["error", { "groups": [["builtin", "external", "internal"]], "newlines-between": "always" }],
            "import/no-unresolved": "error",
            "import/no-duplicates": "error",
            "semi": ["error", "always"],
            "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
            "indent": ["error", 4],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "arrow-parens": ["error", "always"],
        },
    },
]);
