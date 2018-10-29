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
    //have to div group
    return (
      <div>
        { show === null && <Loader />}
        { show !== null &&
          <div>
            <h3>{show.name}</h3>
            <div className="details">
            <p>
              <img alt="Show" src={show.image.medium}/>
            </p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default SingleSeries;
