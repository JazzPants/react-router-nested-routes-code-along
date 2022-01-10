// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
//({match, movies}) are props passed in from App.js
//match comes from routerProps object, contains values coming from routerProps, such as URL
//match from movieList such as match.params.movieId
//moviePage gets MoviesList movieid and passes it to movie show
const MoviesPage = ({ match, movies }) => (
  <div>
    <ul><MoviesList movies={movies} /></ul>
    {/* // Adding code to show a message to the user to select a movie if they haven't yet */}
    <Route exact path="{match.url}" render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} />}/>

    {/* <Route path={`${match.url}/:movieId`} render={<MovieShow movies={movies} />}/> */}

  </div>
)
  //match.url = http://localhost:3000/movies
    // We also add a `Route` component that will render `MovieShow`
    // when a movie is selected
    // <MovieShow/>

// ```````````````````````````````````````````
    //what is /:movieId, why the colon?
// ```````````````````````````````````````````


    //change component property to render property!!

export default MoviesPage


// .src/containers/MoviesPage.js
// import React from 'react';
// import { Route } from 'react-router-dom';
// import MoviesList from '../components/MoviesList';

// const MoviesPage = ({ match, movies }) => (
//   <div>
//     <MoviesList movies={movies} />
//   </div>
// )

// export default MoviesPage