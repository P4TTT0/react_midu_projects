export const saveOnLocalStorage = (key : string, value : any) => window.localStorage.setItem(key, JSON.stringify(value));
export const getFromLocalStorage = (key : string) => 
{
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}
export const removeFromLocalStorage = (key : string) => window.localStorage.removeItem(key);
export const clearLocalStorage = () => window.localStorage.clear();