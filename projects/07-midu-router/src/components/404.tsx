import { Link } from "./Link"

export const Page404 = () => {
    return (
        <main style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", gap: "20px" }}>
            <h1 style={{ textAlign: "center" }}>What r u looking 4?</h1>
            <img style={{ borderRadius: "50px" }} src="https://c.tenor.com/JO9fTOekW3kAAAAd/tenor.gif" alt="Pez de bob esponja mirando a su alrededor" />
            <Link to="/">Volver a <b>Home</b></Link>
        </main>
    )    
}