//Importamos el square
import { Square } from "./Square.jsx";

export function WinnerModal({ winner, resetGame }) {
	// Hacemos sección con renderizado condicional
	//Null es por defecto, o sea no tenemos ganador
	if (winner === null) return null; //Si no hay ganador, no se muestra nada

	const winnerText = winner === false ? "Empate" : "Ganó: ";

	return (
		// Esto se hace si: o hay un ganador, o hay empate
		<section className="winner">
			<div className="text">
				<h2>{winnerText}</h2>

				<header className="win">{winner && <Square>{winner}</Square>}</header>

				<footer>
					<button onClick={resetGame}>Empezar de nuevo</button>
				</footer>
			</div>
		</section>
	);
}
