import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieImage from './MovieImage';
import MovieContent from './MovieContent';

const styles = {
    container: {
        display: 'flex',
        margin: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
    },
}
class MovieCard extends Component {
    render () {
        return (
            <div style={styles.container}>
                <MovieImage url={this.props.host + this.props.movie.poster_path} />
                <MovieContent movie={this.props.movie} />
            </div>
        );
    }
}

MovieCard.propTypes = {
    host: PropTypes.string,
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
    }),
}

export default MovieCard;