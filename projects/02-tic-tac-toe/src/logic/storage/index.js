export const saveGameToStorage = ({ board, turn }) => {
	//Guardar la partida
	//Llamamos al localStorage - para que si recargamos la página, no se pierda el juego
	//DATO-1: Para guardar info en el localStorage se usa el método setItem
	//El primer parámetro es el nombre de la clave y el segundo es el valor que queremos guardar
	//Si la clave no existe, se crea una nueva clave, pero si ya existe, se sobrescribe el valor
	//DATO-2: el localStorage nos guarda cadenas de texto
	//o sea que si queremos guardar un objeto o un array, en este caso es un array,
	//tenemos que transformar ese valor a una cadena de texto,
	//esto lo podemos hacer con JSON.stringify
	localStorage.setItem("board", JSON.stringify(board)); //Guardamos el estado del tablero
	localStorage.setItem("turn", turn); //Guardamos el estado del turno
};

export const resetGameStorage = () => {
	//Limpiamos el localStorage
	window.localStorage.removeItem("board"); //Limpiamos el tablero
	window.localStorage.removeItem("turn"); //Limpiamos el turno
};
