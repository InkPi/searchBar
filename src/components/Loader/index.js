import React from 'react';
import loadSrc from '../../assets/loader.gif';
//https://loading.io/spinner/typing/


const Loader = props => (
  <div>
    <img
      style={{ width: 40 }}
      alt="load icon"
      src={loadSrc} />
  </div>
)

export default Loader;
