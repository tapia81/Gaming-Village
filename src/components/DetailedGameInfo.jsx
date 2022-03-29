import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

export default function DetailedGameInfo(props) {
	const [ isFlipped, setIsFlipped ] = useState(false);
	const [ isExpandWidth, setIsExpandedWidth ] = useState('30vw');
	const [ isExpandHeight, setIsExpandedHeight ] = useState('35vh');

	const handleFlipClick = () => {
		if (!isFlipped) {
			setIsExpandedWidth('98vw');
			setIsExpandedHeight('120vh');
		} else {
			setIsExpandedWidth('30vw');
			setIsExpandedHeight('35vh');
		}
		setIsFlipped((prevState) => !prevState);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection={'vertical'}>
			<div
				style={{
					height: isExpandHeight,
					width: isExpandWidth,
					backgroundImage: `url(${props.data.background_image})`
				}}
				key={'front'}
				onClick={handleFlipClick}
				className="front-of-card"
			>
				<div className="modal">
					<h1>{props.data.name}</h1>
					<h1>Metacritic Score: {props.data.metacritic}</h1>
				</div>
			</div>

			<div
				key={'back'}
				className="back-of-card"
				onClick={handleFlipClick}
				style={{ minHeight: isExpandHeight, width: isExpandWidth }}
			>
				<h1>{props.data.name}</h1>
				<img src={props.data.background_image} alt="" />
				<div className="back-of-card-details-container">
					<div className="back-of-card-left">
						<p>
							<b>Release Date:</b> {props.data.released}
						</p>
						<p>
							<b>Rating:</b> {props.data.rating}
						</p>
						<p>
							<b>Available From:</b>
						</p>
						{props.data.stores.map((data, index) => {
							return (
								<div key={index}>
									<p> {data.store.name}</p>
								</div>
							);
						})}
						<p>
							<b>Tags:</b>
						</p>
						<div className="long-data">
							{props.data.tags.map((data, index) => {
								if (data.language == 'eng') {
									return (
										<div key={index}>
											<p>{data.name},</p>
										</div>
									);
								}
							})}
						</div>
					</div>
					<div className="back-of-card-right">
						<p>
							<b>Genres:</b>
						</p>
						{props.data.genres.map((data, index) => {
							return (
								<div key={index}>
									<p>{data.name}</p>
								</div>
							);
						})}

						<p>
							<b>ESRB Rating:</b>
						</p>
						{props.data.esrb_rating !== null ? props.data.esrb_rating.name_en : console.log('No rating')}

						<p>
							<b>Available in the Following Platforms:</b>
						</p>
						<div className="long-data">
							{props.data.platforms.map((data, index) => {
								return (
									<div>
										<p key={index}>{data.platform.name}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</ReactCardFlip>
	);
}
