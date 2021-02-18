const lint = "eslint";
const format = "prettier --write";

module.exports = {
  "src/**/*.[t|j]s?(x)": [format, lint]
};
