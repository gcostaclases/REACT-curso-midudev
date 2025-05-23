import { useState } from "react";
import "./App.css";

const TURNS = {
	X: "x",
	O: "o",
};

const WINNER_COMBOS = [
	//Horizontal
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	//Vertical
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	//Diagonal
	[0, 4, 8],
	[2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
	//Si está seleccionado, le damos la clase is-selected, sino no se la damos
	const className = `square ${isSelected ? "is-selected" : ""}`;

	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div className={className} onClick={handleClick}>
			{children}
		</div>
	);
};

function App() {
	//Estado para el tablero
	const [board, setBoard] = useState(Array(9).fill(null));
	//Estado para los turnos
	const [turn, setTurn] = useState(TURNS.X);
	//Estado para el ganador
	const [winner, setWinner] = useState(null); //null significa que no hay ganador, false significa que hay empate

	const checkWinner = (boardToCheck) => {
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

	//Fuera de contexto - estudiando rest operator y spread operator
	/*
	const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [uno, dos, ...restoDeNumeros] = numeros;
	console.log(`rest operator ${restoDeNumeros}`);

	const numeros2 = [...numeros];
	console.log(`spread operator ${numeros2}`);
	*/

	//Función para actualizar el tablero
	const updateBoard = (index) => {
		//Cambiamos el turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		//Actualizamos el estado de los turnos
		setTurn(newTurn);
		//Cambiamos el tablero (le ponemos el x o el o)
		const newBoard = [...board];
		//El nuevo tablero recibe el indice (que es en qué posición se hizo click) y a esa posición le asignamos el turno (x u o)
		newBoard[index] = turn; //x u o
		//Actualizamos el tablero
		setBoard(newBoard);

		//Si en el índice ya hay algo, no se puede hacer click -> o sea que no se sobrescriba - No actualizamos esta posición si ya tiene algo
		//Si ya hay algo o si ya hay un ganador, no se hace nada
		if (board[index] || winner) {
			return; //Return pelado - no se hace nada
		}

		//Revisamos si hay un ganador
		const newWinner = checkWinner(newBoard);
		//Si hay un ganador, actualizamos el estado del ganador
		if (newWinner) {
			setWinner(newWinner);
			//Si no hay ganador, revisamos si hay empate
		} else if (newBoard.every((square) => square !== null)) {
			setWinner(false); //false significa que hay empate
		}
	};

	return (
		<main className="board">
			<h1>Tic Tac Toe</h1>
			<section className="game">
				{board.map((_, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{board[index]}
						</Square>
					);
				})}
			</section>

			<section className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>
		</main>
	);
}

export default App;

