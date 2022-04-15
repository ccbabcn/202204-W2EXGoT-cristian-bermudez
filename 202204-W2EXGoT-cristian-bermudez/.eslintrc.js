module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: [],
  rules: {
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
  },
};
