export const Square = ({ children, isSelected, updateBoard, index }) => {
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
