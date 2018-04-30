import React, { Component } from 'react';
class MovieContent extends Component {

    render() {
        let overview = this.props.movie.overview;
        if (overview.length > 200) {
            overview = overview.substring(0, 200) + "...";
        }
        return (
            <div style={{
                width: '298px',
                height: '278px',
                boxSizing: 'border-box',
                padding: '10px 16px 16px 16px',
                overflow: 'hidden',
            }}>
                <p
                    style={{
                        width: '100%',
                        fontWeight: '600',
                        fontSize: '1.1em',
                        lineHeight: '1.1em',
                    }}
                >{this.props.movie.title}</p>
                <p>{overview}</p>
            </div>
        );
    }
}
export default MovieContent;