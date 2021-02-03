import React from 'react';
import MovieListEntry from './MovieListEntry'
var MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie, index) =>
                <MovieListEntry
                    movie={movie}
                    key={index}
                />
            )}
        </div>
    )
};

export default MovieList;