import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          imageUrl={movie.imageUrl}
          synopsis={movie.synopsis}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
