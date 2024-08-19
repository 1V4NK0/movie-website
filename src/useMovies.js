
import { useState, useEffect } from "react";
const api = "17fc7b43";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controller = new AbortController();

  function debounce(callbackFunc, delay = 1000) {
    return (...args) => {
      setTimeout(() => {
        callbackFunc(...args);
      }, delay);
    };
  }

  const fetchMoviesDebounced = debounce(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${api}&s=${query}`,
        { signal: controller.signal }
      );

      if (!res.ok) throw new Error("Something went wrong :(");

      const data = await res.json();

      if (data.Response === "False") throw new Error("Movie not found");

      setMovies(data.Search);
      setError("");
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, 1000);

  useEffect(() => {
    if (query === "" || query.length < 3) {
      setMovies([]);
      return;
    }
    // handleCloseMovie();
    fetchMoviesDebounced();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, loading, error };
}
