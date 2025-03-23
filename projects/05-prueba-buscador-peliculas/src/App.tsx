import React, { useState } from "react";
import "./App.css";
import useMovieSearch from "./customHooks/useMovieSearch";
import MovieList from "./components/MovieList";

export function App()
{
    const [searchText, setSearchText] = useState("");
    const { movies, isLoading } = useMovieSearch({ searchText });

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
                    <MovieList Movies={movies} />
                </main>
            </div>
        </>
    )
}