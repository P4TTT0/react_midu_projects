import React from "react";
import Filters from "./Filters"
import "./Header.css";
import { ProductFilter } from "../types/product";

interface HeaderProps {
    changeFilters: React.Dispatch<React.SetStateAction<ProductFilter>>;
}

const Header: React.FC<HeaderProps> = ({ changeFilters }) =>
{
    return(
        <header className="header">
            <h1>React shop</h1>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}

export default Header;