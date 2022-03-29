import DetailedGameInfo from '../components/DetailedGameInfo';

const Games = (props) => {
	return (
		<div className="game-catalog-container">
			{props.gamePageData.results.map((data, index) => {
				return <DetailedGameInfo data={data} key={index} />;
			})}
		</div>
	);
};
export default Games;
