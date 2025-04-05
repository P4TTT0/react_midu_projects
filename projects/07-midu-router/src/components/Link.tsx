import React from "react";
import { navigateTo } from "../logic/navigate";

interface LinkProps {
    target?: string,
    to: string,
    children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ target, to, children }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const isMainEvent = event.button === 0;
        const isEventModified = event.metaKey || event.ctrlKey || event.shiftKey;
        const isManagableEvent = target === undefined || target === '_self';
        if(isMainEvent && isManagableEvent && !isEventModified) {
            event.preventDefault();
            navigateTo(to);
        }
    }
    return(
        <a onClick={handleClick} href={to} target={target}>{children}</a>
    );
}