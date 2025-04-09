import { useLanguage } from "../customHooks/useLanguage";
import { useI18n } from "../translations/useI18n"
import { Link } from "./Link"

export const Page404 = () => {
    const { language } = useLanguage();
    const i18n = useI18n(language ?? 'en');
    return (
        <main style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", gap: "20px" }}>
            <h1 style={{ textAlign: "center" }}>{i18n.notFound.title}</h1>
            <img style={{ borderRadius: "50px" }} src="https://c.tenor.com/JO9fTOekW3kAAAAd/tenor.gif" alt="Pez de bob esponja mirando a su alrededor" />
            <Link to="/">{i18n.notFound.button}</Link>
        </main>
    )    
}