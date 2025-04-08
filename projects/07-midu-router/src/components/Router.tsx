import { Children, JSX, isValidElement } from "react";
import { RouteType } from "../types/routeType";
import { usePath } from "../customHooks/usePath";
import { Page404 } from "./404";
import { match } from "path-to-regexp"
import React from "react";
import { Route } from "./Route";

interface RouterProps {
    routes: RouteType[],
    defaultComponent?: () => JSX.Element,
    children: React.ReactElement<typeof Route> | React.ReactElement<typeof Route>[]
}
  
export const Router: React.FC<RouterProps> = ({ routes, children, defaultComponent = Page404}) => {
    const currenPath = usePath();

    let routeParams = {}
    const routesFromChildren: RouteType[] = [];
    Children.forEach(children, child => {
        if (isValidElement<RouteType>(child) && child.type === Route) {
          routesFromChildren.push({
            path: child.props.path,
            component: child.props.component
          });
        }
      });

    const routesToUse = routes.concat(routesFromChildren);
    const page = routesToUse.find(route => {
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