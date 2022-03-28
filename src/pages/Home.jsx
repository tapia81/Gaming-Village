import { useRef } from 'react';
import sqaureEnixSVG from '../assets/square-enix-1.svg';
import capcomSVG from '../assets/capcom-logo-1-.svg';
import bandaiSVG from '../assets/bandai-1.svg';
import rockstarSVG from '../assets/rockstar-games.svg';
import activisionSVG from '../assets/activision-2.svg';
const Home = () => {
	return (
		<div className="home-page">
			<div className="container">
				<div className="home-page-text">
					<h2>Gaming Village</h2>
					<p>Learn More About Your Favorite Games</p>
				</div>
				<div className="home-page-image" />
			</div>
			<div className="container">
				<div className="home-page-image" />
				<div className="home-page-text">
					<h2>Gaming Village</h2>
					<p>Check Different Platforms</p>
					<div className="platform-container">
						<img
							className="platform-icon"
							src={require('../assets/4518902_nintendo_switch_icon.png')}
							alt=""
						/>
						<img className="platform-icon" src={require('../assets/4375141_logo_xbox_icon.png')} alt="" />
						<img
							className="platform-icon"
							src={require('../assets/3069713_circle_gaming_playstation_round icon_icon.png')}
							alt=""
						/>
						<img
							className="platform-icon"
							src={require('../assets/2993761_social media_steam_icon.png')}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="home-page-text">
					<h2>Gaming Village</h2>
					<p>Who Created Your Favorite Games</p>
					<div className="studio-container">
						<img className="studio-icon" src={rockstarSVG} alt="" />
						<img className="studio-icon" src={capcomSVG} alt="" />
						<img className="studio-icon" src={sqaureEnixSVG} alt="" />
						<img className="studio-icon" src={activisionSVG} alt="" />
						<img className="studio-icon" src={bandaiSVG} alt="" />
					</div>
				</div>
				<div className="home-page-image" />
			</div>
		</div>
	);
};
export default Home;
