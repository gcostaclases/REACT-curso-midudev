//Importamos las constantes
import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			//Si en la posición a, b y c hay algo (x u o) y son iguales
			boardToCheck[a] && // Si posición 0 --> tiene x u o
			boardToCheck[a] === boardToCheck[b] && // Si posición 0 y 1 --> tiene x u o y son iguales
			boardToCheck[a] === boardToCheck[c] // Si posición 0 y 2 --> tiene x u o y son iguales
			//Esto significa que hay un ganador
		) {
			return boardToCheck[a]; //Nos devuelve x u o --> o sea nos devuelve el ganador
		}
	}
	//Si no hay ganador, devolvemos null
	return null;
};

export const checkEndGame = (newBoard) => {
	//Si el tablero no tiene espacios vacíos y no hay ganador, significa que hay un empate
	return newBoard.every((posicionCuadrado) => posicionCuadrado !== null); //Si todos los cuadrados son diferentes de null (tienen x u o), significa que hay un empate
};
