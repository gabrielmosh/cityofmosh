module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addShortcode("youtube", function(id) {
  return `
    <div class="video-responsive">
      <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>
    </div>`;
  });

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
