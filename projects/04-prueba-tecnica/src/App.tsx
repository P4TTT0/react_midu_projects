import React, { useEffect, useState } from "react";
import "./App.css"
import { getFactAsync } from "./services/catFactService";
import { useCatImage } from "./customHooks/useCatImage";
import { useError } from "./contexts/errorContext";
import { enqueueSnackbar } from "notistack";

export const App : React.FC = () =>
{
    const updateFact = () =>
    {
        getFactAsync()
            .then(fact => setFact(fact))
            .catch(error => showError(error));
    } 

    const [fact, setFact] = useState<string>();
    const { imageUrl } = useCatImage({fact});
    const { showError } = useError();
    useEffect(updateFact, []);

    return(
        <main>
            <header>
                <h1>App de gatitos!</h1>
                <button onClick={updateFact}>
                    Otro fact!
                </button>
            </header>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`A cat image with the first three words from the fact: ${fact}`}/>}
            </section>
        </main>
    );
}