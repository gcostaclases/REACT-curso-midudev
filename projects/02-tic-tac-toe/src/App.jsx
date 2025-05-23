import { useState } from "react";
import confetti from "canvas-confetti"; //Librería para hacer confetti
//Importamos los componentes
import { Square } from "./components/Square.jsx";
//Importamos el archivo/fichero de constantes
//import { TURNS, WINNER_COMBOS } from "./constants.js";
import { TURNS } from "./constants.js";
//Importamos la lógica del tablero
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
//Importamos el modal del ganador
import { WinnerModal } from "./components/WinnerModal.jsx";
//Importamos la lógica del localStorage
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";
import "./App.css";

//Fuera de contexto - estudiando rest operator y spread operator
/*
	const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const [uno, dos, ...restoDeNumeros] = numeros;
	console.log(`rest operator ${restoDeNumeros}`);

	const numeros2 = [...numeros];
	console.log(`spread operator ${numeros2}`);
*/

function App() {
	//DATASO: Los hooks (como el useState) siempre tienen que estar en el cuerpo de la función
	//Nunca se pueden usar dentro de un if, for, while, etc.

	/*
	//Estado para el tablero
	const [board, setBoard] = useState(Array(9).fill(null));
	//Estado para los turnos
	const [turn, setTurn] = useState(TURNS.X);
	*/

	console.log("render");
	//const boardFromStorage = window.localStorage.getItem("board"); //ESTO ES LENTO!!!!

	//Cambio estos dos (el estado del tablero y del turno) usando el localStorage
	//En vez de pasarle el valor inicial al useState, le pasamos una función
	const [board, setBoard] = useState(() => {
		console.log("inicializar estado del board");
		//ES IMPORTANTE recuperar el localStorage cuando se inicializa el estado
		//o sea, dentro de esta función, porque el estado se inicializa una sola vez
		//si nosotros ponemos esto fuera de esta función, se va a recuperar cada vez que se renderiza el componente, y esto es muy lento!!
		//Recuperamos el tablero del localStorage
		const boardFromStorage = window.localStorage.getItem("board");
		//Y si tengo algo guardado, lo parseamos (volvemos el array/objeto a su forma original)
		// y lo devolvemos
		//Sino le pasamos el valor inicial, como teníamos antes, que es el array de 9 posiciones vacías
		return boardFromStorage
			? JSON.parse(boardFromStorage)
			: Array(9).fill(null);
	});

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem("turn");
		return turnFromStorage ?? TURNS.X; //Si no hay nada guardado, le pasamos el valor inicial
	});

	//Estado para el ganador
	const [winner, setWinner] = useState(null); //null significa que no hay ganador, false significa que hay empate

	const resetGame = () => {
		//Volvemos al estado inicial el tablero, el turno y el ganador
		setBoard(Array(9).fill(null)); //Reseteamos el tablero
		setTurn(TURNS.X); //Reseteamos el turno
		setWinner(null); //Reseteamos el ganador

		//Limpiamos el localStorage
		resetGameStorage();
	};

	//Función para actualizar el tablero
	const updateBoard = (index) => {
		//Si en el índice ya hay algo, no se puede hacer click -> o sea que no se sobrescriba - No actualizamos esta posición si ya tiene algo
		//Si ya hay algo o si ya hay un ganador, no se hace nada
		if (board[index] || winner) {
			return; //Return pelado - no se hace nada
		}

		//Cambiamos el tablero (le ponemos el x o el o)
		const newBoard = [...board];
		//El nuevo tablero recibe el indice (que es en qué posición se hizo click) y a esa posición le asignamos el turno (x u o)
		newBoard[index] = turn; //x u o
		//Actualizamos el tablero
		setBoard(newBoard);

		//Cambiamos el turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		//Actualizamos el estado de los turnos
		setTurn(newTurn);

		//Guardamos el tablero y el turno en el localStorage
		saveGameToStorage({
			board: newBoard,
			turn: newTurn,
		});

		//Revisamos si hay un ganador
		const newWinner = checkWinnerFrom(newBoard);
		//Si hay un ganador, actualizamos el estado del ganador
		if (newWinner) {
			confetti(); //Llamamos a la librería de confetti
			setWinner(newWinner);
		} else if (checkEndGame(newBoard)) {
			//Si chequeamos el juego y no hay un ganador, significa que hay un empate
			setWinner(false); //seteamos el ganador como false (que significaba el empate)
		}
	};

	return (
		<main className="board">
			<h1>Tic Tac Toe</h1>
			<button onClick={resetGame}>Reset del juego</button>
			<section className="game">
				{board.map((primeraPosCuadrado, index) => {
					//primeraPosCuadrado es lo que hay en la posición del tablero
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{primeraPosCuadrado}
						</Square>
					);
				})}
			</section>

			<section className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
		</main>
	);
}

export default App;

