import React from 'react';
var MovieListEntry = ({movie}) => {
    // console.log(movie)
    return (
    <div className="movie-title" >
        {movie.title}
    </div>
    )

};

export default MovieListEntry;