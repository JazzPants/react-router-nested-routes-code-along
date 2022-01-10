// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

//moviesList becomes like a "navbar" inside the MoviesPage component
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <li key={movieID}><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
  );
//use object.keys to get an array of keys, then map over this array, e.g. movieID = id: 2 in movies is the movie with title Se7en
//index number aligns with movie id number in state object from app.js, so don't really need to use IDX or I as a second argument in the map function
//movieID = [1,2,3]
//nested object - person["lastName"].example;
//use movies[movieID].title in the to={} if you want to use movie title instead of id

//Lab note: 
// The movies prop is an object containing each movie. 
// To iterate over this object, we'll use Object.keys(movies) to get an array
//  keys, then map over this array. Since the keys in the object are also
//   the id values for each movie, the elements in .map() are referred to as
//   ovieID. We can use movieID directly in some of the attributes like key,
//    but also use it to get information from the movies object, as we see
//     with movies[movieID].title.

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;