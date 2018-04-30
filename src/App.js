import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList'
// const TEST_DATA = require('./sample.json');
// console.log(TEST_DATA);


class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    }
    // let wait = ms => new Promise(resolve => setTimeout(resolve, ms))

  }

  


  async componentWillMount() {
    this.fetchData();
  }

  async fetchData() {

    this.setState({
      movies: [],
      loading: true,
    });
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
      // this.wait(2000);
      this.setState({
        movies: [],
        loading: false,
      });
    
      const response = await data.json();
      console.log(response);
      const allMovies = response.results;
      this.setState({
        allMovies: allMovies,
        movies: allMovies
      });

  }

  filterMovies(filterText) {
    console.log(filterText);
    const allMovies = this.state.allMovies;
    const filteredMovies = allMovies.filter(
      m => (m.title.toLowerCase()).indexOf(filterText.toLowerCase()) != -1
    )
    console.log(filteredMovies);
    this.setState({
      movies: filteredMovies,
    })
  }
  render() {
    // console.log(TEST_DATA);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flixie</h1>
        </header>

        <a 
          href="#" 
          className="btn btn-primary"
          onClick={e => this.fetchData()}
        >Refresh</a>

        {this.state.loading &&
        <img src={logo} 
        className="flixie-loading"/>
      }
      {/* <img src={logo} 
        className="flixie-loading"/> */}
        <input onChange={(node) => this.filterMovies(node.target.value)} />
        <MovieList movies={this.state.movies}/>

      </div>
    );
  }
}

export default App;
