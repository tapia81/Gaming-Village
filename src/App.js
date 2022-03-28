import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import localData from './services/savedData';
import Games from './pages/Games';
// import DetailedGameInfo from './components/DetailedGameInfo';
import Genres from './pages/Genres';
import Search from './pages/Search';
import CreatorsFavorites from './pages/CreatorsFavorites';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Games/*" element={<Games gamePageData={localData.results} />} />
				<Route path="/Genres" element={<Genres />} />
				<Route path="/Search" element={<Search />} />
				<Route path="/CreatorsFavorites" element={<CreatorsFavorites />} />
				{/* <Route path="/DetailedGameInfo" element={<DetailedGameInfo gamePageData={localData.results} />} /> */}
			</Routes>
		</div>
	);
}

export default App;
