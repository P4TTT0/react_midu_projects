export const SearchPage = ({ routeParams }: { routeParams: { query?: string } }) => {
    return (
        <h1>Hola, soy un buscador, has buscado: {`${routeParams.query}`}</h1>
    );
}