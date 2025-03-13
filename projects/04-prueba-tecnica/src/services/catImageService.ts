const ANOTHER_ENDPOINT : string = `https://cataas.com/cat/says/{text}?size=50&color=red&json=true`;

export const getCatImageAsync = async (fact : string ) =>
{
    const firstWords = fact.split(" ", 3).join(" ");
    const endpointWithWords = ANOTHER_ENDPOINT.replace("{text}", firstWords);
    const response = await fetch(endpointWithWords);
    if (!response.ok)
        throw new Error("No se ha podido recuperar la imagen.");
    const data = await response.json();
    const { url }  = data as { url : string };
    return url;
}