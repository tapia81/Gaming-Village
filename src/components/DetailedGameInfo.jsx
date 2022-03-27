import { detailedData } from '../services/detailedData';

export default function DetailedGameInfo() {
	const { name, description, released, rating } = detailedData;
	// console.log(name, description, released, rating);
	return (
		<div>
			<p>client {id}</p>
			<p>{name}</p>
			<p>{description}</p>
			<p>{released}</p>
			<p>{rating}</p>
		</div>
	);
}
