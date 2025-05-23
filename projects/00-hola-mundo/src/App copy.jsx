{
	//Le hice una copia para dejar los comentarios aca de lo que fuimos aprendiendo
	//y así puedo limpiar un poco el otro archivo
}

import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

{
	/*
    Como JSX transforma el código a JS y en JS la palabra class esta reservada
    para definir clases, en JSX en vez de class usamos className
*/
}

export function App() {
	{
		//Se puede pasar como prop una función
		//Creamos una función para que agregue el @ a los usernames
	}
	const formatUserName = (userName) => `@${userName}`;

	{
		//También se puede pasar un elemento como prop
	}
	const formattedUserName = <span>@elonmusk (de formattedUserName)</span>;

	{
		//También le podemos pasar toda la info (isFollowing, userName, etc)
		//como un objeto, pero no es recomendable (a veces no hay otra opción)
		//porque 1. estamos pasando a veces info que a lo mejor no es necesaria
		//2. esto puede hacer a veces que el componente por temas de optimización
		//se renderice o se re-renderice sin necesidad (estado)
		//3. puede ser mas complejo entender que info le esta llegando al componente
	}
	const midudev = { isFollowing: true, userName: "midudev" };

	return (
		<section className="App">
			{
				// isFollowing={true} es lo mismo que isFollowing
			}
			<TwitterFollowCard isFollowing userName="midudev" formatUserName={formatUserName} name="Miguel Ángel Durán" />
			{/*
				<TwitterFollowCard {...midudev} >
					Miguel Ángel Durán
				</TwitterFollowCard>
				//... -> esto es el rest operator
				//Que lo que nos dice es: pasale cada una de las propiedades de
				//este objeto como si fuese una prop para nuestro componente TwitterFollowCard
			*/}

			<TwitterFollowCard isFollowing={false} userName="xsnowly" formatUserName={formatUserName} name="Snowly" />
			<TwitterFollowCard isFollowing userName="kainsvart" formatUserName={formatUserName} name="Kainsvart" />
			{
				//Ejemplo con el formattedUserName
				//pero lo comento porque queda horrible, era para probar nomas
			}
			{/*
				<TwitterFollowCard
				isFollowing
				userName="elonmusk"
				formatUserName={formatUserName}
				formattedUserName={formattedUserName}
				name="Elon Musk"
				/>
			*/}

			{
				//Ejemplo de children
				//pero lo comento porque queda horrible, era para probar nomas
			}
			{/*
				<TwitterFollowCard
				isFollowing
				userName="pheralb"
				formatUserName={formatUserName}>
				<h1>Pablo Hernandez</h1>
				<h2>otro texto para tener mas hijos</h2>
				<TwitterFollowCard
					isFollowing={false}
					userName="santiitobi"
					formatUserName={formatUserName}
					name="Santiago Iturra"></TwitterFollowCard>
				</TwitterFollowCard>
			*/}
		</section>
	);
}
