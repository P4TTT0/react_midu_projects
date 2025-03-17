import { useEffect, useState } from "react";
import { useError } from "../contexts/errorContext";
import { getFactAsync } from "../services/catFactService";

export const useCatFact = () =>
{
    const [fact, setFact] = useState<string>();
    const { showError } = useError();

    const refreshFact = () =>
    {
        getFactAsync()
            .then(fact => setFact(fact))
            .catch(error => showError(error));
    }

    useEffect(refreshFact, []);
    
    return { fact, refreshFact }
}