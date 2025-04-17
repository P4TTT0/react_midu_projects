import { useEffect, useState } from "react"


export function useDebounce<T> (value: T, delayInMiliseconds: number = 500)  {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(value);
            setDebouncedValue(value);
        }, delayInMiliseconds)

        return () => { clearTimeout(timer) }
    }, [value])
    
    return debouncedValue;
}