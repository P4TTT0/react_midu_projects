import React from "react"
import { Movie } from "../types/movie"

interface MovieListParams{
    Movies : Movie[]
}

const MovieList: React.FC<MovieListParams> = ({ Movies }) => 
{
    const hasMovies = Movies !== null && Movies.length > 0;

    return(
        <ul>
            { 
                hasMovies ? 
                (
                    Movies!.map(movie => (
                        <li key={movie.imdbID}>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            <img src={movie.Poster} alt={movie.Title} />
                        </li>
                    ))
                ) : 
                (
                    <p>Sin resultados </p>
                )
            }
        </ul>
    )
}

export default MovieList;