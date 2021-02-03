import React from 'react';

var AddMovies = ({ addMovie, userAddFunc }) => (
    <div>
        <input id='add-text' type="text" placeholder="Add Movie" onChange={(event) => { userAddFunc(event); }} />
        <button onClick={() => { addMovie(); }} >Add</button>
    </div>
);

export default AddMovies