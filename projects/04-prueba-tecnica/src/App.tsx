import React, { useEffect, useState } from "react";
import "./App.css"
import { showError } from "./functions/notify";
import { ANOTHER_ENDPOINT, CAT_FACTS_ENDPOINT } from "./constants";

export const App : React.FC = () =>
{
    const getFact = () =>
    {
        fetch(CAT_FACTS_ENDPOINT)
            .then(response =>{
                if (!response.ok)
                    throw new Error("No se ha podido recuperar el fact.");
                return response.json()
            })
            .then(data =>  {
                const { fact } = data as { fact : string };    
                setFact(fact);
            })
            .catch((error: Error) =>
            {
                setFactError(error.message)
            });
    
    }

    const getCatImage = () =>
    {
        if (fact){
            const firstWords = fact.split(" ", 3).join(" ");
            const endpointWithWords = ANOTHER_ENDPOINT.replace("{text}", firstWords);
            fetch(endpointWithWords)
                .then(response => response.json())
                .then(data => {
                    const { url }  = data as { url : string };
                    setImageUrl(url);
                })
        }
    }
    
    const [fact, setFact] = useState<string>();
    const [imageUrl, setImageUrl] = useState<string>();
    const [factError, setFactError] = useState<string>();
    useEffect(getFact, []);
    useEffect(getCatImage, [fact]);
    useEffect(() => {
        if (factError)
            showError(factError)
    }, [factError])

    return(
        <main>
            <h1>App de gatitos!</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`A cat image with the first three words from the fact: ${fact}`}/>}
            </section>
        </main>
    );
}