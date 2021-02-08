// Per 11ty from scratch, we have to have a module.exports definition
module.exports = (eleventyConfig) => {
  // See if this helps with things that do not refresh
  module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
  };

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Pass front-end JS straight through from "src" to "dist"
  eleventyConfig.addPassthroughCopy("./src/static/js/");

  // Override the terrible slugifier that comes with 11ty
  const slugify = require("slugify");
  eleventyConfig.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true,
    };
    return slugify(input, options);
  });

  // Add a "section validator" function to template languages
  eleventyConfig.addFilter(
    "validateSection",
    require("./src/filters/validateSection.js")
  );

  // Add a "section style getter" function to template languages
  eleventyConfig.addFilter(
    "getSectionStyle",
    require("./src/filters/getSectionStyle.js")
  );

  // Add a "section-tag class text getter" function to template languages
  eleventyConfig.addFilter(
    "getSectionClassText",
    require("./src/filters/getSectionClassText.js")
  );

  // Add a "section-content-body-tag class text getter" function to template languages
  eleventyConfig.addFilter(
    "getSectionBodyClassText",
    require("./src/filters/getSectionBodyClassText.js")
  );

  // Add a "slug slash stripper" function to template languages
  eleventyConfig.addFilter(
    "removeSlashes",
    require("./src/filters/removeSlashes.js")
  );

  // Clarify which folder is for input and which folder is for output
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
