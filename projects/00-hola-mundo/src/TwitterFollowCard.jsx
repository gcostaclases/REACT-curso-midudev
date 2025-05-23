//Para hacer que isFollowing ahora sea un estado y no una prop vamos a importar useState
//que es un hook que viene a ser como una utilidad
//Los hooks nos permiten añadir cierta funcionalidad a los componentes de react
//El useState nos va a servir para poder guardar una variable que nos diga si estamos
//o no estamos siguiendo a un usuario
import { useState } from "react";

export function TwitterFollowCard({ userName = "unknown", children, initialIsFollowing }) {
	/*
	(PARA NO USAR 3 LINEAS DE CÓDIGO PARA DECLARAR EL ESTADO) es mejor hacer lo de abajo
	const state = useState(false); //Le tenemos que pasar entre paréntesis el valor inicial
	//esto nos devuelve un array con 2 elementos
	const isFollowing = state[0] // el primer elemento es el valor del estado
	const setIsFollowing = state[1] // el segundo elemento es una función que nos permite
	//actualizar el valor del estado
	*/
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //desestructuramos el array

	//función que se ejecuta cuando hacemos click en el botón
	const handleClick = () => {
		setIsFollowing(!isFollowing); //cambiamos el valor del estado
	};

	const imgSrc = `https://unavatar.io/${userName}`;
	console.log(isFollowing);

	//Tenemos que renderizar el texto del botón de seguir dependiendo de si ya lo
	//estamos siguiendo o no, y para ello vamos a usar un operador ternario
	const textoBoton = isFollowing ? "Siguiendo" : "Seguir";
	//si isFollowing es true, entonces el texto del botón sera "Siguiendo",
	//sino, sera "Seguir"

	//También queremos cambiar los estilos del botón según si se esta siguiendo o no
	const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" alt="El avatar de midudev" src={imgSrc} />
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className="tw-followCard-texto">{textoBoton}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	);
}
