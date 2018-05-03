import React, { Component } from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends Component {

	constructor() {
		super()
		this.state = {
			movies: [],
			loading: true,
		}
	}

	async componentWillMount() {
		this.fetchData();
	}

	async fetchData() {
		this.setState({
			loading: true,
		});
		try {
			const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
		
			this.setState({
				movies: [],
				loading: false,
			});
	
			const response = await data.json();
			const allMovies = response.results;
			this.setState({
				allMovies: allMovies,
				movies: allMovies
			});
		
		} catch(e) {
			this.setState({
				error: 'Network Error',
			})
		}

		
	}

	filterMovies = (filterMoviesFromSearchBar) => {
		this.setState({
			movies: filterMoviesFromSearchBar,
		});
	}

	render() {
		return (
			<div className="App container"

			>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Flixie</h1>
				</header>
				{this.state.error &&
					<div className="alert alert-danger">{this.state.error}</div>
				}
					
				<div
					style={{
						display: 'flex',
					}}
				>
					<a
						href="#"
						onClick={e => this.fetchData()}
					>Refresh</a>
					<SearchBar
						filterMoviesCallback={this.filterMovies}
						allMovies={this.state.allMovies} />
					<div
						style={{
							width: '20px',
							height: '20px',
						}}
					>
						{this.state.loading &&
							<img src={loading}
								className="flixie-loading"
								style={{
									width: '100%',
								}}
							/>
						}
					</div>

				</div>

				<MovieList movies={this.state.movies} />

			</div>
		);
	}
}

export default App;
