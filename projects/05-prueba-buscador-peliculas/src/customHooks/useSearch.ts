import { useEffect, useRef, useState } from "react";

const useSearch = () =>
{
    const [searchText, setSearchText] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    useEffect(() => validateInput(searchText),[searchText])
    const isFirstInput = useRef(true); // El useRef al ser un ref y no un estado evitamos re-renderizar el componente, sirve para controlar
    
    const validateInput = (searchText : string) =>
    {
        if(isFirstInput.current)
        {
            isFirstInput.current = searchText  === ""
            return;
        }

        if (searchText === "")
        {
            setError("No se puede buscar una pelicula vacia.");
            return;
        }

        setError(null);
    }

    return { searchText, setSearchText, error }
}

export default useSearch;