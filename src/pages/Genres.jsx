import { useState, useEffect } from 'react';
import { genreData } from '../services/genreData';
const Genres = () => {
	const [ g, setG ] = useState([]);

	const sort = () => {
		const res = genreData.results.map((data) => {
			return data.name;
		});
		setG(res.sort());
	};

	useEffect(() => {
		sort();
	}, []);

	return (
		<div className="genre-page-catalog">
			<ul className="genres-list">
				{g.map((name, index) => {
					return (
						<div className="genre" key={index}>
							<li>
								<h1>{name}</h1>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
export default Genres;

// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.items,
//             active: this.props.active,
//             direction: ''
//         }
//         this.rightClick = this.moveRight.bind(this)
//         this.leftClick = this.moveLeft.bind(this)
//     }

//     generateItems() {
//         var items = []
//         var level
//         console.log(this.state.active)
//         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = this.state.items.length + i
//             } else if (i >= this.state.items.length) {
//                 index = i % this.state.items.length
//             }
//             level = this.state.active - i
//             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
//         }
//         return items
//     }

//     moveLeft() {
//         var newActive = this.state.active
//         newActive--
//         this.setState({
//             active: newActive < 0 ? this.state.items.length - 1 : newActive,
//             direction: 'left'
//         })
//     }

//     moveRight() {
//         var newActive = this.state.active
//         this.setState({
//             active: (newActive + 1) % this.state.items.length,
//             direction: 'right'
//         })
//     }

//     render() {
//         return(
//             <div id="carousel" className="noselect">
//                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
//                 <ReactCSSTransitionGroup
//                     transitionName={this.state.direction}>
//                     {this.generateItems()}
//                 </ReactCSSTransitionGroup>
//                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
//             </div>
//         )
//     }
// }

// class Item extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             level: this.props.level
//         }
//     }

//     render() {
//         const className = 'item level' + this.props.level
//         return(
//             <div className={className}>
//                 {this.props.id}
//             </div>
//         )
//     }
// }

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))
