import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard.jsx';

class MovieList extends Component {
    render() {
        const elements = this.props.movies.map((m,i) => {
            return (<MovieCard movie={m} key={i}/>)
        });
        return elements;
    }
}

MovieList.propTypes = {
    movies: PropTypes.array,
}

export default MovieList;