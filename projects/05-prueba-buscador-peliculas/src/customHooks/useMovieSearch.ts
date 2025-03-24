import { useEffect, useMemo, useState } from "react";
import { SearchParams } from "../types/searchParams";
import { Movie } from "../types/movie";
import { searchMovie } from "../services/searchMovieService";
import { MovieSearchResponse } from "../types/movieSearchResult";

interface UseMovieParams{
  searchText : string,
  sort: boolean;
}

const useMovieSearch = ({ searchText, sort }: UseMovieParams) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);
    searchMovie({ searchText }).then((response: MovieSearchResponse) => {
      if (response.Response === "True") {
        setMovies(response.Search);
      } else {
        setMovies([]);
      }
      setIsLoading(false);
    });
  }, [searchText]);

  //Memoizamos los resultados para filtrar SOLO si cambia alguna de las dependencias (sort, movies)
  const sortedMovies: Movie[] = useMemo(() => {
    return sort ? 
    [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
    : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, isLoading };
};

export default useMovieSearch;
