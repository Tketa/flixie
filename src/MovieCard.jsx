import React, {Component} from 'react';
class MovieCard extends Component {
    render () {
        return (<p>{this.props.movie.title}</p>);
    }
}
export default MovieCard;