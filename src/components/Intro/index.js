import React from 'react'; //always put for react file

//capital for custom components
//no need for () if only 1 argument
const Intro = props => (
  <p className="App-intro">
    {props.message}
  </p>
);

export default Intro;
