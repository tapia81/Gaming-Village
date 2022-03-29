import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import DetailedGameInfo from './components/DetailedGameInfo';
import Genres from './pages/Genres';
import axios from 'axios';
import { API_URL } from './services/data';
import { API_GENRE_URL } from './services/genreData';
import { useEffect, useState } from 'react';

function App() {
	const [ apiData, setApiData ] = useState([]);
	const [ apiGenreData, setApiGenreData ] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(API_URL);
		setApiData(response.data);
	};

	const fetchGenreData = async () => {
		const response = await axios.get(API_GENRE_URL);
		setApiGenreData(response.data);
	};

	useEffect(() => {
		fetchData();
		fetchGenreData();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Games/*" element={<Games gamePageData={apiData} />} />
				<Route path="/Genres" element={<Genres gamePageData={apiGenreData} />} />
				<Route path="/DetailedGameInfo" element={<DetailedGameInfo />} />
			</Routes>
		</div>
	);
}

export default App;
