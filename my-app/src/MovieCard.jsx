import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
  </div>        
  );
}

export default MovieCard;