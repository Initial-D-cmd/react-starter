import React from 'react';
var Search = ({userSearchFunc, submitSearch}) => (
    <div id="search-field">
        <input id='search-text' type="text" placeholder="Search Movie" onChange={ (event) => { userSearchFunc(event); } }/>
        <button onClick={()=>{ submitSearch() }} >Submit</button>
    </div>
);



export default Search