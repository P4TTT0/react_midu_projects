import Square from "./Square";

interface WinnerModalProps{
    winner: string | null;
    onResetGameClick: () => void
}

const WinnerModal: React.FC<WinnerModalProps> = ({winner, onResetGameClick}) =>
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
                    {winner !== "EMPATE" && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={onResetGameClick}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}

export default WinnerModal;