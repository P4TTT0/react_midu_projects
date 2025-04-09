import { useLanguage } from "../customHooks/useLanguage";
import { navigateTo } from "../logic/navigate";
import { Lang } from "../translations/useI18n";
import "./Header.css"
import { Link } from "./Link";

export const Header = () => {
    const { language, setLang } = useLanguage();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as Lang;
        setLang(value)
        navigateTo('/')
    }
    return (
        <header>
            <h1>Router clone</h1>
            <div className="options-container">
                <Link to="/">Home</Link>
                <Link to={`/${language}/about`}>About</Link>
                <Link to={`/random`}>?</Link>
                <select value={language} onChange={handleChange}>
                    <option value="es">🇪🇸</option>
                    <option value="en">🇺🇸</option>
                </select>
            </div>
        </header>
    );
}