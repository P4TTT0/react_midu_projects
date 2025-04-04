export const saveOnLocalStorage = <T>(key: string, value: T): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
};
  
export const getFromLocalStorage = <T>(key: string): T | null => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
};
  
export const removeFromLocalStorage = (key: string): void => {
    window.localStorage.removeItem(key);
};
  
export const clearLocalStorage = (): void => {
    window.localStorage.clear();
};
  