import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
	image: {
		width: '185px',
		height: '278px',
		padding: '10px',
	}
}

class MovieImage extends Component {
	render() {
		return (
			<img src={this.props.url} alt="" style={styles.image} />
		);
	}
}

MovieImage.propTypes = {
	url: PropTypes.string,
}

export default MovieImage