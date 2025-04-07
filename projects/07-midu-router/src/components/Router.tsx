import { JSX } from "react";
import { RouteType } from "../types/routeType";
import { usePath } from "../customHooks/usePath";
import { Page404 } from "./404";
import { match } from "path-to-regexp"
import React from "react";

interface RouterProps {
    routes: RouteType[],
    defaultComponent?: () => JSX.Element
}
  
export const Router: React.FC<RouterProps> = ({ routes, defaultComponent = Page404}) => {
    const currenPath = usePath();

    let routeParams = {}
    const page = routes.find(route => {
        if (route.path === currenPath) return true;

        const matcherUrl = match(route.path, {decode: decodeURIComponent})
        const matched = matcherUrl(currenPath);
        if(!matched) return false;

        routeParams = matched.params;
        return true;
    })?.component || defaultComponent
    const PageComponent = page;
    return React.createElement(PageComponent, { routeParams });
}