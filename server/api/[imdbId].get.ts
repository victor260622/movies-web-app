import { getRouterParam } from "h3";

export default defineEventHandler(async (event) => {
  const imdbId = getRouterParam(event, "imdbId");
  const config = useRuntimeConfig();

  if (!imdbId) return { error: "No se recibió un imdbId válido" };

  try {
    const res = await $fetch(
      `http://www.omdbapi.com/?i=${imdbId}&apikey=${config.OMDB_API_KEY}`,
    );
    return res;
  } catch {
    return { error: "No se pudo obtener detalles de la película" };
  }
});
