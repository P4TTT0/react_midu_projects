import { Movie } from "./movie";

interface MovieSearchSuccess {
    Search: Movie[];
    totalResults: string;
    Response: "True";
}
  
interface MovieSearchError {
    Response: "False";
    Error: string;
}
  
export type MovieSearchResponse = MovieSearchSuccess | MovieSearchError;