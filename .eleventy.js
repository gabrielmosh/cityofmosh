module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/flyers");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("date", function (value, format = "dd 'de' MMMM 'de' yyyy") {
    return new Date(value).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  });

  return {
    emptyOutputPath: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};
