export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const keywords = [
    "star",
    "love",
    "dark",
    "man",
    "woman",
    "night",
    "day",
    "life",
    "death",
    "world",
  ];
  const randomKeywords = keywords.sort(() => 0.5 - Math.random()).slice(0, 3);

  try {
    const promises = randomKeywords.map((word) =>
      $fetch(
        `${config.public.OMDB_API_URL}/?s=${word}&type=movie&page=1&apikey=${config.OMDB_API_KEY}`,
      ),
    );

    const results = await Promise.all(promises);
    const movies = results.flatMap((r: any) => r.Search || []);
    const shuffled = movies.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 10).map((m: any) => ({
      url: m.Poster,
      alt: m.Title,
      imdbID: m.imdbID,
      year: m.Year,
      title: m.Title,
      description: `Movie from ${m.Year}`,
    }));
  } catch (error) {
    return { error: "No se pudo obtener películas" };
  }
});
