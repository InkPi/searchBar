import React, { Component } from 'react';
import Loader from '../../components/loader';

//console folder match>params>id
class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/search/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    //console.log(this.props);
    //<p>...{this.props.match.params.id</p>
    return (
      <div>
        <p>Single Series - the show id will be</p>
      </div>
    )
  }
}

export default SingleSeries;
