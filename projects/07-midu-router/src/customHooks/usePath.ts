import { useEffect, useState } from "react";
import { EventType } from "../types/eventType";
import { getCurrentPath } from "../logic/utils";

export const usePath = () => {
    const [currenPath, setCurrentPath] = useState<string>(getCurrentPath());
    
    useEffect(() => {
    const onLocationChange = () => {
        setCurrentPath(getCurrentPath());
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