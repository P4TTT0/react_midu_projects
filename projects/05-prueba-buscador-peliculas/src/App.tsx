import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import useMovieSearch from "./customHooks/useMovieSearch";
import MovieList from "./components/MovieList";

export function App()
{
    const [searchText, setSearchText] = useState("");
    const { movies, isLoading } = useMovieSearch({ searchText });
    const inputRef = useRef<HTMLInputElement>(null); //Usar con cuidado, no abusar, si hay muchos inputs acceder por el evento del form.
    const [error, setError] = useState<string | null>(null);

    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault(); //Evito que se recargue la pagina.
        //Nativo:
        // const fields = new FormData(event.target as HTMLFormElement);
        // const searchInput = fields.get('searchInput');
        // setSearchText(searchInput!.toString());
        //Con react:
        // const value = inputRef.current!.value;
        // setSearchText(value);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const newSearchText = event.target!.value;
        if(newSearchText.startsWith(' ')) return;
        setSearchText(newSearchText);
    }

    const validateInput = (searchText : string) =>
    {
        if (searchText === "")
        {
            setError("No se puede buscar una pelicula vacia.");
            return;
        }

        setError("");
    }

    useEffect(() => validateInput(searchText),[searchText])

    return(
        <>
            <div className="page">
                <header>
                    <form className="form" onSubmit={handleSumbit}>
                        <input
                            name="searchInput"
                            type="text"
                            placeholder="Harry Potter, Star Wars, Toy Story..."
                            ref={inputRef}
                            onChange={handleInput}
                        />
                        <button type="submit">Buscar</button>
                    </form>
                    {error && <p style={{color: "red"}}>{error}</p>}
                </header>

                <main>
                    <MovieList Movies={movies} />
                </main>
            </div>
        </>
    )
}