import React, { Component } from 'react';
import Loader from '../../components/Loader';

//console folder match>params>id
class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);
    //console.log(this.props);
    //<p>...{this.props.match.params.id</p>
    return (
      <div>
        { show === null && <Loader />}
        { show !== null &&
          <p>Show has been loaded</p>
        }
      </div>
    )
  }
}

export default SingleSeries;
