{
	//Le hice una copia para dejar los comentarios aca de lo que fuimos aprendiendo
	//y asi puedo limpiar un poco el otro archivo
}

export function TwitterFollowCard({
	//Las props deben ser inmutables

	//También podemos pasarles valores para que tengan por defecto por si llegan undefined
	userName = "unknown",
	name,
	isFollowing,
	formatUserName,
	formattedUserName,
	//Existe una prop especial llamada children que es todo lo que envuelve algo
	children,
}) {
	const imgSrc = `https://unavatar.io/${userName}`;
	console.log(isFollowing);

	//Tenemos que renderizar el texto del botón de seguir dependiendo de si ya lo
	//estamos siguiendo o no, y para ello vamos a usar un operador ternario
	const textoBoton = isFollowing ? "Siguiendo" : "Seguir";
	//si isFollowing es true, entonces el texto del botón sera "Siguiendo",
	//sino, sera "Seguir"

	//También queremos cambiar los estilos del botón según si se esta siguiendo o no
	const buttonClassName = isFollowing
		? "tw-followCard-button is-following"
		: "tw-followCard-button";

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					alt="El avatar de midudev"
					src={imgSrc}
				/>
				<div className="tw-followCard-info">
					<strong>{name}</strong>
					{
						//Probamos lo del children
					}
					{children}
					{
						//Literalmente renderiza todos los hijos que tenga este componente
						//TwitterFollowCard
					}

					<span className="tw-followCard-infoUserName">
						{formatUserName(userName)}
					</span>
					{
						//Ejemplo para mostrar el elemento que pasamos como prop
					}
					<span className="tw-followCard-infoUserName">
						{formattedUserName}
					</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName}>{textoBoton}</button>
			</aside>
		</article>
	);
}
