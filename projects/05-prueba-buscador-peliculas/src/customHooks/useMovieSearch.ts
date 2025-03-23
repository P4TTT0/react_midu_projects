import { useEffect, useState } from "react";
import { SearchParams } from "../types/searchParams";
import { Movie } from "../types/movie";
import { searchMovie } from "../services/searchMovieService";
import { MovieSearchResponse } from "../types/movieSearchResult";

const useMovieSearch = ({ searchText }: SearchParams) => {
  const [hasMovies, setHasMovies] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);
    searchMovie({ searchText }).then((response: MovieSearchResponse) => {
      if (response.Response === "True") {
        setMovies(response.Search);
        setHasMovies(true);
      } else {
        setMovies([]);
        setHasMovies(false);
      }
      setIsLoading(false);
    });
  }, [searchText]);

  return { hasMovies, movies, isLoading };
};

export default useMovieSearch;
