import { Link } from "./Link";

export const HomePage = () => {
    return (
      <>
        <h1>Home</h1>
        <p>React Router de @p4ttt0 gracias a @MiduDev</p>
        <Link to="/about">Sobre mi</Link>
      </>
    );
}