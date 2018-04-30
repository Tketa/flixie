import React, { Component } from 'react';

class SearchBar extends Component {
    filterMovies(filterText) {
        const allMovies = this.props.allMovies;
        const filteredMovies = allMovies.filter(
            m => (m.title.toLowerCase()).indexOf(filterText.toLowerCase()) !== -1
        )
        this.props.filterMoviesCallback(filteredMovies);
    }

    render() {
        return (
            <div style={{
                width: '100%',
            }}>
                <input
                    style={{
                        padding: '0 30px',
                        width: '100%',
                    }}
                    onChange={(node) => this.filterMovies(node.target.value)} />
            </div>

        );
    }
}

export default SearchBar;