import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovies from './AddMovies.js'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ],
      savedMovies: [],
      userSearch: '',
      userAdd: ''
    };
  }

  addMovie() {
    console.log('added!');
    if (this.state.userAdd.length > 0) {
      var obj = {
        title: this.state.userAdd.trim()
      }
      var newMovie = this.state.movies.concat(obj);
      this.setState({
        movies: newMovie,
        savedMovies: newMovie,
        userAdd: ''
      })
      document.getElementById('add-text').value = '';
    }
  }
  //user keystroke
  userSearchFunc(query) {
    this.setState({
      userSearch: query.target.value.trim()
    })
    console.log(this.state.userSearch);
  }
//user keystroke
  userAddFunc(title) {
    this.setState({
      userAdd: title.target.value.trim()
    })

    console.log(this.state.userAdd);
  }
  submitSearch(e) {
    var searchFound = [];
    if (this.state.userSearch.length > 0) {
      if (document.getElementById('search-field').childElementCount > 2) {
        let list = document.getElementById('search-field');
        list.removeChild(list.childNodes[2]);
      }
      for (var i = 0; i < this.state.movies.length; i++) {
        for (var j = 0; j < this.state.userSearch.length; j++) {
          if (this.state.movies[i].title.toLocaleLowerCase()[j] === this.state.userSearch.toLocaleLowerCase()[j]) {
            if (searchFound.indexOf(this.state.movies[i]) < 0) {
              searchFound.push(this.state.movies[i]);
            }
            continue;
          }
          if (this.state.movies[i].title[j] !== this.state.userSearch[j] && j > 0) {
          }
        }
      }
      if (searchFound.length === 0) {
        var node = document.createElement('div');
        var text = document.createTextNode("no movie by that name found");
        node.appendChild(text);
        document.getElementById('search-field').appendChild(node);
      }
      this.setState({
        movies: searchFound,
        userSearch: ''
      })
    } else {
      this.setState({
        movies: this.state.savedMovies,
        userSearch: ''
      })
      if (document.getElementById('search-field').childElementCount > 2) {
        let list = document.getElementById('search-field');
        list.removeChild(list.childNodes[2]);
      }
    }
    document.getElementById('search-text').value = '';
  }


  render() {
    return (
      <div>
        <AddMovies addMovie={this.addMovie.bind(this)} userAddFunc={this.userAddFunc.bind(this)} />

        <Search userSearchFunc={this.userSearchFunc.bind(this)} submitSearch={this.submitSearch.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
