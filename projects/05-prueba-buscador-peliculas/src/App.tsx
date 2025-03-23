import React, { useState } from "react";
import "./App.css";
import { Movie } from "./types/movie";
import useMovieSearch from "./customHooks/useMovieSearch";

export function App()
{
    const [searchText, setSearchText] = useState("");
    const { movies, hasMovies, isLoading } = useMovieSearch({ searchText });

    return(
        <>
            <div className="page">
                <header>
                    <form className="form">
                        <input
                            type="text"
                            placeholder="Harry Potter, Star Wars, Toy Story..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                </header>

                <main>
                    {
                        hasMovies ?
                        (
                            movies!.map(movie => (
                                <li key={movie.imdbID}>
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                    <img src={movie.Poster} alt={movie.Title} />
                                </li>
                            ))
                        )
                        : (
                            <p>Sin resultados :(</p>
                        )
                    }
                </main>
            </div>
        </>
    )
}