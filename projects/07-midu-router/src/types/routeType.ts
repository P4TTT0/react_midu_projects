import { JSX } from "react";

export interface RouteType { 
    path: string,
    component: () => JSX.Element
}