import { Link } from "./Link";

export const AboutPage = () => {
    return(
      <>
        <h1>Sobre mi</h1>
        <div>
          <img src="https://github.com/p4ttt0.png" alt="Foto de p4ttt0" />
          <p>Hola, soy @p4ttt0!</p>
        </div>
        <Link to="/">Home</Link>
      </>
    );
  }