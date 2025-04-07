import { useEffect, useState } from "react";
import { EventType } from "../types/eventType";

export const usePath = () => {
    const [currenPath, setCurrentPath] = useState<string>(window.location.pathname);
    
    useEffect(() => {
    const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EventType.PushState, onLocationChange);
    window.addEventListener(EventType.PopState, onLocationChange);

    return () => {
        window.removeEventListener(EventType.PushState, onLocationChange);
        window.removeEventListener(EventType.PopState, onLocationChange);
    }
    }, []);

    return currenPath;
}