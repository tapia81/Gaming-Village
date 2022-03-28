import { NavLink } from 'react-router-dom';
export default function DetailedGameInfo(props) {
	return (
		<div>
			{props.gamePageData.map((data, index) => {
				const { name, rating, background_image, slug } = data;
				return (
					<NavLink to="/gameInfo" key={index}>
						<div key={index}>
							<button>Button {index}</button>
						</div>
					</NavLink>
				);
			})}
		</div>
	);
}
