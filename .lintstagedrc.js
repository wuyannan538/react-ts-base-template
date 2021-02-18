const lint = "eslint";
const format = "prettier --write";
const gitAdd = "git add";

module.exports = {
  "src/**/*.[t|j]s?(x)": [format, lint, gitAdd]
};
