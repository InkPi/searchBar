import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

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
//have to be ticks; string interpolation
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
        <Intro message = 'Here you can find all of your most loved series'/>
        <div>
          <input value={seriesName}
           type="text"
          onChange={this.onSeriesInputChange} />
        </div>
        {
          !isFetching && series.length === 0 && seriesName.trim() === ''
          &&
          <p>Please enter series name into input</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV series have been found with this title</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={this.state.series} />
        }
      </div>
    )
  }
}
// The length of series array - {this.state.series.length}
  //and if = empty string
  //if fetching true { isFetching &&}
  //<SeriesList list={this.state.series} />
  //add !isFetching before the last 2 so loading and <p> render same line + replace

export default Series;
