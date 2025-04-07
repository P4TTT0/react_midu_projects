import { JSX } from "react";
import { RouteType } from "../types/routeType";
import { usePath } from "../customHooks/usePath";

interface RouterProps {
    routes: RouteType[],
    defaultComponent?: () => JSX.Element
}
  
export const Router: React.FC<RouterProps> = ({ routes, defaultComponent = () => <h1>404</h1>}) => {
    const currenPath = usePath();
    const page = routes.find(route => route.path == currenPath)?.component || defaultComponent
    return page();
}