import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Games = (props) => {
	const [ currentGameImage, setCurrentGameImage ] = useState([]);
	const [ currentGameTitle, setCurrentGameTitle ] = useState([]);
	const fetchData = async () => {
		const allFetchedData = props.gamePageData.map((data) => {
			setCurrentGameTitle(data.name);
			setCurrentGameImage(data.name);
		});
	};

	const handleFilterChange = (event) => {
		event.preventDefault();
		console.log('hey');
	};

	return (
		<div className="game-catalog-container">
			{props.gamePageData.map((data, index) => {
				const { name, rating, background_image, slug } = data;
				return (
					<NavLink to="/detailedGameInfo" key={index}>
						<div
							className="game-catalog"
							onChange={(e) => handleFilterChange(e)}
							style={{ backgroundImage: `url(${background_image})` }}
						>
							<div className="modal">
								<h1>{name}</h1>
								<h1>Rating: {rating}</h1>
							</div>
						</div>
					</NavLink>
				);
			})}
		</div>
	);
};
export default Games;

// const fetchData = async () => {
// 	const response = await axios.get(API_URL);
// 	console.log(response.data.results);
// 	const result = response.data.results.map((data) => data.background_image);
// 	setCurrentGameImage(result);
// };

// const detailedInfo = async () => {
// 	return <DetailedGameInfo />;
// 	// return detailedData
// 	// const fetchedDetails = await axios.get(API_URL_DETAILS + name);
// 	// console.log(fetchedDetails);
// 	// return (
// 	// 	<div>
// 	// 		<h1>{fetchedDetails.name}</h1>
// 	// 	</div>
// 	// );
// };

// import { detailedData } from '../services/detailedData';
// import axios from 'axios';
// import API_URL from '../services/data';
// import { API_URL_DETAILS } from '../services/data';
