import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching : false
  }
  // //immediate load after component been rendered
  // componentDidMount() {
  //   fetch('http://api.tvmaze.com/search/shows?q=Vikings')
  //     .then(response => response.json())
  //     .then(json => this.setState({ series: json }))
  //   //  .then((response) => {console.log(response)})
  //
  //   // const series = ["Vikings", "Game of Thrones"];
  //   //
  //   // setTimeout(() => {
  //   //   this.setState({ series: series });
  //   // }, 2000);
  // }

//string interpolation
//have to be ticks
//value seriesName not shown unless setState in here
  onSeriesInputChange = e => {
    this.setState({ seriesName : e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
    // console.log(e);
    // console.log(e.target.value);
  }

  //state: mount arg | or just {series} and applies both w/ same names
  //setState tells componts+its children need to be rerendered w updated stated
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (

      <div>
        The length of series array - {this.state.series.length}
        <div>
          <input value={seriesName}
           type="text"
          onChange={this.onSeriesInputChange} />
        </div>
        <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;
