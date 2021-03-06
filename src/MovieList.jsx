import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		backgroundColor: '#f4f4f4',
	}
}

class MovieList extends Component {
	render() {
		const elements = this.props.movies.map((m, i) => {
			return (
				<MovieCard
					movie={m}
					key={i}
					host='https://image.tmdb.org/t/p/w185_and_h278_bestv2'
				/>
			)
		})
		return (
			<div style={styles.container}>
				{elements}
			</div>

		)
	}
}

MovieList.propTypes = {
	movies: PropTypes.array,
}

export default MovieList