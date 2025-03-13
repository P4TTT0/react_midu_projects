import React, { useEffect, useState } from "react";
import "./App.css"
import { showError } from "./functions/notify";
import { getFactAsync } from "./services/catFactService";
import { getCatImageAsync } from "./services/catImageService";

export const App : React.FC = () =>
{
    const updateFact = () =>
    {
        getFactAsync()
            .then(fact => setFact(fact))
            .catch(error => setFactError(error));
    } 

    const updateCatImage = () =>
    {
        if (fact) 
        {
            getCatImageAsync(fact)
                .then(url => setImageUrl(url))
                .catch(error => setFactError(error));
        }
    }
    
    const [fact, setFact] = useState<string>();
    const [imageUrl, setImageUrl] = useState<string>();
    const [factError, setFactError] = useState<string>();
    useEffect(updateFact, []);
    useEffect(updateCatImage, [fact]);
    useEffect(() => {
        if (factError)
            showError(factError)
    }, [factError])

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