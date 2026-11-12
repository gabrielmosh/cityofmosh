module.exports = function (eleventyConfig) {
/*
  eleventyConfig.addFilter("fechaCorta", function(dateObj) {
    if (!dateObj) return "";

    const day = String(dateObj.getUTCDate()).padStart(2, '0');
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const year = String(dateObj.getUTCFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  });
*/
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/google43ae2b0da49549d7.html")

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

  eleventyConfig.addShortcode("instagram", function(username, label) {
    // Si no le pasás un texto personalizado (label), usa "@usuario" por defecto
    const text = label || `@${username}`;
    const cleanUsername = username.replace('@', ''); // Remueve el @ si por error lo pusiste en el parámetro

    return `<a href="https://instagram.com/${cleanUsername}" target="_blank" rel="noopener noreferrer" class="instagram-link">${text}</a>`;
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
