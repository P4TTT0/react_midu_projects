import React, { useState } from "react";
import "./App.css";

interface SearchParams{
    searchText : string
}

export function App()
{
    const SEARCH_API_ENDPOINT = 'http://www.omdbapi.com/?apikey=b9e1684a&s=';
    const search = ({ searchText } : SearchParams) =>
    {
        const fullApiEndpoint = `${SEARCH_API_ENDPOINT}${searchText}`;
        fetch(fullApiEndpoint)
            .then(result => result.json())
            .then(data => {
                const { Response } = data;
                setHasMovies(Response);
            })
    }
    const [hasMovies, setHasMovies] = useState<boolean>(false);
    const [movies, setMovies] = useState();

    return(
        <>
            <div className="page">
                <header>
                    <form className="form">
                        <input type="text" placeholder="Harry Potter, Star Wars, Toy Story..." />
                        <button type="submit">Buscar</button>
                    </form>
                </header>

                <main>
                    Aquin iran las peliculas
                </main>
            </div>
        </>
    )
}