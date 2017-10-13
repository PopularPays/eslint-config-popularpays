module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:ember/base'
  ],
  env: {
    'browser': true
  },
  globals: {
    "$": true,
    "server": true,
    "percySnapshot": true
  },
  rules: {

    //ember rules to remove:

    "ember/local-modules": 0,
    "ember/order-in-components": 0,
    "ember/order-in-controllers": 0,
    "ember/order-in-models": 0,
    "ember/order-in-routes": 0,
    "ember/use-ember-get-and-set": 0,

    // confirmed rules:

    "arrow-body-style": 0,
    "arrow-parens": 0,
    "comma-dangle": [2, "never"],
    "consistent-return": 0,
    "dot-notation": 0,
    "ember/alias-model-in-controller": 0,
    "ember/avoid-leaking-state-in-components": 0,
    "ember/named-functions-in-promises": 0,
    "ember/no-empty-attrs": 0,
    "ember/routes-segments-snake-case": 0,
    "ember/use-brace-expansion": 0,
    "func-names": 0,
    "global-require": 0,
    "id-length": 0,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "max-len": 0,
    "new-cap": 0,
    "no-alert": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-param-reassign": 0,
    "no-shadow": 0
    "no-throw-literal": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": ["error", { "args": "none" }],
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "operator-assignment": [0, "never"],
    "prefer-arrow-callback": 0,
    "prefer-const": 2,
    "prefer-rest-params": 0,
    "prefer-template": 0,
    "quote-props": 0,
    "quotes": 0,
    "sort-imports": 0,
    "space-before-function-paren": 0,
    "vars-on-top": 0
  }
};
