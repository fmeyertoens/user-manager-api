module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        quotes: ["error", "single"],
        "arrow-parens": ["error", "as-needed"],
        "no-console": "off",
    },
};
