module.exports = function (eleventyConfig) {

  // Copiar assets tal cual
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/flyers");

  // ✅ AGREGAMOS EL FILTRO DATE (esto es lo que te falta)
  eleventyConfig.addFilter("date", function (value, format = "dd 'de' MMMM 'de' yyyy") {
    return new Date(value).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",   // 👈 OJO: tu salida es "public", no "_site"
      includes: "_includes"
    }
  };
};
