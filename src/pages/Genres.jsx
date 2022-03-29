import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { genreData } from '../services/genreData';
const Genres = () => {
	const [ genre, setGenre ] = useState([]);
	const [ genreImage, setImageGenre ] = useState([]);

	const sortGenres = () => {
		const res = genreData.results.map((data) => {
			return data.name;
		});
		const result = genreData.results.map((data) => {
			return data.image_background;
		});
		setGenre(res);
		setImageGenre(result);
	};

	useEffect(() => {
		sortGenres();
	}, []);

	let navigate = useNavigate();
	function handleClick() {
		navigate('/genreSpecific');
	}

	return (
		<div className="genre-page-catalog">
			<h1>All Available Genres</h1>
			<ul className="genres-list">
				{genre.map((name, index) => {
					return (
						<div className="genre" key={index}>
							<li>
								<img className="genreImage" src={genreImage[index]} alt="" />
							</li>
							<li>
								<h1 className="genreTitle">{name}</h1>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
export default Genres;
