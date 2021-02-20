const lint = "eslint";
const stylelint = "stylelint";
const formatStyle = "stylelint --fix";
const format = "prettier --write";

module.exports = {
  "src/**/*.[t|j]s?(x)": [format, lint],
  "src/**/*.[s]css": [formatStyle, stylelint]
};
