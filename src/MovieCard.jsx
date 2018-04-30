import React, {Component} from 'react';
import MovieImage from './MovieImage';
import MovieContent from './MovieContent';

class MovieCard extends Component {

   

    render () {
        return (
            <div
                style={{
                    display: 'flex',
                    margin: '20px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                }}
            >
                
                <MovieImage 
                    url={this.props.host + this.props.movie.poster_path}
                
                />

                <MovieContent 
                    movie={this.props.movie} 
                    style={{
                    }}
                />
            </div>
        );
    }
}
export default MovieCard;