import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => { console.log("I'm re-rendering!")
          return <div>Home</div> }} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>
    );
  }
}
//If we go to Movies, or movieshow console.log("I'm re-rendering!") doesn't print! Good!
//routerProps -> MoviesPage -> match.url --->>> routerProps -> MovieShow -> match.params.moveId
//{...routerProps} pass in all the properties from routerProps to MoviesPage

export default App;