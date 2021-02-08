/* Credit to Adam K Dean, https://dev.to/adamkdean/simple-scss-with-11ty-kmn */
const path = require("path");
const fs = require("fs");
const sass = require("sass");
const CleanCSS = require("clean-css");

const inputFile = path.join(__dirname, "../_includes/scss/main.scss");
//const variablesFilePath = path.join(__dirname, "../_includes/scss/abstracts/_variables2.scss");
const outputPermalink = "css/style.css";

const comment = `/* This is an example comment */`;

module.exports = class {
  data() {
    return {
      permalink: outputPermalink,
      eleventyExcludeFromCollections: true,
    };
  }

  async render({sass_variables}) {
    /*fs.writeFileSync(variablesFilePath, sass_variables, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log("Variables file saved!");
    });*/
    const { css } = sass.renderSync({ file: inputFile });
    const output = new CleanCSS({}).minify(css.toString()).styles;

    return `${comment}\n\n${output}`;
  }
};
