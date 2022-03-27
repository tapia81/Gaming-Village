import { useState, useEffect } from 'react';
import { genreData } from '../services/genreData';
const Genres = () => {
	const [ g, setG ] = useState([]);

	const sort = () => {
		const res = genreData.results.map((data) => {
			return data.name;
		});
		setG(res.sort());
	};

	useEffect(() => {
		sort();
	}, []);

	return (
		<div className="genre-page-catalog">
			<ul className="genres-list">
				{g.map((name, index) => {
					return (
						<div className="genre" key={index}>
							<li>
								<h1>{name}</h1>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
export default Genres;
