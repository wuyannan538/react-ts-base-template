module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended"
  ],
  rules: {
    indentation: 2,
    // 允许使用 `:local` 语法
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['local', 'global'] }],
  }
};
