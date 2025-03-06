import Square from "./Square";

interface WinnerModalProps{
    winner: string | null;
}

const WinnerModal: React.FC<WinnerModalProps> = ({winner}) =>
{
    const text: string = winner === "EMPATE" ? "Empate" : "Gano:";
    if (winner === null) return;

    return(
        <section className="winner">
            <div className="text">
                <h2>
                    {text}
                </h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}

export default WinnerModal;