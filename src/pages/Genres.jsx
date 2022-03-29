import { useState, useEffect } from 'react';

const Genres = (props) => {
	const [ genre, setGenre ] = useState([]);
	const [ genreImage, setImageGenre ] = useState(true);

	const sortGenres = () => {
		const res = props.gamePageData.results.map((data) => {
			return data.name;
		});
		const result = props.gamePageData.results.map((data) => {
			return data.image_background;
		});
		setGenre(res);
		setImageGenre(result);
	};

	useEffect(() => {
		sortGenres();
	}, []);

	return (
		<div className="genre-page-catalog">
			<h1>All Available Genres</h1>
			<div className="game-catalog-container">
				{props.gamePageData.results.map((data, index) => {
					<p key={index}>{data}</p>;
				})}
			</div>
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
