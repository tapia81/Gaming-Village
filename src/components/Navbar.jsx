import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="header">
			<ul>
				<div className="links">
					<NavLink to="/">
						<img src={require('../assets/gaming-village.png')} alt="Logo Image" id="image-icon" />
					</NavLink>

					<NavLink to="/">
						<li className="nav-link">Home</li>
					</NavLink>

					<NavLink to="/games">
						<li className="nav-link">Games</li>
					</NavLink>

					<NavLink to="/genres">
						<li className="nav-link">Genres</li>
					</NavLink>

					<NavLink to="/search">
						<li className="nav-link">Search</li>
					</NavLink>

					<NavLink to="/creatorsFavorites">
						<li className="nav-link">Creator's Favorites</li>
					</NavLink>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
