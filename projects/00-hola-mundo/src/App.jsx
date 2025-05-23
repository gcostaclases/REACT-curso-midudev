import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

//Renderizado de listas
//cuando hagamos un fetch a una api la info nos va a venir en listas
const users = [
	{
		userName: "midudev",
		name: "Miguel Ángel Durán",
		isFollowing: true,
	},
	{
		userName: "xsnowly",
		name: "Snowly",
		isFollowing: false,
	},
	{
		userName: "kainsvart",
		name: "Kainsvart",
		isFollowing: true,
	},
];

export function App() {
	return (
		<section className="App">
			{
				//Para renderizar un componente por cada elemento de una lista
				//usamos el método map
			}
			{
				//Esto lo envolvemos en llaves porque lo que devuelve el mapeo
				//de los usuarios es lo que queremos renderizar
				/*
				users.map((user) => { //para cada usuario
					const { userName, name, isFollowing } = user; //extraemos las propiedades (la info)
					// del objeto (esto lo sacamos del user)
				} 
				*/
				users.map(({ userName, name, isFollowing }) => {
					return (
						<TwitterFollowCard
							key={userName} //es como un id, tiene que ser único para este elemento
							userName={userName}
							initialIsFollowing={isFollowing}>
							{name}
						</TwitterFollowCard>
					);
				})
			}
		</section>
	);
}
