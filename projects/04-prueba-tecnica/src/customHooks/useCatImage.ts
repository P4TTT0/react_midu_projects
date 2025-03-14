import { useEffect, useState } from "react";
import { getCatImageAsync } from "../services/catImageService";
import { useError } from "../contexts/errorContext";

interface CatImageParams {
    fact: string | undefined;
}

interface UseCatImageReturn {
    imageUrl: string | undefined;
}

//CUSTOM HOOK. En ellos podemos utilizar hooks dentro.
export const useCatImage = ({ fact } : CatImageParams): UseCatImageReturn => 
{
    //State interno
    const [imageUrl, setImageUrl] = useState<string>();
    const { showError } = useError();
    
    //Effect interno.
    useEffect(() => {
        if (fact) 
        {
            getCatImageAsync(fact)
                .then(url => { 
                    setImageUrl(url)
                })
                .catch(error => showError(error));
        }
    }, [fact]);

    return { imageUrl }
}