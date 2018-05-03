import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    container: {
        width: '298px',
        height: '278px',
        boxSizing: 'border-box',
        padding: '10px 16px 16px 16px',
        overflow: 'hidden',
    },
    title: {
        width: '100%',
        fontWeight: '600',
        fontSize: '1.1em',
        lineHeight: '1.1em',
    }
}
class MovieContent extends Component {

    render() {
        let overview = this.props.movie.overview;
        if (overview.length > 200) {
            overview = overview.substring(0, 200) + "...";
        }
        return (
            <div style={styles.container}>
                <p style={styles.title}>{this.props.movie.title}</p>
                <p>{overview}</p>
            </div>
        );
    }
}

MovieContent.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        overview: PropTypes.string,
    }),
}
export default MovieContent;