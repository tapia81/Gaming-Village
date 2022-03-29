import { NavLink } from 'react-router-dom';
import logoSVG from '../assets/gaming-village-icon.svg';

const Navbar = () => {
	return (
		<div className="header">
			<ul>
				<div className="links">
					<NavLink to="/" className="nav-link-container">
						<img src={logoSVG} alt="Logo Image" id="image-icon" />
					</NavLink>

					<NavLink to="/" className="nav-link-container">
						<img className="nav-link" id="nav-icon" src={require('../assets/home.png')} alt="" />
						<li className="nav-link">Home</li>
					</NavLink>

					<NavLink to="/games" className="nav-link-container">
						<img id="nav-icon" src={require('../assets/game-controller.png')} alt="" />
						<li className="nav-link">Recent Games</li>
					</NavLink>

					<NavLink to="/genres" className="nav-link-container">
						<img
							className="nav-link"
							id="nav-icon"
							src={require('../assets/2913105_battle_fantasy_medieval_steel_sword_icon.png')}
							alt=""
						/>
						<li className="nav-link">Genres</li>
					</NavLink>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
