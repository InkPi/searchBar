//change index  so import w/o additional file name
import React, { Component } from 'react';
import Main from '../../components/Main';//child component //since index no need to say name
import './App.css';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';

//custom component capitalized ex: <Mycomponent />
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={`/`}><h1 className="App-title">TV Series List</h1></Link>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
