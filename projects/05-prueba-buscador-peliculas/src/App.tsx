import React, { useState } from "react";
import "./App.css";
import useMovieSearch from "./customHooks/useMovieSearch";
import MovieList from "./components/MovieList";
import useSearch from "./customHooks/useSearch";
import { useDebounce } from "@uidotdev/usehooks";

export function App()
{
    //const inputRef = useRef<HTMLInputElement>(null); //Usar con cuidado, no abusar, si hay muchos inputs acceder por el evento del form.
    
    const [sort, setSort] = useState<boolean>(false);
    const { searchText, setSearchText, error } = useSearch();
    const debouncedSearchText = useDebounce(searchText, 500);
    const { movies, isLoading } = useMovieSearch({ searchText: debouncedSearchText, sort });
    
    
    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault(); //Evito que se recargue la pagina.
        //Nativo:
        const fields = new FormData(event.target as HTMLFormElement);
        const searchInput = fields.get('searchInput');
        setSearchText(searchInput!.toString());
        // Con react:
        //const value = inputRef.current!.value;
        //setSearchText(value);
    }

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target!.value;
        if (value.startsWith(' ')) return;
        setSearchText(value);
    }

    const handleCheck = () => setSort(!sort);

    return(
        <>
            <div className="page">
                <header>
                    <h1>Buscador de peliculas</h1>
                    <form className="form" onSubmit={handleSumbit}>
                        <input
                            name="searchInput"
                            type="text"
                            placeholder="Harry Potter, Star Wars, Toy Story..."
                            onChange={handleInput}
                            value={searchText}
                        />
                        <input type="checkbox" name="sortInput" onChange={handleCheck} checked={sort}/>
                        <button type="submit">Buscar</button>
                    </form>
                    {error && <p style={{color: "red"}}>{error}</p>}
                </header>

                <main>
                    {
                        isLoading ? 
                        (
                            <p>Cargando...</p>
                        ) :
                        (
                            <MovieList Movies={movies} />
                        )
                    }
                </main>
            </div>
        </>
    )
}