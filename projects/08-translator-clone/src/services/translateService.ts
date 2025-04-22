import { TranslateRequest } from '../types/translate/request';

const GPT_TRANSLATE_API_ENDPOINT = 'https://gpttranslateapi.onrender.com/api/translate'; //prod
//const GPT_TRANSLATE_API_ENDPOINT = 'http://localhost:8080/api/translate'; //testing

export const translate = async (translateRequest: TranslateRequest): Promise<string> => {
    const response = await fetch(GPT_TRANSLATE_API_ENDPOINT, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(translateRequest)
    });
    var result = await response.json();
    return result.translation as string;
}