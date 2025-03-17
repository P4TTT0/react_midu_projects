import "./App.css"
import { useCatImage } from "./customHooks/useCatImage";
import { useCatFact } from "./customHooks/useCatFact";
import React from "react";

export const App : React.FC = () =>
{
    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({fact});

    return(
        <main>
            <header>
                <h1>App de gatitos!</h1>
                <button onClick={refreshFact}>
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