//change index  so import w/o additional file name
import React, { Component } from 'react';
import Intro from './components/Intro';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  state = {
    series: []
  }
  //immediate load after component been rendered
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then(response => response.json());
    //  .then((response) => {console.log(response)})
    // const series = ["Vikings", "Game of Thrones"];
    //
    // setTimeout(() => {
    //   this.setState({ series: series });
    // }, 2000);
  }
  //state: mount arg | or just {series} and applies both
  //setState tells componts+its children need to be rerendered w updated stated

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message = 'Here you can find all of your most loved series'/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
