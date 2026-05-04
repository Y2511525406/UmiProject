module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: ["./packages/config/eslint.base.cjs"],
  ignorePatterns: ["**/dist/**", "**/.umi/**", "**/.umi-production/**"]
};
