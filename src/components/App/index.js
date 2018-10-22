//change index  so import w/o additional file name
import React, { Component } from 'react';
import Series from '../../containers/Series';//child component //since index no need to say name
import './App.css';
import 'whatwg-fetch';

//custom component capitalized ex: <Mycomponent />
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Series />
      </div>
    );
  }
}

export default App;
