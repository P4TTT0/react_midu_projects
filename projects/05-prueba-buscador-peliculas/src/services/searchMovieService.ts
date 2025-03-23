import { MovieSearchResponse } from "../types/movieSearchResult";
import { SearchParams } from "../types/searchParams";

const SEARCH_API_ENDPOINT = 'http://www.omdbapi.com/?apikey=b9e1684a&s=';

export const searchMovie = async ({ searchText }: SearchParams): Promise<MovieSearchResponse> => {
    const fullApiEndpoint = `${SEARCH_API_ENDPOINT}${encodeURIComponent(searchText)}`;
    const response = await fetch(fullApiEndpoint);
    const data: MovieSearchResponse = await response.json();
    return data;
};