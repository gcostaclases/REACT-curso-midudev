//Saque otra copia mas para limpiar un poco
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
	return (
		<section className="App">
			<TwitterFollowCard userName="midudev" initialIsFollowing>
				Miguel Ángel Durán
			</TwitterFollowCard>
			<TwitterFollowCard userName="xsnowly" initialIsFollowing={false}>
				Snowly
			</TwitterFollowCard>
			<TwitterFollowCard userName="kainsvart" initialIsFollowing>
				Kainsvart
			</TwitterFollowCard>
		</section>
	);
}
