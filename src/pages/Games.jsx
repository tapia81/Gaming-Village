import { useState, useEffect } from 'react';

const Games = (props) => {
	const [ currentGameImage, setCurrentGameImage ] = useState([]);
	const [ currentGameTitle, setCurrentGameTitle ] = useState([]);
	const fetchData = async () => {
		const allFetchedData = props.gamePageData.map((data) => {
			setCurrentGameTitle(data.name);
			setCurrentGameImage(data.name);
		});
	};

	return (
		<div className="game-catalog-container">
			{props.gamePageData.map((data, index) => {
				const { name, rating, background_image, slug } = data;
				return (
					<div className="game-catalog" key={index} style={{ backgroundImage: `url(${background_image})` }}>
						<div className="modal">
							<h1>{name}</h1>
							<h1>Rating: {rating}</h1>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Games;
