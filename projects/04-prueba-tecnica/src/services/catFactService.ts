const CAT_FACTS_ENDPOINT : string = "https://catfact.ninja/fact";

export const getFactAsync  = async () =>
{
    const response = await fetch(CAT_FACTS_ENDPOINT);
    if (!response.ok)
        throw new Error("No se ha podido recuperar el fact.");
    const data = await response.json();
    const { fact } = data as { fact: string; };
    return fact;
}