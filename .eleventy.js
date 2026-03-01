module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("CNAME");

eleventyConfig.addShortcode("yt_short", function(id) {
  return `
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/${id}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>`;
});

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
