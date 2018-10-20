import React, { Component } from 'react';

class Series extends Component {
  state = {
    series: []
  }
  //immediate load after component been rendered
  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
      .then(response => response.json())
      .then(json => this.setState({ series: json }))
    //  .then((response) => {console.log(response)})

    // const series = ["Vikings", "Game of Thrones"];
    //
    // setTimeout(() => {
    //   this.setState({ series: series });
    // }, 2000);
  }
  //state: mount arg | or just {series} and applies both w/ same names
  //setState tells componts+its children need to be rerendered w updated stated

  render() {
    return (

      <div>The length of series array - {this.state.series.length}</div>
    )
  }
}

export default Series;
