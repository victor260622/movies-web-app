import { $fetch } from "ofetch";

export async function useRandomMovies() {
  return await $fetch("/api/random", { method: "GET" });
}

export async function useMovieById(imdbId: string) {
  return await $fetch(`/api/${imdbId}`);
}
