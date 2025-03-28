import Filters from "./Filters"
import "./Header.css";

const Header = () =>
{
    return(
        <header className="header">
            <h1>React shop</h1>
            <Filters/>
        </header>
    )
}

export default Header;