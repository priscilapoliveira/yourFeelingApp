module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:react-hooks/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: ["react", "prettier"],

  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".js"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "global-require": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
  },
};
