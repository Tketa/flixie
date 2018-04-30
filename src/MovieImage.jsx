import React, { Component } from 'react';
class MovieImage extends Component {
    render() {
        return (
            <img src={this.props.url} alt=""
                style={{
                    width: '185px',
                    height: '278px',
                    padding: '10px',
                }}
            />
        );
    }
}
export default MovieImage;