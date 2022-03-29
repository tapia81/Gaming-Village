import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import localData from './services/savedData';
import Games from './pages/Games';
import DetailedGameInfo from './components/DetailedGameInfo';
import Genres from './pages/Genres';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Games/*" element={<Games gamePageData={localData} />} />
				<Route path="/Genres" element={<Genres />} />
				<Route path="/DetailedGameInfo" element={<DetailedGameInfo />} />
			</Routes>
		</div>
	);
}

export default App;
